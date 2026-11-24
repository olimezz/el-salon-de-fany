import { NextRequest, NextResponse } from "next/server";
import { contactBookingSchema } from "@/lib/validation";
import { SALON_INFO } from "@/data/salon-data";

// Almacén en memoria para Rate Limiting por IP (ventana de 10 minutos, máx 5 solicitudes)
const rateLimitMap = new Map<string, { count: number; firstRequestAt: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MIN_FORM_FILL_TIME_MS = 1500; // Mínimo 1.5s desde que se renderizó el formulario (anti-bot)

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return req.headers.get("x-real-ip") || "127.0.0.1";
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    const now = Date.now();

    // 1. Verificación de Rate Limiting
    const rateEntry = rateLimitMap.get(ip);
    if (rateEntry) {
      if (now - rateEntry.firstRequestAt < RATE_LIMIT_WINDOW_MS) {
        if (rateEntry.count >= RATE_LIMIT_MAX_REQUESTS) {
          return NextResponse.json(
            {
              ok: false,
              error:
                "Has realizado demasiadas solicitudes seguidas. Por favor, espera unos minutos o contáctanos directamente por WhatsApp al 601 12 51 58.",
            },
            { status: 429 }
          );
        }
        rateEntry.count += 1;
      } else {
        rateLimitMap.set(ip, { count: 1, firstRequestAt: now });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, firstRequestAt: now });
    }

    const body = await req.json();

    // 2. Comprobación Honeypot silenciosa (si un bot rellena el campo oculto)
    if (body?.honeypot && String(body.honeypot).trim().length > 0) {
      return NextResponse.json({
        ok: true,
        message: "Solicitud recibida correctamente.",
      });
    }

    // 3. Comprobación de tiempo mínimo de compilación
    if (body?.formLoadedAt && typeof body.formLoadedAt === "number") {
      const elapsed = now - body.formLoadedAt;
      if (elapsed >= 0 && elapsed < MIN_FORM_FILL_TIME_MS) {
        return NextResponse.json(
          {
            ok: false,
            error: "Envío demasiado rápido detectado por el sistema anti-spam. Por favor, inténtalo de nuevo.",
          },
          { status: 400 }
        );
      }
    }

    // 4. Validación y Sanitización estricta con Zod
    const parsed = contactBookingSchema.safeParse(body);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message || "Por favor, revisa los datos introducidos.";
      return NextResponse.json(
        {
          ok: false,
          error: firstError,
          fieldErrors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const cleanData = parsed.data;

    // 5. Construcción de enlace directo a WhatsApp pre-formateado para agilizar la atención si el usuario lo desea
    const whatsappText = [
      `Hola *${SALON_INFO.name}*, soy *${cleanData.fullName}*.`,
      `Me gustaría solicitar cita / información para: *${cleanData.service}*.`,
      `Horario preferido: ${cleanData.preferredTime}.`,
      `Teléfono de contacto: ${cleanData.phone}${cleanData.email ? ` (${cleanData.email})` : ""}.`,
      cleanData.message ? `Comentario: ${cleanData.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappRedirectUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
      whatsappText
    )}`;

    return NextResponse.json(
      {
        ok: true,
        referenceId: `FANY-${Date.now().toString(36).toUpperCase()}`,
        message:
          "¡Gracias por tu solicitud! Hemos registrado tu petición de cita y te responderemos a la mayor brevedad.",
        whatsappRedirectUrl,
        summary: {
          fullName: cleanData.fullName,
          service: cleanData.service,
          preferredTime: cleanData.preferredTime,
        },
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error:
          "No se ha podido procesar la solicitud en este momento. Puedes escribirnos directamente por WhatsApp al 601 12 51 58.",
      },
      { status: 500 }
    );
  }
}

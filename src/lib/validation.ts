import { z } from "zod";

/**
 * Sanitiza texto eliminando etiquetas HTML/scripts, caracteres de control y espacios excesivos
 * para prevenir ataques XSS e inyección.
 */
export function sanitizeString(input: string): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/<[^>]*>?/gm, "") // elimina etiquetas HTML
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "")
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .trim();
}

export const serviceOptions = [
  "Hair Spá & Masajes Capilares Relajantes",
  "Corte para Sanear y Estilo Unisex",
  "Coloración, Mechas Balayage / Babylights",
  "Tratamientos Capilares I.C.O.N.",
  "Maderoterapia Corporal & Estética",
  "Manicura, Pedicura & Cuidado de Uñas",
  "Recogidos, Peinados y Eventos Especiales",
  "Asesoramiento Personalizado / Otra consulta",
] as const;

export const contactBookingSchema = z.object({
  fullName: z
    .string()
    .min(2, "Por favor, introduce tu nombre completo (mínimo 2 caracteres).")
    .max(90, "El nombre es demasiado largo.")
    .transform(sanitizeString),
  phone: z
    .string()
    .min(9, "Introduce un teléfono válido de contacto (mín. 9 dígitos).")
    .max(20, "Número de teléfono demasiado largo.")
    .regex(/^[+0-9\s()-]{9,20}$/, "Formato de teléfono no válido (ej. 601 12 51 58).")
    .transform(sanitizeString),
  email: z
    .string()
    .trim()
    .optional()
    .refine(
      (val) => !val || val === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
      "Si indicas un email, asegúrate de que tenga un formato válido."
    )
    .transform((val) => (val ? sanitizeString(val) : "")),
  service: z.string().min(2, "Selecciona el servicio o ritual de tu interés.").transform(sanitizeString),
  preferredTime: z
    .enum(["Mañanas (10:00 - 14:00)", "Tardes (15:00 - 19:30)", "Sábado mañana (09:00 - 13:00)", "Indiferente / Lo antes posible"])
    .default("Indiferente / Lo antes posible"),
  message: z
    .string()
    .max(800, "El mensaje no puede superar los 800 caracteres.")
    .optional()
    .transform((val) => (val ? sanitizeString(val) : "")),
  privacyConsent: z.literal(true, {
    errorMap: () => ({
      message: "Debes aceptar expresamente la Política de Privacidad para enviar tu solicitud.",
    }),
  }),
  // Campos anti-spam
  honeypot: z.string().max(0, "Detección anti-spam activada.").optional().default(""),
  formLoadedAt: z.number().optional(),
});

export type ContactBookingInput = z.infer<typeof contactBookingSchema>;

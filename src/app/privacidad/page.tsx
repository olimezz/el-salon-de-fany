import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { SALON_INFO } from "@/data/salon-data";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Política de Privacidad RGPD | El Salón de Fany (Valencia)",
  description:
    "Política de Privacidad conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD) de El Salón de Fany.",
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal">
      <header className="bg-sand border-b border-borderWarm py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="min-h-[44px] px-4 py-2 rounded-xl bg-white border border-borderWarm hover:border-terracotta text-charcoal text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-terracotta" />
            <span>Volver a El Salón de Fany</span>
          </Link>
          <span className="text-xs font-semibold uppercase tracking-widest text-terracotta">
            RGPD (UE) 2016/679 · LOPDGDD
          </span>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-terracotta text-xs font-semibold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>Protección de Datos Personales</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-charcoal">
            Política de Privacidad
          </h1>
          <p className="text-sm text-warmGray">
            Información transparente conforme al Reglamento General de Protección de Datos (UE) 2016/679 (RGPD) y
            la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los
            derechos digitales (LOPDGDD).
          </p>
        </div>

        <section className="p-6 sm:p-8 rounded-3xl bg-white border border-borderWarm shadow-editorial space-y-6 text-sm text-warmGray leading-relaxed">
          <div className="space-y-2">
            <h2 className="font-serif text-2xl font-semibold text-charcoal">
              1. Responsable del Tratamiento
            </h2>
            <ul className="space-y-1.5 bg-ivory p-4 rounded-2xl border border-borderWarm text-charcoal">
              <li>
                <strong>Responsable:</strong> {SALON_INFO.name} ([NOMBRE/RAZÓN SOCIAL DEL TITULAR] · NIF:
                [COMPLETAR NIF])
              </li>
              <li>
                <strong>Dirección postal:</strong> {SALON_INFO.fullAddress}
              </li>
              <li>
                <strong>Teléfono:</strong> +34 {SALON_INFO.phoneDisplay}
              </li>
              <li>
                <strong>Correo electrónico de contacto RGPD:</strong> {SALON_INFO.email}
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-2xl font-semibold text-charcoal">
              2. Finalidad del Tratamiento de tus Datos
            </h2>
            <p>
              Los datos personales que nos facilitas voluntariamente a través del formulario de solicitud de cita
              o contacto (nombre, teléfono, correo electrónico opcional, servicio de interés y comentarios) se
              tratan exclusivamente para:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Gestionar, confirmar o recordar tu cita previa en nuestro salón de Valencia.</li>
              <li>Responder a tus consultas de diagnóstico capilar, Hair Spá, estética o productos I.C.O.N.</li>
              <li>Mantener la comunicación necesaria previa a la prestación del servicio solicitado.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-2xl font-semibold text-charcoal">
              3. Base Jurídica (Legitimación)
            </h2>
            <p>
              La base legal para el tratamiento de tus datos es tu <strong>consentimiento expreso</strong>{" "}
              (artículo 6.1.a RGPD), otorgado al marcar la casilla obligatoria no pre-marcada antes de enviar el
              formulario, así como la aplicación de medidas precontractuales a petición tuya para la reserva de
              cita (artículo 6.1.b RGPD).
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-2xl font-semibold text-charcoal">
              4. Plazo de Conservación y Destinatarios
            </h2>
            <p>
              Tus datos se conservarán únicamente durante el tiempo necesario para atender tu solicitud o gestionar
              tu cita y, posteriormente, durante los plazos legalmente exigibles. <strong>No cedemos ni vendemos</strong>{" "}
              tus datos a terceros con fines comerciales. Si decides continuar la conversación a través de
              WhatsApp, el tratamiento en dicha plataforma se regirá además por las condiciones de privacidad de
              WhatsApp Ireland Limited.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-2xl font-semibold text-charcoal">
              5. Tus Derechos RGPD (ARSOPOL)
            </h2>
            <p>
              Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión, oposición,
              limitación del tratamiento y portabilidad, así como retirar tu consentimiento, enviando un correo a{" "}
              <strong>{SALON_INFO.email}</strong> o por escrito en <strong>{SALON_INFO.fullAddress}</strong>.
              Asimismo, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos
              (AEPD — <em>www.aepd.es</em>).
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

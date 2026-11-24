import React from "react";
import Link from "next/link";
import { ArrowLeft, Scale, MapPin, Phone, Mail } from "lucide-react";
import { SALON_INFO } from "@/data/salon-data";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Aviso Legal | El Salón de Fany (Valencia)",
  description: "Información legal conforme a la Ley 34/2002 (LSSI-CE) de El Salón de Fany en Valencia.",
};

export default function AvisoLegalPage() {
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
            Cumplimiento LSSI-CE · España
          </span>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-terracotta text-xs font-semibold uppercase tracking-widest">
            <Scale className="w-4 h-4" />
            <span>Información Legal y Titularidad</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-charcoal">Aviso Legal</h1>
          <p className="text-sm text-warmGray">
            En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio,
            de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE).
          </p>
        </div>

        <section className="p-6 sm:p-8 rounded-3xl bg-white border border-borderWarm shadow-editorial space-y-6 text-sm text-warmGray leading-relaxed">
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-semibold text-charcoal">
              1. Datos Identificativos del Titular
            </h2>
            <p>
              El presente sitio web <strong>elsalondefany.com</strong> es gestionado por el establecimiento
              comercial <strong>{SALON_INFO.name}</strong>:
            </p>
            <ul className="space-y-2 bg-ivory p-4 rounded-2xl border border-borderWarm text-charcoal">
              <li>
                <strong>Nombre Comercial:</strong> {SALON_INFO.name}
              </li>
              <li>
                <strong>Titular / Razón Social:</strong> [NOMBRE COMPLETO O RAZÓN SOCIAL DEL TITULAR] — NIF/CIF:
                [NIF/CIF DEL TITULAR]
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-terracotta shrink-0" />
                <span>
                  <strong>Domicilio del Establecimiento:</strong> {SALON_INFO.fullAddress} (España)
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-terracotta shrink-0" />
                <span>
                  <strong>Teléfono de Contacto / WhatsApp:</strong> +34 {SALON_INFO.phoneDisplay}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-terracotta shrink-0" />
                <span>
                  <strong>Correo Electrónico:</strong> {SALON_INFO.email}
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-2xl font-semibold text-charcoal">
              2. Objeto y Condiciones de Uso
            </h2>
            <p>
              El presente sitio web tiene por finalidad ofrecer información sobre los servicios de peluquería
              unisex, coloración, rituales Hair Spá, maderoterapia, manicura y estética prestados en nuestro salón
              de Valencia, así como facilitar la solicitud de cita previa y el contacto directo con nuestro equipo.
            </p>
            <p>
              El acceso y navegación por este sitio web atribuye la condición de usuario e implica la aceptación
              de las presentes condiciones de uso, comprometiéndose a hacer un uso lícito y adecuado de los
              contenidos y formularios.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-2xl font-semibold text-charcoal">
              3. Propiedad Intelectual e Industrial
            </h2>
            <p>
              Todos los textos, diseños editoriales, estructura, código fuente y elementos identificativos de{" "}
              <strong>El Salón de Fany</strong> están protegidos por la normativa española y europea de propiedad
              intelectual e industrial. Las marcas comerciales citadas (como <strong>I.C.O.N.</strong>) pertenecen
              a sus respectivos propietarios legítimos.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-2xl font-semibold text-charcoal">
              4. Legislación Aplicable y Jurisdicción
            </h2>
            <p>
              Las presentes condiciones se rigen por la legislación española vigente. Para cualquier controversia
              que pudiera derivarse del acceso o uso de este sitio web, las partes se someten a los Juzgados y
              Tribunales de la ciudad de <strong>Valencia (España)</strong>, salvo que la normativa de protección
              de consumidores y usuarios establezca otro fuero imperativo.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

"use client";

import React from "react";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  MessageCircle,
  ExternalLink,
  ShieldAlert,
  Navigation,
} from "lucide-react";
import { SALON_INFO } from "@/data/salon-data";
import { useCookieConsent } from "@/context/CookieConsentContext";
import { ContactBookingForm } from "./ContactBookingForm";

export function LocationContactSection() {
  const { preferences, saveCustomPreferences, openConfigModal } = useCookieConsent();
  const canLoadExternalMap = Boolean(preferences?.externalMedia);

  const enableMapConsent = () => {
    saveCustomPreferences({
      analytics: Boolean(preferences?.analytics),
      externalMedia: true,
    });
  };

  return (
    <section
      id="contacto"
      aria-labelledby="location-heading"
      className="py-16 sm:py-20 lg:py-24 bg-sand/70 border-b border-borderWarm scroll-mt-20"
    >
      <div id="ubicacion" className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Encabezado */}
        <div className="max-w-3xl space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ivory border border-champagne/50 text-xs font-semibold uppercase tracking-widest text-terracotta">
            <MapPin className="w-3.5 h-3.5" />
            <span>Ubicación, Horarios & Contacto Directo</span>
          </span>
          <h2
            id="location-heading"
            className="font-serif text-fluid-h2 font-semibold text-charcoal leading-tight"
          >
            Te esperamos junto a la{" "}
            <span className="italic font-normal text-terracotta">Ciudad de las Artes y las Ciencias</span>
          </h2>
          <p className="text-fluid-body text-warmGray">
            Visítanos en <strong>{SALON_INFO.fullAddress}</strong>. Puedes reservar tu cita online, escribirnos por
            WhatsApp o llamarnos directamente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Columna Izquierda: Tarjetas de Dirección, Horarios, Contacto y Mapa con Bloqueo Preventivo RGPD */}
          <div className="lg:col-span-5 space-y-6">
            {/* Tarjeta Dirección y Contacto Directo */}
            <div className="p-6 rounded-3xl bg-white border border-borderWarm shadow-editorial space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-terracotta">
                  Dirección del Salón
                </span>
                <h3 className="font-serif text-2xl font-semibold text-charcoal">{SALON_INFO.name}</h3>
                <p className="text-sm text-charcoal font-medium">{SALON_INFO.fullAddress}</p>
                <p className="text-xs text-warmGray">{SALON_INFO.neighborhood}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <a
                  href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
                    "Hola El Salón de Fany, me gustaría reservar una cita."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[46px] px-4 py-2.5 rounded-xl bg-terracotta hover:bg-terracottaDark text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>WhatsApp {SALON_INFO.phoneDisplay}</span>
                </a>

                <a
                  href={`tel:${SALON_INFO.phoneE164}`}
                  className="min-h-[46px] px-4 py-2.5 rounded-xl bg-charcoal hover:bg-terracotta text-ivory text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-champagne shrink-0" />
                  <span>Llamar al Salón</span>
                </a>
              </div>

              <div className="pt-3 border-t border-borderWarm space-y-2 text-xs sm:text-sm">
                <a
                  href={`mailto:${SALON_INFO.email}`}
                  className="flex items-center gap-2.5 text-warmGray hover:text-terracotta transition-colors min-h-[36px]"
                >
                  <Mail className="w-4 h-4 text-terracotta shrink-0" />
                  <span>{SALON_INFO.email}</span>
                </a>

                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-charcoal font-semibold hover:text-terracotta transition-colors min-h-[36px]"
                >
                  <Navigation className="w-4 h-4 text-terracotta shrink-0" />
                  <span>Cómo llegar en Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Tarjeta Horarios Completos */}
            <div className="p-6 rounded-3xl bg-white border border-borderWarm shadow-editorial space-y-4">
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-terracotta" />
                <h3 className="font-serif text-2xl font-semibold text-charcoal">Horario de Atención</h3>
              </div>

              <ul className="divide-y divide-borderWarm/70 text-xs sm:text-sm">
                {SALON_INFO.schedule.map((row) => (
                  <li key={row.days} className="py-3 flex items-center justify-between gap-3">
                    <span className="font-semibold text-charcoal">{row.days}</span>
                    <span
                      className={`px-2.5 py-1 rounded-lg font-medium ${
                        row.open ? "bg-sand text-charcoal" : "bg-ivory text-warmGray"
                      }`}
                    >
                      {row.hours}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-warmGray bg-ivory p-3 rounded-xl border border-borderWarm">
                Recomendamos reservar cita previa para garantizarte la hora que mejor se adapte a tu rutina.
              </p>
            </div>

            {/* Mapa Interactivo con Bloqueo Preventivo RGPD */}
            <div className="rounded-3xl bg-white border border-borderWarm shadow-editorial overflow-hidden">
              {canLoadExternalMap ? (
                <div className="relative aspect-[16/11] w-full">
                  <iframe
                    title="Ubicación de El Salón de Fany en Carrer d'Antonio Sacramento, 17-2, Valencia"
                    src={SALON_INFO.googleMapsEmbedUrl}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              ) : (
                <div className="p-6 bg-ivory space-y-4 text-center">
                  <div className="w-11 h-11 rounded-full bg-sand text-terracotta mx-auto flex items-center justify-center">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-serif text-xl font-semibold text-charcoal">
                      Mapa Interactivo Bloqueado por Privacidad (RGPD)
                    </h4>
                    <p className="text-xs text-warmGray leading-relaxed">
                      Para proteger tus datos personales, no cargamos recursos externos de Google Maps sin tu
                      consentimiento explícito.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
                    <button
                      type="button"
                      onClick={enableMapConsent}
                      className="min-h-[44px] w-full sm:w-auto px-4 py-2 rounded-xl bg-charcoal hover:bg-terracotta text-ivory text-xs font-semibold transition-colors"
                    >
                      Activar mapa interactivo
                    </button>
                    <button
                      type="button"
                      onClick={openConfigModal}
                      className="min-h-[44px] w-full sm:w-auto px-4 py-2 rounded-xl bg-white hover:bg-sand text-charcoal border border-borderWarm text-xs font-semibold transition-colors"
                    >
                      Configurar cookies
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Columna Derecha: Formulario Seguro de Reserva y Contacto */}
          <div className="lg:col-span-7">
            <ContactBookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}

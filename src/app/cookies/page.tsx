"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Cookie, SlidersHorizontal, CheckCircle2 } from "lucide-react";
import { useCookieConsent } from "@/context/CookieConsentContext";
import { Footer } from "@/components/Footer";

export default function CookiesPage() {
  const { preferences, openConfigModal, acceptAll, rejectAll } = useCookieConsent();

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
            Guía de Cookies AEPD / UE
          </span>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-terracotta text-xs font-semibold uppercase tracking-widest">
            <Cookie className="w-4 h-4" />
            <span>Transparencia y Control de Consentimiento</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-charcoal">
            Política de Cookies
          </h1>
          <p className="text-sm text-warmGray">
            Información detallada conforme a la Guía sobre el uso de las cookies de la Agencia Española de
            Protección de Datos (AEPD) y el artículo 22.2 de la Ley 34/2002 (LSSI-CE).
          </p>
        </div>

        {/* Panel de Estado Actual y Revocación / Modificación Instantánea */}
        <div className="p-6 rounded-3xl bg-sand border border-champagne/50 shadow-editorial space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-terracotta">
                Estado actual de tu consentimiento
              </p>
              <h2 className="font-serif text-2xl font-semibold text-charcoal">
                {preferences
                  ? `Analítica: ${preferences.analytics ? "Activada" : "Desactivada"} · Mapa externo: ${
                      preferences.externalMedia ? "Activado" : "Desactivado"
                    }`
                  : "Pendiente de elección (Solo cookies técnicas activas por defecto)"}
              </h2>
            </div>

            <button
              type="button"
              onClick={openConfigModal}
              className="min-h-[44px] px-5 py-2.5 rounded-xl bg-charcoal hover:bg-terracotta text-ivory text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4 text-champagne" />
              <span>Gestionar cookies</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-1">
            <button
              type="button"
              onClick={acceptAll}
              className="min-h-[44px] px-4 py-2 rounded-xl bg-white hover:bg-ivory text-charcoal border border-borderWarm text-xs font-semibold transition-colors"
            >
              Aceptar todas las cookies
            </button>
            <button
              type="button"
              onClick={rejectAll}
              className="min-h-[44px] px-4 py-2 rounded-xl bg-white hover:bg-ivory text-charcoal border border-borderWarm text-xs font-semibold transition-colors"
            >
              Rechazar todas las no esenciales
            </button>
          </div>
        </div>

        <section className="p-6 sm:p-8 rounded-3xl bg-white border border-borderWarm shadow-editorial space-y-6 text-sm text-warmGray leading-relaxed">
          <div className="space-y-2">
            <h2 className="font-serif text-2xl font-semibold text-charcoal">1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies y tecnologías similares (como <code>localStorage</code>) son pequeños archivos que se
              almacenan en tu navegador para recordar tus preferencias de privacidad o habilitar funcionalidades
              específicas.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-semibold text-charcoal">
              2. Categorías de Cookies utilizadas en El Salón de Fany
            </h2>
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-ivory border border-borderWarm">
                <p className="font-semibold text-charcoal flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-terracotta" />
                  <span>Cookies Técnicas Estrictamente Necesarias (Exentas de consentimiento)</span>
                </p>
                <p className="text-xs mt-1">
                  Nombre: <code>elsalondefany_rgpd_consent_v1</code> · Finalidad: Guardar tu decisión sobre la
                  aceptación o rechazo de cookies durante 180 días para no volver a mostrarte el banner en cada
                  visita.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-ivory border border-borderWarm">
                <p className="font-semibold text-charcoal">
                  Cookies Analíticas (Desactivadas por defecto salvo consentimiento)
                </p>
                <p className="text-xs mt-1">
                  Permiten medir de manera agregada las visitas y secciones más consultadas del salón para mejorar
                  nuestra carta de servicios.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-ivory border border-borderWarm">
                <p className="font-semibold text-charcoal">
                  Contenido Externo de Terceros — Google Maps (Desactivado por defecto)
                </p>
                <p className="text-xs mt-1">
                  El mapa interactivo de ubicación en Carrer d&apos;Antonio Sacramento, 17-2 permanece bloqueado
                  preventivamente hasta que pulsas &laquo;Aceptar todas&raquo; o habilitas la categoría de
                  Contenido Externo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

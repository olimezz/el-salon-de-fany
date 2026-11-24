"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, SlidersHorizontal, X, Check, Lock } from "lucide-react";
import { useCookieConsent } from "@/context/CookieConsentContext";

export function CookieBanner() {
  const {
    preferences,
    isBannerOpen,
    isConfigModalOpen,
    acceptAll,
    rejectAll,
    saveCustomPreferences,
    openConfigModal,
    closeConfigModal,
  } = useCookieConsent();

  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [externalMediaEnabled, setExternalMediaEnabled] = useState(false);

  useEffect(() => {
    if (preferences) {
      setAnalyticsEnabled(preferences.analytics);
      setExternalMediaEnabled(preferences.externalMedia);
    } else {
      setAnalyticsEnabled(false);
      setExternalMediaEnabled(false);
    }
  }, [preferences, isConfigModalOpen]);

  if (!isBannerOpen && !isConfigModalOpen) {
    return null;
  }

  return (
    <>
      {/* Banner inferior con 3 botones de igual jerarquía visual según directrices AEPD */}
      {isBannerOpen && !isConfigModalOpen && (
        <div
          role="region"
          aria-label="Aviso de privacidad y gestión de cookies"
          className="fixed inset-x-0 bottom-0 z-[70] p-3 sm:p-5 bg-charcoal/95 text-ivory backdrop-blur-md border-t border-champagne/30 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="space-y-1.5 max-w-3xl">
              <div className="flex items-center gap-2 text-champagne text-xs font-semibold uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Privacidad y Transparencia RGPD / AEPD</span>
              </div>
              <p className="text-xs sm:text-sm text-ivory/90 leading-relaxed">
                En <strong>El Salón de Fany</strong> utilizamos cookies técnicas estrictamente necesarias para el
                funcionamiento del sitio y, solo si nos das tu consentimiento explícito, cookies analíticas y de
                contenido externo (como el mapa interactivo de Google Maps). Puedes aceptar todas, rechazarlas o
                configurar tus preferencias en cualquier momento. Consulta nuestra{" "}
                <Link
                  href="/cookies"
                  className="underline decoration-champagne underline-offset-4 hover:text-champagne transition-colors"
                >
                  Política de Cookies
                </Link>{" "}
                y{" "}
                <Link
                  href="/privacidad"
                  className="underline decoration-champagne underline-offset-4 hover:text-champagne transition-colors"
                >
                  Política de Privacidad
                </Link>
                .
              </p>
            </div>

            {/* 3 Botones con idéntico peso visual y tamaño mínimo táctil 44x44px */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 shrink-0">
              <button
                type="button"
                onClick={acceptAll}
                className="min-h-[44px] px-4 py-2.5 rounded-xl border border-champagne/60 bg-ivory/10 hover:bg-terracotta hover:border-terracotta text-ivory text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-1.5"
              >
                <span>Aceptar todas</span>
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="min-h-[44px] px-4 py-2.5 rounded-xl border border-champagne/60 bg-ivory/10 hover:bg-terracotta hover:border-terracotta text-ivory text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-1.5"
              >
                <span>Rechazar todas</span>
              </button>
              <button
                type="button"
                onClick={openConfigModal}
                className="min-h-[44px] px-4 py-2.5 rounded-xl border border-champagne/60 bg-ivory/10 hover:bg-terracotta hover:border-terracotta text-ivory text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-1.5"
              >
                <SlidersHorizontal className="w-4 h-4 shrink-0" />
                <span>Configurar preferencias</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Configuración Granular de Cookies */}
      {isConfigModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-charcoal/70 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-xl rounded-2xl bg-ivory text-charcoal border border-borderWarm shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 bg-sand border-b border-borderWarm">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-terracotta" />
                <h2 id="cookie-modal-title" className="font-serif text-xl sm:text-2xl font-semibold text-charcoal">
                  Configuración de Cookies (RGPD)
                </h2>
              </div>
              <button
                type="button"
                onClick={closeConfigModal}
                aria-label="Cerrar panel de cookies"
                className="min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center text-warmGray hover:text-charcoal hover:bg-ivory transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5 text-sm text-warmGray">
              <p className="leading-relaxed">
                Respetamos tu privacidad. Aquí puedes activar o desactivar de forma granular cada categoría de
                cookies no esenciales. Por defecto permanecen <strong>desactivadas</strong> hasta que decidas
                habilitarlas.
              </p>

              {/* Categoría 1: Técnicas / Necesarias */}
              <div className="p-4 rounded-xl bg-white border border-borderWarm space-y-1.5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 font-semibold text-charcoal">
                    <Lock className="w-4 h-4 text-terracotta" />
                    <span>1. Cookies Técnicas y Necesarias</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-sand text-charcoal">
                    Siempre activas
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-warmGray">
                  Imprescindibles para recordar tu elección de privacidad, proteger los formularios contra spam y
                  garantizar la navegación segura sin seguimiento publicitario.
                </p>
              </div>

              {/* Categoría 2: Analítica */}
              <div className="p-4 rounded-xl bg-white border border-borderWarm space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="toggle-analytics" className="font-semibold text-charcoal cursor-pointer">
                    2. Cookies Analíticas y de Medición
                  </label>
                  <button
                    id="toggle-analytics"
                    type="button"
                    role="switch"
                    aria-checked={analyticsEnabled}
                    onClick={() => setAnalyticsEnabled((prev) => !prev)}
                    className={`min-w-[52px] min-h-[32px] px-1 rounded-full transition-colors flex items-center ${
                      analyticsEnabled ? "bg-terracotta justify-end" : "bg-borderWarm justify-start"
                    }`}
                  >
                    <span className="w-6 h-6 rounded-full bg-white shadow-sm block" />
                  </button>
                </div>
                <p className="text-xs leading-relaxed text-warmGray">
                  Nos ayudan a comprender de forma agregada y anónima qué secciones o servicios de peluquería y Hair
                  Spá resultan más útiles para nuestros visitantes en Valencia.
                </p>
              </div>

              {/* Categoría 3: Contenido externo / Google Maps */}
              <div className="p-4 rounded-xl bg-white border border-borderWarm space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="toggle-external" className="font-semibold text-charcoal cursor-pointer">
                    3. Contenido Externo y Mapa Interactivo (Google Maps)
                  </label>
                  <button
                    id="toggle-external"
                    type="button"
                    role="switch"
                    aria-checked={externalMediaEnabled}
                    onClick={() => setExternalMediaEnabled((prev) => !prev)}
                    className={`min-w-[52px] min-h-[32px] px-1 rounded-full transition-colors flex items-center ${
                      externalMediaEnabled ? "bg-terracotta justify-end" : "bg-borderWarm justify-start"
                    }`}
                  >
                    <span className="w-6 h-6 rounded-full bg-white shadow-sm block" />
                  </button>
                </div>
                <p className="text-xs leading-relaxed text-warmGray">
                  Permite cargar directamente el mapa interactivo de Google Maps con la ubicación del salón en Carrer
                  d&apos;Antonio Sacramento, 17-2. Si lo mantienes desactivado, no se conectará con servidores de
                  terceros hasta que lo autorices.
                </p>
              </div>
            </div>

            <div className="px-6 py-4 bg-sand border-t border-borderWarm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={rejectAll}
                  className="min-h-[44px] px-4 py-2 rounded-xl border border-charcoal/30 bg-white hover:bg-ivory text-charcoal text-xs font-semibold transition-colors"
                >
                  Rechazar todas
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="min-h-[44px] px-4 py-2 rounded-xl border border-charcoal/30 bg-white hover:bg-ivory text-charcoal text-xs font-semibold transition-colors"
                >
                  Aceptar todas
                </button>
              </div>

              <button
                type="button"
                onClick={() =>
                  saveCustomPreferences({
                    analytics: analyticsEnabled,
                    externalMedia: externalMediaEnabled,
                  })
                }
                className="min-h-[44px] px-5 py-2.5 rounded-xl bg-charcoal hover:bg-terracotta text-ivory text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>Guardar mis preferencias</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

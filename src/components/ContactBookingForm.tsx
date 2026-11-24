"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Calendar,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Send,
  ShieldCheck,
  Loader2,
} from "lucide-react";
import { contactBookingSchema, serviceOptions } from "@/lib/validation";
import { SALON_INFO } from "@/data/salon-data";

interface ContactBookingFormProps {
  defaultService?: string;
  compact?: boolean;
}

const PREFERRED_TIMES = [
  "Mañanas (10:00 - 14:00)",
  "Tardes (15:00 - 19:30)",
  "Sábado mañana (09:00 - 13:00)",
  "Indiferente / Lo antes posible",
] as const;

export function ContactBookingForm({ defaultService, compact = false }: ContactBookingFormProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState<string>(defaultService || serviceOptions[0]);
  const [preferredTime, setPreferredTime] = useState<(typeof PREFERRED_TIMES)[number]>(
    "Indiferente / Lo antes posible"
  );
  const [message, setMessage] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(false); // Estricto RGPD: Nunca pre-marcado
  const [honeypot, setHoneypot] = useState("");
  const [formLoadedAt, setFormLoadedAt] = useState<number>(Date.now());

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    referenceId: string;
    message: string;
    whatsappRedirectUrl: string;
  } | null>(null);

  useEffect(() => {
    setFormLoadedAt(Date.now());
  }, []);

  useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    }
  }, [defaultService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Validación cliente previa con Zod
    const validation = contactBookingSchema.safeParse({
      fullName,
      phone,
      email,
      service,
      preferredTime,
      message,
      privacyConsent,
      honeypot,
      formLoadedAt,
    });

    if (!validation.success) {
      const firstIssue = validation.error.issues[0]?.message || "Revisa los campos obligatorios.";
      setErrorMsg(firstIssue);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          service,
          preferredTime,
          message,
          privacyConsent,
          honeypot,
          formLoadedAt,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        setErrorMsg(
          result.error || "No hemos podido registrar tu solicitud. Inténtalo de nuevo o contáctanos por WhatsApp."
        );
        setIsSubmitting(false);
        return;
      }

      setSuccessData({
        referenceId: result.referenceId || "FANY-OK",
        message: result.message,
        whatsappRedirectUrl: result.whatsappRedirectUrl,
      });
      setIsSubmitting(false);
    } catch {
      setErrorMsg(
        "Error de conexión. Por favor, escríbenos directamente por WhatsApp al 601 12 51 58."
      );
      setIsSubmitting(false);
    }
  };

  if (successData) {
    return (
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-champagne shadow-editorial space-y-5 text-center">
        <div className="w-14 h-14 rounded-full bg-terracotta/15 text-terracotta mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full bg-sand text-charcoal text-xs font-semibold">
            Referencia: {successData.referenceId}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal">
            ¡Solicitud recibida en El Salón de Fany!
          </h3>
          <p className="text-sm text-warmGray max-w-md mx-auto leading-relaxed">{successData.message}</p>
        </div>

        <div className="p-4 rounded-2xl bg-sand/70 border border-borderWarm text-xs sm:text-sm text-charcoal space-y-3">
          <p className="font-medium">
            ¿Quieres confirmar tu hora al instante por WhatsApp con tus datos ya preparados?
          </p>
          <a
            href={successData.whatsappRedirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] w-full px-5 py-3 rounded-xl bg-terracotta hover:bg-terracottaDark text-white font-semibold text-sm inline-flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enviar confirmación inmediata por WhatsApp</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => {
            setSuccessData(null);
            setFullName("");
            setPhone("");
            setEmail("");
            setMessage("");
            setPrivacyConsent(false);
            setFormLoadedAt(Date.now());
          }}
          className="min-h-[44px] text-xs font-semibold text-warmGray hover:text-charcoal underline underline-offset-4"
        >
          Realizar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`${
        compact ? "space-y-4" : "p-6 sm:p-8 rounded-3xl bg-white border border-borderWarm shadow-editorial space-y-5"
      }`}
    >
      {!compact && (
        <div className="space-y-1.5 border-b border-borderWarm pb-4">
          <div className="flex items-center gap-2 text-terracotta text-xs font-semibold uppercase tracking-wider">
            <Calendar className="w-4 h-4" />
            <span>Solicitud de Cita Previa o Diagnóstico</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal">
            Reserva tu momento en El Salón de Fany
          </h3>
          <p className="text-xs sm:text-sm text-warmGray">
            Rellena tus datos y te confirmaremos disponibilidad por teléfono o WhatsApp desde{" "}
            <strong>{SALON_INFO.phoneDisplay}</strong>.
          </p>
        </div>
      )}

      {/* Campo Honeypot invisible para usuarios humanos pero detectable para bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_url_hp">No rellenar este campo</label>
        <input
          id="website_url_hp"
          name="website_url_hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {errorMsg && (
        <div
          role="alert"
          className="p-3.5 rounded-xl bg-red-50 border border-red-300 text-red-900 text-xs sm:text-sm flex items-start gap-2.5"
        >
          <AlertCircle className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="booking-fullname" className="block text-xs font-semibold text-charcoal">
            Nombre y apellidos <span className="text-terracotta">*</span>
          </label>
          <input
            id="booking-fullname"
            type="text"
            required
            maxLength={90}
            placeholder="Ej. María García"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-ivory border border-borderWarm focus:border-terracotta focus:outline-none text-sm text-charcoal"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="booking-phone" className="block text-xs font-semibold text-charcoal">
            Teléfono / WhatsApp <span className="text-terracotta">*</span>
          </label>
          <input
            id="booking-phone"
            type="tel"
            required
            maxLength={20}
            placeholder="Ej. 601 12 51 58"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-ivory border border-borderWarm focus:border-terracotta focus:outline-none text-sm text-charcoal"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="booking-service" className="block text-xs font-semibold text-charcoal">
            Servicio o ritual de interés <span className="text-terracotta">*</span>
          </label>
          <select
            id="booking-service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-ivory border border-borderWarm focus:border-terracotta focus:outline-none text-sm text-charcoal"
          >
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="booking-time" className="block text-xs font-semibold text-charcoal">
            Preferencia horaria
          </label>
          <select
            id="booking-time"
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value as (typeof PREFERRED_TIMES)[number])}
            className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-ivory border border-borderWarm focus:border-terracotta focus:outline-none text-sm text-charcoal"
          >
            {PREFERRED_TIMES.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="booking-email" className="block text-xs font-semibold text-charcoal">
          Correo electrónico <span className="text-warmGray font-normal">(opcional)</span>
        </label>
        <input
          id="booking-email"
          type="email"
          maxLength={120}
          placeholder="tuemail@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-ivory border border-borderWarm focus:border-terracotta focus:outline-none text-sm text-charcoal"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="booking-message" className="block text-xs font-semibold text-charcoal">
          Cuéntanos qué necesitas o tu día preferido <span className="text-warmGray font-normal">(opcional)</span>
        </label>
        <textarea
          id="booking-message"
          rows={compact ? 2 : 3}
          maxLength={800}
          placeholder="Ej. Me gustaría reservar para el viernes por la tarde un corte para sanear y ritual Hair Spá..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3.5 py-2.5 rounded-xl bg-ivory border border-borderWarm focus:border-terracotta focus:outline-none text-sm text-charcoal resize-y"
        />
      </div>

      {/* Casilla de Consentimiento Explícito RGPD no pre-marcada */}
      <div className="p-3.5 rounded-2xl bg-sand/70 border border-borderWarm space-y-2">
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={privacyConsent}
            onChange={(e) => setPrivacyConsent(e.target.checked)}
            className="mt-1 w-5 h-5 rounded border-charcoal/40 text-terracotta focus:ring-terracotta shrink-0"
          />
          <span className="text-xs text-charcoal/90 leading-relaxed">
            He leído y acepto expresamente la{" "}
            <Link
              href="/privacidad"
              className="font-semibold text-terracotta underline underline-offset-4 hover:text-charcoal"
            >
              Política de Privacidad
            </Link>{" "}
            para que <strong>El Salón de Fany</strong> gestione mi solicitud de cita o consulta.{" "}
            <span className="text-terracotta font-semibold">*</span>
          </span>
        </label>
        <p className="text-[11px] text-warmGray flex items-center gap-1.5 pl-8">
          <ShieldCheck className="w-3.5 h-3.5 text-terracotta shrink-0" />
          <span>Datos protegidos según RGPD / LOPDGDD · Sin cesiones comerciales a terceros.</span>
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-1">
        <button
          type="submit"
          disabled={!privacyConsent || isSubmitting}
          className={`min-h-[48px] flex-1 px-6 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
            privacyConsent && !isSubmitting
              ? "bg-charcoal hover:bg-terracotta text-ivory shadow-sm cursor-pointer"
              : "bg-borderWarm text-warmGray cursor-not-allowed"
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Procesando solicitud...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 text-champagne" />
              <span>Enviar solicitud de cita</span>
            </>
          )}
        </button>

        <a
          href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
            `Hola El Salón de Fany, me gustaría reservar cita para ${service}.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[48px] px-5 py-3 rounded-xl bg-sand hover:bg-champagne/30 text-charcoal border border-borderWarm font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-terracotta" />
          <span>Vía WhatsApp</span>
        </a>
      </div>
    </form>
  );
}

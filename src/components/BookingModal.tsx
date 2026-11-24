"use client";

import React from "react";
import { X, MapPin, Phone, MessageCircle } from "lucide-react";
import { ContactBookingForm } from "./ContactBookingForm";
import { SALON_INFO } from "@/data/salon-data";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function BookingModal({ isOpen, onClose, defaultService }: BookingModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-[75] flex items-center justify-center p-3 sm:p-5 bg-charcoal/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-ivory text-charcoal border border-borderWarm shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera del Modal */}
        <div className="px-6 py-4 bg-sand border-b border-borderWarm flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-terracotta font-semibold">
              Reserva Rápida · El Salón de Fany
            </p>
            <h2 id="booking-modal-title" className="font-serif text-xl sm:text-2xl font-semibold text-charcoal">
              Solicitar Cita Previa o Asesoramiento
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana de reserva"
            className="min-w-[44px] min-h-[44px] rounded-full bg-white hover:bg-charcoal hover:text-ivory text-charcoal border border-borderWarm flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Contenido Scrollable */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {/* Accesos directos de alta conversión */}
          <div className="p-4 rounded-2xl bg-white border border-borderWarm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-0.5 text-xs text-warmGray">
              <p className="font-semibold text-charcoal flex items-center gap-1.5 text-sm">
                <MapPin className="w-4 h-4 text-terracotta shrink-0" />
                <span>{SALON_INFO.fullAddress}</span>
              </p>
              <p className="pl-5">Junto a la Ciudad de las Artes y las Ciencias</p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={`tel:${SALON_INFO.phoneE164}`}
                className="min-h-[44px] px-3.5 py-2 rounded-xl bg-sand hover:bg-charcoal hover:text-ivory text-charcoal text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-terracotta" />
                <span>{SALON_INFO.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
                  `Hola El Salón de Fany, me gustaría reservar una cita${
                    defaultService ? ` para ${defaultService}` : ""
                  }.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] px-3.5 py-2 rounded-xl bg-terracotta hover:bg-terracottaDark text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp directo</span>
              </a>
            </div>
          </div>

          <ContactBookingForm defaultService={defaultService} compact />
        </div>
      </div>
    </div>
  );
}

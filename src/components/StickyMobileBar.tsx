"use client";

import React from "react";
import { Calendar, MessageCircle } from "lucide-react";
import { SALON_INFO } from "@/data/salon-data";
import { useCookieConsent } from "@/context/CookieConsentContext";

interface StickyMobileBarProps {
  onOpenBookingModal: () => void;
  hiddenByOverlay: boolean;
}

export function StickyMobileBar({ onOpenBookingModal, hiddenByOverlay }: StickyMobileBarProps) {
  const { isBannerOpen, isConfigModalOpen } = useCookieConsent();

  // Ocultar limpiamente cuando hay un drawer, modal de reserva o modal de cookies abierto
  if (hiddenByOverlay || isBannerOpen || isConfigModalOpen) {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Acciones rápidas de reserva y WhatsApp"
      className="fixed inset-x-0 bottom-0 z-40 md:hidden bg-ivory/95 backdrop-blur-md border-t border-borderWarm px-3 py-2.5 shadow-[0_-8px_24px_rgba(30,27,24,0.08)]"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <button
          type="button"
          onClick={onOpenBookingModal}
          className="min-h-[46px] px-4 py-2.5 rounded-xl bg-charcoal active:scale-[0.99] text-ivory font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-transform"
        >
          <Calendar className="w-4 h-4 text-champagne shrink-0" />
          <span>Reservar cita</span>
        </button>

        <a
          href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
            "Hola El Salón de Fany, me gustaría pedir cita o consultar un servicio."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[46px] px-4 py-2.5 rounded-xl bg-terracotta active:scale-[0.99] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-transform"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

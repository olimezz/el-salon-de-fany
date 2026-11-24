"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Calendar, Menu, X, MapPin, Sparkles, MessageCircle, Clock } from "lucide-react";
import { SALON_INFO } from "@/data/salon-data";

interface HeaderProps {
  onOpenBookingModal: (defaultService?: string) => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
}

const NAV_LINKS = [
  { href: "#servicios", label: "Servicios & Hair Spá" },
  { href: "#resenas", label: "Reseñas (122+)" },
  { href: "#equipo", label: "Fany & Equipo" },
  { href: "#galeria", label: "Galería & I.C.O.N." },
  { href: "#ubicacion", label: "Ubicación & Horarios" },
];

export function Header({ onOpenBookingModal, isDrawerOpen, setIsDrawerOpen }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  return (
    <>
      {/* Top Micro Bar informativa en Desktop */}
      <div className="hidden md:block bg-charcoal text-ivory/90 text-xs border-b border-champagne/20">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-champagne" />
              <span>{SALON_INFO.fullAddress} · Junto a Ciudad de las Artes y las Ciencias</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-ivory/75">
              <Clock className="w-3.5 h-3.5 text-champagne" />
              <span>Mar–Jue 10:00–19:00 · Vie 10:00–20:00 · Sáb 09:00–13:00</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-champagne font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Salón Oficial I.C.O.N. · Desde 2014</span>
            </span>
            <a
              href={`tel:${SALON_INFO.phoneE164}`}
              className="hover:text-champagne transition-colors font-semibold"
            >
              Tel. {SALON_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Header Principal Sticky */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ivory/95 backdrop-blur-md shadow-editorial border-b border-borderWarm py-2.5"
            : "bg-ivory/90 backdrop-blur-sm py-3.5 border-b border-borderWarm/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
          {/* Logo Monograma + Tipografía Editorial */}
          <Link
            href="/"
            className="group flex items-center gap-3 min-h-[44px] focus:outline-none"
            aria-label="El Salón de Fany - Inicio"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-charcoal text-ivory flex items-center justify-center font-serif text-xl sm:text-2xl font-semibold tracking-wider border border-champagne/50 group-hover:bg-terracotta transition-colors">
              F
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-charcoal leading-none">
                El Salón de Fany
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-terracotta font-semibold mt-1">
                Peluquería & Hair Spá · Valencia
              </span>
            </div>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="min-h-[44px] px-3.5 py-2 rounded-xl text-sm font-medium text-charcoal/85 hover:text-terracotta hover:bg-sand/70 transition-colors inline-flex items-center"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Acciones rápidas derecha */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${SALON_INFO.phoneE164}`}
              aria-label={`Llamar al salón: ${SALON_INFO.phoneDisplay}`}
              className="min-w-[44px] min-h-[44px] px-3 rounded-xl border border-borderWarm bg-white hover:border-terracotta text-charcoal inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold transition-all"
            >
              <Phone className="w-4 h-4 text-terracotta" />
              <span className="hidden sm:inline">{SALON_INFO.phoneDisplay}</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenBookingModal()}
              className="hidden sm:inline-flex min-h-[44px] px-4 sm:px-5 py-2.5 rounded-xl bg-charcoal hover:bg-terracotta text-ivory text-xs sm:text-sm font-semibold transition-all duration-200 items-center gap-2 shadow-sm hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-champagne" />
              <span>Reservar cita</span>
            </button>

            {/* Botón Menú Móvil con Touch Target >= 44x44px */}
            <button
              type="button"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              aria-expanded={isDrawerOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={isDrawerOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              className="lg:hidden min-w-[44px] min-h-[44px] rounded-xl bg-sand hover:bg-terracotta hover:text-ivory text-charcoal flex items-center justify-center transition-colors"
            >
              {isDrawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Drawer Mobile Full-Height accesible por teclado y touch */}
      {isDrawerOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menú móvil de El Salón de Fany"
          className="fixed inset-0 z-[65] lg:hidden flex flex-col bg-ivory text-charcoal overflow-y-auto"
        >
          <div className="px-4 py-3.5 border-b border-borderWarm flex items-center justify-between bg-sand/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-charcoal text-ivory flex items-center justify-center font-serif text-xl font-semibold">
                F
              </div>
              <div>
                <p className="font-serif text-xl font-semibold text-charcoal leading-none">El Salón de Fany</p>
                <p className="text-[11px] text-terracotta font-semibold uppercase tracking-wider mt-0.5">
                  Desde 2014 en Valencia
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              aria-label="Cerrar menú"
              className="min-w-[44px] min-h-[44px] rounded-xl bg-white border border-borderWarm flex items-center justify-center text-charcoal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-5 flex-1 flex flex-col justify-between gap-6">
            <nav className="space-y-2" aria-label="Enlaces del menú móvil">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsDrawerOpen(false)}
                  className="min-h-[48px] px-4 py-3 rounded-xl bg-white border border-borderWarm/80 hover:border-terracotta flex items-center justify-between font-serif text-xl font-medium text-charcoal transition-all"
                >
                  <span>{item.label}</span>
                  <span className="text-terracotta text-sm font-sans">→</span>
                </a>
              ))}
            </nav>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-sand border border-borderWarm space-y-2 text-xs text-warmGray">
                <p className="font-semibold text-charcoal flex items-center gap-1.5 text-sm">
                  <MapPin className="w-4 h-4 text-terracotta shrink-0" />
                  <span>{SALON_INFO.fullAddress}</span>
                </p>
                <p className="pl-5">Junto a la Ciudad de las Artes y las Ciencias · Valencia</p>
                <p className="pl-5 text-charcoal font-medium">
                  Mar–Jue: 10:00–19:00 · Vie: 10:00–20:00 · Sáb: 09:00–13:00
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setIsDrawerOpen(false);
                    onOpenBookingModal();
                  }}
                  className="min-h-[48px] w-full px-5 py-3 rounded-xl bg-charcoal hover:bg-terracotta text-ivory font-semibold text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <Calendar className="w-4 h-4 text-champagne" />
                  <span>Reservar cita previa</span>
                </button>

                <a
                  href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
                    "Hola El Salón de Fany, me gustaría consultar disponibilidad para una cita."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsDrawerOpen(false)}
                  className="min-h-[48px] w-full px-5 py-3 rounded-xl bg-terracotta hover:bg-terracottaDark text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp directo · {SALON_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

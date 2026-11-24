"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Calendar, Menu, X, MapPin, ShoppingBag, MessageCircle, Clock } from "lucide-react";
import { SALON_INFO } from "@/data/salon-data";

interface HeaderProps {
  onOpenBookingModal: (defaultService?: string) => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
}

const NAV_LINKS = [
  { href: "#el-salon", label: "El Salón" },
  { href: "#tienda-online", label: "Tienda Online" },
  { href: "#equipo", label: "Equipo" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
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
            <a
              href={SALON_INFO.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-champagne hover:text-white font-semibold transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Tienda Oficial I.C.O.N.</span>
            </a>
            <a
              href={`tel:${SALON_INFO.phoneE164}`}
              className="hover:text-champagne transition-colors font-semibold"
            >
              Tel. {SALON_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Header Principal Sticky con el Logo Floral Oficial */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ivory/95 backdrop-blur-md shadow-editorial border-b border-borderWarm py-2"
            : "bg-ivory/90 backdrop-blur-sm py-2.5 border-b border-borderWarm/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
          {/* Logo Floral Oficial de El Salón de Fany mimetizado en el fondo */}
          <Link
            href="/"
            className="group flex items-center gap-3 min-h-[48px] focus:outline-none shrink-0"
            aria-label="El Salón de Fany - Belleza & Spa - Inicio"
          >
            <img
              src={SALON_INFO.logoUrl}
              alt="El Salón de Fany — Belleza & Spa"
              width={185}
              height={108}
              fetchPriority="high"
              className="h-12 sm:h-15 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="min-h-[44px] px-3.5 py-2 rounded-xl text-sm font-semibold text-charcoal/85 hover:text-terracotta hover:bg-sand/70 transition-colors inline-flex items-center"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Acciones rápidas derecha */}
          <div className="flex items-center gap-2">
            <a
              href={SALON_INFO.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ir a la Tienda Online I.C.O.N."
              className="hidden xl:inline-flex min-h-[44px] px-3.5 py-2 rounded-xl border border-champagne/60 bg-ivory hover:bg-sand text-charcoal items-center gap-1.5 text-xs font-semibold transition-all"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-terracotta" />
              <span>Tienda I.C.O.N.</span>
            </a>

            <a
              href={`tel:${SALON_INFO.phoneE164}`}
              aria-label={`Llamar al salón: ${SALON_INFO.phoneDisplay}`}
              className="min-w-[44px] min-h-[44px] px-3 rounded-xl border border-borderWarm bg-ivory hover:border-terracotta text-charcoal inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold transition-all"
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
          <div className="px-4 py-3 border-b border-borderWarm flex items-center justify-between bg-sand/60">
            <img
              src={SALON_INFO.logoUrl}
              alt="El Salón de Fany — Belleza & Spa"
              width={150}
              height={88}
              className="h-11 w-auto object-contain mix-blend-multiply"
            />
            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              aria-label="Cerrar menú"
              className="min-w-[44px] min-h-[44px] rounded-xl bg-ivory border border-borderWarm flex items-center justify-center text-charcoal"
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
                  className="min-h-[48px] px-4 py-3 rounded-xl bg-white border border-borderWarm/80 hover:border-terracotta flex items-center justify-between font-serif text-xl font-semibold text-charcoal transition-all"
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
                <a
                  href={SALON_INFO.shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsDrawerOpen(false)}
                  className="min-h-[48px] w-full px-5 py-3 rounded-xl bg-white border border-champagne text-charcoal font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <ShoppingBag className="w-4 h-4 text-terracotta" />
                  <span>Ir a la Tienda Online I.C.O.N.</span>
                </a>

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
                  <span>Comenzar Chat WhatsApp · {SALON_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  SlidersHorizontal,
  Instagram,
  Facebook,
  MessageCircle,
  Heart,
} from "lucide-react";
import { SALON_INFO } from "@/data/salon-data";
import { useCookieConsent } from "@/context/CookieConsentContext";

export function Footer() {
  const { openConfigModal } = useCookieConsent();

  return (
    <footer className="bg-charcoal text-ivory pt-16 pb-24 md:pb-12 border-t border-champagne/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Columna 1: Brand & Filosofía */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-terracotta text-white flex items-center justify-center font-serif text-2xl font-semibold">
                F
              </div>
              <div>
                <p className="font-serif text-2xl font-semibold text-ivory leading-none">
                  {SALON_INFO.name}
                </p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-champagne font-semibold mt-1">
                  Desde 2014 en Valencia
                </p>
              </div>
            </div>

            <p className="text-sm text-ivory/80 leading-relaxed">
              «{SALON_INFO.claim}» Peluquería unisex, coloración consciente con productos oficiales{" "}
              <strong>I.C.O.N.</strong>, rituales <strong>Hair Spá</strong> con masaje relajante en el cuero
              cabelludo, maderoterapia y estética avanzada.
            </p>

            {/* Redes Sociales con Touch Target >= 44x44px */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={SALON_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de El Salón de Fany"
                className="min-w-[44px] min-h-[44px] rounded-xl bg-ivory/10 hover:bg-terracotta text-ivory flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SALON_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de El Salón de Fany"
                className="min-w-[44px] min-h-[44px] rounded-xl bg-ivory/10 hover:bg-terracotta text-ivory flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp directo de El Salón de Fany"
                className="min-h-[44px] px-4 rounded-xl bg-terracotta hover:bg-terracottaDark text-white text-xs font-semibold inline-flex items-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp {SALON_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-xl font-semibold text-champagne">Explorar el Salón</h3>
            <ul className="space-y-2 text-sm text-ivory/85">
              <li>
                <a href="#servicios" className="hover:text-champagne transition-colors py-1 inline-block">
                  Servicios Unisex & Hair Spá
                </a>
              </li>
              <li>
                <a href="#resenas" className="hover:text-champagne transition-colors py-1 inline-block">
                  +122 Reseñas Reales en Google
                </a>
              </li>
              <li>
                <a href="#equipo" className="hover:text-champagne transition-colors py-1 inline-block">
                  Fany, Historia & Equipo
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-champagne transition-colors py-1 inline-block">
                  Galería de Looks & Trabajos
                </a>
              </li>
              <li>
                <a href="#tienda-icon" className="hover:text-champagne transition-colors py-1 inline-block">
                  Productos Oficiales I.C.O.N.
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-champagne transition-colors py-1 inline-block">
                  Ubicación, Horarios & Cita Previa
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Horarios */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif text-xl font-semibold text-champagne flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Horarios</span>
            </h3>
            <ul className="space-y-2 text-xs text-ivory/85">
              <li>
                <p className="font-semibold text-ivory">Martes a jueves</p>
                <p className="text-champagne">10:00 – 19:00 h</p>
              </li>
              <li>
                <p className="font-semibold text-ivory">Viernes</p>
                <p className="text-champagne">10:00 – 20:00 h</p>
              </li>
              <li>
                <p className="font-semibold text-ivory">Sábado</p>
                <p className="text-champagne">09:00 – 13:00 h</p>
              </li>
              <li>
                <p className="font-semibold text-ivory/70">Domingo y lunes</p>
                <p className="text-ivory/60">Cerrado</p>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto & Ubicación */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-xl font-semibold text-champagne">Ubicación en Valencia</h3>
            <div className="space-y-2.5 text-xs sm:text-sm text-ivory/85">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                <span>
                  {SALON_INFO.fullAddress}
                  <br />
                  <span className="text-xs text-ivory/65">
                    Junto a la Ciudad de las Artes y las Ciencias
                  </span>
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-champagne shrink-0" />
                <a href={`tel:${SALON_INFO.phoneE164}`} className="hover:text-champagne transition-colors">
                  +34 {SALON_INFO.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-champagne shrink-0" />
                <a href={`mailto:${SALON_INFO.email}`} className="hover:text-champagne transition-colors">
                  {SALON_INFO.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Barra Inferior Legal & Gestión de Cookies RGPD */}
        <div className="pt-8 border-t border-ivory/15 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 text-xs text-ivory/70">
          <p className="flex items-center gap-1.5 flex-wrap">
            <span>© {new Date().getFullYear()} El Salón de Fany · Todos los derechos reservados.</span>
            <span className="hidden sm:inline">·</span>
            <span className="inline-flex items-center gap-1">
              Hecho con <Heart className="w-3.5 h-3.5 text-terracotta fill-terracotta" /> en Valencia
            </span>
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <Link href="/aviso-legal" className="hover:text-champagne underline underline-offset-4 py-1">
              Aviso Legal
            </Link>
            <Link href="/privacidad" className="hover:text-champagne underline underline-offset-4 py-1">
              Política de Privacidad
            </Link>
            <Link href="/cookies" className="hover:text-champagne underline underline-offset-4 py-1">
              Política de Cookies
            </Link>
            <button
              type="button"
              onClick={openConfigModal}
              className="min-h-[40px] px-3.5 py-1.5 rounded-xl bg-ivory/10 hover:bg-terracotta text-ivory font-semibold inline-flex items-center gap-1.5 transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-champagne" />
              <span>Gestionar cookies</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Calendar,
  MessageCircle,
  Star,
  MapPin,
  Sparkles,
  HeartHandshake,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import { SALON_INFO, SALON_CAROUSEL_SLIDES } from "@/data/salon-data";

interface HeroSectionProps {
  onOpenBookingModal: (defaultService?: string) => void;
}

export function HeroSection({ onOpenBookingModal }: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = SALON_CAROUSEL_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Carrusel dinámico que avanza automáticamente cada 4 segundos
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, prefersReducedMotion, nextSlide]);

  const activeSlide = SALON_CAROUSEL_SLIDES[currentSlide];

  return (
    <section
      id="el-salon"
      aria-labelledby="el-salon-heading"
      className="relative overflow-hidden pt-6 pb-16 sm:pt-10 sm:pb-20 lg:py-20 bg-gradient-to-b from-white via-ivory to-sand/50 border-b border-borderWarm scroll-mt-20"
    >
      {/* Elementos decorativos sutiles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-champagne/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-terracotta/10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Bloque Principal: El Salón (Información general + Carrusel dinámico automático de fotos reales) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Columna Izquierda: Logo Floral, Información de El Salón & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            {/* Emblema Floral Oficial de El Salón de Fany + Etiqueta de sección */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="bg-white px-5 py-3 rounded-2xl border border-borderWarm shadow-sm inline-flex items-center justify-center w-fit">
                <img
                  src={SALON_INFO.logoUrl}
                  alt="Logo El Salón de Fany — Belleza & Spa"
                  width={220}
                  height={112}
                  className="h-16 sm:h-20 w-auto object-contain"
                />
              </div>
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand border border-champagne/40 text-xs font-semibold uppercase tracking-widest text-terracotta">
                  <MapPin className="w-3.5 h-3.5 text-terracotta shrink-0" />
                  <span>El Salón · Valencia</span>
                </span>
                <p className="text-xs text-warmGray font-medium">
                  Junto a la Ciudad de las Artes y las Ciencias
                </p>
              </div>
            </div>

            {/* Título Principal */}
            <h1
              id="el-salon-heading"
              className="font-serif text-fluid-hero font-semibold text-charcoal leading-[1.08] tracking-tight"
            >
              Un salón familiar y profesional en el que te hacemos sentir{" "}
              <span className="italic font-normal text-terracotta">como en tu casa</span>.
            </h1>

            {/* Textos oficiales e información general de El Salón */}
            <div className="space-y-3.5 text-fluid-body text-warmGray leading-relaxed">
              <p>
                <strong className="text-charcoal font-semibold">El Salón de Fany</strong>, junto a la{" "}
                <strong className="text-charcoal font-semibold">
                  Ciudad de las Artes y las Ciencias en Valencia
                </strong>
                , tiene un ambiente desenfadado, acogedor y dinámico. Aquí cada cliente encontrará todo lo
                necesario para renovar su look y dejarse asesorar por grandes profesionales.
              </p>
              <p className="p-4 rounded-2xl bg-white/90 border-l-4 border-terracotta text-charcoal font-serif text-lg sm:text-xl italic shadow-sm">
                «{SALON_INFO.claim}»
              </p>
            </div>

            {/* Botones Oficiales: RESERVAR CITA PREVIA + COMENZAR CHAT */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => onOpenBookingModal()}
                className="min-h-[52px] px-7 py-3.5 rounded-xl bg-charcoal hover:bg-terracotta text-ivory font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-editorial hover:shadow-editorial-hover transition-all duration-200 hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-champagne shrink-0" />
                <span>Reservar cita previa</span>
              </button>

              <a
                href={`https://api.whatsapp.com/send?phone=${SALON_INFO.whatsappNumber}&text=${encodeURIComponent(
                  "Hola El Salón de Fany, me gustaría reservar una cita o realizar una consulta."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[52px] px-7 py-3.5 rounded-xl bg-terracotta hover:bg-terracottaDark text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Comenzar chat (WhatsApp)</span>
              </a>
            </div>

            {/* Mini-Prueba Social Inmediata */}
            <div className="pt-3 border-t border-borderWarm/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
              <a
                href="#resenas"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/90 border border-borderWarm hover:border-champagne transition-colors"
              >
                <Star className="w-4 h-4 text-terracotta fill-terracotta shrink-0" />
                <div>
                  <p className="font-semibold text-charcoal leading-tight">
                    +{SALON_INFO.googleReviewsCount} reseñas Google
                  </p>
                  <p className="text-[11px] text-warmGray">Clientes reales en Valencia</p>
                </div>
              </a>

              <a
                href="#tienda-online"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/90 border border-borderWarm hover:border-champagne transition-colors"
              >
                <Sparkles className="w-4 h-4 text-terracotta shrink-0" />
                <div>
                  <p className="font-semibold text-charcoal leading-tight">Salón Oficial I.C.O.N.</p>
                  <p className="text-[11px] text-warmGray">Tienda Online oficial</p>
                </div>
              </a>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/90 border border-borderWarm">
                <HeartHandshake className="w-4 h-4 text-terracotta shrink-0" />
                <div>
                  <p className="font-semibold text-charcoal leading-tight">Desde 2014</p>
                  <p className="text-[11px] text-warmGray">Trato cercano y unisex</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: CARRUSEL DINÁMICO AUTOMÁTICO DE FOTOS REALES DE EL SALÓN */}
          <div
            className="lg:col-span-6 space-y-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-champagne/50 shadow-editorial bg-charcoal aspect-[4/3] sm:aspect-[16/11]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeSlide.id}
                  src={activeSlide.image}
                  alt={`${activeSlide.title} — El Salón de Fany en Valencia`}
                  initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0.01 : 0.65, ease: "easeOut" }}
                  className="w-full h-full object-cover object-center"
                />
              </AnimatePresence>

              {/* Gradiente inferior para lectura nítida */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent pointer-events-none" />

              {/* Etiqueta superior de Carrusel Automático */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-ivory/95 backdrop-blur-md text-charcoal text-xs font-semibold shadow-sm">
                  El Salón · Foto {currentSlide + 1} de {totalSlides}
                </span>

                <button
                  type="button"
                  onClick={() => setIsPaused((prev) => !prev)}
                  aria-label={isPaused ? "Reanudar carrusel automático" : "Pausar carrusel automático"}
                  className="min-w-[44px] min-h-[44px] px-3 rounded-full bg-charcoal/75 hover:bg-terracotta text-ivory text-xs font-semibold inline-flex items-center justify-center gap-1.5 backdrop-blur-sm transition-colors"
                >
                  {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                  <span className="hidden sm:inline">{isPaused ? "Reanudar" : "Auto"}</span>
                </button>
              </div>

              {/* Botones Anterior / Siguiente sobre la imagen */}
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Foto anterior del salón"
                className="absolute left-3 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] rounded-full bg-ivory/90 hover:bg-terracotta hover:text-white text-charcoal shadow-md flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Siguiente foto del salón"
                className="absolute right-3 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] rounded-full bg-ivory/90 hover:bg-terracotta hover:text-white text-charcoal shadow-md flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Información de la diapositiva activa */}
              <div className="absolute inset-x-4 bottom-4 p-4 sm:p-5 rounded-2xl bg-charcoal/80 backdrop-blur-md border border-champagne/30 text-ivory">
                <p className="font-serif text-xl sm:text-2xl font-semibold text-ivory leading-tight">
                  {activeSlide.title}
                </p>
                <p className="text-xs sm:text-sm text-ivory/85 mt-1">{activeSlide.subtitle}</p>
              </div>
            </div>

            {/* Miniaturas interactivas del carrusel de El Salón */}
            <div className="grid grid-cols-6 gap-2" role="tablist" aria-label="Fotos de El Salón de Fany">
              {SALON_CAROUSEL_SLIDES.map((slide, index) => {
                const isActive = index === currentSlide;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Ver foto ${index + 1}: ${slide.title}`}
                    onClick={() => setCurrentSlide(index)}
                    className={`relative rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all ${
                      isActive
                        ? "border-terracotta scale-[1.03] shadow-sm"
                        : "border-transparent opacity-65 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

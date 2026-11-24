"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, MessageCircle, Star, MapPin, Sparkles, HeartHandshake, CheckCircle2 } from "lucide-react";
import { SALON_INFO } from "@/data/salon-data";

interface HeroSectionProps {
  onOpenBookingModal: (defaultService?: string) => void;
}

export function HeroSection({ onOpenBookingModal }: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.01 : 0.55, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-14 sm:pt-12 sm:pb-20 lg:py-24 bg-gradient-to-b from-ivory via-ivory to-sand/50 border-b border-borderWarm">
      {/* Elementos decorativos sutiles GPU-safe */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-champagne/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-terracotta/10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Columna Copy & Conversión (Mobile-First) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="lg:col-span-7 space-y-6"
          >
            {/* Ubicación & Posicionamiento Local */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand border border-champagne/40 text-xs sm:text-sm font-medium text-charcoal">
              <MapPin className="w-3.5 h-3.5 text-terracotta shrink-0" />
              <span>Junto a la Ciudad de las Artes y las Ciencias · Valencia</span>
            </div>

            {/* Título Principal con Tipografía Fluida clamp() */}
            <h1 className="font-serif text-fluid-hero font-semibold text-charcoal leading-[1.08] tracking-tight">
              Tu refugio de belleza,{" "}
              <span className="italic font-normal text-terracotta">Hair Spá</span> y bienestar donde sentirte
              como en casa.
            </h1>

            {/* Subtítulo persuasivo inspirado en la esencia real del salón */}
            <p className="text-fluid-lead text-warmGray leading-relaxed max-w-2xl">
              En <strong className="text-charcoal font-semibold">El Salón de Fany</strong> unimos desde 2014 un
              trato cercano y familiar con alta peluquería unisex, coloración consciente con productos{" "}
              <strong className="text-charcoal font-semibold">I.C.O.N.</strong>, masajes relajantes en el cuero
              cabelludo, maderoterapia y estética avanzada.
            </p>

            {/* CTAs Principales con área táctil >= 48px */}
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
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Hola El Salón de Fany, me gustaría reservar una cita o recibir asesoramiento."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[52px] px-7 py-3.5 rounded-xl bg-white hover:bg-sand text-charcoal border border-borderWarm hover:border-terracotta font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-terracotta shrink-0" />
                <span>Hablar por WhatsApp</span>
              </a>
            </div>

            {/* Mini-Prueba Social Inmediata Above the Fold */}
            <div className="pt-3 border-t border-borderWarm/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
              <a
                href="#resenas"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/80 border border-borderWarm hover:border-champagne transition-colors"
              >
                <div className="flex items-center text-terracotta">
                  <Star className="w-4 h-4 fill-terracotta" />
                </div>
                <div>
                  <p className="font-semibold text-charcoal leading-tight">
                    +{SALON_INFO.googleReviewsCount} reseñas en Google
                  </p>
                  <p className="text-[11px] text-warmGray">Valoración media excelente</p>
                </div>
              </a>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/80 border border-borderWarm">
                <Sparkles className="w-4 h-4 text-terracotta shrink-0" />
                <div>
                  <p className="font-semibold text-charcoal leading-tight">Salón Oficial I.C.O.N.</p>
                  <p className="text-[11px] text-warmGray">Botánica & Hair Spá relajante</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/80 border border-borderWarm">
                <HeartHandshake className="w-4 h-4 text-terracotta shrink-0" />
                <div>
                  <p className="font-semibold text-charcoal leading-tight">Desde 2014 en Valencia</p>
                  <p className="text-[11px] text-warmGray">Salón familiar, cercano y unisex</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Columna Visual Editorial con Aspect Ratio Fijo (0 CLS) */}
          <motion.div
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-champagne/40 shadow-editorial bg-sand aspect-[4/5]">
              {/* Imagen Hero con prioridad (sin lazy) y dimensiones definidas */}
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85"
                alt="Experiencia de peluquería y ritual Hair Spá relajante en El Salón de Fany en Valencia"
                width={960}
                height={1200}
                fetchPriority="high"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

              {/* Tarjeta flotante inferior dentro de la imagen */}
              <div className="absolute inset-x-4 bottom-4 p-4 sm:p-5 rounded-2xl bg-ivory/95 backdrop-blur-md border border-borderWarm shadow-lg space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-terracotta/15 text-terracotta text-[11px] font-semibold uppercase tracking-wider">
                    Especialidad del Salón
                  </span>
                  <span className="text-xs font-semibold text-charcoal flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-terracotta" />
                    Unisex
                  </span>
                </div>
                <p className="font-serif text-lg sm:text-xl font-semibold text-charcoal leading-snug">
                  «Un salón familiar y profesional en el que hacemos sentir al cliente como en su casa.»
                </p>
                <div className="flex items-center justify-between text-xs text-warmGray pt-1">
                  <span>Carrer d&apos;Antonio Sacramento, 17-2</span>
                  <button
                    type="button"
                    onClick={() => onOpenBookingModal("Hair Spá & Masajes Capilares Relajantes")}
                    className="text-terracotta font-semibold underline underline-offset-4 hover:text-charcoal transition-colors"
                  >
                    Probar Hair Spá →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

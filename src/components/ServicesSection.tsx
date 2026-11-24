"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  Clock,
  CheckCircle2,
  Calendar,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Flower2,
} from "lucide-react";
import { SALON_SERVICES, SALON_INFO, ServiceCategory } from "@/data/salon-data";

interface ServicesSectionProps {
  onOpenBookingModal: (defaultService?: string) => void;
}

const CATEGORIES: ServiceCategory[] = [
  "Todo",
  "Peluquería y Color",
  "Hair Spá y Masajes",
  "Maderoterapia y Estética",
  "Eventos y Manicura",
];

export function ServicesSection({ onOpenBookingModal }: ServicesSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>("Todo");
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>("hair-spa-ritual");

  const filteredServices =
    selectedCategory === "Todo"
      ? SALON_SERVICES
      : SALON_SERVICES.filter((srv) => srv.category === selectedCategory);

  const toggleDetails = (id: string) => {
    setExpandedServiceId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="servicios"
      aria-labelledby="services-heading"
      className="py-16 sm:py-20 lg:py-24 bg-ivory border-b border-borderWarm scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Encabezado Editorial */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand border border-champagne/50 text-xs font-semibold uppercase tracking-widest text-terracotta">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Carta de Servicios Unisex & Rituales I.C.O.N.</span>
          </span>
          <h2
            id="services-heading"
            className="font-serif text-fluid-h2 font-semibold text-charcoal leading-tight"
          >
            Peluquería consciente, <span className="italic font-normal text-terracotta">Hair Spá</span> y
            estética integral en Valencia
          </h2>
          <p className="text-fluid-body text-warmGray leading-relaxed">
            Desde un corte para sanear y dar movimiento hasta coloración luminosa, recogidos para eventos,
            maderoterapia corporal y nuestros famosos masajes relajantes en el cuero cabelludo.
          </p>
        </div>

        {/* Bloque Destacado Especial: Ritual Hair Spá */}
        <div className="rounded-3xl bg-charcoal text-ivory p-6 sm:p-8 lg:p-10 border border-champagne/30 shadow-editorial overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta/25 border border-champagne/40 text-champagne text-xs font-semibold uppercase tracking-wider">
                <Flower2 className="w-3.5 h-3.5" />
                <span>El corazón de nuestro salón · Hair Spá Valencia</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-ivory leading-tight">
                ¿Necesitas desconectar? Descubre nuestro Hair Spá con masaje relajante en el cuero cabelludo
              </h3>
              <p className="text-sm sm:text-base text-ivory/85 leading-relaxed max-w-2xl">
                En El Salón de Fany transformamos el momento del lavado en una terapia sensorial: aromaterapia
                botánica <strong>I.C.O.N.</strong>, presión craneal descontracturante, oxigenación folicular y
                calma absoluta para renovar tu energía y devolver un brillo extraordinario a tu melena.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                type="button"
                onClick={() => onOpenBookingModal("Hair Spá & Masajes Capilares Relajantes")}
                className="min-h-[48px] px-6 py-3 rounded-xl bg-terracotta hover:bg-terracottaDark text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md transition-all hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Reservar Ritual Hair Spá</span>
              </button>
              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Hola El Salón de Fany, me gustaría consultar información y cita para el Ritual Hair Spá."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] px-6 py-3 rounded-xl bg-ivory/10 hover:bg-ivory/20 text-ivory border border-champagne/40 font-semibold text-sm flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-champagne" />
                <span>Preguntar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Píldoras de Filtro Interactivo con Touch Target >= 44x44px */}
        <div
          role="tablist"
          aria-label="Filtrar servicios por categoría"
          className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar"
        >
          {CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedCategory(category)}
                className={`min-h-[44px] px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  active
                    ? "bg-charcoal text-ivory shadow-sm"
                    : "bg-sand/80 hover:bg-sand text-charcoal border border-borderWarm"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredServices.map((service) => {
            const isExpanded = expandedServiceId === service.id;
            return (
              <motion.article
                key={service.id}
                layout={!prefersReducedMotion}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0.01 : 0.35 }}
                className="rounded-3xl bg-white border border-borderWarm shadow-editorial hover:shadow-editorial-hover transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Imagen con aspect-ratio fijo para evitar CLS */}
                  <div className="relative aspect-[16/9] bg-sand overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />

                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full bg-ivory/95 backdrop-blur-sm text-charcoal text-xs font-semibold">
                        {service.category}
                      </span>
                      {service.badge && (
                        <span className="px-3 py-1 rounded-full bg-terracotta text-white text-xs font-semibold shadow-sm">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-ivory/95 font-medium">
                      <span className="inline-flex items-center gap-1.5 bg-charcoal/70 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                        <Clock className="w-3.5 h-3.5 text-champagne" />
                        <span>{service.duration}</span>
                      </span>
                      <span className="bg-charcoal/70 backdrop-blur-sm px-2.5 py-1 rounded-lg text-champagne font-semibold">
                        {service.priceHint}
                      </span>
                    </div>
                  </div>

                  {/* Cuerpo de la Card */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-fluid-h3 font-semibold text-charcoal leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm font-medium text-terracotta">{service.tagline}</p>
                    <p className="text-sm text-warmGray leading-relaxed">{service.description}</p>

                    {/* Acordeón interactivo: Ver qué incluye */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => toggleDetails(service.id)}
                        aria-expanded={isExpanded}
                        className="min-h-[44px] w-full px-4 py-2.5 rounded-xl bg-sand/70 hover:bg-sand text-charcoal text-xs sm:text-sm font-semibold flex items-center justify-between transition-colors"
                      >
                        <span>{isExpanded ? "Ocultar detalles del servicio" : "Ver qué incluye este servicio"}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-terracotta" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-terracotta" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="mt-3 p-4 rounded-2xl bg-ivory border border-borderWarm space-y-2">
                          <p className="text-xs font-semibold uppercase tracking-wider text-terracotta">
                            Paso a paso en El Salón de Fany:
                          </p>
                          <ul className="space-y-2 text-xs sm:text-sm text-charcoal/90">
                            {service.includes.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Pie de la Card con CTAs directos */}
                <div className="px-6 pb-6 pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => onOpenBookingModal(service.title)}
                    className="min-h-[46px] px-4 py-2.5 rounded-xl bg-charcoal hover:bg-terracotta text-ivory text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <Calendar className="w-4 h-4 text-champagne shrink-0" />
                    <span>Reservar este servicio</span>
                  </button>

                  <a
                    href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
                      service.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[46px] px-4 py-2.5 rounded-xl bg-sand hover:bg-champagne/30 text-charcoal border border-borderWarm text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-terracotta shrink-0" />
                    <span>Consultar por WhatsApp</span>
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

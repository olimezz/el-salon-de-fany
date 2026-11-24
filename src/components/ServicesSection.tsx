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
import { SALON_SERVICES, SALON_INFO, HAIR_SPA_IMAGES, ServiceCategory } from "@/data/salon-data";

interface ServicesSectionProps {
  onOpenBookingModal: (defaultService?: string) => void;
}

const CATEGORIES: ServiceCategory[] = [
  "Todo",
  "Hair Spá y Masajes",
  "Peluquería y Color",
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
      className="py-16 sm:py-20 lg:py-24 bg-sand/60 border-b border-borderWarm scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Encabezado con el texto oficial de Servicios de elsalondefany.com */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ivory border border-champagne/50 text-xs font-semibold uppercase tracking-widest text-terracotta">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Servicios Unisex · I.C.O.N. · Hair Spá · Estética</span>
          </span>
          <h2
            id="services-heading"
            className="font-serif text-fluid-h2 font-semibold text-charcoal leading-tight"
          >
            Nuestros Servicios y <span className="italic font-normal text-terracotta">Hair Spá</span> en
            Valencia
          </h2>
          <p className="text-fluid-body text-warmGray leading-relaxed">
            En nuestro salón trabajamos con productos de marcas de altísima calidad como{" "}
            <strong className="text-charcoal">I.C.O.N.</strong>, que acompañan la técnica y experiencia de
            nuestros estilistas para ofrecer a cada cliente un acabado perfecto y cuidado. Desde un{" "}
            <strong className="text-charcoal">corte para sanear el cabello</strong> hasta{" "}
            <strong className="text-charcoal">recogidos y peinados especiales para eventos</strong>, pasando por{" "}
            <strong className="text-charcoal">coloraciones y mechas</strong>, en El Salón de Fany encontrarás un
            espacio unisex con tratamientos especiales como la{" "}
            <strong className="text-charcoal">maderoterapia</strong> y servicios de{" "}
            <strong className="text-charcoal">manicura y estética</strong>.
          </p>
        </div>

        {/* Bloque Especial Hair Spá con las 4 Fotos Originales (hairspa1, hairspa4, hairspa4-1, hairspa3) */}
        <div className="rounded-3xl bg-charcoal text-ivory p-6 sm:p-8 lg:p-10 border border-champagne/30 shadow-editorial overflow-hidden space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta/25 border border-champagne/40 text-champagne text-xs font-semibold uppercase tracking-wider">
                <Flower2 className="w-3.5 h-3.5" />
                <span>Especialidad Hair Spá · Relajación Capilar y Corporal</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-ivory leading-tight">
                ¿Te gustan los masajes en la cabeza? Entonces esto es para ti…
              </h3>
              <p className="text-sm sm:text-base text-ivory/90 leading-relaxed italic font-serif">
                «Imagina este momento… Cierras los ojos, respiras profundo y sientes cómo tus preocupaciones
                desaparecen con cada movimiento de nuestras manos en tu cuero cabelludo.»
              </p>
              <p className="text-xs sm:text-sm text-ivory/80 leading-relaxed">
                En <strong>El Salón de Fany</strong>, no solo cuidamos tu cabello, sino también tu bienestar.
                Somos expertas en relajación capilar y corporal, y todas nuestras clientas coinciden en algo:{" "}
                <strong className="text-champagne">AMAN nuestros masajes mientras aplicamos los tratamientos</strong>.
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
                href={`https://api.whatsapp.com/send?phone=${SALON_INFO.whatsappNumber}&text=${encodeURIComponent(
                  "Hola El Salón de Fany, me gustaría reservar cita para el Hair Spá y masaje en el cuero cabelludo."
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

          {/* Las 4 fotos originales de Hair Spá del sitio elsalondefany.com */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
            {HAIR_SPA_IMAGES.map((img) => (
              <div
                key={img.id}
                className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-champagne/30 group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={576}
                  height={768}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-2.5 right-2.5 text-xs font-semibold text-ivory bg-charcoal/70 backdrop-blur-sm px-2.5 py-1 rounded-lg text-center">
                  {img.label}
                </span>
              </div>
            ))}
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
                    : "bg-white hover:bg-ivory text-charcoal border border-borderWarm"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Grid de Servicios con fotos reales del salón */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="relative aspect-[4/3] bg-sand overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      width={600}
                      height={450}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full bg-ivory/95 backdrop-blur-sm text-charcoal text-xs font-semibold">
                        {service.category}
                      </span>
                      {service.badge && (
                        <span className="px-3 py-1 rounded-full bg-terracotta text-white text-xs font-semibold shadow-sm">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-ivory/95 font-medium">
                      <span className="inline-flex items-center gap-1 bg-charcoal/75 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                        <Clock className="w-3.5 h-3.5 text-champagne" />
                        <span>{service.duration}</span>
                      </span>
                      <span className="bg-charcoal/75 backdrop-blur-sm px-2.5 py-1 rounded-lg text-champagne font-semibold">
                        {service.priceHint}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-charcoal leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-terracotta">{service.tagline}</p>
                    <p className="text-xs sm:text-sm text-warmGray leading-relaxed">{service.description}</p>

                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={() => toggleDetails(service.id)}
                        aria-expanded={isExpanded}
                        className="min-h-[44px] w-full px-3.5 py-2 rounded-xl bg-sand/70 hover:bg-sand text-charcoal text-xs font-semibold flex items-center justify-between transition-colors"
                      >
                        <span>{isExpanded ? "Ocultar detalles" : "Ver qué incluye"}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-terracotta" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-terracotta" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="mt-2.5 p-3.5 rounded-2xl bg-ivory border border-borderWarm space-y-1.5">
                          <ul className="space-y-1.5 text-xs text-charcoal/90">
                            {service.includes.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => onOpenBookingModal(service.title)}
                    className="min-h-[44px] px-3 py-2 rounded-xl bg-charcoal hover:bg-terracotta text-ivory text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5 text-champagne shrink-0" />
                    <span>Reservar</span>
                  </button>

                  <a
                    href={`https://api.whatsapp.com/send?phone=${SALON_INFO.whatsappNumber}&text=${encodeURIComponent(
                      service.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] px-3 py-2 rounded-xl bg-sand hover:bg-champagne/30 text-charcoal border border-borderWarm text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-terracotta shrink-0" />
                    <span>WhatsApp</span>
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

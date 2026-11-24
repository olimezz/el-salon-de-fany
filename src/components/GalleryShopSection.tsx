"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Camera,
  ShoppingBag,
  Sparkles,
  X,
  ZoomIn,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { GALLERY_ITEMS, GalleryCategory, GalleryItem, ICON_PRODUCTS, SALON_INFO } from "@/data/salon-data";

const GALLERY_CATEGORIES: GalleryCategory[] = [
  "Todo",
  "Color y Mechas",
  "Corte y Peinado",
  "Hair Spá",
  "Salón",
];

export function GalleryShopSection() {
  const prefersReducedMotion = useReducedMotion();
  const [selectedFilter, setSelectedFilter] = useState<GalleryCategory>("Todo");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredGallery =
    selectedFilter === "Todo"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  return (
    <section
      id="galeria"
      aria-labelledby="gallery-heading"
      className="py-16 sm:py-20 lg:py-24 bg-ivory border-b border-borderWarm scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        {/* BLOQUE 1: GALERÍA DE LOOKS & SALÓN CON LIGHTBOX */}
        <div className="space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand border border-champagne/50 text-xs font-semibold uppercase tracking-widest text-terracotta">
                <Camera className="w-3.5 h-3.5" />
                <span>Inspiración, Resultados & Espacio</span>
              </span>
              <h2
                id="gallery-heading"
                className="font-serif text-fluid-h2 font-semibold text-charcoal leading-tight"
              >
                Galería de estilo, color y momentos{" "}
                <span className="italic font-normal text-terracotta">Hair Spá</span>
              </h2>
              <p className="text-fluid-body text-warmGray">
                Explora nuestros trabajos de coloración luminosa, cortes saneados, recogidos y el ambiente acogedor
                de nuestro salón en Valencia. Pulsa en cualquier imagen para ampliarla.
              </p>
            </div>

            {/* Filtros de Galería con Touch Target >= 44x44px */}
            <div
              role="tablist"
              aria-label="Filtrar galería por estilo"
              className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar"
            >
              {GALLERY_CATEGORIES.map((cat) => {
                const active = selectedFilter === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedFilter(cat)}
                    className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all shrink-0 ${
                      active
                        ? "bg-charcoal text-ivory shadow-sm"
                        : "bg-sand hover:bg-champagne/30 text-charcoal border border-borderWarm"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid Fotográfica */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredGallery.map((item) => (
              <motion.div
                key={item.id}
                layout={!prefersReducedMotion}
                initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: prefersReducedMotion ? 0.01 : 0.3 }}
                className="group relative rounded-3xl overflow-hidden bg-sand border border-borderWarm shadow-editorial aspect-[4/5]"
              >
                <img
                  src={item.image}
                  alt={`${item.title} - El Salón de Fany Valencia`}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />

                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-ivory/95 text-charcoal text-xs font-semibold">
                    {item.category}
                  </span>
                  <button
                    type="button"
                    onClick={() => setLightboxItem(item)}
                    aria-label={`Ampliar imagen: ${item.title}`}
                    className="min-w-[44px] min-h-[44px] rounded-full bg-charcoal/80 hover:bg-terracotta text-ivory flex items-center justify-center transition-colors"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setLightboxItem(item)}
                  className="absolute inset-x-0 bottom-0 p-5 text-left space-y-1.5 focus:outline-none"
                >
                  <p className="text-[11px] uppercase tracking-wider text-champagne font-semibold">
                    {item.technique}
                  </p>
                  <h3 className="font-serif text-xl font-semibold text-ivory leading-snug">{item.title}</h3>
                  <p className="text-xs text-ivory/85 line-clamp-2">{item.caption}</p>
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BLOQUE 2: TIENDA ONLINE & PRODUCTOS OFICIALES I.C.O.N. EN CASA */}
        <div
          id="tienda-icon"
          className="rounded-3xl bg-sand border border-borderWarm p-6 sm:p-10 shadow-editorial space-y-8 scroll-mt-24"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-borderWarm pb-6">
            <div className="space-y-2.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory border border-champagne/50 text-xs font-semibold uppercase tracking-wider text-terracotta">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Tienda Online & Cuidado I.C.O.N. en Casa</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-charcoal leading-tight">
                Prolonga en casa el resultado de nuestro{" "}
                <span className="italic font-normal text-terracotta">Hair Spá</span> con productos oficiales I.C.O.N.
              </h3>
              <p className="text-sm sm:text-base text-warmGray leading-relaxed">
                Como salón autorizado I.C.O.N. en Valencia, te asesoramos personalmente para elegir el champú,
                tratamiento o aceite botánico exacto que tu cuero cabelludo y fibra capilar necesitan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Hola El Salón de Fany, me gustaría recibir asesoramiento o encargar productos oficiales I.C.O.N."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] px-6 py-3 rounded-xl bg-charcoal hover:bg-terracotta text-ivory text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-champagne" />
                <span>Reservar / Pedir productos I.C.O.N.</span>
              </a>
            </div>
          </div>

          {/* Tarjetas de Líneas I.C.O.N. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ICON_PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl bg-white border border-borderWarm overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-editorial transition-all duration-200 hover:-translate-y-0.5"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-ivory overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      width={600}
                      height={375}
                      className="w-full h-full object-cover object-center"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-charcoal/90 text-champagne text-xs font-semibold">
                      {product.badge}
                    </span>
                  </div>
                  <div className="p-5 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-terracotta">
                      {product.line}
                    </p>
                    <h4 className="font-serif text-xl font-semibold text-charcoal">{product.name}</h4>
                    <p className="text-xs sm:text-sm text-charcoal/90 font-medium">{product.benefit}</p>
                    <p className="text-xs text-warmGray leading-relaxed">{product.description}</p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2">
                  <a
                    href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Hola El Salón de Fany, me interesa disponibilidad y precio de la línea ${product.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] w-full px-4 py-2 rounded-xl bg-sand hover:bg-charcoal hover:text-ivory text-charcoal text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-terracotta" />
                    <span>Consultar disponibilidad en salón</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-warmGray">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-terracotta" />
              <span>Productos 100% originales I.C.O.N. con diagnóstico personalizado gratuito en nuestro salón</span>
            </span>
            <span>Recogida directa en Carrer d&apos;Antonio Sacramento, 17-2 (Valencia)</span>
          </div>
        </div>
      </div>

      {/* Modal Lightbox para Galería */}
      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
          className="fixed inset-0 z-[75] bg-charcoal/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl bg-ivory text-charcoal border border-borderWarm shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] bg-sand">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-cover object-center"
              />
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                aria-label="Cerrar vista ampliada"
                className="absolute top-3.5 right-3.5 min-w-[44px] min-h-[44px] rounded-full bg-charcoal/80 hover:bg-terracotta text-ivory flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full bg-sand text-terracotta text-xs font-semibold">
                  {lightboxItem.category}
                </span>
                <span className="text-xs font-medium text-warmGray">{lightboxItem.technique}</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-charcoal">{lightboxItem.title}</h3>
              <p className="text-sm text-warmGray leading-relaxed">{lightboxItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

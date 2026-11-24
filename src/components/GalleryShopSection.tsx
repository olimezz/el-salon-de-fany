"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Camera, X, ZoomIn, Instagram, ExternalLink } from "lucide-react";
import { GALLERY_ITEMS, GalleryCategory, GalleryItem, SALON_INFO } from "@/data/salon-data";

const GALLERY_CATEGORIES: GalleryCategory[] = [
  "Todo",
  "Trabajos & Color",
  "Hair Spá",
  "El Salón",
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Cabecera de Galería */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand border border-champagne/50 text-xs font-semibold uppercase tracking-widest text-terracotta">
              <Camera className="w-3.5 h-3.5" />
              <span>Galería Real · El Salón de Fany</span>
            </span>
            <h2
              id="gallery-heading"
              className="font-serif text-fluid-h2 font-semibold text-charcoal leading-tight"
            >
              Galería de trabajos, <span className="italic font-normal text-terracotta">Hair Spá</span> y
              nuestro salón
            </h2>
            <p className="text-fluid-body text-warmGray">
              Todas las fotografías reales de nuestros trabajos de peluquería, coloración I.C.O.N., masajes
              relajantes en el cuero cabelludo y nuestro espacio en Valencia. Pulsa en cualquier foto para verla
              en grande.
            </p>
          </div>

          {/* Filtros de Galería con Touch Target >= 44x44px */}
          <div
            role="tablist"
            aria-label="Filtrar galería por categoría"
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

        {/* Grid Fotográfica Real con Lightbox */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredGallery.map((item) => (
            <motion.div
              key={item.id}
              layout={!prefersReducedMotion}
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.3 }}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-sand border border-borderWarm shadow-editorial aspect-[4/5]"
            >
              <img
                src={item.image}
                alt={`${item.title} — El Salón de Fany Valencia`}
                loading="lazy"
                width={600}
                height={750}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/15 to-transparent" />

              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-ivory/95 text-charcoal text-[11px] font-semibold">
                  {item.category}
                </span>
                <button
                  type="button"
                  onClick={() => setLightboxItem(item)}
                  aria-label={`Ampliar imagen: ${item.title}`}
                  className="min-w-[40px] min-h-[40px] rounded-full bg-charcoal/80 hover:bg-terracotta text-ivory flex items-center justify-center transition-colors"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setLightboxItem(item)}
                className="absolute inset-x-0 bottom-0 p-4 text-left space-y-1 focus:outline-none"
              >
                <p className="text-[10px] uppercase tracking-wider text-champagne font-semibold">
                  {item.technique}
                </p>
                <h3 className="font-serif text-base sm:text-xl font-semibold text-ivory leading-snug">
                  {item.title}
                </h3>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Enlace a Instagram Oficial @elsalondefany */}
        <div className="p-5 sm:p-6 rounded-2xl bg-sand/70 border border-borderWarm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-11 h-11 rounded-2xl bg-charcoal text-ivory flex items-center justify-center shrink-0 mx-auto sm:mx-0">
              <Instagram className="w-5 h-5 text-champagne" />
            </div>
            <div>
              <p className="font-serif text-xl font-semibold text-charcoal">
                Síguenos en Instagram @elsalondefany
              </p>
              <p className="text-xs sm:text-sm text-warmGray">
                Descubre cada semana nuevos cambios de look, rituales Hair Spá y consejos I.C.O.N.
              </p>
            </div>
          </div>

          <a
            href={SALON_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] px-5 py-2.5 rounded-xl bg-charcoal hover:bg-terracotta text-ivory text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-colors shrink-0"
          >
            <span>Ver Instagram Oficial</span>
            <ExternalLink className="w-3.5 h-3.5 text-champagne" />
          </a>
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
            <div className="relative max-h-[70vh] bg-charcoal flex items-center justify-center overflow-hidden">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="max-h-[70vh] w-auto object-contain"
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

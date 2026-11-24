"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote, ExternalLink } from "lucide-react";
import { GOOGLE_REVIEWS, SALON_INFO } from "@/data/salon-data";

export function ReviewsSection() {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleCountDesktop = 3;
  const maxIndex = GOOGLE_REVIEWS.length - 1;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Obtenemos 3 reseñas consecutivas de forma circular para vista desktop y 1 principal en móvil
  const getVisibleReviews = () => {
    const items = [];
    for (let i = 0; i < visibleCountDesktop; i++) {
      const idx = (activeIndex + i) % GOOGLE_REVIEWS.length;
      items.push(GOOGLE_REVIEWS[idx]);
    }
    return items;
  };

  const visibleReviews = getVisibleReviews();

  return (
    <section
      id="resenas"
      aria-labelledby="reviews-heading"
      className="py-16 sm:py-20 lg:py-24 bg-sand/70 border-b border-borderWarm scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Cabecera + Badge Resumen de 122 Reseñas Google */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory border border-champagne/50 text-xs font-semibold uppercase tracking-widest text-terracotta">
              <Star className="w-3.5 h-3.5 fill-terracotta" />
              <span>Autoridad Local & Confianza Real</span>
            </span>
            <h2
              id="reviews-heading"
              className="font-serif text-fluid-h2 font-semibold text-charcoal leading-tight"
            >
              Lo que dicen quienes ya se sienten{" "}
              <span className="italic font-normal text-terracotta">como en casa</span>
            </h2>
            <p className="text-fluid-body text-warmGray">
              Más de una década cuidando el cabello y el bienestar de nuestros vecinos junto a la Ciudad de las
              Artes y las Ciencias en Valencia.
            </p>
          </div>

          {/* Tarjeta Resumen Google Reviews */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-borderWarm shadow-editorial flex flex-wrap items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-charcoal text-ivory flex flex-col items-center justify-center font-serif">
                <span className="text-lg font-bold leading-none">{SALON_INFO.googleRating}</span>
                <span className="text-[10px] text-champagne">★ ★ ★ ★ ★</span>
              </div>
              <div>
                <div className="flex items-center gap-1 text-terracotta">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-terracotta" />
                  ))}
                </div>
                <p className="font-semibold text-charcoal text-sm sm:text-base">
                  {SALON_INFO.googleReviewsCount} reseñas en Google
                </p>
                <p className="text-xs text-warmGray">Clientes reales verificados en Valencia</p>
              </div>
            </div>

            <a
              href={SALON_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] px-4 py-2 rounded-xl bg-ivory hover:bg-terracotta hover:text-ivory text-charcoal border border-borderWarm text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Ver en Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Carrusel Interactivo de Reseñas Reales */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {visibleReviews.map((review, idx) => (
              <motion.article
                key={`${review.id}-${activeIndex}-${idx}`}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0.01 : 0.35, delay: idx * 0.06 }}
                className={`p-6 rounded-2xl bg-white border border-borderWarm shadow-editorial flex flex-col justify-between gap-4 transition-transform duration-200 hover:-translate-y-1 ${
                  idx > 0 ? "hidden md:flex" : "flex"
                }`}
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 text-terracotta" aria-label="5 de 5 estrellas">
                      {[...Array(review.rating)].map((_, starIdx) => (
                        <Star key={starIdx} className="w-4 h-4 fill-terracotta" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-champagne/60" />
                  </div>

                  <span className="inline-block px-2.5 py-1 rounded-lg bg-sand text-charcoal text-xs font-medium">
                    {review.serviceTag}
                  </span>

                  <p className="text-sm sm:text-base text-charcoal/90 leading-relaxed">
                    “{review.excerpt}”
                  </p>
                </div>

                <div className="pt-4 border-t border-borderWarm/70 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sand border border-champagne/50 text-charcoal font-serif font-semibold text-base flex items-center justify-center">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal text-sm leading-tight">{review.author}</p>
                      <p className="text-[11px] text-warmGray flex items-center gap-1 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-terracotta" />
                        <span>{review.dateLabel}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Controles del Carrusel con Touch Targets >= 44x44px */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            {/* Indicadores por cliente */}
            <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Seleccionar reseña">
              {GOOGLE_REVIEWS.map((rev, index) => {
                const isSelected = index === activeIndex;
                return (
                  <button
                    key={rev.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    aria-label={`Ver reseña de ${rev.author}`}
                    onClick={() => setActiveIndex(index)}
                    className={`min-h-[44px] px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? "bg-charcoal text-ivory shadow-sm"
                        : "bg-white/80 hover:bg-white text-warmGray border border-borderWarm"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-terracotta" />
                    <span className="truncate max-w-[110px] sm:max-w-none">{rev.author.split(" ")[0]}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Reseña anterior"
                className="min-w-[44px] min-h-[44px] rounded-xl bg-white hover:bg-charcoal hover:text-ivory text-charcoal border border-borderWarm flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Siguiente reseña"
                className="min-w-[44px] min-h-[44px] rounded-xl bg-white hover:bg-charcoal hover:text-ivory text-charcoal border border-borderWarm flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

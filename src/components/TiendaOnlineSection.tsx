"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ShoppingBag, ExternalLink, Sparkles, CheckCircle2, Truck, ShieldCheck } from "lucide-react";
import { SALON_INFO } from "@/data/salon-data";

export function TiendaOnlineSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="tienda-online"
      aria-labelledby="tienda-online-heading"
      className="py-16 sm:py-20 lg:py-24 bg-sand/75 border-b border-borderWarm scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.45 }}
          className="rounded-3xl bg-white border-2 border-champagne/50 shadow-editorial overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Columna Izquierda: Contenido, Logos Oficiales ICONENCASA + El Salón de Fany y CTA */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand border border-champagne/50 text-xs font-semibold uppercase tracking-widest text-terracotta">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Tienda Online Oficial · I.C.O.N. en Casa</span>
              </div>

              <h2
                id="tienda-online-heading"
                className="font-serif text-fluid-h2 font-semibold text-charcoal leading-tight"
              >
                Compra tus productos <span className="italic font-normal text-terracotta">I.C.O.N.</span> en
                nuestra Tienda Online Oficial
              </h2>

              <p className="text-fluid-body text-warmGray leading-relaxed">
                En <strong className="text-charcoal">El Salón de Fany</strong> trabajamos con productos de
                altísima calidad como <strong className="text-charcoal">I.C.O.N.</strong> Accede directamente a
                nuestra tienda oficial asociada en{" "}
                <strong className="text-charcoal">iconencasa.com</strong> para recibir en tu domicilio todos tus
                champús, tratamientos, aceites y rituales favoritos con la garantía y el asesoramiento de nuestro
                salón.
              </p>

              {/* Logos oficiales que aparecen en elsalondefany.com: ICONENCASA-logo.png + salondefany2.png */}
              <div className="p-4 sm:p-5 rounded-2xl bg-ivory border border-borderWarm flex flex-wrap items-center justify-center sm:justify-start gap-6 sm:gap-8">
                <img
                  src="/images/tienda/iconencasa-logo.png"
                  alt="Logo Oficial I.C.O.N. En Casa"
                  loading="lazy"
                  width={150}
                  height={140}
                  className="h-20 sm:h-24 w-auto object-contain"
                />
                <div className="h-12 w-px bg-borderWarm hidden sm:block" />
                <img
                  src="/images/tienda/salondefany2.png"
                  alt="Sello El Salón de Fany — Distribuidor Autorizado"
                  loading="lazy"
                  width={150}
                  height={140}
                  className="h-20 sm:h-24 w-auto object-contain"
                />
              </div>

              {/* Beneficios de comprar a través del enlace oficial ref=2362 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-charcoal">
                <div className="flex items-center gap-2 p-3 rounded-xl bg-sand/60">
                  <ShieldCheck className="w-4 h-4 text-terracotta shrink-0" />
                  <span className="font-medium">100% Oficial I.C.O.N.</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-sand/60">
                  <Truck className="w-4 h-4 text-terracotta shrink-0" />
                  <span className="font-medium">Envío directo a casa</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-sand/60">
                  <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0" />
                  <span className="font-medium">Asesoramiento de Fany</span>
                </div>
              </div>

              {/* Botón Principal Directo a https://iconencasa.com/?ref=2362 */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href="https://iconencasa.com/?ref=2362"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[54px] px-8 py-4 rounded-xl bg-charcoal hover:bg-terracotta text-ivory font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-3 shadow-editorial hover:shadow-editorial-hover transition-all duration-200 hover:-translate-y-0.5"
                >
                  <ShoppingBag className="w-5 h-5 text-champagne shrink-0" />
                  <span>IR A LA TIENDA ONLINE</span>
                  <ExternalLink className="w-4 h-4 text-champagne shrink-0" />
                </a>

                <span className="text-xs text-warmGray text-center sm:text-left">
                  Acceso directo a <strong>iconencasa.com/?ref=2362</strong>
                </span>
              </div>
            </div>

            {/* Columna Derecha: Imagen real de productos I.C.O.N. del sitio original */}
            <div className="lg:col-span-5 h-full bg-charcoal relative min-h-[320px] lg:min-h-[520px] flex items-center justify-center overflow-hidden">
              <img
                src="/images/tienda/botellasblancas.jpg"
                alt="Productos oficiales I.C.O.N. en El Salón de Fany"
                loading="lazy"
                className="w-full h-full object-cover object-center opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />

              <div className="absolute inset-x-6 bottom-6 p-5 rounded-2xl bg-ivory/95 backdrop-blur-md border border-borderWarm space-y-2 shadow-lg">
                <div className="flex items-center gap-2 text-terracotta text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Cuidado Capilar Profesional</span>
                </div>
                <p className="font-serif text-xl font-semibold text-charcoal leading-snug">
                  Lleva la experiencia de El Salón de Fany a tu rutina diaria en casa.
                </p>
                <a
                  href="https://iconencasa.com/?ref=2362"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-terracotta hover:text-charcoal underline underline-offset-4 pt-1"
                >
                  <span>Abrir catálogo completo en iconencasa.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

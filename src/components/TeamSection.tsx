"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Award, GraduationCap, Heart, Sparkles, Users } from "lucide-react";
import { TEAM_MEMBERS } from "@/data/salon-data";

export function TeamSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="equipo"
      aria-labelledby="team-heading"
      className="py-16 sm:py-20 lg:py-24 bg-ivory border-b border-borderWarm scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14">
        {/* Historia de Fany y Filosofía del Equipo (Textos originales de elsalondefany.com) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand border border-champagne/50 text-xs font-semibold uppercase tracking-widest text-terracotta">
              <Heart className="w-3.5 h-3.5" />
              <span>Equipo · Desde 2014 en Valencia</span>
            </span>

            <h2
              id="team-heading"
              className="font-serif text-fluid-h2 font-semibold text-charcoal leading-tight"
            >
              Conoce al equipo profesional de{" "}
              <span className="italic font-normal text-terracotta">El Salón de Fany</span>
            </h2>

            <p className="text-fluid-body text-warmGray leading-relaxed">
              «Tras casi 20 años trabajando en el sector de la peluquería, y como profesora en una prestigiosa
              academia de peluquería y estética, decido dar el paso y en <strong>2014</strong> monto mi propio
              negocio.»
            </p>

            <p className="text-fluid-body text-warmGray leading-relaxed">
              En <strong className="text-charcoal">El Salón de Fany</strong>, somos un equipo en{" "}
              <strong className="text-charcoal">constante formación</strong> para poder ofrecer a nuestros
              clientes los mejores servicios y las nuevas tendencias, manteniendo siempre ese trato cercano que te
              hace sentir como en casa.
            </p>

            {/* 3 Pilares Diferenciales */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-borderWarm space-y-1.5 shadow-sm">
                <GraduationCap className="w-5 h-5 text-terracotta" />
                <p className="font-serif text-lg font-semibold text-charcoal">Formación Continua</p>
                <p className="text-xs text-warmGray leading-relaxed">
                  Experiencia docente y actualización constante en las últimas tendencias.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-borderWarm space-y-1.5 shadow-sm">
                <Users className="w-5 h-5 text-terracotta" />
                <p className="font-serif text-lg font-semibold text-charcoal">Trato Familiar</p>
                <p className="text-xs text-warmGray leading-relaxed">
                  Un equipo cercano y profesional donde cada cliente se siente como en su casa.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-borderWarm space-y-1.5 shadow-sm">
                <Award className="w-5 h-5 text-terracotta" />
                <p className="font-serif text-lg font-semibold text-charcoal">Calidad I.C.O.N.</p>
                <p className="text-xs text-warmGray leading-relaxed">
                  Técnica experta acompañada de productos botánicos de altísima calidad.
                </p>
              </div>
            </div>
          </div>

          {/* Cita destacada de Fany */}
          <div className="lg:col-span-5">
            <div className="p-7 sm:p-8 rounded-3xl bg-charcoal text-ivory border border-champagne/40 shadow-editorial space-y-5 relative">
              <Sparkles className="w-8 h-8 text-champagne" />
              <blockquote className="font-serif text-2xl sm:text-3xl italic leading-snug text-ivory">
                «Tras casi 20 años trabajando en el sector de la peluquería y como profesora en academia, en 2014
                creé El Salón de Fany para unir excelencia profesional y calidez humana.»
              </blockquote>
              <div className="pt-3 border-t border-ivory/15 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-ivory text-base">Fany</p>
                  <p className="text-xs text-champagne">Directora del salón · Fundado en 2014</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-ivory/10 text-champagne text-xs font-semibold">
                  Directora
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de Empleados con sus Fotografías Reales Originales (Fany, Esther, Ana, Sebas) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.4, delay: index * 0.08 }}
              className="rounded-3xl bg-white border border-borderWarm shadow-editorial overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 group"
            >
              <div>
                {/* Retrato vertical oficial 9:16 / 3:4 sin recortar caras */}
                <div className="relative aspect-[3/4] bg-sand overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.role} en El Salón de Fany`}
                    loading="lazy"
                    width={576}
                    height={768}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/15 to-transparent" />
                  <div className="absolute bottom-3.5 left-4 right-4">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-terracotta text-white text-[11px] font-semibold mb-1.5 shadow-sm">
                      {member.experienceBadge}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-ivory leading-none">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-champagne font-semibold mt-1">{member.role}</p>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <p className="text-xs sm:text-sm text-warmGray leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {member.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="px-2.5 py-1 rounded-lg bg-sand text-charcoal text-[11px] font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-1">
                <p className="p-3 rounded-xl bg-ivory border border-borderWarm text-xs italic text-charcoal/85">
                  {member.quote}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

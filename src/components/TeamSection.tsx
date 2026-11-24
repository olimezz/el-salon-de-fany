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
      className="py-16 sm:py-20 lg:py-24 bg-sand/60 border-b border-borderWarm scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14">
        {/* Historia de Fany y Filosofía del Salón */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ivory border border-champagne/50 text-xs font-semibold uppercase tracking-widest text-terracotta">
              <Heart className="w-3.5 h-3.5" />
              <span>Nuestra Historia · Desde 2014 en Valencia</span>
            </span>

            <h2
              id="team-heading"
              className="font-serif text-fluid-h2 font-semibold text-charcoal leading-tight"
            >
              Casi 20 años de vocación, docencia y pasión por{" "}
              <span className="italic font-normal text-terracotta">cuidar de ti</span>
            </h2>

            <p className="text-fluid-body text-warmGray leading-relaxed">
              Detrás de <strong className="text-charcoal">El Salón de Fany</strong> está la trayectoria de{" "}
              <strong className="text-charcoal">Fany</strong>, directora y alma del salón. Tras casi dos décadas
              en el sector y años como <strong>profesora en academia de peluquería y estética</strong>, en{" "}
              <strong>2014</strong> cumplió su sueño de abrir su propio espacio en{" "}
              <em>Carrer d&apos;Antonio Sacramento, 17-2</em>, junto a la Ciudad de las Artes y las Ciencias.
            </p>

            <p className="text-fluid-body text-warmGray leading-relaxed">
              Hoy lideramos un equipo humano en <strong>formación continua</strong> —junto a{" "}
              <strong className="text-charcoal">Esther, Ana y Sebas</strong>, y el cariño de profesionales muy
              queridas por nuestra clientela como <strong className="text-charcoal">Isa y Mónica</strong>— con
              una única misión: que cada visita sea tu momento favorito de la semana.
            </p>

            {/* 3 Pilares Diferenciales */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-borderWarm space-y-1.5">
                <GraduationCap className="w-5 h-5 text-terracotta" />
                <p className="font-serif text-lg font-semibold text-charcoal">Experiencia Docente</p>
                <p className="text-xs text-warmGray leading-relaxed">
                  Diagnóstico técnico riguroso y formación constante en color, corte y estética.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-borderWarm space-y-1.5">
                <Users className="w-5 h-5 text-terracotta" />
                <p className="font-serif text-lg font-semibold text-charcoal">Ambiente Familiar</p>
                <p className="text-xs text-warmGray leading-relaxed">
                  Un trato cercano, honesto y sin prisas donde te escuchamos de verdad.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-borderWarm space-y-1.5">
                <Award className="w-5 h-5 text-terracotta" />
                <p className="font-serif text-lg font-semibold text-charcoal">Calidad I.C.O.N.</p>
                <p className="text-xs text-warmGray leading-relaxed">
                  Fórmulas botánicas respetuosas con el cuero cabelludo y el medio ambiente.
                </p>
              </div>
            </div>
          </div>

          {/* Cita destacada de Fany */}
          <div className="lg:col-span-5">
            <div className="p-7 sm:p-8 rounded-3xl bg-charcoal text-ivory border border-champagne/40 shadow-editorial space-y-5 relative">
              <Sparkles className="w-8 h-8 text-champagne" />
              <blockquote className="font-serif text-2xl sm:text-3xl italic leading-snug text-ivory">
                «No queremos ser una peluquería de paso; queremos ser ese lugar de confianza en Valencia donde
                te relajas, te cuidan y sales brillando.»
              </blockquote>
              <div className="pt-3 border-t border-ivory/15 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-ivory text-base">Fany</p>
                  <p className="text-xs text-champagne">Directora de El Salón de Fany · Fundado en 2014</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-ivory/10 text-champagne text-xs font-semibold">
                  +20 años exp.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de Miembros del Equipo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.4, delay: index * 0.08 }}
              className="rounded-3xl bg-white border border-borderWarm shadow-editorial overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="relative aspect-[4/4] bg-sand overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role} en El Salón de Fany`}
                    loading="lazy"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3.5 right-3.5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-terracotta text-white text-[11px] font-semibold mb-1">
                      {member.experienceBadge}
                    </span>
                    <h3 className="font-serif text-2xl font-semibold text-ivory leading-none">
                      {member.name}
                    </h3>
                    <p className="text-xs text-champagne font-medium mt-0.5">{member.role}</p>
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

              <div className="px-5 pb-5 pt-2">
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

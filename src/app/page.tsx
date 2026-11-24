"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TiendaOnlineSection } from "@/components/TiendaOnlineSection";
import { TeamSection } from "@/components/TeamSection";
import { ServicesSection } from "@/components/ServicesSection";
import { GalleryShopSection } from "@/components/GalleryShopSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { LocationContactSection } from "@/components/LocationContactSection";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import { BookingModal } from "@/components/BookingModal";

export default function HomePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenBookingModal = (defaultService?: string) => {
    setSelectedService(defaultService);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-ivory text-charcoal">
      <Header
        onOpenBookingModal={handleOpenBookingModal}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />

      <main id="main-content" className="flex-1">
        {/* 1. El Salón (Fotos reales del salón con carrusel dinámico automático + información general) */}
        <HeroSection onOpenBookingModal={handleOpenBookingModal} />

        {/* 2. Tienda Online (Lleva directamente a https://iconencasa.com/?ref=2362 con logos oficiales) */}
        <TiendaOnlineSection />

        {/* 3. Equipo (Fany, Esther, Ana y Sebas con sus fotos reales e historia) */}
        <TeamSection />

        {/* 4. Servicios & Hair Spá (Con las 4 fotos reales de Hair Spá y carta de servicios) */}
        <ServicesSection onOpenBookingModal={handleOpenBookingModal} />

        {/* 5. Galería (Todas las fotografías reales de trabajos y salón con Lightbox) */}
        <GalleryShopSection />

        {/* Social Proof: 122+ Reseñas de Google */}
        <ReviewsSection />

        {/* 6. Contacto, Horarios, Mapa y Reserva */}
        <LocationContactSection />
      </main>

      <Footer />

      <StickyMobileBar
        onOpenBookingModal={() => handleOpenBookingModal()}
        hiddenByOverlay={isDrawerOpen || isBookingModalOpen}
      />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}

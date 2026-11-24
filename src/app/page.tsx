"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TeamSection } from "@/components/TeamSection";
import { GalleryShopSection } from "@/components/GalleryShopSection";
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
        <HeroSection onOpenBookingModal={handleOpenBookingModal} />
        <ReviewsSection />
        <ServicesSection onOpenBookingModal={handleOpenBookingModal} />
        <TeamSection />
        <GalleryShopSection />
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

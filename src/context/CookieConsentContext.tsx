"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

export interface CookiePreferences {
  necessary: true; // Siempre activas por ser técnicas y estrictamente necesarias
  analytics: boolean; // Estadísticas anónimas de uso
  externalMedia: boolean; // Mapas interactivos (Google Maps embed) y widgets externos
  updatedAt: string;
}

interface CookieConsentContextType {
  preferences: CookiePreferences | null;
  hasDecided: boolean;
  isBannerOpen: boolean;
  isConfigModalOpen: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  saveCustomPreferences: (prefs: { analytics: boolean; externalMedia: boolean }) => void;
  openConfigModal: () => void;
  closeConfigModal: () => void;
}

const STORAGE_KEY = "elsalondefany_rgpd_consent_v1";

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);
  const [hasDecided, setHasDecided] = useState<boolean>(true); // Inicia true en SSR para evitar parpadeo hasta hidratar
  const [isBannerOpen, setIsBannerOpen] = useState<boolean>(false);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as CookiePreferences;
        if (parsed && typeof parsed.analytics === "boolean" && typeof parsed.externalMedia === "boolean") {
          setPreferences({
            necessary: true,
            analytics: parsed.analytics,
            externalMedia: parsed.externalMedia,
            updatedAt: parsed.updatedAt || new Date().toISOString(),
          });
          setHasDecided(true);
          setIsBannerOpen(false);
          return;
        }
      }
    } catch {
      // Si localStorage está bloqueado, se mantiene bloqueo preventivo por defecto
    }
    setPreferences(null);
    setHasDecided(false);
    setIsBannerOpen(true);
  }, []);

  const persistPreferences = useCallback((next: CookiePreferences) => {
    setPreferences(next);
    setHasDecided(true);
    setIsBannerOpen(false);
    setIsConfigModalOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      // Cookie técnica de primera parte para recordar la elección durante 180 días
      const maxAge = 60 * 60 * 24 * 180;
      document.cookie = `${STORAGE_KEY}=${encodeURIComponent(
        JSON.stringify({ a: next.analytics ? 1 : 0, m: next.externalMedia ? 1 : 0 })
      )}; path=/; max-age=${maxAge}; SameSite=Lax`;
    } catch {
      // Ignorar errores de almacenamiento en modo incógnito estricto
    }
  }, []);

  const acceptAll = useCallback(() => {
    persistPreferences({
      necessary: true,
      analytics: true,
      externalMedia: true,
      updatedAt: new Date().toISOString(),
    });
  }, [persistPreferences]);

  const rejectAll = useCallback(() => {
    persistPreferences({
      necessary: true,
      analytics: false,
      externalMedia: false,
      updatedAt: new Date().toISOString(),
    });
  }, [persistPreferences]);

  const saveCustomPreferences = useCallback(
    (prefs: { analytics: boolean; externalMedia: boolean }) => {
      persistPreferences({
        necessary: true,
        analytics: Boolean(prefs.analytics),
        externalMedia: Boolean(prefs.externalMedia),
        updatedAt: new Date().toISOString(),
      });
    },
    [persistPreferences]
  );

  const openConfigModal = useCallback(() => {
    setIsConfigModalOpen(true);
  }, []);

  const closeConfigModal = useCallback(() => {
    setIsConfigModalOpen(false);
  }, []);

  return (
    <CookieConsentContext.Provider
      value={{
        preferences,
        hasDecided,
        isBannerOpen,
        isConfigModalOpen,
        acceptAll,
        rejectAll,
        saveCustomPreferences,
        openConfigModal,
        closeConfigModal,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error("useCookieConsent debe utilizarse dentro de un CookieConsentProvider");
  }
  return context;
}

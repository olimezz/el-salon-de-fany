import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CookieConsentProvider } from "@/context/CookieConsentContext";
import { CookieBanner } from "@/components/CookieBanner";
import { SALON_INFO } from "@/data/salon-data";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF7F4",
};

export const metadata: Metadata = {
  title:
    "El Salón de Fany | Peluquería Unisex, Hair Spá, I.C.O.N. y Estética en Valencia",
  description:
    "Tu salón familiar y profesional en Valencia junto a la Ciudad de las Artes y las Ciencias (Carrer d'Antonio Sacramento, 17-2). Peluquería unisex, Hair Spá con masajes relajantes en el cuero cabelludo, productos I.C.O.N., maderoterapia, manicura y estética. +122 reseñas en Google.",
  keywords: [
    "El Salón de Fany Valencia",
    "Peluquería Ciudad de las Artes y las Ciencias Valencia",
    "Hair Spá Valencia masaje capilar",
    "Peluquería ICON Valencia",
    "Maderoterapia Valencia",
    "Peluquería unisex Monteolivete Quatre Carreres",
    "Carrer d'Antonio Sacramento 17 Valencia",
  ],
  authors: [{ name: "El Salón de Fany — Valencia" }],
  openGraph: {
    title: "El Salón de Fany — Peluquería Unisex, Hair Spá & Estética en Valencia",
    description:
      "Un salón familiar y profesional en el que hacemos sentir al cliente como en su casa. Desde 2014 junto a la Ciudad de las Artes y las Ciencias. +122 reseñas en Google.",
    locale: "es_ES",
    type: "website",
    siteName: "El Salón de Fany",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hairSalonJsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: SALON_INFO.name,
    description: SALON_INFO.claim,
    foundingDate: "2014",
    url: "https://elsalondefany.com",
    telephone: SALON_INFO.phoneE164,
    email: SALON_INFO.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: SALON_INFO.address,
      addressLocality: SALON_INFO.city,
      postalCode: SALON_INFO.postalCode,
      addressRegion: "Valencia",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.4561,
      longitude: -0.3587,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
        opens: "10:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "10:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "13:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SALON_INFO.googleRating,
      bestRating: "5",
      ratingCount: String(SALON_INFO.googleReviewsCount),
    },
    sameAs: [SALON_INFO.socials.instagram, SALON_INFO.socials.facebook],
  };

  return (
    <html lang="es-ES">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hairSalonJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-ivory text-charcoal font-sans antialiased overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[90] focus:px-4 focus:py-2.5 focus:rounded-xl focus:bg-charcoal focus:text-ivory focus:font-semibold"
        >
          Saltar al contenido principal
        </a>
        <CookieConsentProvider>
          {children}
          <CookieBanner />
        </CookieConsentProvider>
      </body>
    </html>
  );
}

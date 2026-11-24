# El Salón de Fany — Redesign Mobile-First (Valencia)

Aplicación web completa desarrollada con **Next.js (App Router) + React + TypeScript + Tailwind CSS + Framer Motion + Zod** para **El Salón de Fany** (`Carrer d'Antonio Sacramento, 17-2, 46013 Valencia`, junto a la Ciudad de las Artes y las Ciencias).

## Características Principales

- **Design System Editorial Warm Boutique**:
  - Paleta cálida de alto contraste: Fondo marfil `#FAF7F4`, superficies `#FFFFFF` y `#F3ECE4`, texto principal `#1E1B18`, secundario `#5A524A` y acentos terracota `#A66A46` y champagne `#C89D7C`.
  - Tipografía editorial *Cormorant Garamond* + *Plus Jakarta Sans* con escalado fluido `clamp()`.
- **Arquitectura Rigurosamente Mobile-First (`375px` → `1440px+`)**:
  - Áreas táctiles mínimas de `44x44px`, sin desbordamiento horizontal (`overflow-x: hidden`).
  - Header con acceso rápido telefónico, reserva y menú drawer móvil a pantalla completa.
  - **Sticky Bottom Action Bar (`< 768px`)** con botones *"Reservar cita"* y *"WhatsApp"* (`+34 601 12 51 58`), que se oculta automáticamente al abrir menús o modales.
- **Interactividad y Conversión**:
  - Filtro interactivo de servicios (*Todo*, *Peluquería y Color*, *Hair Spá y Masajes*, *Maderoterapia y Estética*, *Eventos y Manicura*) con desglose *"Ver qué incluye"*.
  - Carrusel de reseñas reales de Google (**122+ reseñas**) con testimonios verificados del salón.
  - Galería filtrable con **Lightbox** y bloque de **Tienda Online / Cuidado en casa I.C.O.N.**.
- **Seguridad & Cumplimiento RGPD / AEPD (España)**:
  - Validación y sanitización en cliente y servidor con **Zod** (`src/lib/validation.ts`), honeypot anti-spam, control de tiempo mínimo de envío y rate limiting en `src/app/api/contact/route.ts`.
  - Cabeceras HTTP de seguridad en `next.config.js` (`Content-Security-Policy`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`).
  - Banner de Cookies RGPD con 3 botones de igual jerarquía visual (*Aceptar todas*, *Rechazar todas*, *Configurar preferencias*), bloqueo preventivo real de Google Maps y botón permanente *"Gestionar cookies"* en el footer.

## Ejecución

```bash
npm run dev
# o para producción:
npm run build
./start.sh
```

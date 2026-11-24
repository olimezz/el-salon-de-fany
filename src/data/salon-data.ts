export type ServiceCategory =
  | "Todo"
  | "Hair Spá y Masajes"
  | "Peluquería y Color"
  | "Maderoterapia y Estética"
  | "Eventos y Manicura";

export interface SalonService {
  id: string;
  title: string;
  category: Exclude<ServiceCategory, "Todo">;
  tagline: string;
  description: string;
  duration: string;
  priceHint: string;
  featured?: boolean;
  badge?: string;
  includes: string[];
  iconBrand?: boolean;
  image: string;
  whatsappMessage: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experienceBadge: string;
  bio: string;
  specialties: string[];
  quote: string;
  image: string;
}

export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  dateLabel: string;
  serviceTag: string;
  excerpt: string;
  verified: boolean;
}

export type GalleryCategory = "Todo" | "Trabajos & Color" | "Hair Spá" | "El Salón";

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, "Todo">;
  caption: string;
  technique: string;
  image: string;
}

export interface SalonCarouselSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
}

export const SALON_INFO = {
  name: "El Salón de Fany",
  tagline: "Belleza & Spa · Peluquería Unisex, Hair Spá & I.C.O.N. en Valencia",
  claim: "Un salón familiar y profesional en el que hacemos sentir al cliente como en su casa.",
  descriptionParagraph:
    "El Salón de Fany, junto a la Ciudad de las Artes y las Ciencias en Valencia, tiene un ambiente desenfadado, acogedor y dinámico. Aquí cada cliente encontrará todo lo necesario para renovar su look y dejarse asesorar por grandes profesionales.",
  foundedYear: 2014,
  address: "Carrer d'Antonio Sacramento, 17-2",
  postalCode: "46013",
  city: "Valencia",
  neighborhood: "Junto a la Ciudad de las Artes y las Ciencias (Quatre Carreres / Monteolivete)",
  fullAddress: "Carrer d'Antonio Sacramento, 17-2, 46013 Valencia",
  phoneDisplay: "601 12 51 58",
  phoneE164: "+34601125158",
  whatsappNumber: "34601125158",
  email: "elsalondefany@gmail.com",
  googleRating: "4.9",
  googleReviewsCount: 122,
  bookingUrl: "https://booksy.com/es-es/69875_el-salon-de-fany_peluqueria_58087_valencia",
  shopUrl: "https://iconencasa.com/?ref=2362",
  logoUrl: "/images/logo-el-salon-de-fany.png",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=El+Sal%C3%B3n+de+Fany+Carrer+d%27Antonio+Sacramento+17-2+46013+Valencia",
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=El%20Sal%C3%B3n%20de%20Fany%20Carrer%20d%27Antonio%20Sacramento%2017-2%20Valencia&t=m&z=17&output=embed&iwloc=near",
  socials: {
    instagram: "https://www.instagram.com/elsalondefany/",
    facebook: "https://www.facebook.com/El-Sal%C3%B3n-de-Fany-861173177260416/",
  },
  schedule: [
    { days: "Martes a jueves", hours: "10:00 – 19:00 h", open: true },
    { days: "Viernes", hours: "10:00 – 20:00 h", open: true },
    { days: "Sábado", hours: "09:00 – 13:00 h", open: true },
    { days: "Domingo y lunes", hours: "Cerrado", open: false },
  ],
};

export const SALON_CAROUSEL_SLIDES: SalonCarouselSlide[] = [
  {
    id: "slide-1",
    image: "/images/salon/salon-1.jpg",
    title: "Nuestro Espacio en Valencia",
    subtitle: "Un ambiente desenfadado, acogedor y dinámico junto a la Ciudad de las Artes y las Ciencias.",
  },
  {
    id: "slide-2",
    image: "/images/salon/salon-2.jpg",
    title: "Siéntete Como en Casa",
    subtitle: "Un salón familiar y profesional diseñado para tu comodidad y desconexión.",
  },
  {
    id: "slide-3",
    image: "/images/salon/salon-3.jpg",
    title: "Salón Oficial I.C.O.N. & Hair Spá",
    subtitle: "Equipamiento de vanguardia y rincón de relajación capilar y corporal.",
  },
  {
    id: "slide-4",
    image: "/images/salon/salon-4.jpg",
    title: "Zona de Tocadores & Estilismo",
    subtitle: "Luz natural, amplitud y atención personalizada en cada detalle.",
  },
  {
    id: "slide-5",
    image: "/images/salon/salon-5.jpg",
    title: "Rincón de Cuidado I.C.O.N.",
    subtitle: "Las mejores líneas botánicas para el cuidado y salud de tu cabello.",
  },
  {
    id: "slide-6",
    image: "/images/salon/salon-6.jpg",
    title: "Bienestar & Estética Integral",
    subtitle: "Un espacio unisex pensado para renovar tu imagen y tu energía.",
  },
];

export const HAIR_SPA_IMAGES = [
  {
    id: "hs-1",
    src: "/images/hairspa/hairspa1.jpg",
    alt: "Masaje relajante en el cuero cabelludo en El Salón de Fany",
    label: "Masaje Craneal Relajante",
  },
  {
    id: "hs-2",
    src: "/images/hairspa/hairspa4.jpg",
    alt: "Experiencia Hair Spá y bienestar capilar en Valencia",
    label: "Ritual Hair Spá",
  },
  {
    id: "hs-3",
    src: "/images/hairspa/hairspa4-1.jpg",
    alt: "Aplicación de tratamientos I.C.O.N. con masaje capilar",
    label: "Terapia Botánica I.C.O.N.",
  },
  {
    id: "hs-4",
    src: "/images/hairspa/hairspa3.jpg",
    alt: "Relajación capilar y corporal en nuestro Hair Spá",
    label: "Desconexión & Calma",
  },
];

export const SALON_SERVICES: SalonService[] = [
  {
    id: "hair-spa-ritual",
    title: "Hair Spá & Masajes Relajantes en el Cuero Cabelludo",
    category: "Hair Spá y Masajes",
    tagline: "¿Te gustan los masajes en la cabeza? Entonces esto es para ti…",
    description:
      "Imagina este momento: cierras los ojos, respiras profundo y sientes cómo tus preocupaciones desaparecen con cada movimiento de nuestras manos en tu cuero cabelludo mientras aplicamos los tratamientos I.C.O.N.",
    duration: "45 – 60 min",
    priceHint: "Ritual Estrella · Productos I.C.O.N.",
    featured: true,
    badge: "Experiencia Estrella",
    iconBrand: true,
    includes: [
      "Diagnóstico capilar personalizado y aromaterapia botánica I.C.O.N.",
      "Masaje lento y profundo en el cuero cabelludo mientras actúa el tratamiento",
      "Oxigenación folicular, hidratación intensiva y alivio de tensiones",
      "Acabado luminoso y asesoramiento para el cuidado en casa",
    ],
    image: "/images/hairspa/hairspa1.jpg",
    whatsappMessage:
      "Hola El Salón de Fany, me gustaría reservar cita para el ritual Hair Spá con masaje relajante en el cuero cabelludo.",
  },
  {
    id: "coloracion-mechas-icon",
    title: "Coloraciones, Mechas & Tratamientos I.C.O.N.",
    category: "Peluquería y Color",
    tagline: "Productos de altísima calidad I.C.O.N. que acompañan la técnica de nuestros estilistas.",
    description:
      "Trabajamos coloración respetuosa, mechas luminosas, balayage y matices personalizados cuidando al máximo la salud y el brillo de la fibra capilar.",
    duration: "90 – 150 min",
    priceHint: "Diagnóstico previo incluido",
    featured: true,
    badge: "Color & Luz",
    iconBrand: true,
    includes: [
      "Asesoramiento cromático adaptado a tu estilo y facciones",
      "Coloración y mechas con líneas profesionales I.C.O.N.",
      "Lavado con nuestro famoso masaje relajante en el cuero cabelludo",
      "Sellado de brillo y peinado de acabado perfecto",
    ],
    image: "/images/galeria/trabajo-b-1.jpg",
    whatsappMessage:
      "Hola El Salón de Fany, me gustaría pedir cita para coloración / mechas.",
  },
  {
    id: "corte-sanear-estilo",
    title: "Corte para Sanear el Cabello & Estilo Unisex",
    category: "Peluquería y Color",
    tagline: "Espacio unisex donde adaptamos cada corte a tu estilo, textura y preferencias.",
    description:
      "Desde un corte para sanear el cabello respetando tu largo hasta un cambio de look completo para mujer y hombre, con acabado impecable y fácil de mantener en casa.",
    duration: "45 min",
    priceHint: "Servicio Unisex · I.C.O.N.",
    badge: "Unisex",
    iconBrand: true,
    includes: [
      "Escucha activa y diagnóstico de visagismo",
      "Lavado con champú y acondicionador específico I.C.O.N.",
      "Corte técnico de precisión y saneado de puntas",
      "Styling final y recomendaciones profesionales",
    ],
    image: "/images/galeria/trabajo-b-3.jpg",
    whatsappMessage:
      "Hola El Salón de Fany, querría pedir cita para corte de pelo.",
  },
  {
    id: "maderoterapia-estetica",
    title: "Maderoterapia Corporal & Estética",
    category: "Maderoterapia y Estética",
    tagline: "Tratamientos especiales de bienestar corporal y estética que añaden valor a tu visita.",
    description:
      "Sesiones de maderoterapia natural y tratamientos de estética en cabina pensados para remodelar, drenar, tonificar y desconectar cuerpo y mente.",
    duration: "50 – 60 min",
    priceHint: "Sesiones y bonos disponibles",
    featured: true,
    badge: "Bienestar Corporal",
    includes: [
      "Valoración personalizada en cabina estética",
      "Masaje remodelador y drenante con instrumentos anatómicos de madera",
      "Activación de la circulación y reducción de retención de líquidos",
      "Sensación inmediata de ligereza y relajación muscular",
    ],
    image: "/images/hairspa/hairspa3.jpg",
    whatsappMessage:
      "Hola El Salón de Fany, me gustaría informarme sobre las sesiones de Maderoterapia y estética.",
  },
  {
    id: "recogidos-peinados-eventos",
    title: "Recogidos y Peinados Especiales para Eventos",
    category: "Eventos y Manicura",
    tagline: "Looks elegantes, duraderos y a medida para bodas, celebraciones y eventos en Valencia.",
    description:
      "Creamos recogidos, semirrecogidos, ondas y peinados especiales adaptados a tu vestido y personalidad para que brilles con total comodidad durante todo el evento.",
    duration: "60 – 90 min",
    priceHint: "Eventos & Invitadas",
    badge: "Eventos",
    includes: [
      "Asesoramiento según el tipo de evento y estilismo",
      "Preparación del cabello con productos de acabado I.C.O.N.",
      "Elaboración artesanal del recogido o peinado especial",
      "Fijación flexible y duradera durante horas",
    ],
    image: "/images/galeria/trabajo-b-5.jpg",
    whatsappMessage:
      "Hola El Salón de Fany, tengo un evento y me gustaría reservar cita para recogido / peinado especial.",
  },
  {
    id: "manicura-y-estetica",
    title: "Servicios de Manicura, Pedicura & Cuidado Facial",
    category: "Eventos y Manicura",
    tagline: "Mimo y perfección en manos, pies y rostro dentro del mismo salón.",
    description:
      "Completa tu experiencia de belleza en El Salón de Fany con nuestros servicios de manicura, pedicura y estética facial realizados con máxima higiene y dedicación.",
    duration: "40 – 60 min",
    priceHint: "Cuidado integral",
    includes: [
      "Cuidado completo de uñas, cutículas e hidratación",
      "Esmaltado impecable y duradero",
      "Servicios de estética facial y diseño de mirada",
      "Atención cálida y familiar",
    ],
    image: "/images/hairspa/hairspa4-1.jpg",
    whatsappMessage:
      "Hola El Salón de Fany, me gustaría reservar cita para manicura o estética.",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "fany",
    name: "Fany",
    role: "Directora del salón",
    experienceBadge: "Fundadora en 2014 · +20 años en el sector",
    bio: "«Tras casi 20 años trabajando en el sector de la peluquería, y como profesora en una prestigiosa academia de peluquería y estética, decido dar el paso y en 2014 monto mi propio negocio.»",
    specialties: ["Dirección & Diagnóstico", "Coloración & Corte", "Docencia & Formación", "Experta I.C.O.N."],
    quote: "«Un salón familiar y profesional en el que hacemos sentir al cliente como en su casa.»",
    image: "/images/equipo/fany.webp",
  },
  {
    id: "esther",
    name: "Esther",
    role: "Técnico & Esteticista",
    experienceBadge: "Color, Estética & Maderoterapia",
    bio: "Especialista tanto en trabajos técnicos de peluquería como en cabina de estética, manicura, maderoterapia y masajes relajantes del cuero cabelludo.",
    specialties: ["Técnico Colorista", "Esteticista & Manicura", "Maderoterapia", "Hair Spá"],
    quote: "«En constante formación para ofrecer siempre las mejores técnicas de belleza y bienestar.»",
    image: "/images/equipo/esther.webp",
  },
  {
    id: "ana",
    name: "Ana",
    role: "Técnico",
    experienceBadge: "Especialista en Color & Hair Spá",
    bio: "Experta en coloraciones, mechas, tratamientos capilares I.C.O.N. y en nuestros rituales de relajación capilar en el lavacabezas.",
    specialties: ["Coloración & Mechas", "Tratamientos I.C.O.N.", "Masaje Capilar", "Peinados"],
    quote: "«Cuidamos cada detalle para lograr un acabado luminoso, sano y lleno de vida.»",
    image: "/images/equipo/ana.webp",
  },
  {
    id: "sebas",
    name: "Sebas",
    role: "Estilista",
    experienceBadge: "Corte Unisex, Estilo & Tendencias",
    bio: "Estilista apasionado por el corte femenino y masculino, las nuevas tendencias y el asesoramiento personalizado para renovar tu look.",
    specialties: ["Corte Unisex", "Renovación de Look", "Styling & Brushing", "Tendencias"],
    quote: "«Adaptamos cada corte y estilo a tu personalidad para que te veas increíble cada día.»",
    image: "/images/equipo/sebas.webp",
  },
];

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "rev-pablo",
    author: "Pablo López Domínguez",
    rating: 5,
    dateLabel: "Reseña verificada en Google",
    serviceTag: "Trato Familiar & Corte Unisex",
    excerpt:
      "Un salón de diez en Valencia. El trato de Fany y todo el equipo es súper cercano y profesional; te hacen sentir literalmente como en casa desde el primer minuto y el resultado siempre es impecable.",
    verified: true,
  },
  {
    id: "rev-maria",
    author: "Maria Urdaneta",
    rating: 5,
    dateLabel: "Reseña verificada en Google",
    serviceTag: "Coloración, Hair Spá & I.C.O.N.",
    excerpt:
      "Salí encantada con mi color y el ritual de lavado con masaje en el cuero cabelludo. Usan productos I.C.O.N. que dejan el pelo sedoso y con un brillo increíble. ¡Totalmente recomendable!",
    verified: true,
  },
  {
    id: "rev-francis",
    author: "Francis Alapont",
    rating: 5,
    dateLabel: "Reseña verificada en Google",
    serviceTag: "Profesionalidad & Fidelidad",
    excerpt:
      "Llevo años confiando en El Salón de Fany. Grandes profesionales en formación continua, puntuales, amables y con un ambiente cálido que cuesta encontrar hoy en día.",
    verified: true,
  },
  {
    id: "rev-lucia",
    author: "Lucía Pérez Poveda",
    rating: 5,
    dateLabel: "Reseña verificada en Google",
    serviceTag: "Corte para Sanear & Asesoramiento",
    excerpt:
      "Fui para sanear mi melena y dar forma sin perder largo y entendieron a la perfección lo que quería. Todo el equipo es un encanto y cuidan cada detalle.",
    verified: true,
  },
  {
    id: "rev-susana",
    author: "Susana Ciáurriz Labiano",
    rating: 5,
    dateLabel: "Reseña verificada en Google",
    serviceTag: "Hair Spá & Masaje Capilar",
    excerpt:
      "El masaje relajante en el cuero cabelludo es una maravilla absoluta. Desconectas del estrés diario mientras te dejan el pelo precioso. Mi peluquería de confianza junto a la Ciudad de las Ciencias.",
    verified: true,
  },
  {
    id: "rev-ana",
    author: "Ana Castellano",
    rating: 5,
    dateLabel: "Reseña verificada en Google",
    serviceTag: "Mechas, Estética & Eventos",
    excerpt:
      "Excelente atención y resultados espectaculares tanto en mechas como en peinados para eventos y estética. Te asesoran con total sinceridad sobre lo que mejor le sienta a tu cabello.",
    verified: true,
  },
  {
    id: "rev-meritxell",
    author: "Meritxell Fernández Matilla",
    rating: 5,
    dateLabel: "Reseña verificada en Google",
    serviceTag: "Maderoterapia & Cuidado Integral",
    excerpt:
      "Un equipo maravilloso. He probado tanto peluquería como estética y maderoterapia y la dedicación con la que trabajan es admirable. Se nota la vocación y el cariño en todo lo que hacen.",
    verified: true,
  },
  {
    id: "rev-salva",
    author: "Salva Calatayud",
    rating: 5,
    dateLabel: "Reseña verificada en Google",
    serviceTag: "Peluquería Unisex Valencia",
    excerpt:
      "Trato familiar, cercanía y gran nivel técnico. Fácil de reservar cita, cumplen los horarios y siempre sales con una sonrisa. 100% recomendable en el barrio.",
    verified: true,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-b1",
    title: "Coloración & Brillo I.C.O.N.",
    category: "Trabajos & Color",
    caption: "Trabajo real en El Salón de Fany con productos oficiales I.C.O.N. para una melena luminosa y cuidada.",
    technique: "Coloración & Brushing",
    image: "/images/galeria/trabajo-b-1.jpg",
  },
  {
    id: "gal-b2",
    title: "Mechas & Iluminación Dimensional",
    category: "Trabajos & Color",
    caption: "Degradado natural de luz trabajado por nuestro equipo técnico en Valencia.",
    technique: "Mechas & Matiz I.C.O.N.",
    image: "/images/galeria/trabajo-b-2.jpg",
  },
  {
    id: "gal-b3",
    title: "Corte para Sanear & Movimiento",
    category: "Trabajos & Color",
    caption: "Acabado sedoso, puntas saneadas y vitalidad renovada.",
    technique: "Corte & Tratamiento",
    image: "/images/galeria/trabajo-b-3.jpg",
  },
  {
    id: "gal-b4",
    title: "Ondas Suaves & Color Personalizado",
    category: "Trabajos & Color",
    caption: "Peinado con movimiento y brillo espejo tras tratamiento hidratante.",
    technique: "Styling & Color",
    image: "/images/galeria/trabajo-b-4.jpg",
  },
  {
    id: "gal-b5",
    title: "Peinado Especial & Eventos",
    category: "Trabajos & Color",
    caption: "Creación a medida para lucir impecable en ocasiones especiales.",
    technique: "Recogidos & Eventos",
    image: "/images/galeria/trabajo-b-5.jpg",
  },
  {
    id: "gal-b6",
    title: "Rubios Luminosos & Fibra Sana",
    category: "Trabajos & Color",
    caption: "Máximo respeto por la fibra capilar con líneas botánicas I.C.O.N.",
    technique: "Balayage & Nutrición",
    image: "/images/galeria/trabajo-b-6.jpg",
  },
  {
    id: "gal-b7",
    title: "Estilo, Textura & Volumen",
    category: "Trabajos & Color",
    caption: "Asesoramiento personalizado para resaltar tu estilo natural.",
    technique: "Estilismo Unisex",
    image: "/images/galeria/trabajo-b-7.jpg",
  },
  {
    id: "gal-b8",
    title: "Melena Hidratada & Radiante",
    category: "Trabajos & Color",
    caption: "Resultado real en nuestro salón junto a la Ciudad de las Artes y las Ciencias.",
    technique: "Terapia Capilar I.C.O.N.",
    image: "/images/galeria/trabajo-b-8.jpg",
  },
  {
    id: "gal-hs1",
    title: "Ritual Hair Spá & Masaje Craneal",
    category: "Hair Spá",
    caption: "Nuestras clientas aman nuestros masajes en el cuero cabelludo mientras aplicamos los tratamientos.",
    technique: "Relajación Capilar",
    image: "/images/hairspa/hairspa1.jpg",
  },
  {
    id: "gal-hs2",
    title: "Bienestar en el Lavacabezas",
    category: "Hair Spá",
    caption: "Cierras los ojos, respiras profundo y sientes cómo desaparecen las preocupaciones.",
    technique: "Hair Spá Valencia",
    image: "/images/hairspa/hairspa4.jpg",
  },
  {
    id: "gal-hs3",
    title: "Tratamiento & Calma Sensorial",
    category: "Hair Spá",
    caption: "Cuidamos tu cabello y tu bienestar corporal en cada sesión.",
    technique: "Masaje & Aromaterapia",
    image: "/images/hairspa/hairspa4-1.jpg",
  },
  {
    id: "gal-hs4",
    title: "Experiencia de Relajación Total",
    category: "Hair Spá",
    caption: "Un momento pensado exclusivamente para desconectar y renovar tu energía.",
    technique: "Ritual Bienestar",
    image: "/images/hairspa/hairspa3.jpg",
  },
  {
    id: "gal-sal1",
    title: "Interior de El Salón de Fany",
    category: "El Salón",
    caption: "Nuestro salón en Carrer d'Antonio Sacramento, 17-2 (Valencia).",
    technique: "Ambiente Familiar",
    image: "/images/salon/salon-1.jpg",
  },
  {
    id: "gal-sal2",
    title: "Zona de Estilismo & Tocadores",
    category: "El Salón",
    caption: "Espacio acogedor, luminoso y dinámico para sentirte como en tu propia casa.",
    technique: "Nuestro Salón",
    image: "/images/salon/salon-2.jpg",
  },
  {
    id: "gal-sal3",
    title: "Espacio Hair Spá & Productos I.C.O.N.",
    category: "El Salón",
    caption: "Equipado con las mejores marcas profesionales para el cuidado capilar.",
    technique: "Salón Oficial I.C.O.N.",
    image: "/images/salon/salon-3.jpg",
  },
];

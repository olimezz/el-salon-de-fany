export type ServiceCategory =
  | "Todo"
  | "Peluquería y Color"
  | "Hair Spá y Masajes"
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

export type GalleryCategory = "Todo" | "Color y Mechas" | "Corte y Peinado" | "Hair Spá" | "Salón";

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, "Todo">;
  caption: string;
  technique: string;
  image: string;
  aspect: string;
}

export interface IconProduct {
  id: string;
  name: string;
  line: string;
  benefit: string;
  description: string;
  badge: string;
  image: string;
}

export const SALON_INFO = {
  name: "El Salón de Fany",
  tagline: "Peluquería Unisex, Hair Spá & Estética Avanzada en Valencia",
  claim: "Un salón familiar y profesional en el que hacemos sentir al cliente como en su casa.",
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
  bookingUrl:
    process.env.NEXT_PUBLIC_CITA_ONLINE_URL ||
    "https://wa.me/34601125158?text=Hola%20El%20Sal%C3%B3n%20de%20Fany%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita%20previa",
  shopUrl: process.env.NEXT_PUBLIC_TIENDA_ONLINE_URL || "#tienda-icon",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=El+Sal%C3%B3n+de+Fany+Carrer+d%27Antonio+Sacramento+17-2+46013+Valencia",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=Carrer+d'Antonio+Sacramento,+17-2,+46013+Valencia&output=embed",
  socials: {
    instagram: "https://www.instagram.com/elsalondefany/",
    facebook: "https://www.facebook.com/elsalondefany/",
  },
  schedule: [
    { days: "Martes a jueves", hours: "10:00 – 19:00 h", open: true },
    { days: "Viernes", hours: "10:00 – 20:00 h", open: true },
    { days: "Sábado", hours: "09:00 – 13:00 h", open: true },
    { days: "Domingo y lunes", hours: "Cerrado (descanso semanal)", open: false },
  ],
};

export const SALON_SERVICES: SalonService[] = [
  {
    id: "hair-spa-ritual",
    title: "Ritual Hair Spá & Masaje Craneal Relajante",
    category: "Hair Spá y Masajes",
    tagline: "Nuestra experiencia insignia para desconectar cuerpo y mente mientras revitalizas tu cuero cabelludo.",
    description:
      "Un viaje sensorial en nuestro espacio Hair Spá con aromaterapia botánica I.C.O.N., oxigenación profunda del cuero cabelludo y masaje craneocervical descontracturante.",
    duration: "45 – 60 min",
    priceHint: "Ritual estrella · Consulta personalizada",
    featured: true,
    badge: "Experiencia Estrella",
    iconBrand: true,
    includes: [
      "Diagnóstico capilar y sensorial del cuero cabelludo",
      "Exfoliación suave detoxificante o infusión hidratante I.C.O.N.",
      "Masaje relajante profundo en cuero cabelludo, nuca y sienes",
      "Envoltura térmica aromática y secado de bienestar",
    ],
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80",
    whatsappMessage:
      "Hola El Salón de Fany, me gustaría reservar o recibir información sobre el Ritual Hair Spá y masaje relajante.",
  },
  {
    id: "corte-sanear-estilo",
    title: "Corte para Sanear, Diseño & Estilo Unisex",
    category: "Peluquería y Color",
    tagline: "Cortes pensados para tu fisonomía, textura natural y comodidad en el día a día.",
    description:
      "Escuchamos exactamente lo que necesitas: desde sanear puntas respetando tu largo hasta cambios de look modernos para mujer y hombre, con asesoramiento honesto.",
    duration: "45 min",
    priceHint: "Servicio Unisex · Productos I.C.O.N.",
    badge: "Unisex",
    iconBrand: true,
    includes: [
      "Asesoramiento de visagismo y diagnóstico de fibra capilar",
      "Lavado relajante en zona Hair Spá con champú específico I.C.O.N.",
      "Corte técnico de precisión (saneado, capas, bob, fade o clásico)",
      "Peinado de acabado y consejos prácticos de mantenimiento en casa",
    ],
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=80",
    whatsappMessage:
      "Hola El Salón de Fany, querría pedir cita para corte y estilo.",
  },
  {
    id: "coloracion-mechas-icon",
    title: "Coloración Consciente, Mechas & Balayage",
    category: "Peluquería y Color",
    tagline: "Luminosidad multidimensional, cobertura impecable y máximo respeto por la salud de tu cabello.",
    description:
      "Trabajamos técnicas de luz a medida (Balayage, Babylights, Melting y coloración eco-friendly I.C.O.N.) para lograr tonos naturales, brillantes y duraderos sin castigar la melena.",
    duration: "90 – 150 min",
    priceHint: "Diagnóstico previo incluido",
    featured: true,
    badge: "Alta Demanda",
    iconBrand: true,
    includes: [
      "Estudio cromático personalizado según subtono de piel",
      "Fórmulas de coloración respetuosas libres de amoniaco o baja oxidación",
      "Matización de brillo espejo y sellado de cutícula con tratamiento I.C.O.N.",
      "Masaje capilar relajante y brushing/ondas de acabado",
    ],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
    whatsappMessage:
      "Hola El Salón de Fany, me gustaría pedir cita o valoración para coloración / mechas.",
  },
  {
    id: "terapias-icon-hidratacion",
    title: "Terapias Capilares I.C.O.N. (Detox, Inner & India)",
    category: "Hair Spá y Masajes",
    tagline: "Nutrición intensiva con ingredientes orgánicos, aceites esenciales y proteínas reparadoras.",
    description:
      "Recupera la elasticidad, el cuerpo y el brillo de cabellos secos, encrespados o sensibilizados combinando la ciencia botánica de I.C.O.N. con nuestro protocolo de masaje capilar.",
    duration: "50 min",
    priceHint: "Tratamiento intensivo en salón",
    badge: "Partner Oficial I.C.O.N.",
    iconBrand: true,
    includes: [
      "Protocolo personalizado: Detox Shift, Hidratación Inner Home o Moringa & Argan India",
      "Aplicación con masaje lento estimulante de la microcirculación",
      "Aporte de aminoácidos, antioxidantes y vitaminas",
      "Recomendación de rutina de continuidad en casa",
    ],
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80",
    whatsappMessage:
      "Hola El Salón de Fany, me interesa un tratamiento capilar hidratante o detox con productos I.C.O.N.",
  },
  {
    id: "maderoterapia-corporal",
    title: "Maderoterapia Corporal, Remodelación & Bienestar",
    category: "Maderoterapia y Estética",
    tagline: "Técnica natural milenaria con instrumentos de madera anatómicos para drenar, tonificar y relajar.",
    description:
      "Sesiones manuales especializadas que activan el sistema linfático, mejoran la circulación, combaten la retención de líquidos y remodelan la silueta con una profunda sensación de ligereza.",
    duration: "55 min",
    priceHint: "Sesiones sueltas y bonos personalizados",
    featured: true,
    badge: "Especialidad Estética",
    includes: [
      "Valoración corporal inicial y selección de aceites esenciales drenantes",
      "Activación ganglionar y masaje manual preparatorio",
      "Trabajo específico con rodillos, copa sueca y tabla moldeadora de madera",
      "Efecto drenante, anticelulítico, reafirmante y descontracturante",
    ],
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80",
    whatsappMessage:
      "Hola El Salón de Fany, me gustaría informarme sobre las sesiones y bonos de Maderoterapia.",
  },
  {
    id: "estetica-facial-corporal",
    title: "Estética Facial, Cuidado de Mirada & Depilación",
    category: "Maderoterapia y Estética",
    tagline: "Cabina de estética pensada para mimar tu piel con cercanía, higiene rigurosa y resultados visibles.",
    description:
      "Higienes faciales profundas, hidratación luminosa, diseño de cejas y rituales calmantes de cabina para que salgas renovada de pies a cabeza en una sola visita.",
    duration: "30 – 60 min",
    priceHint: "Cabina de estética privada",
    includes: [
      "Limpieza facial oxigenante y extracción suave",
      "Mascarillas calmantes y masaje facial reafirmante",
      "Diseño y depilación cuidadosa de cejas y rostro",
      "Ambiente silencioso, cálido y climatizado",
    ],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
    whatsappMessage:
      "Hola El Salón de Fany, quisiera consultar cita para tratamiento de estética facial.",
  },
  {
    id: "recogidos-eventos-valencia",
    title: "Recogidos, Peinados de Invitada & Eventos Especiales",
    category: "Eventos y Manicura",
    tagline: "Creaciones elegantes y duraderas para bodas, fallas, graduaciones y celebraciones en Valencia.",
    description:
      "Diseñamos recogidos artesanales, semirrecogidos románticos, trenzas boho y ondas al agua que respetan tu estilo personal y aguantan impecables toda la celebración.",
    duration: "60 – 90 min",
    priceHint: "Asesoramiento previo disponible",
    badge: "Eventos & Invitadas",
    includes: [
      "Preparación textil del cabello con productos de fijación flexible I.C.O.N.",
      "Diseño adaptado al vestido, escote y complementos o tocado",
      "Sujeción cómoda y segura que dura horas sin tiranteces",
      "Opción de combinar con maquillaje y manicura en el salón",
    ],
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80",
    whatsappMessage:
      "Hola El Salón de Fany, tengo un evento y me gustaría reservar cita para peinado / recogido.",
  },
  {
    id: "manicura-pedicura-spa",
    title: "Manicura & Pedicura Spá de Larga Duración",
    category: "Eventos y Manicura",
    tagline: "Manos y pies impecables con esmaltado cuidado, hidratación y mimo en cada detalle.",
    description:
      "Cuidado integral de cutículas, limado anatómico, exfoliación e hidratación con masaje relajante para lucir unas manos y pies sanos, elegantes y luminosos.",
    duration: "40 – 60 min",
    priceHint: "Tradicional o Semipermanente",
    includes: [
      "Retirada respetuosa, preparación de uña natural y cuidado de cutículas",
      "Esmaltado de alta precisión (natural, francés o color de temporada)",
      "Exfoliación suave y masaje hidratante en manos o pies",
      "Esterilización rigurosa de todo el instrumental",
    ],
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=80",
    whatsappMessage:
      "Hola El Salón de Fany, me gustaría reservar cita para manicura o pedicura.",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "fany",
    name: "Fany",
    role: "Directora & Fundadora del Salón",
    experienceBadge: "+20 años en el sector · Docente & Estilista",
    bio: "Apasionada por la peluquería y el bienestar desde hace casi dos décadas. Antes de inaugurar El Salón de Fany en 2014 junto a la Ciudad de las Artes y las Ciencias, fue profesora en academia de peluquería y estética, formando a nuevas generaciones con rigor técnico y sensibilidad humana.",
    specialties: ["Diagnóstico Capilar & Color", "Corte y Visagismo", "Rituales Hair Spá I.C.O.N.", "Formación Continua"],
    quote: "«Mi mayor orgullo es que cada persona que cruza la puerta sienta la tranquilidad de estar en su propia casa y en manos expertas.»",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "esther",
    name: "Esther",
    role: "Técnico Colorista & Esteticista Especialista",
    experienceBadge: "Estética Avanzada & Maderoterapia",
    bio: "Combina la precisión técnica en coloración y tratamientos capilares con manos expertas en cabina estética, maderoterapia corporal, manicura y rituales relajantes.",
    specialties: ["Maderoterapia Corporal", "Estética & Manicura Spá", "Coloración y Mechas", "Masaje Craneal"],
    quote: "«Cuidar el cabello y la piel es también regalar un momento de pausa y bienestar real.»",
    image: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ana",
    name: "Ana",
    role: "Técnico Capilar & Especialista en Hair Spá",
    experienceBadge: "Color, Tratamientos I.C.O.N. & Bienestar",
    bio: "Especialista en terapias de hidratación, detox capilar y técnicas de color luminoso. Su delicadeza en el lavacabezas convierte el Hair Spá en una experiencia inolvidable.",
    specialties: ["Terapias I.C.O.N.", "Ritual Hair Spá", "Mechas & Brillo", "Peinados y Eventos"],
    quote: "«Cuando el cuero cabelludo está sano y relajado, el cabello brilla con una fuerza totalmente distinta.»",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sebas",
    name: "Sebas",
    role: "Estilista Unisex & Especialista en Corte",
    experienceBadge: "Corte Técnico, Estilo & Tendencias",
    bio: "Domina el corte masculino y femenino con un enfoque actual, versátil y fácil de peinar en casa, cuidando cada ángulo y acabado con máxima dedicación.",
    specialties: ["Corte Femenino y Masculino", "Styling & Brushing", "Asesoramiento de Imagen", "Cuidado Unisex"],
    quote: "«Un buen corte se nota el primer día en el salón, pero sobre todo cuando te peinas fácilmente en casa semanas después.»",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
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
      "Un salón de diez en Valencia. El trato de Fany y todo el equipo es súper cercano y profesional; te hacen sentir literalmente como en casa desde el primer minuto y el resultado del corte siempre es impecable.",
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
      "Fui para sanear mi melena y dar forma sin perder largo y entendieron a la perfección lo que quería. Tanto Fany como las chicas, incluidas Isa y Mónica, son un encanto y cuidan cada detalle.",
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
    id: "gal-1",
    title: "Balayage Caramelo & Brillo I.C.O.N.",
    category: "Color y Mechas",
    caption: "Iluminación cálida dimensional trabajada sin castigar la fibra y sellada con ritual de nutrición I.C.O.N.",
    technique: "Balayage a mano alzada + Gloss",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
    aspect: "aspect-[4/5]",
  },
  {
    id: "gal-2",
    title: "Zona Hair Spá & Masaje Craneal",
    category: "Hair Spá",
    caption: "Nuestro rincón de calma diseñado para que el lavado y masaje del cuero cabelludo sean un auténtico ritual de desconexión.",
    technique: "Aromaterapia + Masaje Craneocervical",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80",
    aspect: "aspect-[4/5]",
  },
  {
    id: "gal-3",
    title: "Corte Saneado con Movimiento Natural",
    category: "Corte y Peinado",
    caption: "Capas invisibles y puntas saneadas que devuelven ligereza, volumen y facilidad de peinado en casa.",
    technique: "Corte texturizado + Brushing suave",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=80",
    aspect: "aspect-[4/5]",
  },
  {
    id: "gal-4",
    title: "Nuestro Salón en Antonio Sacramento 17",
    category: "Salón",
    caption: "Un espacio luminoso, acogedor y familiar a pocos pasos de la Ciudad de las Artes y las Ciencias de Valencia.",
    technique: "Ambiente Warm Boutique",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80",
    aspect: "aspect-[4/5]",
  },
  {
    id: "gal-5",
    title: "Babylights Rubias & Matiz Champagne",
    category: "Color y Mechas",
    caption: "Transición suave desde la raíz para un efecto luminoso muy natural y de bajo mantenimiento.",
    technique: "Micro-mechas + Tratamiento Inner",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80",
    aspect: "aspect-[4/5]",
  },
  {
    id: "gal-6",
    title: "Recogido Editorial para Invitada y Eventos",
    category: "Corte y Peinado",
    caption: "Textura artesanal y sujeción cómoda pensada para lucir radiante durante toda la celebración.",
    technique: "Recogido a medida + Fijación flexible",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1000&q=80",
    aspect: "aspect-[4/5]",
  },
];

export const ICON_PRODUCTS: IconProduct[] = [
  {
    id: "icon-india",
    name: "Línea I.C.O.N. India (Moringa & Argán)",
    line: "Hair-Yurvedics · Nutrición y Brillo",
    benefit: "Transforma al instante el cabello apagado o encrespado aportando sedosidad, luz y aroma exótico.",
    description: "Aceite seco, champú y acondicionador enriquecidos con aceite de moringa y argán para reparar sin apelmazar.",
    badge: "Top Ventas en Salón",
    image: "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "icon-hydration",
    name: "I.C.O.N. Drench, Free & Inner Home",
    line: "Regimedy Hidratación Profunda",
    benefit: "Devuelve la elasticidad y la hidratación interna a melenas secas, coloreadas o expuestas al sol de Valencia.",
    description: "El trío favorito de nuestras clientas para mantener en casa el efecto sedoso de nuestro Hair Spá.",
    badge: "Esencial Hidratación",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "icon-detox",
    name: "I.C.O.N. Shift, Energy & Awake",
    line: "Regimedy Detox & Cuero Cabelludo",
    benefit: "Purifica el folículo, equilibra el cuero cabelludo y estimula una sensación refrescante de bienestar.",
    description: "La base perfecta de nuestro ritual de masaje capilar relajante para oxigenar y revitalizar desde la raíz.",
    badge: "Ritual Hair Spá",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80",
  },
];

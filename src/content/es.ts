import type { SiteContent } from "@/lib/i18n/types";

export const es: SiteContent = {
  site: {
    name: "Saulo Alaniz",
    title: "Ingeniero de Software",
    url: "https://sauloalaniz.dev",
    description:
      "Saulo Alaniz — Desarrollador de IA, web, móvil y full-stack que construye productos listos para producción. Actualmente en Paystand.",
    location: "Guadalajara, México",
    currentCompany: "Paystand",
  },
  hero: {
    positioning:
      "Desarrollador de IA, web, móvil y full-stack que construye productos listos para producción.",
    currentRole:
      "Pasante de IA/ML en Paystand — productos full-stack internos y herramientas operativas.",
    context: [
      { label: "Actualmente en Paystand" },
      { label: "Con base en Guadalajara, México" },
      { label: "React · Next.js · React Native · Flutter · IA" },
    ],
    metrics: [
      { value: "3+", label: "Años lanzando productos" },
      { value: "4", label: "Productos construidos" },
      { value: "3", label: "Empresas en producción" },
      { value: "IA + Web + Móvil", label: "Ingeniero full-stack" },
    ],
    ctas: {
      primary: { label: "Ver productos", href: "#projects" },
      secondary: { label: "Contactar", href: "#contact" },
    },
  },
  navigation: [
    { label: "Capacidades", href: "#build" },
    { label: "Experiencia", href: "#experience" },
    { label: "Productos", href: "#projects" },
    { label: "Contacto", href: "#contact" },
  ],
  whatIBuild: {
    label: "Capacidades",
    title: "IA, web, móvil y full-stack",
    subtitle:
      "Un ingeniero de software que entrega en todo el stack — no un especialista en una sola capa.",
    items: [
      {
        title: "Aplicaciones Web Modernas",
        description:
          "Interfaces con React, Next.js y TypeScript diseñadas para rendimiento, escala y confiabilidad en producción.",
        icon: "Globe",
      },
      {
        title: "Productos Móviles",
        description:
          "Apps con React Native y Flutter con UX lista para producción y arquitectura multiplataforma.",
        icon: "Smartphone",
      },
      {
        title: "Sistemas con IA",
        description:
          "Integraciones con OpenAI, flujos de automatización y funciones inteligentes en productos reales.",
        icon: "Brain",
      },
      {
        title: "Ingeniería Más Allá del Software",
        description:
          "Formación en mecatrónica — sistemas embebidos, control y integración hardware-software.",
        icon: "Cpu",
      },
    ],
  },
  experience: {
    label: "Experiencia",
    title: "Experiencia en producción",
    subtitle:
      "Empresas reales. Productos reales. Impacto en IA, web, móvil y sistemas full-stack.",
    currentBadge: "Actual",
    impactLabel: "Impacto",
    items: [
      {
        period: "2026 — Presente",
        company: "Paystand",
        role: "Pasante IA/ML",
        summary:
          "Productos full-stack internos y herramientas operativas en Paystand.",
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Python",
        ],
        impact:
          "Construyo herramientas full-stack internas y software operativo con React, Next.js, TypeScript y Python.",
        highlights: [
          "Colaboración entre equipos en soluciones de software internas.",
          "Desarrollo de funcionalidades, pruebas y mejoras de producto.",
        ],
        logo: { initials: "P", accent: "from-blue-500/30 to-indigo-500/20" },
        featured: true,
      },
      {
        period: "2022 — 2025",
        company: "Whipple Studio",
        role: "Desarrollador de Aplicaciones",
        summary:
          "Desarrollo de producto full-stack en iOS nativo y aplicaciones React web.",
        technologies: ["Swift", "SwiftUI", "React", "Next.js", "TypeScript"],
        impact:
          "Entregué productos multiplataforma en iOS nativo y aplicaciones React/Next.js.",
        highlights: [
          "Refactoricé apps iOS en producción con Swift y SwiftUI.",
          "Construí y lancé productos web con React y Next.js.",
        ],
        logo: { initials: "W", accent: "from-blue-500/30 to-sky-500/20" },
        featured: false,
      },
      {
        period: "2021 — 2023",
        company: "Guía de Hoy",
        role: "Ingeniero de Software",
        summary:
          "Arquitectura frontend y entrega para una plataforma de medios en producción.",
        technologies: ["React", "Next.js", "TypeScript", "REST APIs"],
        impact:
          "Lideré la arquitectura frontend de una plataforma de medios con miles de lectores diarios.",
        highlights: [
          "Construí interfaces React/Next.js en producción e integraciones API.",
          "Mejoré flujos de UX enfocados en engagement y conversión.",
        ],
        logo: { initials: "G", accent: "from-emerald-500/30 to-teal-500/20" },
        featured: false,
      },
    ],
  },
  projects: {
    label: "Productos",
    title: "Productos que he construido",
    subtitle:
      "Casos de estudio al estilo startup — problemas reales, soluciones reales, ingeniería real.",
    caseStudyBadge: "Caso de estudio",
    problemLabel: "Problema",
    solutionLabel: "Solución",
    impactLabel: "Impacto",
    liveProductLabel: "Producto en vivo",
    watchDemoLabel: "Ver demo",
    closeDemoLabel: "Cerrar demo",
    demoUnavailableLabel: "Demo no disponible.",
    sourceLabel: "Código",
    items: [
      {
        slug: "ecosort-ai",
        title: "EcoSort AI",
        tags: ["IA", "Visión Computacional", "Embebidos"],
        problem:
          "Centros de reciclaje y entornos educativos dependen de la clasificación manual de residuos, lo que introduce errores humanos, aumenta el tiempo de procesamiento y reduce la eficiencia del reciclaje.",
        solution:
          "Construí una plataforma inteligente de clasificación de residuos con un modelo MobileNetV2 entrenado a medida, optimizado con TensorFlow Lite para inferencia en tiempo real en Raspberry Pi 5. El sistema clasifica plástico, papel, cartón y aluminio mediante visión computacional con despliegue en edge.",
        impact:
          "Reducción de la dependencia del sorting manual con un pipeline de clasificación en tiempo real y despliegue de IA en hardware embebido — demostrando integración práctica de IA más allá de entornos solo en la nube.",
        stack: [
          "Python",
          "TensorFlow",
          "MobileNetV2",
          "TensorFlow Lite",
          "OpenCV",
          "Flask",
          "Raspberry Pi",
        ],
        liveUrl: "https://ecosortai-landing.vercel.app/",
        demoUrl: null,
        githubUrl: "https://github.com/SauloMLA/ecoSortAI",
        image: "/projects/ecosort-ai.png",
        gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
      },
      {
        slug: "grupo-agavaceas",
        title: "Grupo Agaváceas",
        tags: ["Web", "B2B", "Enterprise"],
        problem:
          "Las empresas agrícolas en la cadena de valor del tequila suelen tener dificultades para comunicar profesionalismo, madurez operativa y capacidades tecnológicas a través de sitios web obsoletos — generando retos de credibilidad con productores, destilerías y clientes empresariales.",
        solution:
          "Diseñé y desarrollé una plataforma corporativa premium que posiciona a Grupo Agaváceas como socio estratégico. Incluye landing de lujo, arquitectura de servicios enterprise, narrativa de trazabilidad, visualización interactiva de procesos, animaciones con Framer Motion y optimización SEO.",
        impact:
          "Modernización completa de la percepción de marca con posicionamiento comercial más fuerte, mejor comunicación de operaciones agrícolas y una experiencia de usuario de nivel enterprise en producción.",
        stack: [
          "Next.js",
          "TypeScript",
          "React",
          "Tailwind CSS",
          "Framer Motion",
        ],
        liveUrl: "https://grupo-agavaceas.vercel.app/",
        demoUrl: null,
        githubUrl: "https://github.com/SauloMLA/grupo-agavaceas",
        image: "/projects/grupo-agavaceas.png",
        gradient: "from-amber-500/20 via-yellow-500/10 to-orange-500/20",
      },
      {
        slug: "servimotos",
        title: "ServiMotos",
        tags: ["Móvil", "Operaciones", "Multiplataforma"],
        problem:
          "Las operaciones de venta y servicio de motocicletas dependen de hojas de cálculo, apps de mensajería y coordinación manual entre tiendas, supervisores y técnicos de campo — generando poca visibilidad y flujos fragmentados.",
        solution:
          "Desarrollé una plataforma de operaciones multiplataforma con Flutter para web, móvil y escritorio. Incluye autenticación, dashboards operativos, gestión de órdenes de servicio, asignación de técnicos, verificación VIN, captura de evidencia e integración API con backend mock para demos.",
        impact:
          "Centralización de flujos operativos con menor complejidad de coordinación, demostrando arquitectura multiplataforma escalable lista para integración con backend en producción.",
        stack: [
          "Flutter",
          "Dart",
          "REST APIs",
          "JWT",
          "Material 3",
        ],
        liveUrl: "#",
        demoUrl: "https://youtube.com/shorts/Tx-vGEFVsKw",
        githubUrl: "https://github.com/SauloMLA/punto-de-venta",
        image: "/projects/servimotos.png",
        gradient: "from-orange-500/20 via-amber-500/10 to-yellow-500/20",
      },
      {
        slug: "passly-cashier",
        title: "Passly Cashier",
        tags: ["Móvil", "Lealtad", "Producto"],
        problem:
          "Los negocios con programas de lealtad luchan con validación manual de visitas, transacciones duplicadas y seguimiento inconsistente de recompensas — aumentando la fricción en caja y errores de registro.",
        solution:
          "Construí una app multiplataforma con Flutter para que cajeros validen visitas vía QR, códigos PDF417 o entrada manual. Incluye autenticación segura, flujos de desbloqueo de recompensas, procesamiento idempotente y modos API mock/producción con arquitectura por features.",
        impact:
          "Reducción de errores de validación manual, prevención de registros duplicados y mayor eficiencia en el flujo del cajero con arquitectura móvil orientada a producción.",
        stack: [
          "Flutter",
          "Dart",
          "Dio",
          "REST APIs",
          "QR Scanner",
          "Material Design",
        ],
        liveUrl: "#",
        demoUrl: "https://youtube.com/shorts/wZbQrV4XcWg",
        githubUrl: "https://github.com/SauloMLA/passly_cashier",
        image: "/projects/passly-cashier.png",
        gradient: "from-rose-500/20 via-orange-500/10 to-amber-500/20",
      },
    ],
  },
  philosophy: {
    label: "Filosofía",
    title: "Cómo construyo",
    lead: "No construyo proyectos demo. Construyo productos que la gente realmente usa.",
    body: "Cada sistema que entrego — ya sea herramientas internas en Paystand, un dashboard en React o una app móvil — está diseñado para resolver un problema real, rendir bajo carga y sostenerse en producción.",
    principles: [
      {
        title: "Product thinking primero",
        description:
          "Las decisiones de ingeniería empiezan con el usuario y el resultado de negocio — no con la tendencia tecnológica.",
      },
      {
        title: "Entregar, luego refinar",
        description:
          "Software funcionando en producción supera una arquitectura perfecta en un README.",
      },
      {
        title: "Ownership full-stack",
        description:
          "Desde integraciones de IA hasta UX móvil y APIs backend — construyo en toda la superficie del producto.",
      },
    ],
  },
  contact: {
    label: "Contacto",
    title: "Trabajemos juntos",
    subtitle:
      "Abierto a roles de ingeniería de software — IA, full-stack, web y móvil.",
    links: [
      {
        label: "Email",
        value: "marioalaniz04@gmail.com",
        href: "mailto:marioalaniz04@gmail.com",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/saulomarioalanizleon",
        href: "https://linkedin.com/in/saulomarioalanizleon",
      },
      {
        label: "GitHub",
        value: "github.com/SauloMLA",
        href: "https://github.com/SauloMLA",
      },
      {
        label: "Ubicación",
        value: "Guadalajara, México",
        href: null,
      },
    ],
  },
};

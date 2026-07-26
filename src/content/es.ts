import type { SiteContent } from "@/lib/i18n/types";

export const es: SiteContent = {
  site: {
    name: "Saulo Alaniz",
    title: "Ingeniero de Software & Creador",
    url: "https://sauloalaniz.dev",
    description:
      "Saulo Alaniz — Creador, inventor e ingeniero full-stack de IA, web y móvil que construye productos listos para producción.",
    location: "Guadalajara, México",
    currentCompany: "Paystand",
  },
  hero: {
    positioning:
      "Creador, inventor e ingeniero full-stack que diseña sistemas inteligentes, plataformas fintech y software a la medida.",
    currentRole:
      "Desarrollador de software full-stack e IA — construyendo plataformas web, sistemas de IA y aplicaciones móviles.",
    context: [
      { label: "Con base en Guadalajara, México" },
      { label: "Next.js · NestJS · React Native · Flutter · IA" },
    ],
    metrics: [
      { value: "3+", label: "Años lanzando productos" },
      { value: "5", label: "Productos de producción" },
      { value: "3", label: "Empresas en producción" },
      { value: "Full-Stack + IA", label: "Arquitecto de sistemas" },
    ],
    ctas: {
      primary: { label: "Explorar productos", href: "#projects" },
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
    label: "Capacidades & Tecnologías",
    title: "Fintech, IA, web, móvil y mecatrónica",
    subtitle:
      "Un creador e inventor que diseña en todo el stack — desde plataformas SaaS financieras hasta visión por computadora e ingeniería mecatrónica.",
    techTitle: "Stack de Tecnologías & Herramientas",
    toolsBadge: "HERRAMIENTAS & LENGUAJES",
    items: [
      {
        title: "Plataformas Fintech & SaaS",
        description:
          "Arquitectura Clean & BFF en Next.js y NestJS para motores de factoraje, comisiones en tiempo real y bitácoras de auditoría inmutables.",
        icon: "Globe",
      },
      {
        title: "Sistemas con IA & Edge",
        description:
          "Modelos TensorFlow Lite, computación en el borde con Raspberry Pi y soluciones de visión artificial en tiempo real.",
        icon: "Brain",
      },
      {
        title: "Productos Móviles Multiplataforma",
        description:
          "Aplicaciones con React Native y Flutter enfocadas en experiencia de usuario enterprise y operaciones en campo.",
        icon: "Smartphone",
      },
      {
        title: "Mecatrónica & Sistemas Hardware",
        description:
          "Formación en ingeniería mecatrónica — integrando microcontroladores, sensores y software operativo de bajo nivel.",
        icon: "Cpu",
      },
    ],
    techCategories: [
      {
        category: "Frontend & UI",
        skills: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5/CSS3", "Zustand / Redux"],
      },
      {
        category: "Backend & APIs",
        skills: ["NestJS", "Node.js", "Express", "Python", "Fastify", "REST APIs", "GraphQL", "Swagger/OpenAPI"],
      },
      {
        category: "Bases de Datos & Cloud",
        skills: ["PostgreSQL", "Neon DB", "Prisma ORM", "MongoDB", "Redis", "Docker", "Vercel", "Railway"],
      },
      {
        category: "Móvil & Multiplataforma",
        skills: ["React Native", "Flutter", "Swift", "SwiftUI", "iOS Native", "Dart"],
      },
      {
        category: "IA, Visión & Mecatrónica",
        skills: ["OpenAI API", "TensorFlow Lite", "OpenCV", "Raspberry Pi", "Microcontroladores", "C/C++"],
      },
    ],
  },
  experience: {
    label: "Experiencia",
    title: "Trayectoria en producción",
    subtitle:
      "Empresas reales. Productos reales. Impacto en IA, fintech, web, móvil y sistemas mecatrónicos.",
    currentBadge: "Reciente",
    impactLabel: "Impacto",
    items: [
      {
        period: "2024 — 2025",
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
          "Construí herramientas full-stack internas y software operativo con React, Next.js, TypeScript y Python.",
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
    title: "Sistemas & Productos que he creado",
    subtitle:
      "Soluciones con arquitectura lista para producción — fintech, IA en el borde, aplicaciones móviles y web de alto nivel.",
    caseStudyBadge: "Caso de estudio",
    problemLabel: "Problema",
    solutionLabel: "Solución",
    impactLabel: "Impacto",
    liveProductLabel: "Producto en vivo",
    watchDemoLabel: "Ver demo",
    closeDemoLabel: "Cerrar demo",
    demoUnavailableLabel: "Demo no disponible.",
    sourceLabel: "Código Fuente",
    repoFrontLabel: "Repo Frontend",
    repoBackLabel: "Repo Backend",
    items: [
      {
        slug: "factorcore",
        title: "FactorCore",
        tags: ["Fintech", "SaaS Multi-tenant", "Clean Architecture", "Full-Stack"],
        problem:
          "Las empresas de factoraje financiero enfrentan riesgos operativos críticos por falta de validación de aforos en tiempo real, cálculos manuales de comisiones, falta de auditoría de accesos y dispersión de expedientes de clientes.",
        solution:
          "Diseñé y desarrollé una plataforma SaaS multi-inquilino de originación de factoraje estructurada con Clean Architecture y Backend-for-Frontend (BFF) en Next.js 15 y NestJS. Incluye motor de reglas de negocio para aforos (85%) y comisiones (1.5%), bitácora de auditoría inmutable criptográfica, autenticación JWT con control de roles (Mesa de Control / Operador), persistencia en Neon PostgreSQL mediante Prisma ORM y soporte i18n dinámico (ES/EN).",
        impact:
          "Automatización completa del flujo de originación y cesión de derechos de crédito, eliminando el 100% de errores de cálculo en comisiones y garantizando la auditabilidad criptográfica de cada transacción en producción.",
        stack: [
          "Next.js 15",
          "React 19",
          "NestJS",
          "TypeScript",
          "Prisma ORM",
          "PostgreSQL (Neon)",
          "Tailwind CSS",
          "Docker",
          "Zod",
          "JWT",
        ],
        liveUrl: "https://factorx-frontend.vercel.app/",
        demoUrl: null,
        githubUrl: "https://github.com/SauloMLA/factorx-frontend",
        frontendGithubUrl: "https://github.com/SauloMLA/factorx-frontend",
        backendGithubUrl: "https://github.com/SauloMLA/capitalx-factorcore",
        image: "/projects/factorcore.png",
        gradient: "from-blue-600/30 via-indigo-500/20 to-cyan-400/30",
      },
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
    label: "Filosofía de Invención",
    title: "Cómo creo e invento",
    lead: "No construyo demos superfluas. Invento sistemas reales para problemas complejos.",
    body: "Cada producto que entrego — desde la plataforma Fintech FactorCore hasta herramientas de IA o prototipos mecatrónicos — está diseñado con pensamiento de primer principio, arquitectura limpia y ejecución robusta para producción.",
    principles: [
      {
        title: "Pensamiento de Creador & Producto",
        description:
          "Las decisiones de ingeniería nacen de entender el impacto real en el usuario y la invención del mejor flujo técnico.",
      },
      {
        title: "Entregar & Evolucionar en Producción",
        description:
          "Un sistema funcional en producción con arquitectura escalable supera cualquier especificación en papel.",
      },
      {
        title: "Dominio Multidisciplinario Full-Stack",
        description:
          "Desde modelos de IA y algoritmos financieros hasta apps móviles, frontend receptivo e integración hardware.",
      },
    ],
  },
  contact: {
    label: "Contacto",
    title: "Creemos algo extraordinario",
    subtitle:
      "Abierto a proyectos de ingeniería de software, arquitectura de sistemas y colaboración tecnológica.",
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

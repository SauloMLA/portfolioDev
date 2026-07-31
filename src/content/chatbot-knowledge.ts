export type ChatbotFAQ = {
  keywords: string[];
  answer: string;
  category: "project" | "experience" | "service" | "contact" | "general" | "education" | "technologies" | "personal";
  relatedProjects?: string[]; // slugs of related projects
};

export type ChatbotContent = {
  welcomeMessage: string;
  inputPlaceholder: string;
  fallbackMessage: string;
  whatsappButtonLabel: string;
  scheduleButtonLabel: string;
  whatsappLink: string;
  whatsappScheduleLink: string;
  emailScheduleLink: string;
  quickReplies: { label: string; query: string }[];
  faqs: ChatbotFAQ[];
};

export const chatbotKnowledge: Record<"en" | "es", ChatbotContent> = {
  es: {
    welcomeMessage: "¡Hola! Soy el asistente virtual de Saulo. Pregúntame sobre sus proyectos, experiencia, servicios o agendemos una llamada.",
    inputPlaceholder: "Escribe tu pregunta...",
    fallbackMessage: "No tengo información suficiente sobre eso. Si quieres hablar de tu proyecto, escríbeme por WhatsApp.",
    whatsappButtonLabel: "Escribir por WhatsApp",
    scheduleButtonLabel: "Agendar Llamada / Contacto",
    whatsappLink: "https://wa.me/526674091834?text=Hola%20Saulo,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto.",
    whatsappScheduleLink: "https://wa.me/526674091834?text=Hola%20Saulo,%20me%20gustar%C3%ADa%20agendar%20una%20llamada%20contigo%20para%20hablar%20de%20un%20proyecto.",
    emailScheduleLink: "mailto:marioalaniz04@gmail.com?subject=Agendar%20Llamada%20-%20Saulo%20Alaniz&body=Hola%20Saulo,%20me%20gustar%C3%ADa%20agendar%20una%20llamada%20contigo%20para%20platicar%20sobre%20un%20proyecto.",
    quickReplies: [
      { label: "💬 Ver proyectos", query: "Háblame de tus proyectos" },
      { label: "📄 Experiencia", query: "Cuéntame sobre tu experiencia laboral" },
      { label: "💰 Servicios", query: "Qué servicios ofreces" },
      { label: "📅 Agendar llamada", query: "Quiero agendar una llamada" }
    ],
    faqs: [
      {
        keywords: ["proyecto", "proyectos", "portfolio", "portafolio", "creado", "hecho", "construido"],
        answer: "He construido diversos sistemas listos para producción. Destacan:\n\n• **FactorCore**: Plataforma SaaS Fintech multi-tenant con Clean Architecture.\n• **EcoSort AI**: Clasificador de residuos con visión computacional y Edge AI.\n• **Grupo Agaváceas**: Plataforma corporativa premium B2B.\n• **ServiMotos**: App multiplataforma (Flutter) para operaciones de campo.\n• **Passly Cashier**: Aplicación móvil de lealtad comercial.\n\n¿De cuál te gustaría saber más?",
        category: "project",
        relatedProjects: ["factorcore", "ecosort-ai", "grupo-agavaceas", "servimotos", "passly-cashier"]
      },
      {
        keywords: ["factorcore", "factor core", "fintech", "saas", "factoring", "factoraje"],
        answer: "**FactorCore** es una plataforma SaaS multi-tenant de originación de factoraje financiero. Resolví los riesgos operativos y el cálculo manual de comisiones implementando una arquitectura limpia y BFF con Next.js 15 y NestJS, logrando automatizar el 100% del cálculo y auditoría criptográfica en producción.",
        category: "project",
        relatedProjects: ["factorcore"]
      },
      {
        keywords: ["ecosort", "ecosort ai", "reciclaje", "clasificacion", "raspberry", "vision", "tensorflow", "tflite"],
        answer: "**EcoSort AI** es una solución de IA en el borde (Edge AI) para clasificar residuos en tiempo real. Utiliza un modelo MobileNetV2 optimizado con TensorFlow Lite desplegado en una Raspberry Pi 5 con OpenCV. Automatiza la clasificación de plástico, cartón, aluminio y papel.",
        category: "project",
        relatedProjects: ["ecosort-ai"]
      },
      {
        keywords: ["agavaceas", "agave", "tequila", "grupo agavaceas", "agricola"],
        answer: "**Grupo Agaváceas** es una plataforma B2B premium diseñada para digitalizar la percepción de marca y la trazabilidad de procesos agrícolas en la cadena de valor del tequila. Cuenta con animaciones fluidas en Framer Motion y una UX altamente profesional.",
        category: "project",
        relatedProjects: ["grupo-agavaceas"]
      },
      {
        keywords: ["servimotos", "motos", "ordenes", "taller", "flutter"],
        answer: "**ServiMotos** es una plataforma multiplataforma (web/móvil/escritorio) en Flutter para gestionar la logística de talleres, asignación de técnicos, validación de VIN y captura de evidencia de servicio.",
        category: "project",
        relatedProjects: ["servimotos"]
      },
      {
        keywords: ["passly", "passly cashier", "lealtad", "fidelidad", "puntos", "qr"],
        answer: "**Passly Cashier** es una app móvil en Flutter para cajeros que valida visitas y desbloquea recompensas en programas de lealtad escaneando códigos QR/PDF417, evitando registros duplicados de forma segura.",
        category: "project",
        relatedProjects: ["passly-cashier"]
      },
      {
        keywords: [
          "experiencia", "trayectoria", "trabajo", "trabajos", "historial", "curriculum", "resume", "cv", "paystand", 
          "whipple", "guia de hoy", "experiencia laboral", "experiencia profesional", "empleo", "empleos", "trabajado"
        ],
        answer: "Cuento con experiencia en producción:\n\n• **Paystand** (Ene-Jul 2026): Pasante IA/ML desarrollando herramientas operativas internas full-stack (Next.js, Node.js, Python).\n• **Whipple Studio** (2022-2025): Desarrollo de apps móviles nativas iOS (Swift/SwiftUI) y web (Next.js/React).\n• **Guía de Hoy** (2021-2023): Liderazgo frontend para una plataforma de medios con alto tráfico.",
        category: "experience"
      },
      {
        keywords: ["paystand", "ml", "machine learning", "pasante"],
        answer: "En **Paystand** me desempeñé como Pasante de IA/ML construyendo herramientas internas de software y pipelines operativos full-stack con React, Next.js, TypeScript y Python para mejorar flujos entre equipos.",
        category: "experience"
      },
      {
        keywords: ["servicios", "ofreces", "haces", "hacer", "contratar", "desarrollo"],
        answer: "Ofrezco servicios de ingeniería de software premium:\n\n1. **Desarrollo Full-Stack**: Aplicaciones web modernas y robustas con Next.js y NestJS.\n2. **Desarrollo Móvil**: Aplicaciones nativas e híbridas usando Swift/SwiftUI, React Native o Flutter.\n3. **Sistemas con IA & Edge**: Integración de visión computacional, modelos TensorFlow Lite y hardware embebido (Raspberry Pi).\n4. **Arquitectura & Consultoría**: Diseño de arquitecturas limpias, modulares y seguras para fintech y startups.",
        category: "service"
      },
      {
        keywords: ["contacto", "llamar", "llamada", "calendario", "calendly", "agenda", "reunion", "reunir", "agendar", "cita", "email", "correo", "whatsapp", "telefono", "meet", "google meet"],
        answer: "¡Me encantaría hablar sobre tu proyecto! Puedes escribirme por WhatsApp o enviarme un correo electrónico con un mensaje predeterminado para agendar una llamada. También estoy disponible por correo en marioalaniz04@gmail.com.",
        category: "contact"
      },
      {
        keywords: ["estudio", "estudiar", "estudiaste", "carrera", "universidad", "educacion", "estudios", "mecatronica", "formacion", "titulo"],
        answer: "Me formé en Ingeniería Mecatrónica en la Universidad Autónoma de Guadalajara (UAG). Esta base multidisciplinaria me permite integrar software de bajo nivel, hardware (sensores y microcontroladores) con desarrollo web full-stack, aplicaciones móviles nativas y sistemas de Inteligencia Artificial.",
        category: "education"
      },
      {
        keywords: ["tecnologia", "tecnologias", "lenguajes", "frameworks", "stack", "herramientas", "sabes", "conoces", "programas", "skills", "habilidades"],
        answer: "Tengo dominio en las siguientes tecnologías y herramientas:\n\n• **Frontend & UI**: React 19, Next.js 15, TypeScript, Tailwind CSS, Framer Motion.\n• **Backend & APIs**: NestJS, Node.js, Express, Python, REST APIs, GraphQL, Swagger.\n• **Bases de Datos & Cloud**: PostgreSQL (Neon), Prisma ORM, MongoDB, Redis, Docker, Vercel.\n• **Móvil**: Flutter, React Native, Swift, SwiftUI, iOS Nativo.\n• **IA & Mecatrónica**: TensorFlow Lite, OpenCV, Raspberry Pi, Microcontroladores, C/C++.",
        category: "technologies"
      },
      {
        keywords: ["edad", "anos tienes", "anos", "quien eres", "sobre ti", "personal", "nacimiento", "cumpleanos"],
        answer: "Tengo 22 años. Soy Saulo Alaniz, un ingeniero de software e inventor de Guadalajara, México, enfocado en diseñar sistemas inteligentes, plataformas fintech y software a la medida con alto rendimiento.",
        category: "personal"
      }
    ]
  },
  en: {
    welcomeMessage: "Hi! I am Saulo's AI virtual assistant. Ask me about his projects, experience, services, or let's schedule a call.",
    inputPlaceholder: "Type your question...",
    fallbackMessage: "I don't have enough information about that. If you'd like to discuss your project, message me on WhatsApp!",
    whatsappButtonLabel: "Message on WhatsApp",
    scheduleButtonLabel: "Schedule a Call / Contact",
    whatsappLink: "https://wa.me/526674091834?text=Hello%20Saulo,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
    whatsappScheduleLink: "https://wa.me/526674091834?text=Hello%20Saulo,%20I'd%20like%20to%20schedule%20a%20call%20with%20you%20to%20discuss%20a%20project.",
    emailScheduleLink: "mailto:marioalaniz04@gmail.com?subject=Schedule%20Call%20-%20Saulo%20Alaniz&body=Hello%20Saulo,%20I%20would%20like%20to%20schedule%20a%20meeting%20with%20you%20to%20discuss%20a%20project.",
    quickReplies: [
      { label: "💬 View projects", query: "Tell me about your projects" },
      { label: "📄 Experience", query: "What is your professional work experience?" },
      { label: "💰 Services", query: "What services do you offer?" },
      { label: "📅 Schedule call", query: "I want to schedule a call" }
    ],
    faqs: [
      {
        keywords: ["project", "projects", "portfolio", "created", "built", "work"],
        answer: "I have built various production-ready systems, including:\n\n• **FactorCore**: Multi-tenant Fintech SaaS platform with Clean Architecture.\n• **EcoSort AI**: Waste sorting edge AI system using computer vision.\n• **Grupo Agaváceas**: Premium corporate B2B platform.\n• **ServiMotos**: Cross-platform app (Flutter) for field operations.\n• **Passly Cashier**: Retail loyalty mobile application.\n\nWhich one would you like to know more about?",
        category: "project",
        relatedProjects: ["factorcore", "ecosort-ai", "grupo-agavaceas", "servimotos", "passly-cashier"]
      },
      {
        keywords: ["factorcore", "factor core", "fintech", "saas", "factoring"],
        answer: "**FactorCore** is a multi-tenant fintech factoring SaaS. I solved operational risks and manual calculation errors by designing a clean architecture and BFF structure with Next.js 15 and NestJS, automating calculations and guaranteeing cryptographic audibility in production.",
        category: "project",
        relatedProjects: ["factorcore"]
      },
      {
        keywords: ["ecosort", "ecosort ai", "recycle", "sorting", "raspberry", "vision", "tensorflow", "tflite"],
        answer: "**EcoSort AI** is an Edge AI waste classifier. Using a custom-trained MobileNetV2 model optimized with TensorFlow Lite on Raspberry Pi 5 and OpenCV, it runs real-time classification of plastic, paper, cardboard, and aluminum.",
        category: "project",
        relatedProjects: ["ecosort-ai"]
      },
      {
        keywords: ["agavaceas", "agave", "tequila", "grupo agavaceas", "agricultural"],
        answer: "**Grupo Agaváceas** is a premium corporate website for agricultural traceability in the tequila supply chain. It features modern B2B brand positioning, dynamic Framer Motion animations, and enterprise-grade SEO.",
        category: "project",
        relatedProjects: ["grupo-agavaceas"]
      },
      {
        keywords: ["servimotos", "motorcycles", "service", "workshop", "flutter"],
        answer: "**ServiMotos** is a Flutter cross-platform system (web, mobile, desktop) designed for motorcycle workshop logic, technician management, VIN tracking, and service evidence capturing.",
        category: "project",
        relatedProjects: ["servimotos"]
      },
      {
        keywords: ["passly", "passly cashier", "loyalty", "rewards", "qr"],
        answer: "**Passly Cashier** is a Flutter mobile app for retail cashiers to validate visits and reward redemption via QR codes, eliminating double-accounting safely.",
        category: "project",
        relatedProjects: ["passly-cashier"]
      },
      {
        keywords: [
          "experience", "career", "jobs", "background", "cv", "resume", "paystand", "whipple", "guia de hoy",
          "professional experience", "work experience", "worked", "employment", "history", "jobs"
        ],
        answer: "My professional path includes production roles:\n\n• **Paystand** (Jan-Jul 2026): AI/ML Intern building internal tools and full-stack pipelines (Next.js, Node.js, Python).\n• **Whipple Studio** (2022-2025): Mobile application developer for native iOS (Swift/SwiftUI) and React web.\n• **Guía de Hoy** (2021-2023): Frontend engineer leading user engagement in a high-traffic media site.",
        category: "experience"
      },
      {
        keywords: ["paystand", "ml", "machine learning", "intern"],
        answer: "At **Paystand**, I worked as an AI/ML intern developing full-stack internal applications and script automation with React, Next.js, TypeScript, and Python.",
        category: "experience"
      },
      {
        keywords: ["services", "offer", "do you do", "hire", "consulting"],
        answer: "I offer professional-grade engineering services:\n\n1. **Full-Stack Development**: Modern, high-performance web systems with Next.js and NestJS.\n2. **Mobile Apps**: Multi-platform (Flutter, React Native) and native (iOS/SwiftUI) apps.\n3. **AI & Edge Systems**: Deploying computer vision models (TensorFlow Lite) on edge hardware (Raspberry Pi).\n4. **Architecture Design**: Secure, clean architectures for fintech, SaaS, and complex data logic.",
        category: "service"
      },
      {
        keywords: ["contact", "call", "schedule", "calendly", "meeting", "email", "whatsapp", "phone", "hire me", "meet", "google meet"],
        answer: "I would love to discuss your project! Feel free to reach out via WhatsApp or email me using the links below to schedule a meeting.",
        category: "contact"
      },
      {
        keywords: ["study", "studied", "education", "degree", "university", "college", "major", "mecatronics", "engineering", "background"],
        answer: "I studied Mechatronics Engineering at the Universidad Autónoma de Guadalajara (UAG). This multidisciplinary background allows me to integrate low-level software and hardware (sensors, microcontrollers) with full-stack web platforms, native mobile apps, and AI systems.",
        category: "education"
      },
      {
        keywords: ["technology", "technologies", "languages", "frameworks", "stack", "tools", "know", "skills", "knows"],
        answer: "I have expertise in the following technologies and tools:\n\n• **Frontend & UI**: React 19, Next.js 15, TypeScript, Tailwind CSS, Framer Motion.\n• **Backend & APIs**: NestJS, Node.js, Express, Python, REST APIs, GraphQL, Swagger.\n• **Databases & Cloud**: PostgreSQL (Neon), Prisma ORM, MongoDB, Redis, Docker, Vercel.\n• **Mobile**: Flutter, React Native, Swift, SwiftUI, iOS Native.\n• **AI & Mechatronics**: TensorFlow Lite, OpenCV, Raspberry Pi, Microcontrollers, C/C++.",
        category: "technologies"
      },
      {
        keywords: ["age", "how old", "years old", "who are you", "about you", "personal", "birthday", "born"],
        answer: "I am 22 years old. I am Saulo Alaniz, a software engineer and builder based in Guadalajara, Mexico, designing intelligent systems, fintech SaaS, and bespoke software solutions.",
        category: "personal"
      }
    ]
  }
};

import type { SiteContent } from "@/lib/i18n/types";

export const en: SiteContent = {
  site: {
    name: "Saulo Alaniz",
    title: "Software Engineer & Tech Consultant",
    url: "https://sauloalaniz.dev",
    description:
      "Saulo Alaniz — Creator, inventor & full-stack AI, web, and mobile engineer building production-grade software platforms.",
    location: "Guadalajara, Mexico",
    currentCompany: "Freelance",
  },
  hero: {
    positioning:
      "Creator, inventor, and full-stack engineer crafting intelligent systems, fintech platforms, and custom software.",
    currentRole:
      "Freelance Software Engineer & Tech Consultant — building custom web platforms, AI systems, and mobile apps.",
    context: [
      { label: "Available for Freelance / Contracts" },
      { label: "Based in Guadalajara, Mexico" },
      { label: "Next.js · NestJS · React Native · Flutter · AI" },
    ],
    metrics: [
      { value: "3+", label: "Years launching products" },
      { value: "5", label: "Production products" },
      { value: "3", label: "Companies in production" },
      { value: "Full-Stack + AI", label: "Systems Architect" },
    ],
    ctas: {
      primary: { label: "Explore products", href: "#projects" },
      secondary: { label: "Get in touch", href: "#contact" },
    },
  },
  navigation: [
    { label: "Capabilities", href: "#build" },
    { label: "Experience", href: "#experience" },
    { label: "Products", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  whatIBuild: {
    label: "Capabilities & Tech Stack",
    title: "Fintech, AI, web, mobile & mechatronics",
    subtitle:
      "A creator and inventor engineering across the entire stack — from financial SaaS engines to edge computer vision and mechatronics systems.",
    techTitle: "Technologies & Tooling Ecosystem",
    items: [
      {
        title: "Fintech & SaaS Platforms",
        description:
          "Clean Architecture & BFF patterns in Next.js and NestJS for factoring engines, real-time fees, and immutable audit ledgers.",
        icon: "Globe",
      },
      {
        title: "AI & Edge Systems",
        description:
          "TensorFlow Lite models, edge computing on Raspberry Pi, and real-time computer vision deployment pipelines.",
        icon: "Brain",
      },
      {
        title: "Cross-Platform Mobile Products",
        description:
          "React Native and Flutter applications focused on enterprise user experience and field operation workflows.",
        icon: "Smartphone",
      },
      {
        title: "Mechatronics & Hardware Systems",
        description:
          "Mechatronics engineering background — integrating microcontrollers, sensors, and low-level operational software.",
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
        category: "Databases & Cloud",
        skills: ["PostgreSQL", "Neon DB", "Prisma ORM", "MongoDB", "Redis", "Docker", "Vercel", "Railway"],
      },
      {
        category: "Mobile & Cross-Platform",
        skills: ["React Native", "Flutter", "Swift", "SwiftUI", "iOS Native", "Dart"],
      },
      {
        category: "AI, Vision & Mechatronics",
        skills: ["OpenAI API", "TensorFlow Lite", "OpenCV", "Raspberry Pi", "Microcontrollers", "C/C++"],
      },
    ],
  },
  experience: {
    label: "Experience",
    title: "Production Experience",
    subtitle:
      "Real companies. Real products. Real impact across AI, fintech, web, mobile, and hardware systems.",
    currentBadge: "Current",
    impactLabel: "Impact",
    items: [
      {
        period: "2026 — Present",
        company: "Freelance & Consulting",
        role: "Independent Software Engineer",
        summary:
          "Custom software development, systems architecture, and AI/Fintech consulting.",
        technologies: [
          "Next.js",
          "NestJS",
          "TypeScript",
          "React Native",
          "Flutter",
          "Python",
        ],
        impact:
          "Architecting and delivering custom full-stack solutions for clients across US and LatAm markets.",
        highlights: [
          "High-performance web and mobile product development.",
          "Software architecture consulting, CI/CD pipelines, and production deployments.",
        ],
        logo: { initials: "FL", accent: "from-sky-500/30 to-indigo-500/20" },
        featured: true,
      },
      {
        period: "2024 — 2025",
        company: "Paystand",
        role: "AI/ML Intern",
        summary:
          "Internal full-stack products and operational tooling at Paystand.",
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Python",
        ],
        impact:
          "Built internal full-stack tools and operational software using React, Next.js, TypeScript, and Python.",
        highlights: [
          "Cross-team collaboration on internal software solutions.",
          "Feature development, testing, and product improvements.",
        ],
        logo: { initials: "P", accent: "from-blue-500/30 to-indigo-500/20" },
        featured: false,
      },
      {
        period: "2022 — 2025",
        company: "Whipple Studio",
        role: "App Developer",
        summary:
          "Full-stack product development in native iOS and React web applications.",
        technologies: ["Swift", "SwiftUI", "React", "Next.js", "TypeScript"],
        impact:
          "Delivered cross-platform products across native iOS and React/Next.js applications.",
        highlights: [
          "Refactored production iOS apps with Swift and SwiftUI.",
          "Built and launched web products with React and Next.js.",
        ],
        logo: { initials: "W", accent: "from-blue-500/30 to-sky-500/20" },
        featured: false,
      },
      {
        period: "2021 — 2023",
        company: "Guía de Hoy",
        role: "Software Engineer",
        summary:
          "Frontend architecture and delivery for a production media platform.",
        technologies: ["React", "Next.js", "TypeScript", "REST APIs"],
        impact:
          "Led frontend architecture for a media platform serving thousands of daily readers.",
        highlights: [
          "Built production React/Next.js interfaces and API integrations.",
          "Improved UX flows focused on engagement and conversion.",
        ],
        logo: { initials: "G", accent: "from-emerald-500/30 to-teal-500/20" },
        featured: false,
      },
    ],
  },
  projects: {
    label: "Products",
    title: "Systems & Products I've Created",
    subtitle:
      "Production-ready case studies — fintech engines, edge AI, mobile apps, and high-performance web platforms.",
    caseStudyBadge: "Case Study",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    impactLabel: "Impact",
    liveProductLabel: "Live Product",
    watchDemoLabel: "Watch Demo",
    closeDemoLabel: "Close demo",
    demoUnavailableLabel: "Demo unavailable.",
    sourceLabel: "Source Code",
    repoFrontLabel: "Frontend Repo",
    repoBackLabel: "Backend Repo",
    items: [
      {
        slug: "factorcore",
        title: "FactorCore",
        tags: ["Fintech", "SaaS Multi-tenant", "Clean Architecture", "Full-Stack"],
        problem:
          "Financial factoring companies face critical operational risks due to lack of real-time advance validation, manual fee calculations, unaudited user access, and scattered client dossier records.",
        solution:
          "Designed and engineered a multi-tenant SaaS factoring origination platform built with Clean Architecture and Backend-for-Frontend (BFF) patterns using Next.js 15 and NestJS. Features a business rule engine for advances (85%) and fees (1.5%), an immutable cryptographic audit ledger, JWT role-based access control (Control Desk / Operator), Neon PostgreSQL persistence via Prisma ORM, and full dynamic i18n (ES/EN).",
        impact:
          "100% automated origination and credit rights assignment workflow, completely eliminating calculation errors and delivering enterprise cryptographic auditability for all production transactions.",
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
        tags: ["AI", "Computer Vision", "Embedded"],
        problem:
          "Recycling centers and educational environments rely on manual waste sorting, introducing human error, increasing processing time, and reducing recycling efficiency.",
        solution:
          "Built an intelligent waste classification platform using a custom-trained MobileNetV2 model optimized with TensorFlow Lite for real-time inference on Raspberry Pi 5. The system classifies plastic, paper, cardboard, and aluminum through computer vision with webcam inference and edge deployment workflows.",
        impact:
          "Reduced dependency on manual sorting with a real-time classification pipeline and edge AI deployment on embedded hardware — demonstrating practical AI integration beyond cloud-only environments.",
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
          "Agricultural enterprises in the tequila value chain struggle to communicate operational maturity and technological capabilities through outdated web portals.",
        solution:
          "Designed and built a premium corporate platform positioning Grupo Agaváceas as an enterprise strategic partner with interactive process visualizers and Framer Motion animations.",
        impact:
          "Complete brand perception overhaul with stronger commercial positioning and enterprise-level user experience in production.",
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
        tags: ["Mobile", "Operations", "Cross-Platform"],
        problem:
          "Motorcycle sales and service operations rely on spreadsheets and manual messaging between stores, supervisors, and field technicians.",
        solution:
          "Engineered a cross-platform operations platform with Flutter for web, mobile, and desktop with work order management, technician assignment, VIN verification, and API integration.",
        impact:
          "Centralized operational workflows with lower coordination complexity, demonstrating scalable multi-platform architecture ready for backend integration.",
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
        tags: ["Mobile", "Loyalty", "Product"],
        problem:
          "Businesses with loyalty programs struggle with manual visit validation and duplicate transaction tracking.",
        solution:
          "Built a cross-platform app with Flutter for cashiers to validate visits via QR, PDF417 codes, or manual entry with idempotent processing.",
        impact:
          "Reduced manual validation errors and prevented duplicate records with cashier-focused mobile architecture.",
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
    label: "Philosophy of Invention",
    title: "How I Create & Invent",
    lead: "I don't build toy projects. I invent real systems for complex problems.",
    body: "Every product I ship — from FactorCore fintech platform to AI operational tools or mechatronic prototypes — is engineered from first principles with clean architecture and production robustness.",
    principles: [
      {
        title: "Creator & Product-First Mindset",
        description:
          "Engineering decisions start with understanding real user impact and inventing the optimal technical workflow.",
      },
      {
        title: "Ship & Evolve in Production",
        description:
          "A working production system with scalable architecture beats any perfect README specification.",
      },
      {
        title: "Multidisciplinary Full-Stack Ownership",
        description:
          "From AI models and financial algorithms to mobile apps, responsive frontends, and hardware integration.",
      },
    ],
  },
  contact: {
    label: "Contact",
    title: "Let's build something extraordinary",
    subtitle:
      "Open to freelance contracts, software consulting, and engineering projects.",
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
        label: "Location",
        value: "Guadalajara, Mexico",
        href: null,
      },
    ],
  },
};

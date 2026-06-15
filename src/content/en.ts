import type { SiteContent } from "@/lib/i18n/types";

export const en: SiteContent = {
  site: {
    name: "Saulo Alaniz",
    title: "Software Engineer",
    url: "https://sauloalaniz.dev",
    description:
      "Saulo Alaniz — AI, web, mobile, and full-stack developer building production-ready products. Currently at Paystand.",
    location: "Guadalajara, Mexico",
    currentCompany: "Paystand",
  },
  hero: {
    positioning:
      "AI, web, mobile, and full-stack developer building production-ready products.",
    currentRole:
      "AI/ML Intern at Paystand — internal full-stack products and operational tools.",
    context: [
      { label: "Currently at Paystand" },
      { label: "Based in Guadalajara, Mexico" },
      { label: "React · Next.js · React Native · Flutter · AI" },
    ],
    metrics: [
      { value: "3+", label: "Years shipping products" },
      { value: "4", label: "Products built" },
      { value: "3", label: "Production companies" },
      { value: "AI + Web + Mobile", label: "Full-stack engineer" },
    ],
    ctas: {
      primary: { label: "View Products", href: "#projects" },
      secondary: { label: "Get in Touch", href: "#contact" },
    },
  },
  navigation: [
    { label: "Capabilities", href: "#build" },
    { label: "Experience", href: "#experience" },
    { label: "Products", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  whatIBuild: {
    label: "Capabilities",
    title: "AI, web, mobile, and full-stack",
    subtitle:
      "A software engineer who ships across the stack — not a specialist in one layer.",
    items: [
      {
        title: "Modern Web Applications",
        description:
          "React, Next.js, and TypeScript interfaces built for performance, scale, and production reliability.",
        icon: "Globe",
      },
      {
        title: "Mobile Products",
        description:
          "React Native and Flutter apps with production-ready UX and cross-platform architecture.",
        icon: "Smartphone",
      },
      {
        title: "AI-Powered Systems",
        description:
          "OpenAI integrations, automation workflows, and intelligent features embedded in real products.",
        icon: "Brain",
      },
      {
        title: "Engineering Beyond Software",
        description:
          "Mechatronics background — embedded systems, control systems, and hardware-software integration.",
        icon: "Cpu",
      },
    ],
  },
  experience: {
    label: "Experience",
    title: "Production experience",
    subtitle:
      "Real companies. Real products. Impact across AI, web, mobile, and full-stack systems.",
    currentBadge: "Current",
    impactLabel: "Impact",
    items: [
      {
        period: "2026 — Present",
        company: "Paystand",
        role: "AI/ML Intern",
        summary:
          "Internal full-stack products and operational tools across Paystand.",
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Python",
        ],
        impact:
          "Building internal full-stack tools and operational software with React, Next.js, TypeScript, and Python.",
        highlights: [
          "Cross-team collaboration on internal software solutions.",
          "Feature development, testing, and product enhancements.",
        ],
        logo: { initials: "P", accent: "from-blue-500/30 to-indigo-500/20" },
        featured: true,
      },
      {
        period: "2022 — 2025",
        company: "Whipple Studio",
        role: "Application Developer",
        summary:
          "Full-stack product development across native iOS and modern React web apps.",
        technologies: ["Swift", "SwiftUI", "React", "Next.js", "TypeScript"],
        impact:
          "Shipped cross-platform products spanning native iOS and React/Next.js web applications.",
        highlights: [
          "Refactored production iOS apps with Swift and SwiftUI.",
          "Built and delivered React and Next.js web products.",
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
          "Owned frontend architecture for a media platform serving thousands of daily readers.",
        highlights: [
          "Built production React/Next.js interfaces and API integrations.",
          "Improved engagement and conversion-focused UX flows.",
        ],
        logo: { initials: "G", accent: "from-emerald-500/30 to-teal-500/20" },
        featured: false,
      },
    ],
  },
  projects: {
    label: "Products",
    title: "Products I've built",
    subtitle:
      "Startup-style case studies — real problems, real solutions, real engineering.",
    caseStudyBadge: "Product case study",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    impactLabel: "Impact",
    liveProductLabel: "Live Product",
    watchDemoLabel: "Watch Demo",
    closeDemoLabel: "Close demo",
    demoUnavailableLabel: "Demo unavailable.",
    sourceLabel: "Source",
    items: [
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
          "Agricultural companies in the tequila value chain often struggle to communicate professionalism, operational maturity, and technological capabilities through outdated websites — creating credibility challenges with producers, distilleries, and enterprise clients.",
        solution:
          "Designed and developed a premium corporate platform that positions Grupo Agaváceas as a strategic partner. Built a luxury landing experience with enterprise-style service architecture, traceability-focused storytelling, interactive process visualization, Framer Motion animations, and SEO optimization.",
        impact:
          "Complete modernization of brand perception with stronger commercial positioning, improved communication of agricultural operations, and an enterprise-grade user experience now live in production.",
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
          "Motorcycle retail and service operations frequently rely on spreadsheets, messaging apps, and manual coordination between stores, supervisors, and field technicians — leading to poor visibility and fragmented workflows.",
        solution:
          "Developed a role-based cross-platform operations platform with Flutter supporting web, mobile, and desktop. Built authentication workflows, operational dashboards, service order management, technician assignment, VIN verification, evidence capture, and API integration with a mock backend for demos.",
        impact:
          "Centralized operational workflows with reduced coordination complexity, demonstrating scalable cross-platform architecture ready for future production backend integration.",
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
          "Businesses running loyalty programs struggle with manual visit validation, duplicated transactions, and inconsistent reward tracking — increasing friction at checkout and creating registration errors.",
        solution:
          "Built a cross-platform Flutter app for cashiers to validate visits via QR, PDF417 barcodes, or manual code entry. Implemented secure authentication, reward unlocking workflows, idempotent transaction processing, and mock/production API modes with feature-based architecture.",
        impact:
          "Reduced manual validation errors, prevented duplicate reward registrations, and improved cashier workflow efficiency with production-oriented mobile architecture ready to scale.",
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
    label: "Philosophy",
    title: "How I build",
    lead: "I don't build demo projects. I build products people actually use.",
    body: "Every system I ship — whether it's internal tooling at Paystand, a React dashboard, or a mobile app — is designed to solve a real problem, perform under load, and hold up in production.",
    principles: [
      {
        title: "Product thinking first",
        description:
          "Engineering decisions start with the user and the business outcome — not the technology trend.",
      },
      {
        title: "Ship, then refine",
        description:
          "Working software in production beats perfect architecture in a README.",
      },
      {
        title: "Full-stack ownership",
        description:
          "From AI integrations to mobile UX to backend APIs — I build across the entire product surface.",
      },
    ],
  },
  contact: {
    label: "Contact",
    title: "Work with me",
    subtitle:
      "Open to software engineering roles — AI, full-stack, web, and mobile.",
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

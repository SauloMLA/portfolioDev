export type Locale = "en" | "es";

export type TechCategory = {
  category: string;
  skills: string[];
};

export type SiteContent = {
  site: {
    name: string;
    title: string;
    url: string;
    description: string;
    location: string;
    currentCompany: string;
  };
  hero: {
    positioning: string;
    currentRole: string;
    context: { label: string }[];
    metrics: { value: string; label: string }[];
    ctas: {
      primary: { label: string; href: string };
      secondary: { label: string; href: string };
    };
  };
  navigation: { label: string; href: string }[];
  whatIBuild: {
    label: string;
    title: string;
    subtitle: string;
    techTitle?: string;
    items: {
      title: string;
      description: string;
      icon: "Globe" | "Smartphone" | "Brain" | "Cpu";
    }[];
    techCategories?: TechCategory[];
  };
  experience: {
    label: string;
    title: string;
    subtitle: string;
    currentBadge: string;
    impactLabel: string;
    items: {
      period: string;
      company: string;
      role: string;
      summary: string;
      technologies: string[];
      impact: string;
      highlights: string[];
      logo: { initials: string; accent: string };
      featured: boolean;
    }[];
  };
  projects: {
    label: string;
    title: string;
    subtitle: string;
    caseStudyBadge: string;
    problemLabel: string;
    solutionLabel: string;
    impactLabel: string;
    liveProductLabel: string;
    watchDemoLabel: string;
    closeDemoLabel: string;
    demoUnavailableLabel: string;
    sourceLabel: string;
    repoFrontLabel?: string;
    repoBackLabel?: string;
    items: {
      slug: string;
      title: string;
      tags: string[];
      problem: string;
      solution: string;
      impact: string;
      stack: string[];
      image: string | null;
      liveUrl: string;
      demoUrl: string | null;
      githubUrl: string;
      frontendGithubUrl?: string;
      backendGithubUrl?: string;
      gradient: string;
    }[];
  };
  philosophy: {
    label: string;
    title: string;
    lead: string;
    body: string;
    principles: { title: string; description: string }[];
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    links: {
      label: string;
      value: string;
      href: string | null;
    }[];
  };
};

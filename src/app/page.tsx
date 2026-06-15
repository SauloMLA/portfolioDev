import { Contact } from "@/components/sections/Contact";
import { EngineeringPhilosophy } from "@/components/sections/EngineeringPhilosophy";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { WhatIBuild } from "@/components/sections/WhatIBuild";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="relative z-10 bg-transparent">
      <Navbar />
      <main>
        <Hero />
        <WhatIBuild />
        <ExperienceTimeline />
        <FeaturedProjects />
        <EngineeringPhilosophy />
        <Contact />
      </main>
    </div>
  );
}

"use client";

import { useContent } from "@/components/providers/LocaleProvider";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Sparkles } from "lucide-react";

export function EngineeringPhilosophy() {
  const { philosophy } = useContent();

  return (
    <section className="section-padding relative">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeader
            label={philosophy.label}
            title={philosophy.title}
            align="center"
            className="mx-auto"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="glass mx-auto max-w-3xl rounded-3xl border border-sky-400/30 p-8 md:p-12 shadow-2xl shadow-sky-500/10 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Sparkles className="w-32 h-32 text-sky-400" />
            </div>
            <p className="text-center text-xl font-bold leading-relaxed text-white md:text-2xl lg:text-3xl gradient-text-sky">
              &ldquo;{philosophy.lead}&rdquo;
            </p>
            <p className="mt-6 text-center text-base leading-relaxed text-slate-300 md:text-lg">
              {philosophy.body}
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-3 md:gap-6">
          {philosophy.principles.map((principle, index) => (
            <ScrollReveal key={principle.title} delay={0.1 + index * 0.06}>
              <div className="glass glass-interactive h-full rounded-2xl p-6 border border-sky-500/20">
                <h3 className="text-base font-bold text-sky-300 font-mono">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {principle.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { useContent } from "@/components/providers/LocaleProvider";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Contact() {
  const { contact } = useContent();

  return (
    <section id="contact" className="section-padding pb-0 relative">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeader
            label={contact.label}
            title={contact.title}
            subtitle={contact.subtitle}
            align="center"
            className="mx-auto"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto max-w-lg">
            <ul className="glass divide-y divide-sky-500/15 rounded-2xl overflow-hidden border border-sky-500/20 shadow-xl">
              {contact.links.map((link) => (
                <li key={link.label}>
                  {link.href ? (
                    <Link
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center justify-between px-6 py-5 transition-colors duration-300 hover:bg-sky-500/10"
                    >
                      <div>
                        <p className="text-xs font-mono text-sky-400 font-semibold">
                          {link.label}
                        </p>
                        <p className="mt-0.5 text-sm font-medium text-white transition-colors group-hover:text-sky-300">
                          {link.value}
                        </p>
                      </div>
                      <ArrowUpRight className="size-4 text-slate-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-300" />
                    </Link>
                  ) : (
                    <div className="flex items-center justify-between px-6 py-5">
                      <div>
                        <p className="text-xs font-mono text-slate-400">
                          {link.label}
                        </p>
                        <p className="mt-0.5 text-sm font-medium text-slate-200">
                          {link.value}
                        </p>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>

      <div className="mt-24">
        <Footer />
      </div>
    </section>
  );
}

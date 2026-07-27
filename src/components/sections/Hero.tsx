"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles, Terminal, Cpu } from "lucide-react";
import Link from "next/link";

import { useContent } from "@/components/providers/LocaleProvider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const { site, hero } = useContent();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Luzes decorativas ambientais de criador */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Insignia de Creador / Inventor */}
        <motion.div variants={itemVariants} className="mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-mono font-semibold tracking-wider shadow-lg shadow-sky-500/10 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
            <span>{hero.badge || "CREATOR · INVENTOR · FULL-STACK ARCHITECT"}</span>
          </div>
        </motion.div>

        {/* Nombre con tipografía deslumbrante */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl md:whitespace-nowrap"
        >
          <span className="gradient-text-sky">{site.name}</span>
        </motion.h1>

        {/* Posicionamiento */}
        <motion.p
          variants={itemVariants}
          className="mt-8 max-w-3xl text-lg font-medium leading-relaxed text-slate-200 md:text-xl lg:text-2xl"
        >
          {hero.positioning}
        </motion.p>

        {/* Rol actual */}
        <motion.p
          variants={itemVariants}
          className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base font-mono"
        >
          {hero.currentRole}
        </motion.p>

        {/* Pills de Contexto / Tecnologías */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
        >
          {hero.context.map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-medium bg-slate-900/80 border border-sky-500/20 text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-sky-400/40 hover:text-white hover:shadow-md hover:shadow-sky-500/10"
            >
              {item.label.includes("Guadalajara") && (
                <MapPin className="size-3.5 shrink-0 text-sky-400" />
              )}
              {item.label}
            </span>
          ))}
        </motion.div>

        {/* Métricas en Tarjetas Glassmorphism */}
        <motion.div
          variants={itemVariants}
          className="mt-12 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {hero.metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4 + index * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass glass-interactive rounded-2xl p-5 flex flex-col items-center justify-center text-center group"
            >
              <span
                className={cn(
                  "font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors",
                  metric.value.length > 8
                    ? "text-xs font-mono md:text-sm"
                    : "text-2xl font-mono md:text-3xl"
                )}
              >
                {metric.value}
              </span>
              <span className="text-[11px] font-medium text-slate-400 mt-1">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Botones de Acción */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <Button asChild size="lg" className="h-12 px-7 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold shadow-lg shadow-sky-500/25 transition-all duration-300 hover:scale-105">
            <Link href={hero.ctas.primary.href}>
              {hero.ctas.primary.label}
              <ArrowRight className="size-4 ml-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-7 rounded-xl border-sky-500/30 bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold backdrop-blur-md transition-all duration-300">
            <Link href={hero.ctas.secondary.href}>
              {hero.ctas.secondary.label}
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

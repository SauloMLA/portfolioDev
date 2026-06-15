"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
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
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 pb-16">
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-3">
          <p className="font-mono text-sm tracking-wide text-[var(--text-secondary)]">
            {site.title}
          </p>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl md:whitespace-nowrap"
        >
          {site.name}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-foreground md:text-xl lg:text-2xl"
        >
          {hero.positioning}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="mt-4 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg"
        >
          {hero.currentRole}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {hero.context.map((item) => (
            <span
              key={item.label}
              className="pill-accent inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs transition-colors duration-300 hover:border-[rgba(255,255,255,0.18)] md:text-sm"
            >
              {item.label.includes("Guadalajara") && (
                <MapPin className="size-3 shrink-0 opacity-70" />
              )}
              {item.label}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {hero.metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + index * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-center gap-1.5"
            >
              <span
                className={cn(
                  "font-semibold tracking-tight",
                  metric.value.length > 8
                    ? "text-sm text-foreground md:text-base"
                    : "text-2xl text-foreground md:text-3xl"
                )}
              >
                {metric.value}
              </span>
              <span className="text-xs text-[var(--text-secondary)] md:text-sm">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <Button asChild size="lg" className="h-11 px-6">
            <Link href={hero.ctas.primary.href}>
              {hero.ctas.primary.label}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-11 px-6">
            <Link href={hero.ctas.secondary.href}>
              {hero.ctas.secondary.label}
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

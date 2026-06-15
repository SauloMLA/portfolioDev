"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/types";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  const options: { value: Locale; label: string }[] = [
    { value: "en", label: "EN" },
    { value: "es", label: "ES" },
  ];

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex rounded-lg border border-border/60 bg-muted/40 p-0.5",
        className
      )}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setLocale(option.value)}
          aria-pressed={locale === option.value}
          className={cn(
            "rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200",
            locale === option.value
              ? "border border-[var(--accent-blue-border)] bg-[var(--accent-blue-soft)] text-foreground shadow-sm"
              : "text-[var(--text-secondary)] hover:text-[var(--accent-blue)]"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

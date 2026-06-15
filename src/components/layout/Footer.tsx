"use client";

import { useContent } from "@/components/providers/LocaleProvider";

export function Footer() {
  const { site } = useContent();

  return (
    <footer className="border-t border-border/50 py-8">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-sm text-[var(--text-secondary)]">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}

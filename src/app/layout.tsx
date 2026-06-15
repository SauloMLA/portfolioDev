import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { LocaleProvider } from "@/components/providers/LocaleProvider";
import { en } from "@/content/en";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${en.site.name} — ${en.site.title}`,
  description: en.site.description,
  metadataBase: new URL(en.site.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: en.site.url,
    title: `${en.site.name} — ${en.site.title}`,
    description: en.site.description,
    siteName: en.site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${en.site.name} — ${en.site.title}`,
    description: en.site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full" suppressHydrationWarning>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://zahirinia.ir"),
  title: {
    default: "Mohammad Zahirinia | Senior Frontend Engineer",
    template: "%s | Mohammad Zahirinia",
  },
  description:
    "Premium interactive resume and portfolio for Mohammad Zahirinia, Senior Frontend Engineer building enterprise applications, SaaS platforms, cryptocurrency products, e-commerce products, and PWAs.",
  keywords: [
    "Mohammad Zahirinia",
    "Senior Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "Vue.js Developer",
    "TypeScript",
    "Frontend Architecture",
    "PWA",
  ],
  authors: [{ name: "Mohammad Zahirinia" }],
  creator: "Mohammad Zahirinia",
  openGraph: {
    title: "Mohammad Zahirinia | Senior Frontend Engineer",
    description:
      "Interactive resume and portfolio for a senior frontend engineer focused on enterprise UI, scalable component systems, performance, SaaS, crypto, e-commerce, and PWAs.",
    url: "https://zahirinia.ir",
    siteName: "Mohammad Zahirinia Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Zahirinia | Senior Frontend Engineer",
    description:
      "Senior frontend engineering portfolio for enterprise applications, SaaS, crypto, e-commerce, and high-performance PWAs.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

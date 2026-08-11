import type { Metadata } from "next";
import { ResumeApp } from "@/src/components/ResumeApp";

export const metadata: Metadata = {
  title: "Mohammad Zahirinia | Senior Frontend Engineer",
  description:
    "Interactive resume and portfolio for Mohammad Zahirinia, Senior Frontend Engineer specializing in React, Next.js, Vue.js, TypeScript, enterprise UI, SaaS, crypto, e-commerce, and PWAs.",
};

export default function Home() {
  return <ResumeApp />;
}

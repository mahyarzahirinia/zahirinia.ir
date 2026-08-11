"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Code2,
  Download,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  SquareUserRound,
  Send,
} from "lucide-react";
import { ResumeData } from "@/src/data/resume";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { assetPath } from "@/src/lib/site";

const contactIcons = {
  email: Mail,
  phone: Phone,
  linkedin: SquareUserRound,
  github: Code2,
  telegram: Send,
};

export function HeroSection({ resumeData }: { resumeData: ResumeData }) {
  const AccentIcon = resumeData.accentIcon;

  return (
    <section
      id="profile"
      className="relative overflow-hidden border-b border-slate-200 pt-28 dark:border-white/10"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.16),transparent_32%),linear-gradient(135deg,rgba(241,245,249,0.96),rgba(255,255,255,0.9))] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_35%),linear-gradient(135deg,#07111f,#0f172a_52%,#111827)]" />
      <div className="mx-auto grid min-h-[calc(100svh-72px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="mb-5 flex flex-wrap items-center gap-2">
            {resumeData.badges.map((badge) => (
              <Badge key={badge}>{badge}</Badge>
            ))}
          </div>
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-200">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {resumeData.personal.location}
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
            {resumeData.personal.name}
          </h1>
          <p className="mt-5 text-2xl font-medium text-slate-700 dark:text-slate-200">
            {resumeData.personal.title}
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600 dark:text-slate-300">
            {resumeData.personal.summary} {resumeData.personal.profile}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="#projects">
              {resumeData.ui.viewProjects}
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href={assetPath(resumeData.personal.resumeUrl)} variant="secondary">
              {resumeData.ui.downloadResume}
              <Download className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="#contact" variant="ghost">
              {resumeData.ui.contactMe}
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {resumeData.contact.map((link) => {
              const Icon = contactIcons[link.kind];
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={link.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-300 bg-white/70 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:border-white/12 dark:bg-white/8 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-100"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
          className="rounded-lg border border-slate-200 bg-white/75 p-5 shadow-[0_30px_100px_rgba(15,23,42,0.12)] backdrop-blur dark:border-white/10 dark:bg-white/7 dark:shadow-none"
          aria-label={resumeData.ui.careerHighlights}
        >
          <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-5 dark:border-white/10">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {resumeData.ui.operatingProfile}
              </p>
              <h2 className="mt-1 text-xl font-semibold text-slate-950 dark:text-white">
                {resumeData.ui.operatingTitle}
              </h2>
            </div>
            <span className="rounded-md bg-cyan-500 p-3 text-slate-950">
              <AccentIcon className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 py-5">
            {resumeData.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-md border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-950/45"
              >
                <p className="text-2xl font-semibold text-slate-950 dark:text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm leading-5 text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-md bg-slate-950 p-5 text-white dark:bg-white dark:text-slate-950">
            <p className="text-sm font-semibold text-cyan-300 dark:text-cyan-700">
              {resumeData.ui.currentFocus}
            </p>
            <p className="mt-2 text-base leading-7">{resumeData.availability}</p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

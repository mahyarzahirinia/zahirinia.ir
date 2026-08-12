"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, FolderGit2, Goal } from "lucide-react";
import { Project } from "@/data/resume";
import { Badge } from "./badge";

export function ProjectCard({
  project,
  outcomeLabel = "Outcome",
  artifactLabel = "View",
}: {
  project: Project;
  outcomeLabel?: string;
  artifactLabel?: string;
}) {
  const Wrapper = project.link ? "a" : "article";

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <Wrapper
        href={project.link}
        target={project.link ? "_blank" : undefined}
        rel={project.link ? "noreferrer" : undefined}
        className="group relative block h-full overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition hover:border-cyan-400/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:border-white/10 dark:bg-white/6 dark:shadow-none"
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 opacity-80" />
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-md bg-cyan-500/12 p-2 text-cyan-700 dark:text-cyan-200">
            <FolderGit2 className="h-5 w-5" aria-hidden="true" />
          </span>
          {project.link ? (
            <span className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-semibold text-slate-500 transition group-hover:border-cyan-400 group-hover:text-cyan-700 dark:border-white/10 dark:bg-slate-950/45 dark:text-slate-300 dark:group-hover:text-cyan-200">
              <span>{artifactLabel}</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          ) : null}
        </div>
        <p className="mt-5 text-sm font-medium text-cyan-700 dark:text-cyan-200">
          {project.type}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {project.description}
        </p>
        <div className="mt-5 rounded-md border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-950/45">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-cyan-700 dark:text-cyan-200">
            <Goal className="h-4 w-4" aria-hidden="true" />
            {outcomeLabel}
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
            {project.impact}
          </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        {project.link ? (
          <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 dark:text-cyan-200">
            {artifactLabel}
            <ArrowUpRight
              className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </div>
        ) : null}
      </Wrapper>
    </motion.div>
  );
}

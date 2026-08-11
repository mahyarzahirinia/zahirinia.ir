"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { Project } from "@/src/data/resume";
import { Badge } from "./badge";

export function ProjectCard({ project }: { project: Project }) {
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
        className="group block h-full rounded-lg border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition hover:border-cyan-400/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:border-white/10 dark:bg-white/6 dark:shadow-none"
      >
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-md bg-cyan-500/12 p-2 text-cyan-700 dark:text-cyan-200">
            <FolderGit2 className="h-5 w-5" aria-hidden="true" />
          </span>
          {project.link ? (
            <ExternalLink
              className="h-5 w-5 text-slate-400 transition group-hover:text-cyan-600 dark:group-hover:text-cyan-200"
              aria-hidden="true"
            />
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
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </Wrapper>
    </motion.div>
  );
}

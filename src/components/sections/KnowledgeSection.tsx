import { BrainCircuit } from "lucide-react";
import { resume } from "@/src/data/resume";
import { SectionHeader } from "@/src/components/ui/SectionHeader";

export function KnowledgeSection() {
  return (
    <section id="knowledge" className="section-shell">
      <SectionHeader
        eyebrow="Knowledge"
        title="Depth across architecture, delivery, quality, and developer experience."
        description="Expertise areas are presented as compact cards so recruiters and technical leaders can scan breadth without losing detail."
        icon={BrainCircuit}
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {resume.expertise.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/6"
            >
              <span className="rounded-md bg-cyan-500/12 p-2 text-cyan-700 dark:text-cyan-200">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-sm font-semibold text-slate-850 dark:text-white">
                {item.title}
              </h3>
            </article>
          );
        })}
      </div>
    </section>
  );
}

import { BrainCircuit } from "lucide-react";
import { ResumeData } from "@/src/data/resume";
import { SectionHeader } from "@/src/components/ui/SectionHeader";

export function KnowledgeSection({ resumeData }: { resumeData: ResumeData }) {
  const header = resumeData.ui.sectionHeaders.knowledge;

  return (
    <section id="knowledge" className="section-shell">
      <SectionHeader
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
        icon={BrainCircuit}
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {resumeData.expertise.map((item) => {
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

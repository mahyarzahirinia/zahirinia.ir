import { GraduationCap } from "lucide-react";
import { resume } from "@/src/data/resume";
import { SectionHeader } from "@/src/components/ui/SectionHeader";

export function EducationSection() {
  const EducationIcon = resume.education.icon;

  return (
    <section id="education" className="section-shell">
      <SectionHeader
        eyebrow="Education"
        title="Academic foundation and language capability."
        description="Formal education and working language proficiency are kept editable alongside the rest of the resume data."
        icon={GraduationCap}
      />
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-lg border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/6">
          <span className="inline-flex rounded-md bg-cyan-500/12 p-3 text-cyan-700 dark:text-cyan-200">
            <EducationIcon className="h-6 w-6" aria-hidden="true" />
          </span>
          <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">
            {resume.education.degree}
          </h3>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
            {resume.education.institution}
          </p>
          <p className="mt-4 inline-flex rounded-md bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600 dark:bg-white/8 dark:text-slate-300">
            {resume.education.dates}
          </p>
        </article>
        <div className="grid gap-4">
          {resume.languages.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.language}
                className="rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/6"
              >
                <span className="inline-flex rounded-md bg-cyan-500/12 p-2 text-cyan-700 dark:text-cyan-200">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">
                  {item.language}
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {item.level}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

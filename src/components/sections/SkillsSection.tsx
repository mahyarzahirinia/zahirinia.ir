import { Code2, Gauge, Layers3, ShieldCheck } from "lucide-react";
import { ResumeData } from "@/data/resume";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillGroup } from "@/components/ui/SkillGroup";

export function SkillsSection({ resumeData }: { resumeData: ResumeData }) {
  const header = resumeData.ui.sectionHeaders.skills;
  const isRtl = resumeData.dir === "rtl";
  const skillSignals = [
    {
      icon: Code2,
      title: isRtl ? "فریم‌ورک‌های اصلی" : "Core frameworks",
      text: isRtl ? "React، Next.js، Vue.js" : "React, Next.js, Vue.js",
    },
    {
      icon: Layers3,
      title: isRtl ? "معماری UI" : "UI architecture",
      text: isRtl
        ? "سیستم کامپوننت، SSR/SSG، microfrontend"
        : "component systems, SSR/SSG, microfrontends",
    },
    {
      icon: Gauge,
      title: isRtl ? "اثر قابل اندازه‌گیری" : "Measured impact",
      text: isRtl
        ? "پرفورمنس، SEO، سرعت تحویل"
        : "performance, SEO, delivery velocity",
    },
    {
      icon: ShieldCheck,
      title: isRtl ? "کیفیت محصول" : "Product quality",
      text: isRtl
        ? "دسترس‌پذیری، تست، نگهداشت‌پذیری"
        : "accessibility, testing, maintainability",
    },
  ];

  return (
    <section id="skills" className="section-shell">
      <SectionHeader
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
        icon={Code2}
      />
      <div className="mb-5 grid gap-3 rounded-lg border border-slate-200 bg-white/75 p-4 shadow-[0_22px_80px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/5 dark:shadow-none sm:grid-cols-2 lg:grid-cols-4">
        {skillSignals.map((signal) => {
          const Icon = signal.icon;

          return (
            <article
              key={signal.title}
              className="rounded-md border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-950/45"
            >
              <Icon
                className="h-5 w-5 text-cyan-700 dark:text-cyan-200"
                aria-hidden="true"
              />
              <h3 className="mt-3 text-sm font-semibold text-slate-950 dark:text-white">
                {signal.title}
              </h3>
              <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">
                {signal.text}
              </p>
            </article>
          );
        })}
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {resumeData.skillGroups.map((group) => (
          <SkillGroup key={group.title} group={group} />
        ))}
      </div>
    </section>
  );
}

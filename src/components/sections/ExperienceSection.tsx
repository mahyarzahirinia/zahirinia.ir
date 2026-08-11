import { BriefcaseBusiness } from "lucide-react";
import { resume } from "@/src/data/resume";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import { TimelineItem } from "@/src/components/ui/TimelineItem";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeader
        eyebrow="Experience"
        title="Enterprise, commerce, crypto, and PWA work at production scale."
        description="A readable timeline that emphasizes impact, architecture, performance, team leadership, and delivery quality."
        icon={BriefcaseBusiness}
      />
      <div className="relative space-y-5 before:absolute before:bottom-0 before:left-[13px] before:top-2 before:w-px before:bg-slate-200 dark:before:bg-white/12">
        {resume.experience.map((item, index) => (
          <TimelineItem
            key={`${item.role}-${item.company ?? item.project}`}
            item={item}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

import { BriefcaseBusiness } from "lucide-react";
import { ResumeData } from "@/src/data/resume";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import { TimelineItem } from "@/src/components/ui/TimelineItem";

export function ExperienceSection({ resumeData }: { resumeData: ResumeData }) {
  const header = resumeData.ui.sectionHeaders.experience;

  return (
    <section id="experience" className="section-shell">
      <SectionHeader
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
        icon={BriefcaseBusiness}
      />
      <div className="relative space-y-5 before:absolute before:bottom-0 before:left-[13px] before:top-2 before:w-px before:bg-slate-200 dark:before:bg-white/12">
        {resumeData.experience.map((item, index) => (
          <TimelineItem
            key={`${item.role}-${
              "company" in item ? item.company : item.project
            }`}
            item={item}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

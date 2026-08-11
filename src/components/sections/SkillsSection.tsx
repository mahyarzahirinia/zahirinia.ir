import { Code2 } from "lucide-react";
import { ResumeData } from "@/src/data/resume";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import { SkillGroup } from "@/src/components/ui/SkillGroup";

export function SkillsSection({ resumeData }: { resumeData: ResumeData }) {
  const header = resumeData.ui.sectionHeaders.skills;

  return (
    <section id="skills" className="section-shell">
      <SectionHeader
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
        icon={Code2}
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {resumeData.skillGroups.map((group) => (
          <SkillGroup key={group.title} group={group} />
        ))}
      </div>
    </section>
  );
}

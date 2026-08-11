import { Code2 } from "lucide-react";
import { resume } from "@/src/data/resume";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import { SkillGroup } from "@/src/components/ui/SkillGroup";

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeader
        eyebrow="Capability Map"
        title="A practical frontend toolkit for complex product work."
        description="Skills are grouped for quick scanning and rendered directly from structured resume data."
        icon={Code2}
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {resume.skillGroups.map((group) => (
          <SkillGroup key={group.title} group={group} />
        ))}
      </div>
    </section>
  );
}

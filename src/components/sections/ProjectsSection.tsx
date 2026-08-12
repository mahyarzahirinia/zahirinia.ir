import { FolderGit2 } from "lucide-react";
import { ResumeData } from "@/data/resume";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProjectsSection({ resumeData }: { resumeData: ResumeData }) {
  const header = resumeData.ui.sectionHeaders.projects;
  const isRtl = resumeData.dir === "rtl";

  return (
    <section id="projects" className="section-shell">
      <SectionHeader
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
        icon={FolderGit2}
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {resumeData.projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            outcomeLabel={isRtl ? "نتیجه" : "Outcome"}
            artifactLabel={isRtl ? "مشاهده" : "View"}
          />
        ))}
      </div>
    </section>
  );
}

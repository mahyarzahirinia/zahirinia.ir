import { FolderGit2 } from "lucide-react";
import { resume } from "@/src/data/resume";
import { ProjectCard } from "@/src/components/ui/ProjectCard";
import { SectionHeader } from "@/src/components/ui/SectionHeader";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeader
        eyebrow="Selected Work"
        title="Projects with reusable architecture and measurable product outcomes."
        description="Each project card is data-driven, link-aware, and designed to communicate domain, value, and technical scope quickly."
        icon={FolderGit2}
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {resume.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

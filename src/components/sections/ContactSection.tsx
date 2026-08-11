import {
  Code2,
  Mail,
  MessageCircle,
  Phone,
  SquareUserRound,
  Send,
} from "lucide-react";
import { resume } from "@/src/data/resume";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import { Button } from "@/src/components/ui/button";

const contactIcons = {
  email: Mail,
  phone: Phone,
  linkedin: SquareUserRound,
  github: Code2,
  telegram: Send,
};

export function ContactSection() {
  return (
    <section id="contact" className="section-shell pb-20">
      <SectionHeader
        eyebrow="Contact"
        title="Ready for senior frontend product work."
        description="Contact links are structured, clickable, and easy to update from the resume data file."
        icon={MessageCircle}
      />
      <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {resume.contact.map((link) => {
            const Icon = contactIcons[link.kind];
            return (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex min-h-16 items-center gap-3 rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:border-white/10 dark:bg-slate-950/45 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-100"
              >
                <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span className="break-all">{link.label}</span>
              </a>
            );
          })}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href={`mailto:${resume.personal.email}`}>Email Mohammad</Button>
          <Button href={resume.personal.resumeUrl} variant="secondary">
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}

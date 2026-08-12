import {
  Code2,
  Mail,
  MessageCircle,
  Phone,
  SquareUserRound,
  Send,
} from "lucide-react";
import { ResumeData } from "@/src/data/resume";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import { Button } from "@/src/components/ui/button";
import { assetPath } from "@/src/lib/site";

const contactIcons = {
  email: Mail,
  phone: Phone,
  linkedin: SquareUserRound,
  github: Code2,
  telegram: Send,
};

export function ContactSection({ resumeData }: { resumeData: ResumeData }) {
  const header = resumeData.ui.sectionHeaders.contact;
  const isRtl = resumeData.dir === "rtl";

  return (
    <section id="contact" className="section-shell pb-20">
      <SectionHeader
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
        icon={MessageCircle}
      />
      <div className="grid gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-[0_24px_90px_rgba(15,23,42,0.07)] dark:border-white/10 dark:bg-white/6 dark:shadow-none lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg bg-slate-950 p-5 text-white dark:bg-slate-950/80">
          <p className="text-sm font-semibold text-cyan-300">
            {isRtl ? "خلاصه تناسب همکاری" : "Hiring fit"}
          </p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight">
            {resumeData.availability}
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            {isRtl
              ? "مناسب برای تیم‌هایی که به توسعه‌دهنده‌ای نیاز دارند که هم کیفیت محصول را می‌فهمد و هم بدهی فنی را کنترل می‌کند."
              : "A fit for teams that need a frontend engineer who can understand product goals, raise UI quality, and reduce technical debt."}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Button href={`mailto:${resumeData.personal.email}`}>
              {resumeData.ui.emailMohammad}
            </Button>
            <Button
              href={assetPath(resumeData.personal.resumeUrl)}
              variant="secondary"
            >
              {resumeData.ui.downloadResume}
            </Button>
          </div>
        </div>

        <div>
          <div className="grid gap-3 sm:grid-cols-2">
            {resumeData.contact.map((link) => {
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
        </div>
      </div>
    </section>
  );
}

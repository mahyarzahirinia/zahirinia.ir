import { LucideIcon } from "lucide-react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700 dark:text-cyan-200">
        <Icon className="h-4 w-4" aria-hidden="true" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl dark:text-white">
        {title}
      </h2>
      <p className="mt-3 text-base leading-8 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </div>
  );
}

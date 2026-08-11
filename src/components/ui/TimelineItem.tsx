import { CheckCircle2 } from "lucide-react";
import { Experience } from "@/src/data/resume";

export function TimelineItem({
  item,
  index,
}: {
  item: Experience;
  index: number;
}) {
  return (
    <article className="relative pl-10">
      <div className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-cyan-500/35 bg-white text-xs font-bold text-cyan-700 shadow-sm dark:bg-slate-950 dark:text-cyan-200">
        {index + 1}
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/6 dark:shadow-none">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
              {item.role}
            </h3>
            <p className="mt-1 text-sm font-medium text-cyan-700 dark:text-cyan-200">
              {item.company ?? item.project}
              {item.type ? ` • ${item.type}` : ""}
            </p>
            {item.domain ? (
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {item.domain}
              </p>
            ) : null}
          </div>
          {item.dates ? (
            <p className="shrink-0 rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-white/8 dark:text-slate-300">
              {item.dates}
            </p>
          ) : null}
        </div>
        <ul className="mt-5 space-y-3">
          {item.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300"
            >
              <CheckCircle2
                className="mt-1 h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-300"
                aria-hidden="true"
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

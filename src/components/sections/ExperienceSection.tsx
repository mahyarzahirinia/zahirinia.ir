import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  CircleDot,
  Gauge,
  Layers3,
  Sparkles,
} from "lucide-react";
import { Experience, ResumeData } from "@/data/resume";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const markerColors = [
  "from-cyan-400 to-sky-500",
  "from-emerald-400 to-cyan-500",
  "from-fuchsia-400 to-pink-500",
  "from-amber-300 to-orange-500",
  "from-violet-400 to-cyan-500",
  "from-slate-400 to-cyan-500",
];

function itemLabel(item: Experience) {
  return item.company ?? item.project;
}

function itemMeta(item: Experience) {
  return item.dates ?? item.type ?? item.role;
}

function metricFromHighlight(highlight: string) {
  return (
    highlight.match(
      /(?:\d[\d,.]*\+?(?:\s?-\s?\d+)?%?|\d[\d,.]*\+?)/,
    )?.[0] ?? null
  );
}

function ExperienceCard({
  item,
  index,
  isRtl,
}: {
  item: Experience;
  index: number;
  isRtl: boolean;
}) {
  const featuredMetric = item.highlights
    .map((highlight) => metricFromHighlight(highlight))
    .find(Boolean);
  const featuredHighlights = item.highlights.slice(0, 3);
  const supportingHighlights = item.highlights.slice(3, 5);
  const cardAlignment = index % 2 === 0 ? "lg:pr-8" : "lg:pl-8 lg:col-start-2";
  const spineAlignment =
    index % 2 === 0
      ? "lg:left-auto lg:right-[-1.15rem]"
      : "lg:left-[-1.15rem]";

  return (
    <article className={cn("relative min-w-0 lg:w-full", cardAlignment)}>
      <div
        className={cn(
          "absolute top-7 z-10 hidden h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-gradient-to-br text-xs font-black text-white shadow-[0_16px_40px_rgba(6,182,212,0.28)] lg:flex dark:border-slate-950/80",
          markerColors[index % markerColors.length],
          spineAlignment,
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-5 shadow-[0_26px_90px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/70 hover:shadow-[0_30px_110px_rgba(8,145,178,0.16)] dark:border-white/10 dark:bg-white/6 dark:shadow-none dark:hover:border-cyan-300/50">
        <div
          className={cn(
            "absolute inset-x-0 top-0 h-1 bg-gradient-to-r",
            markerColors[index % markerColors.length],
          )}
        />
        <div className="absolute right-4 top-4 hidden h-11 w-11 items-center justify-center rounded-md bg-slate-100 text-cyan-700 transition group-hover:scale-105 dark:bg-slate-950/70 dark:text-cyan-200 sm:flex">
          <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
        </div>

        <div className="min-w-0 sm:max-w-[calc(100%-3.75rem)]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-md border border-cyan-500/25 bg-cyan-500/10 px-2.5 py-1 text-xs font-bold text-cyan-700 dark:text-cyan-200">
              <CircleDot className="h-3 w-3" aria-hidden="true" />
              {item.dates ?? (isRtl ? "پروژه شاخص" : "Featured project")}
            </span>
            {featuredMetric ? (
              <span className="inline-flex rounded-md bg-slate-950 px-2.5 py-1 text-xs font-black text-white dark:bg-white dark:text-slate-950">
                {featuredMetric}
              </span>
            ) : null}
          </div>

          <h3 className="mt-4 text-xl font-semibold leading-tight text-slate-950 [overflow-wrap:anywhere] dark:text-white">
            {item.role}
          </h3>
          <p className="mt-2 text-sm font-semibold text-cyan-700 [overflow-wrap:anywhere] dark:text-cyan-200">
            {itemLabel(item)}
            {item.type ? ` / ${item.type}` : ""}
          </p>
          {item.domain ? (
            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              {item.domain}
            </p>
          ) : null}
        </div>

        <div className="mt-6 grid gap-3">
          {featuredHighlights.map((highlight) => (
            <div
              key={highlight}
              className="flex min-w-0 gap-3 rounded-md border border-slate-200 bg-slate-50/80 p-3 text-sm leading-6 text-slate-600 dark:border-white/10 dark:bg-slate-950/45 dark:text-slate-300"
            >
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-300"
                aria-hidden="true"
              />
              <span className="min-w-0 [overflow-wrap:anywhere]">
                {highlight}
              </span>
            </div>
          ))}
        </div>

        {supportingHighlights.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {supportingHighlights.map((highlight) => (
              <span
                key={highlight}
                className="inline-flex max-w-full min-w-0 items-center gap-1 rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-white/8 dark:text-slate-300"
              >
                <Sparkles className="h-3 w-3 shrink-0 text-cyan-600 dark:text-cyan-300" />
                <span className="min-w-0 truncate">{highlight}</span>
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function ExperienceSection({ resumeData }: { resumeData: ResumeData }) {
  const header = resumeData.ui.sectionHeaders.experience;
  const isRtl = resumeData.dir === "rtl";
  const [firstStat, , thirdStat] = resumeData.stats;
  const activeRole = resumeData.experience[0];
  const careerStats = [
    {
      value: firstStat.value,
      label: firstStat.label,
      icon: Gauge,
    },
    {
      value: String(resumeData.experience.length).padStart(2, "0"),
      label: isRtl ? "نقش و پروژه شاخص" : "roles and major builds",
      icon: Layers3,
    },
    {
      value: thirdStat.value,
      label: thirdStat.label,
      icon: BriefcaseBusiness,
    },
  ];

  return (
    <section id="experience" className="section-shell">
      <SectionHeader
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
        icon={BriefcaseBusiness}
      />

      <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white/75 p-4 shadow-[0_30px_100px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-none sm:p-5 lg:p-6">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(6,182,212,0.12),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(14,165,233,0.14),transparent_30%)] dark:bg-[linear-gradient(135deg,rgba(34,211,238,0.10),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(14,165,233,0.12),transparent_32%)]" />

        <div className="grid gap-4 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch">
          <div className="rounded-lg border border-slate-200 bg-slate-950 p-5 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] dark:border-white/10 dark:bg-slate-950/80 dark:shadow-none">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-cyan-300">
                  {isRtl ? "نقشه مسیر حرفه‌ای" : "Career trajectory"}
                </p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight">
                  {activeRole.role}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {itemLabel(activeRole)}
                </p>
              </div>
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-cyan-400 text-slate-950">
                <ArrowUpRight className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {careerStats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="rounded-md border border-white/10 bg-white/8 p-4"
                  >
                    <Icon
                      className="mb-3 h-5 w-5 text-cyan-300"
                      aria-hidden="true"
                    />
                    <p className="text-3xl font-black tracking-normal">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm leading-5 text-slate-300">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-3 rounded-lg border border-slate-200 bg-white/80 p-4 dark:border-white/10 dark:bg-slate-950/35 sm:grid-cols-3">
            {resumeData.experience.slice(0, 3).map((item, index) => (
              <div
                key={`${item.role}-${itemLabel(item)}`}
                className="flex min-h-56 flex-col justify-between rounded-md border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/6"
              >
                <div>
                  <span
                    className={cn(
                      "mb-4 inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br text-xs font-black text-white",
                      markerColors[index],
                    )}
                  >
                    {index + 1}
                  </span>
                  <p className="text-sm font-semibold leading-6 text-slate-950 dark:text-white">
                    {itemLabel(item)}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {item.highlights[0]}
                  </p>
                </div>
                <div className="mt-5">
                  <div className="h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                    <div
                      className={cn(
                        "h-full rounded-full bg-gradient-to-r",
                        markerColors[index],
                      )}
                      style={{ width: `${100 - index * 18}%` }}
                    />
                  </div>
                  <p className="mt-3 truncate text-xs font-semibold text-cyan-700 dark:text-cyan-200">
                    {itemMeta(item)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-6 grid min-w-0 gap-5 lg:grid-cols-2 lg:gap-y-6">
          <div className="absolute bottom-8 top-8 hidden w-px bg-gradient-to-b from-cyan-400 via-slate-300 to-cyan-400 lg:left-1/2 lg:block dark:via-white/15" />
          {resumeData.experience.map((item, index) => (
            <ExperienceCard
              key={`${item.role}-${itemLabel(item)}`}
              item={item}
              index={index}
              isRtl={isRtl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

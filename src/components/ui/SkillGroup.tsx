import { SkillGroup as SkillGroupType } from "@/src/data/resume";
import { Badge } from "./badge";

export function SkillGroup({ group }: { group: SkillGroupType }) {
  const Icon = group.icon;

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/6 dark:shadow-none">
      <div className="flex items-center gap-3">
        <span className="rounded-md bg-cyan-500/12 p-2 text-cyan-700 dark:text-cyan-200">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="text-base font-semibold text-slate-950 dark:text-white">
          {group.title}
        </h3>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </article>
  );
}

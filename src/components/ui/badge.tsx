import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-slate-300/80 bg-white/70 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-white/12 dark:bg-white/7 dark:text-slate-200",
        className,
      )}
    >
      {children}
    </span>
  );
}

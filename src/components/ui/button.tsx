import * as React from "react";
import { cn } from "@/src/lib/utils";

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-cyan-500 text-slate-950 shadow-[0_18px_45px_rgba(6,182,212,0.25)] hover:bg-cyan-400",
  secondary:
    "border border-slate-300/70 bg-white/70 text-slate-900 hover:border-cyan-500 hover:text-cyan-700 dark:border-white/15 dark:bg-white/8 dark:text-white dark:hover:border-cyan-300 dark:hover:text-cyan-100",
  ghost:
    "text-slate-700 hover:bg-slate-900/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white",
};

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

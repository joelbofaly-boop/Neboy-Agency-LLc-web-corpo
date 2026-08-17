import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "light" | "ghost";

type CTAButtonProps = {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const variants: Record<Variant, string> = {
  solid: "bg-ink text-white hover:bg-brand",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-white",
  light: "bg-white text-ink hover:bg-brand hover:text-white",
  ghost: "border border-white/25 text-white hover:bg-white hover:text-ink",
};

/** Primary site call-to-action with an arrow micro-interaction. */
export default function CTAButton({ to, children, variant = "solid", className }: CTAButtonProps) {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex items-center gap-3 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-500 ease-premium active:scale-[0.98] sm:text-xs",
        variants[variant],
        className,
      )}
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-premium group-hover:translate-x-1 group-hover:-translate-y-1" />
    </Link>
  );
}

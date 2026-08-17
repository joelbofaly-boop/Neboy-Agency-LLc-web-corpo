import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
};

/** Shared section header: mono eyebrow, hairline rule, display title, optional lead. */
export default function SectionHead({
  eyebrow,
  title,
  lead,
  tone = "dark",
  align = "left",
  className,
}: SectionHeadProps) {
  const onDark = tone === "light";
  return (
    <div className={cn(align === "center" && "mx-auto max-w-3xl text-center", className)}>
      {eyebrow ? (
        <Reveal>
          <div className={cn("flex items-center gap-4", align === "center" && "justify-center")}>
            <span className="h-px w-8 bg-signal" />
            <span className={cn("eyebrow", onDark ? "text-white/50" : "text-ink/45")}>{eyebrow}</span>
          </div>
        </Reveal>
      ) : null}

      <Reveal delay={0.05}>
        <h2
          className={cn(
            "display mt-5 max-w-4xl text-[2.1rem] sm:text-[3rem] lg:text-[3.6rem]",
            onDark ? "text-white" : "text-ink",
            align === "center" && "mx-auto",
          )}
        >
          {title}
        </h2>
      </Reveal>

      {lead ? (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-6 max-w-2xl text-base leading-relaxed sm:text-lg",
              onDark ? "text-white/65" : "text-ink/60",
              align === "center" && "mx-auto",
            )}
          >
            {lead}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

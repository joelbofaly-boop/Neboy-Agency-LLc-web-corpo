import CTAButton from "@/components/site/CTAButton";
import { Reveal, RevealLines } from "@/components/site/Reveal";

type PartnershipCTAProps = {
  title?: string[];
  text?: string;
};

/** Closing conversion block used at the end of every page. */
export default function PartnershipCTA({
  title = ["Let's build", "what's next."],
  text = "Vous avez une idée, un projet digital, une ambition commerciale ou un besoin stratégique ? Parlons-en.",
}: PartnershipCTAProps) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="grid-lines-dark absolute inset-0 opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-brand/25 blur-[140px]"
        aria-hidden
      />
      <div className="pointer-events-none absolute right-10 top-10 h-24 w-px bg-signal/60" aria-hidden />

      <div className="shell relative">
        <h2 className="display max-w-3xl text-[2.6rem] sm:text-[4rem] lg:text-[5rem]">
          <RevealLines lines={title} />
        </h2>

        <Reveal delay={0.15}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">{text}</p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CTAButton to="/contact" variant="light">
              Start a project
            </CTAButton>
            <CTAButton to="/contact" variant="ghost">
              Contact us
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

import { RevealLines } from "@/components/site/Reveal";

type PageHeroProps = {
  eyebrow: string;
  titleLines: string[];
  lead: string;
  image: string;
  imageAlt: string;
};

/** Editorial hero used across internal pages: dark plate, image band, big display type. */
export default function PageHero({ eyebrow, titleLines, lead, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-32 text-white sm:pb-20 sm:pt-40">
      <div className="grid-lines-dark absolute inset-0 opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 top-10 h-[440px] w-[440px] rounded-full bg-brand/25 blur-[130px]"
        aria-hidden
      />

      <div className="shell relative">
        <div className="flex items-center gap-4">
          <span className="h-px w-8 bg-signal" />
          <span className="eyebrow text-white/50">{eyebrow}</span>
        </div>

        <h1 className="display mt-8 max-w-4xl text-[2.4rem] sm:text-[3.6rem] lg:text-[4.6rem]">
          <RevealLines lines={titleLines} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg"
        >
          {lead}
        </motion.p>
      </div>

      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={{ clipPath: "inset(0 0 0% 0)" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="shell relative mt-14 sm:mt-20"
      >
        <div className="relative aspect-[16/7] overflow-hidden">
          <motion.img
            src={image}
            alt={imageAlt}
            loading="eager"
            decoding="async"
            initial={{ scale: 1.14 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}

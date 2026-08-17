import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

import { processSteps } from "@/content/site";

/** Vertical timeline with a scroll-driven progress rail. */
export default function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });
  const railOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div ref={ref} className="relative mt-14 sm:mt-20">
      <div className="absolute left-[11px] top-2 h-[calc(100%-2rem)] w-px bg-white/10 sm:left-[15px]" aria-hidden />
      <motion.div
        style={{ scaleY, opacity: railOpacity }}
        className="absolute left-[11px] top-2 h-[calc(100%-2rem)] w-px origin-top bg-gradient-to-b from-signal via-brand to-brand/0 sm:left-[15px]"
        aria-hidden
      />

      <ol className="space-y-10 sm:space-y-14">
        {processSteps.map((step, i) => (
          <motion.li
            key={step.index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: i * 0.04 }}
            className="relative grid grid-cols-[auto_1fr] gap-6 pl-0 sm:gap-10"
          >
            <div className="relative z-10 mt-1 flex h-6 w-6 items-center justify-center sm:h-8 sm:w-8">
              <span className="h-2 w-2 rounded-full bg-white ring-8 ring-ink" />
            </div>
            <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] sm:items-baseline sm:gap-10">
              <div className="flex items-baseline gap-4">
                <span className="mono text-xs text-signal">{step.index}</span>
                <h3 className="text-xl font-semibold uppercase tracking-[-0.02em] text-white sm:text-2xl">
                  {step.title}
                </h3>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-white/55 sm:text-base">{step.text}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

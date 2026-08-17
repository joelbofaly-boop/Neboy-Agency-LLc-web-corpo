import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Radio, Sparkles, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Metric = {
  label: string;
  value: number;
  suffix: string;
  delta: string;
  icon: typeof Target;
};

const metrics: Metric[] = [
  { label: "Croissance", value: 148, suffix: "%", delta: "+22 pts", icon: Sparkles },
  { label: "Engagement", value: 7.4, suffix: "%", delta: "+1.8 pts", icon: Radio },
  { label: "Portée", value: 3.2, suffix: "M", delta: "+640K", icon: Target },
  { label: "Conversion", value: 4.9, suffix: "%", delta: "+0.9 pt", icon: ArrowUpRight },
];

const series: number[] = [22, 34, 29, 46, 41, 58, 54, 71, 68, 84, 79, 96];
const channels: Array<{ name: string; share: number }> = [
  { name: "Paid social", share: 38 },
  { name: "Search", share: 27 },
  { name: "Content", share: 21 },
  { name: "Partenariats", share: 14 },
];

function useCountUp(target: number, active: boolean): number {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const total = 48;
    const id = window.setInterval(() => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / total, 3);
      setValue(Number((target * progress).toFixed(target % 1 === 0 ? 0 : 1)));
      if (frame >= total) window.clearInterval(id);
    }, 16);
    return () => window.clearInterval(id);
  }, [target, active]);

  return value;
}

function MetricCard({ metric, index, active }: { metric: Metric; index: number; active: boolean }) {
  const value = useCountUp(metric.value, active);
  const Icon = metric.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
      className="group relative overflow-hidden border border-white/10 bg-white/[0.04] p-5 transition-colors duration-500 hover:border-white/25 hover:bg-white/[0.07]"
    >
      <div className="flex items-start justify-between">
        <span className="mono text-[10px] uppercase tracking-[0.2em] text-white/45">{metric.label}</span>
        <Icon className="h-4 w-4 text-white/30 transition-colors duration-500 group-hover:text-signal" />
      </div>
      <p className="mt-6 text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
        {value}
        <span className="text-xl text-white/60">{metric.suffix}</span>
      </p>
      <p className="mono mt-2 text-[10px] uppercase tracking-[0.18em] text-brand-bright">{metric.delta}</p>
    </motion.div>
  );
}

/** Fictional campaign dashboard — demonstration data only. */
export default function MarketingDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, i) => (
          <MetricCard key={metric.label} metric={metric} index={i} active={inView} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="flex flex-col justify-between border border-white/10 bg-white/[0.04] p-5"
      >
        <div>
          <div className="flex items-center justify-between">
            <span className="mono text-[10px] uppercase tracking-[0.2em] text-white/45">Campagne — 12 semaines</span>
            <span className="mono text-[10px] uppercase tracking-[0.2em] text-signal">démo</span>
          </div>

          <div className="mt-6 flex h-28 items-end gap-1.5">
            {series.map((point, i) => (
              <motion.span
                key={`${point}-${i}`}
                initial={{ height: 0 }}
                whileInView={{ height: `${point}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.035 }}
                className="flex-1 bg-gradient-to-t from-brand/30 to-brand-bright"
              />
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-3">
          {channels.map((channel, i) => (
            <div key={channel.name}>
              <div className="flex items-center justify-between text-[11px] text-white/60">
                <span>{channel.name}</span>
                <span className="mono text-white/40">{channel.share}%</span>
              </div>
              <div className="mt-1.5 h-px w-full bg-white/10">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: channel.share / 100 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 + i * 0.08 }}
                  className="h-px origin-left bg-white/70"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

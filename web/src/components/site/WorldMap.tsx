import { motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";

import { corridors, marketRegions, type MarketRegion } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Coarse equirectangular landmass matrix (40 x 20).
 * Rendered as a dot field — a stylised map, never a claim of physical presence.
 */
const LAND: string[] = [
  "...............###........#.#...........",
  "......#######..###....#################.",
  "..############.##.#..##################.",
  "..############.....####################.",
  ".....#########.....####################.",
  "......#######......##################...",
  ".......#####.......##################...",
  "........#.#.......#################.....",
  "........#.#.......#############.###.....",
  ".........##.##....##########.#...##.....",
  "............####....#######.....####....",
  "............#####...#######......######.",
  ".............#####..######.#......####..",
  ".............#####...#####.#.....#####..",
  ".............####....#####.#.....#####..",
  ".............###.....####........####...",
  ".............##.....................#.#.",
  ".............##.......................#.",
  ".............#..........................",
  "........................................",
];

const COLS = 40;
const ROWS = 20;

type Dot = { x: number; y: number; key: string };

function buildDots(): Dot[] {
  const dots: Dot[] = [];
  LAND.forEach((row, r) => {
    for (let c = 0; c < COLS; c += 1) {
      if (row[c] === "#") {
        dots.push({
          x: ((c + 0.5) / COLS) * 100,
          y: ((r + 0.5) / ROWS) * 100,
          key: `${r}-${c}`,
        });
      }
    }
  });
  return dots;
}

function arcPath(a: MarketRegion, b: MarketRegion): string {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const lift = Math.min(dist * 0.32, 16);
  // Bend the arc away from the connecting line for a great-circle feeling.
  const nx = -dy / (dist || 1);
  const ny = -dx / (dist || 1);
  const cx = mx + nx * lift * 0.4;
  const cy = my - Math.abs(ny) * lift - lift * 0.35;
  return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;
}

type WorldMapProps = {
  className?: string;
  tone?: "dark" | "light";
};

/** Interactive corridor map: hover or focus a market to isolate its routes. */
export default function WorldMap({ className, tone = "dark" }: WorldMapProps) {
  const [active, setActive] = useState<string | null>(null);
  const dots = useMemo<Dot[]>(() => buildDots(), []);
  const regionById = useMemo<Record<string, MarketRegion>>(
    () => Object.fromEntries(marketRegions.map((r) => [r.id, r])),
    [],
  );

  const onDark = tone === "dark";
  const handleEnter = useCallback((id: string) => setActive(id), []);
  const handleLeave = useCallback(() => setActive(null), []);

  return (
    <div className={cn("relative w-full", className)}>
      <svg
        viewBox="0 0 100 56"
        className="w-full overflow-visible"
        role="img"
        aria-label="Carte illustrant des corridors de marché entre l'Afrique, l'Europe, le Moyen-Orient, l'Asie et l'Amérique du Nord"
      >
        <defs>
          <linearGradient id="corridor-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={onDark ? "#2f6ff0" : "#0B3FA8"} stopOpacity="0.15" />
            <stop offset="50%" stopColor={onDark ? "#6ea0ff" : "#0B3FA8"} stopOpacity="0.9" />
            <stop offset="100%" stopColor="#E8112D" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        <g>
          {dots.map((dot) => (
            <circle
              key={dot.key}
              cx={dot.x}
              cy={dot.y * 0.56}
              r={0.38}
              className={onDark ? "fill-white/25" : "fill-ink/20"}
            />
          ))}
        </g>

        <g fill="none" strokeLinecap="round">
          {corridors.map((corridor, i) => {
            const from = regionById[corridor.from];
            const to = regionById[corridor.to];
            if (!from || !to) return null;
            const path = arcPath(
              { ...from, y: from.y * 0.56 },
              { ...to, y: to.y * 0.56 },
            );
            const dim = active !== null && active !== corridor.from && active !== corridor.to;
            return (
              <g key={`${corridor.from}-${corridor.to}`} className="transition-opacity duration-500">
                <motion.path
                  d={path}
                  stroke="url(#corridor-gradient)"
                  strokeWidth={0.28}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: dim ? 0.15 : 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.15 * i }}
                  style={{ opacity: dim ? 0.15 : 1 }}
                />
                <path
                  d={path}
                  stroke={onDark ? "#8fb4ff" : "#0B3FA8"}
                  strokeWidth={0.34}
                  strokeDasharray="1.4 10"
                  className="animate-dash-flow"
                  opacity={dim ? 0.1 : 0.9}
                />
              </g>
            );
          })}
        </g>

        <g>
          {marketRegions.map((region) => {
            const isActive = active === region.id;
            const y = region.y * 0.56;
            return (
              <g
                key={region.id}
                onMouseEnter={() => handleEnter(region.id)}
                onMouseLeave={handleLeave}
                className="cursor-pointer"
              >
                <circle cx={region.x} cy={y} r={2.6} fill="transparent" />
                <circle
                  cx={region.x}
                  cy={y}
                  r={0.75}
                  className={cn(
                    "origin-center transition-all duration-500",
                    isActive ? "fill-signal" : onDark ? "fill-white" : "fill-brand",
                  )}
                />
                <circle
                  cx={region.x}
                  cy={y}
                  r={1.4}
                  className={cn("animate-pulse-ring", onDark ? "fill-white/25" : "fill-brand/25")}
                  style={{ transformOrigin: `${region.x}px ${y}px` }}
                />
                <text
                  x={region.x}
                  y={y - 2.4}
                  textAnchor="middle"
                  className={cn(
                    "mono transition-colors duration-300",
                    onDark ? (isActive ? "fill-white" : "fill-white/55") : isActive ? "fill-ink" : "fill-ink/55",
                  )}
                  style={{ fontSize: "1.9px", letterSpacing: "0.06em" }}
                >
                  {region.name.toUpperCase()}
                </text>
              </g>
            );
          })}
        </g>
      </svg>

      <p className={cn("mono mt-6 max-w-xl text-[10px] leading-relaxed", onDark ? "text-white/35" : "text-ink/40")}>
        Représentation illustrative de corridors de marché. Ces connexions n'indiquent pas d'implantations physiques,
        de bureaux ou d'opérations existantes de NEBOY AGENCY LLC.
      </p>
    </div>
  );
}

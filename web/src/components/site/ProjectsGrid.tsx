import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useCallback, useMemo, useState } from "react";

import { projectFilters, projects, type Project, type ProjectCategory } from "@/content/site";
import { cn } from "@/lib/utils";

type Filter = ProjectCategory | "All";

/** Filterable demonstration gallery with animated layout transitions. */
export default function ProjectsGrid({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo<Project[]>(() => {
    const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }, [filter, limit]);

  const handleFilter = useCallback((value: Filter) => setFilter(value), []);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {projectFilters.map((value) => {
          const active = filter === value;
          return (
            <button
              key={value}
              type="button"
              onClick={() => handleFilter(value)}
              className={cn(
                "relative overflow-hidden px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300",
                active ? "text-white" : "text-ink/50 hover:text-ink",
              )}
            >
              {active && (
                <motion.span
                  layoutId="project-filter-pill"
                  className="absolute inset-0 bg-ink"
                  transition={{ type: "spring", stiffness: 320, damping: 32 }}
                />
              )}
              <span className="relative z-10">{value}</span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-ink/5">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-1000 ease-premium group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <span className="mono absolute left-4 top-4 bg-white/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-ink">
                  {project.category}
                </span>
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink sm:text-xl">{project.title}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/55">{project.description}</p>
                  <ul className="mono mt-4 flex flex-wrap gap-x-3 gap-y-1 text-[10px] uppercase tracking-[0.16em] text-ink/40">
                    {project.scope.map((item) => (
                      <li key={`${project.id}-${item}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                type="button"
                className="group/btn mt-5 inline-flex items-center gap-2 border-b border-ink/20 pb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/70 transition-colors duration-300 hover:border-ink hover:text-ink"
              >
                View project
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 ease-premium group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <p className="mono mt-12 text-[10px] uppercase tracking-[0.2em] text-ink/35">
        Projets de démonstration — créés à des fins d'illustration visuelle uniquement.
      </p>
    </div>
  );
}

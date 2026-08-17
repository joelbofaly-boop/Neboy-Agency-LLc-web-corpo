import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "@/components/site/Logo";
import { nav } from "@/content/site";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggle = useCallback(() => setOpen((v) => !v), []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium",
          scrolled ? "glass border-b border-ink/10 py-2" : "border-b border-transparent py-4",
        )}
      >
        <div className="shell flex items-center justify-between gap-6">
          <Logo className={cn("transition-all duration-500 ease-premium", scrolled ? "h-8 sm:h-9" : "h-9 sm:h-11")} />

          <nav className="hidden items-center gap-6 xl:flex" aria-label="Navigation principale">
            {nav.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "link-sweep mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-300",
                    active ? "text-brand" : "text-ink/65 hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="group hidden items-center gap-2 bg-ink px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-brand sm:inline-flex"
            >
              Start a project
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <button
              type="button"
              onClick={toggle}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              className="relative z-[60] inline-flex h-11 w-11 items-center justify-center border border-ink/15 text-ink transition-colors duration-300 hover:border-ink/40 xl:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: EASE }}
            className="fixed inset-0 z-[55] bg-ink text-white xl:hidden"
          >
            <div className="grid-lines-dark absolute inset-0 opacity-60" aria-hidden />
            <div className="relative flex h-full flex-col justify-between px-5 pb-10 pt-28 sm:px-8">
              <nav className="flex flex-col" aria-label="Navigation mobile">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.12 + i * 0.05 }}
                    className="border-b border-white/10"
                  >
                    <Link
                      to={item.to}
                      className="flex items-baseline justify-between py-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl"
                    >
                      <span>{item.label}</span>
                      <span className="mono text-[10px] tracking-[0.3em] text-white/35">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.5 }}
                className="space-y-6"
              >
                <Link
                  to="/contact"
                  className="flex w-full items-center justify-between bg-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-ink"
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <div className="flex items-center gap-4">
                  <Logo surface="plate" className="h-7" linkTo={null} />
                  <p className="mono text-[10px] uppercase tracking-[0.24em] text-white/45">
                    Technology · Communication · Global Trade
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

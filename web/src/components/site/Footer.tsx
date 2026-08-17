import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Logo from "@/components/site/Logo";
import { company } from "@/content/site";

const columns: Array<{ title: string; links: Array<{ label: string; to: string }> }> = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Services", to: "/services" },
      { label: "Projects", to: "/projects" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Mobile Development", to: "/technology" },
      { label: "Communication", to: "/communication" },
      { label: "Marketing", to: "/communication" },
      { label: "Global Trade", to: "/global-trade" },
    ],
  },
];

const socials = ["LinkedIn", "Instagram", "Facebook", "X"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="grid-lines-dark absolute inset-0 opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-brand/25 blur-[120px]"
        aria-hidden
      />

      <div className="shell relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="space-y-6">
            <Logo surface="plate" className="h-9 sm:h-10" />
            <p className="max-w-xs text-lg font-semibold leading-snug tracking-[-0.02em] text-white/90">
              {company.tagline}
            </p>
            <a
              href="mailto:contact@neboyagencyllc.com"
              className="link-sweep mono text-[10px] uppercase tracking-[0.24em] text-white/60 transition-colors duration-300 hover:text-white"
            >
              contact@neboyagencyllc.com
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="eyebrow mb-5 text-white/40">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={`${col.title}-${link.label}`}>
                    <Link
                      to={link.to}
                      className="link-sweep text-sm text-white/75 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="eyebrow mb-5 text-white/40">Connect</h3>
            <ul className="space-y-3">
              {socials.map((social) => (
                <li key={social} className="flex items-center gap-2 text-sm text-white/45">
                  {social}
                  <span className="mono text-[9px] uppercase tracking-[0.2em] text-white/25">bientôt</span>
                </li>
              ))}
            </ul>
            <p className="mono mt-5 max-w-[220px] text-[10px] leading-relaxed text-white/30">
              Les liens seront activés dès communication des comptes officiels.
            </p>
          </div>
        </div>

        <div className="rule-dark my-12" />

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl"
          >
            Start a project
            <span className="inline-flex h-9 w-9 items-center justify-center border border-white/25 transition-colors duration-300 group-hover:border-white group-hover:bg-white group-hover:text-ink">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>

          <p className="mono text-[10px] uppercase tracking-[0.22em] text-white/35">
            © {new Date().getFullYear()} {company.name} — All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

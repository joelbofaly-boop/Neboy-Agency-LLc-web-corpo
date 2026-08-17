import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

import CTAButton from "@/components/site/CTAButton";
import MarketingDashboard from "@/components/site/MarketingDashboard";
import PartnershipCTA from "@/components/site/PartnershipCTA";
import ProcessTimeline from "@/components/site/ProcessTimeline";
import ProjectsGrid from "@/components/site/ProjectsGrid";
import { Reveal, RevealImage, RevealLines } from "@/components/site/Reveal";
import SectionHead from "@/components/site/SectionHead";
import Seo from "@/components/site/Seo";
import WorldMap from "@/components/site/WorldMap";
import { images } from "@/content/images";
import { company, expertises, positioning, whyPillars } from "@/content/site";

const marqueeItems = [
  "Technology",
  "Communication",
  "Global Trade",
  "iOS & Android",
  "Branding",
  "Import & Export",
  "Sourcing",
  "Marketing",
];

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-paper pt-28 sm:pt-32">
      <div className="grid-lines absolute inset-0 opacity-70" aria-hidden />

      <div className="shell relative grid items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24">
        <motion.div style={{ y: textY, opacity: fade }} className="relative z-10">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-signal" />
              <span className="eyebrow text-ink/45">{company.signature}</span>
            </div>
          </Reveal>

          <h1 className="display mt-7 text-[2.6rem] leading-[0.94] text-ink sm:text-[4rem] lg:text-[4.9rem]">
            <RevealLines lines={["NEBOY", "AGENCY LLC"]} />
          </h1>

          <Reveal delay={0.35}>
            <p className="mt-7 max-w-lg text-lg font-semibold tracking-[-0.02em] text-brand sm:text-xl">
              Technology. Communication. Global&nbsp;Trade.
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/60 sm:text-lg">
              Nous développons des solutions digitales innovantes, construisons des stratégies de communication
              performantes et facilitons les échanges internationaux de matières premières.
            </p>
          </Reveal>

          <Reveal delay={0.55}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton to="/services">Découvrir nos services</CTAButton>
              <CTAButton to="/contact" variant="outline">
                Nous contacter
              </CTAButton>
            </div>
          </Reveal>

          <Reveal delay={0.7}>
            <div className="mt-14 hidden items-center gap-3 text-ink/40 lg:flex">
              <ArrowDown className="h-4 w-4 animate-bounce" />
              <span className="mono text-[10px] uppercase tracking-[0.24em]">Scroll</span>
            </div>
          </Reveal>
        </motion.div>

        <motion.div style={{ y: imageY }} className="relative">
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]"
          >
            <motion.img
              src={images.heroGlobal}
              alt="Smartphone premium affichant une application mobile devant un port international et un réseau mondial de connexions"
              fetchPriority="high"
              decoding="async"
              initial={{ scale: 1.18 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
            className="glass absolute -bottom-6 -left-4 hidden max-w-[260px] border border-white/60 p-5 shadow-[0_30px_80px_-40px_rgba(6,21,48,0.6)] sm:block lg:-left-10"
          >
            <p className="mono text-[10px] uppercase tracking-[0.22em] text-ink/40">Une seule structure</p>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              Trois pôles d'expertise coordonnés : produit digital, marque et flux commerciaux internationaux.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative overflow-hidden border-y border-ink/10 bg-ink py-4">
        <div className="flex w-max animate-marquee items-center gap-10 pr-10">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={`${item}-${i}`} className="mono flex items-center gap-10 text-[11px] uppercase tracking-[0.28em] text-white/55">
              {item}
              <span className="h-1 w-1 rounded-full bg-signal" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="shell">
        <SectionHead
          eyebrow="Nos expertises"
          title="Three expertises. One global partner."
          lead="Un même interlocuteur pour concevoir un produit digital, construire une marque et ouvrir des marchés internationaux."
        />

        <div className="mt-16 space-y-6 sm:mt-20">
          {expertises.map((expertise, i) => (
            <Reveal key={expertise.slug} delay={i * 0.05}>
              <article className="group relative grid gap-8 border border-ink/10 bg-white p-6 transition-all duration-700 ease-premium hover:border-ink/25 hover:shadow-[0_40px_100px_-60px_rgba(6,21,48,0.55)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
                <div className="relative aspect-[16/10] overflow-hidden bg-ink/5 lg:aspect-auto lg:min-h-[340px]">
                  <img
                    src={expertise.image}
                    alt={expertise.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-premium group-hover:scale-[1.05]"
                  />
                  <span className="mono absolute left-4 top-4 bg-white/90 px-2.5 py-1 text-[10px] tracking-[0.22em] text-ink">
                    {expertise.index}
                  </span>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold uppercase tracking-[-0.03em] text-ink sm:text-3xl">
                    {expertise.title}
                  </h3>
                  <p className="mt-3 text-base font-semibold text-brand sm:text-lg">{expertise.lead}</p>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/60 sm:text-base">
                    {expertise.description}
                  </p>

                  <ul className="mt-7 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                    {expertise.services.map((service) => (
                      <li
                        key={`${expertise.slug}-${service}`}
                        className="flex items-baseline gap-2.5 text-sm text-ink/70"
                      >
                        <span className="h-1 w-1 shrink-0 translate-y-[-2px] rounded-full bg-signal" />
                        {service}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 sm:mt-auto">
                    <div className="rule mb-6" />
                    <Link
                      to={expertise.to}
                      className="group/link inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:text-brand"
                    >
                      {expertise.cta}
                      <span className="inline-flex h-8 w-8 items-center justify-center border border-ink/20 transition-all duration-500 ease-premium group-hover/link:border-brand group-hover/link:bg-brand group-hover/link:text-white">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnologySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.04]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="grid-lines-dark absolute inset-0 opacity-40" aria-hidden />
      <div className="shell relative">
        <SectionHead
          eyebrow="Digital Technology"
          title="We build digital experiences."
          lead="Des applications pensées pour transformer une idée en produit digital performant."
          tone="light"
        />

        <motion.div style={{ y }} className="relative mt-16 sm:mt-20">
          <div className="relative aspect-[16/9] overflow-hidden">
            <motion.img
              style={{ scale }}
              src={images.phoneStack}
              alt="Trois smartphones présentant des interfaces d'applications bancaire, e-commerce et fitness fictives"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { title: "Bancaire & fintech", text: "Comptes, paiements, sécurité et suivi en temps réel." },
              { title: "E-commerce & réservation", text: "Catalogue, panier, paiement et logistique connectée." },
              { title: "Business & dashboards", text: "Outils métiers, pilotage et data visualisation mobile." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="border-t border-white/15 pt-5">
                  <h3 className="text-base font-semibold text-white sm:text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </motion.div>

        <Reveal delay={0.1}>
          <div className="mt-14">
            <CTAButton to="/technology" variant="ghost">
              Explorer la technologie
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-ink-soft py-24 text-white sm:py-32">
      <div
        className="pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-brand/25 blur-[130px]"
        aria-hidden
      />
      <div className="shell relative">
        <SectionHead
          eyebrow="Processus"
          title="From idea to impact."
          lead="Une méthode claire, du cadrage initial jusqu'à l'amélioration continue après le lancement."
          tone="light"
        />
        <ProcessTimeline />
      </div>
    </section>
  );
}

function CommunicationSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="grid-lines-dark absolute inset-0 opacity-40" aria-hidden />
      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHead
            eyebrow="Communication & Marketing"
            title="Make your brand impossible to ignore."
            lead="Branding, réseaux sociaux, publicité digitale, stratégie de contenu et communication corporate — pilotés par la donnée."
            tone="light"
          />

          <RevealImage
            src={images.studioCampaign}
            alt="Studio créatif avec écrans affichant des tableaux de bord marketing et moodboards de campagne"
            className="relative aspect-[16/10] overflow-hidden"
            imgClassName="h-full w-full object-cover"
          />
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="mb-6 flex items-center justify-between">
            <p className="mono text-[10px] uppercase tracking-[0.24em] text-white/45">Campaign dashboard</p>
            <p className="mono text-[10px] uppercase tracking-[0.24em] text-signal">Données de démonstration</p>
          </div>
          <MarketingDashboard />
          <p className="mono mt-6 max-w-2xl text-[10px] leading-relaxed text-white/35">
            Les chiffres affichés ci-dessus sont des données de démonstration destinées à illustrer un tableau de bord
            de campagne. Ils ne représentent pas des performances réelles de NEBOY AGENCY LLC.
          </p>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12">
            <CTAButton to="/communication" variant="ghost">
              Découvrir le conseil
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TradeSection() {
  return (
    <section className="relative overflow-hidden bg-ink-soft py-24 text-white sm:py-32">
      <div
        className="pointer-events-none absolute right-0 top-0 h-[480px] w-[480px] rounded-full bg-brand/20 blur-[140px]"
        aria-hidden
      />
      <div className="shell relative">
        <SectionHead
          eyebrow="Global Trade"
          title="Connecting markets. Creating opportunities."
          lead="Sourcing, mise en relation commerciale et coordination logistique entre l'Afrique, l'Europe, le Moyen-Orient, l'Asie et l'Amérique du Nord."
          tone="light"
        />

        <div className="mt-14">
          <WorldMap />
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <RevealImage
            src={images.portSunset}
            alt="Port international moderne au coucher du soleil avec porte-conteneurs et grues portuaires"
            className="relative aspect-[16/10] overflow-hidden"
            imgClassName="h-full w-full object-cover"
          />
          <RevealImage
            src={images.commodities}
            alt="Composition de matières premières industrielles et agricoles en éclairage studio"
            className="relative aspect-[16/10] overflow-hidden"
            imgClassName="h-full w-full object-cover"
          />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12">
            <CTAButton to="/global-trade" variant="ghost">
              Découvrir le négoce
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="shell">
        <SectionHead eyebrow="Pourquoi nous" title="Why NEBOY Agency?" />

        <div className="mt-16 grid gap-px border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {whyPillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.05}>
              <div className="group h-full bg-paper p-7 transition-colors duration-500 hover:bg-white sm:p-8">
                <span className="mono text-[10px] tracking-[0.24em] text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-lg font-bold uppercase tracking-[-0.02em] text-ink sm:text-xl">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{pillar.text}</p>
                <div className="mt-8 h-px w-8 bg-ink/20 transition-all duration-700 ease-premium group-hover:w-full group-hover:bg-brand" />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-px border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {positioning.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.05}>
              <div className="h-full bg-white p-7 sm:p-8">
                <p className="display text-3xl text-brand sm:text-4xl">{stat.value}</p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-ink">{stat.label}</p>
                <p className="mono mt-3 text-[10px] leading-relaxed tracking-[0.12em] text-ink/40">{stat.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="shell">
        <SectionHead
          eyebrow="Projects"
          title="Selected projects"
          lead="Une sélection de réalisations de démonstration illustrant nos trois pôles : Technology, Marketing et Trade."
        />
        <div className="mt-14">
          <ProjectsGrid />
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  return (
    <>
      <Seo
        title="NEBOY AGENCY LLC | Technology, Communication & Global Trade"
        description="NEBOY AGENCY LLC accompagne les entreprises dans le développement d'applications mobiles, la communication, le marketing et les opportunités de négoce international."
        path="/"
      />
      <Hero />
      <ExpertiseSection />
      <TechnologySection />
      <ProcessSection />
      <CommunicationSection />
      <TradeSection />
      <WhySection />
      <ProjectsSection />
      <PartnershipCTA />
    </>
  );
}

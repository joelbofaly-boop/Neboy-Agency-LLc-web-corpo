import { motion, useScroll, useTransform } from "framer-motion";
import { Boxes, Braces, Bug, Cpu, LayoutGrid, RefreshCw, Smartphone, Tablet } from "lucide-react";
import { useRef } from "react";

import CTAButton from "@/components/site/CTAButton";
import PageHero from "@/components/site/PageHero";
import PartnershipCTA from "@/components/site/PartnershipCTA";
import ProcessTimeline from "@/components/site/ProcessTimeline";
import { Reveal, RevealImage } from "@/components/site/Reveal";
import SectionHead from "@/components/site/SectionHead";
import Seo from "@/components/site/Seo";
import { images } from "@/content/images";

const capabilities = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    text: "Applications natives et cross-platform, de l'MVP au produit d'entreprise.",
  },
  { icon: Tablet, title: "iOS", text: "Swift, SwiftUI, intégration profonde de l'écosystème Apple." },
  { icon: Boxes, title: "Android", text: "Kotlin, Jetpack Compose, compatibilité large parc d'appareils." },
  { icon: LayoutGrid, title: "UX / UI", text: "Recherche, parcours, design system et prototypes interactifs." },
  { icon: Braces, title: "Backend & API", text: "Services, base de données, authentification et intégrations tierces." },
  { icon: Cpu, title: "AI Integration", text: "Assistants, recommandation, traitement de contenu et automatisations." },
  { icon: Bug, title: "Testing", text: "Tests fonctionnels, performance, sécurité et recette avant publication." },
  { icon: RefreshCw, title: "Maintenance", text: "Suivi des versions, corrections, évolutions et monitoring." },
];

const mockups = [
  { src: images.projectFintech, alt: "Application bancaire fictive affichée sur un smartphone", label: "Banking" },
  { src: images.phoneStack, alt: "Trois smartphones avec interfaces d'applications fictives", label: "Commerce" },
  { src: images.projectLogistics, alt: "Dashboard professionnel fictif sur écrans", label: "Business" },
];

function MockupRail() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["6%", "-10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-4%", "8%"]);

  return (
    <div ref={ref} className="grid gap-6 sm:grid-cols-3">
      {mockups.map((mockup, i) => (
        <motion.div key={mockup.src} style={{ y: i % 2 === 0 ? y1 : y2 }} className="relative">
          <RevealImage
            src={mockup.src}
            alt={mockup.alt}
            className="relative aspect-[3/4] overflow-hidden bg-white/5"
            imgClassName="h-full w-full object-cover"
          />
          <span className="mono mt-4 block text-[10px] uppercase tracking-[0.24em] text-white/45">
            {mockup.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export default function Technology() {
  return (
    <>
      <Seo
        title="Technology | Applications iOS & Android — NEBOY AGENCY LLC"
        description="Développement d'applications mobiles iOS et Android : UX/UI, backend et API, intégration d'intelligence artificielle, tests et maintenance."
        path="/technology"
      />

      <PageHero
        eyebrow="Digital Technology"
        titleLines={["We build", "digital experiences."]}
        lead="Des applications pensées pour transformer une idée en produit digital performant — conçues, développées, testées et maintenues par une seule équipe."
        image={images.phoneStack}
        imageAlt="Smartphones premium affichant des interfaces d'applications mobiles fictives"
      />

      <section className="bg-paper py-24 sm:py-32">
        <div className="shell">
          <SectionHead
            eyebrow="Capabilities"
            title="Du cadrage produit à la mise en production."
            lead="Chaque brique est traitée en interne, avec les mêmes standards de qualité et de documentation."
          />

          <div className="mt-16 grid gap-px border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, i) => {
              const Icon = capability.icon;
              return (
                <Reveal key={capability.title} delay={(i % 4) * 0.05}>
                  <div className="group h-full bg-white p-7">
                    <Icon className="h-5 w-5 text-brand transition-colors duration-500 group-hover:text-signal" />
                    <h3 className="mt-6 text-base font-bold uppercase tracking-[-0.01em] text-ink">
                      {capability.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/60">{capability.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
        <div className="grid-lines-dark absolute inset-0 opacity-40" aria-hidden />
        <div className="shell relative">
          <SectionHead
            eyebrow="Interfaces"
            title="Des produits taillés pour l'usage réel."
            lead="Interfaces de démonstration : applications bancaire, e-commerce, fitness, réservation et tableaux de bord professionnels."
            tone="light"
          />
          <div className="mt-16">
            <MockupRail />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-soft py-24 text-white sm:py-32">
        <div
          className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-brand/25 blur-[130px]"
          aria-hidden
        />
        <div className="shell relative">
          <SectionHead
            eyebrow="Processus"
            title="From idea to impact."
            lead="Six étapes, des livrables identifiés à chacune, et un point de décision clair avant de passer à la suivante."
            tone="light"
          />
          <ProcessTimeline />

          <Reveal delay={0.1}>
            <div className="mt-14">
              <CTAButton to="/contact" variant="light">
                Start a project
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      <PartnershipCTA
        title={["Une idée d'app ?", "Construisons-la."]}
        text="Décrivez votre besoin : nous revenons vers vous avec un cadrage, un périmètre et des étapes concrètes."
      />
    </>
  );
}

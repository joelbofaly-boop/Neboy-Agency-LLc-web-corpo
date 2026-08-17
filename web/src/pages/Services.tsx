import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import CTAButton from "@/components/site/CTAButton";
import PageHero from "@/components/site/PageHero";
import PartnershipCTA from "@/components/site/PartnershipCTA";
import { Reveal, RevealImage } from "@/components/site/Reveal";
import SectionHead from "@/components/site/SectionHead";
import Seo from "@/components/site/Seo";
import { images } from "@/content/images";
import { expertises } from "@/content/site";

type DivisionDetail = {
  slug: string;
  benefits: string[];
  process: string[];
  gallery: Array<{ src: string; alt: string }>;
};

const details: DivisionDetail[] = [
  {
    slug: "technology",
    benefits: [
      "Un produit livré, testé et exploitable, pas une maquette.",
      "Une architecture pensée pour évoluer sans dette technique.",
      "Un design system cohérent sur iOS et Android.",
      "Un suivi post-lancement et des itérations mesurées.",
    ],
    process: ["Discover", "Strategy", "UX / UI", "Development", "Test", "Launch"],
    gallery: [
      { src: images.phoneStack, alt: "Smartphones présentant des interfaces d'applications fictives" },
      { src: images.projectFintech, alt: "Interface d'application bancaire fictive sur smartphone" },
    ],
  },
  {
    slug: "communication",
    benefits: [
      "Un positionnement clair, formulé et défendable.",
      "Une identité visuelle applicable sur tous les supports.",
      "Des campagnes pilotées par des indicateurs concrets.",
      "Une communication institutionnelle cohérente à l'international.",
    ],
    process: ["Audit", "Positionnement", "Identité", "Contenus", "Campagnes", "Mesure"],
    gallery: [
      { src: images.studioCampaign, alt: "Studio créatif avec tableaux de bord marketing" },
      { src: images.projectBrand, alt: "Supports de marque premium en bleu, rouge et blanc" },
    ],
  },
  {
    slug: "global-trade",
    benefits: [
      "Une mise en relation directe entre acheteurs et fournisseurs.",
      "Un sourcing structuré selon les opportunités et marchés ciblés.",
      "Une coordination logistique suivie de bout en bout.",
      "Des partenariats commerciaux construits dans la durée.",
    ],
    process: ["Besoin", "Sourcing", "Qualification", "Négociation", "Logistique", "Suivi"],
    gallery: [
      { src: images.portSunset, alt: "Port international au coucher du soleil" },
      { src: images.warehouse, alt: "Entrepôt de distribution moderne" },
    ],
  },
];

export default function Services() {
  return (
    <>
      <Seo
        title="Services | NEBOY AGENCY LLC"
        description="Trois divisions : développement d'applications mobiles, conseil en communication et marketing, négoce international et mise en relation commerciale."
        path="/services"
      />

      <PageHero
        eyebrow="Services"
        titleLines={["Three divisions.", "One standard of", "execution."]}
        lead="Digital Division, Communication Division et Global Trade Division : trois périmètres distincts, une même exigence de méthode, de transparence et de résultat."
        image={images.boardroom}
        imageAlt="Salle de réunion internationale avec écran affichant une carte du monde"
      />

      <section className="bg-paper py-24 sm:py-32">
        <div className="shell space-y-24 sm:space-y-32">
          {expertises.map((division, index) => {
            const detail = details.find((d) => d.slug === division.slug);
            return (
              <div key={division.slug} id={division.slug} className="scroll-mt-32">
                <div className="flex flex-col gap-4 border-t border-ink/15 pt-8 sm:flex-row sm:items-baseline sm:justify-between">
                  <div className="flex items-baseline gap-5">
                    <span className="mono text-xs text-signal">{division.index}</span>
                    <h2 className="display text-[2rem] text-ink sm:text-[2.8rem]">{division.title} Division</h2>
                  </div>
                  <Link
                    to={division.to}
                    className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/60 transition-colors duration-300 hover:text-brand"
                  >
                    {division.cta}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

                <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                  <div>
                    <Reveal>
                      <p className="max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl">
                        {division.description}
                      </p>
                    </Reveal>

                    <div className="mt-10 grid gap-10 sm:grid-cols-2">
                      <div>
                        <h3 className="eyebrow text-ink/40">Prestations</h3>
                        <ul className="mt-5 space-y-2">
                          {division.services.map((service) => (
                            <li key={service} className="flex items-baseline gap-2.5 text-sm text-ink/70">
                              <span className="h-1 w-1 shrink-0 translate-y-[-2px] rounded-full bg-brand" />
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="eyebrow text-ink/40">Bénéfices</h3>
                        <ul className="mt-5 space-y-3">
                          {detail?.benefits.map((benefit) => (
                            <li key={benefit} className="text-sm leading-relaxed text-ink/70">
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-10">
                      <h3 className="eyebrow text-ink/40">Processus</h3>
                      <ol className="mt-5 flex flex-wrap gap-2">
                        {detail?.process.map((step, i) => (
                          <li
                            key={step}
                            className="mono flex items-center gap-2 border border-ink/15 px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-ink/60"
                          >
                            <span className="text-signal">{String(i + 1).padStart(2, "0")}</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="mt-10">
                      <CTAButton to="/contact" variant={index % 2 === 0 ? "solid" : "outline"}>
                        Start a project
                      </CTAButton>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {detail?.gallery.map((item) => (
                      <RevealImage
                        key={item.src}
                        src={item.src}
                        alt={item.alt}
                        className="relative aspect-[16/10] overflow-hidden bg-ink/5"
                        imgClassName="h-full w-full object-cover"
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <PartnershipCTA />
    </>
  );
}

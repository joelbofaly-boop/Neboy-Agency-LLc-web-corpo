import PageHero from "@/components/site/PageHero";
import PartnershipCTA from "@/components/site/PartnershipCTA";
import { Reveal, RevealImage } from "@/components/site/Reveal";
import SectionHead from "@/components/site/SectionHead";
import Seo from "@/components/site/Seo";
import { images } from "@/content/images";
import { company, expertises, whyPillars } from "@/content/site";

const intersections = [
  {
    title: "Technology",
    text: "Concevoir et développer des applications iOS et Android robustes, évolutives et maintenables.",
  },
  {
    title: "Communication",
    text: "Structurer un positionnement clair et le déployer sur les canaux qui créent de la préférence.",
  },
  {
    title: "International Trade",
    text: "Faciliter les échanges import & export et connecter fournisseurs et acheteurs entre les marchés.",
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="À propos | NEBOY AGENCY LLC"
        description="NEBOY AGENCY LLC est une agence multidisciplinaire opérant à l'intersection de la technologie, de la communication et du commerce international."
        path="/about"
      />

      <PageHero
        eyebrow="About"
        titleLines={["Building connections", "between technology,", "brands & markets."]}
        lead="NEBOY AGENCY LLC est une agence multidisciplinaire qui opère à l'intersection de trois disciplines rarement réunies sous un même toit : le produit digital, la marque et le commerce international."
        image={images.architecture}
        imageAlt="Atrium d'un siège social international moderne en verre et pierre sombre"
      />

      <section className="bg-paper py-24 sm:py-32">
        <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHead eyebrow="Positionnement" title="Technology × Communication × International Trade" />

          <div className="space-y-8">
            <Reveal>
              <p className="text-lg leading-relaxed text-ink/70 sm:text-xl">
                {company.promise} Nous accompagnons entreprises, institutions, startups et partenaires internationaux
                sur l'ensemble de la chaîne : de la conception d'un produit mobile à la structuration d'une marque,
                jusqu'à l'ouverture de flux commerciaux internationaux.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="text-base leading-relaxed text-ink/60">
                Cette combinaison n'est pas un catalogue de services : c'est une manière de travailler. Un produit
                digital se diffuse mieux quand la marque est claire. Une relation commerciale internationale se
                construit plus vite quand les outils et le discours suivent. Nous relions ces dimensions au sein d'une
                même équipe.
              </p>
            </Reveal>

            <div className="grid gap-px border border-ink/10 bg-ink/10 sm:grid-cols-3">
              {intersections.map((item, i) => (
                <Reveal key={item.title} delay={0.05 * i}>
                  <div className="h-full bg-white p-6">
                    <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-brand">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/60">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="shell">
          <SectionHead eyebrow="Nos divisions" title="Une structure, trois divisions." />

          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            {expertises.map((division, i) => (
              <Reveal key={division.slug} delay={i * 0.06}>
                <article className="group h-full">
                  <RevealImage
                    src={division.image}
                    alt={division.imageAlt}
                    className="relative aspect-[4/3] overflow-hidden bg-ink/5"
                    imgClassName="h-full w-full object-cover transition-transform duration-1000 ease-premium group-hover:scale-[1.05]"
                  />
                  <span className="mono mt-6 block text-[10px] tracking-[0.24em] text-signal">{division.index}</span>
                  <h3 className="mt-3 text-xl font-bold uppercase tracking-[-0.02em] text-ink">{division.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">{division.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
        <div className="grid-lines-dark absolute inset-0 opacity-40" aria-hidden />
        <div className="shell relative">
          <SectionHead eyebrow="Notre approche" title="Ce qui guide notre travail." tone="light" />

          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            {whyPillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.05}>
                <div className="h-full bg-ink p-8">
                  <span className="mono text-[10px] tracking-[0.24em] text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-xl font-bold uppercase tracking-[-0.02em]">{pillar.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/55">{pillar.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mono mt-10 max-w-2xl text-[10px] leading-relaxed text-white/35">
              Aucune certification, implantation, référence client ou ancienneté n'est communiquée sur ce site tant que
              les informations correspondantes n'ont pas été fournies par l'entreprise.
            </p>
          </Reveal>
        </div>
      </section>

      <PartnershipCTA />
    </>
  );
}

import { Handshake, PackageSearch, Route, Ship, Truck, Users } from "lucide-react";

import CTAButton from "@/components/site/CTAButton";
import PageHero from "@/components/site/PageHero";
import PartnershipCTA from "@/components/site/PartnershipCTA";
import { Reveal, RevealImage } from "@/components/site/Reveal";
import SectionHead from "@/components/site/SectionHead";
import Seo from "@/components/site/Seo";
import WorldMap from "@/components/site/WorldMap";
import { images } from "@/content/images";
import { commodityFamilies } from "@/content/site";

const capabilities = [
  { icon: PackageSearch, title: "Global Sourcing", text: "Identification et qualification de fournisseurs sur les marchés ciblés." },
  { icon: Ship, title: "International Trade", text: "Structuration d'opérations de négoce entre zones géographiques." },
  { icon: Route, title: "Import & Export", text: "Organisation des flux entrants et sortants, documentation et suivi." },
  { icon: Users, title: "Commercial Connections", text: "Mise en relation directe entre acheteurs et fournisseurs." },
  { icon: Truck, title: "Logistics Coordination", text: "Coordination transport, transit et livraison avec les intervenants." },
  { icon: Handshake, title: "Partnerships", text: "Développement de partenariats commerciaux dans la durée." },
];

export default function GlobalTrade() {
  return (
    <>
      <Seo
        title="Global Trade | Négoce international — NEBOY AGENCY LLC"
        description="Négoce international : sourcing, import & export, mise en relation commerciale, coordination logistique et développement de partenariats."
        path="/global-trade"
      />

      <PageHero
        eyebrow="Global Trade"
        titleLines={["Connecting markets.", "Creating", "opportunities."]}
        lead="Un département dédié au négoce international : sourcing, mise en relation commerciale, import & export et coordination logistique, selon les opportunités et marchés ciblés."
        image={images.portSunset}
        imageAlt="Port international moderne au coucher du soleil avec porte-conteneurs et grues portuaires"
      />

      <section className="bg-paper py-24 sm:py-32">
        <div className="shell">
          <SectionHead
            eyebrow="Capabilities"
            title="Du besoin identifié à la marchandise livrée."
            lead="Nous intervenons sur la chaîne commerciale : trouver, qualifier, connecter, coordonner et suivre."
          />

          <div className="mt-16 grid gap-px border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, i) => {
              const Icon = capability.icon;
              return (
                <Reveal key={capability.title} delay={(i % 3) * 0.05}>
                  <div className="group h-full bg-white p-7 sm:p-8">
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
        <div
          className="pointer-events-none absolute right-0 top-10 h-[440px] w-[440px] rounded-full bg-brand/20 blur-[140px]"
          aria-hidden
        />
        <div className="shell relative">
          <SectionHead
            eyebrow="Markets"
            title="Une lecture globale des corridors."
            lead="Afrique, Europe, Moyen-Orient, Asie et Amérique du Nord : survolez un marché pour isoler ses corridors."
            tone="light"
          />
          <div className="mt-12">
            <WorldMap />
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHead
            eyebrow="Commodity opportunities"
            title="Des familles de produits, pas des promesses."
          />

          <div>
            <Reveal>
              <p className="max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg">
                Les familles ci-dessous décrivent des périmètres d'intervention possibles. Aucune matière première
                n'est présentée comme effectivement commercialisée : chaque opération dépend des opportunités et
                marchés ciblés au moment de la demande.
              </p>
            </Reveal>

            <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
              {commodityFamilies.map((family, i) => (
                <Reveal key={family.name} delay={i * 0.04} as="li">
                  <div className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-baseline gap-4">
                      <span className="mono text-[10px] tracking-[0.24em] text-signal">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-lg font-semibold tracking-[-0.02em] text-ink sm:text-xl">
                        {family.name}
                      </span>
                    </div>
                    <span className="mono text-[10px] uppercase tracking-[0.16em] text-ink/40">{family.note}</span>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.1}>
              <p className="mono mt-8 max-w-xl text-[10px] leading-relaxed text-ink/40">
                Aucune licence, certification, volume de transaction, référence partenaire, port d'attache ou bureau
                international n'est affiché sur ce site. Ces éléments seront ajoutés uniquement s'ils sont fournis par
                l'entreprise.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 sm:py-32">
        <div className="shell grid gap-6 lg:grid-cols-2">
          <RevealImage
            src={images.commodities}
            alt="Matières premières industrielles et agricoles présentées en éclairage studio"
            className="relative aspect-[16/11] overflow-hidden bg-ink/5"
            imgClassName="h-full w-full object-cover"
          />
          <RevealImage
            src={images.warehouse}
            alt="Entrepôt logistique moderne avec palettes, racks et opérateurs"
            className="relative aspect-[16/11] overflow-hidden bg-ink/5"
            imgClassName="h-full w-full object-cover"
          />
          <div className="lg:col-span-2">
            <RevealImage
              src={images.boardroom}
              alt="Réunion d'affaires internationale avec écran affichant une carte mondiale"
              className="relative aspect-[16/7] overflow-hidden bg-ink/5"
              imgClassName="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="shell mt-14">
          <Reveal>
            <CTAButton to="/contact">Contact the trade desk</CTAButton>
          </Reveal>
        </div>
      </section>

      <PartnershipCTA
        title={["Un besoin", "d'import ou d'export ?"]}
        text="Décrivez le produit recherché, le volume et le marché : nous revenons vers vous avec une piste de sourcing."
      />
    </>
  );
}

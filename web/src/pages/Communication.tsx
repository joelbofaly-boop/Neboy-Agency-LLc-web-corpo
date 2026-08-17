import { Compass, Megaphone, MessagesSquare, PenTool, Share2, Sparkles, Target } from "lucide-react";

import CTAButton from "@/components/site/CTAButton";
import MarketingDashboard from "@/components/site/MarketingDashboard";
import PageHero from "@/components/site/PageHero";
import PartnershipCTA from "@/components/site/PartnershipCTA";
import { Reveal, RevealImage } from "@/components/site/Reveal";
import SectionHead from "@/components/site/SectionHead";
import Seo from "@/components/site/Seo";
import { images } from "@/content/images";

const services = [
  { icon: Compass, title: "Brand Strategy", text: "Positionnement, promesse, architecture de marque et messages clés." },
  {
    icon: MessagesSquare,
    title: "Corporate Communication",
    text: "Discours institutionnel, relations partenaires et communication interne.",
  },
  { icon: Target, title: "Digital Marketing", text: "Acquisition, tunnels de conversion et mesure de la performance." },
  { icon: Share2, title: "Social Media", text: "Stratégie éditoriale, formats natifs et animation de communauté." },
  { icon: PenTool, title: "Content Strategy", text: "Lignes éditoriales, production de contenus et calendrier de publication." },
  { icon: Megaphone, title: "Advertising", text: "Campagnes publicitaires digitales, création et pilotage média." },
  { icon: Sparkles, title: "Visual Identity", text: "Logo, système graphique, typographie, couleurs et déclinaisons." },
];

const campaigns = [
  {
    src: images.projectBrand,
    alt: "Supports de marque premium : cartes, papeterie et packaging en bleu, rouge et blanc",
    title: "Meridian Identity",
    text: "Refonte d'identité visuelle et système graphique complet — campagne fictive.",
  },
  {
    src: images.studioCampaign,
    alt: "Studio créatif avec écrans affichant des tableaux de bord de campagne",
    title: "Signal Campaign",
    text: "Lancement multicanal : contenus, publicité et pilotage — campagne fictive.",
  },
];

export default function Communication() {
  return (
    <>
      <Seo
        title="Communication & Marketing | NEBOY AGENCY LLC"
        description="Conseil en communication et marketing : stratégie de marque, identité visuelle, marketing digital, réseaux sociaux, contenus et campagnes publicitaires."
        path="/communication"
      />

      <PageHero
        eyebrow="Communication & Marketing"
        titleLines={["Make your brand", "impossible", "to ignore."]}
        lead="Construire une marque, structurer son discours et amplifier son influence sur les canaux qui comptent — avec des indicateurs clairs à chaque étape."
        image={images.studioCampaign}
        imageAlt="Studio créatif international avec moodboards et tableaux de bord de campagne"
      />

      <section className="bg-paper py-24 sm:py-32">
        <div className="shell">
          <SectionHead
            eyebrow="Services"
            title="Une marque cohérente, partout."
            lead="De la plateforme de marque à la campagne d'acquisition, chaque intervention alimente la suivante."
          />

          <div className="mt-16 grid gap-px border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={(i % 3) * 0.05}>
                  <div className="group h-full bg-white p-7 sm:p-8">
                    <div className="flex items-start justify-between">
                      <Icon className="h-5 w-5 text-brand transition-colors duration-500 group-hover:text-signal" />
                      <span className="mono text-[10px] tracking-[0.24em] text-ink/25">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-6 text-base font-bold uppercase tracking-[-0.01em] text-ink">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/60">{service.text}</p>
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
            eyebrow="Performance"
            title="Piloter plutôt que subir."
            lead="Un tableau de bord partagé regroupe croissance, engagement, portée, conversion et suivi des campagnes."
            tone="light"
          />

          <div className="mt-14">
            <MarketingDashboard />
            <p className="mono mt-6 max-w-2xl text-[10px] leading-relaxed text-white/35">
              Données de démonstration destinées à illustrer un tableau de bord de campagne. Elles ne représentent pas
              des performances réelles de NEBOY AGENCY LLC.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="shell">
          <SectionHead eyebrow="Campagnes" title="Cas de démonstration." />

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            {campaigns.map((campaign, i) => (
              <Reveal key={campaign.title} delay={i * 0.06}>
                <article className="group">
                  <RevealImage
                    src={campaign.src}
                    alt={campaign.alt}
                    className="relative aspect-[16/11] overflow-hidden bg-ink/5"
                    imgClassName="h-full w-full object-cover transition-transform duration-1000 ease-premium group-hover:scale-[1.05]"
                  />
                  <h3 className="mt-6 text-xl font-bold uppercase tracking-[-0.02em] text-ink">{campaign.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/60">{campaign.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-14">
              <CTAButton to="/contact">Start a project</CTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      <PartnershipCTA
        title={["Votre marque", "mérite mieux."]}
        text="Positionnement, identité, contenus, campagnes : dites-nous où vous en êtes, nous construisons la suite."
      />
    </>
  );
}

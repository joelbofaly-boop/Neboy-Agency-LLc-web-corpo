import PageHero from "@/components/site/PageHero";
import PartnershipCTA from "@/components/site/PartnershipCTA";
import ProjectsGrid from "@/components/site/ProjectsGrid";
import Seo from "@/components/site/Seo";
import { images } from "@/content/images";

export default function Projects() {
  return (
    <>
      <Seo
        title="Projects | NEBOY AGENCY LLC"
        description="Sélection de projets de démonstration illustrant les trois pôles de NEBOY AGENCY LLC : Technology, Marketing et Trade."
        path="/projects"
      />

      <PageHero
        eyebrow="Projects"
        titleLines={["Selected", "projects."]}
        lead="Une sélection de réalisations de démonstration, créées à des fins d'illustration visuelle, réparties entre Technology, Marketing et Trade."
        image={images.projectBrand}
        imageAlt="Supports de marque premium en bleu, rouge et blanc sur fond béton clair"
      />

      <section className="bg-paper py-24 sm:py-32">
        <div className="shell">
          <ProjectsGrid />
        </div>
      </section>

      <PartnershipCTA />
    </>
  );
}

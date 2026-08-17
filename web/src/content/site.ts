import { images } from "./images";

/**
 * Editorial content for the whole site.
 * Kept in one typed module so pages stay presentational and a CMS can later
 * feed the exact same shapes.
 */

export type NavItem = { label: string; to: string };

export const nav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Technology", to: "/technology" },
  { label: "Communication", to: "/communication" },
  { label: "Global Trade", to: "/global-trade" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export const company = {
  name: "NEBOY AGENCY LLC",
  signature: "IMPORT & EXPORT",
  tagline: "Technology. Communication. Global Trade.",
  promise: "We build. We connect. We create opportunities.",
} as const;

export type Expertise = {
  index: string;
  slug: string;
  title: string;
  lead: string;
  description: string;
  services: string[];
  cta: string;
  to: string;
  image: string;
  imageAlt: string;
};

export const expertises: Expertise[] = [
  {
    index: "01",
    slug: "technology",
    title: "Digital Technology",
    lead: "Applications iOS & Android",
    description:
      "Créer des applications mobiles modernes, performantes et évolutives, de la première idée jusqu'au déploiement en production.",
    services: [
      "Conception UX/UI",
      "Applications iOS",
      "Applications Android",
      "Applications cross-platform",
      "MVP",
      "Applications professionnelles",
      "Applications e-commerce",
      "Applications SaaS",
      "Intégration API",
      "Intelligence artificielle",
      "Maintenance et évolution",
    ],
    cta: "Explorer la technologie",
    to: "/technology",
    image: images.phoneStack,
    imageAlt:
      "Trois smartphones premium présentant des interfaces d'applications mobiles fictives sur fond bleu nuit",
  },
  {
    index: "02",
    slug: "communication",
    title: "Communication & Marketing",
    lead: "Construire une marque. Amplifier son influence.",
    description:
      "Structurer un discours de marque cohérent et le déployer sur les canaux qui comptent, avec une mesure claire des résultats.",
    services: [
      "Stratégie de communication",
      "Branding",
      "Identité visuelle",
      "Marketing digital",
      "Stratégie réseaux sociaux",
      "Création de contenus",
      "Campagnes publicitaires",
      "Positionnement de marque",
      "Communication institutionnelle",
      "Stratégie commerciale",
    ],
    cta: "Découvrir le conseil",
    to: "/communication",
    image: images.studioCampaign,
    imageAlt:
      "Studio créatif international avec écrans affichant des tableaux de bord marketing et des moodboards de campagne",
  },
  {
    index: "03",
    slug: "global-trade",
    title: "Global Trade",
    lead: "Négoce international de matières premières",
    description:
      "Connecter acheteurs et fournisseurs, structurer les flux import & export et coordonner la logistique, selon les opportunités et marchés ciblés.",
    services: [
      "Trading international",
      "Sourcing",
      "Mise en relation commerciale",
      "Approvisionnement",
      "Import & Export",
      "Coordination logistique",
      "Développement de partenariats",
      "Recherche de fournisseurs",
      "Recherche d'acheteurs",
    ],
    cta: "Découvrir le négoce",
    to: "/global-trade",
    image: images.portSunset,
    imageAlt:
      "Port international moderne au coucher du soleil avec porte-conteneurs, grues portuaires et containers alignés",
  },
];

export type ProcessStep = { index: string; title: string; text: string };

export const processSteps: ProcessStep[] = [
  { index: "01", title: "Discover", text: "Analyse du besoin, cadrage du périmètre et définition du projet." },
  { index: "02", title: "Strategy", text: "Architecture technique, priorisation et stratégie produit." },
  { index: "03", title: "UX / UI", text: "Création de l'expérience utilisateur et du système de design." },
  { index: "04", title: "Development", text: "Développement technique iOS / Android et services back-end." },
  { index: "05", title: "Test", text: "Tests, optimisation des performances et sécurisation." },
  { index: "06", title: "Launch", text: "Déploiement, suivi des usages et amélioration continue." },
];

export type Pillar = { title: string; text: string };

export const whyPillars: Pillar[] = [
  { title: "Innovation", text: "Nous transformons les idées en solutions concrètes." },
  {
    title: "Expertise",
    text: "Une approche combinant technologie, communication et commerce international.",
  },
  {
    title: "Vision internationale",
    text: "Une approche pensée pour connecter les entreprises aux opportunités mondiales.",
  },
  {
    title: "Partnership",
    text: "Nous privilégions des relations professionnelles durables avec nos clients et partenaires.",
  },
];

export const positioning = [
  { value: "3", label: "Pôles d'expertise", note: "Technology · Communication · Trade" },
  { value: "Global", label: "Approach", note: "Afrique · Europe · Moyen-Orient · Asie · Amériques" },
  { value: "Digital", label: "First", note: "Produits mobiles et outils mesurables" },
  { value: "Intl.", label: "Vision", note: "Import & Export au cœur du modèle" },
] as const;

export type ProjectCategory = "Technology" | "Marketing" | "Trade";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  imageAlt: string;
  scope: string[];
};

/** Demonstration projects — fictitious, created for visual purposes only. */
export const projects: Project[] = [
  {
    id: "atlas-banking",
    title: "Atlas Banking App",
    category: "Technology",
    description: "Application bancaire mobile : comptes multi-devises, virements et analyse des dépenses.",
    image: images.projectFintech,
    imageAlt: "Smartphone affichant une interface d'application bancaire fictive",
    scope: ["UX/UI", "iOS & Android", "API"],
  },
  {
    id: "meridian-identity",
    title: "Meridian Identity",
    category: "Marketing",
    description: "Plateforme de marque complète : identité visuelle, ton éditorial et déclinaisons print.",
    image: images.projectBrand,
    imageAlt: "Papeterie et supports de marque premium en bleu, rouge et blanc",
    scope: ["Branding", "Identité visuelle", "Guidelines"],
  },
  {
    id: "corridor-freight",
    title: "Corridor Freight",
    category: "Trade",
    description: "Suivi des flux import & export et coordination logistique sur un tableau de bord unique.",
    image: images.projectLogistics,
    imageAlt: "Salle de contrôle logistique avec écrans de suivi de routes maritimes",
    scope: ["Sourcing", "Logistique", "Reporting"],
  },
  {
    id: "harbor-sourcing",
    title: "Harbor Sourcing",
    category: "Trade",
    description: "Mise en relation entre fournisseurs et acheteurs sur des corridors commerciaux ciblés.",
    image: images.warehouse,
    imageAlt: "Entrepôt de distribution moderne avec palettes et chariot élévateur",
    scope: ["Sourcing", "Partenariats", "Import & Export"],
  },
  {
    id: "signal-campaign",
    title: "Signal Campaign",
    category: "Marketing",
    description: "Campagne digitale multicanale : contenus, publicité et pilotage de la performance.",
    image: images.boardroom,
    imageAlt: "Salle de réunion internationale avec écran affichant une carte du monde",
    scope: ["Media", "Contenus", "Analytics"],
  },
  {
    id: "vector-commerce",
    title: "Vector Commerce",
    category: "Technology",
    description: "Application e-commerce mobile : catalogue, paiement et logistique connectée.",
    image: images.phoneStack,
    imageAlt: "Smartphones présentant des écrans d'application e-commerce fictifs",
    scope: ["Mobile", "Paiement", "Intégrations"],
  },
];

export const projectFilters: Array<ProjectCategory | "All"> = ["All", "Technology", "Marketing", "Trade"];

export type MarketRegion = { id: string; name: string; x: number; y: number };

/** Market regions plotted on the equirectangular dot map (percent coordinates). */
export const marketRegions: MarketRegion[] = [
  { id: "americas", name: "Amérique du Nord", x: 23.5, y: 29.2 },
  { id: "europe", name: "Europe", x: 54, y: 22.5 },
  { id: "africa", name: "Afrique", x: 51.3, y: 50.5 },
  { id: "mena", name: "Moyen-Orient", x: 63.8, y: 39.2 },
  { id: "asia", name: "Asie", x: 81.8, y: 35.8 },
];

export type Corridor = { from: string; to: string };

/** Illustrative market corridors — capacity to connect markets, not physical offices. */
export const corridors: Corridor[] = [
  { from: "africa", to: "europe" },
  { from: "europe", to: "mena" },
  { from: "mena", to: "asia" },
  { from: "africa", to: "americas" },
  { from: "americas", to: "europe" },
  { from: "africa", to: "asia" },
];

export const commodityFamilies = [
  { name: "Minerais", note: "Selon les opportunités et marchés ciblés" },
  { name: "Métaux", note: "Selon les opportunités et marchés ciblés" },
  { name: "Produits agricoles", note: "Selon les opportunités et marchés ciblés" },
  { name: "Matières premières industrielles", note: "Selon les opportunités et marchés ciblés" },
  { name: "Autres commodities", note: "Selon les opportunités et marchés ciblés" },
] as const;

export const projectTypes = [
  "Application mobile",
  "Communication / Marketing",
  "Import & Export",
  "Partenariat",
  "Autre",
] as const;

export const budgetRanges = [
  "À définir",
  "< 10 000 €",
  "10 000 – 30 000 €",
  "30 000 – 75 000 €",
  "75 000 € +",
] as const;

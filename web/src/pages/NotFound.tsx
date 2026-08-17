import CTAButton from "@/components/site/CTAButton";
import Seo from "@/components/site/Seo";
import { company } from "@/content/site";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page introuvable | NEBOY AGENCY LLC"
        description="La page demandée n'existe pas ou a été déplacée."
        path="/404"
      />
      <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-ink text-white">
        <div className="grid-lines-dark absolute inset-0 opacity-40" aria-hidden />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[140px]"
          aria-hidden
        />
        <div className="shell relative py-32">
          <span className="mono text-[10px] uppercase tracking-[0.28em] text-signal">Error 404</span>
          <h1 className="display mt-6 text-[3rem] sm:text-[5rem]">Page introuvable.</h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60">
            La page demandée n'existe pas ou a été déplacée. Retournez à l'accueil pour explorer les trois pôles de{" "}
            {company.name}.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CTAButton to="/" variant="light">
              Retour à l'accueil
            </CTAButton>
            <CTAButton to="/contact" variant="ghost">
              Nous contacter
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}

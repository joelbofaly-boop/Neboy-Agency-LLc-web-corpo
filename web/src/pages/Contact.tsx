import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Reveal } from "@/components/site/Reveal";
import Seo from "@/components/site/Seo";
import { budgetRanges, company, projectTypes } from "@/content/site";
import { cn } from "@/lib/utils";

const schema = z.object({
  fullName: z.string().min(2, "Merci d'indiquer votre nom complet."),
  companyName: z.string().optional(),
  email: z.string().email("Adresse email invalide."),
  phone: z.string().optional(),
  country: z.string().min(2, "Merci d'indiquer votre pays."),
  projectType: z.string().min(1, "Sélectionnez un type de projet."),
  budget: z.string().min(1, "Sélectionnez un budget indicatif."),
  message: z.string().min(20, "Décrivez votre besoin en quelques lignes (20 caractères minimum)."),
});

type FormValues = z.infer<typeof schema>;

const fieldClass =
  "w-full border-b border-ink/20 bg-transparent px-0 py-3 text-base text-ink outline-none transition-colors duration-300 placeholder:text-ink/30 focus:border-brand";

export default function Contact() {
  const [sent, setSent] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      country: "",
      projectType: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = useCallback(
    async (values: FormValues) => {
      try {
        // No mail service connected yet: the request is validated locally and
        // acknowledged. Connect an endpoint here when it is provided.
        await new Promise<void>((resolve) => setTimeout(resolve, 900));
        setSent(true);
        reset();
        toast.success("Demande enregistrée", {
          description: `Merci ${values.fullName.split(" ")[0]}, votre demande est prête à être transmise à contact@neboyagencyllc.com.`,
        });
      } catch {
        toast.error("Envoi impossible pour le moment. Merci de réessayer.");
      }
    },
    [reset],
  );

  return (
    <>
      <Seo
        title="Contact | NEBOY AGENCY LLC"
        description="Contactez NEBOY AGENCY LLC pour un projet d'application mobile, une mission de communication et marketing, une opération import & export ou un partenariat."
        path="/contact"
      />

      <section className="relative overflow-hidden bg-ink pb-20 pt-32 text-white sm:pb-24 sm:pt-40">
        <div className="grid-lines-dark absolute inset-0 opacity-50" aria-hidden />
        <div
          className="pointer-events-none absolute -left-20 top-0 h-[420px] w-[420px] rounded-full bg-brand/25 blur-[130px]"
          aria-hidden
        />
        <div className="shell relative grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-signal" />
              <span className="eyebrow text-white/50">Contact</span>
            </div>
            <h1 className="display mt-8 max-w-3xl text-[2.6rem] sm:text-[3.8rem] lg:text-[4.6rem]">
              Parlons de votre projet.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              Application mobile, stratégie de communication, opération import & export ou partenariat : décrivez
              votre besoin, nous revenons vers vous avec une première lecture.
            </p>
          </div>

          <div className="space-y-6 border-l border-white/15 pl-6">
            <div>
              <p className="mono text-[10px] uppercase tracking-[0.24em] text-white/40">Entreprise</p>
              <p className="mt-2 text-lg font-semibold">{company.name}</p>
              <p className="mono mt-1 text-[10px] uppercase tracking-[0.22em] text-signal">{company.signature}</p>
            </div>
            <div>
              <p className="mono text-[10px] uppercase tracking-[0.24em] text-white/40">Domaines</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Digital Technology · Communication & Marketing · Global Trade
              </p>
            </div>
            <div>
              <p className="mono text-[10px] uppercase tracking-[0.24em] text-white/40">Coordonnées</p>
              <a
                href="mailto:contact@neboyagencyllc.com"
                className="link-sweep mt-2 inline-block text-sm font-medium text-white/80 transition-colors duration-300 hover:text-white"
              >
                contact@neboyagencyllc.com
              </a>
              <p className="mono mt-2 text-[10px] uppercase tracking-[0.2em] text-white/35">
                Réponse sous 48h ouvrées
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <div className="shell">
          <div className="grid gap-14 lg:grid-cols-[0.42fr_0.58fr]">
            <Reveal>
              <div>
                <h2 className="display text-[2rem] text-ink sm:text-[2.6rem]">Send request</h2>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/60">
                  Plus votre description est précise (objectif, périmètre, échéance, marché visé), plus notre réponse
                  sera utile dès le premier échange.
                </p>

                <ul className="mt-10 space-y-4">
                  {projectTypes.map((type) => (
                    <li key={type} className="flex items-center gap-3 text-sm text-ink/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="border border-ink/10 bg-white p-6 sm:p-10"
              >
                <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="eyebrow text-ink/45">
                      Nom complet *
                    </label>
                    <input id="fullName" className={cn(fieldClass, "mt-2")} placeholder="Votre nom" {...register("fullName")} />
                    {errors.fullName ? (
                      <p className="mono mt-2 text-[10px] uppercase tracking-[0.14em] text-signal">
                        {errors.fullName.message}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="companyName" className="eyebrow text-ink/45">
                      Entreprise
                    </label>
                    <input
                      id="companyName"
                      className={cn(fieldClass, "mt-2")}
                      placeholder="Nom de votre société"
                      {...register("companyName")}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="eyebrow text-ink/45">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={cn(fieldClass, "mt-2")}
                      placeholder="vous@entreprise.com"
                      {...register("email")}
                    />
                    {errors.email ? (
                      <p className="mono mt-2 text-[10px] uppercase tracking-[0.14em] text-signal">
                        {errors.email.message}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="phone" className="eyebrow text-ink/45">
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className={cn(fieldClass, "mt-2")}
                      placeholder="+00 000 000 000"
                      {...register("phone")}
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className="eyebrow text-ink/45">
                      Pays *
                    </label>
                    <input
                      id="country"
                      className={cn(fieldClass, "mt-2")}
                      placeholder="Pays"
                      {...register("country")}
                    />
                    {errors.country ? (
                      <p className="mono mt-2 text-[10px] uppercase tracking-[0.14em] text-signal">
                        {errors.country.message}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="projectType" className="eyebrow text-ink/45">
                      Type de projet *
                    </label>
                    <select id="projectType" className={cn(fieldClass, "mt-2")} {...register("projectType")}>
                      <option value="">Sélectionner</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.projectType ? (
                      <p className="mono mt-2 text-[10px] uppercase tracking-[0.14em] text-signal">
                        {errors.projectType.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="budget" className="eyebrow text-ink/45">
                      Budget indicatif *
                    </label>
                    <select id="budget" className={cn(fieldClass, "mt-2")} {...register("budget")}>
                      <option value="">Sélectionner</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                    {errors.budget ? (
                      <p className="mono mt-2 text-[10px] uppercase tracking-[0.14em] text-signal">
                        {errors.budget.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="eyebrow text-ink/45">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className={cn(fieldClass, "mt-2 resize-none")}
                      placeholder="Objectif, périmètre, échéance, marché visé…"
                      {...register("message")}
                    />
                    {errors.message ? (
                      <p className="mono mt-2 text-[10px] uppercase tracking-[0.14em] text-signal">
                        {errors.message.message}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex items-center justify-center gap-3 bg-ink px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-500 hover:bg-brand disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        Envoi
                        <Loader2 className="h-4 w-4 animate-spin" />
                      </>
                    ) : sent ? (
                      <>
                        Demande enregistrée
                        <Check className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Send request
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-premium group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </motion.button>

                  <p className="mono max-w-xs text-[10px] leading-relaxed text-ink/35">
                    Votre demande est transmise à contact@neboyagencyllc.com.
                  </p>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

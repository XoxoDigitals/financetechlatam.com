"use client";

import { ImageSlot } from "@/components/ImageSlot";
import {
  CtaBand,
  Eyebrow,
  MethodSteps,
  PageHero,
  SectionShell,
} from "@/components/sections";
import { css } from "@/lib/css";
import { color } from "@/lib/theme";
import { useT } from "@/lib/i18n";

export default function HowWeWorkPage() {
  const t = useT();
  return (
    <div>
      <PageHero
        accent="ink"
        eyebrow={t("How we work", "Cómo trabajamos")}
        title={t("One discipline. Two specialized tracks.", "Una disciplina. Dos vías especializadas.")}
        subtitle={t(
          "Every engagement follows a clear path from discovery to measurable outcomes — whether we are restructuring your company or scaling AI content.",
          "Cada proyecto sigue un camino claro del descubrimiento a resultados medibles — ya sea reestructurando tu empresa o escalando contenido con IA."
        )}
        imageSrc="/images/pexels-shkrabaanthony-5306495.jpg"
      />

      <SectionShell accentBg="#EEEEE8">
        <div style={css("display:grid;grid-template-columns:var(--g2);gap:20px")}>
          <div style={css("padding:28px;border-radius:18px;background:#fff")}>
            <Eyebrow accent="gold">{t("Consulting track", "Vía consultoría")}</Eyebrow>
            <p style={css("margin:0;color:#5A6577;line-height:1.55")}>
              {t(
                "Diagnosis → Solution Design → Implementation → Follow-Up.",
                "Diagnóstico → Diseño → Implementación → Seguimiento."
              )}
            </p>
          </div>
          <div style={css("padding:28px;border-radius:18px;background:#fff")}>
            <Eyebrow accent="teal">{t("AI content track", "Vía contenido IA")}</Eyebrow>
            <p style={css("margin:0;color:#5A6577;line-height:1.55")}>
              {t(
                "Discovery → Avatar & Content Design → Production & Automation → Delivery & Scaling.",
                "Descubrimiento → Diseño de avatar y contenido → Producción y automatización → Entrega y escalado."
              )}
            </p>
          </div>
        </div>
      </SectionShell>

      <MethodSteps
        accent="gold"
        title={t("Consulting steps in detail", "Pasos de consultoría en detalle")}
        steps={[
          {
            n: "01",
            title: t("Diagnosis", "Diagnóstico"),
            body: t(
              "Deep analysis of structure, processes, and financial health.",
              "Análisis profundo de estructura, procesos y salud financiera."
            ),
          },
          {
            n: "02",
            title: t("Solution Design", "Diseño de solución"),
            body: t(
              "A tailored restructuring proposal aligned to your goals.",
              "Propuesta de reestructura alineada a tus objetivos."
            ),
          },
          {
            n: "03",
            title: t("Implementation", "Implementación"),
            body: t(
              "Rollout with manuals, SOPs, and decision frameworks.",
              "Despliegue con manuales, POEs y marcos de decisión."
            ),
          },
          {
            n: "04",
            title: t("Follow-Up", "Seguimiento"),
            body: t(
              "Measure KPIs and refine as the organization adapts.",
              "Medimos KPIs y afinamos conforme la organización se adapta."
            ),
          },
        ]}
      />

      <SectionShell>
        <div
          style={css(
            "position:relative;min-height:300px;border-radius:20px;overflow:hidden"
          )}
        >
          <ImageSlot id="method-img" src="/images/pexels-thirdman-8470843.jpg" alt="" />
        </div>
      </SectionShell>

      <MethodSteps
        accent="teal"
        title={t("AI content steps in detail", "Pasos de contenido IA en detalle")}
        steps={[
          {
            n: "01",
            title: t("Discovery", "Descubrimiento"),
            body: t(
              "Brand voice, audience, platforms, and content goals.",
              "Voz de marca, audiencia, plataformas y objetivos."
            ),
          },
          {
            n: "02",
            title: t("Design", "Diseño"),
            body: t(
              "Avatars, formats, scripts, and voice profiles.",
              "Avatares, formatos, guiones y perfiles de voz."
            ),
          },
          {
            n: "03",
            title: t("Produce & automate", "Producir y automatizar"),
            body: t(
              "Content batches plus recurring generation pipelines.",
              "Lotes de contenido y pipelines recurrentes."
            ),
          },
          {
            n: "04",
            title: t("Deliver & scale", "Entregar y escalar"),
            body: t(
              "Ongoing delivery as your campaigns and channels grow.",
              "Entrega continua conforme crecen campañas y canales."
            ),
          },
        ]}
      />

      <SectionShell accentBg={color.ink}>
        <div
          style={css(
            "display:grid;grid-template-columns:var(--gHero);gap:28px;align-items:center;color:#F6F4EF"
          )}
        >
          <div>
            <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(26px,3.4vw,40px);margin:0 0 12px")}>
              {t("Hands-on support at every step", "Acompañamiento práctico en cada paso")}
            </h2>
            <p style={css("margin:0;opacity:0.75;line-height:1.55")}>
              {t(
                "We stay close during implementation — whether that means function manuals or avatar launch calendars.",
                "Permanecemos cerca en la implementación — ya sean manuales de funciones o calendarios de lanzamiento de avatares."
              )}
            </p>
          </div>
          <div
            style={css(
              "position:relative;min-height:240px;border-radius:16px;overflow:hidden"
            )}
          >
            <ImageSlot id="method-support" src="/images/accent-rocket.png" alt="" />
          </div>
        </div>
      </SectionShell>

      <CtaBand
        accent="ink"
        title={t("Start with a free consultation", "Empieza con una consulta gratis")}
      />
    </div>
  );
}

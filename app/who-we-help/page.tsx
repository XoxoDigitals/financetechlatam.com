"use client";

import Link from "next/link";
import { ImageSlot } from "@/components/ImageSlot";
import {
  CtaBand,
  Eyebrow,
  PageHero,
  SectionShell,
} from "@/components/sections";
import { css } from "@/lib/css";
import { color } from "@/lib/theme";
import { useT } from "@/lib/i18n";

export default function WhoWeHelpPage() {
  const t = useT();
  const personas = [
    {
      en: "Mid-sized companies",
      es: "Empresas medianas",
      bodyEn: "Disorganized processes, informal structures, or outdated org charts.",
      bodyEs: "Procesos desordenados, estructuras informales u organigramas obsoletos.",
      img: "/images/pexels-ivan-samkov-7621138.jpg",
    },
    {
      en: "Founders & entrepreneurs",
      es: "Fundadores y emprendedores",
      bodyEn: "Ready to professionalize the business from the ground up.",
      bodyEs: "Listos para profesionalizar el negocio desde cero.",
      img: "/images/pexels-jonathanborba-14358449.jpg",
    },
    {
      en: "E-commerce brands",
      es: "Marcas e-commerce",
      bodyEn: "Need constant, affordable content for ads and social.",
      bodyEs: "Necesitan contenido constante y asequible para ads y redes.",
      img: "/images/pexels-polina-tankilevitch-4443508.jpg",
    },
    {
      en: "Digital product creators & agencies",
      es: "Creadores y agencias",
      bodyEn: "Want to produce faster without hiring a full production team.",
      bodyEs: "Quieren producir más rápido sin un equipo completo de producción.",
      img: "/images/pexels-vlada-karpovich-8367772.jpg",
    },
  ];

  return (
    <div>
      <PageHero
        accent="ink"
        eyebrow={t("Who we help", "A quién ayudamos")}
        title={t(
          "Built for operators who need structure — and marketers who need scale.",
          "Para operadores que necesitan estructura — y marketers que necesitan escala."
        )}
        subtitle={t(
          "Self-select the path that fits: organizational and financial foundations, or AI-powered content systems.",
          "Elige el camino que te corresponde: bases organizacionales y financieras, o sistemas de contenido con IA."
        )}
        imageSrc="/images/pexels-darlene-alderson-7970815.jpg"
      />

      <SectionShell>
        <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(26px,3.4vw,40px);margin:0 0 28px")}>
          {t("Audience overview", "Panorama de audiencias")}
        </h2>
        <div style={css("display:grid;grid-template-columns:var(--g2);gap:18px")}>
          {personas.map((p) => (
            <div
              key={p.en}
              style={css(
                "border-radius:18px;overflow:hidden;background:#fff;border:1px solid rgba(12,21,36,0.08)"
              )}
            >
              <div style={css("position:relative;height:180px")}>
                <ImageSlot id={p.en} src={p.img} alt="" />
              </div>
              <div style={css("padding:20px")}>
                <h3 style={css("margin:0 0 8px;font-size:18px")}>{t(p.en, p.es)}</h3>
                <p style={css("margin:0;color:#5A6577;font-size:14.5px;line-height:1.55")}>
                  {t(p.bodyEn, p.bodyEs)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell accentBg="#EEEEE8">
        <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(26px,3.4vw,40px);margin:0 0 24px")}>
          {t("Pain → solution", "Dolor → solución")}
        </h2>
        <div style={css("display:grid;grid-template-columns:var(--g2);gap:16px")}>
          <div style={css("padding:24px;border-radius:16px;background:#fff")}>
            <Eyebrow accent="gold">{t("Consulting", "Consultoría")}</Eyebrow>
            <p style={css("margin:0;color:#5A6577;line-height:1.55")}>
              {t(
                "Duplicate roles, weak cash visibility, unclear ownership → redesigned structure, SOPs, and financial KPIs.",
                "Roles duplicados, poca visibilidad de caja, dueños poco claros → estructura rediseñada, POEs y KPIs financieros."
              )}
            </p>
          </div>
          <div style={css("padding:24px;border-radius:16px;background:#fff")}>
            <Eyebrow accent="teal">{t("AI Content", "Contenido IA")}</Eyebrow>
            <p style={css("margin:0;color:#5A6577;line-height:1.55")}>
              {t(
                "Content bottlenecks and expensive shoots → avatars, UGC-style ads, and automated pipelines.",
                "Cuellos de botella de contenido y filmaciones caras → avatares, ads estilo UGC y pipelines automatizados."
              )}
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div
          style={css(
            "display:grid;grid-template-columns:var(--gHero);gap:28px;align-items:center"
          )}
        >
          <div>
            <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(26px,3.4vw,40px);margin:0 0 12px")}>
              {t("Engagement model", "Modelo de engagement")}
            </h2>
            <p style={css("margin:0 0 16px;color:#5A6577;line-height:1.55")}>
              {t(
                "Start with a free consultation, choose a track (or both), then move through diagnosis/design into implementation and ongoing support.",
                "Empieza con una consulta gratis, elige una vía (o ambas), y avanza de diagnóstico/diseño a implementación y soporte continuo."
              )}
            </p>
            <Link href="/how-we-work" style={css("font-weight:700;color:#0C1524")}>
              {t("See methodology →", "Ver metodología →")}
            </Link>
          </div>
          <div style={css("position:relative;min-height:260px;border-radius:18px;overflow:hidden")}>
            <ImageSlot id="engage" src="/images/pexels-georgemorina-4960420.jpg" alt="" />
          </div>
        </div>
      </SectionShell>

      <SectionShell accentBg={color.goldSoft}>
        <h2 style={css("font-family:'Instrument Serif',serif;font-size:28px;margin:0 0 10px")}>
          {t("Proof when you need it", "Prueba cuando la necesites")}
        </h2>
        <p style={css("margin:0 0 14px;color:#5A6577")}>
          {t(
            "Browse placeholder metrics and case formats on our Results page.",
            "Revisa métricas placeholder y formatos de caso en Resultados."
          )}
        </p>
        <Link href="/results" style={css("font-weight:700;color:#C9A227")}>
          {t("View results →", "Ver resultados →")}
        </Link>
      </SectionShell>

      <SectionShell accentBg={color.tealSoft}>
        <h2 style={css("font-family:'Instrument Serif',serif;font-size:28px;margin:0 0 10px")}>
          {t("Still deciding?", "¿Aún decides?")}
        </h2>
        <p style={css("margin:0 0 14px;color:#5A6577")}>
          {t("Common questions for both service lines.", "Preguntas frecuentes de ambas líneas.")}
        </p>
        <Link href="/faq" style={css("font-weight:700;color:#1E8A8A")}>
          {t("Read FAQ →", "Leer FAQ →")}
        </Link>
      </SectionShell>

      <CtaBand accent="ink" title={t("Find the right fit", "Encuentra el encaje correcto")} />
    </div>
  );
}

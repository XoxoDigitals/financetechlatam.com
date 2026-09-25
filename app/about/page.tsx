"use client";

import { ImageSlot } from "@/components/ImageSlot";
import { LeadForm } from "@/components/LeadForm";
import {
  CtaBand,
  Eyebrow,
  PageHero,
  SectionShell,
  SplitMedia,
} from "@/components/sections";
import { css } from "@/lib/css";
import { color } from "@/lib/theme";
import { useT } from "@/lib/i18n";

const VALUES = [
  { en: "Clarity and order", es: "Claridad y orden" },
  { en: "Analytical rigor", es: "Rigor analítico" },
  { en: "Innovation with purpose", es: "Innovación con propósito" },
  { en: "Confidentiality", es: "Confidencialidad" },
  { en: "Measurable results", es: "Resultados medibles" },
  { en: "Hands-on, close support", es: "Acompañamiento cercano y práctico" },
];

export default function AboutPage() {
  const t = useT();

  return (
    <div>
      <PageHero
        accent="ink"
        eyebrow={t("About us", "Nosotros")}
        title={t(
          "One Company, Two Ways to Help Your Business Grow",
          "Una empresa, dos formas de ayudar a crecer tu negocio"
        )}
        subtitle={t(
          "We are a business solutions company built around a simple idea: modern businesses need both a solid internal foundation and a modern way to market themselves.",
          "Somos una empresa de soluciones de negocio con una idea simple: las empresas modernas necesitan una base interna sólida y una forma moderna de promocionarse."
        )}
        imageSrc="/images/collab-phones.jpg"
        ctaHref="/contact"
        secondaryHref="/team"
        secondaryLabel={t("Meet the team", "Conoce al equipo")}
      />

      <SectionShell>
        <div
          style={css(
            "position:relative;min-height:clamp(280px,42vw,460px);border-radius:24px;overflow:hidden"
          )}
        >
          <ImageSlot id="about-story" src="/images/ftl-about-office.webp" alt="" />
        </div>
      </SectionShell>

      <SectionShell accentBg={color.goldSoft}>
        <Eyebrow accent="gold">{t("Mission", "Misión")}</Eyebrow>
        <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(26px,3.4vw,40px);margin:0 0 12px;max-width:800px")}>
          {t(
            "To give businesses the internal structure and the digital tools they need to grow with clarity, efficiency, and confidence.",
            "Dar a las empresas la estructura interna y las herramientas digitales para crecer con claridad, eficiencia y confianza."
          )}
        </h2>
      </SectionShell>

      <SectionShell accentBg={color.tealSoft}>
        <Eyebrow accent="teal">{t("Vision", "Visión")}</Eyebrow>
        <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(26px,3.4vw,40px);margin:0 0 12px;max-width:800px")}>
          {t(
            "To be the trusted partner businesses turn to for both operational excellence and next-generation digital content solutions.",
            "Ser el socio de confianza para excelencia operativa y soluciones de contenido digital de nueva generación."
          )}
        </h2>
      </SectionShell>

      <SectionShell>
        <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(28px,3.6vw,42px);margin:0 0 28px")}>
          {t("Core values", "Valores")}
        </h2>
        <div style={css("display:grid;grid-template-columns:var(--g3);gap:16px")}>
          {VALUES.map((v, i) => (
            <div
              key={v.en}
              className="ftl-card-rise"
              style={{
                ...css("padding:22px 20px;border-radius:16px;background:#fff;border:1px solid rgba(12,21,36,0.08)"),
                animationDelay: `${i * 50}ms`,
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background: i % 2 === 0 ? color.goldSoft : color.tealSoft,
                  color: i % 2 === 0 ? color.gold : color.teal,
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 700,
                  marginBottom: 12,
                  fontSize: 13,
                }}
              >
                {i + 1}
              </div>
              <div style={css("font-weight:700;font-size:16px")}>{t(v.en, v.es)}</div>
            </div>
          ))}
        </div>
      </SectionShell>

      <SplitMedia
        accent="gold"
        eyebrow={t("Two divisions", "Dos divisiones")}
        title={t(
          "Specialized under one roof.",
          "Especializadas bajo un mismo techo."
        )}
        body={t(
          "One division focused on organizational and financial structure; the other on AI-powered content creation and digital avatars — same brand, equal weight.",
          "Una división enfocada en estructura organizacional y financiera; la otra en contenido con IA y avatares digitales — misma marca, mismo peso."
        )}
        imageSrc="/images/pexels-canvastudio-3194519.jpg"
        ctaHref="/consulting"
        ctaLabel={t("Consulting path", "Camino de consultoría")}
      />

      <SectionShell accentBg="#EEEEE8">
        <div style={css("display:grid;grid-template-columns:var(--g2);gap:20px")}>
          <div style={css("padding:28px;border-radius:18px;background:#fff")}>
            <Eyebrow accent="gold">{t("Consulting", "Consultoría")}</Eyebrow>
            <p style={css("font-size:15.5px;line-height:1.55;color:#5A6577;margin:0")}>
              {t(
                "Established, trustworthy, structured — for founders who need order and financial clarity.",
                "Establecida, confiable y estructurada — para fundadores que necesitan orden y claridad financiera."
              )}
            </p>
          </div>
          <div style={css("padding:28px;border-radius:18px;background:#fff")}>
            <Eyebrow accent="teal">{t("AI Content", "Contenido IA")}</Eyebrow>
            <p style={css("font-size:15.5px;line-height:1.55;color:#5A6577;margin:0")}>
              {t(
                "Innovative and forward-looking — without breaking the shared professional brand identity.",
                "Innovadora y con visión de futuro — sin romper la identidad profesional compartida."
              )}
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div
          style={css(
            "display:grid;grid-template-columns:var(--gHero);gap:clamp(24px,4vw,48px);align-items:start"
          )}
        >
          <div>
            <Eyebrow accent="ink">{t("Get in touch", "Contáctanos")}</Eyebrow>
            <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(26px,3.4vw,40px);margin:0 0 14px")}>
              {t("Tell us which path fits.", "Cuéntanos qué camino te corresponde.")}
            </h2>
            <p style={css("font-size:15.5px;line-height:1.55;color:#5A6577;margin:0 0 18px")}>
              {t(
                "Whether your business needs to fix internal disorder or scale marketing content, we’ll help you choose the right fit.",
                "Ya sea que necesites corregir desorden interno o escalar contenido de marketing, te ayudamos a elegir."
              )}
            </p>
            <div
              style={css(
                "position:relative;min-height:200px;border-radius:16px;overflow:hidden;margin-top:20px"
              )}
            >
              <ImageSlot id="about-form-img" src="/images/pexels-sora-shimazaki-5935743.jpg" alt="" />
            </div>
          </div>
          <div style={css("padding:28px;border-radius:20px;background:#fff;border:1px solid rgba(12,21,36,0.08)")}>
            <LeadForm variant="about" />
          </div>
        </div>
      </SectionShell>

      <CtaBand
        accent="ink"
        title={t("Let's build the right solution", "Construyamos la solución correcta")}
        href="/contact"
      />
    </div>
  );
}

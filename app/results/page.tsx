"use client";

import { ImageSlot } from "@/components/ImageSlot";
import {
  CtaBand,
  Eyebrow,
  LogoStrip,
  MetricBand,
  PageHero,
  SectionShell,
} from "@/components/sections";
import { css } from "@/lib/css";
import { color } from "@/lib/theme";
import { useT } from "@/lib/i18n";

export default function ResultsPage() {
  const t = useT();
  return (
    <div>
      <PageHero
        accent="ink"
        eyebrow={t("Results / Case Studies", "Resultados / Casos")}
        title={t(
          "Measurable outcomes across structure and content.",
          "Resultados medibles en estructura y contenido."
        )}
        subtitle={t(
          "Placeholder metrics and testimonials until live client data is published — formatted the way we report real work.",
          "Métricas y testimonios placeholder hasta publicar datos reales — con el formato con el que reportamos el trabajo."
        )}
        imageSrc="/images/pexels-pixabay-164444.jpg"
      />

      <MetricBand
        items={[
          { value: "X%", label: t("Process time reduction", "Reducción de tiempo de proceso") },
          { value: "X", label: t("Content pieces / month", "Piezas de contenido / mes") },
          { value: "X", label: t("Roles clarified", "Roles clarificados") },
          { value: "X×", label: t("Content throughput", "Throughput de contenido") },
        ]}
      />

      <SectionShell>
        <Eyebrow accent="gold">{t("Consulting cases", "Casos de consultoría")}</Eyebrow>
        <div style={css("display:grid;grid-template-columns:var(--g2);gap:16px")}>
          {[1, 2].map((i) => (
            <div
              key={i}
              style={css(
                "padding:26px;border-radius:18px;background:#fff;border:1px solid rgba(12,21,36,0.08)"
              )}
            >
              <h3 style={css("margin:0 0 10px;font-size:18px")}>
                {t(`Case study ${i} — structure`, `Caso ${i} — estructura`)}
              </h3>
              <p style={css("margin:0;color:#5A6577;line-height:1.55;font-size:14.5px")}>
                {t(
                  "“X% reduction in process time” — short client quote, title, and company (placeholder).",
                  "“X% de reducción en tiempo de proceso” — cita corta, cargo y empresa (placeholder)."
                )}
              </p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell accentBg={color.tealSoft}>
        <Eyebrow accent="teal">{t("AI content cases", "Casos de contenido IA")}</Eyebrow>
        <div style={css("display:grid;grid-template-columns:var(--g2);gap:16px")}>
          {[1, 2].map((i) => (
            <div
              key={i}
              style={css(
                "padding:26px;border-radius:18px;background:#fff;border:1px solid rgba(12,21,36,0.08)"
              )}
            >
              <h3 style={css("margin:0 0 10px;font-size:18px")}>
                {t(`Case study ${i} — content`, `Caso ${i} — contenido`)}
              </h3>
              <p style={css("margin:0;color:#5A6577;line-height:1.55;font-size:14.5px")}>
                {t(
                  "“X pieces of content produced per month” — short client quote (placeholder).",
                  "“X piezas de contenido producidas al mes” — cita corta (placeholder)."
                )}
              </p>
            </div>
          ))}
        </div>
      </SectionShell>

      <LogoStrip title={t("Client logos", "Logos de clientes")} />

      <SectionShell>
        <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(26px,3.4vw,40px);margin:0 0 20px")}>
          {t("Testimonials", "Testimonios")}
        </h2>
        <div style={css("display:grid;grid-template-columns:var(--g3);gap:14px")}>
          {[1, 2, 3].map((i) => (
            <blockquote
              key={i}
              style={css(
                "margin:0;padding:22px;border-radius:16px;background:#fff;border:1px solid rgba(12,21,36,0.08)"
              )}
            >
              <p style={css("font-size:15px;line-height:1.55;color:#41506B;margin:0 0 14px")}>
                {t(
                  "“Short client quote highlighting clarity, speed, or scale.”",
                  "“Cita corta del cliente sobre claridad, velocidad o escala.”"
                )}
              </p>
              <footer style={css("font-size:13px;font-weight:700")}>
                {t("Name, Title — Company", "Nombre, Cargo — Empresa")}
              </footer>
            </blockquote>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <div
          style={css(
            "position:relative;min-height:280px;border-radius:20px;overflow:hidden"
          )}
        >
          <ImageSlot id="volume" src="/images/generated/content-grid-collage.png" alt="" />
        </div>
        <p style={css("margin:14px 0 0;color:#5A6577;font-size:14px;text-align:center")}>
          {t(
            "Content-volume visual — before/after storytelling placeholder.",
            "Visual de volumen de contenido — placeholder antes/después."
          )}
        </p>
      </SectionShell>

      <SectionShell accentBg="#EEEEE8">
        <h2 style={css("font-family:'Instrument Serif',serif;font-size:28px;margin:0 0 10px")}>
          {t("Method reminder", "Recordatorio del método")}
        </h2>
        <p style={css("margin:0;color:#5A6577;max-width:640px;line-height:1.55")}>
          {t(
            "Results come from the same four-step discipline on both tracks: diagnose, design, implement, scale.",
            "Los resultados vienen de la misma disciplina de cuatro pasos en ambas vías: diagnosticar, diseñar, implementar, escalar."
          )}
        </p>
      </SectionShell>

      <CtaBand accent="ink" title={t("Become the next case study", "Sé el próximo caso")} />
    </div>
  );
}

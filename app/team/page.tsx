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

const CONSULTING = [
  {
    img: "/images/generated/team-consulting-1.png",
    enName: "Ana Rivera",
    esName: "Ana Rivera",
    enTitle: "Organizational Structure Consultant",
    esTitle: "Consultora de estructura organizacional",
    enBio: "Designs org charts, role clarity, and decision rights for growing companies.",
    esBio: "Diseña organigramas, claridad de roles y derechos de decisión para empresas en crecimiento.",
  },
  {
    img: "/images/generated/team-consulting-2.png",
    enName: "Carlos Méndez",
    esName: "Carlos Méndez",
    enTitle: "Financial Structure Advisor",
    esTitle: "Asesor de estructura financiera",
    enBio: "Focuses on cost structure, cash visibility, and KPI-driven decision frameworks.",
    esBio: "Se enfoca en estructura de costos, visibilidad de caja y marcos de decisión con KPIs.",
  },
];

const AI = [
  {
    img: "/images/generated/team-ai-1.png",
    enName: "Sofía Lang",
    esName: "Sofía Lang",
    enTitle: "AI Content Strategist",
    esTitle: "Estratega de contenido IA",
    enBio: "Aligns brand voice, avatar design, and multi-platform content systems.",
    esBio: "Alinea voz de marca, diseño de avatares y sistemas de contenido multiplataforma.",
  },
  {
    img: "/images/generated/team-ai-2.png",
    enName: "Diego Solís",
    esName: "Diego Solís",
    enTitle: "AI Production Lead",
    esTitle: "Líder de producción IA",
    enBio: "Builds UGC pipelines, voiceover workflows, and automation calendars.",
    esBio: "Construye pipelines UGC, flujos de voiceover y calendarios de automatización.",
  },
];

function MemberCard({
  m,
  accent,
}: {
  m: (typeof CONSULTING)[0];
  accent: "gold" | "teal";
}) {
  const t = useT();
  return (
    <div
      style={css(
        "border-radius:18px;overflow:hidden;background:#fff;border:1px solid rgba(12,21,36,0.08)"
      )}
    >
      <div style={css("position:relative;aspect-ratio:1;background:#EEEEE8")}>
        <ImageSlot id={m.enName} src={m.img} alt={m.enName} />
      </div>
      <div style={css("padding:20px")}>
        <Eyebrow accent={accent}>
          {accent === "gold" ? t("Consulting", "Consultoría") : t("AI Content", "Contenido IA")}
        </Eyebrow>
        <h3 style={css("margin:0 0 4px;font-size:18px")}>{t(m.enName, m.esName)}</h3>
        <div style={css("font-size:13px;font-weight:700;color:#5A6577;margin-bottom:10px")}>
          {t(m.enTitle, m.esTitle)}
        </div>
        <p style={css("margin:0;font-size:14px;line-height:1.55;color:#5A6577")}>
          {t(m.enBio, m.esBio)}
        </p>
        <p style={css("margin:10px 0 0;font-size:11px;color:#8A93A3")}>
          {t("Placeholder photo until real headshots arrive.", "Foto placeholder hasta contar con retratos reales.")}
        </p>
      </div>
    </div>
  );
}

export default function TeamPage() {
  const t = useT();
  return (
    <div>
      <PageHero
        accent="ink"
        eyebrow={t("Team", "Equipo")}
        title={t(
          "One team. Two specialties.",
          "Un equipo. Dos especialidades."
        )}
        subtitle={t(
          "Presented as one unified team with clear division focus — consulting structure on one side, AI content on the other.",
          "Un equipo unificado con foco claro por división — estructura de consultoría de un lado, contenido IA del otro."
        )}
        imageSrc="/images/pexels-a-darmel-7641994.jpg"
      />

      <SectionShell>
        <p style={css("max-width:720px;font-size:17px;line-height:1.6;color:#5A6577;margin:0")}>
          {t(
            "We combine analytical rigor with purposeful innovation — always with confidentiality and hands-on support.",
            "Combinamos rigor analítico con innovación con propósito — siempre con confidencialidad y acompañamiento práctico."
          )}
        </p>
      </SectionShell>

      <SectionShell accentBg={color.goldSoft}>
        <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(26px,3.4vw,40px);margin:0 0 24px")}>
          {t("Consulting", "Consultoría")}
        </h2>
        <div style={css("display:grid;grid-template-columns:var(--g2);gap:18px")}>
          {CONSULTING.map((m) => (
            <MemberCard key={m.enName} m={m} accent="gold" />
          ))}
        </div>
      </SectionShell>

      <SectionShell accentBg={color.tealSoft}>
        <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(26px,3.4vw,40px);margin:0 0 24px")}>
          {t("AI Content", "Contenido IA")}
        </h2>
        <div style={css("display:grid;grid-template-columns:var(--g2);gap:18px")}>
          {AI.map((m) => (
            <MemberCard key={m.enName} m={m} accent="teal" />
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <div
          style={css(
            "display:grid;grid-template-columns:var(--gHero);gap:28px;align-items:center"
          )}
        >
          <div style={css("position:relative;min-height:260px;border-radius:18px;overflow:hidden")}>
            <ImageSlot id="culture" src="/images/pexels-eva-bronzini-7661627.jpg" alt="" />
          </div>
          <div>
            <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(26px,3.4vw,40px);margin:0 0 12px")}>
              {t("How we work together", "Cómo trabajamos juntos")}
            </h2>
            <p style={css("margin:0;color:#5A6577;line-height:1.55")}>
              {t(
                "Cross-functional when clients need both structure and content — always with one accountable partner.",
                "Interdisciplinarios cuando el cliente necesita estructura y contenido — siempre con un socio responsable."
              )}
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell accentBg="#EEEEE8">
        <h2 style={css("font-family:'Instrument Serif',serif;font-size:28px;margin:0 0 10px")}>
          {t("Values we hire for", "Valores con los que contratamos")}
        </h2>
        <p style={css("margin:0;color:#5A6577")}>
          {t(
            "Clarity, analytical rigor, innovation with purpose, confidentiality, measurable results, close support.",
            "Claridad, rigor analítico, innovación con propósito, confidencialidad, resultados medibles, acompañamiento cercano."
          )}
        </p>
      </SectionShell>

      <SectionShell>
        <h2 style={css("font-family:'Instrument Serif',serif;font-size:28px;margin:0 0 10px")}>
          {t("Join us", "Únete")}
        </h2>
        <p style={css("margin:0 0 12px;color:#5A6577")}>
          {t(
            "We’re selective. If you build clarity or scalable content systems, reach out.",
            "Somos selectivos. Si construyes claridad o sistemas de contenido escalables, escríbenos."
          )}
        </p>
        <Link href="/contact" style={css("font-weight:700")}>
          {t("Contact careers →", "Contacto de carrera →")}
        </Link>
      </SectionShell>

      <SectionShell accentBg={color.ink}>
        <div style={css("color:#F6F4EF")}>
          <h2 style={css("font-family:'Instrument Serif',serif;font-size:28px;margin:0 0 10px")}>
            {t("Questions about working with us?", "¿Preguntas sobre trabajar con nosotros?")}
          </h2>
          <Link href="/faq" style={css("font-weight:700;color:#7BE3B4")}>
            {t("Visit FAQ →", "Ver FAQ →")}
          </Link>
        </div>
      </SectionShell>

      <CtaBand accent="ink" title={t("Talk to the team", "Habla con el equipo")} />
    </div>
  );
}

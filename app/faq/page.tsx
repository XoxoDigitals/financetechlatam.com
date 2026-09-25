"use client";

import Link from "next/link";
import {
  CtaBand,
  FaqAccordion,
  PageHero,
  SectionShell,
} from "@/components/sections";
import { css } from "@/lib/css";
import { color } from "@/lib/theme";
import { useT } from "@/lib/i18n";

export default function FaqPage() {
  const t = useT();

  const consulting = [
    {
      q: t(
        "How much do your services cost?",
        "¿Cuánto cuestan sus servicios?"
      ),
      a: t(
        "We usually start from USD $40,000. Contact us and we can create a good plan for you — scoped to consulting, AI content, or both.",
        "Suelen comenzar desde USD $40,000. Contáctanos y armamos un buen plan para ti — de consultoría, contenido IA, o ambos."
      ),
    },
    {
      q: t(
        "How long does an organizational restructuring process take?",
        "¿Cuánto dura un proceso de reestructura organizacional?"
      ),
      a: t(
        "Timelines depend on company size and scope. Most engagements move from diagnosis to an implementation roadmap within weeks, with follow-up over subsequent months.",
        "Depende del tamaño y alcance. La mayoría avanza de diagnóstico a hoja de ruta de implementación en semanas, con seguimiento en los meses siguientes."
      ),
    },
    {
      q: t("Do you work with companies from any industry?", "¿Trabajan con cualquier industria?"),
      a: t(
        "Yes — we focus on structural and financial clarity, which applies across industries. We prioritize mid-sized and growing companies.",
        "Sí — nos enfocamos en claridad estructural y financiera, aplicable a varias industrias. Priorizamos empresas medianas y en crecimiento."
      ),
    },
    {
      q: t(
        "What information do you need to start the diagnosis?",
        "¿Qué información necesitan para iniciar el diagnóstico?"
      ),
      a: t(
        "Org charts, process maps (if any), financial summaries, and stakeholder interviews. We’ll provide a discovery checklist after the first consultation.",
        "Organigramas, mapas de proceso (si existen), resúmenes financieros y entrevistas con stakeholders. Enviaremos un checklist tras la primera consulta."
      ),
    },
    {
      q: t(
        "Does the service include support during implementation?",
        "¿El servicio incluye apoyo durante la implementación?"
      ),
      a: t(
        "Yes. Implementation support with manuals and tools is part of our methodology, followed by measurement and adjustment.",
        "Sí. El acompañamiento en implementación con manuales y herramientas es parte de la metodología, seguido de medición y ajuste."
      ),
    },
    {
      q: t(
        "Do you handle financial information confidentially?",
        "¿Manejan la información financiera con confidencialidad?"
      ),
      a: t(
        "Absolutely. Confidentiality is a core value. Engagements are covered by appropriate agreements before sensitive data is shared.",
        "Por completo. La confidencialidad es un valor central. Los proyectos se cubren con acuerdos antes de compartir datos sensibles."
      ),
    },
  ];

  const ai = [
    {
      q: t(
        "How much do AI content plans cost?",
        "¿Cuánto cuestan los planes de contenido IA?"
      ),
      a: t(
        "Engagements usually start from USD $40,000. Contact us and we’ll design a plan that fits your volume and channels.",
        "Los proyectos suelen comenzar desde USD $40,000. Contáctanos y diseñamos un plan según tu volumen y canales."
      ),
    },
    {
      q: t(
        "Can the AI avatar look and sound like a real person from my brand?",
        "¿El avatar de IA puede verse y sonar como alguien real de mi marca?"
      ),
      a: t(
        "Yes — with proper rights and brand guidelines we design custom look, voice matching, and personality for a consistent spokesperson.",
        "Sí — con derechos y guías de marca diseñamos apariencia, voz y personalidad para un portavoz consistente."
      ),
    },
    {
      q: t(
        "How fast can content be produced and delivered?",
        "¿Qué tan rápido se produce y entrega el contenido?"
      ),
      a: t(
        "After brand alignment and avatar design, batch production is typically much faster than traditional shoots. Exact timing depends on volume and formats.",
        "Tras alinear marca y diseñar el avatar, la producción por lotes suele ser mucho más rápida que filmaciones tradicionales. El tiempo exacto depende del volumen y formatos."
      ),
    },
    {
      q: t(
        "Can this replace traditional video production entirely?",
        "¿Puede reemplazar por completo la producción de video tradicional?"
      ),
      a: t(
        "For many ads, UGC-style, and spokesperson use cases — yes. Some brand films still benefit from hybrid approaches; we’ll advise honestly.",
        "Para muchos ads, UGC y uso de portavoz — sí. Algunas piezas de marca aún se benefician de enfoques híbridos; te aconsejamos con honestidad."
      ),
    },
    {
      q: t(
        "Do you offer ongoing/monthly content plans?",
        "¿Ofrecen planes mensuales de contenido?"
      ),
      a: t(
        "Yes — content-as-a-service plans with calendars, batch generation, and optional automation integrations.",
        "Sí — planes de contenido como servicio con calendarios, generación por lotes e integraciones opcionales."
      ),
    },
    {
      q: t(
        "What platforms and formats are supported?",
        "¿Qué plataformas y formatos soportan?"
      ),
      a: t(
        "Social media, paid ads, websites, e-learning, and podcasts — delivered in the formats each channel needs.",
        "Redes, ads pagados, sitios web, e-learning y podcasts — en los formatos que cada canal requiere."
      ),
    },
  ];

  return (
    <div>
      <PageHero
        accent="ink"
        eyebrow={t("FAQ", "FAQ")}
        title={t("Answers for both service lines", "Respuestas para ambas líneas")}
        subtitle={t(
          "Consulting questions on the gold side. AI content questions on the teal side.",
          "Preguntas de consultoría en el lado dorado. Preguntas de contenido IA en el lado teal."
        )}
        imageSrc="/images/pexels-shvetsa-6631420.jpg"
        ctaHref="/contact"
        ctaLabel={t("Still have questions?", "¿Aún tienes preguntas?")}
      />

      <FaqAccordion
        accent="gold"
        title={t("Business & Finance Consulting", "Consultoría de negocio y finanzas")}
        items={consulting}
      />

      <FaqAccordion
        accent="teal"
        title={t("AI Content & Digital Avatars", "Contenido IA y avatares digitales")}
        items={ai}
      />

      <SectionShell accentBg="#EEEEE8">
        <h2 style={css("font-family:'Instrument Serif',serif;font-size:28px;margin:0 0 10px")}>
          {t("Still stuck?", "¿Aún con dudas?")}
        </h2>
        <p style={css("margin:0 0 14px;color:#5A6577;max-width:560px")}>
          {t(
            "Book a free consultation — we’ll help you choose the right path in one conversation.",
            "Agenda una consulta gratis — te ayudamos a elegir el camino correcto en una conversación."
          )}
        </p>
        <Link href="/contact" style={css("font-weight:700;color:#0C1524")}>
          {t("Go to contact →", "Ir a contacto →")}
        </Link>
      </SectionShell>

      <SectionShell accentBg={color.ink}>
        <div style={css("color:#F6F4EF;display:flex;flex-wrap:wrap;gap:24px;justify-content:space-between")}>
          <div>
            <h2 style={css("font-family:'Instrument Serif',serif;font-size:26px;margin:0 0 8px")}>
              {t("Explore the services", "Explora los servicios")}
            </h2>
            <p style={css("margin:0;opacity:0.7")}>
              {t("Or see how engagements typically run.", "O mira cómo suelen correr los proyectos.")}
            </p>
          </div>
          <div style={css("display:flex;gap:14px;flex-wrap:wrap")}>
            <Link href="/consulting" style={css("color:#C9A227;font-weight:700")}>
              {t("Consulting", "Consultoría")}
            </Link>
            <Link href="/ai-content" style={css("color:#7BE3B4;font-weight:700")}>
              {t("AI Content", "Contenido IA")}
            </Link>
            <Link href="/how-we-work" style={css("color:#F6F4EF;font-weight:700")}>
              {t("How we work", "Método")}
            </Link>
          </div>
        </div>
      </SectionShell>

      <CtaBand accent="ink" title={t("Let's talk", "Hablemos")} />
    </div>
  );
}

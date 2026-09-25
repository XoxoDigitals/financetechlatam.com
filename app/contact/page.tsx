"use client";

import { ImageSlot } from "@/components/ImageSlot";
import { LeadForm } from "@/components/LeadForm";
import {
  CtaBand,
  Eyebrow,
  PageHero,
  SectionShell,
} from "@/components/sections";
import { css } from "@/lib/css";
import { color } from "@/lib/theme";
import { useT } from "@/lib/i18n";
import {
  SITE_ADDRESS_LINE1,
  SITE_ADDRESS_LINE2,
  SITE_EMAIL,
  SITE_INSTAGRAM,
  SITE_INSTAGRAM_URL,
  SITE_PHONE,
  SITE_PHONE_TEL,
  SITE_WHATSAPP,
} from "@/lib/site";

export default function ContactPage() {
  const t = useT();

  return (
    <div>
      <PageHero
        accent="ink"
        eyebrow={t("Contact", "Contacto")}
        title={t(
          "Let's Build the Right Solution for Your Business",
          "Construyamos la solución correcta para tu negocio"
        )}
        subtitle={t(
          "Whether you need a stronger organizational foundation or scalable AI content, schedule a free consultation to find the right fit. Pricing referenced in USD.",
          "Ya sea que necesites una base organizacional más sólida o contenido IA escalable, agenda una consulta gratis. Precios referenciados en USD."
        )}
        imageSrc="/images/pexels-tiger-lily-7108043.jpg"
        ctaHref="#form"
        ctaLabel={t("Go to form", "Ir al formulario")}
      />

      <SectionShell accentBg="#EEEEE8">
        <h2
          style={css(
            "font-family:'Instrument Serif',serif;font-size:clamp(26px,3.4vw,40px);margin:0 0 20px"
          )}
        >
          {t("What are you interested in?", "¿Qué te interesa?")}
        </h2>
        <div style={css("display:grid;grid-template-columns:var(--g2);gap:16px")}>
          <div
            style={css(
              "padding:24px;border-radius:16px;background:#fff;border:1px solid rgba(201,162,39,0.35)"
            )}
          >
            <Eyebrow accent="gold">{t("Consulting", "Consultoría")}</Eyebrow>
            <p style={css("margin:0;color:#5A6577;font-size:14.5px;line-height:1.55")}>
              {t(
                "Org restructuring, processes, resources, and financial structure.",
                "Reestructura, procesos, recursos y estructura financiera."
              )}
            </p>
          </div>
          <div
            style={css(
              "padding:24px;border-radius:16px;background:#fff;border:1px solid rgba(30,138,138,0.35)"
            )}
          >
            <Eyebrow accent="teal">{t("AI Content", "Contenido IA")}</Eyebrow>
            <p style={css("margin:0;color:#5A6577;font-size:14.5px;line-height:1.55")}>
              {t(
                "Avatars, UGC, voiceover, podcasts, and content automation.",
                "Avatares, UGC, voiceover, podcasts y automatización de contenido."
              )}
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="form">
        <div
          style={css(
            "display:grid;grid-template-columns:var(--gHero);gap:clamp(24px,4vw,48px);align-items:start"
          )}
        >
          <div>
            <h2
              style={css(
                "font-family:'Instrument Serif',serif;font-size:clamp(26px,3.4vw,40px);margin:0 0 12px"
              )}
            >
              {t("Request a consultation", "Solicita una consulta")}
            </h2>
            <p style={css("margin:0 0 20px;color:#5A6577;line-height:1.55")}>
              {t(
                "Name, company, service of interest, email, phone, and message — we’ll respond promptly. Engagements typically start from USD $40,000.",
                "Nombre, empresa, servicio de interés, email, teléfono y mensaje — respondemos pronto. Los proyectos suelen comenzar desde USD $40,000."
              )}
            </p>
            <div
              style={css(
                "position:relative;min-height:220px;border-radius:16px;overflow:hidden"
              )}
            >
              <ImageSlot
                id="contact-side"
                src="/images/pexels-famitsay-tamayo-234744450-12317901.jpg"
                alt=""
              />
            </div>
          </div>
          <div
            style={css(
              "padding:28px;border-radius:20px;background:#fff;border:1px solid rgba(12,21,36,0.08)"
            )}
          >
            <LeadForm variant="register" />
          </div>
        </div>
      </SectionShell>

      <SectionShell accentBg={color.ink}>
        <div
          style={css(
            "color:#F6F4EF;display:flex;flex-wrap:wrap;gap:28px;justify-content:space-between;align-items:center"
          )}
        >
          <div>
            <h2
              style={css(
                "font-family:'Instrument Serif',serif;font-size:28px;margin:0 0 8px"
              )}
            >
              {t("Prefer WhatsApp?", "¿Prefieres WhatsApp?")}
            </h2>
            <p style={css("margin:0;opacity:0.75")}>
              {t("Message us to book a consultation slot.", "Escríbenos para agendar un horario.")}
            </p>
          </div>
          <a
            href={`https://wa.me/${SITE_WHATSAPP}`}
            target="_blank"
            rel="noreferrer"
            style={css(
              "background:#EEE419;color:#2A1B4A;padding:14px 24px;border-radius:999px;font-weight:700;text-decoration:none"
            )}
          >
            WhatsApp
          </a>
        </div>
      </SectionShell>

      <SectionShell>
        <div style={css("display:grid;grid-template-columns:var(--g3);gap:18px")}>
          <div>
            <div
              style={css(
                "font-size:12px;font-weight:700;letter-spacing:0.1em;color:#8A93A3;margin-bottom:8px"
              )}
            >
              EMAIL
            </div>
            <a href={`mailto:${SITE_EMAIL}`} style={{ color: "inherit" }}>
              {SITE_EMAIL}
            </a>
          </div>
          <div>
            <div
              style={css(
                "font-size:12px;font-weight:700;letter-spacing:0.1em;color:#8A93A3;margin-bottom:8px"
              )}
            >
              {t("PHONE", "TELÉFONO")}
            </div>
            <a href={`tel:${SITE_PHONE_TEL}`} style={{ color: "inherit" }}>
              {SITE_PHONE}
            </a>
          </div>
          <div>
            <div
              style={css(
                "font-size:12px;font-weight:700;letter-spacing:0.1em;color:#8A93A3;margin-bottom:8px"
              )}
            >
              {t("OFFICE", "OFICINA")}
            </div>
            <div>
              {SITE_ADDRESS_LINE1}
              <br />
              {SITE_ADDRESS_LINE2}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell accentBg="#EEEEE8">
        <h2
          style={css(
            "font-family:'Instrument Serif',serif;font-size:24px;margin:0 0 8px"
          )}
        >
          {t("Hours", "Horario")}
        </h2>
        <p style={css("margin:0;color:#5A6577")}>
          {t("Monday–Friday, 9:00–18:00 MT", "Lunes–Viernes, 9:00–18:00 MT")}
        </p>
      </SectionShell>

      <SectionShell>
        <h2
          style={css(
            "font-family:'Instrument Serif',serif;font-size:24px;margin:0 0 14px"
          )}
        >
          {t("Social", "Redes")}
        </h2>
        <a
          href={SITE_INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          style={css("font-weight:700;color:#2A1B4A;font-size:16px")}
        >
          Instagram @{SITE_INSTAGRAM}
        </a>
        <p style={css("margin:12px 0 0;font-size:13px;color:#8A93A3")}>
          {t(
            "Follow FINANCETECH.GROUP on Instagram for updates and content.",
            "Sigue FINANCETECH.GROUP en Instagram para novedades y contenido."
          )}
        </p>
      </SectionShell>

      <SectionShell>
        <div
          style={css(
            "position:relative;min-height:280px;border-radius:20px;overflow:hidden"
          )}
        >
          <ImageSlot id="office" src="/images/ftl-about-office.webp" alt="" />
        </div>
      </SectionShell>

      <SectionShell accentBg={color.goldSoft}>
        <p style={css("margin:0;font-size:13.5px;color:#5A6577;line-height:1.55")}>
          {t(
            "By submitting this form you acknowledge our privacy notice. We handle inquiries confidentially. All pricing references are in US dollars (USD).",
            "Al enviar este formulario aceptas nuestro aviso de privacidad. Manejamos las consultas con confidencialidad. Todas las referencias de precio están en dólares estadounidenses (USD)."
          )}{" "}
          <a href="/privacy" style={css("font-weight:700;color:#0C1524")}>
            {t("Privacy notice", "Aviso de privacidad")}
          </a>
        </p>
      </SectionShell>

      <CtaBand
        accent="ink"
        title={t("Prefer email?", "¿Prefieres email?")}
        body={SITE_EMAIL}
        href={`mailto:${SITE_EMAIL}`}
        label={t("Send email", "Enviar email")}
      />
    </div>
  );
}

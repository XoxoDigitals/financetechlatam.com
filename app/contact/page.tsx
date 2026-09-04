"use client";

import { css } from "@/lib/css";
import { useT } from "@/lib/i18n";
import { LeadForm } from "@/components/LeadForm";

export default function ContactPage() {
  const t = useT();
  return (
    <div>
      <section style={css("max-width:1440px;margin:0 auto;padding:clamp(44px,6vw,88px) var(--gutter) clamp(48px,6vw,96px);display:grid;grid-template-columns:var(--g2);gap:clamp(36px,4.5vw,72px)")}>
        <div>
          <div style={css("font-size:12px;font-weight:700;letter-spacing:0.14em;color:#2440FF;margin-bottom:18px")}>
            {t("REGISTER", "REGISTRO")}
          </div>
          <h1 style={css("font-family:'Instrument Serif',serif;font-size:clamp(34px,4.6vw,56px);line-height:1.02;letter-spacing:-0.025em;margin:0 0 20px")}>
            {t("Tell us what you need operated.", "Cuéntanos qué necesitas operar.")}
          </h1>
          <p style={css("font-size:17px;line-height:1.6;color:#5A6577;margin:0 0 40px;max-width:440px")}>
            {t(
              "We reply within one business day with an initial assessment and the team that would run your account.",
              "Respondemos en un día hábil con un diagnóstico inicial y el equipo que atendería tu cuenta."
            )}
          </p>
          <div style={css("display:flex;flex-direction:column;gap:24px;padding-top:32px;border-top:1px solid rgba(12,21,36,0.12)")}>
            <div>
              <div style={css("font-size:11.5px;font-weight:700;letter-spacing:0.12em;color:#8A93A3;margin-bottom:6px")}>
                {t("HEAD OFFICE", "OFICINA CENTRAL")}
              </div>
              <div style={css("font-size:15px;line-height:1.55")}>
                Av. Paseo de la Reforma 296
                <br />
                Juárez, Cuauhtémoc, 06600
                <br />
                Ciudad de México
              </div>
            </div>
            <div>
              <div style={css("font-size:11.5px;font-weight:700;letter-spacing:0.12em;color:#8A93A3;margin-bottom:6px")}>
                {t("CONTACT", "CONTACTO")}
              </div>
              <div style={css("font-size:15px;line-height:1.55")}>
                +52 55 1234 5678
                <br />
                contacto@financetechlatam.com
              </div>
            </div>
            <div>
              <div style={css("font-size:11.5px;font-weight:700;letter-spacing:0.12em;color:#8A93A3;margin-bottom:6px")}>
                {t("HOURS", "HORARIO")}
              </div>
              <div style={css("font-size:15px;line-height:1.55")}>
                {t("Monday to Friday, 9:00–18:00 (CDMX)", "Lunes a viernes, 9:00–18:00 (CDMX)")}
              </div>
            </div>
          </div>
        </div>

        <div style={css("background:#fff;border:1px solid rgba(12,21,36,0.10);border-radius:24px;padding:clamp(24px,3vw,38px)")}>
          <LeadForm variant="register" />
        </div>
      </section>
    </div>
  );
}

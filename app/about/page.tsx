"use client";

import { css } from "@/lib/css";
import { useT } from "@/lib/i18n";
import { ImageSlot } from "@/components/ImageSlot";
import { LeadForm } from "@/components/LeadForm";

export default function AboutPage() {
  const t = useT();
  return (
    <div>
      <section style={css("max-width:1440px;margin:0 auto;padding:clamp(44px,6vw,88px) var(--gutter) clamp(32px,4.5vw,64px);border-bottom:1px solid rgba(12,21,36,0.10)")}>
        <div style={css("font-size:12px;font-weight:700;letter-spacing:0.14em;color:#2440FF;margin-bottom:18px")}>
          {t("ABOUT US", "NOSOTROS")}
        </div>
        <h1 style={css("font-family:'Instrument Serif',serif;font-size:clamp(36px,5.4vw,66px);line-height:1;letter-spacing:-0.025em;margin:0 0 24px;max-width:900px")}>
          {t("A financial firm built like an operating company.", "Un despacho financiero construido como una empresa de operación.")}
        </h1>
        <p style={css("font-size:19px;line-height:1.55;color:#5A6577;max-width:720px;margin:0")}>
          {t(
            "We started in 2004 running collections for Mexican banks. Today we operate the full finance function for mid-market companies and corporate credit departments across nine countries.",
            "Nacimos en 2004 dando servicios de cobranza a bancos mexicanos. Hoy operamos la función financiera completa de empresas medianas y áreas de crédito corporativas en nueve países."
          )}
        </p>
      </section>

      <section style={css("max-width:1440px;margin:0 auto;padding:clamp(38px,5vw,72px) var(--gutter)")}>
        <div style={css("display:grid;grid-template-columns:var(--g2);gap:clamp(32px,4vw,56px);align-items:start")}>
          <div style={css("border-radius:20px;overflow:hidden;height:420px;position:relative")}>
            <ImageSlot
              id="ftl-about-office"
              src="/images/ftl-about-office.webp"
              alt={t("Financetech LATAM office", "Oficina de Financetech LATAM")}
              placeholder={t("Drop an office or team photo", "Foto de oficina o equipo")}
            />
          </div>
          <div>
            <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(26px,3vw,38px);line-height:1.08;margin:0 0 20px")}>
              {t("How we got here", "Cómo llegamos aquí")}
            </h2>
            <div style={css("display:flex;flex-direction:column")}>
              {[
                { y: "2004", en: "Founded in Mexico City as an extrajudicial collections firm for the banking sector.", es: "Fundación en Ciudad de México como despacho de cobranza extrajudicial para banca." },
                { y: "2011", en: "Added the accounting and tax practice to serve SMB clients end to end.", es: "Se agrega la práctica de contabilidad e impuestos para atender a clientes PyME." },
                { y: "2017", en: "Built our own collections and bank-reconciliation platform.", es: "Desarrollo de plataforma propia de cobranza y conciliación bancaria." },
                { y: "2021", en: "Expanded into Central and South America with cross-border operations and transfers.", es: "Expansión a Centro y Sudamérica con operación internacional y transferencias." },
                { y: "2026", en: "680 active clients and five units operating on a single dashboard.", es: "680 clientes activos y cinco unidades operando sobre un mismo tablero." },
              ].map((r, i, arr) => (
                <div
                  key={r.y}
                  style={css(
                    "display:grid;grid-template-columns:76px 1fr;gap:20px;padding:20px 0;border-top:1px solid rgba(12,21,36,0.12)" +
                      (i === arr.length - 1 ? ";border-bottom:1px solid rgba(12,21,36,0.12)" : "")
                  )}
                >
                  <span style={css("font-family:'Instrument Serif',serif;font-size:22px;color:#2440FF")}>{r.y}</span>
                  <p style={css("font-size:14.5px;line-height:1.6;color:#5A6577;margin:0")}>{t(r.en, r.es)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={css("background:#fff;border-top:1px solid rgba(12,21,36,0.10);border-bottom:1px solid rgba(12,21,36,0.10)")}>
        <div style={css("max-width:1440px;margin:0 auto;padding:clamp(40px,5.5vw,80px) var(--gutter)")}>
          <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(28px,3.2vw,40px);line-height:1.08;margin:0 0 40px")}>
            {t("How we decide", "Cómo decidimos")}
          </h2>
          <div style={css("display:grid;grid-template-columns:var(--g3);gap:16px")}>
            {[
              { hen: "Data before opinion", hes: "El dato antes de la opinión", en: "Every collections strategy is tested on a sample before it touches the full portfolio.", es: "Cada estrategia de cobranza se prueba en una muestra antes de aplicarse a la cartera completa." },
              { hen: "Fair treatment of debtors", hes: "Trato correcto al deudor", en: "Protocols aligned to CONDUSEF rules, with every interaction recorded. Sustainable recovery is negotiated, not pressured.", es: "Protocolos alineados a CONDUSEF y grabación de cada interacción. La recuperación sostenible se negocia, no se presiona." },
              { hen: "One accountable owner", hes: "Un solo responsable", en: "Each account has one director accountable across all five units — not five vendors coordinating.", es: "Cada cuenta tiene un director responsable de las cinco unidades, no cinco proveedores coordinándose." },
            ].map((c, i) => (
              <div key={i} style={css("border:1px solid rgba(12,21,36,0.10);border-radius:18px;padding:clamp(22px,2.6vw,30px)")}>
                <h3 style={css("font-size:19px;font-weight:700;margin:0 0 10px")}>{t(c.hen, c.hes)}</h3>
                <p style={css("font-size:14.5px;line-height:1.6;color:#5A6577;margin:0")}>{t(c.en, c.es)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={css("max-width:1440px;margin:0 auto;padding:clamp(40px,5.5vw,80px) var(--gutter)")}>
        <div style={css("display:grid;grid-template-columns:var(--g32);gap:clamp(32px,4vw,56px);align-items:start")}>
          <div>
            <div style={css("font-size:12px;font-weight:700;letter-spacing:0.14em;color:#2440FF;margin-bottom:14px")}>
              {t("GET IN TOUCH", "HABLEMOS")}
            </div>
            <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(28px,3.2vw,40px);line-height:1.06;letter-spacing:-0.02em;margin:0 0 18px")}>
              {t("Talk to the team that would actually run your account.", "Habla directamente con el equipo que operaría tu cuenta.")}
            </h2>
            <p style={css("font-size:16px;line-height:1.6;color:#5A6577;margin:0 0 28px;max-width:420px")}>
              {t("No sales intermediaries. We reply within one business day.", "Sin intermediarios comerciales. Respondemos en un día hábil.")}
            </p>
            <div style={css("display:flex;flex-direction:column;gap:14px;font-size:14.5px;color:#41506B")}>
              <span>+52 55 1234 5678</span>
              <span>contacto@financetechlatam.com</span>
              <span>{t("Paseo de la Reforma 296, Mexico City", "Paseo de la Reforma 296, Ciudad de México")}</span>
            </div>
          </div>
          <div style={css("background:#fff;border:1px solid rgba(12,21,36,0.10);border-radius:24px;padding:clamp(24px,3vw,34px)")}>
            <LeadForm variant="about" />
          </div>
        </div>
      </section>
    </div>
  );
}

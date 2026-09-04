"use client";

import { css } from "@/lib/css";
import { useT } from "@/lib/i18n";

export default function FintechPage() {
  const t = useT();
  const bars = [31, 38, 44, 49, 57, 62, 70, 78, 91];
  const barColor = (h: number) => (h >= 91 ? "#7BE3B4" : h >= 62 ? "#2440FF" : "rgba(246,244,239,0.18)");

  return (
    <div>
      <section style={css("max-width:1440px;margin:0 auto;padding:clamp(44px,6vw,88px) var(--gutter) clamp(32px,4.5vw,64px);border-bottom:1px solid rgba(12,21,36,0.10)")}>
        <div style={css("font-size:12px;font-weight:700;letter-spacing:0.14em;color:#2440FF;margin-bottom:18px")}>
          02 — <span>{t("FINANCIAL TECHNOLOGIES", "TECNOLOGÍA FINANCIERA")}</span>
        </div>
        <h1 style={css("font-family:'Instrument Serif',serif;font-size:clamp(36px,5.4vw,66px);line-height:1;letter-spacing:-0.025em;margin:0 0 24px;max-width:920px")}>
          {t(
            "The platform we run your portfolio on — and the one you supervise it from.",
            "La plataforma con la que operamos tu cartera — y con la que tú la supervisas."
          )}
        </h1>
        <p style={css("font-size:19px;line-height:1.55;color:#5A6577;max-width:700px;margin:0")}>
          {t(
            "Collections, bank reconciliation, scoring and payments in one system, connected to your ERP and Mexican banking rails.",
            "Cobranza, conciliación bancaria, scoring y pagos en un solo sistema, conectado a tu ERP y a la banca mexicana."
          )}
        </p>
      </section>

      <section style={css("max-width:1440px;margin:0 auto;padding:clamp(38px,5vw,72px) var(--gutter)")}>
        <div style={css("display:grid;grid-template-columns:var(--g3);gap:16px;margin-bottom:16px")}>
          {[
            { hen: "Collections engine", hes: "Motor de cobranza", en: "Ageing-bucket rules, predictive dialling, WhatsApp, email and SMS with a full audit trail.", es: "Reglas por tramo de antigüedad, marcación predictiva, WhatsApp, correo y SMS con bitácora completa." },
            { hen: "Bank reconciliation", hes: "Conciliación bancaria", en: "Automatic matching of references, SPEI transfers and direct debits — 91% matched with no human touch.", es: "Conciliación automática de referencias, SPEI y domiciliaciones con 91% de coincidencia sin intervención." },
            { hen: "Portfolio scoring", hes: "Scoring de cartera", en: "Per-account payment probability to prioritise contact and decide which balances are worth litigating.", es: "Probabilidad de pago por cuenta para priorizar contacto y decidir qué cartera vale litigar." },
          ].map((c, i) => (
            <div key={i} style={css("background:#fff;border:1px solid rgba(12,21,36,0.10);border-radius:20px;padding:clamp(22px,2.6vw,32px)")}>
              <h3 style={css("font-size:19px;font-weight:700;margin:0 0 10px")}>{t(c.hen, c.hes)}</h3>
              <p style={css("font-size:14.5px;line-height:1.6;color:#5A6577;margin:0")}>{t(c.en, c.es)}</p>
            </div>
          ))}
        </div>

        <div style={css("background:#0C1524;color:#F6F4EF;border-radius:24px;padding:clamp(24px,3vw,38px)")}>
          <div style={css("display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px")}>
            <h3 style={css("font-size:18px;font-weight:700;margin:0")}>{t("Operation automation", "Automatización de la operación")}</h3>
            <span style={css("font-size:12px;color:rgba(246,244,239,0.45)")}>{t("Illustrative · 18 months", "Ilustrativo · 18 meses")}</span>
          </div>
          <p style={css("font-size:14px;color:rgba(246,244,239,0.6);margin:0 0 30px")}>
            {t("Share of tasks executed without human intervention", "Porcentaje de tareas ejecutadas sin intervención humana")}
          </p>
          <div style={css("display:flex;align-items:flex-end;gap:12px;height:200px;border-bottom:1px solid rgba(246,244,239,0.16)")}>
            {bars.map((h, i) => (
              <div key={i} style={{ ...css("flex:1;border-radius:6px 6px 0 0"), height: `${h}%`, background: barColor(h) }} />
            ))}
          </div>
          <div style={css("display:flex;justify-content:space-between;font-size:11px;color:rgba(246,244,239,0.45);margin-top:12px")}>
            {["M1", "M3", "M5", "M7", "M9", "M11", "M13", "M15", "M18"].map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={css("background:#fff;border-top:1px solid rgba(12,21,36,0.10)")}>
        <div style={css("max-width:1440px;margin:0 auto;padding:clamp(40px,5.5vw,80px) var(--gutter)")}>
          <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(28px,3.2vw,40px);line-height:1.08;margin:0 0 36px")}>
            {t("Integrations & compliance", "Integraciones y cumplimiento")}
          </h2>
          <div style={css("display:grid;grid-template-columns:var(--g4);gap:14px")}>
            <div style={css("border:1px solid rgba(12,21,36,0.10);border-radius:14px;padding:24px;font-size:14.5px;font-weight:600")}>SAP · Oracle · NetSuite</div>
            <div style={css("border:1px solid rgba(12,21,36,0.10);border-radius:14px;padding:24px;font-size:14.5px;font-weight:600")}>CONTPAQi · Aspel</div>
            <div style={css("border:1px solid rgba(12,21,36,0.10);border-radius:14px;padding:24px;font-size:14.5px;font-weight:600")}>
              SPEI · CoDi · <span>{t("Local banks", "Bancos locales")}</span>
            </div>
            <div style={css("border:1px solid rgba(12,21,36,0.10);border-radius:14px;padding:24px;font-size:14.5px;font-weight:600")}>ISO 27001 · LFPDPPP</div>
          </div>
        </div>
      </section>
    </div>
  );
}

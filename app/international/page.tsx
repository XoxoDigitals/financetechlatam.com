"use client";

import { css } from "@/lib/css";
import { useT } from "@/lib/i18n";

export default function InternationalPage() {
  const t = useT();
  const countries = [
    { name: "Mexico", nameEs: "México", en: "Headquarters · All five units", es: "Sede · Cinco unidades", dark: true },
    { name: "Colombia", nameEs: "Colombia", en: "Collections · Accounting", es: "Cobranza · Contabilidad" },
    { name: "Chile", nameEs: "Chile", en: "Collections · Compliance", es: "Cobranza · Cumplimiento" },
    { name: "Perú", nameEs: "Perú", en: "Collections", es: "Cobranza" },
    { name: "Guatemala", nameEs: "Guatemala", en: "Accounting · Payroll", es: "Contabilidad · Nómina" },
    { name: "Costa Rica", nameEs: "Costa Rica", en: "Accounting", es: "Contabilidad" },
    { name: "Panama", nameEs: "Panamá", en: "Entities · Treasury", es: "Entidades · Tesorería" },
    { name: "United States", nameEs: "Estados Unidos", en: "Transfers · Nearshore", es: "Transferencias · Nearshore" },
    { name: "Spain", nameEs: "España", en: "Europe–LATAM bridge", es: "Puente Europa–LATAM", accent: true },
  ];

  return (
    <div>
      <section style={css("max-width:1440px;margin:0 auto;padding:clamp(44px,6vw,88px) var(--gutter) clamp(32px,4.5vw,64px);border-bottom:1px solid rgba(12,21,36,0.10)")}>
        <div style={css("font-size:12px;font-weight:700;letter-spacing:0.14em;color:#2440FF;margin-bottom:18px")}>
          05 — <span>{t("INTERNATIONAL OPERATIONS", "OPERACIÓN INTERNACIONAL")}</span>
        </div>
        <h1 style={css("font-family:'Instrument Serif',serif;font-size:clamp(36px,5.4vw,66px);line-height:1;letter-spacing:-0.025em;margin:0 0 24px;max-width:900px")}>
          {t("One finance operation across nine countries.", "Una sola operación financiera en nueve países.")}
        </h1>
        <p style={css("font-size:19px;line-height:1.55;color:#5A6577;max-width:700px;margin:0")}>
          {t(
            "Entity setup, local compliance, transfers and cross-border recovery — coordinated from Mexico City.",
            "Constitución de entidades, cumplimiento local, transferencias y cobranza transfronteriza, coordinado desde Ciudad de México."
          )}
        </p>
      </section>

      <section style={css("max-width:1440px;margin:0 auto;padding:clamp(38px,5vw,72px) var(--gutter)")}>
        <div style={css("display:grid;grid-template-columns:var(--g3);gap:14px")}>
          {countries.map((c, i) => {
            const base = c.dark
              ? "background:#0C1524;color:#F6F4EF;border-radius:18px;padding:28px"
              : c.accent
              ? "background:#E9EBFF;border:1px solid rgba(36,64,255,0.16);border-radius:18px;padding:28px"
              : "background:#fff;border:1px solid rgba(12,21,36,0.10);border-radius:18px;padding:28px";
            const sub = c.dark
              ? "rgba(246,244,239,0.6)"
              : c.accent
              ? "#41506B"
              : "#5A6577";
            return (
              <div key={i} style={css(base)}>
                <div style={css("font-family:'Instrument Serif',serif;font-size:26px;margin-bottom:6px")}>{t(c.name, c.nameEs)}</div>
                <div style={{ ...css("font-size:12.5px"), color: sub }}>{t(c.en, c.es)}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section style={css("background:#fff;border-top:1px solid rgba(12,21,36,0.10)")}>
        <div style={css("max-width:1440px;margin:0 auto;padding:clamp(40px,5.5vw,80px) var(--gutter)")}>
          <div style={css("display:grid;grid-template-columns:var(--g2);gap:clamp(32px,4vw,56px)")}>
            <div>
              <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(26px,3vw,38px);line-height:1.08;margin:0 0 20px")}>
                {t("Market entry", "Entrada al mercado")}
              </h2>
              <div style={css("display:flex;flex-direction:column;gap:16px")}>
                {[
                  { en: "Entity incorporation, tax ID and bank account opening", es: "Constitución de la entidad, RFC y apertura bancaria" },
                  { en: "Local payroll and employer registration", es: "Nómina local y registro patronal" },
                  { en: "AML/KYC compliance and regulatory reporting", es: "Cumplimiento AML/KYC y reporte regulatorio" },
                  { en: "Transfers, treasury and FX hedging", es: "Transferencias, tesorería y cobertura cambiaria" },
                ].map((r, i) => (
                  <div key={i} style={css("display:flex;gap:12px")}>
                    <span style={css("color:#2440FF;font-weight:700")}>→</span>
                    <span style={css("font-size:15px;line-height:1.55;color:#5A6577")}>{t(r.en, r.es)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={css("background:#F6F4EF;border-radius:20px;padding:clamp(22px,2.6vw,32px)")}>
              <h3 style={css("font-size:17px;font-weight:700;margin:0 0 22px")}>{t("Typical time to operate", "Tiempos típicos de arranque")}</h3>
              <div style={css("display:flex;flex-direction:column;gap:16px")}>
                {[
                  { en: "Mexico", es: "México", n: "3", w: 30, c: "#2440FF" },
                  { en: "Colombia", es: "Colombia", n: "5", w: 50, c: "#2440FF" },
                  { en: "Chile", es: "Chile", n: "6", w: 60, c: "#4C63FF" },
                  { en: "Panama", es: "Panamá", n: "8", w: 80, c: "#8494FF" },
                ].map((r, i) => (
                  <div key={i}>
                    <div style={css("display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px")}>
                      <span>{t(r.en, r.es)}</span>
                      <span style={css("font-weight:700")}>
                        {r.n} <span>{t("wks", "sem")}</span>
                      </span>
                    </div>
                    <div style={css("height:8px;background:rgba(12,21,36,0.08);border-radius:999px")}>
                      <div style={{ ...css("height:100%;border-radius:999px"), width: `${r.w}%`, background: r.c }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { css } from "@/lib/css";
import { useT } from "@/lib/i18n";

export default function AccountingPage() {
  const t = useT();
  return (
    <div>
      <section style={css("max-width:1440px;margin:0 auto;padding:clamp(44px,6vw,88px) var(--gutter) clamp(32px,4.5vw,64px);border-bottom:1px solid rgba(12,21,36,0.10)")}>
        <div style={css("font-size:12px;font-weight:700;letter-spacing:0.14em;color:#2440FF;margin-bottom:18px")}>
          03 — <span>{t("ACCOUNTING & TAX", "CONTABILIDAD E IMPUESTOS")}</span>
        </div>
        <h1 style={css("font-family:'Instrument Serif',serif;font-size:clamp(36px,5.4vw,66px);line-height:1;letter-spacing:-0.025em;margin:0 0 24px;max-width:880px")}>
          {t("A five-day close. Zero audit findings.", "Cierre en cinco días. Cero hallazgos en auditoría.")}
        </h1>
        <p style={css("font-size:19px;line-height:1.55;color:#5A6577;max-width:700px;margin:0")}>
          {t(
            "Bookkeeping, payroll and SAT compliance run by certified accountants, with the ledger tied to actual collections.",
            "Contabilidad, nómina y cumplimiento ante el SAT operados por contadores certificados, con la contabilidad ligada a la cobranza real."
          )}
        </p>
      </section>

      <section style={css("max-width:1440px;margin:0 auto;padding:clamp(38px,5vw,72px) var(--gutter)")}>
        <div style={css("display:grid;grid-template-columns:var(--g2);gap:clamp(32px,4vw,56px)")}>
          <div>
            <h2 style={css("font-family:'Instrument Serif',serif;font-size:34px;margin:0 0 24px")}>{t("Services", "Servicios")}</h2>
            <div style={css("display:flex;flex-direction:column")}>
              {[
                { en: "Monthly bookkeeping & financial statements", es: "Contabilidad mensual y estados financieros", ten: "Monthly", tes: "Mensual" },
                { en: "Tax filings (ISR, IVA)", es: "Declaraciones e impuestos (ISR, IVA)", ten: "Monthly & annual", tes: "Mensual y anual" },
                { en: "Payroll, IMSS & INFONAVIT", es: "Nómina, IMSS e INFONAVIT", ten: "Bi-weekly", tes: "Quincenal" },
                { en: "E-invoicing (CFDI 4.0)", es: "Facturación electrónica (CFDI 4.0)", ten: "Continuous", tes: "Continuo" },
                { en: "Tax defence & audit response", es: "Defensa fiscal y atención a requerimientos", ten: "On demand", tes: "Por evento" },
                { en: "Transfer pricing", es: "Precios de transferencia", ten: "Annual", tes: "Anual" },
              ].map((r, i, arr) => (
                <div
                  key={i}
                  style={css(
                    "padding:18px 0;border-top:1px solid rgba(12,21,36,0.12);display:flex;justify-content:space-between;gap:20px" +
                      (i === arr.length - 1 ? ";border-bottom:1px solid rgba(12,21,36,0.12)" : "")
                  )}
                >
                  <span style={css("font-size:15.5px;font-weight:600")}>{t(r.en, r.es)}</span>
                  <span style={css("font-size:13px;color:#8A93A3;white-space:nowrap")}>{t(r.ten, r.tes)}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={css("background:#fff;border:1px solid rgba(12,21,36,0.10);border-radius:20px;padding:clamp(22px,2.6vw,32px)")}>
            <h3 style={css("font-size:17px;font-weight:700;margin:0 0 4px")}>{t("Days to close the month", "Días para cerrar el mes")}</h3>
            <p style={css("font-size:13px;color:#5A6577;margin:0 0 26px")}>{t("Before and after transition", "Antes y después de la transición")}</p>
            <div style={css("display:flex;flex-direction:column;gap:18px")}>
              {[
                { en: "At handover", es: "Al llegar", label: "21 d", w: 100, c: "rgba(12,21,36,0.24)" },
                { en: "Month 3", es: "Mes 3", label: "13 d", w: 62, c: "#4C63FF" },
                { en: "Month 6", es: "Mes 6", label: "8 d", w: 38, c: "#2440FF" },
                { en: "Month 12", es: "Mes 12", label: "5 d", w: 24, c: "#0E7A57", green: true },
              ].map((r, i) => (
                <div key={i}>
                  <div style={css("display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px")}>
                    <span>{t(r.en, r.es)}</span>
                    <span style={{ ...css("font-weight:700"), color: r.green ? "#0E7A57" : undefined }}>{r.label}</span>
                  </div>
                  <div style={css("height:10px;background:rgba(12,21,36,0.08);border-radius:999px;overflow:hidden")}>
                    <div style={{ ...css("height:100%;border-radius:999px"), width: `${r.w}%`, background: r.c }} />
                  </div>
                </div>
              ))}
            </div>
            <div style={css("margin-top:28px;padding-top:22px;border-top:1px solid rgba(12,21,36,0.10);display:grid;grid-template-columns:var(--g2);gap:16px")}>
              <div>
                <div style={css("font-family:'Instrument Serif',serif;font-size:30px;line-height:1")}>100%</div>
                <div style={css("font-size:12px;color:#5A6577")}>{t("Filings submitted on time", "Declaraciones presentadas en tiempo")}</div>
              </div>
              <div>
                <div style={css("font-family:'Instrument Serif',serif;font-size:30px;line-height:1")}>0</div>
                <div style={css("font-size:12px;color:#5A6577")}>{t("Compliance penalties in 2025", "Multas por incumplimiento en 2025")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

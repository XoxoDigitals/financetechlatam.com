"use client";

import { css } from "@/lib/css";
import { useT } from "@/lib/i18n";

export default function CollectionsPage() {
  const t = useT();
  return (
    <div>
      <section style={css("background:#0C1524;color:#F6F4EF")}>
        <div style={css("max-width:1440px;margin:0 auto;padding:clamp(44px,6vw,88px) var(--gutter) clamp(36px,5vw,72px)")}>
          <div
            className="ftl-hero-kicker"
            style={css("font-size:12px;font-weight:700;letter-spacing:0.14em;color:#7BE3B4;margin-bottom:18px")}
          >
            04 — <span>{t("COLLECTIONS & CREDIT", "COBRANZA Y CRÉDITO")}</span>
          </div>
          <h1 style={css("font-family:'Instrument Serif',serif;font-size:clamp(32px,8vw,70px);line-height:1.05;letter-spacing:-0.025em;margin:0 0 24px;max-width:900px;overflow-wrap:anywhere")}>
            {t("We recover what you already sold.", "Recuperamos lo que ya vendiste.")}
          </h1>
          <p style={css("font-size:clamp(16px,4vw,19px);line-height:1.55;color:rgba(246,244,239,0.66);max-width:660px;margin:0 0 36px;overflow-wrap:anywhere")}>
            {t(
              "Early-stage, extrajudicial and legal recovery for banking, retail, services and corporate credit — with portfolio scoring and regulated debtor treatment.",
              "Cobranza temprana, extrajudicial y jurídica para banca, retail, servicios y crédito corporativo — con scoring de cartera y trato regulado al deudor."
            )}
          </p>
          <div className="ftl-hero-kpis">
            {[
              { n: "$1.84B", en: "Portfolio under management (MXN)", es: "Cartera bajo gestión (MXN)", c: "" },
              { n: "78%", en: "Contact rate", es: "Contactabilidad", c: "" },
              { n: "14 d", en: "To first payment", es: "Al primer pago", c: "" },
              { n: "0.4%", en: "Complaints per 1,000 contacts", es: "Quejas por cada mil contactos", c: "#7BE3B4" },
            ].map((s, i) => (
              <div key={i} className="ftl-hero-kpi">
                <div style={{ ...css("font-family:'Instrument Serif',serif;font-size:clamp(26px,3vw,38px);line-height:1;margin-bottom:8px"), color: s.c || undefined }}>
                  {s.n}
                </div>
                <div style={css("font-size:12.5px;color:rgba(246,244,239,0.55);overflow-wrap:anywhere")}>{t(s.en, s.es)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={css("max-width:1440px;margin:0 auto;padding:clamp(40px,5.5vw,80px) var(--gutter)")}>
        <div style={css("display:grid;grid-template-columns:var(--g32);gap:16px")}>
          <div style={css("background:#fff;border:1px solid rgba(12,21,36,0.10);border-radius:20px;padding:clamp(24px,3vw,34px)")}>
            <h3 style={css("font-size:17px;font-weight:700;margin:0 0 4px")}>{t("Cumulative recovery by stage", "Recuperación acumulada por etapa")}</h3>
            <p style={css("font-size:13px;color:#5A6577;margin:0 0 26px")}>{t("Share of total balance placed for recovery", "Porcentaje del saldo total colocado en gestión")}</p>
            <svg viewBox="0 0 640 220" style={css("width:100%;height:220px;display:block")} preserveAspectRatio="none">
              {[20, 70, 120, 170].map((y) => (
                <line key={y} x1="0" y1={y} x2="640" y2={y} stroke="rgba(12,21,36,0.07)" />
              ))}
              <line x1="0" y1="200" x2="640" y2="200" stroke="rgba(12,21,36,0.16)" />
              <polygon points="0,200 91,120 183,84 274,62 366,50 457,42 549,36 640,32 640,200" fill="rgba(36,64,255,0.10)" />
              <polyline points="0,200 91,120 183,84 274,62 366,50 457,42 549,36 640,32" fill="none" stroke="#2440FF" strokeWidth="2.5" strokeLinejoin="round" />
              <circle cx="91" cy="120" r="4" fill="#2440FF" />
              <circle cx="274" cy="62" r="4" fill="#2440FF" />
              <circle cx="640" cy="32" r="4" fill="#0E7A57" />
            </svg>
            <div style={css("display:flex;justify-content:space-between;font-size:11.5px;color:#8A93A3;margin-top:10px")}>
              <span>{t("Day 0", "Día 0")}</span>
              <span>{t("Day 30", "Día 30")}</span>
              <span>{t("Day 60", "Día 60")}</span>
              <span>{t("Day 90", "Día 90")}</span>
              <span>{t("Day 180", "Día 180")}</span>
            </div>
          </div>

          <div style={css("background:#fff;border:1px solid rgba(12,21,36,0.10);border-radius:20px;padding:clamp(24px,3vw,34px)")}>
            <h3 style={css("font-size:17px;font-weight:700;margin:0 0 4px")}>{t("Portfolio mix", "Mezcla de cartera")}</h3>
            <p style={css("font-size:13px;color:#5A6577;margin:0 0 26px")}>{t("By creditor sector", "Por sector del acreedor")}</p>
            <div style={css("display:flex;flex-direction:column;gap:14px")}>
              {[
                { en: "Banking & consumer credit", es: "Banca y crédito al consumo", v: 41, c: "#2440FF" },
                { en: "Retail & trade credit", es: "Retail y crédito comercial", v: 24, c: "#4C63FF" },
                { en: "Services & subscriptions", es: "Servicios y suscripciones", v: 18, c: "#8494FF" },
                { en: "Corporate B2B", es: "Corporativo B2B", v: 17, c: "#B3BDFF" },
              ].map((r, i) => (
                <div key={i}>
                  <div style={css("display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px")}>
                    <span>{t(r.en, r.es)}</span>
                    <span style={css("font-weight:700")}>{r.v}%</span>
                  </div>
                  <div style={css("height:8px;background:rgba(12,21,36,0.08);border-radius:999px")}>
                    <div style={{ ...css("height:100%;border-radius:999px"), width: `${r.v}%`, background: r.c }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={css("background:#fff;border-top:1px solid rgba(12,21,36,0.10);border-bottom:1px solid rgba(12,21,36,0.10)")}>
        <div style={css("max-width:1440px;margin:0 auto;padding:clamp(40px,5.5vw,80px) var(--gutter)")}>
          <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(28px,3.2vw,40px);line-height:1.08;margin:0 0 40px")}>
            {t("The four stages", "Las cuatro etapas")}
          </h2>
          <div style={css("display:grid;grid-template-columns:var(--g4);gap:16px")}>
            {[
              { ken: "PREVENTIVE", kes: "PREVENTIVA", hen: "Before due date", hes: "Antes del vencimiento", en: "Reminders and payment options that keep the account out of arrears.", es: "Recordatorios y facilidades de pago para evitar que la cuenta entre en mora." },
              { ken: "EARLY", kes: "TEMPRANA", h: "1–90", hunit: true, en: "Omnichannel contact and payment agreements — where most of the balance is recovered.", es: "Contacto omnicanal y convenios de pago. Aquí se recupera la mayor parte." },
              { ken: "EXTRAJUDICIAL", kes: "EXTRAJUDICIAL", h: "91–360", hunit: true, en: "Structured negotiation, authorised write-downs and restructures with notarial follow-up.", es: "Negociación estructurada, quitas autorizadas y reestructuras con seguimiento notarial." },
              { ken: "LEGAL", kes: "JURÍDICA", h: "360+", hunit: true, en: "Commercial litigation with partner firms — only where scoring justifies the cost.", es: "Demanda mercantil con despachos aliados, sólo cuando el scoring lo justifica." },
            ].map((c, i) => (
              <div key={i} style={css("border:1px solid rgba(12,21,36,0.10);border-radius:18px;padding:28px")}>
                <div style={css("font-size:11.5px;font-weight:700;letter-spacing:0.12em;color:#2440FF;margin-bottom:14px")}>{t(c.ken, c.kes)}</div>
                <h3 style={css("font-size:17px;font-weight:700;margin:0 0 10px")}>
                  {c.hunit ? (
                    <>
                      {c.h} <span>{t("days", "días")}</span>
                    </>
                  ) : (
                    t(c.hen!, c.hes!)
                  )}
                </h3>
                <p style={css("font-size:14px;line-height:1.6;color:#5A6577;margin:0")}>{t(c.en, c.es)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

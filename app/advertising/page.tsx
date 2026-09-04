"use client";

import { css } from "@/lib/css";
import { useT } from "@/lib/i18n";
import { ImageSlot } from "@/components/ImageSlot";

const TAG = "font-size:12px;padding:6px 12px;border-radius:999px;background:#E9EBFF;color:#2440FF;font-weight:600";

export default function AdvertisingPage() {
  const t = useT();
  return (
    <div>
      <section style={css("max-width:1440px;margin:0 auto;padding:clamp(44px,6vw,88px) var(--gutter) clamp(32px,4.5vw,64px);border-bottom:1px solid rgba(12,21,36,0.10)")}>
        <div style={css("font-size:12px;font-weight:700;letter-spacing:0.14em;color:#2440FF;margin-bottom:18px")}>
          01 — <span>{t("ADVERTISING", "PUBLICIDAD")}</span>
        </div>
        <h1 style={css("font-family:'Instrument Serif',serif;font-size:clamp(36px,5.4vw,66px);line-height:1;letter-spacing:-0.025em;margin:0 0 24px;max-width:900px")}>
          {t("Advertising measured in collected revenue, not clicks.", "Publicidad medida en ingreso cobrado, no en clics.")}
        </h1>
        <p style={css("font-size:19px;line-height:1.55;color:#5A6577;max-width:700px;margin:0")}>
          {t(
            "We're the rare agency that also collects the receivables it generates — which changes entirely who we choose to attract.",
            "Somos la única agencia que también cobra la cartera que genera. Eso cambia por completo a quién decidimos atraer."
          )}
        </p>
      </section>

      <section style={css("max-width:1440px;margin:0 auto;padding:clamp(38px,5vw,72px) var(--gutter)")}>
        <div style={css("display:grid;grid-template-columns:var(--g2);gap:16px")}>
          <div style={css("background:#fff;border:1px solid rgba(12,21,36,0.10);border-radius:20px;padding:clamp(24px,3vw,34px)")}>
            <h3 style={css("font-family:'Instrument Serif',serif;font-size:26px;margin:0 0 12px")}>
              {t("Customer acquisition", "Adquisición de clientes")}
            </h3>
            <p style={css("font-size:14.5px;line-height:1.6;color:#5A6577;margin:0 0 20px")}>
              {t(
                "Acquisition campaigns for credit, insurance and financial services, segmented by real ability to pay.",
                "Campañas de captación para crédito, seguros y servicios financieros, con segmentación por capacidad de pago."
              )}
            </p>
            <div style={css("display:flex;flex-wrap:wrap;gap:8px")}>
              <span style={css(TAG)}>Paid search</span>
              <span style={css(TAG)}>Meta &amp; TikTok</span>
              <span style={css(TAG)}>{t("Programmatic", "Programática")}</span>
            </div>
          </div>
          <div style={css("background:#fff;border:1px solid rgba(12,21,36,0.10);border-radius:20px;padding:clamp(24px,3vw,34px)")}>
            <h3 style={css("font-family:'Instrument Serif',serif;font-size:26px;margin:0 0 12px")}>
              {t("Brand & content", "Marca y contenido")}
            </h3>
            <p style={css("font-size:14.5px;line-height:1.6;color:#5A6577;margin:0 0 20px")}>
              {t(
                "Identity, website, sales collateral and compliance-reviewed content for financial institutions.",
                "Identidad, sitio, materiales de venta y contenido regulado para instituciones financieras."
              )}
            </p>
            <div style={css("display:flex;flex-wrap:wrap;gap:8px")}>
              <span style={css(TAG)}>{t("Identity", "Identidad")}</span>
              <span style={css(TAG)}>{t("Web", "Sitio web")}</span>
              <span style={css(TAG)}>{t("Content", "Contenido")}</span>
            </div>
          </div>
        </div>
      </section>

      <section style={css("background:#0C1524;color:#F6F4EF")}>
        <div style={css("max-width:1440px;margin:0 auto;padding:clamp(40px,5.5vw,80px) var(--gutter)")}>
          <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(28px,3.2vw,40px);line-height:1.08;margin:0 0 12px")}>
            {t("From click to peso collected", "Del clic al peso cobrado")}
          </h2>
          <p style={css("font-size:15px;color:rgba(246,244,239,0.6);margin:0 0 44px")}>
            {t(
              "Illustrative figures from a twelve-month consumer-credit campaign.",
              "Cifras ilustrativas de una campaña de crédito de consumo, doce meses."
            )}
          </p>
          <div style={css("display:grid;grid-template-columns:var(--g5);gap:0;border-top:1px solid rgba(246,244,239,0.16)")}>
            {[
              { n: "1.2M", en: "Qualified impressions", es: "Impresiones cualificadas", c: "" },
              { n: "38K", en: "Applications", es: "Solicitudes", c: "" },
              { n: "11K", en: "Approved", es: "Aprobadas", c: "" },
              { n: "96%", en: "Current at 6 months", es: "Al corriente a 6 meses", c: "#7BE3B4" },
              { n: "3.4x", en: "Return on ad spend", es: "Retorno sobre inversión publicitaria", c: "" },
            ].map((s, i, arr) => (
              <div
                key={i}
                style={css(
                  "padding:26px 20px;" +
                    (i === 0 ? "padding-left:0;" : "") +
                    (i === arr.length - 1 ? "padding-right:0;" : "border-right:1px solid rgba(246,244,239,0.12);")
                )}
              >
                <div style={{ ...css("font-family:'Instrument Serif',serif;font-size:34px;line-height:1;margin-bottom:8px"), color: s.c || undefined }}>
                  {s.n}
                </div>
                <div style={css("font-size:12.5px;color:rgba(246,244,239,0.55)")}>{t(s.en, s.es)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={css("max-width:1440px;margin:0 auto;padding:clamp(40px,5.5vw,80px) var(--gutter)")}>
        <div style={css("display:grid;grid-template-columns:var(--g2);gap:16px")}>
          <div style={css("border-radius:20px;overflow:hidden;height:330px")}>
            <ImageSlot id="ftl-adv-1" placeholder={t("Campaign work", "Trabajo de campaña")} />
          </div>
          <div style={css("border-radius:20px;overflow:hidden;height:330px")}>
            <ImageSlot id="ftl-adv-2" placeholder={t("Campaign work", "Trabajo de campaña")} />
          </div>
        </div>
      </section>
    </div>
  );
}

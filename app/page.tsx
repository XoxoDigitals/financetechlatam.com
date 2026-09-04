"use client";

import { useRouter } from "next/navigation";
import { Box } from "@/components/Box";
import { css } from "@/lib/css";
import { useT } from "@/lib/i18n";
export default function HomePage() {
  const t = useT();
  const router = useRouter();
  const go = (p: string) => () => router.push(p);
  const showMetrics = true;

  return (
    <div>
      {/* ===== HERO ===== */}
      <section
        style={css(
          "max-width:1440px;margin:0 auto;padding:clamp(44px,6vw,96px) var(--gutter) clamp(36px,5vw,72px);display:grid;grid-template-columns:var(--gHero);gap:clamp(36px,4.5vw,72px);align-items:center"
        )}
      >
        <div>
          <div
            style={css(
              "display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(36,64,255,0.28);background:rgba(36,64,255,0.06);color:#2440FF;padding:7px 14px;border-radius:999px;font-size:12px;font-weight:600;letter-spacing:0.02em;margin-bottom:28px"
            )}
          >
            <span style={css("width:6px;height:6px;border-radius:50%;background:#2440FF")} />
            {t(
              "Five business units · One operating partner",
              "Cinco unidades de negocio · Una sola operación"
            )}
          </div>
          <h1
            style={css(
              "font-family:'Instrument Serif',serif;font-size:clamp(40px,6.2vw,78px);line-height:0.98;letter-spacing:-0.025em;margin:0 0 26px;text-wrap:balance"
            )}
          >
            {t(
              "The financial back office behind Mexico's growing companies.",
              "La infraestructura financiera detrás de las empresas mexicanas."
            )}
          </h1>
          <p
            style={css(
              "font-size:19px;line-height:1.55;color:#5A6577;max-width:540px;margin:0 0 36px;text-wrap:pretty"
            )}
          >
            {t(
              "Collections, credit, accounting, tax, technology and advertising — run by one team, measured on one scorecard, audited to international standards.",
              "Cobranza, crédito, contabilidad, impuestos, tecnología y publicidad — operados por un solo equipo, medidos con los mismos indicadores y auditados con estándares internacionales."
            )}
          </p>
          <div style={css("display:flex;gap:12px;flex-wrap:wrap")}>
            <Box
              onClick={go("/contact")}
              s="background:#2440FF;color:#fff;padding:15px 26px;border-radius:999px;font-size:15px;font-weight:600;cursor:pointer"
              hover="background:#0C1524"
            >
              {t("Request an assessment", "Solicitar diagnóstico")}
            </Box>
            <Box
              onClick={go("/collections")}
              s="border:1px solid rgba(12,21,36,0.18);color:#0C1524;padding:15px 26px;border-radius:999px;font-size:15px;font-weight:600;cursor:pointer"
              hover="background:#fff"
            >
              {t("See collections results", "Ver resultados de cobranza")}
            </Box>
          </div>
        </div>

        <div style={css("background:#0C1524;border-radius:24px;padding:clamp(22px,2.6vw,30px);color:#F6F4EF")}>
          <div style={css("display:flex;align-items:baseline;justify-content:space-between;margin-bottom:22px")}>
            <span style={css("font-size:12px;font-weight:600;letter-spacing:0.12em;color:rgba(246,244,239,0.55)")}>
              {t("PORTFOLIO UNDER MANAGEMENT", "CARTERA GESTIONADA")}
            </span>
            <span style={css("font-size:11px;color:rgba(246,244,239,0.4)")}>
              {t("Illustrative", "Ilustrativo")}
            </span>
          </div>
          <div style={css("font-family:'Instrument Serif',serif;font-size:clamp(34px,4.6vw,58px);line-height:1;margin-bottom:6px")}>
            $1.84B <span style={css("font-size:22px;color:rgba(246,244,239,0.5)")}>MXN</span>
          </div>
          <div style={css("font-size:13.5px;color:#7BE3B4;font-weight:600;margin-bottom:30px")}>
            {t("+18.4% year over year", "+18.4% año contra año")}
          </div>
          <div
            style={css(
              "display:flex;align-items:flex-end;gap:9px;height:132px;padding-bottom:12px;border-bottom:1px solid rgba(246,244,239,0.14)"
            )}
          >
            {["44%", "52%", "48%", "63%", "71%", "66%"].map((h, i) => (
              <div
                key={i}
                style={{ ...css("flex:1;border-radius:5px 5px 0 0"), height: h, background: "rgba(246,244,239,0.16)" }}
              />
            ))}
            <div style={{ ...css("flex:1;border-radius:5px 5px 0 0"), height: "82%", background: "#2440FF" }} />
            <div style={{ ...css("flex:1;border-radius:5px 5px 0 0"), height: "94%", background: "#2440FF" }} />
          </div>
          <div style={css("display:flex;justify-content:space-between;font-size:10.5px;color:rgba(246,244,239,0.45);margin-top:10px;letter-spacing:0.06em")}>
            {["Q1", "Q2", "Q3", "Q4", "Q1", "Q2", "Q3", "Q4"].map((q, i) => (
              <span key={i}>{q}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section style={css("border-top:1px solid rgba(12,21,36,0.10);border-bottom:1px solid rgba(12,21,36,0.10);background:#fff")}>
        <div className="ftl-stats">
          {[
            { n: "21", suf: "yrs", en: "Operating across Mexico and LATAM", es: "Operando en México y LATAM" },
            { n: "680", suf: "+", en: "Corporate and SMB clients", es: "Clientes corporativos y PyME" },
            { n: "94", suf: "%", en: "Annual client retention", es: "Retención anual de clientes" },
            { n: "9", suf: "", en: "Countries with active operations", es: "Países con operación activa" },
          ].map((s, i) => (
            <div key={i} className="ftl-stat">
              <div style={css("font-family:'Instrument Serif',serif;font-size:clamp(30px,3.2vw,42px);line-height:1;margin-bottom:10px")}>
                {s.n}
                {s.suf && <span style={css("color:#2440FF")}>{s.suf}</span>}
              </div>
              <div style={css("font-size:13px;line-height:1.45;color:#5A6577")}>{t(s.en, s.es)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BUSINESS UNITS ===== */}
      <section style={css("max-width:1440px;margin:0 auto;padding:clamp(44px,6vw,88px) var(--gutter)")}>
        <div style={css("display:flex;align-items:flex-end;justify-content:space-between;gap:clamp(24px,4vw,40px);flex-wrap:wrap;margin-bottom:44px")}>
          <div>
            <div style={css("font-size:12px;font-weight:700;letter-spacing:0.14em;color:#2440FF;margin-bottom:14px")}>
              {t("BUSINESS UNITS", "UNIDADES DE NEGOCIO")}
            </div>
            <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(30px,3.8vw,48px);line-height:1.05;letter-spacing:-0.02em;margin:0;max-width:640px")}>
              {t(
                "Five specialities you'd normally hire five vendors for.",
                "Cinco especialidades que normalmente contratas por separado."
              )}
            </h2>
          </div>
          <p style={css("font-size:15px;line-height:1.6;color:#5A6577;max-width:320px;margin:0")}>
            {t(
              "They share data, governance and reporting — which is why the result lands on a single dashboard.",
              "Comparten datos, gobierno y reporteo — por eso el resultado se ve en un solo tablero."
            )}
          </p>
        </div>

        <div style={css("display:grid;grid-template-columns:var(--g3);gap:16px")}>
          <Box
            onClick={go("/collections")}
            s="grid-column:var(--span2);background:#0C1524;color:#F6F4EF;border-radius:20px;padding:clamp(24px,3vw,38px);cursor:pointer;display:flex;flex-direction:column;justify-content:space-between;min-height:260px"
          >
            <div>
              <div style={css("font-size:11.5px;font-weight:700;letter-spacing:0.14em;color:#7BE3B4;margin-bottom:16px")}>
                01 — C&amp;C
              </div>
              <h3 style={css("font-family:'Instrument Serif',serif;font-size:34px;line-height:1.1;margin:0 0 12px")}>
                {t("Collections & credit services", "Cobranza y crédito")}
              </h3>
              <p style={css("font-size:15px;line-height:1.6;color:rgba(246,244,239,0.66);margin:0;max-width:460px")}>
                {t(
                  "Early-stage, extrajudicial and legal recovery, with portfolio scoring and omnichannel contact.",
                  "Recuperación temprana, extrajudicial y jurídica, con scoring de cartera y contacto omnicanal."
                )}
              </p>
            </div>
            <div style={css("display:flex;gap:36px;margin-top:32px")}>
              <div>
                <div style={css("font-family:'Instrument Serif',serif;font-size:32px;line-height:1")}>72%</div>
                <div style={css("font-size:11.5px;color:rgba(246,244,239,0.5)")}>
                  {t("Recovery, 0–90 days", "Recuperación 0–90 días")}
                </div>
              </div>
              <div>
                <div style={css("font-family:'Instrument Serif',serif;font-size:32px;line-height:1")}>14d</div>
                <div style={css("font-size:11.5px;color:rgba(246,244,239,0.5)")}>
                  {t("Avg. days to first payment", "Promedio de primer pago")}
                </div>
              </div>
            </div>
          </Box>

          <Box
            onClick={go("/fintech")}
            s="background:#fff;border:1px solid rgba(12,21,36,0.10);border-radius:20px;padding:clamp(22px,2.6vw,32px);cursor:pointer;min-height:260px"
            hover="border:1px solid #2440FF"
          >
            <div style={css("font-size:11.5px;font-weight:700;letter-spacing:0.14em;color:#2440FF;margin-bottom:16px")}>02 — FINTECH</div>
            <h3 style={css("font-family:'Instrument Serif',serif;font-size:28px;line-height:1.12;margin:0 0 12px")}>
              {t("Financial technologies", "Tecnología financiera")}
            </h3>
            <p style={css("font-size:14.5px;line-height:1.6;color:#5A6577;margin:0")}>
              {t(
                "Collections, reconciliation and payment platforms wired into your ERP and local banking rails.",
                "Plataformas de cobranza, conciliación y pagos, integradas a tu ERP y a la banca local."
              )}
            </p>
          </Box>

          <Box
            onClick={go("/accounting")}
            s="background:#fff;border:1px solid rgba(12,21,36,0.10);border-radius:20px;padding:clamp(22px,2.6vw,32px);cursor:pointer;min-height:230px"
            hover="border:1px solid #2440FF"
          >
            <div style={css("font-size:11.5px;font-weight:700;letter-spacing:0.14em;color:#2440FF;margin-bottom:16px")}>03 — ACCOUNTING</div>
            <h3 style={css("font-family:'Instrument Serif',serif;font-size:28px;line-height:1.12;margin:0 0 12px")}>
              {t("Accounting & tax services", "Contabilidad e impuestos")}
            </h3>
            <p style={css("font-size:14.5px;line-height:1.6;color:#5A6577;margin:0")}>
              {t(
                "Monthly bookkeeping, SAT compliance, payroll and tax defence.",
                "Contabilidad mensual, cumplimiento SAT, nómina y defensa fiscal."
              )}
            </p>
          </Box>

          <Box
            onClick={go("/international")}
            s="background:#fff;border:1px solid rgba(12,21,36,0.10);border-radius:20px;padding:clamp(22px,2.6vw,32px);cursor:pointer;min-height:230px"
            hover="border:1px solid #2440FF"
          >
            <div style={css("font-size:11.5px;font-weight:700;letter-spacing:0.14em;color:#2440FF;margin-bottom:16px")}>04 — INTERNATIONAL</div>
            <h3 style={css("font-family:'Instrument Serif',serif;font-size:28px;line-height:1.12;margin:0 0 12px")}>
              {t("International operations", "Operación internacional")}
            </h3>
            <p style={css("font-size:14.5px;line-height:1.6;color:#5A6577;margin:0")}>
              {t(
                "Entity setup, transfers, cross-border compliance and recovery in nine countries.",
                "Constitución de entidades, transferencias, cumplimiento transfronterizo y cobranza en nueve países."
              )}
            </p>
          </Box>

          <Box
            onClick={go("/advertising")}
            s="background:#E9EBFF;border:1px solid rgba(36,64,255,0.16);border-radius:20px;padding:clamp(22px,2.6vw,32px);cursor:pointer;min-height:230px"
            hover="background:#DEE2FF"
          >
            <div style={css("font-size:11.5px;font-weight:700;letter-spacing:0.14em;color:#2440FF;margin-bottom:16px")}>05 — ADVERTISING</div>
            <h3 style={css("font-family:'Instrument Serif',serif;font-size:28px;line-height:1.12;margin:0 0 12px")}>
              {t("Advertising & brand", "Publicidad y marca")}
            </h3>
            <p style={css("font-size:14.5px;line-height:1.6;color:#5A6577;margin:0")}>
              {t(
                "Customer acquisition for financial services, measured through to collected revenue.",
                "Adquisición de clientes para servicios financieros, con medición hasta el ingreso cobrado."
              )}
            </p>
          </Box>
        </div>
      </section>

      {/* ===== METRICS ===== */}
      {showMetrics && <HomeMetrics />}

      {/* ===== HOW WE WORK ===== */}
      <section style={css("max-width:1440px;margin:0 auto;padding:clamp(44px,6vw,88px) var(--gutter)")}>
        <div style={css("font-size:12px;font-weight:700;letter-spacing:0.14em;color:#2440FF;margin-bottom:14px")}>
          {t("HOW WE WORK", "CÓMO TRABAJAMOS")}
        </div>
        <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(30px,3.8vw,48px);line-height:1.05;letter-spacing:-0.02em;margin:0 0 48px;max-width:600px")}>
          {t("Four weeks from assessment to live operation.", "Cuatro semanas del diagnóstico a la operación.")}
        </h2>
        <div className="ftl-steps">
          {[
            { n: "01", en: "Assessment", es: "Diagnóstico", de: "We review your portfolio, accounting processes and tax obligations, and hand back a measurable baseline.", ds: "Revisamos cartera, procesos contables y obligaciones fiscales. Entregamos una línea base medible." },
            { n: "02", en: "Operating design", es: "Diseño de operación", de: "We set SLAs, governance, escalation paths and the dashboard you'll hold us to.", ds: "Definimos SLAs, gobierno, escalamientos y el tablero con el que nos vas a medir." },
            { n: "03", en: "Integration", es: "Integración", de: "We connect ERP, CRM and banks, and migrate historical data without pausing collections.", ds: "Conectamos ERP, CRM y bancos. Migramos datos históricos sin detener la cobranza." },
            { n: "04", en: "Run & review", es: "Operación y revisión", de: "Weekly reporting, a monthly committee and quarterly target resets.", ds: "Reporte semanal, comité mensual y ajuste trimestral de metas." },
          ].map((s, i) => (
            <div key={i} className="ftl-step">
              <div style={css("font-family:'Instrument Serif',serif;font-size:34px;color:#2440FF;line-height:1;margin-bottom:14px")}>{s.n}</div>
              <h3 style={css("font-size:17px;font-weight:700;margin:0 0 10px")}>{t(s.en, s.es)}</h3>
              <p style={css("font-size:14px;line-height:1.6;color:#5A6577;margin:0")}>{t(s.de, s.ds)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section style={css("max-width:1440px;margin:0 auto;padding:0 var(--gutter) 96px")}>
        <div style={css("background:#E9EBFF;border:1px solid rgba(36,64,255,0.16);border-radius:24px;padding:clamp(28px,4vw,56px);display:grid;grid-template-columns:var(--g32);gap:clamp(32px,4vw,56px);align-items:center")}>
          <div>
            <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-0.02em;margin:0 0 16px")}>
              {t("Start with the portfolio you already have.", "Empecemos con tu cartera actual.")}
            </h2>
            <p style={css("font-size:16.5px;line-height:1.6;color:#41506B;margin:0 0 28px;max-width:480px")}>
              {t(
                "Send an anonymised extract and we'll return a recovery projection within five business days.",
                "Envíanos un extracto anonimizado y te devolvemos una proyección de recuperación en cinco días hábiles."
              )}
            </p>
            <Box
              onClick={go("/contact")}
              s="display:inline-block;background:#0C1524;color:#F6F4EF;padding:15px 28px;border-radius:999px;font-size:15px;font-weight:600;cursor:pointer"
              hover="background:#2440FF"
            >
              {t("Register my company", "Registrar mi empresa")}
            </Box>
          </div>
          <div style={css("display:flex;flex-direction:column;gap:14px")}>
            {[
              { en: "Recovery projection by ageing bucket", es: "Proyección de recuperación por tramo de antigüedad" },
              { en: "Cost comparison against your in-house operation", es: "Comparativo de costo contra tu operación interna" },
              { en: "Tax and compliance risk review", es: "Revisión de riesgo fiscal y de cumplimiento" },
              { en: "No cost, no obligation to sign", es: "Sin costo y sin compromiso de contratación" },
            ].map((r, i) => (
              <div key={i} style={css("display:flex;gap:12px;align-items:flex-start")}>
                <span style={css("color:#2440FF;font-weight:700")}>→</span>
                <span style={css("font-size:14.5px;line-height:1.5;color:#41506B")}>{t(r.en, r.es)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function HomeMetrics() {
  const t = useT();
  return (
    <section style={css("background:#fff;border-top:1px solid rgba(12,21,36,0.10);border-bottom:1px solid rgba(12,21,36,0.10)")}>
      <div style={css("max-width:1440px;margin:0 auto;padding:clamp(44px,6vw,88px) var(--gutter)")}>
        <div style={css("display:flex;align-items:flex-end;justify-content:space-between;gap:clamp(24px,4vw,40px);flex-wrap:wrap;margin-bottom:44px")}>
          <div>
            <div style={css("font-size:12px;font-weight:700;letter-spacing:0.14em;color:#2440FF;margin-bottom:14px")}>
              {t("PERFORMANCE", "DESEMPEÑO")}
            </div>
            <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(30px,3.8vw,48px);line-height:1.05;letter-spacing:-0.02em;margin:0;max-width:600px")}>
              {t("What an average client sees in twelve months.", "Lo que un cliente promedio ve en doce meses.")}
            </h2>
          </div>
          <div style={css("font-size:12px;color:#8A93A3;max-width:230px;line-height:1.5")}>
            {t(
              "Illustrative benchmark data. Results vary by portfolio type and sector.",
              "Datos ilustrativos de referencia. Los resultados varían por tipo de cartera y sector."
            )}
          </div>
        </div>

        <div style={css("display:grid;grid-template-columns:var(--g32);gap:16px;margin-bottom:16px")}>
          <div style={css("border:1px solid rgba(12,21,36,0.10);border-radius:20px;padding:clamp(22px,2.6vw,30px)")}>
            <div style={css("display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px")}>
              <h3 style={css("font-size:16px;font-weight:700;margin:0")}>
                {t("Collections recovered per month", "Cobranza recuperada por mes")}
              </h3>
              <span style={css("font-size:12px;color:#8A93A3")}>MXN M</span>
            </div>
            <p style={css("font-size:13px;color:#5A6577;margin:0 0 22px")}>
              {t("Managed portfolio vs. sector average", "Cartera gestionada contra promedio del sector")}
            </p>
            <svg viewBox="0 0 640 240" style={css("width:100%;height:240px;display:block")} preserveAspectRatio="none">
              {[20, 75, 130, 185].map((y) => (
                <line key={y} x1="0" y1={y} x2="640" y2={y} stroke="rgba(12,21,36,0.07)" strokeWidth="1" />
              ))}
              <line x1="0" y1="220" x2="640" y2="220" stroke="rgba(12,21,36,0.16)" strokeWidth="1" />
              <polygon
                points="0,196 58,188 116,178 174,164 232,150 290,132 348,124 406,104 464,88 522,72 580,54 640,38 640,220 0,220"
                fill="rgba(36,64,255,0.10)"
              />
              <polyline
                points="0,196 58,188 116,178 174,164 232,150 290,132 348,124 406,104 464,88 522,72 580,54 640,38"
                fill="none"
                stroke="#2440FF"
                strokeWidth="2.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <polyline
                points="0,202 58,199 116,196 174,196 232,190 290,188 348,186 406,182 464,180 522,176 580,172 640,168"
                fill="none"
                stroke="#8A93A3"
                strokeWidth="2"
                strokeDasharray="5 5"
                strokeLinecap="round"
              />
            </svg>
            <div style={css("display:flex;justify-content:space-between;font-size:11px;color:#8A93A3;margin-top:10px")}>
              {["JAN", "MAR", "MAY", "JUL", "SEP", "NOV"].map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
            <div style={css("display:flex;flex-wrap:wrap;gap:12px 20px;margin-top:18px;padding-top:16px;border-top:1px solid rgba(12,21,36,0.08)")}>
              <div style={css("display:flex;align-items:center;gap:8px;font-size:12.5px;color:#0C1524")}>
                <span style={css("width:14px;height:3px;background:#2440FF;border-radius:2px")} />
                {t("Financetech-managed", "Cartera Financetech")}
              </div>
              <div style={css("display:flex;align-items:center;gap:8px;font-size:12.5px;color:#5A6577")}>
                <span style={css("width:14px;height:3px;background:#8A93A3;border-radius:2px")} />
                {t("Sector average", "Promedio del sector")}
              </div>
            </div>
          </div>

          <div style={css("border:1px solid rgba(12,21,36,0.10);border-radius:20px;padding:clamp(22px,2.6vw,30px);display:flex;flex-direction:column")}>
            <h3 style={css("font-size:16px;font-weight:700;margin:0 0 4px")}>{t("Client retention", "Retención de clientes")}</h3>
            <p style={css("font-size:13px;color:#5A6577;margin:0 0 20px")}>{t("Contracts renewed, 2025", "Contratos renovados, 2025")}</p>
            <div style={css("display:flex;align-items:center;justify-content:center;flex:1;position:relative")}>
              <svg viewBox="0 0 120 120" style={css("width:190px;height:190px;transform:rotate(-90deg)")}>
                <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(12,21,36,0.09)" strokeWidth="14" />
                <circle cx="60" cy="60" r="50" fill="none" stroke="#2440FF" strokeWidth="14" strokeDasharray="295 314" strokeLinecap="round" />
              </svg>
              <div style={css("position:absolute;text-align:center")}>
                <div style={css("font-family:'Instrument Serif',serif;font-size:clamp(28px,3.6vw,44px);line-height:1")}>94%</div>
                <div style={css("font-size:11.5px;color:#5A6577")}>{t("renewed", "renovaron")}</div>
              </div>
            </div>
            <div className="ftl-metric-pair">
              <div>
                <div style={css("font-size:20px;font-weight:700")}>+112</div>
                <div style={css("font-size:11.5px;color:#5A6577")}>{t("New clients", "Nuevos clientes")}</div>
              </div>
              <div>
                <div style={css("font-size:20px;font-weight:700")}>
                  4.6<span style={css("font-size:13px;color:#8A93A3")}>yrs</span>
                </div>
                <div style={css("font-size:11.5px;color:#5A6577")}>{t("Avg. tenure", "Antigüedad media")}</div>
              </div>
            </div>
          </div>
        </div>

        <div style={css("display:grid;grid-template-columns:var(--g3);gap:16px")}>
          {/* Recovery by age */}
          <div style={css("border:1px solid rgba(12,21,36,0.10);border-radius:20px;padding:clamp(22px,2.6vw,30px)")}>
            <h3 style={css("font-size:16px;font-weight:700;margin:0 0 4px")}>{t("Recovery rate by portfolio age", "Tasa de recuperación por antigüedad")}</h3>
            <p style={css("font-size:13px;color:#5A6577;margin:0 0 24px")}>{t("Share of balance recovered", "Porcentaje del saldo recuperado")}</p>
            <div style={css("display:flex;flex-direction:column;gap:16px")}>
              {[
                { en: "0–30 days", es: "0–30 días", v: 86, c: "#2440FF" },
                { en: "31–90 days", es: "31–90 días", v: 72, c: "#2440FF" },
                { en: "91–180 days", es: "91–180 días", v: 54, c: "#4C63FF" },
                { en: "181–360 days", es: "181–360 días", v: 37, c: "#8494FF" },
                { en: "360+ days", es: "Más de 360 días", v: 19, c: "#B3BDFF" },
              ].map((r, i) => (
                <div key={i}>
                  <div style={css("display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:6px")}>
                    <span>{t(r.en, r.es)}</span>
                    <span style={css("font-weight:700")}>{r.v}%</span>
                  </div>
                  <div style={css("height:8px;background:rgba(12,21,36,0.08);border-radius:999px;overflow:hidden")}>
                    <div style={{ ...css("height:100%;border-radius:999px"), width: `${r.v}%`, background: r.c }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cost per function */}
          <div style={css("border:1px solid rgba(12,21,36,0.10);border-radius:20px;padding:clamp(22px,2.6vw,30px)")}>
            <h3 style={css("font-size:16px;font-weight:700;margin:0 0 4px")}>{t("Cost per finance function", "Costo por función financiera")}</h3>
            <p style={css("font-size:13px;color:#5A6577;margin:0 0 24px")}>{t("In-house team vs. outsourced operation", "Equipo interno contra operación tercerizada")}</p>
            <div style={css("display:flex;align-items:flex-end;gap:22px;height:170px;border-bottom:1px solid rgba(12,21,36,0.12);padding:0 8px")}>
              {[
                { n: "100", h: 150, c: "rgba(12,21,36,0.14)", col: "#0C1524" },
                { n: "68", h: 102, c: "#2440FF", col: "#2440FF" },
                { n: "59", h: 88, c: "#0E7A57", col: "#0E7A57" },
              ].map((b, i) => (
                <div key={i} style={css("flex:1;display:flex;flex-direction:column;align-items:center;gap:8px")}>
                  <span style={{ ...css("font-size:13px;font-weight:700"), color: b.col }}>{b.n}</span>
                  <div style={{ ...css("width:100%;border-radius:8px 8px 0 0"), height: b.h, background: b.c }} />
                </div>
              ))}
            </div>
            <div style={css("display:flex;gap:22px;padding:12px 8px 0;font-size:11.5px;color:#5A6577;text-align:center")}>
              <span style={css("flex:1")}>{t("In-house", "Interno")}</span>
              <span style={css("flex:1")}>{t("Year 1 with us", "Año 1")}</span>
              <span style={css("flex:1")}>{t("Year 2 with us", "Año 2")}</span>
            </div>
            <p style={css("font-size:12.5px;color:#5A6577;margin:18px 0 0;line-height:1.5")}>
              {t(
                "Base 100 = fully loaded in-house cost, including payroll, licences and audit.",
                "Base 100 = costo total interno, incluyendo nómina, licencias y auditoría."
              )}
            </p>
          </div>

          {/* Efficiency dark */}
          <div style={css("background:#0C1524;color:#F6F4EF;border-radius:20px;padding:clamp(22px,2.6vw,30px);display:flex;flex-direction:column;gap:18px")}>
            <h3 style={css("font-size:16px;font-weight:700;margin:0")}>{t("Process efficiency", "Eficiencia operativa")}</h3>
            <div style={css("display:flex;flex-direction:column;gap:16px;flex:1")}>
              {[
                { en: "Monthly close", es: "Cierre contable mensual", v: "5d", last: false },
                { en: "Auto-reconciled entries", es: "Conciliación automatizada", v: "91%", last: false },
                { en: "Portfolio contact rate", es: "Contactabilidad de cartera", v: "78%", last: false },
                { en: "Audit findings", es: "Hallazgos en auditoría", v: "0", last: true },
              ].map((r, i) => (
                <div
                  key={i}
                  style={css(
                    "display:flex;justify-content:space-between;align-items:baseline" +
                      (r.last ? "" : ";padding-bottom:16px;border-bottom:1px solid rgba(246,244,239,0.14)")
                  )}
                >
                  <span style={css("font-size:13px;color:rgba(246,244,239,0.66)")}>{t(r.en, r.es)}</span>
                  <span style={css("font-family:'Instrument Serif',serif;font-size:28px")}>{r.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

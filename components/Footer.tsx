"use client";

import Link from "next/link";
import { Box } from "@/components/Box";
import { css } from "@/lib/css";
import { useT } from "@/lib/i18n";

function FootLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Box
      as="span"
      s="cursor:pointer;color:rgba(246,244,239,0.8)"
      hover="color:#ffffff"
    >
      <Link href={href} style={{ color: "inherit" }}>
        {children}
      </Link>
    </Box>
  );
}

export function Footer() {
  const t = useT();
  return (
    <footer style={css("background:#0C1524;color:#F6F4EF")}>
      <div
        style={css(
          "max-width:1440px;margin:0 auto;padding:clamp(40px,5vw,64px) var(--gutter) 32px;display:grid;grid-template-columns:var(--gFooter);gap:clamp(24px,4vw,40px)"
        )}
      >
        <div>
          <div style={css("display:flex;align-items:center;gap:12px;margin-bottom:18px")}>
            <div
              style={css(
                "width:34px;height:34px;border-radius:9px;background:#F6F4EF;display:grid;place-items:center;color:#0C1524;font-family:'Instrument Serif',serif;font-size:19px;line-height:1"
              )}
            >
              F
            </div>
            <div style={css("display:flex;flex-direction:column;line-height:1.05")}>
              <span style={css("font-size:15px;font-weight:700")}>Financetech</span>
              <span style={css("font-size:10px;font-weight:600;letter-spacing:0.18em;color:rgba(246,244,239,0.55)")}>
                LATAM
              </span>
            </div>
          </div>
          <p style={css("font-size:14px;line-height:1.6;color:rgba(246,244,239,0.55);margin:0;max-width:290px")}>
            {t(
              "Collections, credit, accounting, technology and advertising for companies across Mexico and Latin America.",
              "Cobranza, crédito, contabilidad, tecnología y publicidad para empresas en México y Latinoamérica."
            )}
          </p>
        </div>

        <div>
          <div style={css("font-size:11.5px;font-weight:700;letter-spacing:0.12em;color:rgba(246,244,239,0.45);margin-bottom:16px")}>
            {t("SERVICES", "SERVICIOS")}
          </div>
          <div style={css("display:flex;flex-direction:column;gap:10px;font-size:14px")}>
            <FootLink href="/collections">{t("Collections & credit", "Cobranza y crédito")}</FootLink>
            <FootLink href="/fintech">{t("Financial technologies", "Tecnología financiera")}</FootLink>
            <FootLink href="/accounting">{t("Accounting & tax", "Contabilidad e impuestos")}</FootLink>
            <FootLink href="/advertising">{t("Advertising", "Publicidad")}</FootLink>
          </div>
        </div>

        <div>
          <div style={css("font-size:11.5px;font-weight:700;letter-spacing:0.12em;color:rgba(246,244,239,0.45);margin-bottom:16px")}>
            {t("COMPANY", "EMPRESA")}
          </div>
          <div style={css("display:flex;flex-direction:column;gap:10px;font-size:14px")}>
            <FootLink href="/about">{t("About us", "Nosotros")}</FootLink>
            <FootLink href="/blog">{t("Insights", "Insights")}</FootLink>
            <FootLink href="/international">{t("International operations", "Operación internacional")}</FootLink>
            <FootLink href="/contact">{t("Register", "Registro")}</FootLink>
          </div>
        </div>

        <div>
          <div style={css("font-size:11.5px;font-weight:700;letter-spacing:0.12em;color:rgba(246,244,239,0.45);margin-bottom:16px")}>
            {t("CONTACT", "CONTACTO")}
          </div>
          <div style={css("display:flex;flex-direction:column;gap:10px;font-size:14px;color:rgba(246,244,239,0.8)")}>
            <span>+52 55 1234 5678</span>
            <span>contacto@financetechlatam.com</span>
            <span>Ciudad de México</span>
          </div>
        </div>
      </div>

      <div style={css("max-width:1440px;margin:0 auto;padding:0 var(--gutter) 40px")}>
        <div
          style={css(
            "border-top:1px solid rgba(246,244,239,0.14);padding-top:22px;display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;font-size:12.5px;color:rgba(246,244,239,0.45)"
          )}
        >
          <span>
            © 2026 Financetech LATAM. {t("All rights reserved.", "Todos los derechos reservados.")}
          </span>
          <span>{t("Privacy notice · Terms · CONDUSEF", "Aviso de privacidad · Términos · CONDUSEF")}</span>
        </div>
      </div>
    </footer>
  );
}

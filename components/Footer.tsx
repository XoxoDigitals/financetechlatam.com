"use client";

import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { Box } from "@/components/Box";
import { css } from "@/lib/css";
import { useT } from "@/lib/i18n";
import {
  SITE_ADDRESS_LINE1,
  SITE_ADDRESS_LINE2,
  SITE_EIN,
  SITE_EMAIL,
  SITE_INSTAGRAM,
  SITE_INSTAGRAM_URL,
  SITE_LEGAL,
  SITE_PHONE,
  SITE_PHONE_TEL,
} from "@/lib/site";

function FootLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Box as="span" s="cursor:pointer;color:rgba(246,244,239,0.8)" hover="color:#ffffff">
      <Link href={href} style={{ color: "inherit" }}>
        {children}
      </Link>
    </Box>
  );
}

export function Footer() {
  const t = useT();
  return (
    <footer style={css("background:#2A1B4A;color:#F6F4EF")}>
      <div
        style={css(
          "max-width:1440px;margin:0 auto;padding:clamp(40px,5vw,64px) var(--gutter) 32px;display:grid;grid-template-columns:var(--gFooter);gap:clamp(24px,4vw,40px)"
        )}
      >
        <div>
          <div style={css("margin-bottom:18px")}>
            <BrandLogo />
          </div>
          <p
            style={css(
              "font-size:14px;line-height:1.6;color:rgba(246,244,239,0.55);margin:0;max-width:290px"
            )}
          >
            {t(
              "Business & finance consulting and AI-powered content & avatars — one brand, two clear paths to grow.",
              "Consultoría de negocio y finanzas, y contenido e avatares con IA — una marca, dos caminos claros para crecer."
            )}
          </p>
        </div>

        <div>
          <div
            style={css(
              "font-size:11.5px;font-weight:700;letter-spacing:0.12em;color:rgba(246,244,239,0.45);margin-bottom:16px"
            )}
          >
            {t("SERVICES", "SERVICIOS")}
          </div>
          <div style={css("display:flex;flex-direction:column;gap:10px;font-size:14px")}>
            <FootLink href="/consulting">
              {t("Business & Finance Consulting", "Consultoría de negocio y finanzas")}
            </FootLink>
            <FootLink href="/ai-content">
              {t("AI Content & Avatars", "Contenido IA y avatares")}
            </FootLink>
            <FootLink href="/how-we-work">{t("How we work", "Cómo trabajamos")}</FootLink>
            <FootLink href="/who-we-help">{t("Who we help", "A quién ayudamos")}</FootLink>
          </div>
        </div>

        <div>
          <div
            style={css(
              "font-size:11.5px;font-weight:700;letter-spacing:0.12em;color:rgba(246,244,239,0.45);margin-bottom:16px"
            )}
          >
            {t("COMPANY", "EMPRESA")}
          </div>
          <div style={css("display:flex;flex-direction:column;gap:10px;font-size:14px")}>
            <FootLink href="/about">{t("About us", "Nosotros")}</FootLink>
            <FootLink href="/team">{t("Team", "Equipo")}</FootLink>
            <FootLink href="/results">{t("Results", "Resultados")}</FootLink>
            <FootLink href="/faq">{t("FAQ", "FAQ")}</FootLink>
            <FootLink href="/blog">{t("Insights", "Insights")}</FootLink>
            <FootLink href="/contact">{t("Contact", "Contacto")}</FootLink>
          </div>
        </div>

        <div>
          <div
            style={css(
              "font-size:11.5px;font-weight:700;letter-spacing:0.12em;color:rgba(246,244,239,0.45);margin-bottom:16px"
            )}
          >
            {t("CONTACT", "CONTACTO")}
          </div>
          <div
            style={css(
              "display:flex;flex-direction:column;gap:10px;font-size:14px;color:rgba(246,244,239,0.8)"
            )}
          >
            <a href={`tel:${SITE_PHONE_TEL}`} style={{ color: "inherit" }}>
              {SITE_PHONE}
            </a>
            <a href={`mailto:${SITE_EMAIL}`} style={{ color: "inherit" }}>
              {SITE_EMAIL}
            </a>
            <span>
              {SITE_ADDRESS_LINE1}
              <br />
              {SITE_ADDRESS_LINE2}
            </span>
            <a
              href={SITE_INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#EEE419" }}
            >
              Instagram @{SITE_INSTAGRAM}
            </a>
          </div>
        </div>
      </div>

      <div style={css("max-width:1440px;margin:0 auto;padding:0 var(--gutter) 40px")}>
        <div
          style={css(
            "border-top:1px solid rgba(246,244,239,0.14);padding-top:22px;display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;font-size:12.5px;color:rgba(246,244,239,0.45)"
          )}
        >
          <span style={css("display:flex;flex-direction:column;gap:4px")}>
            <span>
              © 2026 {SITE_LEGAL}. {t("All rights reserved.", "Todos los derechos reservados.")}
            </span>
            <span>EIN {SITE_EIN}</span>
          </span>
          <span style={css("display:flex;gap:12px;flex-wrap:wrap")}>
            <FootLink href="/privacy">{t("Privacy notice", "Aviso de privacidad")}</FootLink>
            <span aria-hidden>·</span>
            <FootLink href="/terms">{t("Terms", "Términos")}</FootLink>
            <span aria-hidden>·</span>
            <FootLink href="/compliance">{t("Compliance", "Cumplimiento")}</FootLink>
          </span>
        </div>
      </div>
    </footer>
  );
}

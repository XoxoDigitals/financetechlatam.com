export const SITE_NAME = "Financetech LATAM";
export const SITE_LEGAL = "Financetech LATAM";
export const SITE_TAGLINE =
  "Collections, credit, accounting, tax, technology and advertising for companies across Mexico and Latin America.";
export const SITE_TAGLINE_ES =
  "Cobranza, crédito, contabilidad, impuestos, tecnología y publicidad para empresas en México y Latinoamérica.";

export function siteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || "https://www.financetechlatam.com").replace(/\/$/, "");
}

export function absUrl(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl()}${p}`;
}

export const SITE_NAME = "Financetech Group";
export const SITE_LEGAL = "FINANCETECH GROUP LLC";
export const SITE_EIN = "32-0866683";
export const SITE_EMAIL = "contact@financetechgroup.com";
export const SITE_PHONE = "+1 (307) 888-8475";
export const SITE_PHONE_TEL = "+13078888475";
export const SITE_WHATSAPP = "13078888475";
export const SITE_ADDRESS_LINE1 = "30 N Gould St 59020";
export const SITE_ADDRESS_LINE2 = "Sheridan, WY 82801";
export const SITE_INSTAGRAM = "financetech.group";
export const SITE_INSTAGRAM_URL = "https://www.instagram.com/financetech.group/";
export const SITE_DOMAIN = "financetechgroup.com";

export const SITE_TAGLINE =
  "Business & finance consulting and AI-powered content & digital avatars — one brand, two clear paths to grow.";
export const SITE_TAGLINE_ES =
  "Consultoría de negocio y finanzas, y contenido e avatares digitales con IA — una marca, dos caminos claros para crecer.";

export function siteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || "https://www.financetechgroup.com").replace(
    /\/$/,
    ""
  );
}

export function absUrl(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl()}${p}`;
}

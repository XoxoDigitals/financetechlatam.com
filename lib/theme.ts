// Brand tokens pulled from the Financetech LATAM design.
export const color = {
  paper: "#F6F4EF",
  ink: "#0C1524",
  blue: "#2440FF",
  blueSoft: "#E9EBFF",
  blueSofter: "#DEE2FF",
  slate: "#5A6577",
  slate2: "#41506B",
  muted: "#8A93A3",
  mint: "#7BE3B4",
  green: "#0E7A57",
  greenSoft: "#E7F6EF",
};

export const font = {
  sans: "'Instrument Sans', system-ui, sans-serif",
  serif: "'Instrument Serif', serif",
};

// The eight in-app "routes" of the original single-page design, mapped to real
// Next.js paths.
export const NAV = [
  { path: "/", en: "Home", es: "Inicio" },
  { path: "/about", en: "About us", es: "Nosotros" },
  { path: "/advertising", en: "Advertising", es: "Publicidad" },
  { path: "/fintech", en: "Financial technologies", es: "Tecnología financiera" },
  { path: "/accounting", en: "Accounting & tax", es: "Contabilidad e impuestos" },
  { path: "/collections", en: "C&C services", es: "Cobranza y crédito" },
  { path: "/international", en: "International", es: "Operación internacional" },
  { path: "/blog", en: "Insights", es: "Insights" },
] as const;

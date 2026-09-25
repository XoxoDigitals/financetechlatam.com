// Brand tokens from FINANCETECH GROUP logo (purple + yellow) + dual-line accents.
export const color = {
  paper: "#F6F4EF",
  ink: "#2A1B4A",
  blue: "#2440FF",
  blueSoft: "#E9EBFF",
  blueSofter: "#DEE2FF",
  slate: "#5A6577",
  slate2: "#41506B",
  muted: "#8A93A3",
  mint: "#7BE3B4",
  green: "#0E7A57",
  greenSoft: "#E7F6EF",
  /** Logo purple / yellow */
  brandPurple: "#2A1B4A",
  brandYellow: "#EEE419",
  /** Consulting accent */
  gold: "#C9A227",
  goldSoft: "#F7F0D9",
  /** AI Content accent */
  teal: "#1E8A8A",
  tealSoft: "#E4F4F4",
  white: "#FFFFFF",
  graphite: "#222344",
};

export const font = {
  sans: "'Instrument Sans', system-ui, sans-serif",
  serif: "'Instrument Serif', serif",
};

/** Primary header navigation */
export const NAV = [
  { path: "/", en: "Home", es: "Inicio" },
  { path: "/about", en: "About us", es: "Nosotros" },
  { path: "/consulting", en: "Consulting", es: "Consultoría" },
  { path: "/ai-content", en: "AI Content", es: "Contenido IA" },
  { path: "/how-we-work", en: "How we work", es: "Método" },
  { path: "/results", en: "Results", es: "Resultados" },
  { path: "/blog", en: "Insights", es: "Insights" },
] as const;

/** Secondary links used in footer / page CTAs */
export const SECONDARY_NAV = [
  { path: "/who-we-help", en: "Who we help", es: "A quién ayudamos" },
  { path: "/team", en: "Team", es: "Equipo" },
  { path: "/faq", en: "FAQ", es: "FAQ" },
  { path: "/contact", en: "Contact", es: "Contacto" },
] as const;

export const CLIENT_LOGOS = [
  { src: "/images/logo-rebus.png", alt: "rebus" },
  { src: "/images/logo-grupo-fame.png", alt: "Grupo FAME" },
  { src: "/images/logo-collectio.png", alt: "Collectio" },
  { src: "/images/logo-mega.png", alt: "Mega" },
  { src: "/images/logo-finveris.png", alt: "Finveris" },
] as const;

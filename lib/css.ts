import type { CSSProperties } from "react";

/**
 * Parse a plain CSS declaration string ("display:flex;gap:12px") into a React
 * style object. This lets the page components keep the design's original inline
 * styles verbatim instead of hand-converting every rule to camelCase.
 */
export function css(input: string): CSSProperties {
  const style: Record<string, string> = {};
  for (const rule of input.split(";")) {
    const idx = rule.indexOf(":");
    if (idx === -1) continue;
    const prop = rule.slice(0, idx).trim();
    const value = rule.slice(idx + 1).trim();
    if (!prop || !value) continue;
    // -webkit-font-smoothing -> WebkitFontSmoothing, grid-template-columns -> gridTemplateColumns
    const camel = prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    style[camel] = value;
  }
  return style as CSSProperties;
}

/** Merge several CSS strings / style objects into one style object. */
export function sx(...parts: Array<string | CSSProperties | false | undefined | null>): CSSProperties {
  let out: CSSProperties = {};
  for (const p of parts) {
    if (!p) continue;
    out = { ...out, ...(typeof p === "string" ? css(p) : p) };
  }
  return out;
}

"use client";

import Link from "next/link";
import { css } from "@/lib/css";
import { useT } from "@/lib/i18n";
import type { PostRow } from "@/lib/types";
import { readingMinutes } from "@/lib/markdown";

export function BlogIndex({ posts }: { posts: PostRow[] }) {
  const t = useT();
  return (
    <div>
      <section
        style={css(
          "max-width:1440px;margin:0 auto;padding:clamp(44px,6vw,88px) var(--gutter) clamp(32px,4.5vw,64px);border-bottom:1px solid rgba(12,21,36,0.10)"
        )}
      >
        <div style={css("font-size:12px;font-weight:700;letter-spacing:0.14em;color:#2440FF;margin-bottom:18px")}>
          {t("INSIGHTS", "INSIGHTS")}
        </div>
        <h1
          style={css(
            "font-family:'Instrument Serif',serif;font-size:clamp(36px,5.4vw,66px);line-height:1;letter-spacing:-0.025em;margin:0 0 24px;max-width:900px"
          )}
        >
          {t(
            "Operating notes for collections, credit and finance in Mexico.",
            "Notas de operación para cobranza, crédito y finanzas en México."
          )}
        </h1>
        <p style={css("font-size:19px;line-height:1.55;color:#5A6577;max-width:720px;margin:0")}>
          {t(
            "Written so a CFO, a credit manager, or a language model citing our pages gets the same facts: CONDUSEF, CFDI, ageing buckets, and how an operating partner is actually briefed.",
            "Escrito para que un CFO, un gerente de crédito o un modelo que cite nuestras páginas reciba los mismos hechos: CONDUSEF, CFDI, tramos de antigüedad y cómo se briefea a un socio operador."
          )}
        </p>
      </section>
      <section style={css("max-width:1440px;margin:0 auto;padding:clamp(36px,5vw,72px) var(--gutter) 96px")}>
        {posts.length === 0 && (
          <p style={css("color:#5A6577;max-width:560px")}>
            {t(
              "The first articles are scheduled to go live from 6 September 2026, one every other day. Check back then, or browse the operating units in the meantime.",
              "Los primeros artículos se publican desde el 6 de septiembre de 2026, uno cada dos días. Mientras tanto, recorre las unidades de operación."
            )}
          </p>
        )}
        <div style={css("display:grid;grid-template-columns:var(--g2);gap:16px")}>
          {posts.map((p) => (
            <Link
              key={p.id}
              href={`/blog/${p.slug}`}
              style={css(
                "display:block;background:#fff;border:1px solid rgba(12,21,36,0.10);border-radius:20px;padding:28px;color:inherit"
              )}
            >
              <div style={css("font-size:12px;font-weight:700;letter-spacing:0.1em;color:#2440FF;margin-bottom:12px")}>
                {p.category} · {readingMinutes(p.content_en)} min
              </div>
              <h2
                style={css(
                  "font-family:'Instrument Serif',serif;font-size:clamp(24px,3vw,32px);line-height:1.12;margin:0 0 12px;color:#0C1524"
                )}
              >
                {t(p.title_en, p.title_es)}
              </h2>
              <p style={css("font-size:15px;line-height:1.55;color:#5A6577;margin:0")}>
                {t(p.excerpt_en, p.excerpt_es)}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

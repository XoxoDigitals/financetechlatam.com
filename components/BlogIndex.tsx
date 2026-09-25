"use client";

import Link from "next/link";
import { ImageSlot } from "@/components/ImageSlot";
import { CtaBand, Eyebrow, SectionShell } from "@/components/sections";
import { css } from "@/lib/css";
import { color } from "@/lib/theme";
import { useT } from "@/lib/i18n";
import type { PostRow } from "@/lib/types";
import { readingMinutes } from "@/lib/markdown";

export function BlogIndex({ posts }: { posts: PostRow[] }) {
  const t = useT();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div>
      {/* 1. Hero */}
      <SectionShell>
        <Eyebrow accent="ink">{t("INSIGHTS", "INSIGHTS")}</Eyebrow>
        <h1
          style={css(
            "font-family:'Instrument Serif',serif;font-size:clamp(36px,5.4vw,66px);line-height:1;letter-spacing:-0.025em;margin:0 0 24px;max-width:900px"
          )}
        >
          {t(
            "Notes on structure, finance, and AI-powered content.",
            "Notas sobre estructura, finanzas y contenido impulsado por IA."
          )}
        </h1>
        <p style={css("font-size:19px;line-height:1.55;color:#5A6577;max-width:720px;margin:0")}>
          {t(
            "Practical writing for founders and operators choosing between stronger foundations and scalable marketing systems — or both.",
            "Escritura práctica para fundadores y operadores que eligen entre bases más sólidas y sistemas de marketing escalables — o ambos."
          )}
        </p>
      </SectionShell>

      {/* 2. Featured */}
      {featured ? (
        <SectionShell accentBg="#EEEEE8">
          <div
            style={css(
              "display:grid;grid-template-columns:var(--gHero);gap:24px;align-items:center"
            )}
          >
            <div style={css("position:relative;min-height:240px;border-radius:18px;overflow:hidden")}>
              <ImageSlot id="blog-featured" src="/images/hero-desk-charts.jpg" alt="" />
            </div>
            <div>
              <div style={css("font-size:12px;font-weight:700;letter-spacing:0.1em;color:#C9A227;margin-bottom:10px")}>
                {t("FEATURED", "DESTACADO")} · {featured.category}
              </div>
              <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(24px,3vw,36px);margin:0 0 12px")}>
                <Link href={`/blog/${featured.slug}`} style={{ color: "inherit" }}>
                  {t(featured.title_en, featured.title_es)}
                </Link>
              </h2>
              <p style={css("margin:0;color:#5A6577;line-height:1.55")}>
                {t(featured.excerpt_en, featured.excerpt_es)}
              </p>
            </div>
          </div>
        </SectionShell>
      ) : null}

      {/* 3. Grid */}
      <SectionShell>
        <h2 style={css("font-family:'Instrument Serif',serif;font-size:28px;margin:0 0 22px")}>
          {t("All insights", "Todos los insights")}
        </h2>
        <div style={css("display:grid;grid-template-columns:var(--g2);gap:16px")}>
          {(rest.length ? rest : posts).map((p) => (
            <Link
              key={p.id}
              href={`/blog/${p.slug}`}
              style={css(
                "display:block;background:#fff;border:1px solid rgba(12,21,36,0.10);border-radius:20px;padding:28px;color:inherit"
              )}
            >
              <div style={css("font-size:12px;font-weight:700;letter-spacing:0.1em;color:#1E8A8A;margin-bottom:12px")}>
                {p.category} · {readingMinutes(p.content_en)} min
              </div>
              <h2
                style={css(
                  "font-family:'Instrument Serif',serif;font-size:clamp(22px,2.8vw,30px);line-height:1.12;margin:0 0 12px;color:#0C1524"
                )}
              >
                {t(p.title_en, p.title_es)}
              </h2>
              <p style={css("font-size:15px;line-height:1.55;color:#5A6577;margin:0")}>
                {t(p.excerpt_en, p.excerpt_es)}
              </p>
            </Link>
          ))}
          {!posts.length ? (
            <p style={css("color:#5A6577")}>
              {t("No posts yet — check back soon.", "Aún no hay publicaciones — vuelve pronto.")}
            </p>
          ) : null}
        </div>
      </SectionShell>

      {/* 4. Topics */}
      <SectionShell accentBg={color.goldSoft}>
        <h2 style={css("font-family:'Instrument Serif',serif;font-size:24px;margin:0 0 12px")}>
          {t("Topics", "Temas")}
        </h2>
        <div style={css("display:flex;flex-wrap:wrap;gap:10px")}>
          {[
            t("Organizational structure", "Estructura organizacional"),
            t("Financial clarity", "Claridad financiera"),
            t("AI avatars", "Avatares IA"),
            t("Content automation", "Automatización de contenido"),
          ].map((label) => (
            <span
              key={label}
              style={css(
                "padding:8px 14px;border-radius:999px;background:#fff;font-size:13px;font-weight:600;border:1px solid rgba(12,21,36,0.1)"
              )}
            >
              {label}
            </span>
          ))}
        </div>
      </SectionShell>

      {/* 5. Newsletter CTA */}
      <SectionShell accentBg={color.tealSoft}>
        <h2 style={css("font-family:'Instrument Serif',serif;font-size:28px;margin:0 0 10px")}>
          {t("Want updates?", "¿Quieres actualizaciones?")}
        </h2>
        <p style={css("margin:0 0 14px;color:#5A6577")}>
          {t(
            "Book a consultation and ask to be added to our insights list.",
            "Agenda una consulta y pide unirte a la lista de insights."
          )}
        </p>
        <Link href="/contact" style={css("font-weight:700;color:#1E8A8A")}>
          {t("Contact us →", "Contáctanos →")}
        </Link>
      </SectionShell>

      {/* 6. Related services */}
      <SectionShell>
        <h2 style={css("font-family:'Instrument Serif',serif;font-size:28px;margin:0 0 16px")}>
          {t("Related services", "Servicios relacionados")}
        </h2>
        <div style={css("display:flex;gap:20px;flex-wrap:wrap")}>
          <Link href="/consulting" style={css("font-weight:700;color:#C9A227")}>
            {t("Consulting →", "Consultoría →")}
          </Link>
          <Link href="/ai-content" style={css("font-weight:700;color:#1E8A8A")}>
            {t("AI Content →", "Contenido IA →")}
          </Link>
        </div>
      </SectionShell>

      {/* 7. FAQ link */}
      <SectionShell accentBg="#EEEEE8">
        <Link href="/faq" style={css("font-weight:700;color:#0C1524")}>
          {t("Read the FAQ →", "Leer el FAQ →")}
        </Link>
      </SectionShell>

      {/* 8. Contact CTA */}
      <CtaBand accent="ink" title={t("Ready to talk?", "¿Listo para hablar?")} />
    </div>
  );
}

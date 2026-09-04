"use client";

import Link from "next/link";
import { css } from "@/lib/css";
import { useT } from "@/lib/i18n";
import type { PostRow } from "@/lib/types";
import { readingMinutes, renderMarkdown } from "@/lib/markdown";

export function BlogArticle({ post }: { post: PostRow }) {
  const t = useT();
  const html = renderMarkdown(t(post.content_en, post.content_es));
  const faqs = post.faq || [];
  return (
    <article>
      <section
        style={css(
          "max-width:800px;margin:0 auto;padding:clamp(44px,6vw,88px) var(--gutter) 32px"
        )}
      >
        <Link href="/blog" style={css("font-size:13px;font-weight:600")}>
          ← {t("All insights", "Todos los insights")}
        </Link>
        <div style={css("font-size:12px;font-weight:700;letter-spacing:0.12em;color:#2440FF;margin:22px 0 14px")}>
          {post.category} · {readingMinutes(post.content_en)} min · {post.author}
        </div>
        <h1
          style={css(
            "font-family:'Instrument Serif',serif;font-size:clamp(34px,5vw,56px);line-height:1.05;letter-spacing:-0.03em;margin:0 0 20px"
          )}
        >
          {t(post.title_en, post.title_es)}
        </h1>
        <p style={css("font-size:19px;line-height:1.5;color:#5A6577;margin:0 0 28px")}>
          {t(post.excerpt_en, post.excerpt_es)}
        </p>
        {post.published_at && (
          <time dateTime={post.published_at} style={css("font-size:13px;color:#8A93A3")}>
            {new Date(post.published_at).toLocaleDateString()}
          </time>
        )}
      </section>
      <section style={css("max-width:800px;margin:0 auto;padding:12px var(--gutter) 48px")}>
        <div className="ftl-prose" dangerouslySetInnerHTML={{ __html: html }} />
        {faqs.length > 0 && (
          <div style={css("margin-top:48px;padding-top:28px;border-top:1px solid rgba(12,21,36,0.10)")}>
            <h2
              style={css(
                "font-family:'Instrument Serif',serif;font-size:32px;margin:0 0 20px;letter-spacing:-0.02em"
              )}
            >
              {t("Questions operators actually ask", "Preguntas que sí hacen los operadores")}
            </h2>
            {faqs.map((f, i) => (
              <div key={i} style={css("margin-bottom:22px")}>
                <h3 style={css("font-size:16px;margin:0 0 8px")}>{t(f.q_en, f.q_es)}</h3>
                <p style={css("margin:0;color:#41506B;line-height:1.6")}>{t(f.a_en, f.a_es)}</p>
              </div>
            ))}
          </div>
        )}
        <div
          style={css(
            "margin-top:48px;background:#E9EBFF;border:1px solid rgba(36,64,255,0.16);border-radius:20px;padding:28px"
          )}
        >
          <h2 style={css("font-family:'Instrument Serif',serif;font-size:28px;margin:0 0 10px")}>
            {t("Send an anonymised extract.", "Envía un extracto anonimizado.")}
          </h2>
          <p style={css("margin:0 0 18px;color:#41506B")}>
            {t(
              "We return a recovery projection within five business days. No cost, no obligation to sign.",
              "Devolvemos una proyección de recuperación en cinco días hábiles. Sin costo y sin compromiso."
            )}
          </p>
          <Link
            href="/contact"
            style={css(
              "display:inline-block;background:#0C1524;color:#F6F4EF;padding:12px 22px;border-radius:999px;font-weight:600"
            )}
          >
            {t("Register my company", "Registrar mi empresa")}
          </Link>
        </div>
      </section>
    </article>
  );
}

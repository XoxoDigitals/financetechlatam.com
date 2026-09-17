"use client";

import { css } from "@/lib/css";
import { useT } from "@/lib/i18n";

type Section = { hEn: string; hEs: string; pEn: string; pEs: string };

export function LegalDoc({
  titleEn,
  titleEs,
  effective,
  sections,
}: {
  titleEn: string;
  titleEs: string;
  effective: string;
  sections: Section[];
}) {
  const t = useT();
  return (
    <article style={css("max-width:800px;margin:0 auto;padding:clamp(44px,6vw,88px) var(--gutter) 96px")}>
      <div style={css("font-size:12px;font-weight:700;letter-spacing:0.12em;color:#1E697E;margin-bottom:14px")}>
        {t("LEGAL", "LEGAL")}
      </div>
      <h1 style={css("font-family:'Libre Baskerville',serif;font-size:clamp(30px,4vw,46px);line-height:1.12;margin:0 0 12px;color:#222344")}>
        {t(titleEn, titleEs)}
      </h1>
      <p style={css("font-size:13px;color:#9A999C;margin:0 0 36px")}>
        {t("Effective date:", "Fecha de vigencia:")} {effective} · Financetech LATAM · financetechlatam.com
      </p>
      {sections.map((s, i) => (
        <section key={i} style={css("margin-bottom:28px")}>
          <h2 style={css("font-size:17px;font-weight:700;margin:0 0 10px;color:#222344")}>{t(s.hEn, s.hEs)}</h2>
          <p style={css("font-size:15px;line-height:1.65;color:#5A6577;margin:0")}>{t(s.pEn, s.pEs)}</p>
        </section>
      ))}
    </article>
  );
}

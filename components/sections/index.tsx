"use client";

import Link from "next/link";
import { Box } from "@/components/Box";
import { ImageSlot } from "@/components/ImageSlot";
import { css } from "@/lib/css";
import { color, CLIENT_LOGOS } from "@/lib/theme";
import { useT } from "@/lib/i18n";

export function SectionShell({
  children,
  dark,
  accentBg,
  id,
}: {
  children: React.ReactNode;
  dark?: boolean;
  accentBg?: string;
  id?: string;
}) {
  const bg = accentBg || (dark ? color.ink : color.paper);
  const fg = dark ? color.paper : color.ink;
  return (
    <section
      id={id}
      style={{
        ...css("padding:clamp(48px,7vw,96px) var(--gutter)"),
        background: bg,
        color: fg,
      }}
    >
      <div style={css("max-width:1440px;margin:0 auto")}>{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  accent = "gold",
}: {
  children: React.ReactNode;
  accent?: "gold" | "teal" | "ink";
}) {
  const c =
    accent === "gold" ? color.gold : accent === "teal" ? color.teal : color.ink;
  const bg =
    accent === "gold"
      ? color.goldSoft
      : accent === "teal"
        ? color.tealSoft
        : "rgba(12,21,36,0.06)";
  return (
    <div
      style={{
        ...css(
          "display:inline-flex;align-items:center;gap:8px;padding:7px 14px;border-radius:999px;font-size:12px;font-weight:600;letter-spacing:0.02em;margin-bottom:20px"
        ),
        color: c,
        background: bg,
        border: `1px solid ${c}44`,
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: c,
        }}
      />
      {children}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  accent = "ink",
  imageSrc,
  imageAlt,
  ctaHref = "/contact",
  ctaLabel,
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  accent?: "gold" | "teal" | "ink";
  imageSrc?: string;
  imageAlt?: string;
  ctaHref?: string;
  ctaLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  const t = useT();
  const accentColor =
    accent === "gold" ? color.gold : accent === "teal" ? color.teal : color.blue;
  return (
    <SectionShell>
      <div
        style={css(
          "display:grid;grid-template-columns:var(--gHero);gap:clamp(28px,4vw,56px);align-items:center"
        )}
      >
        <div className="ftl-fade-in">
          <Eyebrow accent={accent === "ink" ? "ink" : accent}>{eyebrow}</Eyebrow>
          <h1
            style={css(
              "font-family:'Instrument Serif',serif;font-size:clamp(36px,5.5vw,68px);line-height:1.02;letter-spacing:-0.025em;margin:0 0 22px;text-wrap:balance"
            )}
          >
            {title}
          </h1>
          <p
            style={css(
              "font-size:18px;line-height:1.55;color:#5A6577;max-width:540px;margin:0 0 32px;text-wrap:pretty"
            )}
          >
            {subtitle}
          </p>
          <div style={css("display:flex;gap:12px;flex-wrap:wrap")}>
            <Box
              as="span"
              s={`background:${accentColor};color:#fff;padding:15px 26px;border-radius:999px;font-size:15px;font-weight:600;cursor:pointer`}
              hover="opacity:0.92"
            >
              <Link href={ctaHref} style={{ color: "inherit", textDecoration: "none" }}>
                {ctaLabel || t("Book a Free Consultation", "Agenda una consulta gratis")}
              </Link>
            </Box>
            {secondaryHref && secondaryLabel ? (
              <Box
                as="span"
                s="border:1px solid rgba(12,21,36,0.18);color:#0C1524;padding:15px 26px;border-radius:999px;font-size:15px;font-weight:600;cursor:pointer"
                hover="background:#fff"
              >
                <Link href={secondaryHref} style={{ color: "inherit", textDecoration: "none" }}>
                  {secondaryLabel}
                </Link>
              </Box>
            ) : null}
          </div>
        </div>
        {imageSrc ? (
          <div
            className="ftl-fade-in"
            style={css(
              "position:relative;min-height:clamp(260px,42vw,460px);border-radius:24px;overflow:hidden"
            )}
          >
            <ImageSlot id="hero" src={imageSrc} alt={imageAlt || ""} />
          </div>
        ) : null}
      </div>
    </SectionShell>
  );
}

export function SplitMedia({
  eyebrow,
  title,
  body,
  bullets,
  imageSrc,
  imageAlt,
  reverse,
  accent = "gold",
  ctaHref,
  ctaLabel,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  bullets?: string[];
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean;
  accent?: "gold" | "teal";
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <SectionShell>
      <div
        style={{
          ...css(
            "display:grid;grid-template-columns:var(--gHero);gap:clamp(28px,4vw,56px);align-items:center"
          ),
          direction: reverse ? "rtl" : "ltr",
        }}
      >
        <div style={{ direction: "ltr" }}>
          {eyebrow ? <Eyebrow accent={accent}>{eyebrow}</Eyebrow> : null}
          <h2
            style={css(
              "font-family:'Instrument Serif',serif;font-size:clamp(28px,3.8vw,44px);line-height:1.08;margin:0 0 16px;text-wrap:balance"
            )}
          >
            {title}
          </h2>
          <p style={css("font-size:16.5px;line-height:1.6;color:#5A6577;margin:0 0 18px")}>
            {body}
          </p>
          {bullets?.length ? (
            <ul style={css("margin:0 0 22px;padding-left:18px;color:#41506B;line-height:1.7")}>
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          ) : null}
          {ctaHref && ctaLabel ? (
            <Box
              as="span"
              s={`display:inline-block;background:${accent === "gold" ? color.gold : color.teal};color:#fff;padding:12px 22px;border-radius:999px;font-size:14px;font-weight:600;cursor:pointer`}
              hover="opacity:0.92"
            >
              <Link href={ctaHref} style={{ color: "inherit", textDecoration: "none" }}>
                {ctaLabel}
              </Link>
            </Box>
          ) : null}
        </div>
        <div
          style={{
            ...css("position:relative;min-height:clamp(240px,36vw,400px);border-radius:20px;overflow:hidden"),
            direction: "ltr",
          }}
        >
          <ImageSlot id="split" src={imageSrc} alt={imageAlt || ""} />
        </div>
      </div>
    </SectionShell>
  );
}

export function ServiceGrid({
  title,
  subtitle,
  items,
  accent = "gold",
}: {
  title: string;
  subtitle?: string;
  items: { title: string; body: string; bullets?: string[] }[];
  accent?: "gold" | "teal";
}) {
  const c = accent === "gold" ? color.gold : color.teal;
  return (
    <SectionShell>
      <div style={css("max-width:720px;margin:0 auto 40px;text-align:center")}>
        <h2
          style={css(
            "font-family:'Instrument Serif',serif;font-size:clamp(28px,3.8vw,44px);line-height:1.08;margin:0 0 14px"
          )}
        >
          {title}
        </h2>
        {subtitle ? (
          <p style={css("font-size:16.5px;line-height:1.55;color:#5A6577;margin:0")}>{subtitle}</p>
        ) : null}
      </div>
      <div
        style={css(
          "display:grid;grid-template-columns:var(--g2);gap:20px"
        )}
      >
        {items.map((item, i) => (
          <div
            key={item.title}
            className="ftl-card-rise"
            style={{
              ...css("padding:28px 26px;border-radius:18px;background:#fff"),
              border: "1px solid rgba(12,21,36,0.08)",
              animationDelay: `${i * 60}ms`,
            }}
          >
            <div
              style={{
                width: 36,
                height: 4,
                borderRadius: 2,
                background: c,
                marginBottom: 16,
              }}
            />
            <h3 style={css("font-size:20px;font-weight:700;margin:0 0 10px")}>{item.title}</h3>
            <p style={css("font-size:15px;line-height:1.55;color:#5A6577;margin:0 0 12px")}>
              {item.body}
            </p>
            {item.bullets?.length ? (
              <ul style={css("margin:0;padding-left:18px;color:#41506B;font-size:14px;line-height:1.65")}>
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export function MethodSteps({
  title,
  subtitle,
  steps,
  accent = "gold",
}: {
  title: string;
  subtitle?: string;
  steps: { n: string; title: string; body: string }[];
  accent?: "gold" | "teal" | "ink";
}) {
  const c =
    accent === "gold" ? color.gold : accent === "teal" ? color.teal : color.ink;
  return (
    <SectionShell>
      <div style={css("max-width:720px;margin:0 0 36px")}>
        <h2
          style={css(
            "font-family:'Instrument Serif',serif;font-size:clamp(28px,3.8vw,44px);line-height:1.08;margin:0 0 12px"
          )}
        >
          {title}
        </h2>
        {subtitle ? (
          <p style={css("font-size:16px;line-height:1.55;color:#5A6577;margin:0")}>{subtitle}</p>
        ) : null}
      </div>
      <div style={css("display:grid;grid-template-columns:var(--g4);gap:18px")}>
        {steps.map((s) => (
          <div
            key={s.n}
            style={css(
              "padding:22px 20px;border-radius:16px;background:#fff;border:1px solid rgba(12,21,36,0.08)"
            )}
          >
            <div
              style={{
                ...css(
                  "font-family:'Instrument Serif',serif;font-size:28px;margin-bottom:10px"
                ),
                color: c,
              }}
            >
              {s.n}
            </div>
            <h3 style={css("font-size:16px;font-weight:700;margin:0 0 8px")}>{s.title}</h3>
            <p style={css("font-size:14px;line-height:1.55;color:#5A6577;margin:0")}>{s.body}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export function LogoStrip({ title }: { title: string }) {
  return (
    <SectionShell accentBg="#EEEEE8">
      <div style={css("text-align:center;margin-bottom:28px")}>
        <h2
          style={css(
            "font-size:13px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#5A6577;margin:0"
          )}
        >
          {title}
        </h2>
      </div>
      <div
        style={css(
          "display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:clamp(24px,4vw,48px)"
        )}
      >
        {CLIENT_LOGOS.map((l) => (
          <div
            key={l.alt}
            style={css(
              "position:relative;height:40px;width:120px;opacity:0.85;filter:grayscale(0.2)"
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={l.src}
              alt={l.alt}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export function MetricBand({
  items,
  dark,
}: {
  items: { value: string; label: string }[];
  dark?: boolean;
}) {
  return (
    <SectionShell dark={dark} accentBg={dark ? color.ink : color.goldSoft}>
      <div style={css("display:grid;grid-template-columns:var(--g4);gap:20px")}>
        {items.map((m) => (
          <div key={m.label} style={css("text-align:center")}>
            <div
              style={css(
                "font-family:'Instrument Serif',serif;font-size:clamp(32px,4vw,48px);line-height:1;margin-bottom:8px"
              )}
            >
              {m.value}
            </div>
            <div
              style={{
                ...css("font-size:13.5px;font-weight:600"),
                color: dark ? "rgba(246,244,239,0.65)" : color.slate,
              }}
            >
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export function FaqAccordion({
  title,
  items,
  accent = "gold",
}: {
  title: string;
  items: { q: string; a: string }[];
  accent?: "gold" | "teal";
}) {
  const c = accent === "gold" ? color.gold : color.teal;
  return (
    <SectionShell>
      <h2
        style={css(
          "font-family:'Instrument Serif',serif;font-size:clamp(28px,3.8vw,40px);margin:0 0 28px"
        )}
      >
        {title}
      </h2>
      <div style={css("display:flex;flex-direction:column;gap:12px;max-width:900px")}>
        {items.map((item) => (
          <details
            key={item.q}
            style={{
              ...css("padding:18px 20px;border-radius:14px;background:#fff"),
              border: "1px solid rgba(12,21,36,0.08)",
            }}
          >
            <summary
              style={{
                ...css("cursor:pointer;font-weight:700;font-size:15.5px;list-style:none"),
                color: color.ink,
              }}
            >
              <span style={{ color: c, marginRight: 10 }}>Q</span>
              {item.q}
            </summary>
            <p style={css("margin:12px 0 0;font-size:15px;line-height:1.6;color:#5A6577")}>
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}

export function CtaBand({
  title,
  body,
  href = "/contact",
  label,
  accent = "gold",
}: {
  title: string;
  body?: string;
  href?: string;
  label?: string;
  accent?: "gold" | "teal" | "ink";
}) {
  const t = useT();
  const bg =
    accent === "gold" ? color.gold : accent === "teal" ? color.teal : color.ink;
  return (
    <SectionShell accentBg={bg}>
      <div
        style={css(
          "display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:24px"
        )}
      >
        <div style={css("max-width:640px;color:#fff")}>
          <h2
            style={css(
              "font-family:'Instrument Serif',serif;font-size:clamp(28px,3.6vw,42px);line-height:1.1;margin:0 0 10px"
            )}
          >
            {title}
          </h2>
          {body ? (
            <p style={css("font-size:16px;line-height:1.55;margin:0;opacity:0.92")}>{body}</p>
          ) : null}
        </div>
        <Box
          as="span"
          s="background:#fff;color:#0C1524;padding:15px 26px;border-radius:999px;font-size:15px;font-weight:700;cursor:pointer"
          hover="opacity:0.94"
        >
          <Link href={href} style={{ color: "inherit", textDecoration: "none" }}>
            {label || t("Book a Free Consultation", "Agenda una consulta gratis")}
          </Link>
        </Box>
      </div>
    </SectionShell>
  );
}

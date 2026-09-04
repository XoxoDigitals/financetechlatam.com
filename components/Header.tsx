"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box } from "@/components/Box";
import { css } from "@/lib/css";
import { NAV } from "@/lib/theme";
import { useLang, useT } from "@/lib/i18n";

function pill(active: boolean) {
  return active
    ? "padding:6px 11px;border-radius:999px;background:#0C1524;color:#F6F4EF"
    : "padding:6px 11px;border-radius:999px;background:transparent;color:#8A93A3";
}

export function Header() {
  const pathname = usePathname();
  const { lang, toggle } = useLang();
  const t = useT();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      style={css(
        "position:sticky;top:0;z-index:50;background:rgba(246,244,239,0.92);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid rgba(12,21,36,0.10)"
      )}
    >
      <div
        style={css(
          "position:relative;z-index:70;max-width:1440px;margin:0 auto;padding:10px var(--gutter);min-height:64px;display:flex;align-items:center;justify-content:space-between;gap:12px"
        )}
      >
        {/* Logo */}
        <Link href="/" style={css("display:flex;align-items:center;gap:12px;flex:0 0 auto")}>
          <div
            style={css(
              "width:34px;height:34px;border-radius:9px;background:#0C1524;display:grid;place-items:center;color:#F6F4EF;font-family:'Instrument Serif',serif;font-size:19px;line-height:1"
            )}
          >
            F
          </div>
          <div style={css("display:flex;flex-direction:column;line-height:1.05")}>
            <span style={css("font-size:15px;font-weight:700;letter-spacing:-0.01em;color:#0C1524")}>
              Financetech
            </span>
            <span style={css("font-size:10px;font-weight:600;letter-spacing:0.18em;color:#5A6577")}>
              LATAM
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav
          className="ftl-nav-desktop"
          style={css("align-items:center;gap:2px;flex:1 1 auto;justify-content:center;flex-wrap:wrap")}
        >
          {NAV.map((item) => {
            const active =
              item.path === "/"
                ? pathname === "/"
                : pathname === item.path || pathname.startsWith(item.path + "/");
            return (
              <Box
                key={item.path}
                as="span"
                s="position:relative;padding:8px 12px;font-size:13.5px;font-weight:500;color:#0C1524;border-radius:8px"
                hover="background:rgba(12,21,36,0.06)"
              >
                <Link href={item.path} style={{ color: "inherit" }}>
                  {t(item.en, item.es)}
                </Link>
                {active && (
                  <div
                    style={css(
                      "position:absolute;left:12px;right:12px;bottom:0;height:2px;background:#2440FF;border-radius:2px"
                    )}
                  />
                )}
              </Box>
            );
          })}
        </nav>

        {/* Right cluster */}
        <div style={css("display:flex;align-items:center;gap:8px;flex:0 0 auto")}>
          <div
            onClick={toggle}
            role="button"
            aria-label="Toggle language"
            style={css(
              "display:flex;align-items:center;border:1px solid rgba(12,21,36,0.16);border-radius:999px;padding:3px;font-size:11.5px;font-weight:700;letter-spacing:0.04em;cursor:pointer;user-select:none"
            )}
          >
            <span style={css(pill(lang === "en"))}>EN</span>
            <span style={css(pill(lang === "es"))}>ES</span>
          </div>

          <Box
            as="span"
            className="ftl-cta-desktop"
            s="background:#0C1524;color:#F6F4EF;padding:11px 18px;border-radius:999px;font-size:13.5px;font-weight:600;cursor:pointer"
            hover="background:#2440FF"
          >
            <Link href="/contact" style={{ color: "inherit" }}>
              {t("Register", "Registro")}
            </Link>
          </Box>

          {/* Hamburger (mobile only) */}
          <button
            className="ftl-nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            style={css(
              "width:42px;height:42px;align-items:center;justify-content:center;border:1px solid rgba(12,21,36,0.16);border-radius:11px;background:transparent;cursor:pointer;color:#0C1524;padding:0"
            )}
          >
            <span style={css("position:relative;display:block;width:18px;height:14px")}>
              <span style={barStyle(open, "top")} />
              <span style={barStyle(open, "mid")} />
              <span style={barStyle(open, "bot")} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            style={css(
              "position:absolute;left:0;right:0;top:100%;height:100vh;background:rgba(12,21,36,0.35);z-index:40"
            )}
          />
          <div
            style={css(
              "position:absolute;left:0;right:0;top:100%;z-index:60;background:#F6F4EF;border-bottom:1px solid rgba(12,21,36,0.12);box-shadow:0 18px 40px rgba(12,21,36,0.16);padding:10px var(--gutter) 20px"
            )}
          >
            <nav style={css("display:flex;flex-direction:column;padding:6px 0")}>
              {NAV.map((item) => {
                const active =
                  item.path === "/"
                    ? pathname === "/"
                    : pathname === item.path || pathname.startsWith(item.path + "/");
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setOpen(false)}
                    style={css(
                      "display:flex;align-items:center;justify-content:space-between;padding:14px 6px;font-size:16px;font-weight:600;border-bottom:1px solid rgba(12,21,36,0.08);color:" +
                        (active ? "#2440FF" : "#0C1524")
                    )}
                  >
                    <span>{t(item.en, item.es)}</span>
                    {active && (
                      <span style={css("width:7px;height:7px;border-radius:50%;background:#2440FF")} />
                    )}
                  </Link>
                );
              })}
            </nav>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              style={css(
                "display:block;margin-top:16px;text-align:center;background:#0C1524;color:#F6F4EF;padding:15px;border-radius:12px;font-size:15px;font-weight:600"
              )}
            >
              {t("Register", "Registro")}
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

function barStyle(open: boolean, which: "top" | "mid" | "bot") {
  const base =
    "position:absolute;left:0;width:18px;height:2px;background:#0C1524;border-radius:2px;transition:transform 0.2s ease,opacity 0.2s ease,top 0.2s ease";
  if (which === "top")
    return css(base + (open ? ";top:6px;transform:rotate(45deg)" : ";top:0"));
  if (which === "mid")
    return css(base + ";top:6px" + (open ? ";opacity:0" : ";opacity:1"));
  return css(base + (open ? ";top:6px;transform:rotate(-45deg)" : ";top:12px"));
}

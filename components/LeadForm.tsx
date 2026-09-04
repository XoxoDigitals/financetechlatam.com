"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { css } from "@/lib/css";
import { useLang, useT } from "@/lib/i18n";
import { submitLead } from "@/lib/submitLead";
import type { BusinessUnit, LeadSource } from "@/lib/leadSchema";

const FIELD =
  "width:100%;padding:13px 14px;border:1px solid rgba(12,21,36,0.16);border-radius:10px;font-size:14.5px;background:#F6F4EF;color:#0C1524;outline:none";
const LABEL =
  "display:block;font-size:12.5px;font-weight:600;color:#5A6577;margin-bottom:7px";

function chipStyle(on: boolean) {
  return (
    "font-size:13px;padding:9px 14px;border-radius:999px;cursor:pointer;font-weight:600;border:1px solid " +
    (on
      ? "#2440FF;background:#2440FF;color:#fff"
      : "rgba(12,21,36,0.16);background:#F6F4EF;color:#41506B")
  );
}

type Values = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  budget: string;
  units: Record<BusinessUnit, boolean>;
};

const EMPTY_UNITS: Record<BusinessUnit, boolean> = {
  collections: false,
  fintech: false,
  accounting: false,
  international: false,
  advertising: false,
};

export function LeadForm({
  variant,
}: {
  variant: "about" | "register";
}) {
  const t = useT();
  const { lang } = useLang();
  const pathname = usePathname();

  const [v, setV] = useState<Values>({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    budget: "Menos de $10M MXN",
    units: { ...EMPTY_UNITS },
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (k: keyof Values) => (e: React.ChangeEvent<any>) =>
    setV((s) => ({ ...s, [k]: e.target.value }));

  const toggleUnit = (k: BusinessUnit) =>
    setV((s) => ({ ...s, units: { ...s.units, [k]: !s.units[k] } }));

  const source: LeadSource = variant === "about" ? "about-contact" : "register";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg("");

    const units = (Object.keys(v.units) as BusinessUnit[]).filter((k) => v.units[k]);
    const res = await submitLead(
      source,
      {
        fullName: v.fullName,
        company: v.company,
        email: v.email,
        phone: v.phone,
        message: v.message,
        units: variant === "register" ? units : [],
        budget: variant === "register" ? v.budget : null,
      },
      { locale: lang, page: pathname }
    );

    if (res.ok) {
      setStatus("sent");
    } else {
      setStatus("error");
      setErrorMsg(res.error || t("Something went wrong.", "Algo salió mal."));
    }
  }

  const UNIT_LABELS: { key: BusinessUnit; en: string; es: string }[] = [
    { key: "collections", en: "Collections & credit", es: "Cobranza y crédito" },
    { key: "fintech", en: "Financial technologies", es: "Tecnología financiera" },
    { key: "accounting", en: "Accounting & tax", es: "Contabilidad e impuestos" },
    { key: "international", en: "International", es: "Operación internacional" },
    { key: "advertising", en: "Advertising", es: "Publicidad" },
  ];

  return (
    <form onSubmit={onSubmit}>
      <div style={css("display:grid;grid-template-columns:var(--g2);gap:16px;margin-bottom:16px")}>
        <div>
          <label style={css(LABEL)}>{t("Full name", "Nombre")}</label>
          <input
            required
            type="text"
            value={v.fullName}
            onChange={set("fullName")}
            placeholder="Ana Martínez"
            style={css(FIELD)}
          />
        </div>
        <div>
          <label style={css(LABEL)}>{t("Company", "Empresa")}</label>
          <input
            type="text"
            value={v.company}
            onChange={set("company")}
            placeholder="Grupo Ejemplo, S.A."
            style={css(FIELD)}
          />
        </div>
      </div>

      <div style={css("display:grid;grid-template-columns:var(--g2);gap:16px;margin-bottom:16px")}>
        <div>
          <label style={css(LABEL)}>{t("Work email", "Correo corporativo")}</label>
          <input
            required
            type="email"
            value={v.email}
            onChange={set("email")}
            placeholder="ana@empresa.com"
            style={css(FIELD)}
          />
        </div>
        <div>
          <label style={css(LABEL)}>{t("Phone", "Teléfono")}</label>
          <input
            type="tel"
            value={v.phone}
            onChange={set("phone")}
            placeholder="+52 55 0000 0000"
            style={css(FIELD)}
          />
        </div>
      </div>

      {variant === "register" && (
        <>
          <div style={css("margin-bottom:16px")}>
            <label style={css(LABEL)}>
              {t("Which units are you interested in?", "¿Qué unidades te interesan?")}
            </label>
            <div style={css("display:flex;flex-wrap:wrap;gap:8px")}>
              {UNIT_LABELS.map((u) => (
                <div
                  key={u.key}
                  role="button"
                  aria-pressed={v.units[u.key]}
                  onClick={() => toggleUnit(u.key)}
                  style={css(chipStyle(v.units[u.key]))}
                >
                  {t(u.en, u.es)}
                </div>
              ))}
            </div>
          </div>

          <div style={css("margin-bottom:16px")}>
            <label style={css(LABEL)}>
              {t("Portfolio size or annual revenue", "Tamaño de cartera o facturación anual")}
            </label>
            <select value={v.budget} onChange={set("budget")} style={css(FIELD)}>
              <option>Menos de $10M MXN</option>
              <option>$10M – $50M MXN</option>
              <option>$50M – $250M MXN</option>
              <option>Más de $250M MXN</option>
            </select>
          </div>
        </>
      )}

      <div style={css("margin-bottom:" + (variant === "register" ? "24px" : "22px"))}>
        <label style={css(LABEL)}>
          {variant === "register"
            ? t("Brief context", "Cuéntanos brevemente")
            : t("How can we help?", "¿Cómo podemos ayudar?")}
        </label>
        <textarea
          rows={4}
          value={v.message}
          onChange={set("message")}
          placeholder={
            variant === "register"
              ? "Cartera vencida de 18 meses en retail, 12,000 cuentas…"
              : "Cartera vencida en retail, 12,000 cuentas…"
          }
          style={css(FIELD + ";resize:vertical")}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        style={css(
          "width:100%;border:none;background:#2440FF;color:#fff;padding:15px;border-radius:12px;font-size:15px;font-weight:600;text-align:center;cursor:pointer" +
            (status === "sending" || status === "sent" ? ";opacity:0.7;cursor:default" : "")
        )}
      >
        {status === "sending"
          ? t("Sending…", "Enviando…")
          : variant === "register"
          ? t("Send registration", "Enviar registro")
          : t("Send message", "Enviar mensaje")}
      </button>

      {variant === "register" && (
        <p style={css("font-size:12px;color:#8A93A3;margin:14px 0 0;text-align:center")}>
          {t(
            "Your data is handled under Mexico's LFPDPPP. We don't share information with third parties.",
            "Tus datos se tratan conforme a la LFPDPPP. No compartimos información con terceros."
          )}
        </p>
      )}

      {status === "sent" && (
        <div
          style={css(
            "margin-top:16px;background:#E7F6EF;border:1px solid rgba(14,122,87,0.24);color:#0E7A57;border-radius:12px;padding:14px;font-size:14px;text-align:center"
          )}
        >
          {variant === "register"
            ? t(
                "Registration received. We'll be in touch within one business day.",
                "Registro recibido. Te contactamos en un día hábil."
              )
            : t(
                "Message received. We'll be in touch within one business day.",
                "Mensaje recibido. Te contactamos en un día hábil."
              )}
        </div>
      )}

      {status === "error" && (
        <div
          style={css(
            "margin-top:16px;background:#FDECEC;border:1px solid rgba(200,40,40,0.24);color:#B02525;border-radius:12px;padding:14px;font-size:14px;text-align:center"
          )}
        >
          {errorMsg}
        </div>
      )}

      {variant === "about" && (
        <p style={css("font-size:12px;color:#8A93A3;margin:14px 0 0;text-align:center")}>
          {t(
            "Your data is handled under Mexico's LFPDPPP.",
            "Tus datos se tratan conforme a la LFPDPPP."
          )}
        </p>
      )}
    </form>
  );
}

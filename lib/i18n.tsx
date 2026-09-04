"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type Lang = "en" | "es";

type LangContext = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
};

const Ctx = createContext<LangContext | null>(null);

const STORAGE_KEY = "ftl-lang";

export function LanguageProvider({
  children,
  defaultLang = "en",
}: {
  children: React.ReactNode;
  defaultLang?: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(defaultLang);

  // Restore any previous choice on mount (client only).
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") setLangState(stored);
  }, []);

  // Keep <html lang> and storage in sync.
  useEffect(() => {
    document.documentElement.lang = lang === "es" ? "es-MX" : "en";
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(
    () => setLangState((l) => (l === "es" ? "en" : "es")),
    []
  );

  return (
    <Ctx.Provider value={{ lang, setLang, toggle }}>{children}</Ctx.Provider>
  );
}

export function useLang(): LangContext {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}

/**
 * Returns a translate helper: t("English copy", "Copia en español").
 * Mirrors the design's data-es pattern where English is the source string.
 */
export function useT() {
  const { lang } = useLang();
  return useCallback((en: string, es: string) => (lang === "es" ? es : en), [
    lang,
  ]);
}

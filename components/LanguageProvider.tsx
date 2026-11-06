"use client";
import { createContext, useContext, useEffect, useState } from "react";
import en from "@/content/en.json";
import ta from "@/content/ta.json";

type Language = "en" | "ta";
const LanguageContext = createContext<{ lang: Language; setLang: (lang: Language) => void; t: typeof en }>({ lang: "en", setLang: () => {}, t: en });
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  useEffect(() => { const saved = localStorage.getItem("language"); if (saved === "ta") setLangState("ta"); }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const setLang = (next: Language) => { setLangState(next); localStorage.setItem("language", next); };
  return <LanguageContext.Provider value={{ lang, setLang, t: lang === "en" ? en : ta }}>{children}</LanguageContext.Provider>;
}
export const useLanguage = () => useContext(LanguageContext);

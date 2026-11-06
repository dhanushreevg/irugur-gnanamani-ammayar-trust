"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

export default function BackToTop() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  return visible ? <button className="back-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t.common.backTop} ↑</button> : null;
}

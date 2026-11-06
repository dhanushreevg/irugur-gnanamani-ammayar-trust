"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { contact } from "@/lib/site";
import { useLanguage } from "./LanguageProvider";

export default function FloatingActionBar() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 200);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <div className={visible ? "mobile-actions visible" : "mobile-actions"}><a href={contact.phones[0][3]}>{t.common.phone}</a><a href={contact.whatsapp}>WhatsApp</a><Link href="/donate">{t.nav.donate}</Link></div>;
}

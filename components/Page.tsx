"use client";
import { useLanguage } from "./LanguageProvider";
import Button from "./Button";
export function Page({ title, children }: { title: string; children: React.ReactNode }) { const { t } = useLanguage(); return <main id="main"><div className="page-heading"><div className="container"><p className="eyebrow">{t.siteName}</p><h1>{title}</h1></div></div>{children}</main>; }
export function Cta({ text, href = "/donate" }: { text: string; href?: string }) { const { t } = useLanguage(); return <section className="cta"><div className="container cta-inner"><h2>{text}</h2><Button href={href} variant="secondary">{t.nav.donate}</Button></div></section>; }
export function ContactBar() { return null; }

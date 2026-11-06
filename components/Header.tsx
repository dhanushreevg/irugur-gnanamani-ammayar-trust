"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import Button from "./Button";

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = [["home","/"],["about","/about"],["ourHome","/our-home"],["team","/team"],["gallery","/gallery"],["volunteer","/volunteer"],["transparency","/transparency"],["contact","/contact"]] as const;

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    document.body.classList.toggle("drawer-open", open);
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", close);
    return () => { document.body.classList.remove("drawer-open"); document.removeEventListener("keydown", close); };
  }, [open]);
  const close = () => setOpen(false);

  return <header className={scrolled ? "site-header scrolled" : "site-header"}>
    <a className="skip" href="#main">{t.common.skip}</a>
    <div className="nav-wrap">
      <Link href="/" className="brand" aria-label={t.siteName} onClick={close}><img src="/images/logo.png" alt="" /></Link>
      <nav id="primary-navigation" className={open ? "nav open" : "nav"} aria-label="Primary navigation">
        {links.map(([key, href]) => <Link className={pathname === href ? "nav-link active" : "nav-link"} key={href} href={href} onClick={close} aria-current={pathname === href ? "page" : undefined}>{t.nav[key]}</Link>)}
        <Button href="/donate">{t.nav.donate}</Button>
      </nav>
      <div className="nav-actions">
        <div className="language-switch" role="group" aria-label="Language">
          <button type="button" className={lang === "en" ? "selected" : ""} aria-pressed={lang === "en"} onClick={() => setLang("en")}>English</button>
          <button type="button" className={lang === "ta" ? "selected" : ""} aria-pressed={lang === "ta"} onClick={() => setLang("ta")}>தமிழ்</button>
        </div>
        <button className={open ? "menu-button open" : "menu-button"} type="button" aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}><span /><span /><span /></button>
      </div>
    </div>
    {open && <button className="drawer-backdrop" type="button" aria-label="Close menu" onClick={close} />}
  </header>;
}

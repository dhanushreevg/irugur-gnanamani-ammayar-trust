"use client";
import Link from "next/link";
import { contact } from "@/lib/site";
import { useLanguage } from "./LanguageProvider";
export default function Footer() {
  const { t } = useLanguage();
  return <footer className="footer"><div className="container footer-grid"><div><img className="footer-logo" src="/images/logo.png" alt="" /><h2>{t.siteName}</h2><p>{t.common.footer}</p></div><div><h3>{t.contact.title}</h3><a href={`mailto:${contact.email}`}>{contact.email}</a>{contact.phones.map((p) => <a key={p[3]} href={p[3]}>{p[2]}</a>)}</div><div><h3>{t.contact.location}</h3><a className="location-link" href={contact.mapUrl} target="_blank" rel="noreferrer" aria-label={`${contact.address} - Open in Google Maps`}>{contact.address}</a><a className="location-action" href={contact.mapUrl} target="_blank" rel="noreferrer">{t.contact.directions}</a></div><div><h3>{t.nav.home}</h3><div className="footer-links"><Link href="/about">{t.nav.about}</Link><Link href="/donate">{t.nav.donate}</Link><Link href="/privacy">{t.nav.privacy}</Link></div></div></div><p className="copyright">{t.common.copyright.replace("{year}", String(new Date().getFullYear()))}</p></footer>;
}

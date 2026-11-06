"use client";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { Cta, ContactBar } from "@/components/Page";
import Slideshow from "@/components/Slideshow";

const galleryImages = [
  "IMG_20251115_101357.jpg.jpeg", "IMG_20251115_101407.jpg.jpeg",
  "IMG_20251115_101425.jpg.jpeg", "IMG_20251205_131305.jpg.jpeg",
  "IMG_20260103_101725.jpg.jpeg", "IMG_20260809_184919.jpg.jpeg",
  "IMG-20261106-WA0007.jpg.jpeg", "IMG-20261106-WA0008.jpg.jpeg",
  "IMG-20261106-WA0009.jpg.jpeg", "IMG-20261106-WA0010.jpg.jpeg",
  "IMG-20261106-WA0011.jpg.jpeg", "IMG-20261106-WA0012.jpg.jpeg"
];

export default function Home() {
  const { t } = useLanguage();
  const slides = galleryImages.map((file) => ({
    src: `/images/gallery/${file}`,
    alt: `${t.hero.imageAlt} - ${t.gallery.slideLabel}`
  }));
  return <main id="main"><section className="hero"><div className="container hero-grid"><div><p className="eyebrow">{t.siteName}</p><h1>{t.hero.title}</h1><p className="lead">{t.hero.text}</p><div className="actions"><Link className="button" href="/donate">{t.hero.donate}</Link><Link className="button button-outline" href="/contact">{t.hero.contact}</Link></div></div><Slideshow slides={slides} label={t.gallery.slideLabel} /></div></section><section className="section"><div className="container narrow"><h2>{t.home.whoTitle}</h2><p>{t.home.whoText}</p><Link className="text-link" href="/about">{t.home.learnMore} →</Link></div></section><section className="section soft"><div className="container"><h2>{t.home.highlightsTitle}</h2><div className="card-grid three"><article className="card"><span className="icon">♥</span><h3>{t.home.care}</h3></article><article className="card"><span className="icon">⌂</span><h3>{t.home.daily}</h3></article><article className="card"><span className="icon">✚</span><h3>{t.home.support}</h3></article></div></div></section><Cta text={t.home.cta} /><section className="section"><div className="container donation-teaser"><div><h2>{t.home.donationTitle}</h2><p>{t.home.donationText}</p></div><Link className="button" href="/donate">{t.nav.donate}</Link></div></section><ContactBar /></main>;
}

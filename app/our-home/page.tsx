"use client";
import { Page } from "@/components/Page";
import { useLanguage } from "@/components/LanguageProvider";
export default function OurHome() { const { t } = useLanguage(); return <Page title={t.ourHome.title}><section className="section"><div className="container"><p className="lead">{t.ourHome.intro}</p><div className="card-grid two">{t.ourHome.sections.map((s) => <article className="card" key={s.title}><span className="icon">✦</span><h2>{s.title}</h2><p>{s.text}</p></article>)}</div><div className="photo-placeholder">Photos of life at the home · TODO CLIENT INPUT</div></div></section></Page>; }

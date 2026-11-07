"use client";
import { Page } from "@/components/Page";
import { useLanguage } from "@/components/LanguageProvider";
import { contact } from "@/lib/site";
export default function OurHome() { const { t } = useLanguage(); return <Page title={t.ourHome.title}><section className="section"><div className="container"><p className="lead">{t.ourHome.intro}</p><div className="card-grid two">{t.ourHome.sections.map((s) => <article className="card" key={s.title}><span className="icon">✦</span><h2>{s.title}</h2><p>{s.text}</p></article>)}</div><div className="visit-panel"><h2>{t.ourHome.visitTitle}</h2><p>{t.ourHome.visitText}</p><div className="actions"><a className="button" href={contact.mapUrl} target="_blank" rel="noreferrer">{t.ourHome.visitButton}</a><a className="button button-outline" href="/volunteer">{t.ourHome.joinButton}</a></div></div></div></section></Page>; }

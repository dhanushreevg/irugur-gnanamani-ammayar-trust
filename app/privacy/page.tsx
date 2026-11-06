"use client";
import { Page } from "@/components/Page";
import { useLanguage } from "@/components/LanguageProvider";
export default function Privacy() { const { t } = useLanguage(); return <Page title={t.privacy.title}><section className="section"><div className="container narrow"><p className="lead">{t.privacy.intro}</p><h2>{t.privacy.data.split(".")[0]}</h2><p>{t.privacy.data}</p><h2>{t.privacy.residents}</h2><p>{t.privacy.residentsText}</p></div></section></Page>; }

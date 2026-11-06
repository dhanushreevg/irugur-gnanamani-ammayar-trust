"use client";
import { Page } from "@/components/Page";
import { useLanguage } from "@/components/LanguageProvider";
export default function Transparency() { const { t } = useLanguage(); return <Page title={t.transparency.title}><section className="section"><div className="container narrow"><p className="lead">{t.transparency.intro}</p><div className="details"><p><b>Registration No:</b> 4/253/2025</p><p><b>Trust Darpan ID:</b> TN/2026/1032581</p><p><b>PAN:</b> AACTI5352F</p><p><b>Section:</b> 12A(a), 80(G)</p></div><h2>{t.transparency.reports}</h2><p>{t.transparency.reportsText}</p></div></section></Page>; }

"use client";
import { Page } from "@/components/Page";
import { useLanguage } from "@/components/LanguageProvider";
import { contact } from "@/lib/site";
export default function Team() { const { t } = useLanguage(); return <Page title={t.team.title}><section className="section"><div className="container card-grid four team-grid">{contact.phones.map(([role,name,phone,href], index) => <article className="card team-card" key={role}><h2>{name}</h2><p><span>{t.team.roles[index].en}</span><br /><span lang="ta">{t.team.roles[index].ta}</span></p><a className="text-link" href={href}>{t.team.call}: {phone}</a></article>)}</div></section></Page>; }

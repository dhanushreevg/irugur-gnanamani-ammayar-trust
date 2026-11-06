import Link from "next/link";

type Props = { children: React.ReactNode; href?: string; variant?: "primary" | "secondary" | "ghost"; type?: "button" | "submit"; onClick?: () => void };
export default function Button({ children, href, variant = "primary", type = "button", onClick }: Props) {
  const className = `button button-${variant}`;
  return href ? <Link className={className} href={href}>{children}</Link> : <button className={className} type={type} onClick={onClick}>{children}</button>;
}

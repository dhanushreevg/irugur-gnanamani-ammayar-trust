import Header from "./Header";
import Footer from "./Footer";
import FloatingActionBar from "./FloatingActionBar";
import BackToTop from "./BackToTop";
import { LanguageProvider } from "./LanguageProvider";
export default function Layout({ children }: { children: React.ReactNode }) { return <LanguageProvider><Header />{children}<FloatingActionBar /><BackToTop /><Footer /></LanguageProvider>; }

"use client";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Page } from "@/components/Page";
import { useLanguage } from "@/components/LanguageProvider";

const galleryImages = [
  "IMG_20251115_101357.jpg.jpeg", "IMG_20251115_101407.jpg.jpeg",
  "IMG_20251115_101425.jpg.jpeg", "IMG_20251205_131305.jpg.jpeg",
  "IMG_20260103_101725.jpg.jpeg", "IMG_20260809_184919.jpg.jpeg",
  "IMG-20261106-WA0007.jpg.jpeg", "IMG-20261106-WA0008.jpg.jpeg",
  "IMG-20261106-WA0009.jpg.jpeg", "IMG-20261106-WA0010.jpg.jpeg",
  "IMG-20261106-WA0011.jpg.jpeg", "IMG-20261106-WA0012.jpg.jpeg"
];

export default function Gallery() {
  const { t } = useLanguage();
  const [active, setActive] = useState<number | null>(null);
  const total = galleryImages.length;

  const step = useCallback((direction: number) => {
    setActive((current) => current === null ? current : (current + direction + total) % total);
  }, [total]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    document.body.classList.add("lightbox-open");
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("lightbox-open");
      document.removeEventListener("keydown", onKey);
    };
  }, [active, step]);

  const label = (index: number) => `${t.gallery.slideLabel} ${index + 1}`;

  return <Page title={t.gallery.title}>
    <section className="section">
      <div className="container">
        <p className="lead gallery-intro">{t.gallery.intro}</p>
        <div className="gallery-grid">
          {galleryImages.map((file, index) => <figure className="gallery-item" key={file}>
            <button className="gallery-button" type="button" onClick={() => setActive(index)} aria-label={label(index)}>
              <img src={`/images/gallery/${file}`} alt={label(index)} loading="lazy" />
            </button>
            <figcaption>{label(index)}</figcaption>
          </figure>)}
        </div>
      </div>
    </section>
    {active !== null && createPortal(<div className="lightbox" role="dialog" aria-modal="true" aria-label={label(active)} onClick={() => setActive(null)}>
      <button className="lightbox-close" type="button" aria-label="Close" onClick={() => setActive(null)}>×</button>
      <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
        <img src={`/images/gallery/${galleryImages[active]}`} alt={label(active)} />
        <div className="lightbox-bar">
          <button type="button" aria-label="Previous image" onClick={() => step(-1)}>‹</button>
          <span>{active + 1} / {total}</span>
          <button type="button" aria-label="Next image" onClick={() => step(1)}>›</button>
        </div>
      </div>
    </div>, document.body)}
  </Page>;
}

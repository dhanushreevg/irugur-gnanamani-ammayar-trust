"use client";

import { TouchEvent, useEffect, useState } from "react";

type Slide = { src: string; alt: string };

export default function Slideshow({ slides, label }: { slides: Slide[]; label: string }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, [paused, slides.length]);

  const touchStart = (event: TouchEvent<HTMLDivElement>) => {
    event.currentTarget.dataset.touching = "true";
    setPaused(true);
  };
  const touchEnd = (event: TouchEvent<HTMLDivElement>) => {
    delete event.currentTarget.dataset.touching;
    setPaused(false);
  };

  return <div className="slideshow" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onTouchStart={touchStart} onTouchEnd={touchEnd}>
    <div className="slide-frame" aria-live="polite">
      {slides.map((slide, index) => <img key={slide.src} className={index === active ? "slide-image active" : "slide-image"} src={slide.src} alt={slide.alt} aria-hidden={index !== active} />)}
    </div>
    <div className="slide-dots" aria-label={label}>
      {slides.map((slide, index) => <button type="button" key={slide.src} className={index === active ? "slide-dot active" : "slide-dot"} aria-label={`${label} ${index + 1}`} aria-current={index === active} onClick={() => setActive(index)} />)}
    </div>
  </div>;
}

'use client';
import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));

    const hero = document.getElementById('hero');
    const sticky = document.getElementById('sticky-cta');
    if (hero && sticky) {
      const heroIO = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) sticky.classList.remove('visible');
          else sticky.classList.add('visible');
        },
        { threshold: 0 }
      );
      heroIO.observe(hero);
    }
    return () => io.disconnect();
  }, []);
  return null;
}

'use client';
import { useEffect, useState } from 'react';

const DURATION = 24 * 60 * 60 * 1000; // 24h

export default function CountdownTimer() {
  const [time, setTime] = useState({ h: '23', m: '59', s: '59' });

  useEffect(() => {
    let endAt;
    try {
      const saved = localStorage.getItem('elyx_offer_end');
      if (saved) {
        endAt = parseInt(saved, 10);
        if (isNaN(endAt) || endAt < Date.now()) {
          endAt = Date.now() + DURATION;
          localStorage.setItem('elyx_offer_end', String(endAt));
        }
      } else {
        endAt = Date.now() + DURATION;
        localStorage.setItem('elyx_offer_end', String(endAt));
      }
    } catch {
      endAt = Date.now() + DURATION;
    }

    const tick = () => {
      const diff = Math.max(0, endAt - Date.now());
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTime({
        h: String(h).padStart(2, '0'),
        m: String(m).padStart(2, '0'),
        s: String(s).padStart(2, '0'),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const box = "flex flex-col items-center bg-ink text-ivory px-3 py-2 sm:px-4 sm:py-3 rounded-md min-w-[58px] sm:min-w-[68px]";
  return (
    <div className="flex items-center gap-2 sm:gap-3 justify-center">
      <div className={box}>
        <span className="font-display text-2xl sm:text-3xl leading-none">{time.h}</span>
        <span className="text-[9px] sm:text-[10px] uppercase tracking-widest opacity-70 mt-1">heures</span>
      </div>
      <span className="text-gold text-xl font-display">:</span>
      <div className={box}>
        <span className="font-display text-2xl sm:text-3xl leading-none">{time.m}</span>
        <span className="text-[9px] sm:text-[10px] uppercase tracking-widest opacity-70 mt-1">min</span>
      </div>
      <span className="text-gold text-xl font-display">:</span>
      <div className={box}>
        <span className="font-display text-2xl sm:text-3xl leading-none">{time.s}</span>
        <span className="text-[9px] sm:text-[10px] uppercase tracking-widest opacity-70 mt-1">sec</span>
      </div>
    </div>
  );
}

'use client';
import { useEffect, useState } from 'react';

export default function PurchaseToast({ purchases, productName, intervalMs = 6000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!purchases || purchases.length === 0) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % purchases.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [purchases, intervalMs]);

  if (!purchases || purchases.length === 0) return null;
  const item = purchases[index];

  return (
    <div className="fixed bottom-20 left-4 sm:left-6 z-40">
      <div className="bg-ink/90 text-ivory border border-gold/30 rounded-xl px-4 py-3 shadow-2xl backdrop-blur-md w-[260px]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-300 to-gold flex items-center justify-center text-ink font-medium text-sm">
            {item.initials}
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-ivory">
              {item.name} <span className="text-cream/70">· {item.city}</span>
            </p>
            <p className="text-xs text-cream/80">
              vient d’acheter <span className="text-gold-light">{productName}</span>
            </p>
            <p className="text-[11px] text-cream/50 mt-1">{item.time}</p>
          </div>
          <span className="w-2 h-2 rounded-full bg-gold-light animate-pulse" />
        </div>
      </div>
    </div>
  );
}

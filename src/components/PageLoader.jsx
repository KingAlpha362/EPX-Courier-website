import { useEffect, useState } from 'react';
import { BrandLogo } from '@/components/ui/BrandLogo';

export default function PageLoader({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = prefersReduced ? 200 : 800;

    const fadeTimer = setTimeout(() => setFadeOut(true), duration);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, duration + 400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-primary-dark transition-opacity duration-[400ms] ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <BrandLogo variant="dark" className="h-14 animate-fade-in" />
    </div>
  );
}

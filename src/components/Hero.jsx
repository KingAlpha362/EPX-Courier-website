import { useEffect, useRef } from 'react';
import { HERO } from '@/constants/images';

export default function Hero() {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="hero-section relative min-h-screen flex items-center overflow-hidden bg-primary-dark noise-overlay border-b-[3px] border-brand-gold"
    >
      <div className="absolute top-0 left-0 w-full h-[55vh] md:h-full z-0 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 hero-split-overlay z-10 pointer-events-none" />
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={HERO.backgroundMobile}
            type="image/webp"
          />
          <source
            srcSet={HERO.background}
            type="image/webp"
          />
          <img
            src={HERO.background}
            alt="EPX Fleet in Motion"
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
            className="hero-bg-img w-full h-full object-cover object-center"
          />
        </picture>
      </div>

      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 md:px-8 pt-24 pb-20 md:pt-28 md:pb-36 relative z-20">
        <div className="flex flex-col items-center max-w-4xl">
          <div className="hero-animate-up inline-flex items-center gap-3 mb-8">
            <div className="w-8 h-[2px] bg-accent-red" />
            <span className="label-caps text-accent-red">It&apos;s All About You — since 1999</span>
            <div className="w-8 h-[2px] bg-accent-red" />
          </div>

          <h1
            className="hero-title font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-8 md:mb-6 leading-[0.95] tracking-[-0.02em] text-center"
            data-splitting
          >
            Think Big.
            <br />
            <span className="text-accent-red">Deliver Bigger.</span>
          </h1>

          <div className="hero-animate-up flex flex-col sm:flex-row w-full sm:w-auto gap-4 mb-8 justify-center items-center">
            <a href="https://www.epx.co.za/" target="_blank" rel="noreferrer" className="btn-hero-primary w-full sm:w-auto text-center py-5 sm:py-3.5">
              Start Shipping Today →
            </a>
            <a href="https://epx.pperfect.com/" target="_blank" rel="noreferrer" className="btn-hero-ghost w-full sm:w-auto text-center py-5 sm:py-3.5">
              Track My Parcel →
            </a>
          </div>

          <p className="hero-animate-up font-inter text-sm text-white/70 max-w-[480px] leading-relaxed text-center">
            South Africa&apos;s trusted enterprise-grade courier network.
            Moving your business forward with precision, scale, and unmatched reliability.
          </p>
        </div>
      </div>

      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-accent-red/10 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}

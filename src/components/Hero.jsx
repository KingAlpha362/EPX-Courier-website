import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Splitting from 'splitting';
import { HERO } from '@/constants/images';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';

gsap.registerPlugin(ScrollTrigger);

function HeroRouteOverlay() {
  return (
    <svg
      className="absolute left-0 top-0 w-1/2 h-full z-[15] pointer-events-none opacity-40"
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <circle cx="120" cy="200" r="6" fill="#E8001D" opacity="0.9" />
      <path
        d="M120 200 L280 120 M120 200 L320 200 M120 200 L240 300 M120 200 L80 80 M120 200 L60 280"
        stroke="#E8001D"
        strokeWidth="1.5"
        strokeDasharray="6 4"
        fill="none"
        className="animate-draw-route"
        style={{ strokeDashoffset: 0 }}
      />
      <path
        d="M120 200 L180 60 M120 200 L200 340"
        stroke="#E8001D"
        strokeWidth="1"
        strokeDasharray="4 6"
        fill="none"
        opacity="0.6"
        className="animate-draw-route"
        style={{ animationDelay: '0.5s' }}
      />
    </svg>
  );
}

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    Splitting();

    const ctx = gsap.context(() => {
      gsap.from('.hero-title .char', {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.02,
        ease: 'power3.out',
        delay: 0.3,
      });

      gsap.from('.hero-animate-up', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power4.out',
        delay: 0.6,
      });

      gsap.to('.hero-bg-img', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-section relative min-h-screen flex items-center overflow-hidden bg-primary-dark noise-overlay border-b-[3px] border-brand-gold"
    >
      <div className="absolute inset-0 z-0 hero-split-overlay">
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
            className="hero-bg-img w-full h-full object-cover object-right"
          />
        </picture>
      </div>

      <HeroRouteOverlay />

      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start px-4 md:px-8 pt-28 pb-32 md:pb-36 relative z-20">
        <div className="flex flex-col items-start max-w-4xl">
          <div className="hero-animate-up inline-flex items-center gap-3 mb-8">
            <div className="w-8 h-[2px] bg-accent-red" />
            <span className="label-caps text-accent-red">It&apos;s All About You — since 1999</span>
          </div>

          <h1
            className="hero-title font-display text-6xl md:text-8xl lg:text-9xl font-extrabold text-white mb-6 leading-[0.95] tracking-[-0.02em]"
            data-splitting
          >
            Think Big.
            <br />
            <span className="text-accent-red">Deliver Bigger.</span>
          </h1>

          <p className="hero-animate-up font-inter text-lg md:text-xl text-white/70 mb-10 max-w-[480px] leading-relaxed">
            South Africa&apos;s trusted enterprise-grade courier network.
            Moving your business forward with precision, scale, and unmatched reliability.
          </p>

          <div className="hero-animate-up flex flex-col sm:flex-row w-full sm:w-auto gap-4">
            <a href="https://www.epx.co.za/" target="_blank" rel="noreferrer" className="btn-hero-primary text-center">
              Start Shipping Today
            </a>
            <a href="https://epx.pperfect.com/" target="_blank" rel="noreferrer" className="btn-hero-ghost text-center">
              Track My Parcel
            </a>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-accent-red/10 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}

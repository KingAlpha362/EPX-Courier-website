import { CTA_IMG } from '@/constants/images';
import { Flaticon } from '@/components/ui/Flaticon';

const trustBadges = [
  { text: 'ISO-Certified Operations', icon: 'deliveryService' },
  { text: '99.2% On-Time Delivery', icon: 'deliveryStatus' },
  { text: '24/7 Client Support', icon: 'deliveryMan' },
];

export default function CTA() {
  return (
    <section className="bg-primary-dark relative overflow-hidden py-16 md:py-28" id="contact">
      <img
        src={CTA_IMG.background}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-transparent to-primary-dark/80 pointer-events-none" />
      <div className="absolute inset-0 bg-texture opacity-5 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 text-center relative z-10 reveal">
        <span className="label-caps text-accent-red mb-4 block">Ready to start?</span>
        <h2 className="font-display text-4xl md:text-[72px] font-bold text-white mb-4 leading-tight">
          Let&apos;s Work <span className="text-accent-red">Together.</span>
        </h2>
        <p className="text-lg text-white/50 mb-8 max-w-2xl mx-auto leading-relaxed font-inter">
          Tailored overnight express solutions, enterprise fleet management, and a team that treats
          every delivery as their own.{' '}
          <a href="tel:0861379542" className="text-white/80 hover:text-white underline-offset-4 hover:underline whitespace-nowrap">
            0861 379 542
          </a>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 md:gap-10 mb-10">
          {trustBadges.map((badge) => (
            <span key={badge.text} className="inline-flex items-center gap-2.5 text-xs text-white/60 font-inter tracking-[0.1em] uppercase">
              <Flaticon icon={badge.icon} className="w-4 h-4 opacity-80" alt="" />
              {badge.text}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.epx.co.za/"
            target="_blank"
            rel="noreferrer"
            className="btn-hero-primary w-full sm:w-auto justify-center"
          >
            Get a Quote
            <span className="btn-arrow">→</span>
          </a>
          <a
            href="https://epx.pperfect.com/"
            target="_blank"
            rel="noreferrer"
            className="btn-hero-ghost w-full sm:w-auto justify-center"
          >
            Track Your Parcel
            <span className="btn-arrow">→</span>
          </a>
          <a
            href="tel:0861379542"
            className="btn-hero-ghost w-full sm:w-auto inline-flex items-center justify-center"
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CountUp } from 'countup.js';
import { COVERAGE } from '@/constants/images';
import { COVERAGE_HUBS, COVERAGE_ROUTES } from '@/constants/coverageHubs';

gsap.registerPlugin(ScrollTrigger);

function HubPulse({ x, y, delay }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle r="4" fill="#E8001D" />
      <circle
        r="4"
        fill="none"
        stroke="#E8001D"
        strokeWidth="2"
        opacity="0.9"
      >
        <animate
          attributeName="r"
          values="4;12;4"
          dur="2s"
          begin={`${delay}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.8;0;0.8"
          dur="2s"
          begin={`${delay}s`}
          repeatCount="indefinite"
        />
      </circle>
    </g>
  );
}

export default function CoverageMap() {
  const mapRef = useRef(null);
  const statsAnimated = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.map-header', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.map-header',
          start: 'top 85%',
        },
      });

      gsap.to('.route-path', {
        strokeDashoffset: 0,
        duration: 2.5,
        stagger: 0.3,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.sa-map-container',
          start: 'top 70%',
        },
      });
    }, mapRef);

    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsAnimated.current) {
            new CountUp('map-stat-km', 1.2, { duration: 2, decimalPlaces: 1 }).start();
            new CountUp('map-stat-towns', 2400, { duration: 2, separator: ',' }).start();
            new CountUp('map-stat-km-mobile', 1.2, { duration: 2, decimalPlaces: 1 }).start();
            new CountUp('map-stat-towns-mobile', 2400, { duration: 2, separator: ',' }).start();
            statsAnimated.current = true;
            statObserver.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    const statEl = document.getElementById('map-stats-card');
    if (statEl) statObserver.observe(statEl);

    return () => {
      ctx.revert();
      statObserver.disconnect();
    };
  }, []);

  return (
    <section ref={mapRef} className="bg-primary-dark overflow-hidden noise-overlay">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="map-header reveal text-center mb-12">
          <span className="label-caps text-accent-red mb-4 block">Our Coverage</span>
          <h2 className="font-display text-3xl md:text-6xl font-bold text-white leading-tight">
            Moving South Africa <span className="text-accent-red">Everywhere.</span>
          </h2>
          <p className="mt-6 text-white/50 max-w-2xl mx-auto font-inter text-lg">
            Operational across all 9 provinces with 40+ strategic hubs
            ensuring your cargo reaches its destination with surgical precision.
          </p>
        </div>

        <div className="sa-map-container relative max-w-4xl mx-auto aspect-square md:aspect-[4/3] flex items-center justify-center">
          <img
            src={COVERAGE.map}
            alt="South Africa coverage map outline"
            width={800}
            height={600}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-contain opacity-50 grayscale brightness-125"
          />

          <svg viewBox="0 0 800 600" className="relative z-10 w-full h-full">
            {COVERAGE_ROUTES.map((d, i) => (
              <path
                key={i}
                className="route-path"
                d={d}
                stroke="#E8001D"
                strokeWidth="2"
                fill="none"
                strokeDasharray="1000"
                strokeDashoffset="1000"
                opacity="0.9"
              />
            ))}
            {COVERAGE_HUBS.map((hub, i) => (
              <HubPulse key={hub.name} x={hub.x} y={hub.y} delay={(i % 10) * 0.2} />
            ))}
          </svg>

          <div
            id="map-stats-card"
            className="hidden md:block absolute bottom-0 right-0 bg-white/[0.05] backdrop-blur-[12px] border border-white/10 p-6 rounded-lg z-20"
          >
            <div className="flex flex-col gap-4">
              <div>
                <span className="label-caps text-accent-red mb-1 block" style={{ fontSize: '10px' }}>Total Coverage</span>
                <span className="text-2xl font-barlow font-black text-white"><span id="map-stat-km">0</span>M SQ KM</span>
              </div>
              <div>
                <span className="label-caps text-accent-red mb-1 block" style={{ fontSize: '10px' }}>Fleet Reach</span>
                <span className="text-2xl font-barlow font-black text-white">
                  <span id="map-stat-towns">0</span> TOWNS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Stats Card */}
        <div className="md:hidden mt-8 grid grid-cols-2 gap-4 bg-white/[0.05] border border-white/10 p-5 rounded-lg">
            <div>
                <span className="label-caps text-accent-red mb-1 block text-[9px]">Total Coverage</span>
                <span className="text-xl font-barlow font-black text-white"><span id="map-stat-km-mobile">0</span>M SQ KM</span>
            </div>
            <div>
                <span className="label-caps text-accent-red mb-1 block text-[9px]">Fleet Reach</span>
                <span className="text-xl font-barlow font-black text-white">
                    <span id="map-stat-towns-mobile">0</span> TOWNS
                </span>
            </div>
        </div>
      </div>
    </section>
  );
}

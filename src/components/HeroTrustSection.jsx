import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";
import { Flaticon } from "@/components/ui/Flaticon";

const stats = [
    { id: "stat-vehicles", num: 500, suffix: "+", label: "Fleet Vehicles" },
    { id: "stat-clients", num: 1200, suffix: "+", label: "Enterprise Clients" },
    { id: "stat-deliveries", num: 100, suffix: "K+", label: "Daily Deliveries" },
    { id: "stat-rate", num: 99.2, suffix: "%", label: "On-Time Rate", decimals: 1 }
];

const features = [
    { icon: "deliveryService", text: "Nationwide Coverage" },
    { icon: "expressDelivery", text: "Same Day & Overnight" },
    { icon: "deliveryStatus", text: "Real-Time Tracking" },
    { icon: "deliveryMan", text: "Dedicated Support" },
    { icon: "packageDelivery", text: "Bulk & Pallet Freight" }
];

export default function HeroTrustSection() {
    const statsRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    stats.forEach(stat => {
                        new CountUp(stat.id, stat.num, { 
                            suffix: stat.suffix, 
                            duration: 2.5,
                            decimalPlaces: stat.decimals || 0 
                        }).start();
                    });
                    hasAnimated.current = true;
                    observer.disconnect();
                }
            });
        }, { threshold: 0.2 });

        if (statsRef.current) observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative z-30">
            <div
                ref={statsRef}
                className="w-full border-t-[3px] border-accent-red bg-primary-dark"
            >
                <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.08]">
                    {stats.map((stat) => (
                        <div key={stat.id} className="py-8 md:py-10 px-4 md:px-8 text-center md:text-left">
                            <span
                                id={stat.id}
                                className="block text-[40px] md:text-[64px] font-barlow font-black text-white leading-none tracking-tight"
                            >
                                0
                            </span>
                            <span className="mt-2 block text-xs font-inter font-semibold text-white/45 uppercase tracking-[0.15em]">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-primary-dark py-3 border-t border-white/5 overflow-hidden">
                <style dangerouslySetInnerHTML={{ __html: `
                    @keyframes ticker {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .ticker-container {
                        display: flex;
                        width: max-content;
                        animation: ticker 30s linear infinite;
                    }
                    @media (min-width: 768px) {
                        .ticker-container {
                            animation: none;
                            width: 100%;
                            justify-content: center;
                        }
                    }
                `}} />
                
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="ticker-container flex items-center gap-8 md:gap-12">
                        {[...features, ...features].map((item, i) => (
                            <div key={i} className={`flex items-center gap-2.5 whitespace-nowrap ${i >= features.length ? 'md:hidden' : ''}`}>
                                <Flaticon icon={item.icon} className="w-5 h-5" alt="" />
                                <span className="text-[13px] font-inter font-medium text-[#94A3B8]">
                                    {item.text}
                                </span>
                                {((i < features.length - 1) || (i >= features.length && i < features.length * 2 - 1)) && (
                                    <div className="hidden md:block ml-8 md:ml-12 w-px h-3 bg-white/10" />
                                )}
                                <span className="md:hidden text-white/10 ml-8">·</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

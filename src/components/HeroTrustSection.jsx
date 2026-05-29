import { Flaticon } from "@/components/ui/Flaticon";

const features = [
    { icon: "deliveryService",  text: "Nationwide Coverage" },
    { icon: "expressDelivery",  text: "Same Day & Overnight" },
    { icon: "deliveryStatus",   text: "Real-Time Tracking" },
    { icon: "deliveryMan",      text: "Dedicated Support" },
    { icon: "packageDelivery",  text: "Bulk & Pallet Freight" },
    { icon: "deliveryTruck",    text: "Owner-Managed Fleet" },
];

export default function HeroTrustSection() {
    return (
        <div className="bg-primary-dark border-b border-white/[0.06] overflow-hidden">
            {/* Desktop — centred static row */}
            <div className="hidden md:flex items-center justify-center gap-0 max-w-[1200px] mx-auto px-8 py-5 md:py-6">
                {features.map((item, i) => (
                    <div key={item.text} className="flex items-center">
                        <div className="flex items-center gap-2 px-5">
                            <Flaticon icon={item.icon} className="w-4 h-4 flaticon-white opacity-50" alt="" />
                            <span className="font-inter text-[11px] font-medium text-white/40 tracking-wide whitespace-nowrap">
                                {item.text}
                            </span>
                        </div>
                        {i < features.length - 1 && (
                            <div className="w-px h-3 bg-white/10 shrink-0" />
                        )}
                    </div>
                ))}
            </div>

            {/* Mobile — auto-scrolling ticker */}
            <div className="md:hidden py-5 relative overflow-hidden">
                <style dangerouslySetInnerHTML={{ __html: `
                    @keyframes trust-ticker {
                        0%   { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .trust-ticker { animation: trust-ticker 22s linear infinite; }
                ` }} />
                <div className="flex trust-ticker w-max">
                    {[...features, ...features].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 px-4 shrink-0">
                            <Flaticon icon={item.icon} className="w-3.5 h-3.5 flaticon-white opacity-40" alt="" />
                            <span className="font-inter text-[11px] font-medium text-white/35 tracking-wide whitespace-nowrap">
                                {item.text}
                            </span>
                            <span className="ml-2 text-white/10">·</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

import { cn } from '@/lib/utils';
import { GALLERY } from '@/constants/images';

const captions = ["FLEET OPS", "LAST-MILE", "SORTATION", "WAREHOUSING", "LINEHAUL"];
const bentoItems = GALLERY.slice(0, 5).map((item, i) => ({
    ...item,
    caption: captions[i] || item.caption
}));

export default function ImageGallery() {
    return (
        <section className="bg-surface-light overflow-hidden py-20" id="gallery">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8 mb-12">
                <div className="reveal">
                    <span className="label-caps text-accent-red mb-2 block font-semibold tracking-widest text-xs">Our Network in Action</span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-text-primary leading-[0.95] tracking-tight uppercase">
                        Active. Human. <span className="text-accent-red">Real.</span>
                    </h2>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-1 md:px-4">
                <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 lg:grid-rows-2 gap-1 md:gap-2 h-[500px] md:h-[700px]">
                    {/* Item 1 - Tall Portrait */}
                    <div className="relative overflow-hidden group row-span-2 rounded-[2px]">
                        <img 
                            src={bentoItems[0].src} 
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            alt="" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A]/60 to-transparent pointer-events-none" />
                        <span className="absolute bottom-4 left-4 text-[10px] font-bold tracking-[0.2em] text-white uppercase">
                            {bentoItems[0].caption}
                        </span>
                    </div>

                    {/* Item 2 - Square */}
                    <div className="relative overflow-hidden group aspect-square rounded-[2px]">
                        <img 
                            src={bentoItems[1].src} 
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            alt="" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A]/60 to-transparent pointer-events-none" />
                        <span className="absolute bottom-4 left-4 text-[10px] font-bold tracking-[0.2em] text-white uppercase">
                            {bentoItems[1].caption}
                        </span>
                    </div>

                    {/* Item 3 - Square */}
                    <div className="relative overflow-hidden group aspect-square rounded-[2px]">
                        <img 
                            src={bentoItems[2].src} 
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            alt="" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A]/60 to-transparent pointer-events-none" />
                        <span className="absolute bottom-4 left-4 text-[10px] font-bold tracking-[0.2em] text-white uppercase">
                            {bentoItems[2].caption}
                        </span>
                    </div>

                    {/* Item 4 - Tall Portrait (Desktop only or shared) */}
                    <div className="hidden lg:block relative overflow-hidden group row-span-2 rounded-[2px]">
                        <img 
                            src={bentoItems[3].src} 
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            alt="" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A]/60 to-transparent pointer-events-none" />
                        <span className="absolute bottom-4 left-4 text-[10px] font-bold tracking-[0.2em] text-white uppercase">
                            {bentoItems[3].caption}
                        </span>
                    </div>

                    {/* Item 5 - Fill the rest or hidden */}
                    <div className="hidden lg:block relative overflow-hidden group rounded-[2px]">
                        <img 
                            src={bentoItems[4].src} 
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            alt="" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A]/60 to-transparent pointer-events-none" />
                        <span className="absolute bottom-4 left-4 text-[10px] font-bold tracking-[0.2em] text-white uppercase">
                            {bentoItems[4].caption}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

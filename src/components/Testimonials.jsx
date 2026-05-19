import { TestimonialsCarousel } from '@/components/ui/testimonials-carousel';

const testimonials = [
    {
        name: "Denzil Arendse",
        role: "Google Review",
        text: "I consider EPX to be fast and efficient and definitely recommend this courier. Their turnaround time is impressive.",
        highlight: "fast and efficient"
    },
    {
        name: "Meshea Lesch",
        role: "Google Review",
        text: "Excellent service, they delivered on time and were very helpful, including the driver and his assistant.",
        highlight: "delivered on time"
    },
    {
        name: "Phillip Jacques Botha",
        role: "Google Review",
        text: "Delivered on time and when we over-estimated the weight of the item, they actually gave us a credit back.",
        highlight: "gave us a credit"
    },
    {
        name: "Kyle Tait",
        role: "Google Review",
        text: "Great service and good turnaround time. Definitely a reliable choice for enterprise logistics.",
        highlight: "Great service"
    },
    {
        name: "Shaun Thompson",
        role: "Google Review",
        text: "The tracking system is top notch. I always know exactly where my freight is. Highly professional team.",
        highlight: "tracking system"
    },
    {
        name: "Fatima Patel",
        role: "Google Review",
        text: "Reliable nationwide coverage. They managed our bulk distribution with zero issues. Highly recommended.",
        highlight: "nationwide coverage"
    }
];

export default function Testimonials() {
    return (
        <section className="bg-white py-24 px-0 overflow-hidden" id="testimonials">
            <div className="max-w-[1200px] mx-auto px-4 mb-16">
                <div className="text-center md:text-left reveal">
                    <span className="label-caps text-accent-red mb-4 block font-bold tracking-[0.3em] text-xs uppercase">Social Proof</span>
                    <h2 className="font-display text-4xl md:text-6xl font-black text-text-primary leading-[0.95] tracking-tight uppercase">
                        What They <span className="text-accent-red">Say.</span>
                    </h2>
                    <p className="mt-4 text-gray-500 font-inter text-sm max-w-xl">
                        Real-time feedback from our enterprise clients and partners across South Africa. 
                        Verified via Google Business.
                    </p>
                </div>
            </div>

            <div className="space-y-2">
                <TestimonialsCarousel
                    testimonials={testimonials}
                    speed={30}
                    direction="left"
                    cardHeight={220}
                />
                <TestimonialsCarousel
                    testimonials={testimonials.slice().reverse()}
                    speed={35}
                    direction="right"
                    cardHeight={220}
                />
            </div>
        </section>
    );
}

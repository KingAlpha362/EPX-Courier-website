import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
    {
        question: "How can I track my parcel in real-time?",
        answer: "You can track your parcel 24/7 by entering your waybill number into our tracking portal at epx.pperfect.com. Our system provides real-time updates as your shipment moves through our national hub network."
    },
    {
        question: "What is your standard delivery turnaround time?",
        answer: "EPX specialises in overnight express services between major centres. For regional and outlying areas, delivery typically occurs within 24 to 72 hours depending on the specific destination."
    },
    {
        question: "How do I request a formal corporate quote?",
        answer: "For enterprise solutions, you can use our 'Get a Quote' tool on epx.co.za or contact our national support line at 0861 379 542. We provide tailor-made pricing based on your volume and frequency."
    },
    {
        question: "What items are prohibited from being shipped?",
        answer: "We do not transport bullion, precious stones, cash, alcohol, livestock, or hazardous chemicals. Please refer to our full Terms & Conditions for a comprehensive list of restricted goods."
    },
    {
        question: "Do you offer secure warehousing and distribution?",
        answer: "Yes, we operate state-of-the-art secure hubs across South Africa. Our services include dedicated warehousing, inventory management, and managed fleet solutions for enterprise partners."
    },
    {
        question: "Do you provide dedicated account managers?",
        answer: "Absolutely. EPX's ethos is 'It's All About You'. Enterprise clients are assigned dedicated account managers who understand your business needs and ensure your deliveries are always a priority."
    }
];

const SUPPORT_TEAM = [
    { initials: 'JE', color: '#E8001D' },
    { initials: 'GE', color: '#0A0E1A' },
    { initials: 'EP', color: '#C9A84C' },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-white/10 py-4 md:py-6">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between text-left group focus:outline-none"
            >
                <span className={`text-base md:text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-accent-red' : 'text-white group-hover:text-white/80'}`}>
                    {question}
                </span>
                <span className="flex-shrink-0 ml-4">
                    {isOpen ? (
                        <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-white/40">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                            </svg>
                        </div>
                    ) : (
                        <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-white/40 group-hover:border-white/40">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                    )}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <p className="mt-4 text-white/60 text-sm md:text-base leading-relaxed max-w-3xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="bg-primary-dark py-14 md:py-24 px-4 overflow-hidden" id="faq">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-10 md:mb-16 reveal">
                    <span className="label-caps text-accent-red mb-4 block font-bold tracking-[0.3em] text-xs">Support</span>
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
                        Frequently Asked <span className="text-accent-red">Questions.</span>
                    </h2>
                    <p className="text-white/40 font-inter text-sm md:text-base max-w-xl mx-auto">
                        Everything you need to know about our national logistics network,
                        tracking systems, and enterprise solutions.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto mb-10 md:mb-20">
                    {faqs.map((faq, idx) => (
                        <FAQItem
                            key={idx}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === idx}
                            onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                        />
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-12 text-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-red/10 blur-3xl rounded-full -mr-16 -mt-16 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-150" />

                        <div className="relative z-10">
                            <div className="flex justify-center -space-x-3 mb-6">
                                {SUPPORT_TEAM.map((member, i) => (
                                    <div
                                        key={i}
                                        className="w-12 h-12 rounded-full border-2 border-[#0A0E1A] flex items-center justify-center text-xs font-black text-white shadow-xl"
                                        style={{ backgroundColor: member.color }}
                                    >
                                        {member.initials}
                                    </div>
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Still have questions?</h3>
                            <p className="text-white/40 text-sm mb-8">
                                Can&apos;t find the answer you&apos;re looking for? Our national support team is ready to help.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="tel:0861379542"
                                    className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 bg-accent-red hover:bg-[#b00217] text-white font-bold text-sm uppercase tracking-widest rounded-[2px] transition-colors duration-200 shadow-lg shadow-accent-red/20 active:scale-[0.97]"
                                >
                                    Call 0861 379 542
                                </a>
                                <a
                                    href="mailto:info@epx.co.za"
                                    className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-bold text-sm uppercase tracking-widest rounded-[2px] transition-colors duration-200 active:scale-[0.97]"
                                >
                                    Email Support
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

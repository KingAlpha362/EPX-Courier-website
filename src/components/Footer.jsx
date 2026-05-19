import { BrandLogo } from '@/components/ui/BrandLogo';
import { Flaticon } from '@/components/ui/Flaticon';

const socialLinks = [
  { label: 'Facebook', href: '#', icon: 'deliveryService' },
  { label: 'LinkedIn', href: '#', icon: 'courier' },
  { label: 'Instagram', href: '#', icon: 'expressDelivery' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white relative overflow-hidden border-t-[3px] border-accent-red">
      <div className="absolute inset-0 bg-texture opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 pt-14 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="flex flex-col items-start gap-5">
            <BrandLogo variant="dark" className="h-14" loading="lazy" />
            <p className="text-[#94A3B8] text-sm font-inter leading-relaxed max-w-xs">
              National express courier with an exceptional footprint across South Africa — our own fleet, world-class tracking, and a management team
              that believes in personal service. Founded April 1999 as Edwards Parcel Express.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-11 h-11 border border-white/20 rounded-[3px] flex items-center justify-center p-2.5 hover:bg-accent-red hover:border-accent-red transition-colors duration-200"
                >
                  <Flaticon icon={s.icon} className="w-5 h-5 opacity-90" alt="" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-white font-inter font-semibold uppercase tracking-[0.1em] text-[13px] mb-5">Services</h5>
            <div className="flex flex-col gap-2 text-[#94A3B8] text-sm font-inter">
              <a href="#features" className="hover:text-white transition-colors py-2">Same-Day Express</a>
              <a href="#features" className="hover:text-white transition-colors py-2">Overnight Delivery</a>
              <a href="#solutions" className="hover:text-white transition-colors py-2">Bulk Freight</a>
              <a href="#features" className="hover:text-white transition-colors py-2">Warehouse & Hub</a>
              <a href="#portfolio" className="hover:text-white transition-colors py-2">Managed Logistics</a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-inter font-semibold uppercase tracking-[0.1em] text-[13px] mb-8">Quick Links</h5>
            <div className="flex flex-col gap-2 text-[#94A3B8] text-sm font-inter">
              <a href="https://epx.pperfect.com/" className="hover:text-white transition-colors py-2" target="_blank" rel="noreferrer">Track Your Parcel</a>
              <a href="https://www.epx.co.za/" className="hover:text-white transition-colors py-2" target="_blank" rel="noreferrer">Get a Quote</a>
              <a href="https://www.epx.co.za/" className="hover:text-white transition-colors py-2" target="_blank" rel="noreferrer">Search Branch</a>
              <a href="https://www.epx.co.za/" className="hover:text-white transition-colors py-2" target="_blank" rel="noreferrer">Client Portal</a>
              <a href="#why" className="hover:text-white transition-colors py-2">Our Story</a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-inter font-semibold uppercase tracking-[0.1em] text-[13px] mb-8">Contact</h5>
            <div className="flex flex-col gap-4 text-[#94A3B8] text-sm font-inter">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-white/30">National</span>
                <a href="tel:0861379542" className="hover:text-white transition-colors">0861 379 542</a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-white/30">Email Support</span>
                <a href="mailto:info@epx.co.za" className="hover:text-white transition-colors">info@epx.co.za</a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-white/30">Operations</span>
                <span className="text-white/50">24/7 Control Center</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-inter text-[#64748B]">
          <span>© 2025 E.P.X. Courier Services. All rights reserved.</span>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">POPIA</a>
          </div>
          <span className="text-white/40 uppercase tracking-widest text-[10px]">
            Built by the E.P.X. digital team
          </span>
        </div>
      </div>
    </footer>
  );
}

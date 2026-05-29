import { useState, useEffect, useCallback } from 'react';

// ── Branch data ──────────────────────────────────────────────────────────────
const BRANCHES = [
  // Gauteng
  { id: 1,  name: 'Johannesburg Central', address: '47 Commissioner St, Johannesburg CBD, 2001',       city: 'Johannesburg', province: 'Gauteng',       phone: '011 336 1000', hours: 'Mon–Fri 07:30–17:30', lat: -26.2041, lng: 28.0473 },
  { id: 2,  name: 'Sandton',              address: '14 Rivonia Rd, Sandton, 2196',                     city: 'Sandton',      province: 'Gauteng',       phone: '011 783 4500', hours: 'Mon–Fri 07:30–17:30', lat: -26.1076, lng: 28.0567 },
  { id: 3,  name: 'Boksburg',             address: '12 Rondebult Rd, Boksburg East, 1459',             city: 'Boksburg',     province: 'Gauteng',       phone: '011 892 3400', hours: 'Mon–Fri 07:30–17:00', lat: -26.2168, lng: 28.2618 },
  { id: 4,  name: 'Roodepoort',           address: '8 Ontdekkers Rd, Roodepoort, 1724',               city: 'Roodepoort',   province: 'Gauteng',       phone: '011 764 5600', hours: 'Mon–Fri 07:30–17:00', lat: -26.1637, lng: 27.8725 },
  { id: 5,  name: 'Pretoria East',        address: '22 Garsfontein Rd, Moreleta Park, Pretoria, 0081',city: 'Pretoria',     province: 'Gauteng',       phone: '012 348 9000', hours: 'Mon–Fri 07:30–17:30', lat: -25.7966, lng: 28.3079 },
  { id: 6,  name: 'Centurion',            address: '18 Jean Ave, Hennopspark, Centurion, 0157',        city: 'Centurion',    province: 'Gauteng',       phone: '012 663 2300', hours: 'Mon–Fri 07:30–17:30', lat: -25.8553, lng: 28.1878 },
  { id: 7,  name: 'Midrand',              address: '5 New Rd, Midrand, 1685',                          city: 'Midrand',      province: 'Gauteng',       phone: '011 315 6700', hours: 'Mon–Fri 07:30–17:30', lat: -25.9995, lng: 28.1283 },
  { id: 8,  name: 'Germiston',            address: '30 Webber St, Germiston, 1401',                   city: 'Germiston',    province: 'Gauteng',       phone: '011 872 4500', hours: 'Mon–Fri 07:30–17:00', lat: -26.2197, lng: 28.1576 },
  // Western Cape
  { id: 9,  name: 'Cape Town CBD',        address: '32 Buitenkant St, Cape Town, 8001',               city: 'Cape Town',    province: 'Western Cape',  phone: '021 461 7800', hours: 'Mon–Fri 07:30–17:30', lat: -33.9249, lng: 18.4241 },
  { id: 10, name: 'Bellville',            address: '45 Voortrekker Rd, Bellville, 7530',              city: 'Bellville',    province: 'Western Cape',  phone: '021 948 0100', hours: 'Mon–Fri 07:30–17:00', lat: -33.8994, lng: 18.6310 },
  { id: 11, name: 'George',               address: '10 York St, George, 6529',                        city: 'George',       province: 'Western Cape',  phone: '044 873 4500', hours: 'Mon–Fri 07:30–17:00', lat: -33.9631, lng: 22.4617 },
  { id: 12, name: 'Paarden Eiland',       address: '7 Paarden Eiland Rd, Cape Town, 7405',            city: 'Cape Town',    province: 'Western Cape',  phone: '021 511 3200', hours: 'Mon–Fri 07:30–17:00', lat: -33.9014, lng: 18.4862 },
  // KwaZulu-Natal
  { id: 13, name: 'Durban Central',       address: '56 Pine St, Durban CBD, 4001',                    city: 'Durban',       province: 'KwaZulu-Natal', phone: '031 307 5600', hours: 'Mon–Fri 07:30–17:30', lat: -29.8587, lng: 31.0218 },
  { id: 14, name: 'Pinetown',             address: '8 Old Main Rd, Pinetown, 3610',                   city: 'Pinetown',     province: 'KwaZulu-Natal', phone: '031 702 3400', hours: 'Mon–Fri 07:30–17:00', lat: -29.8167, lng: 30.8667 },
  { id: 15, name: 'Pietermaritzburg',     address: '24 Commercial Rd, Pietermaritzburg, 3201',        city: 'Pietermaritzburg', province: 'KwaZulu-Natal', phone: '033 342 1200', hours: 'Mon–Fri 07:30–17:00', lat: -29.6180, lng: 30.3794 },
  { id: 16, name: 'Richards Bay',         address: '5 Meerensee Dr, Richards Bay, 3900',              city: 'Richards Bay', province: 'KwaZulu-Natal', phone: '035 789 0100', hours: 'Mon–Fri 07:30–16:30', lat: -28.7833, lng: 32.0833 },
  // Eastern Cape
  { id: 17, name: 'Gqeberha (P.E.)',      address: '18 Govan Mbeki Ave, Gqeberha, 6001',              city: 'Gqeberha',     province: 'Eastern Cape',  phone: '041 585 2300', hours: 'Mon–Fri 07:30–17:00', lat: -33.9608, lng: 25.6022 },
  { id: 18, name: 'East London',          address: '40 Oxford St, East London, 5201',                 city: 'East London',  province: 'Eastern Cape',  phone: '043 722 3400', hours: 'Mon–Fri 07:30–17:00', lat: -33.0153, lng: 27.9116 },
  // Free State
  { id: 19, name: 'Bloemfontein',         address: '12 Zastron St, Bloemfontein, 9301',               city: 'Bloemfontein', province: 'Free State',    phone: '051 447 4500', hours: 'Mon–Fri 07:30–17:00', lat: -29.0852, lng: 26.1596 },
  // Limpopo
  { id: 20, name: 'Polokwane',            address: '28 Landros Mare St, Polokwane, 0699',             city: 'Polokwane',    province: 'Limpopo',       phone: '015 291 5600', hours: 'Mon–Fri 07:30–17:00', lat: -23.9045, lng: 29.4688 },
  // Mpumalanga
  { id: 21, name: 'Mbombela (Nelspruit)', address: '15 Ferreira St, Mbombela, 1200',                  city: 'Mbombela',     province: 'Mpumalanga',    phone: '013 752 6700', hours: 'Mon–Fri 07:30–17:00', lat: -25.4673, lng: 30.9869 },
  { id: 22, name: 'eMalahleni',           address: '22 Mandela St, eMalahleni, 1035',                 city: 'eMalahleni',   province: 'Mpumalanga',    phone: '013 656 7800', hours: 'Mon–Fri 07:30–16:30', lat: -25.8731, lng: 29.2403 },
  // North West
  { id: 23, name: 'Rustenburg',           address: '10 Fatima Bhayat St, Rustenburg, 0299',           city: 'Rustenburg',   province: 'North West',    phone: '014 592 0100', hours: 'Mon–Fri 07:30–17:00', lat: -25.6673, lng: 27.2424 },
  // Northern Cape
  { id: 24, name: 'Kimberley',            address: '14 Bultfontein Rd, Kimberley, 8301',              city: 'Kimberley',    province: 'Northern Cape', phone: '053 832 1200', hours: 'Mon–Fri 07:30–16:30', lat: -28.7282, lng: 24.7499 },
];

// ── Utils ────────────────────────────────────────────────────────────────────
function haversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLng = (lng2 - lng1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * (Math.PI / 180)) *
    Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function isOpenNow(hours) {
  const now = new Date();
  const day = now.getDay();
  if (day === 0 || day === 6) return false;
  const mins = now.getHours() * 60 + now.getMinutes();
  const match = hours.match(/(\d{2}):(\d{2})$/);
  const close = match ? parseInt(match[1]) * 60 + parseInt(match[2]) : 1050;
  return mins >= 450 && mins < close;
}

function formatDist(km) {
  if (km < 1) return `${Math.round(km * 1000)} m`;
  if (km >= 100) return `${Math.round(km)} km`;
  return `${km.toFixed(1)} km`;
}

function mapsUrl(branch) {
  return `https://www.google.com/maps/dir/?api=1&destination=${branch.lat},${branch.lng}`;
}

// ── Icons ────────────────────────────────────────────────────────────────────
function PinIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}
function LockIcon() {
  return (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 12a19.79 19.79 0 0 1-3.07-8.62A2 2 0 0 1 3.25 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
function AlertIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

// ── Sub-views ────────────────────────────────────────────────────────────────
function PermissionView({ onRequest }) {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-16 text-center" style={{ minHeight: 'calc(100dvh - 72px)' }}>
      {/* Animated pin */}
      <div className="relative mb-8">
        <div className="absolute inset-0 rounded-full bg-accent-red/20 animate-ping" style={{ animationDuration: '2.4s' }} />
        <div className="relative w-20 h-20 rounded-full bg-accent-red/15 border border-accent-red/30 flex items-center justify-center text-accent-red">
          <PinIcon className="w-9 h-9" />
        </div>
      </div>

      <h3 className="font-display text-[1.6rem] font-bold text-white leading-tight mb-3">
        Find Your Nearest<br />EPX Branch
      </h3>
      <p className="font-inter text-sm text-white/50 leading-relaxed mb-9 max-w-[260px]">
        Share your location for instant results — no typing required. We'll show the closest branches and directions.
      </p>

      <button
        onClick={onRequest}
        className="w-full max-w-[300px] inline-flex items-center justify-center gap-3 bg-accent-red text-white font-inter font-bold text-[11px] uppercase tracking-[0.15em] px-6 py-4 rounded-[2px] mb-4 active:scale-[0.97]"
        style={{ transition: 'background-color 0.2s var(--ease-out), transform 0.16s var(--ease-out)' }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b80018'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--accent-red)'}
      >
        <PinIcon className="w-4 h-4" />
        Allow Location Access
      </button>

      <a
        href="https://www.epx.co.za/branch-locator"
        target="_blank"
        rel="noreferrer"
        className="font-inter text-[11px] text-white/30 hover:text-white/60 uppercase tracking-[0.15em] mb-10"
        style={{ transition: 'color 0.2s' }}
      >
        Browse all branches →
      </a>

      <p className="font-inter text-[10px] text-white/25 flex items-center gap-2">
        <LockIcon />
        Your location is never stored or shared
      </p>
    </div>
  );
}

function LocatingView() {
  return (
    <div className="flex flex-col items-center justify-center px-8 text-center" style={{ minHeight: 'calc(100dvh - 72px)' }}>
      <div className="relative w-16 h-16 mb-7">
        <div className="absolute inset-0 rounded-full border-2 border-white/10" />
        <div className="absolute inset-0 rounded-full border-2 border-t-accent-red animate-spin" />
        <div className="absolute inset-[6px] rounded-full bg-accent-red/10 flex items-center justify-center text-accent-red">
          <PinIcon className="w-5 h-5" />
        </div>
      </div>
      <h3 className="font-display text-lg font-bold text-white mb-2">Locating You</h3>
      <p className="font-inter text-sm text-white/40">Scanning for nearby branches…</p>
    </div>
  );
}

function BranchCard({ branch, rank }) {
  const open = isOpenNow(branch.hours);

  return (
    <div className={`relative rounded-[3px] p-4 border transition-colors duration-200 ${rank === 1 ? 'bg-white/[0.07] border-accent-red/30' : 'bg-white/[0.04] border-white/[0.08] hover:bg-white/[0.07]'}`}>
      {rank === 1 && (
        <span className="absolute top-3 left-3 font-inter text-[8px] font-bold uppercase tracking-[0.18em] text-accent-red">
          Nearest
        </span>
      )}

      {/* Top row */}
      <div className={`flex items-start justify-between gap-3 ${rank === 1 ? 'mt-4' : ''}`}>
        <div className="min-w-0 flex-1">
          <h4 className="font-display text-[15px] font-bold text-white leading-tight">{branch.name}</h4>
          <span className="mt-1 inline-block font-inter text-[9px] uppercase tracking-[0.18em] text-white/35 border border-white/15 px-1.5 py-0.5 rounded-sm">
            {branch.province}
          </span>
        </div>
        <div className="shrink-0 bg-accent-red px-2.5 py-1.5 rounded-[2px] text-right">
          <span className="font-inter font-bold text-[12px] text-white leading-none block">{formatDist(branch.distance)}</span>
          <span className="font-inter text-[8px] text-white/70 uppercase tracking-wider">away</span>
        </div>
      </div>

      {/* Address */}
      <p className="font-inter text-[11px] text-white/45 mt-2.5 mb-2.5 leading-relaxed">
        {branch.address}
      </p>

      {/* Status + hours */}
      <div className="flex items-center gap-2.5 mb-3">
        <div className="flex items-center gap-1.5">
          <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${open ? 'bg-emerald-400' : 'bg-white/20'}`} />
          <span className={`font-inter text-[10px] font-semibold ${open ? 'text-emerald-400' : 'text-white/35'}`}>
            {open ? 'Open Now' : 'Closed'}
          </span>
        </div>
        <span className="text-white/15 text-xs">·</span>
        <span className="font-inter text-[10px] text-white/35">{branch.hours}</span>
      </div>

      {/* Footer row */}
      <div className="flex items-center justify-between pt-2.5 border-t border-white/[0.07]">
        <a
          href={`tel:${branch.phone.replace(/\s/g, '')}`}
          className="flex items-center gap-1.5 font-inter text-[11px] text-white/45 hover:text-white"
          style={{ transition: 'color 0.2s' }}
        >
          <PhoneIcon />
          {branch.phone}
        </a>
        <a
          href={mapsUrl(branch)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-inter font-bold text-[10px] uppercase tracking-[0.15em] text-accent-red hover:text-[#ff3348]"
          style={{ transition: 'color 0.2s' }}
        >
          Directions <ArrowIcon />
        </a>
      </div>
    </div>
  );
}

function ResultsView({ branches, nearestCity }) {
  return (
    <div className="px-4 py-5">
      {/* Header */}
      <div className="px-1 mb-4">
        <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-white/35 mb-1">
          {branches.length} branches near
        </p>
        <h3 className="font-display text-2xl font-bold text-white leading-none">{nearestCity}</h3>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-2.5">
        {branches.map((b, i) => <BranchCard key={b.id} branch={b} rank={i + 1} />)}
      </div>

      {/* Footer */}
      <div className="mt-5 pt-4 border-t border-white/[0.07] px-1">
        <a
          href="https://www.epx.co.za/branch-locator"
          target="_blank"
          rel="noreferrer"
          className="font-inter text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-white/60"
          style={{ transition: 'color 0.2s' }}
        >
          View all 24 branches on epx.co.za →
        </a>
      </div>
    </div>
  );
}

function DeniedView({ onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-16 text-center" style={{ minHeight: 'calc(100dvh - 72px)' }}>
      <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/30 mb-6">
        <LockIcon />
        <span className="sr-only">Locked</span>
      </div>
      <h3 className="font-display text-xl font-bold text-white mb-3">Location Access Denied</h3>
      <p className="font-inter text-sm text-white/50 leading-relaxed mb-7 max-w-[270px]">
        To enable location, update your browser site permissions and try again — or browse all branches on the EPX website.
      </p>
      <button
        onClick={onRetry}
        className="inline-flex items-center gap-1.5 font-inter font-bold text-[11px] uppercase tracking-[0.15em] text-accent-red border-b border-accent-red pb-0.5 mb-5 hover:text-[#ff3348] hover:border-[#ff3348]"
        style={{ transition: 'color 0.2s, border-color 0.2s' }}
      >
        Try Again <ArrowIcon />
      </button>
      <a
        href="https://www.epx.co.za/branch-locator"
        target="_blank"
        rel="noreferrer"
        className="w-full max-w-[280px] inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/30 text-white/60 hover:text-white font-inter font-bold text-[11px] uppercase tracking-[0.15em] px-6 py-4 rounded-[2px]"
        style={{ transition: 'border-color 0.2s, color 0.2s' }}
      >
        Browse All Branches
      </a>
    </div>
  );
}

function ErrorView({ onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-16 text-center" style={{ minHeight: 'calc(100dvh - 72px)' }}>
      <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/30 mb-6">
        <AlertIcon />
      </div>
      <h3 className="font-display text-xl font-bold text-white mb-3">Couldn't Detect Location</h3>
      <p className="font-inter text-sm text-white/50 leading-relaxed mb-8 max-w-[270px]">
        There was a problem reading your GPS. Check your connection or browser settings and try again.
      </p>
      <button
        onClick={onRetry}
        className="w-full max-w-[280px] inline-flex items-center justify-center gap-2 bg-accent-red text-white font-inter font-bold text-[11px] uppercase tracking-[0.15em] px-6 py-4 rounded-[2px] mb-4 active:scale-[0.97]"
        style={{ transition: 'background-color 0.2s var(--ease-out), transform 0.16s var(--ease-out)' }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b80018'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--accent-red)'}
      >
        Try Again
      </button>
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────────────
export default function BranchLocator({ open, onClose }) {
  const [status, setStatus] = useState('idle');
  const [branches, setBranches] = useState([]);
  const [nearestCity, setNearestCity] = useState('');

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Reset state after drawer closes (let animation finish first)
  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => { setStatus('idle'); setBranches([]); setNearestCity(''); }, 500);
      return () => clearTimeout(t);
    }
  }, [open]);

  const requestLocation = useCallback(() => {
    setStatus('locating');
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        const sorted = BRANCHES
          .map(b => ({ ...b, distance: haversineKm(lat, lng, b.lat, b.lng) }))
          .sort((a, b) => a.distance - b.distance);
        setBranches(sorted.slice(0, 6));
        setNearestCity(sorted[0].city);
        setStatus('results');
      },
      ({ code }) => setStatus(code === 1 ? 'denied' : 'error'),
      { timeout: 12000, maximumAge: 60000, enableHighAccuracy: false }
    );
  }, []);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-[2px] pointer-events-none"
        style={{
          opacity: open ? 1 : 0,
          transition: 'opacity 0.35s var(--ease-out)',
          pointerEvents: open ? 'auto' : 'none',
        }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Branch Locator"
        className="fixed top-0 right-0 z-[100] h-full w-full sm:w-[460px] bg-primary-dark flex flex-col shadow-2xl"
        style={{
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)',
        }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-[72px] border-b border-white/[0.08] flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-accent-red/15 border border-accent-red/30 flex items-center justify-center text-accent-red flex-shrink-0">
              <PinIcon className="w-4 h-4" />
            </div>
            <div>
              <p className="font-inter text-[9px] uppercase tracking-[0.2em] text-white/35 leading-none mb-0.5">EPX Network</p>
              <h2 className="font-display text-[15px] font-bold text-white leading-none">Branch Locator</h2>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close branch locator"
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 flex-shrink-0"
            style={{ transition: 'color 0.2s, border-color 0.2s' }}
          >
            <CloseIcon />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto no-scrollbar">
          {status === 'idle'     && <PermissionView onRequest={requestLocation} />}
          {status === 'locating' && <LocatingView />}
          {status === 'results'  && <ResultsView branches={branches} nearestCity={nearestCity} />}
          {status === 'denied'   && <DeniedView onRetry={requestLocation} />}
          {status === 'error'    && <ErrorView onRetry={requestLocation} />}
        </div>
      </aside>
    </>
  );
}

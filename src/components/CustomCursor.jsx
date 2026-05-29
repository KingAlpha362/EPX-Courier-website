import { useEffect, useRef } from 'react';

const INTERACTIVE = 'a, button, input, textarea, select, label, [data-cursor], .hub-marker';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const dot = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const shown = useRef(false);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReduced) return;

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!shown.current) {
        shown.current = true;
        dotRef.current?.classList.add('cursor-on');
        ringRef.current?.classList.add('cursor-on');
      }
    };
    const onOver = (e) => {
      if (e.target.closest?.(INTERACTIVE)) ringRef.current?.classList.add('cursor-hover');
    };
    const onOut = (e) => {
      if (e.target.closest?.(INTERACTIVE)) ringRef.current?.classList.remove('cursor-hover');
    };

    const tick = () => {
      dot.current.x += (target.current.x - dot.current.x) * 0.3;
      dot.current.y += (target.current.y - dot.current.y) * 0.3;
      ring.current.x += (target.current.x - ring.current.x) * 0.16;
      ring.current.y += (target.current.y - ring.current.y) * 0.16;
      if (dotRef.current)
        dotRef.current.style.transform = `translate(${dot.current.x}px, ${dot.current.y}px)`;
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseout', onOut, { passive: true });
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <i />
      </div>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}

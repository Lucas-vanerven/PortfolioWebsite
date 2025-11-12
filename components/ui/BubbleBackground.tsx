import React, { useMemo, useEffect, useRef } from 'react';

// Small rising bubbles background. Non-interactive (pointer-events-none).
export const BubbleBackground: React.FC<{ count?: number }> = ({ count = 20 }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Respect user motion preferences
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  // Device size check (simple) - reduce on small screens
  const isSmallScreen = typeof window !== 'undefined' ? window.innerWidth <= 768 : false;

  // Apply a 20% reduction to the overall bubble amount (user request)
  const baseCount = Math.max(1, Math.round(count * 0.8));

  const fgCount = isSmallScreen ? Math.max(8, Math.floor(baseCount * 0.6)) : baseCount; // foreground bubbles
  const midCount = isSmallScreen ? Math.max(6, Math.floor(baseCount * 0.25)) : Math.max(6, Math.floor(baseCount * 0.5)); // mid-layer

  const foreground = useMemo(() => {
    const arr: Array<{ left: string; size: number; duration: number; delay: number; opacity: number }> = [];
    for (let i = 0; i < fgCount; i++) {
      const left = Math.round(Math.random() * 100) + '%';
      const size = Math.round(6 + Math.random() * 22); // 6 - 28 px
      const duration = +(8 + Math.random() * 18).toFixed(2); // 8s - 26s
      const delay = +(-Math.random() * duration).toFixed(2); // negative to start at random positions
      const opacity = +(0.15 + Math.random() * 0.5).toFixed(2); // 0.15 - 0.65
      arr.push({ left, size, duration, delay, opacity });
    }
    return arr;
  }, [fgCount]);

  const midLayer = useMemo(() => {
    const arr: Array<{ left: string; size: number; duration: number; delay: number; opacity: number }> = [];
    for (let i = 0; i < midCount; i++) {
      const left = Math.round(Math.random() * 100) + '%';
      const size = Math.round(28 + Math.random() * 42); // larger: 28 - 70 px
      const duration = +(18 + Math.random() * 28).toFixed(2); // slower: 18s - 46s
      const delay = +(-Math.random() * duration).toFixed(2);
      const opacity = +(0.06 + Math.random() * 0.18).toFixed(2); // very faint
      arr.push({ left, size, duration, delay, opacity });
    }
    return arr;
  }, [midCount]);

  // Pointer parallax (desktop only, and not when reduced-motion is enabled)
  useEffect(() => {
    if (prefersReducedMotion) return;
    if (isSmallScreen) return;

    const el = containerRef.current;
    if (!el) return;

    let raf = 0;
    let lastX = 0;
    let lastY = 0;

    const onMove = (e: PointerEvent) => {
      const x = e.clientX / window.innerWidth - 0.5; // -0.5 .. 0.5
      const y = e.clientY / window.innerHeight - 0.5;
      lastX = x;
      lastY = y;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        // small translate for parallax feel
        el.style.transform = `translate3d(${(lastX * 8).toFixed(2)}px, ${(lastY * -6).toFixed(2)}px, 0)`;
      });
    };

    window.addEventListener('pointermove', onMove);
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (raf) cancelAnimationFrame(raf);
      if (el) el.style.transform = '';
    };
  }, [prefersReducedMotion, isSmallScreen]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      <div ref={containerRef} className="absolute inset-0 will-change-transform">
        <style>{`
          @keyframes riseBubbleFast {
            0% { transform: translateY(110vh) scale(1); opacity: 0; }
            6% { opacity: var(--o); }
            50% { opacity: calc(var(--o) * 0.9); }
            100% { transform: translateY(-48vh) scale(0.9); opacity: 0; }
          }
          @keyframes riseBubbleSlow {
            0% { transform: translateY(120vh) scale(1); opacity: 0; }
            8% { opacity: var(--o); }
            50% { opacity: calc(var(--o) * 0.85); }
            100% { transform: translateY(-64vh) scale(0.95); opacity: 0; }
          }
          /* subtle drifting shapes in the far back */
          @keyframes driftBack {
            0% { transform: translateY(0) translateX(-5%); }
            50% { transform: translateY(-6vh) translateX(6%); }
            100% { transform: translateY(0) translateX(-5%); }
          }
        `}</style>

        {/* Far layer: soft gradient/shape for depth */}
        <div aria-hidden className="absolute inset-0 -z-10 opacity-40">
          <div style={{
            position: 'absolute',
            right: '-10%',
            top: '10%',
            width: '60vw',
            height: '60vh',
            background: 'radial-gradient(ellipse at center, rgba(58,191,248,0.06), rgba(11,27,43,0))',
            filter: 'blur(50px)'
          }} className="animate-[driftBack_18s_linear_infinite]" />
          <div style={{
            position: 'absolute',
            left: '-8%',
            bottom: '5%',
            width: '40vw',
            height: '40vh',
            background: 'radial-gradient(ellipse at center, rgba(251,146,60,0.04), rgba(11,27,43,0))',
            filter: 'blur(40px)'
          }} className="animate-[driftBack_24s_linear_infinite]" />
        </div>

        {/* Mid layer: larger, faint bubbles */}
        <div aria-hidden className="absolute inset-0 -z-5">
          {midLayer.map((b, i) => (
            <div
              key={`mid-${i}`}
              style={{
                left: b.left,
                width: b.size,
                height: b.size,
                bottom: -(b.size / 2),
                opacity: b.opacity,
                animation: prefersReducedMotion ? 'none' : `riseBubbleSlow ${b.duration}s linear infinite`,
                animationDelay: `${b.delay}s`,
                ['--o' as any]: b.opacity,
                transform: 'translateZ(0)'
              }}
              className="absolute rounded-full bg-white/60 blur-[8px]"
            />
          ))}
        </div>

        {/* Foreground: smaller, crisper bubbles */}
        <div aria-hidden className="absolute inset-0 -z-0">
          {foreground.map((b, i) => (
            <div
              key={`fg-${i}`}
              style={{
                left: b.left,
                width: b.size,
                height: b.size,
                bottom: -(b.size / 2),
                opacity: b.opacity,
                animation: prefersReducedMotion ? 'none' : `riseBubbleFast ${b.duration}s linear infinite`,
                animationDelay: `${b.delay}s`,
                ['--o' as any]: b.opacity,
              }}
              className="absolute rounded-full bg-white/80 blur-[0.5px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BubbleBackground;

import React, { useMemo } from 'react';

// Small rising bubbles background. Non-interactive (pointer-events-none).
export const BubbleBackground: React.FC<{ count?: number }> = ({ count = 20 }) => {
  const bubbles = useMemo(() => {
    const arr = [] as Array<{ left: string; size: number; duration: number; delay: number; opacity: number }>;
    for (let i = 0; i < count; i++) {
      const left = Math.round(Math.random() * 100) + '%';
      const size = Math.round(6 + Math.random() * 22); // 6 - 28 px
      const duration = +(8 + Math.random() * 18).toFixed(2); // 8s - 26s
      const delay = +(-Math.random() * duration).toFixed(2); // negative to start at random positions
      const opacity = +(0.15 + Math.random() * 0.5).toFixed(2); // 0.15 - 0.65
      arr.push({ left, size, duration, delay, opacity });
    }
    return arr;
  }, [count]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      <style>{`
        @keyframes riseBubble {
          0% { transform: translateY(110vh) scale(1); opacity: 0; }
          8% { opacity: var(--o); }
          50% { opacity: calc(var(--o) * 0.9); }
          100% { transform: translateY(-20vh) scale(0.9); opacity: 0; }
        }
      `}</style>

      {bubbles.map((b, i) => (
        <div
          key={i}
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            bottom: - (b.size / 2),
            opacity: b.opacity,
            animation: `riseBubble ${b.duration}s linear infinite`,
            animationDelay: `${b.delay}s`,
            // css variable for opacity control in keyframes
            ['--o' as any]: b.opacity,
          }}
          className="absolute rounded-full bg-white/80 blur-[0.5px]"
        />
      ))}
    </div>
  );
};

export default BubbleBackground;

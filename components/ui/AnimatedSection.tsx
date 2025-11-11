
import React, { useRef } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';

interface AnimatedSectionProps {
  children: React.ReactNode;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};


import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  side?: 'left' | 'right';
}

export const Card: React.FC<CardProps> = ({ children, className = '', side = 'left' }) => {
  const borderSideClass = side === 'right' ? 'border-r-4' : 'border-l-4';
  const hoverTransform = side === 'right' ? 'hover:-translate-y-1 hover:-translate-x-1' : 'hover:-translate-y-1 hover:translate-x-1';

  return (
    <div
      className={`
        bg-[#112B3C] rounded-lg shadow-lg overflow-hidden relative
        ${borderSideClass} border-[#3ABFF8]
        transition-all duration-300 ease-in-out
        hover:shadow-2xl hover:shadow-[#3ABFF8]/20 hover:border-[#F97316]
        ${hoverTransform}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

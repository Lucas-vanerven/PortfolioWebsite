
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`
        bg-[#112B3C] rounded-lg shadow-lg overflow-hidden relative
        border-l-4 border-[#3ABFF8]
        transition-all duration-300 ease-in-out
        hover:shadow-2xl hover:shadow-[#3ABFF8]/20 hover:border-[#F97316]
        hover:-translate-y-1 hover:translate-x-1
        ${className}
      `}
    >
      {children}
    </div>
  );
};


import React, { useState, useEffect, useCallback } from 'react';
import type { HeroContent } from '../types';
import { AnimatedSection } from './ui/AnimatedSection';

interface HeroProps {
  content: HeroContent;
}

const images = [
  'https://picsum.photos/seed/me1/600/800',
  'https://picsum.photos/seed/me2/600/800',
  'https://picsum.photos/seed/me3/600/800',
];

export const Hero: React.FC<HeroProps> = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <AnimatedSection>
      <section id="hero" className="min-h-screen flex items-center justify-center py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-96 md:h-[32rem] bg-[#112B3C] rounded-lg overflow-hidden relative shadow-2xl">
            {images.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`Lucas van Erven ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-[#3ABFF8] mb-6">{content.title}</h1>
            <p className="text-lg text-[#E5E7EB] mb-4">{content.paragraph1}</p>
            <p className="text-lg text-[#A1A1AA]">{content.paragraph2}</p>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

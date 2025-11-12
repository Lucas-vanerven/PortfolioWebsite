
import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { HobbiesContent } from '../types';
import { Card } from './ui/Card';
import { AnimatedSection } from './ui/AnimatedSection';

export const Hobbies: React.FC<{ content: HobbiesContent }> = ({ content }) => {
  const hobbies = content.hobbies || [];
  const [emblaRef, embla] = useEmblaCarousel({ align: 'center', containScroll: 'trimSnaps', loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on('select', onSelect);
    embla.on('reInit', onSelect);
    return () => {
      embla.off('select', onSelect);
      embla.off('reInit', onSelect);
    };
  }, [embla, onSelect]);

  return (
    <AnimatedSection>
      <section id="hobbys" className="py-24">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#3ABFF8]">{content.title}</h2>
        <p className="text-lg text-center text-[#A1A1AA] mb-12">{content.intro}</p>

        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            {/* Embla carousel */}
            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-6 py-6 px-4">
                  {hobbies.map((hobby, i) => (
                    <div key={hobby.name} className="flex:0 shrink-0 basis-auto" style={{ flex: '0 0 auto' }}>
                      <div className="w-[260px] md:w-[340px]">
                        <Card>
                          <div className="p-4 md:p-6 h-full flex flex-col">
                            <h3 className="text-base md:text-lg font-bold text-[#3ABFF8] mb-2">{hobby.name}</h3>
                            <p className="text-xs md:text-sm text-[#A1A1AA] flex-grow">{hobby.description}</p>
                          </div>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prev / Next */}
              <button
                aria-label="Previous hobby"
                onClick={() => embla && embla.scrollPrev()}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-[#112B3C] border border-[#1E3A5F] rounded-full p-3 text-[#3ABFF8] hover:bg-[#1E3A5F] hover:border-[#3ABFF8] transition-all z-40"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                aria-label="Next hobby"
                onClick={() => embla && embla.scrollNext()}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-[#112B3C] border border-[#1E3A5F] rounded-full p-3 text-[#3ABFF8] hover:bg-[#1E3A5F] hover:border-[#3ABFF8] transition-all z-40"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-40">
                {hobbies.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => embla && embla.scrollTo(i)}
                    aria-label={`Go to ${hobbies[i].name}`}
                    className={`h-2 rounded-full transition-all ${i === selectedIndex ? 'bg-[#3ABFF8] w-8' : 'bg-[#1E3A5F] hover:bg-[#3ABFF8]/50 w-2'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Hobbies;

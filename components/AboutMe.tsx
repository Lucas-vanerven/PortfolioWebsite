
import React from 'react';
import type { AboutMeContent } from '../types';
import { Card } from './ui/Card';
import { AnimatedSection } from './ui/AnimatedSection';

interface AboutMeProps {
  content: AboutMeContent;
}

export const AboutMe: React.FC<AboutMeProps> = ({ content }) => {
  return (
    <AnimatedSection>
      <section id="about-me" className="py-24">
        <Card>
          <div className="p-8">
            <p className="mb-6 text-lg text-[#E5E7EB]">{content.paragraph1}</p>
            <hr className="border-t border-[#1E3A5F] my-6" />
            <p className="mb-6 text-lg text-[#E5E7EB]">{content.paragraph2}</p>
            <hr className="border-t border-[#1E3A5F] my-6" />
            <p className="text-lg text-[#E5E7EB]">{content.paragraph3}</p>
          </div>
        </Card>
      </section>
    </AnimatedSection>
  );
};


import React from 'react';
import type { GoalsContent } from '../types';
import { Card } from './ui/Card';
import { AnimatedSection } from './ui/AnimatedSection';

const GoalIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3ABFF8] mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const GoalIconImage: React.FC<{ src: string; alt?: string }> = ({ src, alt = 'goal' }) => (
  <img src={src} alt={alt} className="h-8 w-8 mr-4 object-contain" />
);

const getGoalIcon = (title: string) => {
  const baseUrl = import.meta.env.BASE_URL;
  const t = title.toLowerCase();
  if (t.includes('strong')) {
    return <GoalIconImage src={`${baseUrl}assets/companies/strong_viking_logo.svg`} alt={'Strong Viking'} />;
  }
  if (t.includes('weerwater') || t.includes('weerwater run') || t.includes('almere')) {
    return <GoalIconImage src={`${baseUrl}assets/companies/Almere_weerwater_run_logo.jpg`} alt={'Almere Weerwater Run'} />;
  }
  if (t.includes('marathon')) {
    return <GoalIconImage src={`${baseUrl}assets/icons/running.svg`} alt={'Running / Marathon'} />;
  }
  if (t.includes('kilimanjaro')) {
    return <GoalIconImage src={`${baseUrl}assets/icons/Mountain.svg`} alt={'Kilimanjaro / Mountain'} />;
  }
  if (t.includes('psych') || t.includes('psychologie') || t.includes('psychology')) {
    return <GoalIconImage src={`${baseUrl}assets/icons/psychology.svg`} alt={'Psychology'} />;
  }
  return <GoalIconSVG />;
};


export const Goals: React.FC<{ content: GoalsContent }> = ({ content }) => {
  return (
    <AnimatedSection>
      <section id="doelen" className="py-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#3ABFF8]">{content.title}</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
      {content.goals.map((goal, index) => (
      <Card key={index}>
        <div className="p-6 flex items-center">
          {getGoalIcon(goal.title)}
          <div>
            <h3 className="text-xl font-bold text-[#E5E7EB]">{goal.title}</h3>
            <p className="text-[#A1A1AA] mt-1">{goal.description}</p>
          </div>
        </div>
      </Card>
      ))}
        </div>
      </section>
    </AnimatedSection>
  );
};

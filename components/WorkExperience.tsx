
import React, { useState } from 'react';
import type { WorkExperienceContent, Job, SkillCategory, TransferableSkill } from '../types';
import { Card } from './ui/Card';
import { AnimatedSection } from './ui/AnimatedSection';

const Pill: React.FC<{ text: string }> = ({ text }) => (
  <span className="inline-flex items-center bg-[#1e3a5f] text-[#3abff8] px-4 py-1 text-sm md:text-base font-bold rounded-full">
    {text}
  </span>
);

const JobCard: React.FC<{ job: Job; category?: string }> = ({ job, category }) => (
  <Card>
    <div className="p-6 relative">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-bold text-[#3ABFF8]">{job.title}</h3>
          <p className="font-semibold text-[#E5E7EB]">{job.company}</p>
          <p className="mt-1">
            <span className="inline-block text-xs md:text-sm text-[#E5E7EB] border border-[#A1A1AA] px-2 py-1 rounded-full">
              {job.date}
            </span>
          </p>
        </div>
      </div>
      {job.logoUrl && (
        <img src={job.logoUrl} alt={`${job.company} logo`} className="absolute top-6 right-6 w-16 h-16 object-contain opacity-10" />
      )}
      {/* For IT jobs, show supervisor under the description; otherwise show above */}
  {category !== 'it' && job.supervisor && <p className="text-sm text-[#A1A1AA] mb-4 pb-2"><strong>Praktijkbegeleider / Coach:</strong> {job.supervisor}</p>}
      <p className="text-[#A1A1AA] mb-4">{job.description}</p>
  {category === 'it' && job.supervisor && <p className="text-sm text-[#A1A1AA] mt-2 pb-2"><strong>Praktijkbegeleider / Coach:</strong> {job.supervisor}</p>}
      <div className="flex flex-wrap gap-2">
        {job.skills.map(skill => <Pill key={skill} text={skill} />)}
      </div>
    </div>
  </Card>
);

const SkillsTable: React.FC<{ category: SkillCategory }> = ({ category }) => (
    <div className="bg-[#112B3C] p-6 rounded-lg border border-[#1E3A5F]">
        <h4 className="text-lg font-bold text-[#3ABFF8] border-b-2 border-[#1E3A5F] pb-2 mb-4">{category.title}</h4>
        <ul className="space-y-3">
            {category.skills.map(skill => (
                <li key={skill.name} className="flex items-center text-[#E5E7EB]">
                    {skill.logoUrl ? <img src={skill.logoUrl} alt={skill.name} className="w-5 h-5 mr-3"/> : <span className="w-5 h-5 mr-3"></span>}
                    {skill.name}
                </li>
            ))}
        </ul>
    </div>
);

const TransferableSkillCard: React.FC<{ skill: TransferableSkill }> = ({ skill }) => (
    <Card>
        <div className="p-6">
            <h4 className="text-lg font-bold text-[#3ABFF8] mb-2">{skill.title}</h4>
            <p className="text-[#A1A1AA]">{skill.description}</p>
        </div>
    </Card>
);


export const WorkExperience: React.FC<{ content: WorkExperienceContent }> = ({ content }) => {
  const [activeCategory, setActiveCategory] = useState<'it' | 'communication' | 'logistics'>('it');
  
  const categories = [
    { id: 'it', name: content.categories.it },
    { id: 'communication', name: content.categories.communication },
    { id: 'logistics', name: content.categories.logistics },
  ];

  return (
    <AnimatedSection>
      <section id="werkervaring" className="py-24">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#3ABFF8]">{content.title}</h2>
        
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-[#112B3C] p-2 rounded-full border border-[#1E3A5F]">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${activeCategory === cat.id ? 'bg-[#3ABFF8] text-[#0B1B2B]' : 'text-[#A1A1AA] hover:bg-[#1E3A5F]'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {content.jobs[activeCategory].map((job) => (
            <JobCard key={`${job.company}-${job.title}`} job={job} category={activeCategory} />
          ))}
        </div>

        {activeCategory === 'it' && (
            <div className="mt-16">
                <h3 className="text-3xl font-bold text-center mb-8 text-[#3ABFF8]">{content.technicalSkills.title}</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    <SkillsTable category={content.technicalSkills.frontend} />
                    <SkillsTable category={content.technicalSkills.backend} />
                    <SkillsTable category={content.technicalSkills.database} />
                </div>
            </div>
        )}

        {(activeCategory === 'communication' || activeCategory === 'logistics') && (
             <div className="mt-16">
                <h3 className="text-3xl font-bold text-center mb-8 text-[#3ABFF8]">{content.transferableSkills.title}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    {content.transferableSkills.skills.map(skill => (
                        <TransferableSkillCard key={skill.title} skill={skill} />
                    ))}
                </div>
            </div>
        )}

      </section>
    </AnimatedSection>
  );
};

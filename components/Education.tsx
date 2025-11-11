
import React, { useState } from 'react';
import type { EducationContent, EducationItem, CourseStatus } from '../types';
import { Card } from './ui/Card';
import { Dialog } from './ui/Dialog';
import { AnimatedSection } from './ui/AnimatedSection';

const statusColors: { [key in CourseStatus | 'Lopend' | 'Afgerond']: string } = {
  Lopend: 'bg-orange-500/20 text-orange-400 border border-orange-400/30',
  Afgerond: 'bg-green-500/20 text-green-400 border border-green-400/30',
  Komend: 'bg-gray-500/20 text-gray-400 border border-gray-400/30',
};


const Pill: React.FC<{ text: string; className?: string }> = ({ text, className }) => (
  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${className}`}>
    {text}
  </span>
);

const EducationCard: React.FC<{ item: EducationItem; onCardClick: (item: EducationItem) => void; }> = ({ item, onCardClick }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleClick = () => {
    if(item.dialogContent){
      onCardClick(item);
    } else if (item.accordionContent) {
      setIsAccordionOpen(prev => !prev);
    }
  };
  
  return (
    <>
      <div onClick={handleClick} className="cursor-pointer">
        <Card>
          <div className="p-6 relative">
            <div className="flex items-start">
              <div>
                <h3 className="text-2xl font-bold text-[#3ABFF8]">{item.institution}</h3>
                <div className="mt-2 flex items-center space-x-3">
                  <p className="text-sm text-[#A1A1AA]">{item.years}</p>
                  <Pill text={item.status} className={statusColors[item.status]} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4 border-t border-[#1E3A5F] pt-4">
              <div>
                <p className="text-sm text-[#A1A1AA]">Opleidingsnaam</p>
                <p className="font-semibold">{item.details.opleidingsnaam}</p>
              </div>
              <div>
                <p className="text-sm text-[#A1A1AA]">Niveau</p>
                <p className="font-semibold">{item.details.niveau}</p>
              </div>
              <div>
                <p className="text-sm text-[#A1A1AA]">Uitstroomprofiel</p>
                <p className="font-semibold">{item.details.uitstroomprofiel}</p>
              </div>
              <div>
                <p className="text-sm text-[#A1A1AA]">Locatie</p>
                <p className="font-semibold">{item.details.locatie}</p>
              </div>
            </div>

            {item.logoUrl && (
              <img src={item.logoUrl} alt={`${item.institution} logo`} className="absolute top-6 right-6 w-16 h-16 object-contain opacity-10" />
            )}

            {(item.dialogContent || item.accordionContent) && (
              <p className="text-center mt-6 text-[#3ABFF8] font-semibold text-sm">{item.clickableText}</p>
            )}
          </div>
        </Card>
      </div>

      {item.accordionContent && (
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isAccordionOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="bg-[#0f2638] rounded-b-lg p-6 -mt-2">
            <h4 className="text-xl font-bold text-[#3ABFF8]">{item.accordionContent.title}</h4>
            <div className="flex items-center mt-4">
                {item.accordionContent.logoUrl && <img src={item.accordionContent.logoUrl} alt="Certificate Logo" className="h-10 mr-4" />}
                <div>
                    <p><strong>Certificaatnummer:</strong> {item.accordionContent.certificateNumber}</p>
                    <p><strong>Uitgegeven door:</strong> {item.accordionContent.issuedBy}</p>
                    <p><strong>Datum:</strong> {item.accordionContent.date}</p>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


export const Education: React.FC<{ content: EducationContent }> = ({ content }) => {
  const [selectedItem, setSelectedItem] = useState<EducationItem | null>(null);

  const handleCardClick = (item: EducationItem) => {
    setSelectedItem(item);
  };

  const handleCloseDialog = () => {
    setSelectedItem(null);
  };

  return (
    <AnimatedSection>
      <section id="opleiding" className="py-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#3ABFF8]">{content.title}</h2>
        <div className="grid grid-cols-1 gap-8">
          {content.institutions.map((item) => (
            <div key={item.id} className="w-full md:w-2/3 mx-auto">
              <EducationCard item={item} onCardClick={handleCardClick} />
            </div>
          ))}
        </div>
        
        {selectedItem && selectedItem.dialogContent && (
          <Dialog isOpen={!!selectedItem} onClose={handleCloseDialog} title={selectedItem.dialogContent.title}>
              {selectedItem.id === 'windesheim' && selectedItem.dialogContent.projects && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#3ABFF8] mb-4">Projecten</h3>
                  <div className="space-y-4">
                  {selectedItem.dialogContent.projects.map(p => (
                    <div key={p.title} className="bg-[#0B1B2B] p-4 rounded-lg border border-[#1E3A5F]">
                      <h4 className="font-bold text-lg">{p.title} <span className="text-sm font-normal text-[#A1A1AA]">{p.date}</span></h4>
                      <p className="text-sm my-2">{p.description}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {p.skills.map(skill => <Pill key={skill} text={skill} className="bg-gray-700 text-gray-300"/>)}
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
              )}

            {selectedItem.id === 'hu' && selectedItem.dialogContent.mainProject && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#3ABFF8] mb-4">Hoofdproject</h3>
                   <div className="bg-[#0B1B2B] p-4 rounded-lg border border-[#1E3A5F]">
                      <h4 className="font-bold text-lg">{selectedItem.dialogContent.mainProject.title}</h4>
                      <p className="text-sm my-2">{selectedItem.dialogContent.mainProject.description}</p>
                    </div>
                </div>
            )}
            
            {selectedItem.id === 'windesheim' && selectedItem.dialogContent.curriculum && (
              <div>
                <h3 className="text-2xl font-bold text-[#3ABFF8] mb-4">Curriculum</h3>
                <div className="space-y-6">
                {selectedItem.dialogContent.curriculum.map(year => (
                  <div key={year.year}>
                    <h4 className="text-xl font-semibold mb-2 text-[#E5E7EB]">Jaar {year.year}</h4>
                    <ul className="space-y-2">
                    {year.courses.map(course => (
                      <li key={course.name} className="flex justify-between items-center bg-[#0B1B2B] p-2 rounded">
                        <span>{course.name}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-[#A1A1AA]">{course.credits} EC</span>
                          <Pill text={course.status} className={statusColors[course.status]} />
                        </div>
                      </li>
                    ))}
                    </ul>
                  </div>
                ))}
                </div>
              </div>
            )}
            
            {selectedItem.id === 'hu' && selectedItem.dialogContent.followedCourses && (
                 <div>
                    <h3 className="text-2xl font-bold text-[#3ABFF8] mb-4">Gevolgde Vakken</h3>
                     <ul className="space-y-2">
                    {selectedItem.dialogContent.followedCourses.map(course => (
                      <li key={course.name} className="flex justify-between items-center bg-[#0B1B2B] p-2 rounded">
                        <span>{course.name}</span>
                         <span className="text-sm text-[#A1A1AA]">{course.credits} EC</span>
                      </li>
                    ))}
                    </ul>
                </div>
            )}

          </Dialog>
        )}
      </section>
    </AnimatedSection>
  );
};

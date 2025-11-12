
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


const Pill: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => (
  <span className={`inline-flex items-center justify-center px-3 py-1 text-xs font-semibold rounded-full w-16 md:w-20 text-center ${className}`}>
    {text}
  </span>
);

// Compact skill pill used inside project dialogs — no fixed width so it sizes to content.
const SkillPill: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => (
  <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${className}`}>
    {text}
  </span>
);

const EducationCard: React.FC<{ item: EducationItem; onCardClick: (item: EducationItem) => void; labels?: any }> = ({ item, onCardClick, labels }) => {
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
          <div className="p-6 pb-12 md:pb-6 relative">
            <div className="flex items-start">
              <div className="w-full">
                {/* mobile: centered logo above the name */}
                {item.logoUrl && (
                  <div className="flex justify-center md:hidden mb-2">
                    <img src={item.logoUrl} alt={`${item.institution} logo`} className="w-12 h-12 object-contain" />
                  </div>
                )}

                <h3 className="text-2xl font-bold text-[#3ABFF8]">{item.institution}</h3>

                <div className="mt-2 flex items-center space-x-3">
                  <p className="text-sm text-[#A1A1AA]">{item.years}</p>
                  {/* translate status labels based on known Dutch status values, fallback to raw status */}
                  {(() => {
                    const s = (item.status || '').toLowerCase();
                    let disp = item.status;
                    if (labels) {
                      if (s.includes('lop')) disp = labels.statusInProgress ?? item.status;
                      else if (s.includes('afger')) disp = labels.statusCompleted ?? item.status;
                      else if (s.includes('kom')) disp = labels.statusUpcoming ?? item.status;
                    }
                    return <Pill text={disp} className={statusColors[item.status]} />;
                  })()}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4 border-t border-[#1E3A5F] pt-4">
              <div>
                <p className="text-sm text-[#A1A1AA]">{labels?.courseName ?? 'Opleidingsnaam'}</p>
                <p className="font-semibold">{item.details.opleidingsnaam}</p>
              </div>
              <div>
                <p className="text-sm text-[#A1A1AA]">{labels?.level ?? 'Niveau'}</p>
                <p className="font-semibold">{item.details.niveau}</p>
              </div>
              <div>
                <p className="text-sm text-[#A1A1AA]">{labels?.profile ?? 'Uitstroomprofiel'}</p>
                <p className="font-semibold">{item.details.uitstroomprofiel}</p>
              </div>
              <div>
                <p className="text-sm text-[#A1A1AA]">{labels?.location ?? 'Locatie'}</p>
                <p className="font-semibold">{item.details.locatie}</p>
              </div>
            </div>

            {item.logoUrl && (
              <img src={item.logoUrl} alt={`${item.institution} logo`} className="hidden md:block absolute top-6 right-6 w-16 h-16 object-contain" />
            )}

            {(item.dialogContent || item.accordionContent) && (
              <div className="absolute bottom-[6px] right-4">
                <div className="flex items-center space-x-2 text-[#3ABFF8] font-semibold text-sm cursor-pointer">
                  <span>{item.clickableText}</span>
                  {item.accordionContent && (
                    <span className={`transform transition-transform duration-300 ${isAccordionOpen ? 'rotate-90' : 'rotate-0'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>

      {item.accordionContent && (
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isAccordionOpen ? 'max-h-96' : 'max-h-0'}`}>
            <div className={`bg-[#0f2638] rounded-t-lg rounded-b-lg p-6 mt-4 md:mt-2 w-11/12 md:w-5/6 mx-auto ${item.id === 'baken' ? 'border-r-4 border-[#3ABFF8] transition-all duration-300 hover:shadow-2xl hover:shadow-[#3ABFF8]/20 hover:border-[#F97316] hover:-translate-y-1 hover:-translate-x-1' : ''}`}>
            <h4 className="text-xl font-bold text-[#3ABFF8]">{item.accordionContent.title}</h4>
            <div className="flex items-center mt-4">
                {item.accordionContent.logoUrl && <img src={item.accordionContent.logoUrl} alt="Certificate Logo" className="h-10 mr-4" />}
                <div>
                    <p><strong>{labels?.certificateNumber ?? 'Certificaatnummer'}:</strong> {item.accordionContent.certificateNumber}</p>
                    <p><strong>{labels?.issuedBy ?? 'Uitgegeven door'}:</strong> {item.accordionContent.issuedBy}</p>
                    <p><strong>{labels?.certificateDate ?? 'Datum'}:</strong> {item.accordionContent.date}</p>
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
              <EducationCard item={item} onCardClick={handleCardClick} labels={content.labels} />
            </div>
          ))}
        </div>
        
        {selectedItem && selectedItem.dialogContent && (
          <Dialog isOpen={!!selectedItem} onClose={handleCloseDialog} title={selectedItem.dialogContent.title}>
                  {selectedItem.id === 'windesheim' && selectedItem.dialogContent.projects && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#3ABFF8] mb-4">{content.labels?.projects ?? 'Projecten'}</h3>
                  <div className="space-y-4">
                  {selectedItem.dialogContent.projects.map(p => (
                    <div key={p.title} className="bg-[#0B1B2B] p-4 rounded-lg border border-[#1E3A5F]">
                      <h4 className="font-bold text-lg">{p.title} <span className="text-sm font-normal text-[#A1A1AA]">{p.date}</span></h4>
                      <p className="text-sm my-2">{p.description}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {p.skills.map(skill => <SkillPill key={skill} text={skill} className="bg-gray-700 text-gray-300"/>)}
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
              )}

    {selectedItem.id === 'hu' && selectedItem.dialogContent.mainProject && (
                <div className="mb-8">
      <h3 className="text-2xl font-bold text-[#3ABFF8] mb-4">{content.labels?.mainProject ?? 'Hoofdproject'}</h3>
                   <div className="bg-[#0B1B2B] p-4 rounded-lg border border-[#1E3A5F]">
                      <h4 className="font-bold text-lg">{selectedItem.dialogContent.mainProject.title}</h4>
                      <p className="text-sm my-2">{selectedItem.dialogContent.mainProject.description}</p>
                    </div>
                </div>
            )}
            
            {selectedItem.id === 'windesheim' && selectedItem.dialogContent.curriculum && (
              <div>
                <h3 className="text-2xl font-bold text-[#3ABFF8] mb-4">{content.labels?.curriculum ?? 'Curriculum'}</h3>
                <div className="space-y-6">
                {selectedItem.dialogContent.curriculum.map(year => (
                  <div key={year.year}>
                    <h4 className="text-xl font-semibold mb-2 text-[#E5E7EB]">{content.labels?.year ?? 'Jaar'} {year.year}</h4>
                    <ul className="space-y-2">
                    {year.courses.map(course => (
                      <li key={course.name} className="flex justify-between items-center bg-[#0B1B2B] p-2 rounded">
                        <span>{course.name}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-[#A1A1AA]">{course.credits} EC</span>
                          {/* translate status display using content labels when available */}
                          <Pill text={((course.status || '').toLowerCase().includes('lop') ? content.labels?.statusInProgress : (course.status || '').toLowerCase().includes('afger') ? content.labels?.statusCompleted : (course.status || '').toLowerCase().includes('kom') ? content.labels?.statusUpcoming : course.status) || course.status} className={statusColors[course.status]} />
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
        <h3 className="text-2xl font-bold text-[#3ABFF8] mb-4">{content.labels?.followedCourses ?? 'Gevolgde Vakken'}</h3>
                     <ul className="space-y-2">
                    {selectedItem.dialogContent.followedCourses.map(course => (
                      <li key={course.name} className="flex justify-between items-center bg-[#0B1B2B] p-2 rounded">
                        <span>{course.name}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-[#A1A1AA]">5 EC</span>
                          <Pill text={content.labels?.statusCompleted ?? 'Afgerond'} className={statusColors['Afgerond']} />
                        </div>
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

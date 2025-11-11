
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Education } from './components/Education';
import { WorkExperience } from './components/WorkExperience';
import { Hobbies } from './components/Hobbies';
import { Goals } from './components/Goals';
import { Footer } from './components/Footer';
import { CONTENT } from './constants';
import type { Language } from './types';

function App() {
  const [language, setLanguage] = useState<Language>('nl');
  const content = CONTENT[language];

  return (
    <div className="bg-[#0B1B2B] text-[#E5E7EB] font-sans leading-relaxed">
      <Header 
        content={content.header} 
        language={language} 
        setLanguage={setLanguage} 
      />
      <main className="container mx-auto px-4 md:px-8 lg:px-16">
        <Hero content={content.hero} />
        <AboutMe content={content.aboutMe} />
        <Education content={content.education} />
        <WorkExperience content={content.workExperience} />
        <Hobbies content={content.hobbies} />
        <Goals content={content.goals} />
      </main>
      <Footer content={content.footer} />
    </div>
  );
}

export default App;

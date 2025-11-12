
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Education } from './components/Education';
import { WorkExperience } from './components/WorkExperience';
import { Hobbies } from './components/Hobbies';
import { Goals } from './components/Goals';
import { Footer } from './components/Footer';
import BubbleBackground from './components/ui/BubbleBackground';
import { CONTENT } from './constants';
import type { Language } from './types';

function App() {
  const [language, setLanguage] = useState<Language>('nl');
  const content = CONTENT[language];

  return (
  <div className="bg-[#0B1B2B] text-[#E5E7EB] font-sans leading-relaxed relative">
  {/* increase bubbles by ~50% for a denser background */}
  <BubbleBackground count={30} />
      <div className="w-full mx-auto px-4 md:px-8 md:w-3/4">
        <Header
          content={content.header}
          language={language}
          setLanguage={setLanguage}
        />
        <main className="w-full">
          <Hero content={content.hero} />
          <AboutMe content={content.aboutMe} />
          <Education content={content.education} />
          <WorkExperience content={content.workExperience} />
          <Hobbies content={content.hobbies} />
          <Goals content={content.goals} />
        </main>
      </div>
      <Footer content={content.footer} />
    </div>
  );
}

export default App;

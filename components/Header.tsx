
import React, { useState, useEffect } from 'react';
import type { HeaderContent, Language } from '../types';

interface HeaderProps {
  content: HeaderContent;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);


export const Header: React.FC<HeaderProps> = ({ content, language, setLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        setIsScrolled(window.scrollY > heroSection.offsetHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {id: "opleiding", text: language === 'nl' ? 'Opleiding' : 'Education'},
    {id: "werkervaring", text: language === 'nl' ? 'Werkervaring' : 'Work Experience'},
    {id: "hobbys", text: language === 'nl' ? 'Hobby’s' : 'Hobbies'},
    {id: "doelen", text: language === 'nl' ? 'Doelen' : 'Goals'},
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0B1B2B]/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl font-bold text-[#3ABFF8]">{content.name}</div>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-lg text-[#E5E7EB] hover:text-[#3ABFF8] transition-colors duration-300">
                {link.text}
              </button>
            ))}
            <div className="flex items-center space-x-2 bg-[#112B3C] p-1 rounded-full">
              <button 
                onClick={() => setLanguage('nl')}
                className={`px-3 py-1 text-sm rounded-full ${language === 'nl' ? 'bg-[#3ABFF8] text-[#0B1B2B]' : 'text-[#A1A1AA]'}`}
              >
                NL
              </button>
              <button 
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm rounded-full ${language === 'en' ? 'bg-[#3ABFF8] text-[#0B1B2B]' : 'text-[#A1A1AA]'}`}
              >
                EN
              </button>
            </div>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu could be implemented here */}
          </div>
        </div>
      </div>
    </header>
  );
};

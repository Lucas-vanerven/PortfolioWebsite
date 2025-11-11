
import React from 'react';
import type { FooterContent } from '../types';

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
    </svg>
);


export const Footer: React.FC<{ content: FooterContent }> = ({ content }) => {
  return (
    <footer className="bg-[#112B3C] border-t border-[#1E3A5F]">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 text-center">
        <h2 className="text-3xl font-bold text-[#3ABFF8] mb-6">{content.title}</h2>
        <div className="flex justify-center items-center space-x-8">
            <a href={`mailto:${content.email}`} className="flex flex-col items-center text-[#A1A1AA] hover:text-[#3ABFF8] transition-colors">
                <EmailIcon />
                <span className="mt-2 text-sm">{content.email}</span>
            </a>
            <a href={`https://${content.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-[#A1A1AA] hover:text-[#3ABFF8] transition-colors">
                <LinkedInIcon />
                <span className="mt-2 text-sm">{content.linkedin}</span>
            </a>
        </div>
        <p className="text-sm text-[#A1A1AA] mt-10">© {new Date().getFullYear()} Lucas van Erven. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

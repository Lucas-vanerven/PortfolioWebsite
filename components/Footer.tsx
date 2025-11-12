
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
  <footer className="relative bg-[#112B3C] border-t border-[#1E3A5F]">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-6 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 space-y-6 md:space-y-0">
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold text-[#3ABFF8]">Vind mij op LinkedIn</p>
            <div className="mt-3">
              <a
                href={`https://www.linkedin.com/in/lucas-van-erven`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-[#3ABFF8] text-[#E5E7EB] px-4 py-2 rounded-full font-semibold hover:bg-[#3ABFF8]/5 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="">Lucas van Erven</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold text-[#3ABFF8] text-center">Of mail mij persoonlijk</p>
            <div className="mt-3 flex flex-col sm:flex-row items-center sm:space-x-3 space-y-3 sm:space-y-0 flex-wrap justify-center">
              <a
                href={`mailto:lucasvanerven@gmail.com`}
                className="inline-flex items-center border border-[#3ABFF8] text-[#E5E7EB] px-4 py-2 rounded-full font-semibold hover:bg-[#3ABFF8]/5 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                </svg>
                <span className="text-sm break-all">lucasvanerven@gmail.com</span>
              </a>

              <a
                href={`mailto:lucas.van.erven@student.windesheim.nl`}
                className="inline-flex items-center border border-[#3ABFF8] text-[#E5E7EB] px-4 py-2 rounded-full font-semibold hover:bg-[#3ABFF8]/5 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                </svg>
                <span className="text-sm break-all">lucas.van.erven@windesheim.nl</span>
              </a>
            </div>
          </div>
        </div>

        {/* small / mobile: keep centered copyright so it doesn't overlap content */}
        <p className="text-sm text-[#A1A1AA] mt-6 md:hidden">© {new Date().getFullYear()} Lucas van Erven. All Rights Reserved.</p>

        {/* desktop: place copyright bottom-right, smaller size, absolutely positioned so it doesn't affect layout */}
        <p className="hidden md:block text-xs text-[#A1A1AA] absolute right-6 bottom-3">© {new Date().getFullYear()} Lucas van Erven. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

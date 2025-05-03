import React from 'react';
import { GithubIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-[#1D1E2C] dark:bg-[#0A0A0F] text-[#F8F4E3]/70 py-8 border-t border-[#F8F4E3]/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="text-xl font-bold relative text-[#F8F4E3]">
                <span className="relative z-10">K</span>
                <span className="absolute -top-1 -left-1 text-[#EB6424] opacity-70 z-0">
                  K
                </span>
              </div>
              <span className="ml-2 text-sm">
                © {new Date().getFullYear()} Korede. All rights reserved.
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <a href="https://github.com/Stephen30o0" target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 rounded-full bg-[#F8F4E3]/5 hover:bg-[#F8F4E3]/10 transition-colors duration-300" aria-label="GitHub Profile">
              <GithubIcon className="w-5 h-5 mr-2" />
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-[#F8F4E3]/10 text-center text-xs">
          <p>
            Designed with passion for technology, sustainability, and cultural
            preservation.
          </p>
          <div className="mt-2 flex justify-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#086375]"></span>
            <span className="w-2 h-2 rounded-full bg-[#EB6424]"></span>
            <span className="w-2 h-2 rounded-full bg-[#8DB580]"></span>
          </div>
        </div>
      </div>
    </footer>;
};
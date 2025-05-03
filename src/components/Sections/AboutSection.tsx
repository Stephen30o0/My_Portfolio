import React, { useEffect, useState } from 'react';
import { BookOpenIcon, CodeIcon, BriefcaseIcon, GraduationCapIcon, LeafIcon, PaletteIcon } from 'lucide-react';
export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1
    });
    const section = document.getElementById('about');
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  return <section id="about" className="py-20 bg-gradient-to-b from-[#F8F4E3] to-white dark:from-[#0A0A0F] dark:to-[#1D1E2C]">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1D1E2C] dark:text-white inline-block relative">
            About Me
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#EB6424]"></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-8">
              <p className="text-lg mb-6 text-[#1D1E2C] dark:text-[#F8F4E3] leading-relaxed">
                I'm passionate about using technology to solve real-world
                problems, preserve cultural heritage, and promote
                sustainability. My work spans from IoT-enabled eco-friendly
                solutions to AI-powered platforms, reflecting my drive for
                innovation with purpose.
              </p>
            </div>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#086375]/10 dark:bg-[#086375]/30 flex items-center justify-center mr-3">
                  <GraduationCapIcon className="w-5 h-5 text-[#086375] dark:text-[#86EFAC]" />
                </div>
                <h3 className="text-xl font-semibold text-[#086375] dark:text-[#86EFAC]">
                  Education
                </h3>
              </div>
              <p className="pl-14 text-[#1D1E2C] dark:text-[#F8F4E3]">
                Bachelor of Science in Software Engineering
                <br />
                <span className="text-sm text-[#1D1E2C]/70 dark:text-[#F8F4E3]/70">
                  African Leadership University, Kigali, Rwanda
                </span>
              </p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#EB6424]/10 dark:bg-[#EB6424]/30 flex items-center justify-center mr-3">
                  <BookOpenIcon className="w-5 h-5 text-[#EB6424] dark:text-[#FCA5A5]" />
                </div>
                <h3 className="text-xl font-semibold text-[#EB6424] dark:text-[#FCA5A5]">
                  Focus Areas
                </h3>
              </div>
              <div className="pl-14 grid grid-cols-2 gap-3">
                <div className="flex items-center">
                  <CodeIcon className="w-4 h-4 mr-2 text-[#086375] dark:text-[#86EFAC]" />
                  <span className="text-[#1D1E2C] dark:text-[#F8F4E3]">
                    Software Engineering
                  </span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[#086375]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 18.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"></path>
                    <path d="M12 22v-3.5"></path>
                    <path d="M12 2v3.5"></path>
                    <path d="M4.93 19.07l2.47-2.47"></path>
                    <path d="M16.6 7.4l2.47-2.47"></path>
                    <path d="M2 12h3.5"></path>
                    <path d="M18.5 12H22"></path>
                    <path d="M4.93 4.93l2.47 2.47"></path>
                    <path d="M16.6 16.6l2.47 2.47"></path>
                  </svg>
                  <span>AI/ML</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[#8DB580]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 8.32a7.43 7.43 0 0 1 0 7.36"></path>
                    <path d="M9.6 6.55a10.11 10.11 0 0 1 0 10.9"></path>
                    <path d="M13.2 4.78a12.79 12.79 0 0 1 0 14.44"></path>
                    <path d="M16.8 3a15.56 15.56 0 0 1 0 18"></path>
                    <path d="M20.4 1.23a18.24 18.24 0 0 1 0 21.54"></path>
                  </svg>
                  <span>IoT</span>
                </div>
                <div className="flex items-center">
                  <LeafIcon className="w-4 h-4 mr-2 text-[#8DB580]" />
                  <span>Sustainability</span>
                </div>
                <div className="flex items-center col-span-2">
                  <PaletteIcon className="w-4 h-4 mr-2 text-[#EB6424]" />
                  <span>Cultural Preservation</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`transform transition-all duration-700 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Journey timeline */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#086375] via-[#EB6424] to-[#8DB580]"></div>
              <div className="ml-12 relative mb-12">
                <div className="absolute -left-12 top-0 w-8 h-8 rounded-full border-4 border-[#F8F4E3] dark:border-[#1D1E2C] bg-[#086375] flex items-center justify-center">
                  <GraduationCapIcon className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[#086375] dark:text-[#86EFAC] mb-2">
                  Education Journey
                </h4>
                <p className="text-sm text-[#1D1E2C] dark:text-[#F8F4E3]/90">
                  Completed Bachelor of Science in Software Engineering at
                  African Leadership University, focusing on sustainable
                  technology solutions.
                </p>
              </div>
              <div className="ml-12 relative mb-12">
                <div className="absolute -left-12 top-0 w-8 h-8 rounded-full border-4 border-[#F8F4E3] dark:border-[#1D1E2C] bg-[#EB6424] flex items-center justify-center">
                  <BriefcaseIcon className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[#EB6424] dark:text-[#FCA5A5] mb-2">
                  Founding Startups
                </h4>
                <p className="text-sm text-[#1D1E2C] dark:text-[#F8F4E3]/70">
                  Founded innovative startups like EcoDrinks, focusing on
                  sustainable solutions to real-world problems.
                </p>
              </div>
              <div className="ml-12 relative">
                <div className="absolute -left-12 top-0 w-8 h-8 rounded-full border-4 border-[#F8F4E3] dark:border-[#1D1E2C] bg-[#8DB580] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m14 7-5 5 5 5"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-[#8DB580] dark:text-[#FCA5A5] mb-2">
                  Cultural Strategist
                </h4>
                <p className="text-sm text-[#1D1E2C] dark:text-[#F8F4E3]/70">
                  Working on integrating arts and technology to preserve
                  cultural heritage through innovative platforms.
                </p>
              </div>
              <div className="mt-12 ml-12">
                <div className="bg-[#1D1E2C]/5 dark:bg-[#F8F4E3]/5 p-4 rounded-lg">
                  <div className="text-sm text-[#1D1E2C] dark:text-[#F8F4E3]">
                    <span className="font-semibold text-[#086375] dark:text-[#86EFAC]">
                      Achievements:
                    </span>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EB6424] dark:bg-[#FCA5A5] mr-2"></span>
                        <span className="text-[#1D1E2C] dark:text-[#F8F4E3]">
                          Future Port Awards Semi-Finalist (2024)
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EB6424] dark:bg-[#FCA5A5] mr-2"></span>
                        <span className="text-[#1D1E2C] dark:text-[#F8F4E3]">
                          ALX Ventures Accelerator Participant
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EB6424] dark:bg-[#FCA5A5] mr-2"></span>
                        <span className="text-[#1D1E2C] dark:text-[#F8F4E3]">
                          Cultural Strategist integrating arts and technology
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
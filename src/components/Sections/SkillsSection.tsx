import React, { useEffect, useState } from 'react';
import { SkillItem } from '../UI/SkillItem';
import { CodeIcon, DatabaseIcon, ServerIcon, GlobeIcon, PencilIcon } from 'lucide-react';
export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1
    });
    const section = document.getElementById('skills');
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  const skills = [
  // Languages
  {
    name: 'Python',
    icon: <CodeIcon className="w-5 h-5 text-[#086375]" />,
    category: 'language',
    level: 5
  }, {
    name: 'JavaScript',
    icon: <CodeIcon className="w-5 h-5 text-[#086375]" />,
    category: 'language',
    level: 5
  }, {
    name: 'Java',
    icon: <CodeIcon className="w-5 h-5 text-[#086375]" />,
    category: 'language',
    level: 4
  }, {
    name: 'HTML/CSS',
    icon: <CodeIcon className="w-5 h-5 text-[#086375]" />,
    category: 'language',
    level: 5
  }, {
    name: 'XML',
    icon: <CodeIcon className="w-5 h-5 text-[#086375]" />,
    category: 'language',
    level: 4
  },
  // Frameworks & Tools
  {
    name: 'React',
    icon: <GlobeIcon className="w-5 h-5 text-[#EB6424]" />,
    category: 'framework',
    level: 5
  }, {
    name: 'Node.js',
    icon: <ServerIcon className="w-5 h-5 text-[#EB6424]" />,
    category: 'framework',
    level: 4
  }, {
    name: 'Next.js',
    icon: <GlobeIcon className="w-5 h-5 text-[#EB6424]" />,
    category: 'framework',
    level: 5
  }, {
    name: 'Tailwind CSS',
    icon: <PencilIcon className="w-5 h-5 text-[#EB6424]" />,
    category: 'framework',
    level: 5
  }, {
    name: 'Unity',
    icon: <svg className="w-5 h-5 text-[#EB6424]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 0 0 4.6 9c-1 .6-1.7 1.8-1.7 3s.7 2.4 1.7 3c-.3 1.2 0 2.5 1 3.4.8.8 2.1 1.2 3.3 1 .6 1 1.8 1.6 3 1.6s2.4-.6 3-1.7c1.2.3 2.5 0 3.4-1 .8-.8 1.2-2 1-3.3 1-.6 1.7-1.8 1.7-3s-.7-2.4-1.7-3c.3-1.2 0-2.5-1-3.4a3.7 3.7 0 0 0-3.3-1c-.6-1-1.8-1.6-3-1.6Z"></path>
          <path d="m4.7 12 5.3 2.8v-5.6L4.7 12Z"></path>
          <path d="m14 9.2v5.6l5.3-2.8L14 9.2Z"></path>
          <path d="M14 9.2 12 4.7l-2 4.5 4 0Z"></path>
          <path d="m14 14.8-2 4.5-2-4.5h4Z"></path>
        </svg>,
    category: 'framework',
    level: 3
  }, {
    name: 'TensorFlow',
    icon: <svg className="w-5 h-5 text-[#EB6424]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 16V8a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6Z"></path>
          <path d="M9 8V5l7 7-7 7v-3l4-4-4-4Z"></path>
        </svg>,
    category: 'framework',
    level: 4
  }, {
    name: 'Firebase',
    icon: <ServerIcon className="w-5 h-5 text-[#EB6424]" />,
    category: 'framework',
    level: 4
  }, {
    name: 'Git',
    icon: <svg className="w-5 h-5 text-[#EB6424]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m8 12 4 4 4-4"></path>
          <path d="M12 8v8"></path>
        </svg>,
    category: 'framework',
    level: 5
  },
  // Databases
  {
    name: 'MongoDB',
    icon: <DatabaseIcon className="w-5 h-5 text-[#8DB580]" />,
    category: 'database',
    level: 4
  }, {
    name: 'SQL',
    icon: <DatabaseIcon className="w-5 h-5 text-[#8DB580]" />,
    category: 'database',
    level: 4
  }];
  const filteredSkills = activeCategory === 'all' ? skills : skills.filter(skill => skill.category === activeCategory);
  return <section id="skills" className="py-20 bg-gradient-to-b from-white to-[#F8F4E3]/50 dark:from-[#1D1E2C] dark:to-[#0A0A0F]">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1D1E2C] dark:text-white inline-block relative">
            Skills & Expertise
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#8DB580]"></span>
          </h2>
          <p className="text-[#1D1E2C]/70 dark:text-[#F8F4E3]/70 max-w-2xl mx-auto">
            My technical toolkit spans multiple languages, frameworks, and
            specialized areas.
          </p>
        </div>
        <div className="mb-10 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-2 bg-white dark:bg-[#1D1E2C] p-1.5 rounded-full shadow-md">
            {['all', 'language', 'framework', 'database'].map(category => <button key={category} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category ? category === 'language' ? 'bg-[#086375] text-white' : category === 'framework' ? 'bg-[#EB6424] text-white' : category === 'database' ? 'bg-[#8DB580] text-white' : 'bg-[#1D1E2C] text-white' : 'bg-transparent text-[#1D1E2C]/70 hover:bg-[#1D1E2C]/5'}`} onClick={() => setActiveCategory(category)}>
                {category === 'all' ? 'All Skills' : `${category.charAt(0).toUpperCase() + category.slice(1)}s`}
              </button>)}
          </div>
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {filteredSkills.map((skill, index) => <div key={skill.name} className="transform transition-all duration-500" style={{
          transitionDelay: `${index * 50}ms`
        }}>
              <SkillItem {...skill} />
            </div>)}
        </div>
        <div className={`mt-16 transform transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-[#1D1E2C]">
              Areas of Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {['Web Development', 'AI/ML Implementation', 'IoT Solutions', 'UI/UX Design', 'Sustainability Integration'].map((expertise, index) => <div key={expertise} className="p-4 rounded-lg bg-[#1D1E2C]/5 flex flex-col items-center justify-center text-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${index === 0 ? 'bg-[#086375]/20' : index === 1 ? 'bg-[#EB6424]/20' : index === 2 ? 'bg-[#8DB580]/20' : index === 3 ? 'bg-[#086375]/20' : 'bg-[#EB6424]/20'}`}>
                    {index === 0 && <GlobeIcon className="w-6 h-6 text-[#086375]" />}
                    {index === 1 && <svg className="w-6 h-6 text-[#EB6424]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v8"></path>
                        <path d="m4.93 10.93 1.41 1.41"></path>
                        <path d="M2 18h2"></path>
                        <path d="M20 18h2"></path>
                        <path d="m19.07 10.93-1.41 1.41"></path>
                        <path d="M22 22H2"></path>
                        <path d="m16 6-4-4-4 4"></path>
                        <path d="M16 18a4 4 0 0 0-8 0"></path>
                      </svg>}
                    {index === 2 && <svg className="w-6 h-6 text-[#8DB580]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                        <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                        <line x1="12" y1="20" x2="12" y2="20"></line>
                      </svg>}
                    {index === 3 && <PencilIcon className="w-6 h-6 text-[#086375]" />}
                    {index === 4 && <svg className="w-6 h-6 text-[#EB6424]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0"></path>
                        <path d="M12 2a10 10 0 0 0-6.88 17.23L12 12l6.88 7.23A10 10 0 0 0 12 2Z"></path>
                        <circle cx="12" cy="12" r="2"></circle>
                      </svg>}
                  </div>
                  <span className="text-sm font-medium text-[#1D1E2C]">
                    {expertise}
                  </span>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
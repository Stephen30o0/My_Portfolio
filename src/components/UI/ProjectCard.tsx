import React, { useState } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
interface ProjectCardProps {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  image: string;
  liveUrl: string;
  theme: 'eco' | 'tech' | 'art';
}
export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  features,
  techStack,
  image,
  liveUrl,
  theme
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const themeStyles = {
    eco: {
      bg: 'bg-gradient-to-br from-[#8DB580]/10 to-[#086375]/10',
      border: 'border-[#8DB580]',
      text: 'text-[#086375]',
      accent: 'bg-[#8DB580]'
    },
    tech: {
      bg: 'bg-gradient-to-br from-[#086375]/10 to-[#1D1E2C]/10',
      border: 'border-[#086375]',
      text: 'text-[#086375]',
      accent: 'bg-[#086375]'
    },
    art: {
      bg: 'bg-gradient-to-br from-[#EB6424]/10 to-[#8DB580]/10',
      border: 'border-[#EB6424]',
      text: 'text-[#EB6424]',
      accent: 'bg-[#EB6424]'
    }
  };
  return <div className={`rounded-xl overflow-hidden shadow-lg border ${themeStyles[theme].border}/20 ${themeStyles[theme].bg} dark:bg-[#1D1E2C]/50 transition-all duration-300 transform ${isHovered ? 'scale-[1.02] shadow-xl' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="relative overflow-hidden aspect-video">
        <div className="absolute inset-0 bg-center bg-cover transform transition-transform duration-700" style={{
        backgroundImage: `url(${image})`,
        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
      }}></div>
        <div className={`absolute inset-0 bg-gradient-to-t from-[#1D1E2C] to-transparent opacity-60`}></div>
        <div className="absolute bottom-0 left-0 w-full p-4">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => <span key={index} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs text-white">
                {tech}
              </span>)}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-3 ${themeStyles[theme].text} dark:text-white`}>
          {title}
        </h3>
        <p className="text-[#1D1E2C]/70 dark:text-[#F8F4E3]/70 text-sm mb-4">
          {description}
        </p>
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-2 text-[#1D1E2C] dark:text-[#F8F4E3]">
            Key Features
          </h4>
          <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
            {features.map((feature, index) => <li key={index} className="text-xs text-[#1D1E2C]/70 dark:text-[#F8F4E3]/70 flex items-start">
                <span className={`w-1.5 h-1.5 rounded-full ${themeStyles[theme].accent} mt-1.5 mr-1.5 flex-shrink-0`}></span>
                {feature}
              </li>)}
          </ul>
        </div>
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center px-4 py-2 rounded-lg ${themeStyles[theme].accent} text-white text-sm font-medium transition-all duration-300 hover:opacity-90`}>
          View Project <ExternalLinkIcon className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>;
};
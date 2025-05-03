import React, { useState } from 'react';
interface SkillItemProps {
  name: string;
  icon: React.ReactNode;
  category: string;
  level: number; // 1-5
}
export const SkillItem: React.FC<SkillItemProps> = ({
  name,
  icon,
  category,
  level
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'language':
        return {
          bg: 'bg-[#086375]',
          text: 'text-[#086375]',
          light: 'bg-[#086375]/10'
        };
      case 'framework':
        return {
          bg: 'bg-[#EB6424]',
          text: 'text-[#EB6424]',
          light: 'bg-[#EB6424]/10'
        };
      case 'database':
        return {
          bg: 'bg-[#8DB580]',
          text: 'text-[#8DB580]',
          light: 'bg-[#8DB580]/10'
        };
      default:
        return {
          bg: 'bg-[#1D1E2C]',
          text: 'text-[#1D1E2C]',
          light: 'bg-[#1D1E2C]/10'
        };
    }
  };
  const colors = getCategoryColor(category);
  return <div className={`p-4 rounded-lg transition-all duration-300 ${colors.light} dark:bg-[#1D1E2C]/50 ${isHovered ? 'shadow-md transform scale-105' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="flex items-center mb-3">
        <div className={`w-10 h-10 rounded-lg ${colors.bg}/20 flex items-center justify-center mr-3`}>
          {icon}
        </div>
        <h4 className={`font-medium ${colors.text} dark:text-white`}>{name}</h4>
      </div>
      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div className={`h-full ${colors.bg} transition-all duration-500`} style={{
        width: `${level / 5 * 100}%`,
        transitionDelay: isHovered ? '100ms' : '0ms'
      }}></div>
      </div>
      <div className={`mt-2 flex justify-between items-center text-xs ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
        <span className="text-gray-500">Beginner</span>
        <span className={`${colors.text} font-medium`}>
          {level === 1 && 'Basic'}
          {level === 2 && 'Intermediate'}
          {level === 3 && 'Proficient'}
          {level === 4 && 'Advanced'}
          {level === 5 && 'Expert'}
        </span>
        <span className="text-gray-500">Expert</span>
      </div>
    </div>;
};
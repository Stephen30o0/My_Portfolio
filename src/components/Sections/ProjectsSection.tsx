import React, { useEffect, useState } from 'react';
import { ProjectCard } from '../UI/ProjectCard';

export const ProjectsSection = () => {
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
    const section = document.getElementById('projects');
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const projects = [
    {
      title: 'EcoDrinks Dashboard',
      description: 'EcoDrinks is an innovative sustainability startup using IoT technology to reduce single-use plastics through smart beverage dispensing systems.',
      features: ['Real-time monitoring', 'User account management', 'Environmental impact tracking', 'Beverage customization'],
      techStack: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
      image: '/images/dashboard.png',
      liveUrl: 'https://eco-drinks-dashboard-uggw.vercel.app/',
      theme: 'eco' as const
    },
    {
      title: 'SmallTalk AI',
      description: 'SmallTalk AI is a sophisticated conversational platform that leverages artificial intelligence to facilitate natural language interactions.',
      features: ['Natural language processing', 'Responsive chat interface', 'User authentication', 'History tracking'],
      techStack: ['React', 'Next.js', 'TailwindCSS', 'AI/ML'],
      image: '/images/smalltalk.png',
      liveUrl: 'https://small-talk-ai.vercel.app/',
      theme: 'tech' as const
    },
    {
      title: 'EcoDrinks Web Platform',
      description: 'The customer-facing web platform for EcoDrinks, allowing users to interact with the smart beverage dispensing system and track their environmental impact.',
      features: ['User account management', 'Environmental impact tracking', 'Beverage customization', 'Location finder'],
      techStack: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
      image: '/images/ecowebsite.png',
      liveUrl: 'https://eco-drinks-web.vercel.app/',
      theme: 'eco' as const
    },
    {
      title: 'Ouevre',
      description: 'Ouevre is a platform that enables artists to collaborate and showcase their artworks globally, fostering a community of creative exchange.',
      features: ['Artist profiles', 'Collaborative spaces', 'Global showcase', 'Community tools'],
      techStack: ['React', 'Firebase', 'Python'],
      image: '/images/ouevre.png',
      liveUrl: '#',
      theme: 'art' as const
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-[#1D1E2C]">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1D1E2C] dark:text-white inline-block relative">
            Featured Projects
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#086375]"></span>
          </h2>
          <p className="text-[#1D1E2C]/70 dark:text-[#F8F4E3]/70 max-w-2xl mx-auto">
            Explore my recent work spanning sustainable solutions, AI
            interfaces, and cultural platforms.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// src/components/Projects.tsx
import React from 'react';

const projects = [
  {
    title: "SkillNova",
    description: "A full-stack e-learning platform using Supabase for robust authentication, user management, and real-time database capabilities.",
    techStack: ["TypeScript", "Next.js", "Supabase", "Tailwind CSS"],
    githubLink: "https://github.com/Sarvesh5273/SkillNova.git",
    liveLink: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full max-w-4xl mx-auto py-20">
      <h2 className="text-3xl font-bold text-white mb-2">
        Projects I've Built
      </h2>
      <div className="w-16 h-1 bg-accent mb-12"></div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 hover:border-accent transition-colors duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-200 mb-2">{project.title}</h3>
              <p className="text-slate-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="bg-gray-700 text-slate-300 text-sm font-medium px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 mt-auto text-slate-300 hover:text-accent transition-colors">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                View Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
// src/components/Skills.tsx
import React from 'react';

const skills = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js", 
  "Express", "Supabase", "PostgreSQL", "HTML5", "CSS3", "Tailwind CSS", "Git"
];

const Skills = () => {
  return (
    <section id="skills" className="w-full max-w-4xl mx-auto py-20">
      <h2 className="text-3xl font-bold text-white mb-2">My Tech Arsenal</h2>
      <div className="w-16 h-1 bg-accent mb-12"></div>
      
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-[#1a1a1a] text-slate-300 py-2 px-5 rounded-lg border border-gray-800">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
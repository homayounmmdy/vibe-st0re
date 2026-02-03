"use client";
import React from "react";
import { cardData, type cardDataType } from "../../home/data/cardData";

const getRandomProjects = (projects: cardDataType[], count: number): cardDataType[] => {
  const shuffled = [...projects].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const randomProjects = getRandomProjects(cardData, 3);

interface ProjectCardProps {
  project: cardDataType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const typeLabel = project.type === "games" ? "Game" : "Tool";
  const typeColor = project.type === "games" ? "text-purple-300" : "text-emerald-300";

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 group">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={project.imageURL}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className={`absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-full ${typeColor} bg-black/30 backdrop-blur-sm`}>
          {typeLabel}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-white group-hover:text-purple-200 transition-colors">
          {project.title}
        </h3>
      </div>
    </div>
  );
};

const ProjectShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-[#05020a]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-light text-center text-gray-300 mb-12">
          A few recent vibes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {randomProjects.map((project, idx) => (
            <ProjectCard key={`${project.title}-${idx}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
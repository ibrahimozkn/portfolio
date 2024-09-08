import React from "react";
import Card from "../Card";

//projects list inside projects props
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  demo: string;
  code: string;
}

interface ProjectsProps {
  projects: Project[];
}

function Projects({ projects }: ProjectsProps) {
  return (
    <section>
      <div className="flex flex-col p-4 sm:p-8 items-center">
        <h2 className="font-bold text-3xl sm:text-5xl text-center">
          My Projects 💻
        </h2>
        <div className="divider mt-5"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              demo={project.demo}
              code={project.code}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

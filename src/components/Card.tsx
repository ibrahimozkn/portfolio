import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

interface CardProps {
  title: string;
  description: string;
  technologies: string[];
  demo: string;
  code: string;
}

function Card({ title, description, technologies, demo, code }: CardProps) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="mt-2">
          <h3 className="font-semibold text-lg mb-2">Technologies Used:</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span key={technology} className="badge badge-outline">
                {technology}
              </span>
            ))}
          </div>
        </div>
        <div className="card-actions justify-end mt-2">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FaGlobe className="h-5 w-5 mr-2" />
              Demo
            </a>
          )}
          {code && (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FaGithub className="h-5 w-5 mr-2" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;

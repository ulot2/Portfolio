import React from "react";
import projectData from "../projectData.json";
import ProjectCard from "./projectCard";
import card from "../card.json";
import MainProjectsCard from "./mainProjectsCard";

export const Projects = () => {
  return (
    <div className="about projects">
      <div>
        <h1>
          <span>01.</span>Things I've built
        </h1>
        <hr />
      </div>
      <div>
        {projectData.map((project, index) => (
          <MainProjectsCard key={index} project={project} />
        ))}
      </div>

      <h4>Other noteworthy projects</h4>
      <div className="other-projects">
        {card.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

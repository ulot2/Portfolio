import { AiOutlineFolder } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { TbBrandGithub } from "react-icons/tb";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <a href={project.link} className="project-link">
      <div className="pro">
        <div>
          <div className="links links-flex">
            <AiOutlineFolder className="folder" />
            <div>
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                <TbBrandGithub />
              </a>
              <a href={project.externalLink} target="_blank" rel="noreferrer">
                <BiLinkExternal />
              </a>
            </div>
          </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>React</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;

import { TbBrandGithub } from "react-icons/tb";
import { MdOpenInNew } from "react-icons/md";

const mainProjectsCard = ({ project }) => {
  return (
    <div className="ppp">
      <div>
        <a href={project.liveLink} target="_blank" rel="noreferrer">
          <div className="container">
            <img className="bg-img" src={project.imgLink} alt="okay" />
          </div>
        </a>
      </div>
      <div>
        <a href={project.liveLink}>{project.title}</a>
        <p>{project.description}</p>
        <p>{project.technologies}</p>
        <div className="links">
          <a href={project.githubLink} target="_blank" rel="noreferrer">
            <TbBrandGithub />
          </a>
          <a href={project.liveLink} target="_blank" rel="noreferrer">
            <MdOpenInNew />
          </a>
        </div>
      </div>
    </div>
  );
};

export default mainProjectsCard;

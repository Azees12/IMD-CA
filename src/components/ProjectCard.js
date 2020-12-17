import React from 'react';
import { IoLogoGithub } from 'react-icons/io5';

const ProjectCard = ({ project }) => {
    return (
        <div className="projectCard col-md-6 col-lg-4 my-2">
            <figure className="projectCard-wrapper">
                <a href="!#" target="_blank">
                    <img src={project.image} alt={project.name} className="projectCard-image" />
                </a>
                <div className="projectCard-title">
                    <a href={project.url} target="_blank">
                       <IoLogoGithub className="projectCard-icon" />
                        {project.name}
                    </a>
                   
                </div>
            </figure>

        </div>
    );
};

export default ProjectCard;

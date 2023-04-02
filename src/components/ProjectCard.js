import "./ProjectCard.css";

import React from 'react';
import CodeCollab from "../assets/CodeCollab.png";

const ProjectCard = () => {
  return (
    <div className="work-container">
       <h1 className="project-heading">Projects</h1>
       <div className="project-container">
           <div className="project-card">
               <img src={CodeCollab} alt="image" />
           </div>
       </div>
    </div>
  )
}

export default ProjectCard;
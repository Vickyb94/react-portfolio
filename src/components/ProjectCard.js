import "./ProjectCard.css";

import React from 'react';
import CodeCollab from "../assets/CodeCollab.png";
import FifaFever from "../assets/FIFA-Fever.png";
import PreworkGuide from "../assets/Prework Guide.png"

import { NavLink } from 'react-router-dom';

const ProjectCard = () => {
  return (
    <div className="work-container">
       <h1 className="project-heading">Projects</h1>
       <div className="project-container">
           <div className="project-card">
               <img src={CodeCollab} alt="" />
               <h2 className="project-title">CodeCollab</h2>
               <div className="project-details">
                  <p>An application for developers to meet and collaborate with other users. </p>
                  <div className="pro-btns">
                     <NavLink to="https://my-code-collab.herokuapp.com/" className="btn">View</NavLink>
                     <NavLink to="https://github.com/Vickyb94/CodeCollab" className="btn">Source</NavLink>
                  </div>
               </div>
           </div>
           <div className="project-card">
               <img src={FifaFever} alt="" />
               <h2 className="project-title">FIFA-Fever</h2>
               <div className="project-details">
                  <p>A project designed is to pull FIFA World Cup information that is available from different websites into one webpage for easy access. </p>
                  <div className="pro-btns">
                     <NavLink to="https://vickyb94.github.io/FIFA-Fever/" className="btn">View</NavLink>
                     <NavLink to="https://github.com/Vickyb94/FIFA-Fever" className="btn">Source</NavLink>
                  </div>
               </div>
           </div>
           <div className="project-card">
               <img src={PreworkGuide} alt="" />
               <h2 className="project-title">Prework-Guide</h2>
               <div className="project-details">
                  <p>
A study guide to bootcamp prework. </p>
                  <div className="pro-btns">
                     <NavLink to="https://vickyb94.github.io/prework-guide/" className="btn">View</NavLink>
                     <NavLink to="https://github.com/Vickyb94/prework-guide" className="btn">Source</NavLink>
                  </div>
               </div>
           </div>
       </div>
    </div>
  )
}

export default ProjectCard;
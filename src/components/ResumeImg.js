import "./ResumeImgStyles.css";

import React from 'react';

const ResumeImg = () => {
  return (
    <div className="resume-container">

        <div className="resume">
            <h1>Skills</h1>
            <p>HTML</p>
            <p>CSS</p>
            <p>JAVASCRIPT</p>
            <p>JQUERY</p>
            <p>REACT.JS</p>
            <p>NODE.JS</p>
            <p>MYSQL</p>
            <p>MONGODB</p>
        </div>
        <button className="btn">
        <a  href="fsd-resume.pdf" download = "fsd-resume.pdf">
         Download Resume
        </a>
</button>
    </div>
  )
}

export default ResumeImg
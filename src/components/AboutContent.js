import "../components/AboutStyle.css";

import React from 'react';

import { Link } from "react-router-dom";
import Avatar from "../assets/avatar.png";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>I prefer to be called Vicky. I am a front-end Web developer with an MBA. 
                I create and maintain responsive secure websites.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <img src={Avatar} className="img" alt="true"/>
            </div>
        </div>
    </div>
  )
};

export default AboutContent;
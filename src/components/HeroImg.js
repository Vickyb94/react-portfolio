import "./HeroImg.css";

import React from 'react';

import IntroImg from "../assets/bg-img.jpg";

import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
       <div className="mask">
          <img className="intro-img"
          src={IntroImg} alt="IntroImg"/>
       </div>
       <div className="content">
         <p>HELLO, MY NAME IS VICTORIA.</p>
         <h1>Software Developer</h1>
       </div>
      <div className="link">
         <Link  to="/about" className="btn">About Me</Link>
         <Link to="/contact" className="btn-white">Contact</Link>
      </div>
    </div>
    
    
  )
}

export default HeroImg
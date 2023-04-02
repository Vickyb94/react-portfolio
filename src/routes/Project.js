import React from 'react';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Hero heading="PORTFOLIO." text="Some of the projects I have worked on"/>
      <Footer />    
    </div>
  );
}

export default Project;
import React from 'react';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProjectCard from '../components/ProjectCard';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Hero heading="Portfolio" text="Some of the projects I have worked on"/>
      <ProjectCard />
      <Footer />    
    </div>
  );
}

export default Project;
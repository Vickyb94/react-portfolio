import React from 'react';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import AboutContent from "../components/AboutContent";


const About = () => {
  return (
    <div>
      <Navbar/>
      <Hero heading="ABOUT ME" text="I am a full stack software developer." />
      <AboutContent />
      <Footer />    
    </div>
  );
}

export default About;
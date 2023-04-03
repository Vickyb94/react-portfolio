import React from 'react';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ResumeImg from "../components/ResumeImg";

import Hero from "../components/Hero";

const Resume = () => {
  return (
    <div>
      <Navbar/>
      <Hero heading="Resume" text="Take a quick look at my resume."/>
      <ResumeImg />
      <Footer />
    </div>
  )
}

export default Resume;
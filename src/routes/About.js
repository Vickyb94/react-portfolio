import React from 'react';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const About = () => {
  return (
    <div>
      <Navbar/>
      <Hero heading="ABOUT ME" text="I just completed a web developer program at UNB with the College of Extended Learning in April 2023 and I am looking for an opportunity to start my career as a software developer. Enthusiastic and self-motivated Master of Business Administration graduate with five years of experience in administration. Seeking an entry-level position as a full stack developer to launch into the programming industry." />
      <Footer />    
    </div>
  );
}

export default About;
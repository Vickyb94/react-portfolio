import React from 'react';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";


const Contact = () => {
  return (
    <div>
    <Navbar/>
    <Hero heading="CONTACT" text="Let's have a chat" />
    <Footer />    
  </div>
  );
}

export default Contact;
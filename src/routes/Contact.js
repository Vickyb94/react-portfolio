import React from 'react';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
    <Navbar/>
    <Hero heading="CONTACT" text="Let's have a chat" />
    <Form />
    <Footer />    
  </div>
  );
}

export default Contact;
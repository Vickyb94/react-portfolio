import React, { Component } from "react";
import "./index.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Project from "./component/Project";

function App() {
  return (
    <>
       <Component>
          <Component path="/" element={<Home />}  />

       </Component>
    </>
  );
}

export default App;

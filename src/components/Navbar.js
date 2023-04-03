import "./NavbarStyles.css";

//import dependencies
import React, {useState} from 'react';

import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  //function to set click for hamburger menu//
    const [click, onClick]=useState(false);
    const selectClick = () => onClick(!click);
    
    //function to change header background color
    const [color, setColor] = useState(false);
    const changeColor = () => {
       if (window.scrollY >= 100) {
        setColor(true);
       } else {
        setColor(false);
       }
    };

    //adding eventlistener for color change
    window.addEventListener("scroll", changeColor);

    return (
        <div className={color ? "hedaer header-bg" :
          "header"}>
           <Link to="/">
             <h1>Victoria Arowosafe</h1>
           </Link>
           <ul className={click ? "nav-list active" : 
            "nav-list"}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/project">Project</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
           </ul>
           <div className="hamburger" onClick={selectClick}> 
              {click ? 
             ( <FaTimes size={20} style={{color: "white"}}/>):

             ( <FaBars size={20} style={{color: "white"}}/>)
              }
           </div>
        </div>
    );
};

export default Navbar;
import "./FooterStyles.css";

import React from 'react';
//import icons
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
        <div className="social">
            <FaGithub
                size={30}
                style={{ color: "#fff",
                marginRight: "1rem"}}/>
            <FaLinkedin
                size={30}
                style={{ color: "#fff",
                marginRight: "1rem"}}/>
            <FaTwitter
                size={30}
                style={{ color: "#fff",
              marginRight: "1rem"}}/>
        </div>
        <div className="copyright">
          <p>Vickyb94@2023</p>
        </div>
    </div>
  )
}

export default Footer
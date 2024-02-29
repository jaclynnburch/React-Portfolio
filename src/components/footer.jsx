import React from "react";
import "../../styles/index.css";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";


const Footer = ()=>{
    return (
        <footer>
  <div id="footer_trapezoid">
  <a href="https://github.com/jaclynnburch" target="blank">
                 
                  <FaGithub />
                                </a>     
        <div className="subfoot">
     {/* <button className="subnavbtn">Portfolio<i className="fa fa-caret-down"></i></button> */}
     <a href="https://www.linkedin.com" target="blank">
                 <FaLinkedin />
              </a>
       <div className="subnav-footer">
      
       </div>
    </div>
  
     <div className="subfoot">
     <a href="https://www.facebook.com" target="blank">
                   <FaFacebook />
              </a>
      </div>
    <a href="https://www.instagram.com" target="blank">
                  <FaInstagram />
              </a>
              {/* <br></br>
      <p>&copy;2024 Jackie Burch | All Rights Reserved</p> */}

  </div>
</footer>
       
      );
    };
    
    export default Footer;
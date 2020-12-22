import React from "react";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoGithub,
  IoLocation,
  IoPhonePortraitOutline,
  IoMail,
  IoPersonSharp,
  IoBriefcase,
  IoLogoLinkedin,
} from "react-icons/io5";
import cv from "../assets/AzeesFetugaCV.pdf"
import me from "../assets/Me.jfif";
import {Link} from 'react-router-dom';
import { motion } from "framer-motion";



export default function Sidebar() {
 
 

  const container = {
  hidden: { x:'-30vw', opacity: 1, scale: 0.5 },
  visible: {
    x:0,
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.7,
      type: "spring",
    },
  },
};

const item = {
  hidden: { x: '-30vw', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const handleEmail = () => {
  window.open("mailto:azees.fetiga@gmail.com")
} 

  return (
    <motion.div
      className="sidebar"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      
      <motion.div  variants={item}>
        <img  src={me} alt="" className="sidebarImage" />
        <div className="sidebarName">
        <a href="a" rel="noopener noreferrer" ><img className="sidebar-sign" src="https://fontmeme.com/permalink/201214/a06b17fa9c5dac43f5f3135ec6f2b8f9.png" alt="signature-fonts" border="0"/></a>
        </div>
        </motion.div>
        <motion.div variants={item}>
        <div className="sidebarItem sidebarTitle font-weight-bold ">
          {"Final Year College Student Aspring Web Developer "}
        </div> 
       </motion.div>
        
        <motion.div variants={item}>
        <div className="sidebarItem ">
          <IoBriefcase alt="resume" className="sidebarIcon mr-2" />
          <Link to={cv} target="_blank" download><a href={cv}  target="_blank">{"Check Out my CV"}</a></Link>
        </div>
        <hr />
      </motion.div>

      <motion.div variants={item}>
        <figure className="sidebarSocialIcons my-2">
          <a href="https://www.instagram.com/azeesfetuga/?hl=en" rel="noopener noreferrer" target="_blank" alt="" className="sidebarIcon">
            <IoLogoInstagram className="sidebarIcon mr-4" />
          </a>
          <a href="https://www.facebook.com/azees.fetuga" rel="noopener noreferrer"  target="_Blank" alt="" className="sidebarIcon">
            <IoLogoFacebook className="sidebarIcon mr-4" />
          </a>
          <a href="https://www.linkedin.com/in/azees-fetuga/" rel="noopener noreferrer" target="_Blank" alt="" className="sidebarIcon">
            <IoLogoLinkedin className="sidebarIcon" />
          </a>
        </figure>
      </motion.div>

      <motion.div variants={item}>
        <div className="sidebarContact ">
          <div className="sidebarItem">
            {" "}
            <IoLogoGithub className="sidebarIcon" />
            <span alt="Github" className="sidebarIcon sidebarCV mr-2" />
            <a href="https://github.com/Azees12" rel="noopener noreferrer" target="_blank">GitHub</a>
          </div>
          <div className="sidebarItem">
            <IoLocation className="sidebarIcon mr-2" />
            Dublin, Ireland
          </div>
          <div className="sidebarItem">
            {" "}
            <IoMail className="sidebarIcon mr-2" /> azees.fetuga@gmail.com
          </div>

          <div className="sidebarItem">
            <IoPhonePortraitOutline className="sidebarIcon mr-2" />
            {"0872854534"}{" "}
          </div>
        </div>

        <div className="sidebarItem sidebarEmail sidebarCV " onClick={handleEmail}>
          {" "}
          <IoPersonSharp className="  mr-2" />
          {"Contact Me"}
        </div>
      </motion.div>
    </motion.div>
  );
}

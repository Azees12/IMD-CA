import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import TUD from "../assets/TU-Dublin-Careers-Banner-min.jpg";
import { edu } from "../data/data";
import EducationCard from "./EducationCard";
export default function About() {
  const [isOpen, toggle] = useState(false);

  const motion_var = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={motion_var}
      initial="hidden"
      animate="visible"
      exit="exit"
       
    >
      <div className="edu">
        <div className="intro ">
          <a href="https://www.tudublin.ie/ " target="_blank">
            {" "}
            <img src={TUD} />{" "}
          </a>
        </div>

        <hr className="about-hr" />
        <div className="container edu-content"> </div>

        <div className="edu-heading ">
        
          <div className="edu-cent"><h1>Computing with Data Anaylitics</h1></div>{" "}
          
        </div>

        <div className="edu-content-body-gpa">
          {" "}
          GPA: <span>2.5</span>
        </div>

        <div className=" edu-content-content row ">
          {edu.map((edu) => (
            <EducationCard thing={edu} />
          ))}
        </div>

     
      </div>
    </motion.div>
  );
}

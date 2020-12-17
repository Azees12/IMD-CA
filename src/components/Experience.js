import React from "react";
import { motion } from "framer-motion";
import totalproduce from "../assets/totalproduce.jfif";
import kef from "../assets/Kefron.png";
import { Languages,ts } from './../data/data';

export default function Experience() {
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
      exit: {
        opacity: 0,
        transition: {
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <motion.div
      variants={motion_var}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="exp"
    >
    
       
       
        <div className=" exp-header row ">
          <div className="col-lg-6">
            <div className="exp-head-item">
              <h1>Intership</h1> <p>2019 Jan - 2019 Aug</p>
            </div>

            <div className="exp-img">
              <a href="https://www.totalproduce.com/" rel="noopener noreferrer"  target="_blank">  <img alt="total" src={totalproduce} /></a>
            </div>
            <div>
              <span className="exp-details-name">Software Developer</span>
            </div>
            <div className="mr-4">

           <h5> Main Responsibilities </h5>
        <p>Develop an in-depth understanding of the FreshTrade platform and the underlying business.</p>
            <p> Working with your team lead on design and development of specific features and functions in adherence with the Total Produce Coding Standards.</p>
            <p>Creating React demos to test functionality and responsiveness of their new api. </p>
           

            </div>
           
          </div>

          <div className="col-lg-6 exp-emp ">
            <div className="exp-head-item text-align-right">
              <h1>Employment</h1> <p>2020 Feb - Currently</p>
            </div>

            <div className="exp-img">
              <a href="https://www.kefron.com/"  rel="noopener noreferrer" target="_blank"><img alt="kef" src={kef} /></a>
            </div>
            <div>
              <span className="exp-details-name">Digital Operative</span>
            </div>
            <div>
            <h5> Main Responsibilities </h5>
        
            <p>Meeting and Complaining with SLA guidelines.</p>
            <p>Building and management of document templates used to drive our OCR technology.</p>
            <p>Liaising with clients to troubleshoot extraction issues caused by deficient documents being presented to our systems.</p>
           
            </div>
            

          </div>

          
        </div>

        <div className="exp-content row"> 
         <div className="col-lg-6">
          <div>
            <h2>Languages</h2>
          </div>
          
          <div className="exp-skill">
          {Languages.map((lag) => ( 
          <div className="skill-bar normal"> <div className="skill-bar-wrapper" style={{
            'width': lag.level
        }}>
            <span className="skill-bar-name">
              <img alt="skill" src={lag.icon} className="skill-bar-icon"/> {lag.name}
            </span>

        </div> </div>
          
          
          ))}

          </div>

          
        </div>

        <div className="col-lg-6 exp-emp">
            <div>
            <h2>Software & Frameworks</h2>
        
          </div >

          <div className="exp-skill">

          
          {ts.map((lag) => ( 
            
          <div className="skill-bar reverse row"> <div className="skill-bar-wrapper" style={{
            'width': lag.level
        }}>
            

            <span className="skill-bar-name">
            <img alt="abc" src={lag.icon} className="skill-bar-icon"/> {lag.name}
            </span>
           

        </div> </div>
          
          
          ))}
          </div>
    </div>
        <div className=" exp-content-content row "></div>
      </div>
        
  

       
    </motion.div>
  );
}

import React from "react";
import {useState} from "react"
import { motion} from "framer-motion";
import AboutCard from './AboutCard';
import {about} from '../data/data'
import Modal from './Modal';
export default function About() {
  
    const [selectedAbout, setSelectedAbout] = useState(null)
    const [isOpen, toggle] = useState(false);
  

    const modalAboutOpen = (item) => {
        setSelectedAbout(item);
        toggle(!isOpen);
    }

    const modalAboutClose = () => {
        setSelectedAbout(null);
        toggle(!isOpen);
    }

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
        ease:'easeInOut'
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
      <div className="about">
        <div className="intro">
          You probably wanna hire me huh?, But first find out abit about
          the man behind the genius !
        </div>

        <hr className="about-hr" />

        <div className="container about-content"> </div>
        <div className="about-heading">
          What you need to know !
        </div>
      

       
        <div className="row about-more">
            {about.map(about => <AboutCard open={modalAboutOpen} thing={about}/> )}
        </div>

  <div className=" exp-header row ">
         
          <div className="col-lg-6">
            <div className="exp-head-item">
              <span className="exp-details-name">Achievements</span>
            </div>
            
            <div>
             <p>Kylemore College Sports Person of the Year 2015 & Runner-up 2016</p>
             <p>Sports and Culture Council Athletics 400m Relay gold Medallists 2016</p>
             <p>CFS Award 2017</p>
             <p>Sports and Culture Council Gaelic Football Winners 2015</p>

      

            </div>
           
          </div>

          <div className="col-lg-6 exp-emp ">
            <div className="exp-head-item text-align-right">
          
              <span className="exp-details-name"> Goals & Hobbies </span>
            </div>
            <div>
           <p>Currently focused on entering Powerlifting (current PB Total 560Kg @81kg) </p>
           <p>Calisthenics</p>
           <p>Web Develepment</p>
           <p>Artificial Intellegence</p>
           <p>Improving Data Structures & Algorithms skills</p>
      
            </div>
            

          </div>

          
        </div>



    
       <Modal handleClose={modalAboutClose} isOpen={isOpen} thing={selectedAbout}></Modal>
    


     
      </div>
    </motion.div>
  );
}

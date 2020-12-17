import React,{useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion'

export default function Navbar() {

const  [active,setActive] = useState('')

useEffect(() => {
    let url = window.location.href;
    if (url.endsWith('/'))
      setActive('About Me');
    else if (url.endsWith('/Education'))
      setActive('Education');

    else if (url.endsWith('/Experience'))
      setActive('Experience');

    else if (url.endsWith('/Projects'))
      setActive('Projects');

  }, [])

const nav_var = {
  hidden:{
    x: '-40vh',
    opacity: 0
   
  },
  visible: {
    x: 0,
    opacity: 1,
    delay:20,
  }
}


const nav_varChange={
  hidden:{
    x: '-60',
    opacity: 0
   
  },
  visible: {
    x: 0,
    opacity: 1,
  }
}



  return (
    <motion.div className="navbar"
     variants={nav_var}
     initial='hidden'
     animate='visible'
    
    >
      <AnimatePresence>
      <motion.div variants={nav_varChange} initial="hidden" animate="visible" className="navActive">{active}</motion.div>
      </AnimatePresence>
      
      <div className="navbarItems">
        
        <Link to="/">
          {active !== 'About Me' && 
        <div className="navbarItem" onClick={()=>setActive('About Me')}>About Me</div>
          }
        </Link>


        <Link to="/Education">  
        {active !== 'Education' && 
        <div className="navbarItem" onClick={()=>setActive('Education')}>Education</div>
        }
        </Link>


        <Link to="/Experience"> 
        {active !== 'Experience' && 
        <div className="navbarItem" onClick={()=>setActive('Experience')}>Experience</div>
        }
        </Link>

        <Link to="/Projects"> 
         {active !== 'Projects' && 
        <div className="navbarItem" onClick={()=>setActive('Projects')}>Projects</div>
         }
        </Link>

      </div>
    </motion.div>
  );
}

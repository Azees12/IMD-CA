import React          from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Education from "./components/Education";
import About from "./components/About";
import {motion} from 'framer-motion'
import Projects from "./components/Projects";
import {
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";


function App() {

  const motion_var = {
    hidden:{
        opacity:0
    },
    visible: {
        opacity:1,
        transition: {
            delay:0.2, duration: 0.8, type:'spring'
        },
        exit:{
            opacity:0,
            transition:{
              ease:'easeInOut'
            }
        }
    }
}


  const location = useLocation();

  return (

      <div className="App">
          {/* <div className="full-screen-video-container">
            <video loop autoPlay> 
             <source src={vd} type="video/mp4"/>
           </video>
         </div> */}
        <div className="container app-container">
        
          <div className="row app-row">
            <div className="col-lg-3">
              <Sidebar />
            </div>

            <motion.div
            variants={motion_var}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="col-lg-9 content">
              <Navbar />
              <div className="content-body">
          
                <Switch location={location} key={location.key}>
                  <Route exact path="/">
                    <About />
                  </Route>
                  <Route path="/Experience">
                    <Experience />
                  </Route>
                  <Route path="/Education">
                    <Education />
                  </Route>
                  <Route path="/Projects">
                    <Projects />
                  </Route>
                  <Route>
                    <Redirect to="/" />
                  </Route>
                </Switch>
    
              </div>
            </motion.div>
          </div>
        </div>
      </div> 
  
  );
}

export default App;

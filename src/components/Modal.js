import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

const Modal = ({ handleClose, thing, isOpen }) => {
  const modalVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const containerVariant = {
    initial: { top: "-50%", transition: { type: "spring" } },
    isOpen: { top: "50%" },
    exit: { top: "-50%" },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={"initial"}
          animate={"isOpen"}
          exit={"exit"}
          variants={modalVariant}
        >
          <motion.div className="modal-container col-lg-6" variants={containerVariant}>
            
            <motion.div className="modal-exit" >
              <IoClose className="modal-exit-icon"  onClick={handleClose} /> 
            </motion.div>
            

            <motion.div className=" container  modal-container-body">
              <div className="">
                <h6 className="modal-container-title">{thing.title}<hr className="modal-hr"/> </h6>
                
                <p className="modal-container-body-content-title">{thing.body}</p>
              </div>
          </motion.div>

          </motion.div>

          

        </motion.div>
        
      )}
    </AnimatePresence>
  );
};

export default Modal;

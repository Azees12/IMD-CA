import { motion } from "framer-motion";
import React, { useState } from "react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";

const EducationCard = ({ thing }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.ul layout initial={{ borderRadius: 25 }} className="col-lg-6">
      <motion.div className="edu-card" initial={{ borderRadius: 20 }}>
        <motion.div className="edu-card-header">
          <div className="">
            Year: {thing.year} GPA: {thing.gpa}
          </div>
        </motion.div>
        <div onClick={toggleOpen} className="edu-card-drop ">
          <hr />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="edu-card-body"
            >
              {thing.results.map((result) => (
                <div className="educ-card-item row">
                  <div className="col-lg-6"> 
                    <h6 >
                    {result.course}
                  </h6>
                  </div>
                  <div className="edu-grade col-lg-6 ">
                     <span>{result.grade}</span>
                  </div>
                 
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.ul>
  );
};

export default EducationCard;

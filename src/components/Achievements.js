import  React  from 'react';
import { motion } from 'framer-motion';

export default function Achievements(){
 
    const motion_var = {
        hidden:{
            opacity:0
        },
        visible: {
            opacity:1,
            transition: {
                delay:0.2, duration: 0.8, type:'spring'
            }
        },
        exit:{
            opacity:0,
            transition:{
              ease:'ease-in-out'
            }
        }
    }

    return (
    <motion.div 
    variants={motion_var}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
        Hello
    </motion.div>
);
}
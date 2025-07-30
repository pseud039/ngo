"use client";
import {motion} from "framer-motion";

export default function AnimatedWrapper({ children }) {
  return (
    <motion.div 
      initial={false} 
      animate={{opacity: 1}}
      exit={{opacity:0}}
      transition={{duration: 1.3}}
    >
      {children}
    </motion.div>
  );
}
import "./summary.styles.scss";
import React from "react";
import ScrollContext from "../../context/scroll/scrollContext";
import profileImage from '../../asset/images/profile-removebg.png'
import { motion, useInView } from "framer-motion";
import { useRef } from "react";



const Summary = () => {
  const scrollTracker = React.useContext(ScrollContext);
  const scrollInVh = scrollTracker[2];

  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-50px" });
  return (
    <div
      className="summary-container"
      id="Summary"
      style={{
        top: scrollInVh >= 0 && scrollInVh <= 99 ? "0" : "",
        display: scrollInVh > 49 ? "none" : "flex",
      }}
    >
      <div className="summary-content">
        <motion.img initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{once:false}}
          src={profileImage} alt="profile" className="summary-image" />

          
        <motion.div
          ref={ref}
          className="summary-intro"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{once:false}}
        >
          <motion.div
            className="summary-heading"
            initial={{ opacity: 0, y: -20 }}
            whileInView={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }} 
          >
            Full Stack Web Developer
          </motion.div>

          <motion.div
            className="summary-paragraph"
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Welcome to my portfolio website! I have completed my Advanced Diploma in Software Development from Sheridan College, with a passion for web development. Here, you&apos;ll find a showcase of my projects, experiences, and the skills I&apos;ve acquired throughout my studies. I love creating functional and beautiful websites that provide great user experiences.
          </motion.div>
        </motion.div>

      </div>

    </div>
  );
};

export default Summary;

import "./summary.styles.scss";
import React, {useState , useEffect} from "react";
import backgroundVideo from '../../asset/videos/summary/earthtransparentvdo.mp4'
import {motion} from 'framer-motion'



const tagline = [<>I <span className="don't-word">Don't</span> want a <span id="long-word">Long</span> life, I <span id="want-word">want</span> a <span id="big-word">big</span> one.</>]

const Summary = () => {

  return (
    <div className="summary-container" id="Summary">
      <div className="summary-tagline">
        {tagline}
      </div>
      <motion.video
      src={backgroundVideo} // Replace with the path to your video file
      autoPlay
      loop
      muted
      controls={false}
      className="summary-background"
      
    />
    </div>
  );
};

export default Summary;

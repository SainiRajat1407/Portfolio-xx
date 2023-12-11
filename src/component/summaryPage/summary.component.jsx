import "./summary.styles.scss";
import React from "react";
import backgroundVideo from '../../asset/videos/summary/earthtransparentvdo.mp4'
import {motion} from 'framer-motion'
import ScrollContext from "../../context/scroll/scrollContext";



const tagline = [<>I <span className="don't-word">Don't</span> want a <span id="long-word">Long</span> life, I <span id="want-word">want</span> a <span id="big-word">big</span> one.</>]

const Summary =  () => {
  const scrollTracker = React.useContext(ScrollContext);
  const scrollInVh = scrollTracker[2];
  return (
    <div className="summary-container" id="Summary" style={{top : scrollInVh >= 0 && scrollInVh <= 99 ? "0":"", visibility : scrollInVh > 120 ? "hidden":""}}>
      <div className="summary-tagline"  style={{top : scrollInVh >= 0 && scrollInVh <= 99 ? "17.5vh":""}}>
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

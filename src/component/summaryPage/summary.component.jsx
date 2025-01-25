import "./summary.styles.scss";
import React from "react";
import backgroundVideo from "../../asset/videos/summary/earthtransparentvdo.mp4";
import { motion, AnimatePresence } from "framer-motion";
import ScrollContext from "../../context/scroll/scrollContext";
import ThemeContext from "../../context/theme/themeContext";
import DeviceContext from "../../context/deviceTracker/deviceContext";

const tagline = [
  <>
    I <span className="don't-word">Don't</span> want a{" "}
    <span id="long-word">Long</span> life, I <span id="want-word">want</span> a{" "}
    <span id="big-word">big</span> one.
  </>,
];

const Summary = () => {
  const scrollTracker = React.useContext(ScrollContext);
  const themeContext = React.useContext(ThemeContext);
  const deviceContext = React.useContext(DeviceContext)


  const scrollInVh = scrollTracker[2];
  return (
    <div
      className="summary-container"
      id="Summary"
      style={{
        top: scrollInVh >= 0 && scrollInVh <= 99 ? "0" : "",
        visibility: scrollInVh > 49 ? "hidden" : "visible",
      }}
    >
      <div
        className="summary-tagline"
        style={{
          top: scrollInVh >= 0 && scrollInVh <= 99 ? "17.5vh" : "",
          color: !themeContext["themeOne"] ? "#8EACCD" : "white",
        }}
      >
        {tagline}
      </div>
          <motion.video
            src={backgroundVideo}
            autoPlay
            loop
            muted
            controls={false}
            className="summary-background"
            initial={{x:0}}
            animate={{ x: [-deviceContext[0],0] ,filter : "brightness(0.8)"}}
            transition={{ duration: 1 }}
          />
          
    </div>
  );
};

export default Summary;

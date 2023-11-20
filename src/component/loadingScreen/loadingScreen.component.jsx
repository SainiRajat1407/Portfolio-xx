import React from "react";
import loadingScreen from "../../asset/videos/loadingAnimation.mp4";
import "./loadingScreen.styles.scss";

const LoadingScreen = () => {
  return (
    <div className="loading-screen-container">
      <div className="loading-screen">
        <video width="640" height="360" autoPlay muted>
          <source src={loadingScreen} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default LoadingScreen;

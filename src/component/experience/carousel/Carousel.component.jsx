import React, { useState } from "react";
import MaterialUICard from "../MaterialUiCard.component";
import data from "../../../data/details.json";
import "./carousel.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const ExperienceCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handlePrev = () => {
    setSelectedIndex(
      (prevIndex) =>
        (prevIndex - 1 + data.experiences.length) % data.experiences.length
    );
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % data.experiences.length);
  };

  console.log(selectedIndex);

  return (
    <div className="carousel-container">
      <ArrowBackIosNewIcon onClick={handlePrev} className="left-arrow" />
      <div className="carousel">
        {[selectedIndex - 1, selectedIndex, selectedIndex + 1].map(
          (index, i) => {
            const currentIndex =
              (index + data.experiences.length) % data.experiences.length;
            const className =
              i === 0 ? "predecessor" : i === 1 ? "current" : "successor";

            return (
              <div key={currentIndex} className={`carousel-item-${className}`}>
                <MaterialUICard item={data.experiences[currentIndex]} />
              </div>
            );
          }
        )}
      </div>

      <ArrowForwardIosIcon onClick={handleNext} className="right-arrow" />
    </div>
  );
};

export default ExperienceCarousel;

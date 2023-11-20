import React, { useState , useEffect} from "react";
import school from '../../asset/images/parthschool.jpeg'

const ImageCarousel = (props) => {
  
  const [activeImage, setActiveImage] = useState(0);
  const imageNow = require(`../../asset/images/${props.images[activeImage]}`)
  const handleNext = () => {
    setActiveImage((prevActiveImage) =>
      prevActiveImage === props.images.length - 1 ? 0 : prevActiveImage + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Auto-advance every 3 seconds
    return () => {
      clearInterval(interval); // Cleanup on unmount
    };
  }, [handleNext]);

  return (
    <div className="image-carousel-container">
     <img src={imageNow} alt={activeImage+1} />
     
    </div>
  );
};

export default ImageCarousel;

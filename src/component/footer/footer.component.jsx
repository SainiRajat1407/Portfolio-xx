import React from "react";
import "./footer.styles.scss";
import image1 from "../../asset/images/backgroundimages/footerbackground/1.jpeg";
import image2 from "../../asset/images/backgroundimages/footerbackground/2.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const images = [{"src":image2, description:"Meeting Naveen Nigam Head of Developer relations at GDG Mississauga DevFest 2023"}, 
  {"src":image1, description:"Getting the first prize for the best IT project(Gigjet) at Sheridan College(Dec. 2024)"},];

const Footer = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="footer-container" id="Footer"   >

        <Carousel
          responsive={responsive}
          swipeable={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          keyBoardControl={true}
          infinite={true}
          rewindWithAnimation={true}
          autoPlay={true}
        >
          {images.map((image, index) => {
            return (<>
              <img
                src={image.src}
                key={index}
                alt={index}
                className="footer-carousel-image"
              />
              <div className="image-text">{image.description}</div>
            </>);
          })}
        </Carousel>
    </div>
  );
};

export default Footer;

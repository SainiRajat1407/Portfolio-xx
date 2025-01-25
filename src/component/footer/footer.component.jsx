import React from "react";
import "./footer.styles.scss";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import image1 from "../../asset/images/backgroundimages/footerbackground/1.jpg";
import image2 from "../../asset/images/backgroundimages/footerbackground/2.jpg";
import image3 from "../../asset/images/backgroundimages/footerbackground/3.jpg";
import image4 from "../../asset/images/backgroundimages/footerbackground/4.jpg";
import image5 from "../../asset/images/backgroundimages/footerbackground/5.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ThemeContext from "../../context/theme/themeContext";

const images = [image5,image2, image3, image4, image1];

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
  const themeContext = React.useContext(ThemeContext)
  return (
    <div className="footer-container" id="Footer"  style={{backgroundColor : themeContext['darkMode'] ? "#2B2A4C" : "white"}} >
      <div className="footer-contact-links"  style={{color : themeContext['darkMode'] ? "white" : "black"}} >
        <a className="footer-link" href="https://github.com/SainiRajat1407" target="_blank" rel="noreferrer" style={{color : themeContext['darkMode'] ? "white" : "black"}}>
          <VscGithub />
        </a>
        <a className="footer-link" href="https://www.linkedin.com/in/saini-rajat/" target="_blank" rel="noreferrer" style={{color : themeContext['darkMode'] ? "white" : "black"}}>
          <FaLinkedin />
        </a>
        <div className="contact-email" >rajatsaini94680@gmail.com</div>
      </div>
      <div className="footer-image-carousel">
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
            return (
              <img
                src={image}
                key={index}

                alt={index}
                className="footer-carousel-image"
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Footer;

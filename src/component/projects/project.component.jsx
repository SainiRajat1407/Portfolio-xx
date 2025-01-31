import React from "react";
import "./project.styles.scss";
import data from "../../data/details.json";
import { GoRepoPush } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import realtorContact from "../../asset/images/realtorApplication/contactseller.png";
import realtorHome from "../../asset/images/realtorApplication/home.png";
import realtorMainMenu from "../../asset/images/realtorApplication/mainmenu.png";
import realtorNotification from "../../asset/images/realtorApplication/notificationandmessages.png";
import realtorsignup from "../../asset/images/realtorApplication/signup.png";
import realtorChat from "../../asset/images/realtorApplication/progesschat.png";
import realtorRentAndSell from "../../asset/images/realtorApplication/rentandsell.png";
import bagelHome from "../../asset/images/sheridanbagelcart/home.png";
import bagelRecipt from "../../asset/images/sheridanbagelcart/recipt.png";
import weatherCity from "../../asset/images/weatherapplication/city.png";
import weatherHome from "../../asset/images/weatherapplication/home.png";
import yetToWatchHome from "../../asset/images/yetToWatch/thefavmovies1.png";
import yetToWatchSearch from "../../asset/images/yetToWatch/thefacmovies2.png";
import weatherSearch from "../../asset/images/weatherapplication/mobileview.png";
import MousePositionContext from "../../context/mouseTracker/mouseContext";
import {motion} from 'framer-motion'

const projectImages = {
  realtorApp: [
    realtorHome,
    realtorContact,
    realtorMainMenu,
    realtorNotification,
    realtorsignup,
    realtorChat,
    realtorRentAndSell,
  ],
  bagelCart: [bagelHome, bagelRecipt],
  weatherApp: [weatherHome, weatherCity, weatherSearch],
  yetToWatch: [yetToWatchHome, yetToWatchSearch],
};

const Project = () => {
  const [isOverlayed, setIsOverlayed] = React.useState(true);

  const [currentProject, setCurrentProject] = React.useState(0);

  const [currentImage, setCurrentImage] = React.useState(0);
  const [imageCounter, setImageCounter] = React.useState(0);

  const mouseTracker = React.useContext(MousePositionContext);
  const mousePosition = mouseTracker[0];


  const [overlays, setOverlays] = React.useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const handleStateChange = (id) => {
    setOverlays((prevOverlays) => ({
      ...prevOverlays,
      [id]: true,
    }));
  };
  const handleImagesDisplayOnOverlay = (id) => {
    if (id === 1) {
      if (imageCounter === projectImages["realtorApp"].length - 1) {
        setCurrentImage(projectImages["realtorApp"][imageCounter]);
        setImageCounter(0);
      } else {
        setImageCounter(imageCounter + 1);
        setCurrentImage(projectImages["realtorApp"][imageCounter]);
      }
    } else if (id === 2) {
      if (imageCounter === projectImages["bagelCart"].length - 1) {
        setCurrentImage(projectImages["bagelCart"][imageCounter]);
        setImageCounter(0);
      } else {
        setImageCounter(imageCounter + 1);
        setCurrentImage(projectImages["bagelCart"][imageCounter]);
      }
    } else if (id === 3) {
      if (imageCounter === projectImages["weatherApp"].length - 1) {
        setCurrentImage(projectImages["weatherApp"][imageCounter]);
        setImageCounter(0);
      } else {
        setImageCounter(imageCounter + 1);
        setCurrentImage(projectImages["weatherApp"][imageCounter]);
      }
    }
    else if (id === 4) {
      if (imageCounter === projectImages["yetToWatch"].length - 1) {
        setCurrentImage(projectImages["yetToWatch"][imageCounter]);
        setImageCounter(0);
      } else {
        setImageCounter(imageCounter + 1);
        setCurrentImage(projectImages["yetToWatch"][imageCounter]);
      }
    }
  };

  return (
    <div className="project-container" >

      <motion.div className="project-container-heading"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}>
        Projects
      </motion.div>
      {data.projects.map((item) => {
        return (
          <motion.div
          initial={{ y: 80 }}
          whileInView={{  y: 0 }} transition={{ duration: 0.2, ease: "easeOut" }}
            className={`project-card ${overlays[item.id + 1] ? "overlay" : ""}`}

            key={item.id}
            {...(currentProject === item.id
              ? { onClick: () => handleImagesDisplayOnOverlay(item.id) }
              : null)}

          >


            <div className="project-name">{item.name}</div>
            {isOverlayed && (<img src={require(`../../asset/images/${item.image}`)} style={{ width: "75%" }} />)}


            {isOverlayed && (
              <GoRepoPush
                className="project-popup-btn"
                onClick={() => {
                  handleStateChange(item.id + 1);
                  setIsOverlayed(!isOverlayed);
                  setCurrentProject(item.id);
                  setCurrentImage(null);
                  setImageCounter(0);
                }}
              />
            )}
            {!isOverlayed && (
              <IoMdClose
                className="project-popup-btn"
                onClick={() => {
                  setOverlays({ 1: false, 2: false, 3: false });
                  setIsOverlayed(!isOverlayed);
                  setCurrentImage(null);
                  setImageCounter(0);
                }}
              />
            )}

            {!isOverlayed && (
              <div className="project-instructions">Tap to reveal photos </div>
            )}
            {!isOverlayed && currentProject === item.id && (
              <div
                className="project-photo"
                style={{
                  top: mousePosition.y + 20,
                  left: mousePosition.x + 20,
                }}
              >
                <img
                  src={currentImage}
                  alt=""
                  className={
                    item.id === 1
                      ? "first-project"
                      : item.id === 2
                        ? "second-project"
                        : item.id === 3 ? "third-project" : "fourth-project"
                  }
                />{" "}
              </div>
            )}
            <div className="project-technology-used">{item.technologyUsed}</div>

            <div className="project-description">
              {item.description.map((item) => {
                return <div key={item}>{item}</div>;
              })}
            </div>
          </motion.div>
        );
      })}

      {/* <div
        className="project-heading-top"
        style={{
          left:
            scrollInVh > 265 && scrollInVh < 320
              ? `${scrollInVh - 265}vw`
              : "0",
              color : themeContext['darkMode'] ? "white" : ""
        }}
      >
        My Projects
      </div> */}
    </div>
  );
};

export default Project;

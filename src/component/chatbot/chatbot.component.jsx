import "./chatbot.styles.scss";
import React from "react";
import chatbotImage from "../../asset/images/chatbot.jpg";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Chatbot = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleChatBot = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className={`chatbot-container ${isOpen ? "open" : "close"}`}>
      <button className="chat-trigger" onClick={toggleChatBot}>
        {!isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </button>
      <div className="chatbot-heading">At your Service</div>
      <div className="chatbot-image-container">
        <img src={chatbotImage} alt="" />
      </div>
      <div className="chatbot-body-container">
      </div>
    </div>
  );
};

export default Chatbot;

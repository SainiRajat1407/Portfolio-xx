import React, { useRef } from "react";
import "./contact.styles.scss";
import emailjs from "@emailjs/browser";

const templateId = "template_k5f6v1h";
const servieId = "service_vm9df1f";
const publicKey = "8WlImGVMZxBNHsfbt";

const Contact = (props) => {
  const [formData, setFormData] = React.useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);


  const form = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      formData.user_name !== "" ||
      formData.user_email !== "" ||
      formData.message !== ""
    ) {
      emailjs.sendForm(servieId, templateId, form.current, publicKey).then(
        (result) => {
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
          setIsSubmitted(true)
        },
        (error) => {
        }
      );
    }
    
  };

  return (
    <>
      <div className="contact-container" id="Contact">
        <div className="contact-form-container">
          <form
            action=""
            className="form form1"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="contact-sub-form-container">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                id="user_name"
                maximun="25"
                minimun="5"
                onChange={handleChange}
                placeholder="Enter your name..."
                required
              />
            </div>
            <div className="contact-sub-form-container">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="user_email"
                id="email"
                value={formData.user_email}
                required
                placeholder="Enter your email..."
                onChange={handleChange}
              />
            </div>
            <div className="contact-sub-form-container">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="20"
                rows="8"
                onChange={handleChange}
                placeholder="Enter your message..."
                value={formData.message}
                required
              ></textarea>
            </div>
            <input type="submit" value="Contact me" className="submit-button" />
            {isSubmitted && (<div style={{color: "green"}}>Thanks for contacting!</div>)  }
          </form>
        
        </div>
      </div>
    </>
  );
};

export default Contact;

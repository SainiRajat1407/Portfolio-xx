import React, { useRef } from "react";
import "./contact.styles.scss";
import emailjs from "@emailjs/browser";
import { MdOutlineMail } from "react-icons/md";
import { motion } from 'framer-motion'

const templateId = "template_5q1ties";
const serviceId = "service_xwv3w2n";
const publicKey = "8WlImGVMZxBNHsfbt";

const Contact = (props) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
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
      formData.name !== "" ||
      formData.email !== "" ||
      formData.message !== ""
    ) {
      console.log(formData);
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (result) => {
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setIsSubmitted(true)
        },
        (error) => {
          console.log(error)
        }
      );
    }

  };

  return (
    <>
      <div className="contact-container" id="Contact">
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          Let's get in touch
        </motion.div>

        <motion.div
          className="contact-email"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <MdOutlineMail /> Rajatsaini94680@gmail.com
        </motion.div>
        <div className="contact-form-container">
          <form
            className="form form1"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="contact-sub-form-container">
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                id="name"
                maximun="25"
                minimun="5"
                onChange={handleChange}
                placeholder="Enter your name..."
                required
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
            </div>
            <div className="contact-sub-form-container">
              <motion.input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                required
                placeholder="Enter your email..."
                onChange={handleChange}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
            </div>
            <div className="contact-sub-form-container">
              <motion.textarea
                name="message"
                id="message"
                cols="20"
                rows="8"
                onChange={handleChange}
                placeholder="Enter your message..."
                value={formData.message}
                required
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              ></motion.textarea>
            </div>
            <motion.input type="submit" value="Contact me"
              className="submit-button"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }} />
            {isSubmitted && (<div style={{ color: "green" }}>Thanks for contacting!</div>)}
          </form>

        </div>
        <div className="copyrights">
          © 2025 Designed by Rajat. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Contact;

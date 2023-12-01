import React from "react";
import "./contact.styles.scss";


const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  return (
    <div className="contact-container" id="Contact">
      <div className="contact-heading">Contact</div>
      <div className="contact-image-container">

      </div>
      <div className="contact-form-container">
        <form action="" className="form form1">
          <div className="contact-sub-form-container">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              maximun="25"
              minimun="5"
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact-sub-form-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
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
              required
            ></textarea>
          </div>
          <button type="submit">Contact me!</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

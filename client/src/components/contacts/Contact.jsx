import React from "react";
import "./contacts.css";

const Contact = (props) => {
  return (
    <div className="contact__information">
      <div>
        <h3 className="contact__title">{props.title}</h3>
        <span className="contact__subtitle">{props.subTitle} </span>
      </div>
    </div>
  );
};

export default Contact;

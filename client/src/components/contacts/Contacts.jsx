import React from "react";
import Contact from "./Contact";
import "./contacts.css";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contact__main">
        <h1 className="section__title">Contacts</h1>
        <span className="section__subtitle"> Get in touch </span>

        <div className="contact__container container grid">
          <Contact title="Call Us" subTitle="+380666555555" />

          <Contact title="Email" subTitle="musicstudio@gmail.com" />

          <Contact title="Location" subTitle="Lviv" />
        </div>
      </div>
    </div>
  );
};

export default Contacts;

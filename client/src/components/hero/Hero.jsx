import React from "react";
import { Button } from "../button/Button";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <video autoPlay loop muted>
        <source src="/videos/video-2.mp4" type="video/mp4" />
      </video>
      <h1>CHECK YOUR THU'UM</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get started
        </Button>
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Watch trailer
        </Button>
      </div>
    </div>
  );
};

export default Hero;

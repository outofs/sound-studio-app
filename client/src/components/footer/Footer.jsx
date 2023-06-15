import React from "react";
import "./footer.css";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the newsletter to receive our best.
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/signup">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Carrers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Suport</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
      </div>
      <div className="footer-logo">
        <Link to="/" className="social-logo">
          <div className="logo">
            <img src={"/images/logo.png"} alt="logo" />
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default footer;

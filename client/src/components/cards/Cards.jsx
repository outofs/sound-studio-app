import React from "react";
import CardItem from "../card-item/CardItem";
import "./cards.css";
import { Button } from "../button/Button";

const Cards = ({ data }) => {
  return (
    <div className="cards">
      <h1>Our services</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem item={data[0]} />
          </ul>
          <ul className="cards__items">
            <CardItem item={data[2]} />
            <CardItem item={data[3]} />
          </ul>
          <ul className="cards__items">
            <CardItem item={data[1]} />
          </ul>
        </div>
      </div>

      <Button
        className="btn"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
        to="/services"
      >
        See all services!
      </Button>
    </div>
  );
};

export default Cards;

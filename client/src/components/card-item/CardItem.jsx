import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({ item }) => {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={`/services/${item._id}`}>
          <figure className="cards__item__pic-wrap" data-category={item.type}>
            <img
              src={item.posterImg}
              alt="Service img"
              className="cards__item__img"
            />
          </figure>
          <div className="cards__cards__info">
            <h5 className="cards__item__text">{item.title}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};

export default CardItem;

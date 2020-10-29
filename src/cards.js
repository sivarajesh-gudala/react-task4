import React from "react";

import data from "./data.json";

import logo from "./profileimg1.jpg";

import { Link } from "react-router-dom";

let Cards = () => {
  let cardsData = data.details;
  console.log(cardsData);
  return (
    <div className="container">
      <div className="row">
        {cardsData.map((values, index) => (
          <div className="card mx-auto d-block m-5 border-dark" key="{index}">
            <img src={logo} className="card-img-top" alt="cardimage" />
            <div className="card-body text-center text-light">
              <h5 className="card-title text-capitalize">{values.card.name}</h5>
              <h6 className="card-text">{values.card.number}</h6>
              <h6>
                <a href={"mailto:" + values.card.email} className="card-link">
                  {values.card.email}
                </a>
              </h6>
              <Link
                to={{ pathname: "/resume", personcard: { id: index } }}
                className="btn btn-dark text-white font-weight-bold border-light"
              >
                Click Here
              </Link>
              <h6 className="card-text mt-2">For Portfolio</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

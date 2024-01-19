import React from "react";
import { Container } from "./styles";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "../../../../styles/Icons";

function Card({ title, description, banner, rating, down }) {
  return (
    <Container down={down}>
      <h1>{title}</h1>
      <div>
        <Rating
          initialRating={rating}
          emptySymbol={<FaRegStar size={20} />}
          fullSymbol={<FaStar color="gold" size={20} />}
          fractions={2}
        />
      </div>
      <p>{description}</p>
      <img src={banner} />
    </Container>
  );
}

export default Card;

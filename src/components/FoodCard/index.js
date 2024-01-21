import React from "react";
import { Container, Title, Info, Icon } from "./styles";

function FoodCard(props) {
  return (
    <Container>
      <img src={props.image} />
      <div className="infoWrapper">
        <Title>
          <h1>{props.name}</h1>
          <h1 className="price">
            {(props.price || "").toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </h1>
        </Title>
        <sub>{props.description}</sub>
      </div>
    </Container>
  );
}

export default FoodCard;

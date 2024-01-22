import React from "react";
import { Container, Title, Info, Icon } from "./styles";
import placeholder from "../../assets/placeholder_food.png"

function FoodCard(props) {
  return (
    <Container>
      <img
        src={
          props.image !== null
            ? props.image
            : placeholder
        }
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = placeholder;
        }}
      />
      <div className="infoWrapper">
        <h1 className="food-title">{props.name}</h1>
        <Title>
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

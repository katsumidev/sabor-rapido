import React from "react";
import { Container, Info, Title, Icon } from "./styles";
import {FaStar, FaClock, FaTruck} from "../../styles/Icons"

function RestaurantCard(props) {
  return (
    <Container>
      <img src={props.image} />
      <Title>
        <h1>{props.name}</h1>
      </Title>
      <Info>
        <li>
          <Icon><FaStar /></Icon> {props.rating}
        </li>
        <li>
          <Icon><FaTruck /></Icon> R$ {props.deliveryPrice}
        </li>
        <li>
          <Icon><FaClock /></Icon> {props.deliveryTime} min
        </li>
      </Info>
    </Container>
  );
}

export default RestaurantCard;

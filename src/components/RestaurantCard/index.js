import React from "react";
import { Container, Info, Title, Icon } from "./styles";
import { FaStar, FaClock, FaTruck } from "../../styles/Icons";
import { useNavigate } from "react-router";

function RestaurantCard(props) {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/restaurant/${props.id}`)}>
      <img src={props.image} />
      <div className="infoWrapper">
        <Title>
          <h1>{props.name}</h1>
        </Title>
        <Info>
          <li>
            <Icon>
              <FaStar color="#FFBC0B" />
            </Icon>{" "}
            {props.rating}
          </li>
          <li>
            <Icon>
              <FaTruck />
            </Icon>{" "}
            R$ {props.deliveryPrice}
          </li>
          <li>
            <Icon>
              <FaClock />
            </Icon>{" "}
            {props.deliveryTime} min
          </li>
        </Info>
      </div>
    </Container>
  );
}

export default RestaurantCard;

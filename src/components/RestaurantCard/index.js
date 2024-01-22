import React from "react";
import { Container, Info, Title, Icon } from "./styles";
import { FaStar, FaClock, FaTruck } from "../../styles/Icons";
import { useNavigate } from "react-router";
import place_holder from "../../assets/placeholder_food.png";

function RestaurantCard(props) {
  const navigate = useNavigate();

  return (
    <Container
      src={props.image !== null ? props.image : place_holder}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = place_holder;
      }}
      onClick={() => navigate(`/restaurant/${props.id}`)}
    >
      <div className="rest-banner" />
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

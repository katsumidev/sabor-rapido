import React from "react";
import { Container, Wrapper } from "./styles";
import Card from "./Card";
import habrobs from "../../../assets/habrobs.png";
import wackydaniel from "../../../assets/wackydaniel.png";
import underway from "../../../assets/underway.png";

function BestRestaurants() {
  return (
    <Container>
      <h1>Os melhores restaurantes</h1>
      <Wrapper>
        <Card
          title="Habbrobs"
          rating={5}
          description="Coma as melhores esfihas do mercado!"
          banner={habrobs}
        />
        <Card
          title="Wc Daniel"
          rating={5}
          down
          description="Confira os hamburgueres mais deliciosos do mercado"
          banner={wackydaniel}
        />
        <Card
          title="Underway"
          rating={4}
          description="Coma de forma saudável e suculenta!"
          banner={underway}
        />
      </Wrapper>
    </Container>
  );
}

export default BestRestaurants;

import React from "react";
import wave from "../../assets/wave.png";
import plate1 from "../../assets/hero_banner.png";
import { TbTruckDelivery } from "../../styles/Icons";
import { Container, LeftSide, OrderNowBtn, RightSide } from "./styles";
import AboutUs from "../../components/HeroComponents/AboutUs";
import BestRestaurants from "../../components/HeroComponents/BestRestaurants";
import { useNavigate } from "react-router";

function Main() {
  const navigate = useNavigate()

  return (
    <>
      <Container>
        <LeftSide>
          <div>
            <h3>🚗 Tenha sua comida entregue em até 40 minutos!</h3>
            <img src={wave} />
            <h1>Tenha a sua</h1>
            <h1 className="accent">Refeição Favorita</h1>
            <h1>na Palma da Sua Mão!</h1>
            <h4>A qualquer hora, a qualquer momento.</h4>
            <OrderNowBtn onClick={() => navigate("/register")}>
              <TbTruckDelivery size={23} /> Peça Agora
            </OrderNowBtn>
          </div>
        </LeftSide>
        <RightSide>
          <img src={plate1} />
        </RightSide>
      </Container>
      <AboutUs />
      <BestRestaurants />
    </>
  );
}

export default Main;

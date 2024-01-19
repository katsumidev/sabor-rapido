import React from "react";
import { Container, Info, LogIn } from "./styles";
import plate2 from "../../../assets/aboutus_plate.png";
import { useNavigate } from "react-router";

function AboutUs() {
  const navigate = useNavigate();

  return (
    <Container>
      <img src={plate2} />
      <Info>
        <h2>SOBRE NÓS</h2>
        <h1>Amamos Entregar Sabor até Você!</h1>
        <p>
          Sabor Rápido é a solução definitiva para satisfazer seus desejos
          gastronômicos com praticidade e agilidade. Explore uma variedade
          irresistível de opções culinárias, faça pedidos personalizados e
          desfrute de uma entrega rápida e eficiente.
        </p>
        <p>
          Com Sabor Rápido, cada refeição se torna uma experiência deliciosa,
          sem complicações. Quer começar a pedir? Faça login agora mesmo e
          descubra o caminho mais rápido para o prazer gastronômico.
        </p>

        <LogIn onClick={() => navigate("/register")}>Cadastre-se!</LogIn>
      </Info>
    </Container>
  );
}

export default AboutUs;

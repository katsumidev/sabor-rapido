import React from "react";
import { Container, FooterInfo, Copywrite } from "./styles";

function Footer() {
  return (
    <Container>
      <FooterInfo>
        <ul>
          <h3>Sabor Rápido</h3>
          <li>Site Institucional</li>
          <li>Fale Conosco</li>
          <li>Carreiras</li>
          <li>Entregadores</li>
        </ul>
        <ul>
          <h3>Descubra</h3>
          <li>Cadastre seu Restaurante</li>
          <li>Sabor Card</li>
          <li>Blog Sabor Rápido</li>
          <li>Sabor Shop</li>
        </ul>
        <ul></ul>
      </FooterInfo>
      <div className="hr-90" />
      <Copywrite>
        <p>
          © Copyright 2023 - Mooncoded - Todos os direitos reservados @mooncoded
        </p>
      </Copywrite>
    </Container>
  );
}

export default Footer;

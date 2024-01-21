import React from "react";
import { Container } from "./styles";

function Title({ children }) {
  return (
    <Container>
      <h3>{children}</h3>
      <div className="line"></div>
    </Container>
  );
}

export default Title;

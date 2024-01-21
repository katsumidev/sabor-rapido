import React, { useState, useEffect } from "react";
import {
  Background,
  Container,
  ModalBox,
  CloseBtn,
  LoadingBar,
  ProgressBar,
} from "./styles";
import { BsCheckCircleFill } from "../../styles/Icons";

function ModalPopUp(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      props.closeModal();
    }, 5000);
  }, []);

  return (
    <Container>
      <ModalBox>
        <BsCheckCircleFill />
        <h3>{props.message}</h3>
        <CloseBtn onClick={() => props.closeModal()}>Ok!</CloseBtn>
        {loading ? (
          <LoadingBar>
            <ProgressBar />
          </LoadingBar>
        ) : null}
      </ModalBox>
      <Background onClick={() => props.closeModal()} />
    </Container>
  );
}

export default ModalPopUp;

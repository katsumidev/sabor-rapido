import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 680px;
  max-width: 400px;
  min-width: 300px;
  background-color: #f9f9f9;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  font-weight: 700;

  ${(props) =>
    props.down &&
    css`
      margin-top: 50px;
    `}

  div {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 30px;
    margin-top: 10px;
  }

  h1,
  h4,
  p {
    align-self: flex-start;
  }

  @media (max-width: 1000px) {
    min-width: 70%;
    height: auto;
    align-items: center;

    div {
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    h1,
    h4,
    p {
      align-self: center;
    }

    ${(props) =>
      props.down &&
      css`
        margin-top: 0px;
      `}
  }
`;

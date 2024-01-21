import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding-top: 70px;
    height: auto;
  }

  @media (max-width: 500px) {
    width: 90vw;
    margin: 0 auto;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  padding: 0 50px;

  img {
    width: 150px;
  }

  h3 {
    margin-bottom: 25px;
  }

  h1 {
    font-size: 4rem;
    width: 100%;
    font-family: "Mosk", sans-serif;
    text-transform: uppercase;
  }

  .accent {
    color: var(--accent-color);
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 500px) {
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 90%;
    padding: 0px;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  img {
    max-width: 100%;
    z-index: -1;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const OrderNowBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;

  padding: 20px;
  min-width: 250px;
  max-width: 250px;
  text-align: center;
  border-radius: 100px;
  color: #fff;
  font-weight: 900;
  background-color: var(--accent-color);
  margin-top: 50px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
`;

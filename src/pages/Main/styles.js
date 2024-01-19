import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: left;

  img {
    width: 150px;
  }

  div {
    width: 80%;
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
`;

export const OrderNowBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  padding: 20px;
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

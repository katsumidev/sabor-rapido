import styled from "styled-components";
import banner from "../../assets/banner.jpg";

export const Container = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: center;
  gap: 50px;

  sub {
    span {
      font-weight: 700;
      color: var(--accent-color);
      cursor: pointer;
      font-size: 11pt;
    }
  }

  h4 {
    color: red;
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 20px 0;
  }

  @media (max-width: 600px) {
    h4 {
      flex-direction: column;
    }
  }
`;

export const SideBanner = styled.div`
  width: 50%;
  height: 90vh;
  max-height: 850px;
  background-image: url(${banner});
  background-size: cover;
  border-radius: 30px;
  max-width: 800px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: #fff;
  max-width: 600px;
  height: auto;
  max-height: 850px;
  border-radius: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  text-align: center;
  padding: 50px 20px;

  @media (max-width: 1000px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 100%;

    h1 {
      font-size: 1.5rem;
    }
  }

  .logo {
    width: 60px;
  }
`;

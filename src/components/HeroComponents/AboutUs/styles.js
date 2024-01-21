import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 90vw;
  margin: 0 auto;

  img {
    width: auto;
    min-width: 200px;
    max-width: 700px;
  }

  @media (max-width: 1250px) {
    flex-direction: column;
    width: 90vw;
    margin-top: 100px;

    img {
      width: 70%;
    }
  }

  @media (max-width: 900px) {
    img {
      width: 90%;
    }
  }

  @media (max-width: 750px) {
    text-align: center;
  }
`;

export const Info = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 25px;

  h2 {
    font-family: "Mosk", sans-serif;
    color: var(--accent-color);
  }

  h1 {
    font-size: 3rem;
  }

  p {
    font-weight: 500;
    font-size: 14pt;
  }

  max-width: 600px;

  @media (max-width: 1250px) {
    max-width: 80%;
  }

  @media (max-width: 750px) {
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 2rem;
    }
  }
`;

export const LogIn = styled.div`
  background-color: var(--accent-color);
  color: #fff;
  padding: 15px;
  width: 200px;
  text-align: center;
  border-radius: 100px;
  font-weight: 900;
  cursor: pointer;
  margin-top: 40px;
`;

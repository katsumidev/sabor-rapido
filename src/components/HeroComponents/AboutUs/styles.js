import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 60px;
  width: 100vw;

  img {
    max-width: 700px;
  }
`;

export const Info = styled.div`
  display: flex;
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

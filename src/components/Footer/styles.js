import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background-color: transparent;
  padding: 50px 0;

  .hr-90 {
    width: 70%;
    height: 0.5px;
    background-color: #717171;
    margin: 40px auto;
  }

  @media (max-width: 900px) {
    .hr-90 {
      width: 90%;
    }
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 150px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 30px;

    h3 {
      margin-bottom: 20px;
      color: #000;
    }

    li {
      color: var(--semi-dark);
      font-weight: 700;
      cursor: pointer;
    }
  }

  @media (max-width: 900px) {
    width: 80%;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 60px;
  }
`;

export const Copywrite = styled.div`
  text-align: center;
  max-width: 60%;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
  color: #000;

  .logo {
    width: 70px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 15px;
    max-width: 90%;
  }
`;

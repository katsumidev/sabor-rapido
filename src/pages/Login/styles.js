import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;

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
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  .logo {
    width: 60px;
  }
`;

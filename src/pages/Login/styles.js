import styled from "styled-components";
import banner from "../../assets/banner.jpg"

export const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: row;
  padding: 30px;
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
`;

export const SideBanner = styled.div`
  width: 50%;
  height: 100%;
  background-image: url(${banner});
  background-size: cover;
  border-radius: 30px;
  max-width: 800px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const LoginWrapper = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: #fff;
  max-width: 600px;
  border-radius: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  .logo {
    width: 60px;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 90vw;
  margin: 100px auto;

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  height: auto;

  @media (max-width: 1250px) {
    gap: 15px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 50px;
    width: 100%;
    align-items: center;
  }
`;

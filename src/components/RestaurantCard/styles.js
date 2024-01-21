import styled from "styled-components";

export const Container = styled.div`
  width: 320px;
  height: fit-content;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 300px;

  img {
    width: 100%;
    height: 200px;
    border-radius: 12px;
  }

  h1 {
    font-size: 14pt;
  }

  &:hover {
    transform: scale(1.01);
  }

  @media (max-width: 900px) {
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;

    .infoWrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 30px;
    }

    img {
      height: 200px;
      width: 200px;
    }
  }

  @media (max-width: 750px) {
    width: 150px;
    min-width: auto;
    flex-direction: column;
    background-color: transparent;
    box-shadow: none;
    padding: 0px;

    .infoWrapper {
      margin-left: 0px;
    }

    h1 {
      font-size: 11pt;
    }

    img {
      height: 150px;
      width: 150px;
    }
  }
`;

export const Title = styled.div`
  margin-top: 10px;
  position: relative;
  margin-bottom: 15px;

  /* &::before {
    content: "";
    display: block;
    width: 60%;
    height: 3px;
    border-radius: 30px;
    background-color: var(--accent-color);
    position: absolute;
    bottom: -10px;
  } */
`;

export const Info = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
  align-items: center;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    font-weight: 900;
    color: #c3c3c3;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  @media (max-width: 750px) {
    margin-top: 0px;
    font-size: 10pt;
  }
`;

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  background-color: #ededf2;
  border-radius: 50%;
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;

  svg {
    color: #a8a8a8;
  }

  @media (max-width: 750px) {
    width: 15px;
    height: 15px;
    background-color: transparent;
  }
`;

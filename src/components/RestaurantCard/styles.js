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

  .rest-banner {
    width: 100%;
    height: 200px;
    background-image: url(${(props) => props.src });
    background-size: cover;
    background-position: center;
    border-radius: 12px;
  }

  h1 {
    font-size: 14pt;
    overflow: hidden;
    white-space: nowrap;
    width: 90%;
    text-overflow: ellipsis;
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

    h1 {
      white-space: wrap;
      overflow: auto;
      width: 100%;
    }

    .infoWrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 30px;
    }

    .rest-banner {
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

    .rest-banner {
      height: 150px;
      width: 150px;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;

    h1 {
      white-space: wrap;
      overflow: auto;
      width: 100%;
    }

    .infoWrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 10px;
    }

    .rest-banner {
      height: 80px;
      width: 80px;
      min-width: 80px;
    }
  }

  @media (max-width: 350px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #fff;
    padding: 20px 10px;

    .infoWrapper {
      align-items: center;
      margin: 0px;
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

  @media (max-width: 500px) {
    flex-direction: row;
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

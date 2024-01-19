import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  height: 320px;
  padding: 20px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
    transition: all .2s;

  img {
    width: 100%;
    height: 200px;
    border-radius: 30px;
  }

  h1 {
    font-size: 14pt;
  }

  &:hover {
    transform: scale(1.01);
  }
`;

export const Title = styled.div`
    margin-top: 10px;
`

export const Info = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
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
`

export const Icon = styled.div`
    width: 30px;
    height: 30px;
    background-color: #EDEDF2;
    border-radius: 50%;
    display: flex;
    padding: 5px;
    justify-content: center;
    align-items: center;
`
import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: fit-content;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  cursor: pointer;
  transition: all 0.2s;

  img {
    width: 100%;
    height: 200px;
    border-radius: 12px;
  }

  h1 {
    font-size: 14pt;
  }

  sub {
    margin-top: 15px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    transform: scale(1.01);
  }
`;

export const Title = styled.div`
  margin-top: 10px;
  display: flex;
  position: relative;
  justify-content: space-between;

  &::before {
    content: ""; 
    display: block; 
    width: 30%; 
    height: 3px;
    border-radius: 30px;
    background-color: var(--accent-color);
    position: absolute;
    bottom: -3px;
  }

  .price {
    font-size: 17pt;
  }
`;

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
`;

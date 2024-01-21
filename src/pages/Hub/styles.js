import styled from "styled-components";
import main_banner from "../../assets/mainBanner.png";

export const Container = styled.div`
  background-color: var(--hub-background);
  padding: 50px;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 1280px) {
    width: 90%;
  }

  @media (max-width: 750px) {
    width: 100%;
    padding: 20px;
  }

  .mainBanner {
    width: 100%;
    border-radius: 18px;
    margin: 30px 0;
  }
`;

export const Title = styled.div`
  font-size: 20pt;
  font-weight: 900;
  margin: 60px 0 30px 0;
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 20%;
    height: 3px;
    border-radius: 30px;
    background-color: #000;
    position: absolute;
    bottom: -10px;
  }
`;

export const SearchedRestaurantWrapper = styled.div`
  padding: 5px 20px;
  border-radius: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;

  &:hover {
    transform: scale(1.01);
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;

    sub {
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;
      width: 90%;
      font-weight: 700;
      color: var(--semi-dark);
    }
  }
`;

export const SearchedFood = styled.div`
  width: 100%;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-left: 40px;

  img {
    width: 20px;
    height: 20px;
    border-radius: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;

    sub {
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;
      width: 90%;
      font-weight: 700;
      color: var(--semi-dark);
    }
  }
`;

export const SearchedFoodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 18px;
  cursor: pointer;
  transition: all 0.2s;
  background-color: var(--secundary-background);
  margin-bottom: 10px;
`;

export const SearchDropdown = styled.div`
  position: absolute;
  top: 70px;
  background-color: #fff;
  width: 100%;
  left: 0;
  border-radius: 30px;
  padding: 16px 30px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;

export const Banner = styled.div`
  width: 100%;
  border-radius: 18px;
  height: 400px;
  background-image: url(${main_banner});
  background-size: cover;
  margin: 30px 0;
  background-repeat: no-repeat;
`;

export const CategorieBtn = styled.div`
  background-color: ${(props) =>
    props.isSelected ? "var(--accent-color)" : "var(--secundary-background)"};
  padding: 10px 20px;
  border-radius: 30px;
  color: ${(props) => (props.isSelected ? "#fff" : "var(--semi-dark)")};
  font-weight: 700;
  font-size: 10.5pt;
  cursor: pointer;
  max-width: 500px;
  white-space: nowrap;
  text-align: center;
  height: fit-content;
  transition: all 0.2s;

  @media (max-width: 750px) {
    font-size: 9pt;
    padding: 5px 15px;
  }
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 750px) {
    gap: 10px;
  }
`;

export const RestWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  margin-bottom: 50px;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 750px) {
    align-items: flex-start;
    flex-wrap: nowrap;
    overflow-x: scroll;
    gap: 10px;
    justify-content: flex-start;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

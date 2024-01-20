import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 80px;
`;

export const FoodWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.direction == "restaurants" ? "row" : "column"};
  gap: 20px;
`;

export const ItemWrapper = styled.div`
  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 30px;
    margin-bottom: 15px;

    h4 {
      font-size: 11pt;
    }

    sub {
      font-size: 9pt;
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 100%;
    }
  }

  .itemsRow {
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
  }
`;

export const FoodSearch = styled.div`

  .itemWrapper {
    width: fit-content;
  }
`;

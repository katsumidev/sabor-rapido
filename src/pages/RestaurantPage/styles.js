import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  padding: 50px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  align-items: flex-start;
`;

export const RestaurantInfo = styled.div`
  width: 35%;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

  display: flex;
  flex-direction: column;
  font-weight: 700;

  padding: 30px;
  gap: 5px;

  .deliveryInfo {
    color: var(--semi-dark);
    vertical-align: middle;
    display: flex;
    align-items: center;
    gap: 5px;

    svg {
      margin-right: 5px;
      color: var(--semi-dark);
    }

    span {
      color: #000;
    }
  }

  h3 {
    margin-top: 7px;
  }

  .titleInfo {
    width: 70%;
  }

  .description {
    font-weight: 500;
  }

  .profilePicture {
    width: 100%;
    border-radius: 12px;
    margin-bottom: 30px;
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-self: flex-start;
  margin-top: 15px;
`;

export const Tag = styled.div`
  font-size: 10pt;
  display: inline-flex;
  align-items: center;
  background-color: var(--secundary-background);
  color: var(--semi-dark);
  padding: 4px 15px;
  font-weight: 700;
  border-radius: 30px;
  gap: 7px;
  height: fit-content;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;

  sub {
    color: var(--semi-dark);
    font-weight: 500;
    margin-bottom: 3px;

    display: flex;
    align-items: center;
    gap: 5px;

    svg {
      color: var(--accent-color);
    }
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;

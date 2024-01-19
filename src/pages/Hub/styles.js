import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--hub-background);
  padding: 50px;
`;

export const Title = styled.div`
  font-size: 20pt;
  font-weight: 900;
  margin: 60px 0 30px 0;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;

  svg {
    color: var(--semi-dark);
  }
`;

export const SearchInput = styled.input`
  width: 90%;
  padding: 18px 20px;
  border-radius: 30px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 11pt;
  font-weight: 700;

  &::placeholder {
    font-size: 11pt;
    font-weight: 700;
  }
`;

export const CategorieBtn = styled.div`
  background-color: ${(props) =>
    props.isSelected ? "var(--accent-color)" : "var(--secundary-background)"};
  padding: 10px 20px;
  border-radius: 30px;
  color: ${props => props.isSelected ? "#fff" : "var(--semi-dark)"};
  font-weight: 700;
  font-size: 10.5pt;
  cursor: pointer;
  transition: all .2s;
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const RestWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
`
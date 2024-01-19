import styled, {css} from 'styled-components';

export const Container = styled.div`
  width: 400px;
  height: 680px;
  background-color: #F9F9F9;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  font-weight: 700;
  
  ${props => props.down && css`
    margin-top: 50px;
  `}

  div {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 30px;
    margin-top: 10px;
  }

  h1, h4, p {
    align-self: flex-start;
  }
`;

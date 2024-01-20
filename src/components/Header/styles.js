import styled, {css} from "styled-components";

export const Container = styled.div`
  height: 90px;
  background-color: transparent;
  top: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  z-index: 999;
  position: fixed;
  width: 100%;
  transition: all .2s;

  ${(props) =>
    props.isFixed &&
    css`
      height: 80px;
      box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
      background-color: #fff;
    `}

  img {
    width: 130px;
    cursor: pointer;
  }
`;

export const HeaderMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  align-items: center;
  font-weight: 700;
  font-size: 11.5pt;

  svg {
    cursor: pointer;
  }

  li {
    cursor: pointer;
  }

  .cart-btn {
    background-color: var(--accent-color);
    border-radius: 100%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }

  .register-btn {
    color: var(--accent-color);
  }

  .login-btn {
    background-color: var(--accent-color);
    color: #fff;
    padding: 12px;
    width: 120px;
    text-align: center;
    border-radius: 100px;
  }
`;

export const ProfilePicture = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${(props) => props.picture});
  background-position: center;
  background-size: cover;
  border-radius: 100%;
  cursor: pointer;
  position: relative;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const DeliveryRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  transition: all .2s;
  background-color: ${props => props.isFixed ? "#EBEAED" : "#fff"};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 10px 30px;
  border-radius: 30px;
  font-size: 11pt;

  sub {
    color: var(--semi-dark);
  }

  span {
    width: 23px;
    height: 23px;
    background-color: var(--accent-color);
    color: #fff;
    border-radius: 100%;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

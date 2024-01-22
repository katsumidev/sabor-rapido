import styled, { css } from "styled-components";

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
  transition: all 0.2s;

  .search-bar {
    width: 100%;

    svg {
      color: #000;
    }
  }

  .mobile-header-wrapper {
    display: ${(props) => (props.searchOpen ? "none" : "flex")};
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;

    @media (min-width: 750px) {
      display: none;
    }
  }

  .search-full-bar {
    display: ${(props) => (props.searchOpen ? "flex" : "none")};
    align-items: center;
    gap: 30px;
    width: 100%;

    @media (min-width: 750px) {
      display: none !important;
    }
  }

  .mobile-search-icon {
    display: none;

    @media (max-width: 750px) {
      display: block;
    }
  }

  .mobile-right-side {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }

  .mobile-hamburger {
    display: none;

    @media (max-width: 750px) {
      display: block;
    }
  }

  ${(props) =>
    props.isFixed &&
    css`
      height: 80px;
      box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
      background-color: #fff;
    `}

  img {
    width: 130px;
    margin-right: 15px;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    padding: 0 20px;

    img {
      min-width: 50px;
      width: 50px;
    }
  }
`;

export const HeaderMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: flex-end;
  font-weight: 700;
  font-size: 11.5pt;
  width: 100%;

  .dropdown-wrapper {
    position: relative;
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

  svg {
    cursor: pointer;
  }

  li {
    cursor: pointer;
  }

  .cart-btn {
    background-color: var(--accent-color);
    border-radius: 100%;
    min-width: 40px;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }

  @media (max-width: 750px) {
    display: none;
  }

  @media (max-width: 900px) {
    gap: 15px;
  }
`;

export const ProfilePicture = styled.img`
  min-width: 50px;
  min-height: 50px;
  width: 50px;
  height: 50px;
  max-width: 50px;
  max-height: 50px;
  border-radius: 100%;
  cursor: pointer;
  position: relative;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const SearchWrapper = styled.div`
  max-width: 700px;
  width: 100%;
  background-color: ${(props) => (props.isFixed ? "#EBEAED" : "#fff")};
  border-radius: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: all 0.3s;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
  position: relative;

  svg {
    color: var(--accent-color);
  }
`;

export const SearchInput = styled.input`
  width: 90%;
  padding: 12px 10px;
  border-radius: 30px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 11pt;
  font-weight: 700;
  justify-self: flex-start;

  &::placeholder {
    font-size: 11pt;
    font-weight: 700;
  }
`;

export const DeliveryRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  transition: all 0.3s;
  background-color: ${(props) => (props.isFixed ? "#EBEAED" : "#fff")};
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
    min-width: 23px;
    background-color: var(--accent-color);
    color: #fff;
    border-radius: 100%;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  h4 {
    max-width: 80%;
    white-space: nowrap; /* Impede quebra de linha */
    overflow: hidden; /* Oculta o conteúdo que ultrapassa o tamanho do contêiner */
    text-overflow: ellipsis;
  }

  white-space: nowrap; /* Impede quebra de linha */

  /* Adição para garantir um tamanho mínimo */
  min-width: 200px; /* Ajuste conforme necessário */
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 40px;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 998;
  left: 0;
  top: 0;
  opacity: 0;
  animation: fadeIn 0.5s;
  animation-play-state: running;
  animation-fill-mode: both;
  transition: all 0.1s;
  background-color: #fff;

  svg {
    margin-right: 20px;
    vertical-align: middle;
  }

  .register-btn {
    color: var(--accent-color);
  }

  .login-btn {
    background-color: var(--accent-color);
    color: #fff;
    padding: 12px 30px;
    width: fit-content;
    text-align: center;
    border-radius: 100px;
  }

  ul {
    list-style: none;

    li {
      margin: 40px 0;
      font-size: 20pt;
      cursor: pointer;
      font-weight: 900;
    }
  }

  @media (max-width: 600px) {
    ul li {
      font-size: 18pt;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      height: 0px;
      transform: translateY(-100%);
    }
    to {
      opacity: 1;
      height: 100vh;
      transform: translateY(0%);
    }
  }
`;

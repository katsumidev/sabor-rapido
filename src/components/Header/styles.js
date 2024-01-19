import styled from 'styled-components';

export const Container = styled.div`
  height: 90px;
  background-color: #F7F7F7;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  top: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  z-index: 999;
  position: fixed;
  width: 100%;

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

    li {
        cursor: pointer;
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
`

export const ProfilePicture = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${props => props.picture});
  background-position: center;
  background-size: cover;
  border-radius: 100%;
`
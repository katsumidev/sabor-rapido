import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  sub {
    span {
      font-weight: 700;
      color: var(--accent-color);
      cursor: pointer;
      font-size: 11pt;
    }
  }
`;

export const SideBanner = styled.div`
  width: 60%;
  height: 100%;
  border-radius: 30px;
  background-image: url("https://e0.pxfuel.com/wallpapers/52/830/desktop-wallpaper-food-background-food-food-recipes-food-menu-greek-food.jpg");
`;

export const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  .logo {
    width: 60px;
  }
`;

export const RegisterBtn = styled.div`
  padding: 1rem 0;
  background-color: var(--accent-color);
  width: 100%;
  border-radius: 18px;
  color: #fff;
  text-align: center;
  font-weight: 900;
  cursor: pointer;
`;

export const Form = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 20px;

  p {
    align-self: flex-start;
    font-weight: 700;
    font-size: 10pt;
    margin-top: 20px;
  }
`;

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

const messageColors = {
  default: "#999",
  error: "#e57878",
  success: "#78e5d5",
};

export const UploadMessage = styled.h5`
  display: flex;
  color: ${(props) => messageColors[props.type || "default"]};
  justify-content: center;
  align-items: center;
`;

export const DropContainer = styled.div`
  padding: 20px;
  width: 100%;
  border: 1px dashed #000;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: height 0.2s ease;
  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 10px;
  align-items: center;

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Preview = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100%;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0rem 1rem;
  transition: all 0.2s;
  border-radius: 18px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  input {
    font-size: 13.5px;
    height: 100%;
    background-color: transparent;
    color: #000;
    transition: 0.1s all ease;
    padding: 1rem 0;
  }

  &:focus-within {
    border-color: var(--accent-color);
  }

  input::placeholder {
    color: transparent;
  }

  .form-label {
    position: absolute;
    font-size: 13px;
    padding: 0 10px;
    color: var(--secundary-text);
    pointer-events: none;
    transition: 0.15s all ease;
    margin-bottom: 0px;
  }

  input:focus + .form-label,
  input:not(:placeholder-shown) + .form-label {
    transform: translate(5px, -22px);
    background-color: #fff;
    font-size: 13px;
    font-weight: 600;
  }

  input:focus + .form-label {
    color: var(--accent-color);
  }

  svg {
    color: var(--secundary-text);
  }

  .form-input {
    border: none;
    width: 100%;
    outline: none;
    transition: all 0.2s;
    font-size: 13.5px;
    height: 100%;
    font-weight: 600;
    color: #000;
  }
`;

export const FormInput = styled.input`
  border: none;
  width: 100%;
  outline: none;
  border-radius: 30px;
  transition: all 0.1s;
  font-size: 13.5px;
  font-weight: 600;
  position: relative;
`;

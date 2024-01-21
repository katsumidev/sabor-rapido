import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  min-width: 250px;
  border-radius: 30px;
  padding: 24px;
  width: fit-content;
  display: flex;
  width: 350px;
  flex-direction: column;
  gap: 20px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s;
  transform: translateX(20px);
  box-shadow: 0 13px 48px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
  color: #252525;
  border: 1px solid rgba(255, 255, 255, 0.18);

  &.show {
    opacity: 1;
    visibility: visible;
    right: 0;
    transform: translateX(0);
  }
`;

export const ItemLi = styled.li`
  opacity: 0;
  transform: translateX(35%);
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-timing-function: ease-out;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.2s;
  padding: 5px 0;

  &:hover {
    color: var(--accent-color);
  }

  &.animate-in {
    animation-name: slide-in;
    opacity: 1;
  }

  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateX(35%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

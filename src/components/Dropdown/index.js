import React from "react";
import { Container, ItemLi } from "./styles";
import { useNavigate } from "react-router";

function Dropdown({ show, items, name }) {
  const navigate = useNavigate();

  const handleAction = (item) => {
    switch (item.action) {
      case "redirect":
        navigate(item.url);
        break;
      case "logout":
        localStorage.removeItem("access_token");
        localStorage.clear();
        window.location.reload();
        break;
      default:
        console.warn("Ação desconhecida:", item.action);
    }
  };

  const onAnimationEnd = (e) => {
    if (!show) {
      e.target.classList.remove("animate-in");
    }
  };

  return (
    <Container
      className={`dropdown ${show ? "show" : ""}`}
      onAnimationEnd={onAnimationEnd}
    >
      <h2>Olá {name} 👋</h2>
      {items.map((item, index) => {
        return (
          <ItemLi
            key={index}
            onClick={() => handleAction(item)}
            style={{ animationDelay: `${index * 50}ms` }}
            className={`dropdown-item ${show ? "animate-in" : ""}`}
          >
            {item.icon}
            {item.name}
          </ItemLi>
        );
      })}
    </Container>
  );
}

export default Dropdown;

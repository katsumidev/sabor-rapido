import React, { useState, useRef, useEffect } from "react";
import { Container, DeliveryRow, HeaderMenu, ProfilePicture } from "./styles";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router";
import { consultAuth, consultCEP } from "../../services/api";
import Dropdown from "../Dropdown";
import {
  FaShoppingBag,
  FaUser,
  FaSignOutAlt,
  MdLocationOn,
} from "../../styles/Icons";

function Header() {
  const navigate = useNavigate();
  const [logged, setLogged] = useState(false);
  const [userData, setUserData] = useState({});
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const options = [
    { name: "Ver Conta", icon: <FaUser />, action: "redirect", url: "account" },
    {
      name: "Meu Carrinho",
      icon: <FaShoppingBag />,
      action: "redirect",
      url: "cart",
    },
    { name: "Sair", icon: <FaSignOutAlt />, action: "logout" },
  ];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownRef]);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await consultAuth();

        setLogged(!logged);
        setUserData(response);
      } catch (err) {
        console.log(err);
      }
    };

    checkAuthentication();
  }, []);

  return (
    <Container>
      <img src={logo} onClick={() => navigate("/")} />
      <HeaderMenu>
        {logged ? (
          <>
            <DeliveryRow>
              <sub>Entregar para</sub>
              <span>
                <MdLocationOn size={15} />
              </span>{" "}
              {`${userData.street || "Inclua um endereço à sua conta"} ${
                userData.number || ""
              }`}
            </DeliveryRow>
            <li className="cart-btn">
              <FaShoppingBag size={15} />
            </li>

            <ProfilePicture
              ref={dropdownRef}
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              picture={`${process.env.REACT_APP_SERVER_URL}/files/${userData.picture}`}
            >
              <Dropdown show={isDropdownOpen} items={options} />
            </ProfilePicture>
          </>
        ) : (
          <>
            <li>Sobre Nós</li>
            <li>Fale Conosco</li>
            <li className="register-btn" onClick={() => navigate("/register")}>
              Criar Conta
            </li>
            <li className="login-btn" onClick={() => navigate("/login")}>
              Entrar
            </li>
          </>
        )}
      </HeaderMenu>
    </Container>
  );
}

export default Header;

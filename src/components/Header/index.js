import React, { useState, useRef, useEffect } from "react";
import { Container, DeliveryRow, HeaderMenu, ProfilePicture, SearchInput, SearchWrapper } from "./styles";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router";
import { consultAuth, consultCEP } from "../../services/api";
import Dropdown from "../Dropdown";
import {
  FaShoppingBag,
  FaUser,
  FaSignOutAlt,
  MdLocationOn,
  MdChatBubble,
  IoTicket,
  RiCoupon2Fill,
  LuSearch
} from "../../styles/Icons";

function Header() {
  const navigate = useNavigate();
  const [logged, setLogged] = useState(false);
  const [userData, setUserData] = useState({});
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchParameter, setSearchParameter] = useState("");
  const [isFixed, setFixed] = useState(false);

  if (typeof window !== "undefined") {
    function setHeaderFixed() {
      if (window.scrollY >= 1) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    }

    window.addEventListener("scroll", setHeaderFixed);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate(`/search?term=${searchParameter}`)
      setSearchParameter("")
    }
  }

  const options = [
    { name: "Ver Conta", icon: <FaUser />, action: "redirect", url: "account" },
    {
      name: "Chats",
      icon: <MdChatBubble />,
      action: "redirect",
      url: "account",
    },
    { name: "Pedidos", icon: <IoTicket />, action: "redirect", url: "account" },
    {
      name: "Cupoms",
      icon: <RiCoupon2Fill />,
      action: "redirect",
      url: "account",
    },
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
    <Container isFixed={isFixed}>
      <img src={logo} onClick={() => navigate("/")} />
      <HeaderMenu>
        {logged ? (
          <>
            <SearchWrapper isFixed={isFixed}>
              <LuSearch
                onClick={() => navigate(`/search?term=${searchParameter}`)}
                size={25}
              />
              <SearchInput
                onChange={(e) => setSearchParameter(e.target.value)}
                value={searchParameter}
                onKeyDown={handleKeyDown}
                placeholder="Procure por pratos e restaurantes.."
              />
            </SearchWrapper>
            <DeliveryRow isFixed={isFixed}>
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
              <Dropdown
                name={userData.name}
                show={isDropdownOpen}
                items={options}
              />
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

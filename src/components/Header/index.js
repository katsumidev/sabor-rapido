import React, { useState, useEffect } from "react";
import { Container, HeaderMenu, ProfilePicture } from "./styles";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();
  const [logged, setLogged] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/auth/consult`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }).then(async (res) => {
      let data = await res.json();

      switch (res.status) {
        case 200:
          setLogged(!logged);
          setUserData(data);
          break;
      }
    });
  }, []);

  return (
    <Container>
      <img src={logo} onClick={() => navigate("/")} />
      <HeaderMenu>
        <li>Sobre Nós</li>
        <li>Fale Conosco</li>
        {logged ? (
          <>
            <ProfilePicture
              picture={`${process.env.REACT_APP_SERVER_URL}/files/${userData.picture}`}
            />
          </>
        ) : (
          <>
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

import React, { useEffect, useState } from "react";
import { Container, LoginWrapper, SideBanner } from "./styles";
import { MdOutlineError } from "../../styles/Icons";
import { Form, FormInput, Input, RegisterBtn } from "../Register/styles";
import simple_logo from "../../assets/simple_logo.png";
import { authenticateUser } from "../../services/api";
import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState({ text: "", type: "" });
  const navigate = useNavigate();

  const handleAuthentication = async () => {
    const result = await authenticateUser(email, password);

    switch (result.error) {
      case true:
        setMessage({
          text: result.message,
          type: "error",
        });
        break;
      case false:
        userLogin(result.token);
        break;
      default:
        console.error("Unexpected error in authentication result.");
    }
  };

  function userLogin(token) {
    localStorage.setItem("access_token", token);

    window.location.href = "/";
  }

  return (
    <Container>
      <SideBanner />
      <LoginWrapper>
        <img src={simple_logo} className="logo" />
        <h1>Bem vindo de volta! 👋</h1>
        <p>Entre agora para começar a pedir no nosso cardapio.</p>

        <Form>
          {message.text && (
            <h4>
              <MdOutlineError size={20} />
              {message.text}
            </h4>
          )}

          <Input>
            <FormInput
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="form-label">Email</label>
          </Input>

          <Input>
            <FormInput
              placeholder="Sua Senha"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="form-label">Sua Senha</label>
          </Input>

          <RegisterBtn onClick={() => handleAuthentication()}>
            Entrar
          </RegisterBtn>
          <sub>
            Não tem uma conta ainda?{" "}
            <span onClick={() => navigate("/register")}>Crie uma agora!</span>
          </sub>
        </Form>
      </LoginWrapper>
    </Container>
  );
}

export default Login;

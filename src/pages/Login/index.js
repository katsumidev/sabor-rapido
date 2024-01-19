import React, { useEffect, useState } from "react";
import { Container, LoginWrapper } from "./styles";
import { MdOutlineError } from "../../styles/Icons";
import {
  Form,
  FormInput,
  Input,
  RegisterBtn,
  SideBanner,
} from "../Register/styles";
import simple_logo from "../../assets/simple_logo.png";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState({ text: "", type: "" });

  const authenticateUser = () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/auth/authenticate`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(async (res) => {
      let data = await res.json();

      switch (res.status) {
        case 404:
          setMessage({
            text: "Senha Incorreta ou Usuário não Cadastrado.",
            type: "error",
          });
          break;
        case 403:
          setMessage({
            text: "Senha Incorreta ou Usuário não Cadastrado.",
            type: "error",
          });
          break;
        case 200:
          if (data.token) {
            userLogin(data.token);
          }
          break;
      }
    });
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
        <h1>Entre na sua conta</h1>
        <p>E comece a pedir em mais de 50.000 restaurantes!</p>

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

          <RegisterBtn onClick={() => authenticateUser()}>Entrar</RegisterBtn>
        </Form>
      </LoginWrapper>
    </Container>
  );
}

export default Login;

import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// rota que provem contexto de login para o app, passando as informações do usario e checando os tokens
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const url = process.env.REACT_APP_SERVER_URL;
  const [userData, setUserData] = useState();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        try {
          const response = await axios.get(`${url}/auth/consult`, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          });

          switch (response.status) {
            case 200:
              setUserData(response.data);
            default:
              throw new Error(`Unexpected status code: ${response.status}`);
          }
        } catch (error) {
          console.error("Error while calling getInfo API ", error);
          throw error;
        }
      } catch (err) {
        console.log(err);
      }
    };

    checkAuthentication();
  }, []);

  const handleLogOut = () => {

  }

  const handleAuthentication = async (email, password) => {
    try {
      const response = await axios.post(
        `${url}/auth/authenticate`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      const { status, data } = response;

      if (status === 200) {
        localStorage.setItem("access_token", data.token);
        window.location.href = "/";
      } else {
        console.error(`Unexpected status code: ${status}`);
        return {
          error: true,
          message: `Houve um erro ao iniciar a sessão: ${status}`,
        };
      }
    } catch (error) {
      console.error("Error while authenticating user: ", error);

      if (error.response) {
        const { status } = error.response;
        return {
          error: true,
          message:
            status === 404 || status === 403
              ? "Senha Incorreta ou Usuário não Cadastrado."
              : `Houve um erro ao iniciar a sessão: ${status}`,
        };
      } else {
        return {
          error: true,
          message: "Erro durante a autenticação do usuário.",
        };
      }
    }
  };

  async function createUserAccount(registerData, file) {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", registerData.name);
      formData.append("email", registerData.email);
      formData.append("password", registerData.password);
      formData.append("cep", registerData.cep.replace(/\D/g, ""));
      formData.append("street", registerData.street);
      formData.append("neighborhood", registerData.neighborhood);
      formData.append("complement", registerData.complement);
      formData.append("uf", registerData.uf);
      formData.append("number", registerData.number);

      const response = await axios.post(`${url}/auth/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      });

      if (response.status === 200 && response.data.token) {
        localStorage.setItem("access_token", response.data.token);
        return true;
      }
    } catch (error) {
      return false;
    }
  }

  const contextData = {
    userData,
    handleAuthentication,
    createUserAccount,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

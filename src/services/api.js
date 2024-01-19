import axios from "axios";
const url = process.env.REACT_APP_SERVER_URL;

// User Info Requests
export const consultCEP = async (cepNumber) => {
  try {
    const response = await axios.get(
      `http://viacep.com.br/ws/${cepNumber}/json/`
    );

    switch (response.status) {
      case 200:
        return response.data;
      default:
        throw new Error(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    console.error("Error while calling getInfo API ", error);
    throw error;
  }
};

// Restaurants Requests
export const consultRestaurants = async () => {
  try {
    const response = await axios.get(`${url}/restaurants/consult`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });

    switch (response.status) {
      case 200:
        return response.data;
      default:
        throw new Error(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    console.error("Error while calling getInfo API ", error);
    throw error;
  }
};

// Authentication Requests.
export const consultAuth = async () => {
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
        return response.data;
      default:
        throw new Error(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    console.error("Error while calling getInfo API ", error);
    throw error;
  }
};

export const authenticateUser = async (email, password) => {
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
      return data.token ? { error: false, token: data.token } : {};
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

import axios from "axios";
const url = process.env.REACT_APP_SERVER_URL;
// este arquivo armazena grande parte das funções responsaveis pelas calls na api do backend, fazendo a tarefa de processar os erros e informações

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
export const consultRestaurants = async (id) => {
  try {
    const response = await axios.get(
      `${url}${id ? `/restaurants/consult?id=${id}` : "/restaurants/consult"}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
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

export const searchForParameter = async (parameter) => {
  try {
    const response = await axios.get(
      `${url}/restaurants/search?term=${parameter}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
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
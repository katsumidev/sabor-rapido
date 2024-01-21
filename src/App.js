import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "./pages/Main";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Hub from "./pages/Hub";
import { consultAuth } from "./services/api";
import RestaurantPage from "./pages/RestaurantPage";
import SearchResult from "./pages/Hub/SearchResult";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // faz a verificação de login do usuario, se o usuario estiver autenticado, vai renderizar o hub como pagina principal, se nao, renderiza a landing page (main)
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await consultAuth();

        if (response) {
          setIsAuthenticated(true);
        }
      } catch (err) {
        console.log(err);
      }
    };

    checkAuthentication();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={isAuthenticated ? <Hub /> : <Main />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/restaurant/:id" element={<RestaurantPage />} />
      </Routes>
      <Footer />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;

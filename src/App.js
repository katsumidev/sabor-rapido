import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "./pages/Main";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Hub from "./pages/Hub";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkIfUserIsLogged = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/auth/consult`, {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });

        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };

    checkIfUserIsLogged();
  }, []); 

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Hub /> : <Main />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;

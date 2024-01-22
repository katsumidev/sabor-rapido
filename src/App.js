import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import RestaurantPage from "./pages/RestaurantPage";
import SearchResult from "./pages/Hub/SearchResult";
import { AuthProvider } from "./utils/AuthProvider";
import PrivateRoute from "./utils/PrivateRoutes";
import MainRoute from "./utils/MainRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MainRoute />} />
          <Route element={<PrivateRoute />}>
            <Route path="/search" element={<SearchResult />} />
            <Route path="/restaurant/:id" element={<RestaurantPage />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
        <GlobalStyles />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

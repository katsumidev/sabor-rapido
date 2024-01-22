import React from "react";
import { useAuth } from "./AuthProvider";
import Hub from "../pages/Hub";
import Main from "../pages/Main";

const MainRoute = ({ element }) => {
  const { userData } = useAuth();

  return userData ? <Hub /> : <Main />;
};

export default MainRoute;

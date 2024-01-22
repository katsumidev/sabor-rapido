import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const PrivateRoute = ({ element }) => {
  const { userData } = useAuth();

  return userData ? <Outlet /> : <h1>Faça login para entrar</h1>;
};

export default PrivateRoute;

import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Loading from "../Loading/Loading";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading />;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default PrivetRoute;

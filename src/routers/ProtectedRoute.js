import React from "react";
import useAuth from "../custom-hooks/useAuth";
import { Navigate } from "react-router-dom";

// Component used to protect certain routes from being accessed by unauthorized users.
const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="../login" />;
};

export default ProtectedRoute;

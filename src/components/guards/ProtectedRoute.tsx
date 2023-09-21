import React from "react";
import { useAppSelector } from "../../hooks/useRedux";
import { Navigate } from "react-router-dom";

interface TProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: TProps) => {
  const { accessToken } = useAppSelector((state) => state.user);
  if (accessToken) {
    return children;
  }
  return <Navigate to={"/sign-in"} replace />;
};

export default ProtectedRoute;

import React from "react";
import { useAppSelector } from "../../hooks/useRedux";
import { Navigate } from "react-router-dom";

interface TProps {
  children: React.ReactNode;
}

const PublicRoute = ({ children }: TProps) => {
  const { accessToken } = useAppSelector((state) => state.user);

  if (!accessToken) {
    return children;
  }
  return <Navigate to={"/"} replace />;
};

export default PublicRoute;

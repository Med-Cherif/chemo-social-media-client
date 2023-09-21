import React from "react";

interface TProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: TProps) => {
  return <>{children}</>;
};

export default PageWrapper;

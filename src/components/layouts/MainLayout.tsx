import React from "react";
import Navbar from "../core/Navbar";

type IMainLayout = {
  children: React.ReactNode;
};

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;

import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

const Homepage: React.FC = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
};

export default Homepage;

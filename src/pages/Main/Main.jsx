import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./main.css";
const Main = () => {
  return (
    <div className="background-img">
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;

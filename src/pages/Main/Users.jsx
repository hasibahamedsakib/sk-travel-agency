import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Users = () => {
  return (
    <div className="bg-[#f9fafb]">
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default Users;

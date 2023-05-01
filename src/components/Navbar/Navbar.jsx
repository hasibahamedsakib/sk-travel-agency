import React, { useContext } from "react";
import { FaSearch, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import logo from "../../assets/travel-logo.png";
const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <nav className="container py-7 flex justify-between items-center">
      <Link to="/">
        <div className="logo flex space-x-2 cursor-pointer  w-48">
          <img src={logo} className="w-16" alt="" />
          <h2 className="text-center ">
            <h4 className="text-3xl font-bold">SK</h4>
            <h4 className=" font-bold">Travel Agency</h4>
          </h2>
        </div>
      </Link>

      <div className=" w-96 flex items-center space-x-4 border border-slate-50 rounded-md px-3 py-2 bg">
        <FaSearch className="w-8 h-5" />
        <input
          className="bg-transparent border-none focus:outline-none w-72  placeholder:text-white"
          type="text"
          placeholder="Search your Destination..."
        />
      </div>
      <div className="space-x-16 ">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/news"
        >
          News
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/destination"
        >
          Destination
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/blog"
        >
          Blog
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/contact"
        >
          Contact
        </NavLink>
      </div>

      <span>
        {user && user ? (
          <span className="flex space-x-2 items-center">
            <Link>{<FaUserCircle className={`w-6 h-6 `} />}</Link>
            <p>{user?.displayName}</p>
            <FaSignOutAlt
              onClick={() => logoutUser()}
              className="w-6 h-6 cursor-pointer"
            />
          </span>
        ) : (
          <Link to="/login">
            <button className="btn ">Login</button>
          </Link>
        )}
      </span>
    </nav>
  );
};

export default Navbar;

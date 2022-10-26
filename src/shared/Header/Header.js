import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../logo.svg";
const Header = ({ handleDarkmode, mode }) => {
  let location = useLocation();
  let currentLocation = location.pathname;
  return (
    <nav
      className={`min-h-[70px] ${
        currentLocation === "/" ? "bg-transparent -mb-[120px]" : "bg-gray-900"
      }`}
    >
      <div className="navbar bg-base-100 container ">
        <div className="navbar-start z-50">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3  shadow bg-white rounded-box w-52 z-50"
            >
              <li className="hover:bg-theme hover:text-white bg-white">
                <NavLink to="/courses">Courses</NavLink>
              </li>

              <li className="hover:bg-theme hover:text-white bg-white">
                <NavLink to="/">FAQ</NavLink>
              </li>
              <li className="hover:bg-theme hover:text-white bg-white">
                <NavLink to="/">Blog</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="flex items-center  normal-case text-xl">
            <img src={logo} className="h-16 -ml-6" alt="active learning" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li className="text-white font-medium uppercase text-sm">
              <NavLink to="/courses">Courses</NavLink>
            </li>

            <li className="text-white font-medium uppercase text-sm">
              <NavLink to="/">FAQ</NavLink>
            </li>
            <li className="text-white font-medium uppercase text-sm">
              <NavLink to="/">Blog</NavLink>
            </li>
            <li>
              <button onClick={handleDarkmode}>
                {" "}
                {mode ? (
                  <FaSun className="text-white" />
                ) : (
                  <FaMoon className="text-white" />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

import { NavLink } from "react-router-dom";
import { HiAcademicCap } from "react-icons/hi";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme(e.target.value);
    } else {
      setTheme("cupcake");
    }
  };

  const links = () => (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/teacher_info">Teachers info</NavLink>
      </li>
      <li>
        <NavLink to="/about">About us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact us</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            {links()}
          </ul>
        </div>
        <div className="flex">
          <HiAcademicCap className="mt-4" />
          <NavLink to="/" className="btn btn-ghost mr-4 text-2xl font-extrabold">
            TuitionHub
          </NavLink>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links()}</ul>
      </div>
      <div className="navbar-end">
        <input
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller"
          onChange={handleToggle}
          aria-label="Synthwave Theme"
        />
      </div>
    </div>
  );
};

export default Header;

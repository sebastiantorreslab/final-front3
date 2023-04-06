import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to="/dentists">
        <button>Dentists Professionals</button>
      </NavLink>
      <NavLink to="/dentist/:id">
        <button>Search dentist</button>
      </NavLink>
      <NavLink to="/contact">
        <button>Contact us</button>
      </NavLink>
      <NavLink to="/favs">
        <button>My favorites</button>
      </NavLink>
      <button>Mode</button>
      <Outlet />
    </div>
  );
};

import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";

export const NavBar = () => {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <div>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to="/dentists">
        <button>Dentists Professionals</button>
      </NavLink>
      <NavLink to="/contact">
        <button>Contact us</button>
      </NavLink>
      <NavLink to="/favs">
        <button>My favorites</button>
      </NavLink>
      <button onClick={{type:"SWITCH_MODE"}}>Mode</button>
      <Outlet />
    </div>
  );
};

import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import { NavBar } from "./NavBar";

export const NavBarContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);

  return <NavBar />;
};

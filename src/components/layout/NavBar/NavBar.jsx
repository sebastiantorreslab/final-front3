import { NavLink, Outlet } from "react-router-dom";
import "./NavBar.css";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

export const NavBar = ({ dispatch }) => {
  const { state } = useContext(GlobalContext);
  return (
    <div className={state.isDark ? "app-light" : "app-dark"}>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to="/dentists">
        <button>Dentists Professionals</button>
      </NavLink>
      <NavLink to="/favs">
        <button>My favorites</button>
      </NavLink>
      <NavLink to="/contact">
        <button>Contact us</button>
      </NavLink>
      <button
        style={{ color: state.isDark ? "black" : "#90EE90" }}
        onClick={() => dispatch({ type: "SWITCH_MODE" })}
      >
        {state.isDark ? "dark" : "light"}
      </button>
      <Outlet />
    </div>
  );
};

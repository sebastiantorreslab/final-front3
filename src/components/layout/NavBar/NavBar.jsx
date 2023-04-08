import { NavLink, Outlet } from "react-router-dom";

export const NavBar = ({ dispatch }) => {
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
      <button onClick={() => dispatch({ type: "SWITCH_MODE" })}>Mode</button>
      <Outlet />
    </div>
  );
};

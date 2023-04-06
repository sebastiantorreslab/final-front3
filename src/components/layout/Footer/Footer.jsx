import React from "react";
import { Outlet } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <Outlet />
      <div>
        <h3>DENTIST HOUSE</h3>
        <a href="#">Instagram</a>
        <a href="#">Email</a>
        <a href="#">Facebook</a>
        <a href="#">Linkedin</a>
      </div>
    </div>
  );
};

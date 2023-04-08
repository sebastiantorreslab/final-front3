import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div>
        <br />
        <img
          style={{ width: "220px", height: "140px", borderRadius: "10px" }}
          src="https://i.fbcd.co/products/resized/resized-750-500/512b3adb8620ee8be9cf6ba7d49da37427b826ff56eeb5ea56fb98b8ccbd9b24.jpg"
          alt="dt"
        ></img>
        <p>Welcome to Dentist House</p>
        <label htmlFor="">
          Start looking here
          <Link to="/dentists">
            <button>Start</button>
          </Link>
        </label>
      </div>
    </div>
  );
};

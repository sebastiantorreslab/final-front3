import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { Link } from "react-router-dom";

export const Dentist = () => {
 

  return (
    <div>
      <Link to="/dentist/:id">
        <button>Dentist detail</button>
      </Link>
      <Link to="/favs">
        <button>Favorite</button>
      </Link>
      DentistId
    </div>
  );
};

import { Link } from "react-router-dom";
import "./Favs.css";

export const Favs = ({ favs, dispatch }) => {
  return (
    <div className="container">
      {favs.map((fav) => {
        return (
          <div className="dentist-favs" key={fav.id}>
            <br />
            <p>Doctor: {fav.name}</p>
            <img
              style={{ width: "220px", height: "140px", borderRadius: "10px" }}
              src="https://i.fbcd.co/products/resized/resized-750-500/512b3adb8620ee8be9cf6ba7d49da37427b826ff56eeb5ea56fb98b8ccbd9b24.jpg"
              alt="dt"
            ></img>
            <p>Email: {fav.email}</p>
            <Link to={`/dentist/${fav.id}`}>
              <button>Details</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

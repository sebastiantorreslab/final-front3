import { Link } from "react-router-dom";
import "./Dentist.css";

export const Dentist = ({ state, dispatch }) => {
  return (
    <div className="container">
      {state.users.map((dentist) => {
        return (
          <div className="dentist-card" key={dentist.id}>
            <br />
            <p>Doctor: {dentist.name}</p>
            <img
              style={{ width: "220px", height: "140px", borderRadius: "10px" }}
              src="https://i.fbcd.co/products/resized/resized-750-500/512b3adb8620ee8be9cf6ba7d49da37427b826ff56eeb5ea56fb98b8ccbd9b24.jpg"
              alt="dt"
            ></img>
            <p>Email: {dentist.email}</p>
            <Link to={`/dentist/${dentist.id}`}>
              <button>Details</button>
            </Link>
            <button
              style={{
                backgroundColor: state.favs.some(
                  (element) => element.id === dentist.id
                )
                  ? "#00b57f"
                  : "", 
              }}
              onClick={() => dispatch({ type: "ADD_FAV", payload: dentist })}
            >
              Favorite
            </button>
          </div>
        );
      })}
    </div>
  );
};

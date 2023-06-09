import { Link } from "react-router-dom";

export const DentistDetail = ({ dentist }) => {
  return (
    <div>
      <div className="dentist-detail">
        <br />
        <p>Doctor: {dentist.name}</p>
        <img
          style={{ width: "220px", height: "140px", borderRadius: "10px" }}
          src="https://i.fbcd.co/products/resized/resized-750-500/512b3adb8620ee8be9cf6ba7d49da37427b826ff56eeb5ea56fb98b8ccbd9b24.jpg"
          alt="dt"
        ></img>
        <p>Email:{dentist.email}</p>
        <p>Phone:{dentist.phone}</p>
        <p>Website:{dentist.website}</p>
        <Link to="/dentists">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
};

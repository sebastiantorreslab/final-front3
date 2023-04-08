import { useEffect, useState } from "react";
import "./Contact.css";

export const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const [msg, setMsg] = useState("");
  const [isChange, setIsChange] = useState(false);

  const handleChange = (e, propiedad) => {
    setIsChange(false);
    setData({ ...data, [propiedad]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let nameIsValid = data.name.length > 5;
    let emailISValid = data.email.includes("@");

    if (!nameIsValid || !emailISValid) {
      setIsChange(true);
      if (!nameIsValid && !emailISValid) {
        setMsg("Please check your information, name and email");
      } else if (!nameIsValid) {
        setMsg("The name must have at least 5 characters");
      } else if (!emailISValid) {
        setMsg(
          "The email must be recorded in the correct in the format email@email.com"
        );
      }
    } else {
      setIsChange(true);
      setMsg(`Thank you ${data.name}, we will contact you by email soon.`);
    }
  };

  return (
    <div>
      <br />
      <img
        style={{ width: "220px", height: "140px", borderRadius: "10px" }}
        src="https://i.fbcd.co/products/resized/resized-750-500/512b3adb8620ee8be9cf6ba7d49da37427b826ff56eeb5ea56fb98b8ccbd9b24.jpg"
        alt="dt"
      ></img>

      <form onSubmit={handleSubmit}>
        <p>Please register the following contact information</p>
        <div style={{ paddingBottom: "10px" }}>
          <label htmlFor="">
            name:{" "}
            <input onChange={(e) => handleChange(e, "name")} type="text" />
          </label>
          <br />

          <label htmlFor="">
            email:{" "}
            <input onChange={(e) => handleChange(e, "email")} type="text" />
          </label>
        </div>
        {isChange && <p style={{paddingBottom:"10px"}}>{msg}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

import { useContext } from "react";
import { Dentist } from "./Dentist";
import { GlobalContext } from "../../../context/GlobalContext";

export const DentistContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);
  console.log(state);

  return <Dentist />;
};

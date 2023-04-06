import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";


export const DentistContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);
  console.log(state);

  return <div>DentistId</div>;
};

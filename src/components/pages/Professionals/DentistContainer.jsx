import { useContext, useEffect, useState } from "react";
import { Dentist } from "./Dentist";
import { getDentist } from "../../../services/professionals";
import { GlobalContext } from "../../../context/GlobalContext";

export const DentistContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    console.log("ejecución dentistContainer");
    const professionals = getDentist();
    professionals
      .then((res) => dispatch({ type: "GET_DENTIST", payload: res.data }))
      .catch((err) => console.log(err));
  }, []);

  return <div><Dentist state={state} dispatch={dispatch} /></div>;
};

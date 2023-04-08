import React from "react";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getDentistById } from "../../../services/professionals";
import { GlobalContext } from "../../../context/GlobalContext";
import { DentistDetail } from "./DentistDetail";

export const DentistDetailContainer = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    console.log("ejecución Detail");
    const dentist = getDentistById(id);
    dentist.then((res) =>
      dispatch({ type: "GET_DENTIST_ID", payload: res.data })
    );
  }, []);

  return (
    <div>
      <DentistDetail dentist={state.user} />;
    </div>
  );
};

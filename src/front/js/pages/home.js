import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CardPlanet } from "../component/cardPlanet.jsx";
import { CardPeople } from "../component/cardPeople.jsx";

export const Home = () => {
  return (
    <>
      <CardPlanet /> 
      <br></br>
      <CardPeople/>
    </>
  );
};

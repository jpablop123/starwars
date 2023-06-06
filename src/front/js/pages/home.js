import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CardPlanet } from "../component/cardPlanet.jsx";
import { CardPeople } from "../component/cardPeople.jsx";
import { CardVehicle } from "../component/cardVehicle.jsx";


export const Home = () => {
  return (
    <>
    <h1 className="text-center">List of Planets</h1>
      <CardPlanet /> 
      <br></br>
      <h1 className="text-center">List of People</h1>
      <CardPeople/>
      <br></br>
      <h1 className="text-center">List of Vehicles</h1>
      <CardVehicle/>
      
    </>
  );
};

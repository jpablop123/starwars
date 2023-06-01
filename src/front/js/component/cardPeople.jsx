import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

 export const CardPeople = () => {
  const { store, actions } = useContext(Context);


  const addFavorite = (uid, name) => {
    
    actions.addFavorite(uid, name);
  };

  const removeFavorite = (favoriteIndex) => {
    
    actions.removeFavorite(favoriteIndex);
  };


console.log(store.people)
  return (
    <div className="container">
      <div className="d-flex flex-row flex-nowrap" style={{ overflowX: "scroll" }}>
        {store.people.map((item, index) => {
          return (
            <div className="col mx-1 px-1" key={index}>
              <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">An item</li>
                  <li className="list-group-item">A second item</li>
                  <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body">
                  <Link to={`/people/${item.uid}`} className="card-link">
                    Ver Detalle
                  </Link>
                  <button type="button" onClick={() => addFavorite(index, item.name)}>
                    Agregar a favoritos
                  </button>
           
                  
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

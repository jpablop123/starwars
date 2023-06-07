import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

 export const CardPlanet = () => {
  const { store, actions } = useContext(Context);

  const addFavorite = (uid, name) => {
    
    actions.addFavorite(uid, name);
  };

  const removeFavorite = (favoriteIndex) => {
    
    actions.removeFavorite(favoriteIndex);
  };

  return (
    <div className="container">
      <div className="d-flex flex-row flex-nowrap" style={{ overflowX: "scroll" }}>
      {store.planet && store.planet.length>0 && store.planet.map((item, index) => {
          return (
            <div className="col mx-1 px-1" key={index}>
              <div className="card" style={{ width: "18rem" }}>
              <img
                                                src={`https://starwars-visualguide.com/assets/img/planets/${index+2}.jpg`}
                                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg' }}
                                                className="card-img-top"
                                                alt="..."
                                            />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><h5>Population:</h5><h6>{item.population}</h6></li>
                  <li className="list-group-item"><h5>Surface Water:</h5><h6>{item.surface_water}</h6></li>
                  <li className="list-group-item"><h5>climate:</h5><h6>{item.climate}</h6></li>
                </ul>
                <div className="card-body">
                  <Link to={`/planets/${index+1}`} className="card-link">
                    Ver Detalle
                  </Link>
                  <br></br>
                  <br></br>
                  <button type="button" onClick={() => addFavorite(index, item.name)}>
                  <i className="fas fa-thumbs-up"> like</i>
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

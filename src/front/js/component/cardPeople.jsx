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
        {store.people && store.people.length>0 && store.people.map((item, index) => {
          return (
            <div className="col mx-1 px-1" key={index}>
              <div className="card" style={{ width: "18rem" }}>
              <img
                                                src={`https://starwars-visualguide.com/assets/img/characters/${index+1}.jpg`}
                                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg' }}
                                                className="card-img-top"
                                                alt="..."
                                            />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    [Some quick example text to build on the card title and make up the bulk of the card's content.]
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><h5>Hair Color:</h5><h6>{item.hair_color}</h6></li>
                  <li className="list-group-item"><h5>Gender:</h5><h6>{item.gender}</h6></li>
                  <li className="list-group-item"><h5>Height:</h5><h6>{item.height}</h6></li>
                </ul>
                <div className="card-body">
                  <Link to={`/people/${index+1}`} className="card-link">
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

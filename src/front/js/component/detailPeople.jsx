import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";

export const DetailPeople = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [people, setPeople] = useState({});

  useEffect(() => {
    const cargaDatos = async () => {
      let { respuestaJson, response } = await actions.useSwapi(`/people/${params.uid}`);
      if (response.ok) {
        setPeople(respuestaJson);
      }
    };
    cargaDatos();
  }, [params.uid]);

  return (
    <>
      <div className="container">
       
        <div className="d-flex justify-content-center mt-3">
          <div className="card mb-3" style={{ width: "75%" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
                  }}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h1 className="card-title text-center">{people.name}</h1>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Name: {people.name} <br />
                      Birth Year: {people.birth_year} <br />
                      Gender: {people.gender} <br />
                      Height: {people.height} <br />
                      Eyes Color: {people.eye_color} <br />
                      Skin: {people.skin_color}
                    </small>
                  </p>
                  <Link to="/">
          <button type="button" className="btn btn-primary mt-3">
            Go Back
          </button>
        </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
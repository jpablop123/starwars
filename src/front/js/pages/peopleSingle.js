import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Peoplesingle = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		console.log("Se abre el componente Peoplesingle")
		console.log(params.uid)
		actions.getSinglePeople(params.uid)

		return () => {
			console.log("Se cerró el componente PeopleSingle")
		}
	}, [])
	return (
		<div className="jumbotron">
			<h1 className="display-4">El nombre del People es: {store.people.properties ? store.people.properties.name : "no ha cargado"} </h1>
			<img src={rigoImageUrl} />
			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

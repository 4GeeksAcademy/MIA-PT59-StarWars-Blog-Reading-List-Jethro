import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const PlanetDescription = () => {
	const { store, actions } = useContext(Context);
    let {theid}= useParams()
    let id= theid.replace(/^0+/, '')
	
    const [planet, setPlanet] = useState([]);
  useEffect(() => {
     async function getPlanet() {
    let response = await fetch("https://swapi.dev/api/planets/"+id);
    let data = await response.json();
    setPlanet(data);
  }
    getPlanet();
  }, []);


	return (
		<div className="container">
			<div className="details">
                {planet.name}
            </div>
			<div className="details">
                {planet.gravity}
            </div>
            <div className="details">
                {planet.climate}
            </div>
            <div className="details">
                {planet.population}
            </div>
            <div className="details">
                {planet.terrain}
            </div>
		</div>
	);
};

import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const StarshipDescription = () => {
	const { store, actions } = useContext(Context);
    let {theid}= useParams()
    let id= theid.replace(/^0+/, '')
    let newId;
	
    const [starship, setStarship] = useState([]);

    function findNewId(oldID) {
        const idMap = {
          1: 2,
          2: 3,
          3: 5,
          4: 9,
          5: 11,
          6: 12,
          7: 13,
          8: 15,
          9: 17
        };
        
        newId = idMap[oldID];
        return newId;
      }
      findNewId(id)

  useEffect(() => {
     async function getStarship() {
    let response = await fetch("https://swapi.dev/api/starships/"+newId);
    let data = await response.json();
    setStarship(data);
  }
    getStarship();
  }, []);



	return (
		<div className="container">
			<div className="details">
                {starship.name}
            </div>
			<div className="details">
                {starship.model}
            </div>
            <div className="details">
                {starship.length}
            </div>
            <div className="details">
                {starship.cost_in_credits}
            </div>
            <div className="details">
                {starship.manufacturer}
            </div>
		</div>
	);
};

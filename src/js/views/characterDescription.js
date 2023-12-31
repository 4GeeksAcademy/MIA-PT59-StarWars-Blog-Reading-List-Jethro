import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/characterDescription.css";

import { Context } from "../store/appContext";

export const CharcaterDescription = () => {
	const { store, actions } = useContext(Context);
    let {theid}= useParams()
    let id= theid.replace(/^0+/, '')
	
    const [character, setCharacter] = useState([]);
  useEffect(() => {
     async function getCharacter() {
    let response = await fetch("https://swapi.dev/api/people/"+id);
    let data = await response.json();
    setCharacter(data);
  }
    getCharacter();
  }, []);


	return (
		<div className="container">
			<div className="details">
                {character.name}
            </div>
			<div className="details">
                {character.height}
            </div>
            <div className="details">
                {character.hair_color}
            </div>
            <div className="details">
                {character.eye}
            </div>
            <div className="details">
                {character.birth_year}
            </div>
		</div>
	);
};

import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Characters } from "../component/characters";
import { Planets } from "../component/planet";
import { Starships } from "../component/starship";

export const Home = () => (
	<><div className="head-characters">
		<h1>Characters</h1>
	</div>
	<div className="text-center mt-5">

			<Characters />
			
		</div>
		
		<div className="head-planet">
		<h1>Planet</h1>
	</div>
	<div className="text-planet mt-5">

			<Planets />
		</div>
		
		<div className="head-planet">
		<h1>Starships</h1>
	</div>
	<div className="text-planet mt-5">

			<Starships />
		</div>
		</>
	
		
);

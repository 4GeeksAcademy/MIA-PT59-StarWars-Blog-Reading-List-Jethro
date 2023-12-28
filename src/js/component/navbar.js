import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Navbar = () => {
	const {store,actions}= useContext(Context)
	const [favorites,setFavorites]= useState([])
	useEffect(()=>{
		setFavorites(store.favorites)
	},[])
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" width="100px"></img></span>
			</Link>
		<div className="ml-auto">
			<div className="listElement">
				<div className="btn-group">
  					<button type="button" className="btn btn-primary">Favorites</button>
  					<button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
    					<span className="caret"></span>
  					</button>

  					<div className="dropdown-menu">
						{favorites?.map((item,index)=>(
							<span className="dropdown-item" key={index}> {item}</span>
						))}
    					    					
  					</div>
				</div>

			</div>
			</div>
		</nav>
	);
};

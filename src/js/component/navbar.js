import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" width="100px"></img></span>
			</Link>
		<div className="ml-auto">
			<div className="listElement">
				<div class="btn-group">
  					<button type="button" class="btn btn-primary">Favorites</button>
  					<button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
    					<span class="caret"></span>
  					</button>
  					<div class="dropdown-menu">
    					<a class="dropdown-item" href="#">...</a>
    					<a class="dropdown-item" href="#">....</a>
  					</div>
				</div>

			</div>
			</div>
		</nav>
	);
};

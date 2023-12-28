import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    setFavorites(store.favorites);
  }, [store.favorites]);
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png"
            width="100px"
          ></img>
        </span>
      </Link>
      <div className="ml-auto">
        <div className="listElement">
          <div className="btn-group">
            <div class="dropdown">
              <button
                class="btn btn-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites
              </button>
              <ul class="dropdown-menu">
                {favorites?.map((item,index)=>(
                    <li className="dropdown-item" key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
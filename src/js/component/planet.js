import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useActionData } from "react-router-dom";
import "../../styles/planet.css";

export const Planets = (props) => {
  const [planets, setPlanets] = useState([]);
  const {store,actions} = useContext(Context) 
  const [liked, setLiked] = useState(false)

  useEffect(() => {
     async function getPlanets() {
    let response = await fetch("https://swapi.dev/api/planets");
    let data = await response.json();
    setPlanets(data.results);
  }
    getPlanets();
  }, []);

    const handleClick = (e,item)=>{
      e.preventDefault()
      if(liked === true){
          actions.deleteFavorites(item)
          setLiked(false)
      }
      else{
        actions.addFavorites(item)
        setLiked(true)
      }

      
    }

  return (
    <div className="container d-flex overflow-auto col-10">
      {planets?.map((planet,index) => (
        <div className="card" key={index} style={{ minWidth: "200px" }}>
          <img
            className="card-img-top"
            src="https://img.freepik.com/free-photo/happy-african-american-professional-manager-smiling-looking-camera-headshot-portrait_1163-5134.jpg"
            alt="Card image cap"
            width = "300px"
          />
          <div className="card-body">
            <h5 className="card-title">{planet.name}</h5>
            <Link to={"/planetDescription/"+parseInt(index)+1} className="btn btn-primary">
              Learn more !
            </Link>
            <button
              onClick={(e) => handleClick(e,planet.name)}
              className={liked ? "fas fa-heart" : "far fa-heart"}
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
              }}
            ></button>
          </div>
        </div>
      ))}
    </div>
  );
};
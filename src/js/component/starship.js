import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useActionData } from "react-router-dom";
import "../../styles/planet.css";

export const Starships = (props) => {
  const [starships, setStarships] = useState([]);
  const {store,actions} = useContext(Context) 
  const [liked, setLiked] = useState(false)

  useEffect(() => {
     async function getStarships() {
    let response = await fetch("https://swapi.dev/api/starships/");
    let data = await response.json();
    setStarships(data.results);
  }
    getStarships();
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
      {starships?.map((starship,index) => (
        <div className="card" key={index} style={{ minWidth: "200px" }}>
          <img
            className="card-img-top"
            src="https://img.freepik.com/free-photo/happy-african-american-professional-manager-smiling-looking-camera-headshot-portrait_1163-5134.jpg"
            alt="Card image cap"
            width = "300px"
          />
          <div className="card-body">
            <h5 className="card-title">{starship.name}</h5>
            <Link to={"/starshipDescription/"+parseInt(index)+1} className="btn btn-primary">
              Learn more !
            </Link>
            <button
              onClick={(e) => handleClick(e,starship.name)}
              className="far fa-heart"
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
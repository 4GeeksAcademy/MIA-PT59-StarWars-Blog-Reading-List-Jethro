import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useActionData } from "react-router-dom";
import "../../styles/characters.css";

export const Characters = (props) => {
  const [characters, setCharacters] = useState([]);
  const {store,actions} = useContext(Context) 
  const [liked, setLiked] = useState(false)

  useEffect(() => {
     async function getCharacters() {
    let response = await fetch("https://swapi.dev/api/people");
    let data = await response.json();
    setCharacters(data.results);
  }
    getCharacters();
  }, []);

    const handleClick = (e,person)=>{
      e.preventDefault()
      if(liked === true){
          actions.deleteFavorites(person)
          setLiked(false)
      }
      else{
        actions.addFavorites(person)
        setLiked(true)
      }

      
    }

  return (
    <div className="container d-flex overflow-auto col-10">
      {characters?.map((character,index) => (
        <div className="card" key={index} style={{ minWidth: "200px" }}>
          <img
            className="card-img-top"
            src="https://img.freepik.com/free-photo/happy-african-american-professional-manager-smiling-looking-camera-headshot-portrait_1163-5134.jpg"
            alt="Card image cap"
            width = "300px"
          />
          <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <Link to={"/characterDescription/"+parseInt(index)+1} className="btn btn-primary">
              Learn more !
            </Link>
            <button
              onClick={(e) => handleClick(e,character.name)}
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
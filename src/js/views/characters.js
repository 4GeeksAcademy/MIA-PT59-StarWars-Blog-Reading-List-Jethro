import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/characters.css";


export const Characters = props => {
    const [characters, setCharacters]= useState([])
    useEffect(()=>{
        async function getCharacters(){
            let response = await fetch("https://www.swapi.tech/api/people")
            let data= response.json()
            console.log(data.results.properties)
            setCharacters(data.results)
        }
        getCharacters()
    },[])
    console.log(characters);

	return (
	
   <div className="container">
    {characters?.map((character)=>(
            <div className="card" style={{"width": "18rem"}}>
        
            <img className="card-img-top" src="https://img.freepik.com/free-photo/happy-african-american-professional-manager-smiling-looking-camera-headshot-portrait_1163-5134.jpg" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                        
                            <a href="#" className="btn btn-primary">Learn more !</a>
                </div>
        </div>
    ))}       

    
</div>
    );
};

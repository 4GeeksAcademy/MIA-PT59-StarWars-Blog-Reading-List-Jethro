import React, {useState, useEffect, useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import {Footer} from "../component/footer";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/planet.css";


export const Planet = props => {
	return (
		
    <div className="card" style={{"width": "18rem"}}>
        
        <img className="card-img-top" src="https://imageio.forbes.com/specials-images/imageserve/6109550f1aa8564670194ad4/Close-up-smiling-businesswoman-holding-computer-tablet--looking-to-side/960x0.jpg?format=jpg&width=960" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Leia Organa</h5>
                    <p className="card-text">
                        Gender     :    female <br/>
                        Hair-color :    Black <br/>
                        Eye-color  :    blue
                    </p>
                        <a href="#" className="btn btn-primary">Learn more !</a>
            </div>
    </div>

    );
};

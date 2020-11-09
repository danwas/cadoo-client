import React, { useEffect, useRef, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";

import CurrentRooms from './CurrentRooms';
import PlannedRooms from './PlannedRooms';
import Misc from './Misc';

import "../css/Home.css"; 



function Home() {
    const socketRef = useRef();
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        //socketRef.current = io.connect("/");
    },[]);



    return (
        <div className="Home">
            <div class='column-left'>
            <Carousel>
                {rooms.map(room => (
                        <Carousel.Item>
                            <div class='center'>
                            
                            <img
                            src= {require()}
                            class= 'centerimg'
                            />                            
        
                            </div>
                            
                        </Carousel.Item>
                ))} 
            </Carousel>
            </div>           
            <div class='column-right'>
            <div className="topDiv">
                <CurrentRooms />
            </div>
            <br></br>
            <div className="bottomDiv">
                <PlannedRooms />
            </div>
            </div>
        </div>
    )
}

export default Home;

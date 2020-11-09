import React, { useEffect, useRef, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Carousel } from 'react-bootstrap';

import CurrentRooms from './CurrentRooms';
import PlannedRooms from './PlannedRooms';
import Misc from './Misc';

import "../css/Home.css"; 

const pages = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']

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
            
            </div>           
            <div class='column-right'>
            <div className="topDiv">
            <Carousel>
                {pages.map(page => (
                        <Carousel.Item>
                            <div class='center'>
                            
                            <img
                            src= {require(`../DEL_STANDARD/DEL_STANDARD_0${page}.png`)}
                            class='centerimg'
                            />                            
        
                            </div>
                            
                        </Carousel.Item>
                ))} 
            </Carousel>
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

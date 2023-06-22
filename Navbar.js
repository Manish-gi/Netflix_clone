import React, { useEffect, useState } from "react";
import './Navbar.css';
import download from './download.jpg';

function Navbar(props){

    const [show, handleshow] = useState(false);

    const transitionNavBar = () => {
        if(window.scrollY >100) {
            handleshow(true)
        }else{
            handleshow(false)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar)
        return () => window.removeEventListener('scroll',transitionNavBar);
    }, []);

 return (
    <div className={`nav ${show && 'nav_black'}`}>
        <div className="nav_contents">
            <img 
            className="nav_logo"
            src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png"
            />
            <img
            className="nav_avatar"
            src="https://pngimg.com/uploads/avatar/avatar_PNG9.png"
            />
        </div>
    </div>
 );    
}

export default Navbar
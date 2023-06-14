import React from "react";
import './Physychology.css';
export const  Physychology=() => {
    
    function Physychology(){
    }
    return(
        <div className="navbar">
            <div className="maindiv">
                <img  className="Logo" src="resources/art-illustration.avif"/>
                <div className="home">Home</div>
                <div className="how">How It works</div>
                <div className="Psycho">Psychologists</div>
                <div className="free">Free videos</div>
                <div className="signup">Sign up</div>
                <div className="login">Login</div>
            </div>
            <div className="smily-wowmen">
                <img className ="young" src="resources/young.avif"/>
                <div className="text-img">
                    <h3>We have the best professionals - licensed and verified, who can help you heal!</h3>
                    <button className="but">Get Started</button>
                </div>
            </div>
        </div>
    )
    }
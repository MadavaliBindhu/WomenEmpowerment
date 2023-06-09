import React from "react";
import './Homepage.css';
export const  Homepage=() => {
    
    function Homepage(){
    }
    return(
        <div className="navbar">
            <div className="maindiv">
                    <img  className="Logo" src="resources/empower.jpeg"/>
                    <div className="home">Home</div>
                    <div className="how">How It works</div>
                    <div className="Psycho">Psychologists</div>
                    <div className="free">Free videos</div>
                    <div className="signup">Sign up</div>
                    <div className="login">Login</div>
            </div>
        </div>
    )
}
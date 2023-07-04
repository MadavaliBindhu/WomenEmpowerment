import React from "react";
import './Homepage.css';
export const  Homepage=() => {
    
    function Homepage(){
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
            <div>
                <img className ="banner" src="resources/telecommuting.avif"/>
            </div>
            <div>
                <button className="start">Get started</button>
            </div>
            <div className="change">
                <h1>Igniting strength, inspiring change</h1>
            </div>
            <div className="maincontainer">
                <div className="imgphsy">
                    <img className="img" src="resources/women.jpg"/>
                </div>
                <div className="para">
                    <h3>
                        Counselling Therapy Sessions With<br/>
                         Licensed & Verified Experts
                    </h3>
                    <h4>Highly qualified team of some of the best names in psychology who deliver improved well-being to you.Carefully vetted through a rigorous selection 
                        process. Trained and experienced in all psychotherapy techniques.
                    </h4>
                    <div className="blog">
                        <img className="video" src="resources/video.png"/>
                        <img className="audio" src="resources/audio1.jpeg"/>
                        <img className="video" src="resources/chat.jpeg"/>   
                    </div>
                    <div className="sessions">
                            <div className="vid">Video Session</div>
                            <div className="Aud">Audio Session</div>
                            <div className="live">Livechat Session</div>
                    </div>
                </div>
            </div>
            <div className="help">Specialized Help For Your Mental Health</div>
            <div className="Specialized">
                <button className="Anxiety">Anxiety & Stress</button>
                <button className="Depress">Depression</button>
                <button className="Issues">Relationship Issues</button>
                <button className="OCD">OCD</button>
            </div>
            <div className="Special">
                <button className="Psychosis">Psychosis</button>
                <button className="Grief">Grief & Loss</button>
                <button className="Couple">Couple Therapy</button>
                <button className="LGB">LGBTQIA+</button>
            </div>
            <div className="Spe">
                <button className="Teenage">Teenage Issues</button>
                <button className="Sexual">Grief & Loss</button>
                <button className="Bipolar">Bipolar Disorder</button>
            </div>
            <div>
                <button className="Start">Get started</button>
            </div>
            <div className="works"> How It Works </div>
            <div className="itwork">
                <img className="calandar" src="resources/calandar.jpeg"/>
                <img className="arrow" src="resources/arrow.png"/>
                <img className="person" src="resources/person.png"/>
                <img className="arrow" src="resources/arrow.png"/>
                <img className="message" src="resources/message.png"/>
                <img className="arrow" src="resources/arrow.png"/>
                <img className="clock" src="resources/clock.jpeg"/>
            </div>
            <div className="function">
                <div className="Book">Book A Counselling Plan</div>
                <div className="pick">Counselor & Pick A Time</div>
                <div className="join">Join The Session & Chat <br />Afterwards</div>
                <div className="reschedule">Reschedule Or Change <br />Counselor If Needed</div>
            </div>
            <div className="footer">
                <div className="location">
                    <div className="about">HOME</div>
                    <div>How It works</div>
                    <div>Psychologists</div>
                    <div>Free videos</div>
                    <div>About us</div>
                </div>
                <div className="Location">
                    <div className="loco">LOCATION</div>
                    <div>Andhra</div>
                    <div>Telengana</div>
                    <div>Karnataka</div>
                </div>
                <div className="media">
                    <div className="social">SOCIAL MEDIA</div>
                    <div>
                        <img  className="google" src="resources/goog.png"/>
                    </div>
                    <div>
                        <img className="face" src="resources/facebook.jpeg"/>
                    </div>
                    <div>
                        <img  className="insta" src="resources/insta.jpeg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
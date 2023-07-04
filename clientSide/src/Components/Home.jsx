import React from "react";
import './Home.css';
export const  Home=() => {
    return(
        <div className="navbar">
            <div className="maindiv">
                    <div className="letter">Samyukthaa.com</div>
                    <div className="home">Home</div>
                    <div className="File">File Complaint</div>
                    <div className="consel">Psychology</div>
                    <div className="signup">Sign up</div>
                    <div className="login">Login</div>
            </div>
            <div>
                <img alt="image1" className ="banner" src="resources/gettywomen.jpg"/>
                <div class="text-overlay">
                    <h1>OUR MISSION</h1>
                    <p>An inclusive development of downtrodden, disadvantaged,
                         stigmatized, vulnerable, high-risk sections to lead 
                         productive, safe dignified and sustainable lives.</p>
                </div>
            </div>
            <div className="welcome">
                <div className="come-page">
                    <img alt="image1
" className ="namasthe" src="resources/welcome-hand.png"/>
                    <h2>WELCOME TO </h2><h1>SAMYUKTHAA</h1>
                </div>
                <div className="emergency">
                    <h1>Emergency</h1>
                    <p>If a woman is seeking help due to 
                        domestic <br/>violence in her home, 
                        she can immediately <br/>file a complaint.</p>
                        <h1>Igniting strength, inspiring change</h1>
                        <p>Highly qualified team of some of the best names
                             in psychology who deliver improved well-being 
                             to you.Carefully vetted through a rigorous selection 
                             process. Trained and experienced in all psychotherapy techniques.
                        </p>
                    
                </div>
            </div>
                <div className="works"> How It Works </div>
                <div className="itwork">
                    <img alt="image1
" className="calandar" src="resources/png-transparent-professional.png"/>
                    <img alt="image1
" className="arrow" src="resources/arrow.png"/>
                    <img alt="image1
" className="person" src="resources/ngo.png"/>
                    <img alt="image1
" className="arrow" src="resources/arrow.png"/>
                    <img alt="image1
" className="message" src="resources/login-icon.jpeg"/>
                    <img alt="image1
" className="arrow" src="resources/arrow.png"/>
                    <img alt="image1
" className="clock" src="resources/person.png"/>
                </div>
                <div className="function">
                    <div className="Book">Uploding img/audio/video</div>
                    <div className="pick">Connecting to NGO</div>
                    <div className="join">The process to Login</div>
                    <div className="reschedule">If needed Connect<br/> with Counsellor</div>
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
                <div className="h1">
                        <h1>Get in Touch. Get Involved.</h1>
                </div>
                <div className="footer">
                    <div className="location">
                        <div className="about">HOME</div>
                        <div className="items">How It works</div>
                        <div className="items">Psychologists</div>
                        <div className="items">Free videos</div>
                        <div className="items">About us</div>              
                    </div>
                    <div className="Location">
                        <div className="loco">LOCATION</div>
                        <div className="state">Andhra</div>
                        <div className="state">Telengana</div>
                        <div className="state">Karnataka</div>
                    </div>
                    <div className="contact">
                        <h1>CONTACT US</h1>
                        <div className="numbers">(+91)9705804398</div>
                        <div className="numbers">(+91)9737038120</div>
                    </div>
                    <div className="media">
                        <div className="social">SOCIAL MEDIA</div>
                        <div className="Media">
                            <img alt="image1
        "  className="google" src="resources/goog.png"/>
                            <img alt="image1
        " className="face" src="resources/facebook.jpeg"/>
                            <img alt="image1
        "  className="insta" src="resources/insta.jpeg"/>
                        </div>
                    </div>
                </div>
        </div>

    )
    }
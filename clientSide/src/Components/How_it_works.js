import React from "react";
import './How_it_works.css';
export const  How_it_works=() => {
    
    function How_it_works(){
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
            <div className="img-text">
                <img className ="Banner" src="resources/works.jpg"/>
                <div className="text-img">
                    <p>The most simple & convenient way to access talk therapy - anytime, anywhere, any device</p>
                </div>
            </div>
            <div className="differentimages">
                <div className="diff">
                    <img className="quest" src="resources/questionmark.png"/>
                        <div className="needs"><h4>Know Your Needs</h4>
                            <p>Answer a few quick questions and <br/>get a therapist recommendation right away.</p>
                        </div>
                        <div>
                            <img className="schedule" src="resources/schedule.jpeg"/>
                        </div>
                        <div>
                            <div className="Schedule">
                                <h4>Schedule A Session</h4>
                                <p>Choose a convenient time slot and get an <br/>appointment with your therapist.</p>
                            </div>
                            <div>
                                <img className="girl" src="resources/girl.jpeg"/>
                            </div>
                            <div className="Regular">
                                <h4>Regular Messages</h4>
                                <p>In addition to the scheduled video sessions, you can reach outto your therapist 
                                via voice messages or chat. The therapist willrespond 1-2 times a day, based on availability.</p>
                            </div>
                            <div>
                                <img className="man" src="resources/man.png"/>
                            </div>
                        </div>
                </div>
                <div className="choose">
                    <div className="right">
                        <h4>Choose The Right Plan</h4>
                        <p>Decide on the number of sessions you would like<br/>to opt for.</p>
                    </div>
                    <div className="match">
                        <img className="list" src="resources/list.png"/>
                    </div>
                    <div className="get">
                        <h4>Get Matched</h4>
                        <p>Choose the recommended therapist or talk to<br/>
                        a matching expert who will connect you with the <br/>
                        right therapist based on your needs.</p>
                    </div>
                    <div>
                        <img className="date" src="resources/date.png"/>
                    </div>
                    <div className="Therapy">
                        <h4>Get Therapy</h4>
                        <p>At the scheduled time, join the session with  <br/>
                        your therapist using the mobile application  <br/>
                        or web browser.</p>
                    </div>
                    <div>
                        <img className="support" src="resources/support.jpeg"/>
                    </div>
                    <div className="Continuous">
                        <h4>Continuous Support</h4>
                        <p>You have the flexibility to reschedule sessions<br/> or change the
                        counselor at any point. For any<br/> issues or support, Felicity
                        helpdesk has you <br/>covered.</p>
                    </div>
                </div>
            </div>
            <button className="start">Get started</button>
            <div className="Meet">
                <h1>Meet Our Counselling Therapists</h1>
            </div>
            <div className="doctors">
                <div>
                    <img className="phys"src="resources/doctor1.jpeg"/>
                    <div className="Aashita">Aashita Khanna, MPhil in Clinical Psychology (RCI Licensed)</div>
                </div>
                <div>
                    <img className="physh"src="resources/doctor(3).jpeg"/>
                    <div className="hritha">Harshitha, MPhil in Clinical Psychology (RCI Licensed)</div>
                </div>
            </div>
            <div className="deliver">
                Meet the highly qualified team of some of the best<br/>
                names in psychology who deliver improved well-being to you.
             </div>
             <div>
                <button className="view">View All</button>
             </div>
             <div className="doctor">
                <div>
                    <img className="durga"src="resources/doctor(1).jpeg"/>
                    <div className="Durga">Durga Kancham, MPhil in Clinical Psychology (RCI Licensed)</div>
                </div>
                <div>
                    <img className="madhu"src="resources/doctor(2).jpeg"/>
                    <div className="Madhu">Madhu Madavali, MPhil in Clinical Psychology (RCI Licensed)</div>
                </div>
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
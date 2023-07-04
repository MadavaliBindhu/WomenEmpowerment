import React,{useState}from "react";
import './Signup.css';

export const Signup =() => {
    const [name,setName] = useState("");
    const [user,setUser] = useState("");
    const [mail,setEmail] = useState("");
    const [password,setPassword]=useState("");
    function butn(){
        console.log(name,user,mail,password)
    }
    return(
        <div className="header">
            <div className="content">
                <h1 className="sign">Sign Up</h1>
                <h2 className="subheading">Already have an account?Login</h2>
            </div>
                <div className="container">
                    <input className="name" type="text" placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)}/>
                    <input className="user" type="text" placeholder="Enter your userName" onChange={(e)=>setUser(e.target.value)}/>
                    <input className="password" type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
                    <input className="mail" type="email" placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)}/><br />
                    <button onClick={butn}className="btn">sign up</button>
                </div> 
        </div>     
    )
}


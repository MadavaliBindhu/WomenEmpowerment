import React,{useState}from "react";
import './Login.css';

export const Login =() => {
    const [fullname,setFullname] = useState("");
    const [userName,setUserName] = useState("");
    const [Email,setEmail] = useState("");
    const [Password,setPassword]=useState("");
    const [confirmpassword,setconfirmPassword]=useState("");
    function butn(){
        console.log(fullname,userName,Email,Password,confirmpassword)
    }
    return(
        <div className="Header">
            <div className="Content">
                <h1 className="Login">Login</h1>
                <h2 className="Subheading">Already have an account?signup</h2>
            </div>
                <div className="Container">
                    <input className="fullname" type="text" placeholder="Enter your Name" onChange={(e)=>setFullname(e.target.value)}/>
                    <input className="userName" type="text" placeholder="Enter your userName" onChange={(e)=>setUserName(e.target.value)}/>
                    <input className="Email" type="email" placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)}/>
                    <input className="password" type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
                    <input className="confirmpassword" type="password" placeholder="Enter your confirmpassword" onChange={(e)=>setconfirmPassword(e.target.value)}/>
                    <button onClick={butn}className="btn">Submit</button>
                </div> 
        </div>     
    )
}
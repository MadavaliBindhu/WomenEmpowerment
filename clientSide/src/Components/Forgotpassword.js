import React,{useState}from "react";
import './Forgotpassword.css';

export const Forgotpassword =() => {
    const [Username,setUsername] = useState("");
    const [Newpassword,setnewPassword]=useState("");
    const [confirmpassword,setconfirmPassword]=useState("");
    

    function butn(){
        console.log(Username,Newpassword,confirmpassword)
    }
    return(
        <div className="HeaDer">
            <div className="ConTent">
                <h1>Forgot Password</h1>
            </div>
                <div className="ConTainer">
                    <input className="Username" type="email" placeholder="Enter your Username" onChange={(e)=>setUsername(e.target.value)}/>
                    <input className="Newpassword" type="password" placeholder="Enter your Newpassword" onChange={(e)=>setnewPassword(e.target.value)}/>
                    <input className="confirmpassword" type="password" placeholder="Enter your confirmpassword" onChange={(e)=>setconfirmPassword(e.target.value)}/>
                    <button onClick={butn}className="btn">Submit</button>
                </div> 
        </div>     
    )
}

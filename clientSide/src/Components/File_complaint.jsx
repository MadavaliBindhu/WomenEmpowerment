import React, { useState } from 'react';
import './File_complaint.css';
function Filecomplaint() {
        const [name, setName] = useState('');
        const [phone, setPhone] = useState('');
        const [complaint, setComplaint] = useState('');
const handleSubmit = () =>{
    console.log(name,phone,complaint);
}
    return(
        <div>
            <div className="navbar">
                <div className="maindiv">
                    <div className="letter">Samyukthaa.com</div>
                    <div className="home">Home</div>
                    <div className="File">File Complaint</div>
                    <div className="signup">Sign up</div>
                    <div className="login">Login</div>
                </div>
                <div className="userdata">
                    <h1>Register The Complaint</h1>
                    <h2>Name:</h2>
                    <input type="Name" className="name" placeholder="Name" value={name} onChange={e =>setName (e.target.value)} />
                    <h2>Phone Number:</h2>
                    <input type="Phone" className="phone" placeholder="Phone Number" value={phone} onChange={e =>setPhone (e.target.value)} />
                    <h2>Complaint_theme:</h2>
                    <textarea className="complaint" type="review" placeholder="Complaint_Area" rows="4" cols="5" value={complaint} onChange={e =>setComplaint (e.target.value)}></textarea><br/>
                    <button className="submit" onClick={() => handleSubmit()}>Submit</button>
                </div>   
            </div>
        </div>
        
    )
}
export default Filecomplaint;

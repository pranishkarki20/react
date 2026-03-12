import { useState } from 'react';
import './contact.css';

export default function Contact(){
    const[ name , setName] = useState("");
    const[email , setEmail] = useState("");
    const[phonenumber , SetNumber] = useState("");

    function handleSubmit(e){
        e.preventDefault(); 
        console.log("Name:" , name);
        console.log("Email : "  ,email);
        console.log("Phone Number :" ,phonenumber);
    }
        return (
            <form onSubmit={handleSubmit}>
                  <h1> Contact Us </h1>
        <div>
            <input type = "text" 
            placeholder='Full Name'
            value={name}
            onChange={(e) =>setName(e.target.value)}
            />

            <input type = "email" 
            placeholder='Email' 
            value={email}
            onChange = {(e) => setEmail(e.target.value)}/>

            <input type  = "number"
            placeholder = 'Phone number'
            value = {phonenumber}
            onChange = {(e) => SetNumber(e.target.value)}/>
        </div>
        <button type="submit">Submit</button>
        </form>
    );
}
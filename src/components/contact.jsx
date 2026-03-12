import { useState } from 'react';
import './contact.css';
import {motion} from "framer-motion";
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
        <div className='container' id="contact">
            <div className='scontainer'>
              <h1> Contact Us </h1>
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
            <motion.button 
            whileHover = {{
                scale: 1.1
            }
            }
             type="submit" className='btn1'> Submit
            </motion.button>
        </div>
        
        </form>
    );
}
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
             <h1> Contact Us </h1>
             <div className='Row'>
            
            <motion.div 
            whileHover ={{scale: 1.1}}
            className='scontainer'>
                <h1> Fill the Form  </h1>
                <h3 className = "name"> Full Name</h3>
            <motion.input 
            whileHover ={{scale: 1.1}}
            type = "text" 
            value={name}
            onChange={(e) =>setName(e.target.value)}
            />
            <h3 className = "name">Email</h3>
            <input type = "email" 
            value={email}
            onChange = {(e) => setEmail(e.target.value)}/>

            <h3 className='name'>Phone Number</h3>
            <input type  = "number"
            value = {phonenumber}
            onChange = {(e) => SetNumber(e.target.value)}/>
            <motion.button 
            whileHover = {{
                scale: 1.1
            }
            }
             type="submit" className='btn1'> Submit
            </motion.button>
            </motion.div> 
            <div className='ncontainer'>
                <h1 className="text-center">Contact Information</h1>
                <h2 className="info-label">Phone Number</h2>
                <p className="info-value">+91 9036327418</p>
                <h2 className="info-label">Email</h2>
                <p className="info-value">Kirina@gmail.com</p>
                <h2 className="info-label">Location</h2>
                <p className="info-value">Kathmandu-34 , Nepal</p>
             </div>
            </div>
        </div>
        
        </form>
    );
}

 import ANavbar from "./anavbar";
 import { BrowserRouter, Route , Routes } from "react-router-dom";
 import './admin.css'
 function Admin() {
   return(
   <div>
    <ANavbar/>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin panel</p>
    </div>
  );
}

export default Admin;
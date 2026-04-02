import ANavbar from "./anavbar";
import "./admin.css";
import { useAuth } from "../context/AuthContext";
import Box from "@mui/material/Box"
function Admin() {
  const { user } = useAuth();

  return (
  <div className="admin-panel">
  <ANavbar />   {/* sidebar */}
  <div className="admin">
    <h1>Welcome seller !</h1>
    <div className="Scontainers">
      <div className = "Seller">
        <img src="/pexels-izafi-29148928.jpg" alt="profile" className="profile-img" />
        <div className="Seler">
        <h4>Hello  Pranish Karki</h4>
      </div>
    </div>
  </div>
  <Box component = "section" 
   sx = {{p:2 , border: '1px solid grey' , width : 60 , marginLeft: 5 ,marginTop : 2 ,
    boxShadow:'0 4px 12px rgba(0, 0, 0, 0.15)'
   }}  
  >
        this is a box 
      </Box>
  </div>
</div>
  );
}

export default Admin;

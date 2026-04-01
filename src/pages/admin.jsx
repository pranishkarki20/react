import ANavbar from "./anavbar";
import "./admin.css";
import { useAuth } from "../context/AuthContext";

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
  </div>
</div>
  );
}

export default Admin;

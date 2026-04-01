import ANavbar from "./anavbar";
import "./admin.css";
import { useAuth } from "../context/AuthContext";

function Admin() {
  const { user } = useAuth();

  return (
  <div className="admin-panel">
  <ANavbar />   {/* sidebar */}
  
  <div className="admin">
    <h1>Admin Dashboard</h1>
    <p>Welcome back, {user?.name || "Admin"}.</p>
    <p>Your account is running in temporary frontend-only mode.</p>
  </div>
</div>
  );
}

export default Admin;

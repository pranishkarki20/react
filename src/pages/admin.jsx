import ANavbar from "./anavbar";
import "./admin.css";
import { useAuth } from "../context/AuthContext";

function Admin() {
  const { user } = useAuth();

  return (
    <div>
      <ANavbar />
      <div className="admin-panel">
        <h1>Admin Dashboard</h1>
        <p>Welcome back, {user?.name || "Admin"}.</p>
        <p>Your account is authenticated through the backend API.</p>
      </div>
    </div>
  );
}

export default Admin;

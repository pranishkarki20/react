import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ANavbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <nav className="anavbar">
      <h2 className="logo">Kinara.com</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/#product">Product</Link>
        </li>
        <li>
          <a href="#Messages">Messages</a>
        </li>
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

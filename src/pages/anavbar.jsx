import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { color } from "framer-motion";

export default function ANavbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  const adminitems = [
    {name : "Home" , link : "/"},
    {name : "Dashboard" , link : "/#Dashboard"} ,
    {name : "Category" , link : "/#Category"},
    {name : "Product" , link : "/#Product"} ,
  ]

  return (
    <nav className="anavbar" >
      <h2 className="logo">Kinara.com</h2>
      <ul className="admin-nav" >
        {adminitems.map((item , index) =>(
          <li key = {index}>
            <a href = {item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

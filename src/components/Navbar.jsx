 import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {

  const navitems = [
    { name: "Home", link: "/" },
    { name: "Product", link: "/#product" },
    { name: "Contact", link: "#contact" }
  ];

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0 , opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="logo">Kinara.com</h2>

      <ul className="nav-links">
        {navitems.map((item, index) => (
          <motion.li key={index} whileHover={{ scale: 1.1 }}>
            <a href={item.link}>{item.name}</a>
          </motion.li>
        ))}
      </ul>
    <div className = "auth-buttons">
      <Link to="/login">
        <button className="login-btn">Login</button>
      </Link>
      <Link to = "/signup">
      <button className = "Signup-btn" >Signup</button>
      </Link></div>
    </motion.nav>
  );
}

export default Navbar;
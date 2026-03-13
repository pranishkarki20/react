import { motion } from "framer-motion";
import "./login.css";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {Link} from "react-router-dom";

const MotionLink = motion(Link);
function Login() {
  //React hook to Update the d
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(""); //Stores the error message if login fails
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Login Success:", userCredential.user.email);
        navigate("/admin");
      })
      .catch((error) => {
        console.error("Login Error:", error.message);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }

  return (
  <div className="pages">
    <form onSubmit={handleSubmit}>
      
      <motion.div className="container1" id="login"
      initial={{opacity:0 , y : -50}}
       animate = {{opacity : 1 , y :0}}
      transition = {{duration:1}}
      >
        <h1>Login</h1>

        <motion.input
          whileHover={{ scale: 1.1 }}
          type="email"
          required
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="Password">
          <motion.input
            whileHover={{ scale: 1.1 }}
            type={showPassword ? "text" : "password"}
            required
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          type="submit"
          className="lbtn"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </motion.button>
      
          <MotionLink to = "/"
           whileHover = {{scale : 1.1}}
          >
           ⬅ Back to home </MotionLink>
           <motion.div 
           whileHover={{scale : 1.1}}>
          <h3>
          <a href="https://www.facebook.com">Forget password</a>
        </h3></motion.div>
      </motion.div>
      
    </form></div>
  );
}

export default Login;
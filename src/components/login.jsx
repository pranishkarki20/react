import { motion } from "framer-motion";
import "./login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const MotionLink = motion(Link);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log("Login Success:", email);
      navigate("/pages/admin");
      setLoading(false);
    }, 400);
  }

  return (
    <div className="pages">
      <form onSubmit={handleSubmit}>
        <motion.div
          className="container1"
          id="login"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
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

          <MotionLink to="/" whileHover={{ scale: 1.1 }}>
            {"<- Back to home"}
          </MotionLink>

          <motion.div whileHover={{ scale: 1.1 }}>
            <h3>
              <a href="https://www.facebook.com">Forget password</a>
            </h3>
          </motion.div>
        </motion.div>
      </form>
    </div>
  );
}

export default Login;

import { motion } from "framer-motion";
import "./login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const MotionLink = motion(Link);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login({ email, password });
      navigate("/pages/admin");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
          <p className="auth-subtitle">Use your account to access the admin dashboard.</p>

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
              type="password"
              required
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error ? <p className="auth-error">{error}</p> : null}

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
            <h3><Link to="/signup">Need an account? Sign up</Link></h3>
          </motion.div>
        </motion.div>
      </form>
    </div>
  );
}

export default Login;

import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section1">
          <h3>Kirana.com</h3>
          <p className="tagline">For the people to the people </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href = '#home'>Home</a></li>
            <li><a href = '#product'>Products</a></li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>Contact us</li>
            <li>Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Social Media</h4>
          <div className="social-icons">
           <a href = 'www.pranishkarki.com.np'> <FaFacebook /></a>
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Krina. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
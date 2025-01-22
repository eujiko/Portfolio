import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/jeanson-acal-b94833279/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/eujiko" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.facebook.com/jeanson.acal" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
        <div className="footer-text">
          <p>
            © {new Date().getFullYear()} Jeanson 'Eujiko' Acal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

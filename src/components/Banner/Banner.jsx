import React from "react";
import "./Banner.css";
import profile from "../../assets/Images/eujiko.jpg"; // Profile image
import background from "../../assets/Images/cover.png"; // Background image
import icon from "../../assets/Images/jca-logo.svg"; // Icon image

function Banner() {
  return (
    <div className="banner">
      {/* Background Image */}
      <img src={background} alt="Cover Photo" className="banner-background" />

      {/* Profile Picture */}
      <img src={profile} alt="Profile Picture" className="banner-profile" />

      {/* Content Section */}
      <div className="banner-content">
        <div className="banner-header">
          <h1>Jeanson 'Eujiko' Acal</h1>
          <img src={icon} alt="Logo Icon" className="banner-icon" />
        </div>
        <h4>Photographer | Graphic Designer | Web Developer✨</h4>
        <p>
          I create captivating visuals, craft engaging web experiences, and
          bring ideas to life through innovative design and code. Let's build
          something extraordinary together.
        </p>

        {/* Social Links */}
        <div className="banner-social-links">
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
      </div>
    </div>
  );
}

export default Banner;

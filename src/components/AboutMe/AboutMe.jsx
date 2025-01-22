import React, { useState } from "react";
import frontend from "../../assets/Images/frontend.JPG";
import advancedPhp from "../../assets/Images/advancephp.JPG";
import webFundamentals from "../../assets/Images/webfundamentals.JPG";
import webDevelopment from "../../assets/Images/web-development.JPG";
import boardPasser from "../../assets/Images/board.JPG";
import "./AboutMe.css";

function AboutMe() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleCertificateClick = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <section className="about-me">
      <div className="about-me-container">
        {/* Introduction */}
        <div className="about-intro">
          <h2>About Me</h2>
          <p>
            Hi, I'm Jeanson "Eujiko" Acal, a passionate Graphic Designer with
            over four years of freelancing experience. I specialize in
            transforming ideas into visually striking designs that captivate and
            communicate. Proficient in industry-standard tools such as Adobe
            Photoshop, Illustrator, InDesign, Lightroom, and Figma, I bring
            expertise and attention to detail to every project I undertake.
          </p>
        </div>

        {/* Education */}
        <div className="education">
          <h3>Education & Certifications</h3>
          <ul>
            <li>
              <strong>Front-End Development Bootcamp</strong>
              <button
                onClick={() => handleCertificateClick(frontend)}
                className="certificate-link"
              >
               - Village88, 2024
              </button>
            </li>
            <li>
              <strong>Advanced PHP Certification</strong> 
              <button
                onClick={() => handleCertificateClick(advancedPhp)}
                className="certificate-link"
              >
               - Village88, 2024
              </button>
            </li>
            <li>
              <strong>Web fundamentals Certification</strong> 
              <button
                onClick={() => handleCertificateClick(webFundamentals)}
                className="certificate-link"
              >
                 - Village88, 2024
              </button>
            </li>
            <li>
              <strong>Web Development</strong> 
              <button
                onClick={() => handleCertificateClick(webDevelopment)}
                className="certificate-link"
              >
                - Kodego, 2023
              </button>
            </li>
            <li>
              <strong>Bachelor of Secondary Education Major in Physical Science</strong> <br/>
              <button
                onClick={() => handleCertificateClick(boardPasser)}
                className="certificate-link"
              >
                <strong>Professional Teacher License</strong> - Board Passer
              </button>
            </li>
          </ul>
        </div>

        {/* Skills */}
        <div className="skills">
          <h3>Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Technical Skills</h4>
              <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>ReactJS, Bootstrap, TailwindCSS, Material UI</li>
                <li>PHP, jQuery, AJAX</li>
                <li>Git, GitHub</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Creative Skills</h4>
              <ul>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Figma, InDesign</li>
                <li>Adobe Lightroom</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Other Skills</h4>
              <ul>
                <li>Responsive Web Design (RWD)</li>
                <li>UI/UX Prototyping</li>
                <li>SEO Optimization</li>
                <li>Project Management</li>
                <li>Photography </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="services">
          <h3>My Services</h3>
          <ul>
            <li>Graphic Design</li>
            <li>Web Development</li>
            <li>Photography</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <img src={modalImage} alt="Certificate" />
          </div>
        </div>
      )}
    </section>
  );
}

export default AboutMe;

import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner"; 
import AppRoutes from "./Routes/AppRoutes";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./assets/App.css";
import Icon from "./assets/Images/jca-logo.svg"

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <BrowserRouter>
      <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
        <div
          style={{
            position: "fixed",
            bottom: -40, // Anchored to the bottom
            right: -50, // Anchored to the left
            transform: "translate(-20%, 20%)", // Slight offset for aesthetics
            opacity: 0.08, // Subtle watermark effect
            pointerEvents: "none", // Prevent interaction
            zIndex: 1, // Behind all other elements
            width: "200px", 
            height: "200px", 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={Icon} 
            alt="JCA Logo Watermark"
            style={{
              width: "100%", // Scales with the div
              height: "100%", // Scales with the div
              objectFit: "contain", // Maintains aspect ratio
            }}
          />
        </div>
        <Header toggleMode={toggleMode} darkMode={darkMode} />
        <Banner /> {/* Your banner */}
        {/* Navigation buttons below the banner */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between", // Spreads buttons evenly
            alignItems: "center", // Centers buttons vertically
            gap: "8px", // Small gap between buttons
            padding: "16px",
            backgroundColor: "none",
            flexWrap: "nowrap", // Prevents wrapping
            overflowX: "auto", // Adds horizontal scroll if needed on very small screens
          }}
        >
          <Button
            className="nav-button"
            component={Link}
            to="/"
            variant="text"
            sx={{
              fontSize: "14px", // Uniform size
              flex: "1 1 auto", // Buttons adjust width to fit
              textAlign: "center",
              whiteSpace: "nowrap", // Prevents text wrapping
            }}
          >
            Feeds
          </Button>
          <Button
            className="nav-button"
            component={Link}
            to="/about-me"
            variant="text"
            sx={{
              fontSize: "14px",
              flex: "1 1 auto",
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            About Me
          </Button>
          <Button
            className="nav-button"
            component={Link}
            to="/contacts"
            variant="text"
            sx={{
              fontSize: "14px",
              flex: "1 1 auto",
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            Contacts
          </Button>
          <Button
            className="nav-button"
            component="a"
            href="/my-cv.pdf"
            download="Jeanson_Acal_CV.pdf"
            variant="text"
            sx={{
              fontSize: "14px",
              flex: "1 1 auto",
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            Download CV
          </Button>
        </Box>
        {/* Main content area */}
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

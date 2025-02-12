import React, { useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import AppRoutes from "./Routes/AppRoutes";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./assets/App.css";
import Icon from "./assets/Images/jca-logo.svg";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
        <div
          style={{
            position: "fixed",
            bottom: -40,
            right: -50,
            transform: "translate(-20%, 20%)",
            opacity: 0.08,
            pointerEvents: "none",
            zIndex: 1,
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
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
        <Header toggleMode={toggleMode} darkMode={darkMode} />
        <Banner />
        {/* Navigation buttons below the banner */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "8px",
            padding: "16px",
            backgroundColor: "none",
            flexWrap: "nowrap",
            overflowX: "auto",
          }}
        >
          <Button className="nav-button" component={Link} to="/" variant="text" sx={{ fontSize: "14px", flex: "1 1 auto", textAlign: "center", whiteSpace: "nowrap" }}>
            Feeds
          </Button>
          <Button className="nav-button" component={Link} to="/about-me" variant="text" sx={{ fontSize: "14px", flex: "1 1 auto", textAlign: "center", whiteSpace: "nowrap" }}>
            About Me
          </Button>
          <Button className="nav-button" component={Link} to="/contacts" variant="text" sx={{ fontSize: "14px", flex: "1 1 auto", textAlign: "center", whiteSpace: "nowrap" }}>
            Contacts
          </Button>
          <Button className="nav-button" component={Link} to="/my-work" variant="text" sx={{ fontSize: "14px", flex: "1 1 auto", textAlign: "center", whiteSpace: "nowrap" }}>
            SOME OF MY WORKS
          </Button>
        </Box>
        {/* Main content area */}
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

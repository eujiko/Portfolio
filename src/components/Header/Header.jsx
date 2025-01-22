import React from 'react';
import { AppBar, Toolbar, IconButton, useTheme } from '@mui/material';
import logo from '../../assets/Images/jca-logo.svg';
import darkModeIcon from '../../assets/Images/dark-mode.svg';
import lightModeIcon from '../../assets/Images/light-mode.svg';

function Header({ toggleMode, darkMode }) {
  const theme = useTheme();

  return (
    <AppBar 
      position="fixed" 
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent white
        backdropFilter: 'blur(0.5px)' // Blurry effect
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <a href="#">
          <img src={logo} alt="Logo" style={{ height: '40px' }} />
        </a>

        <IconButton color="inherit" onClick={toggleMode}>
          <img src={darkMode ? lightModeIcon : darkModeIcon} alt="Mode Toggle" style={{ height: '24px' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

function Contacts() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: "16px",
        textAlign: "center",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        borderRadius: "8px", // Optional styling for better aesthetics
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", // Optional for a slight elevation
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1">
        Email: acaljeanson@gmail.com <br />
        Phone: +639108764127
      </Typography>
    </Box>
  );
}

export default Contacts;

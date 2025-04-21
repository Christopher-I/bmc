import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

// This component displays a preview of the DYP Licensed User Block
const DYPLicensedUserPreview = ({ config }) => {
  const {
    backgroundColor = "#1e3553",
    textColor = "#ffffff",
    accentColor = "#d5ad36",
    headingFont = "serif",
    bodyFont = "sans-serif",
    buttonText = "Contact PHCG",
    buttonRadius = 4,
    organizationName = "PHCG",
  } = config || {};

  // Create style objects for the preview
  const containerStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    padding: "2rem",
    borderRadius: "8px",
    position: "relative",
    overflow: "hidden",
    height: "100%",
  };

  const headingStyle = {
    fontFamily: headingFont,
    fontSize: "1.5rem",
    fontWeight: 500,
    marginBottom: "1rem",
  };

  const paragraphStyle = {
    fontFamily: bodyFont,
    marginBottom: "1.5rem",
    lineHeight: 1.6,
  };

  const buttonStyle = {
    backgroundColor: accentColor,
    color: "#ffffff",
    fontFamily: bodyFont,
    textTransform: "none",
    fontWeight: "bold",
    borderRadius: `${buttonRadius}px`,
    padding: "8px 24px",
  };

  const logoStyle = {
    width: "80px",
    height: "auto",
    marginLeft: "32px",
  };

  return (
    <Box sx={containerStyle}>
      <Typography sx={headingStyle}>
        {organizationName} is a licensed user of Design Your Partnership™
      </Typography>

      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{ marginBottom: "1.5rem" }}
      >
        <Grid item xs>
          <Typography sx={paragraphStyle} style={{ marginBottom: 0 }}>
            {organizationName} professionals are trained and skilled in the use
            of the groundbreaking PC process and the user-friendly "Design Your
            Partnership™" tool. They can provide any level of facilitation and
            support partners may need when developing a Partnership Charter.
          </Typography>
        </Grid>
        <Grid item>
          <Box
            component="img"
            src="/dyp_logo.png"
            alt="DYP Logo"
            sx={logoStyle}
          />
        </Grid>
      </Grid>

      <Button variant="contained" style={buttonStyle}>
        {buttonText}
      </Button>
    </Box>
  );
};

export default DYPLicensedUserPreview;

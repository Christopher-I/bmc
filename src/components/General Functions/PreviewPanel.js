import React from "react";
import { Box, Typography, Button } from "@mui/material";

const PreviewPanel = ({ config }) => {
  const {
    backgroundColor,
    textColor,
    headingFont,
    bodyFont,
    buttonColor,
    buttonText,
    buttonRadius,
  } = config;

  // Create style objects for the preview
  const containerStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    padding: "2rem",
    borderRadius: "4px",
    height: "100%",
  };

  const headingStyle = {
    fontFamily: headingFont,
    marginBottom: "1rem",
  };

  const subtitleStyle = {
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    fontFamily: bodyFont,
    fontSize: "0.875rem",
    marginBottom: "0.5rem",
  };

  const paragraphStyle = {
    fontFamily: bodyFont,
    marginBottom: "1rem",
    lineHeight: 1.6,
  };

  const buttonStyle = {
    backgroundColor: buttonColor,
    borderRadius: `${buttonRadius}px`,
    fontFamily: bodyFont,
    textTransform: "none",
  };

  return (
    <Box sx={containerStyle}>
      <Typography sx={subtitleStyle}>ABOUT US</Typography>
      <Typography variant="h4" sx={headingStyle}>
        Post-haste Consulting Group
      </Typography>

      <Typography sx={paragraphStyle}>
        Post Haste Consulting Group has been working with family and non-family
        business partners for years. Among our services to partners is the
        Partnership Charter (PC). We use the online Design Your Partnership TM
        tool not only because it’s the best structured program for helping
        partners develop a comprehensive document that covers both the
        interpersonal and business sides of their relationship, but it’s also
        the world’s only such tool! Our professionals have been trained in the
        use of the PC methodology and are licensed by The Partnership Charter
        Institute to use the DYP tool so we can help you with your business
        partnership.
      </Typography>

      <Typography sx={paragraphStyle}>
        PHCG used that information to begin focusing on conflict prevention
        among partners. Since around 2000, PHCG has offered two services to
        partners: conflict resolution and conflict prevention.
      </Typography>

      <Button variant="contained" style={buttonStyle}>
        {buttonText}
      </Button>
    </Box>
  );
};

export default PreviewPanel;

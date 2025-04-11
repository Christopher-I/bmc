import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const PreviewPanel = ({ config }) => {
  const {
    backgroundColor,
    textColor,
    headingFont,
    bodyFont,
    buttonColor,
    buttonText,
    buttonRadius
  } = config;

  // Create style objects for the preview
  const containerStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    padding: '2rem',
    borderRadius: '4px',
    height: '100%'
  };

  const headingStyle = {
    fontFamily: headingFont,
    marginBottom: '1rem'
  };

  const subtitleStyle = {
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontFamily: bodyFont,
    fontSize: '0.875rem',
    marginBottom: '0.5rem'
  };

  const paragraphStyle = {
    fontFamily: bodyFont,
    marginBottom: '1rem',
    lineHeight: 1.6
  };

  const buttonStyle = {
    backgroundColor: buttonColor,
    borderRadius: `${buttonRadius}px`,
    fontFamily: bodyFont,
    textTransform: 'none'
  };

  return (
    <Box sx={containerStyle}>
      <Typography sx={subtitleStyle}>ABOUT US</Typography>
      <Typography variant="h4" sx={headingStyle}>BMC Associates</Typography>
      
      <Typography sx={paragraphStyle}>
        BMC Associates pioneered a speciality in business partnerships beginning
        in 1990. During the 1990s it focused on mediating family and non-family
        business partner disputes. Those early clients taught BMC's mediators
        about the approximately dozen different ways partners can wind up
        "sideways" with one another.
      </Typography>
      
      <Typography sx={paragraphStyle}>
        BMC used that information to begin focusing on conflict prevention among
        partners. Since around 2000, BMC has offered two services to partners:
        conflict resolution and conflict prevention.
      </Typography>
      
      <Button variant="contained" style={buttonStyle}>
        {buttonText}
      </Button>
    </Box>
  );
};

export default PreviewPanel;
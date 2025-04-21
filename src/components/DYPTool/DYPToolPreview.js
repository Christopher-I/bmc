// src/components/DYPTool/DYPToolPreview.tsx

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const DYPToolPreview = ({ config }) => {
  return (
    <Box
      sx={{
        backgroundColor: config.backgroundColor,
        color: config.textColor,
        fontFamily: config.bodyFont,
        padding: { xs: '2rem 1rem', md: '4rem' },
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{ fontFamily: config.headingFont, fontWeight: 'bold', mb: 2 }}
          >
            The DYP tool
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            The DYP™ tool puts the Partnership Charter process into action.
            Each of the 3 PC steps has a corresponding part in the DYP tool.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            The PC's been employed and refined with hundreds of partners. In the world of
            business partners, the PC process and the DYP tool are unique.
          </Typography>
          <Typography variant="body1">
            There’s nothing like it for entrepreneurs who want to understand both the business
            and interpersonal sides of their partnerships. Most partners know both sides exist
            and having a tool to thoroughly address them is incredibly advantageous.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={config.imageSrc}
            alt="DYP Process Diagram"
            sx={{
              width: '100%',
              maxWidth: '500px',
              display: 'block',
              margin: '0 auto',
              borderRadius: config.imageRadius || 8,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DYPToolPreview;

// src/components/DYPAdvantagesPreview.js

import React from 'react';
import { Box, Typography } from '@mui/material';
import { dypAdvantagesData } from './DYPAdvantagesShared';

const DYPAdvantagesPreview = ({ config }) => {
  return (
    <Box
      sx={{
        backgroundColor: config.backgroundColor,
        color: config.textColor,
        fontFamily: config.bodyFont,
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: config.headingFont,
          fontSize: '2rem',
          marginBottom: '2rem',
        }}
      >
        Design Your Partnership™ – DYP – is the world’s only online tool for partnership-building.
        <br />
        That’s not its only advantage.
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: '1rem',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        {dypAdvantagesData.map((item, idx) => (
          <Box
            key={idx}
            sx={{
              backgroundColor: 'white',
              borderRadius: `${config.accordionRadius}px`,
              padding: '1rem',
              color: '#333',
              textAlign: 'left',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
            }}
          >
            <Typography variant="subtitle1" fontWeight={600}>
              {item.title}
            </Typography>
            <Typography variant="body2" mt={1}>
              {item.content}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DYPAdvantagesPreview;

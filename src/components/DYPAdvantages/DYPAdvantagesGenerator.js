// src/components/DYPAdvantagesGenerator.js

import React from 'react';
import { Box, Paper, Typography, Button } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { generateDYPEmbedCode } from './DYPAdvantagesShared';

const DYPAdvantagesGenerator = ({ config }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateDYPEmbedCode(config));
  };

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Generated Embed Code</Typography>
        <Button 
          variant="contained" 
          startIcon={<ContentCopyIcon />}
          onClick={copyToClipboard}
        >
          Copy Section
        </Button>
        <Box sx={{ mt: 2, fontSize: '0.875rem', color: 'text.secondary' }}>
          Simply copy this code and paste it into your website. Works with WordPress, Webflow, and most other builders.
        </Box>
      </Paper>
    </Box>
  );
};

export default DYPAdvantagesGenerator;

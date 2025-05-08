// src/components/General Functions/PHCGGenerator.js

import React from "react";
import { Box, Typography, Paper, TextField, Button } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { generatePHCGEmbedCode } from "./PHCGShared";

const PHCGGenerator = ({ config, onConfigChange }) => {
  const {
    backgroundColor = "#2c3e50",
    textColor = "#ffffff",
    headingFont = "serif",
    bodyFont = "sans-serif",
    buttonColor = "#e67e22",
    buttonText = "More About PHCG",
    buttonRadius = 4,
    buttonUrl = "https://PHCG-associates.com"
  } = config || {};

  // Function to handle changes to any configuration option
  const handleConfigChange = (field, value) => {
    if (onConfigChange) {
      onConfigChange({
        ...config,
        [field]: value,
      });
    }
  };

  // Function to copy the embed code to clipboard
  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatePHCGEmbedCode(config));
    alert("Embed code copied to clipboard!");
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        About PHCG Section Configuration
      </Typography>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" gutterBottom>
          Content Settings
        </Typography>
        
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Button Text"
            value={buttonText}
            onChange={(e) => handleConfigChange("buttonText", e.target.value)}
            margin="normal"
            variant="outlined"
          />
        </Box>
        
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Button URL"
            value={buttonUrl}
            onChange={(e) => handleConfigChange("buttonUrl", e.target.value)}
            margin="normal"
            variant="outlined"
            helperText="Where the button will link to"
          />
        </Box>
      </Box>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" gutterBottom>
          Style Settings
        </Typography>
        
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Background Color"
            value={backgroundColor}
            onChange={(e) => handleConfigChange("backgroundColor", e.target.value)}
            margin="normal"
            variant="outlined"
            type="color"
            InputLabelProps={{ shrink: true }}
          />
        </Box>
        
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Text Color"
            value={textColor}
            onChange={(e) => handleConfigChange("textColor", e.target.value)}
            margin="normal"
            variant="outlined"
            type="color"
            InputLabelProps={{ shrink: true }}
          />
        </Box>
        
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Button Color"
            value={buttonColor}
            onChange={(e) => handleConfigChange("buttonColor", e.target.value)}
            margin="normal"
            variant="outlined"
            type="color"
            InputLabelProps={{ shrink: true }}
          />
        </Box>
        
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Heading Font"
            value={headingFont}
            onChange={(e) => handleConfigChange("headingFont", e.target.value)}
            margin="normal"
            variant="outlined"
            select
            SelectProps={{ native: true }}
          >
            <option value="serif">Serif</option>
            <option value="sans-serif">Sans Serif</option>
            <option value="monospace">Monospace</option>
          </TextField>
        </Box>
        
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Body Font"
            value={bodyFont}
            onChange={(e) => handleConfigChange("bodyFont", e.target.value)}
            margin="normal"
            variant="outlined"
            select
            SelectProps={{ native: true }}
          >
            <option value="serif">Serif</option>
            <option value="sans-serif">Sans Serif</option>
            <option value="monospace">Monospace</option>
          </TextField>
        </Box>
        
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Button Radius"
            value={buttonRadius}
            onChange={(e) => handleConfigChange("buttonRadius", e.target.value)}
            margin="normal"
            variant="outlined"
            type="number"
            inputProps={{ min: 0, max: 20 }}
          />
        </Box>
      </Box>

      <Typography variant="h6" gutterBottom>
        Embed Code
      </Typography>
      
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          backgroundColor: "#f5f5f5",
          maxWidth: "100%",
          overflowX: "auto",
        }}
      >
        <pre
          style={{ margin: 0, whiteSpace: "pre-wrap", wordBreak: "break-all" }}
        >
          {generatePHCGEmbedCode(config)}
        </pre>
      </Paper>

      <Button
        variant="contained"
        startIcon={<ContentCopyIcon />}
        onClick={handleCopyCode}
        sx={{ mt: 2 }}
      >
        Copy Embed Code
      </Button>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
        <strong>Note:</strong> Make sure the <code>phcg-section.js</code> file is 
        uploaded to your server at the location specified in the embed code.
      </Typography>
    </Box>
  );
};

export default PHCGGenerator;
import React from "react";
import { Box, Typography, Paper, TextField, Button } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { generateDYPLicensedUserEmbedCode } from "./DYPLicensedUserShared";

const DYPLicensedUserGenerator = ({ config, onConfigChange }) => {
  const {
    backgroundColor = "#1e3553",
    textColor = "#ffffff",
    accentColor = "#d5ad36",
    headingFont = "serif",
    bodyFont = "sans-serif",
    buttonText = "Contact PHCG",
    buttonRadius = 4,
    organizationName = "PHCG",
    buttonUrl = "#",
    logoUrl = "https://bmc-neon.vercel.app/dyp_logo.png"
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
    navigator.clipboard.writeText(generateDYPLicensedUserEmbedCode(config));
    alert("Embed code copied to clipboard!");
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        DYP Licensed User Block Configuration
      </Typography>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" gutterBottom>
          Content Settings
        </Typography>
        
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Organization Name"
            value={organizationName}
            onChange={(e) => handleConfigChange("organizationName", e.target.value)}
            margin="normal"
            variant="outlined"
            helperText="Name of your organization that will be displayed in the text"
          />
        </Box>
        
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
        
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Logo URL"
            value={logoUrl}
            onChange={(e) => handleConfigChange("logoUrl", e.target.value)}
            margin="normal"
            variant="outlined"
            helperText="URL to the DYP logo image"
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
            label="Accent Color (Button)"
            value={accentColor}
            onChange={(e) => handleConfigChange("accentColor", e.target.value)}
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
          {generateDYPLicensedUserEmbedCode(config)}
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
        <strong>Note:</strong> Make sure the <code>dyp-licensed-user-section.js</code> file is 
        uploaded to your server at the location specified in the embed code.
      </Typography>
    </Box>
  );
};

export default DYPLicensedUserGenerator;
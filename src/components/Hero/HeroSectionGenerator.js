import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Slider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { generateHeroEmbedCode, defaultHeroConfig } from "./HeroSectionShared";

/**
 * HeroSectionGenerator component for generating the Hero section embed code
 * 
 * @param {Object} props - Component props
 * @param {Object} props.config - Configuration object with styling parameters
 * @param {Function} props.onConfigChange - Function to handle configuration changes
 * @returns {React.Component} - The HeroSectionGenerator component
 */
const HeroSectionGenerator = ({ config, onConfigChange }) => {
  const [embedType, setEmbedType] = useState("inline"); // Options: "inline", "css"
  
  // Destructure config with defaults
  const {
    backgroundImageUrl = defaultHeroConfig.backgroundImageUrl,
    overlayColor = defaultHeroConfig.overlayColor,
    textColor = defaultHeroConfig.textColor,
    headingFont = defaultHeroConfig.headingFont,
    taglineText = defaultHeroConfig.taglineText,
    logoUrl = defaultHeroConfig.logoUrl,
    height = defaultHeroConfig.height
  } = config || {};

  // Generate the embed code based on selected type
  const embedCode = generateHeroEmbedCode(
    {
      backgroundImageUrl,
      overlayColor,
      textColor,
      headingFont,
      taglineText,
      logoUrl,
      height
    }, 
    embedType
  );

  // Handle color change
  const handleColorChange = (field, value) => {
    onConfigChange({
      ...config,
      [field]: value,
    });
  };

  // Handle text change
  const handleTextChange = (field, value) => {
    onConfigChange({
      ...config,
      [field]: value,
    });
  };

  // Handle slider change
  const handleSliderChange = (field, value) => {
    onConfigChange({
      ...config,
      [field]: value,
    });
  };

  // Handle font change
  const handleFontChange = (field, value) => {
    onConfigChange({
      ...config,
      [field]: value,
    });
  };

  // Copy embed code to clipboard
  const copyEmbedCode = () => {
    navigator.clipboard.writeText(embedCode).then(
      () => {
        // Create a temporary element to display the success message
        const message = document.createElement('div');
        message.textContent = `${embedType === "inline" ? "Inline" : "CSS"} embed code copied to clipboard!`;
        message.style.position = 'fixed';
        message.style.bottom = '20px';
        message.style.left = '50%';
        message.style.transform = 'translateX(-50%)';
        message.style.backgroundColor = '#4caf50';
        message.style.color = 'white';
        message.style.padding = '10px 20px';
        message.style.borderRadius = '4px';
        message.style.zIndex = '9999';
        
        document.body.appendChild(message);
        
        // Remove the message after 3 seconds
        setTimeout(() => {
          document.body.removeChild(message);
        }, 3000);
      },
      (err) => {
        console.error("Could not copy text: ", err);
        alert("Failed to copy embed code to clipboard. Please try again.");
      }
    );
  };

  // Reset to defaults
  const resetToDefaults = () => {
    onConfigChange({
      ...defaultHeroConfig
    });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Hero Section Generator
      </Typography>

      <Divider sx={{ my: 2 }} />

      {/* Background and Overlay */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1" fontWeight="bold">
            Background and Overlay
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Background Image URL"
                value={backgroundImageUrl}
                onChange={(e) => handleTextChange("backgroundImageUrl", e.target.value)}
                placeholder="/hero_bg.png"
                helperText="Path to the background image (relative or absolute URL)"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: overlayColor,
                    borderRadius: 1,
                    mr: 2,
                
                  }}
                />
                <TextField
                  fullWidth
                  label="Overlay Color"
                  value={overlayColor}
                  onChange={(e) => handleColorChange("overlayColor", e.target.value)}
                  placeholder="rgba(28, 67, 106, 0.7)"
                  helperText="RGBA color for the overlay (include opacity)"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                label="Hero Height (vh)"
                value={height}
                onChange={(e) => handleSliderChange("height", parseInt(e.target.value, 10))}
                InputProps={{ inputProps: { min: 40, max: 100 } }}
                helperText="Height of the hero section in viewport height units (40-100)"
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* Typography */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1" fontWeight="bold">
            Typography
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: textColor,
                    borderRadius: 1,
                    mr: 2,
                    border: "1px solid #ccc",
                  }}
                />
                <TextField
                  fullWidth
                  label="Text Color"
                  value={textColor}
                  onChange={(e) => handleColorChange("textColor", e.target.value)}
                  placeholder="#ffffff"
                  helperText="HEX color for the text"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Heading Font</InputLabel>
                <Select
                  value={headingFont}
                  label="Heading Font"
                  onChange={(e) => handleFontChange("headingFont", e.target.value)}
                >
                  <MenuItem value="serif">Serif</MenuItem>
                  <MenuItem value="sans-serif">Sans-serif</MenuItem>
                  <MenuItem value="monospace">Monospace</MenuItem>
                  <MenuItem value="'Times New Roman', serif">Times New Roman</MenuItem>
                  <MenuItem value="'Arial', sans-serif">Arial</MenuItem>
                  <MenuItem value="'Georgia', serif">Georgia</MenuItem>
                  <MenuItem value="'Helvetica', sans-serif">Helvetica</MenuItem>
                </Select>
           
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Tagline Text"
                value={taglineText}
                onChange={(e) => handleTextChange("taglineText", e.target.value)}
                placeholder="...never operate a partnership without one"
                helperText="Text below 'A Partnership Charter™'"
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* Logo */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1" fontWeight="bold">
            Logo
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Logo URL"
                value={logoUrl}
                onChange={(e) => handleTextChange("logoUrl", e.target.value)}
                placeholder="/phcg_logo.svg"
                helperText="Path to the logo image (relative or absolute URL)"
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* Embed Code Output */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Embed Code Type
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <Button 
            variant={embedType === "inline" ? "contained" : "outlined"} 
            onClick={() => setEmbedType("inline")}
          >
            Inline Styles
          </Button>
          <Button 
            variant={embedType === "css" ? "contained" : "outlined"} 
            onClick={() => setEmbedType("css")}
          >
            CSS Classes
          </Button>
        </Box>
        
        <Box sx={{ p: 2, bgcolor: "#f5f5f5", borderRadius: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              {embedType === "inline" ? "Inline Styles Embed Code" : "CSS Classes Embed Code"}
            </Typography>
            <Button
              startIcon={<ContentCopyIcon />}
              size="small"
              onClick={copyEmbedCode}
            >
              Copy
            </Button>
          </Box>
          <TextField
            fullWidth
            multiline
            rows={10}
            value={embedCode}
            InputProps={{
              readOnly: true,
            }}
          />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {embedType === "inline" 
              ? "This embed code uses inline styles directly in the HTML elements." 
              : "This embed code uses CSS classes for styling, providing better separation of content and style."}
          </Typography>
        </Box>
      </Box>

      {/* Action Buttons */}
      <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end", gap: 2 }}>
        <Button variant="outlined" onClick={resetToDefaults}>
          Reset to Defaults
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={copyEmbedCode}
          startIcon={<ContentCopyIcon />}
        >
          Copy Embed Code
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSectionGenerator;
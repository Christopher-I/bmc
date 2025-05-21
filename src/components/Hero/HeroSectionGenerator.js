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
  const [embedType, setEmbedType] = useState("inline"); // "inline", "css", or "loader"

  // Destructure config with defaults
  const {
    backgroundImageUrl = defaultHeroConfig.backgroundImageUrl,
    overlayColor = defaultHeroConfig.overlayColor,
    textColor = defaultHeroConfig.textColor,
    headingFont = defaultHeroConfig.headingFont,
    taglineText = defaultHeroConfig.taglineText,
    logoUrl = defaultHeroConfig.logoUrl,
    height = defaultHeroConfig.height,
  } = config || {};

  // Generate embed code based on type
  const embedCode = generateHeroEmbedCode(
    {
      backgroundImageUrl,
      overlayColor,
      textColor,
      headingFont,
      taglineText,
      logoUrl,
      height,
    },
    embedType
  );

  // Copy to clipboard
  const copyEmbedCode = () => {
    navigator.clipboard.writeText(embedCode).then(
      () => {
        const message = document.createElement("div");
        message.textContent = `${embedType} embed code copied to clipboard!`;
        message.style.position = "fixed";
        message.style.bottom = "20px";
        message.style.left = "50%";
        message.style.transform = "translateX(-50%)";
        message.style.backgroundColor = "#4caf50";
        message.style.color = "white";
        message.style.padding = "10px 20px";
        message.style.borderRadius = "4px";
        message.style.zIndex = "9999";
        document.body.appendChild(message);
        setTimeout(() => {
          document.body.removeChild(message);
        }, 3000);
      },
      (err) => {
        console.error("Could not copy text: ", err);
        alert("Failed to copy embed code. Please try again.");
      }
    );
  };

  const handleChange = (field, value) => {
    onConfigChange({ ...config, [field]: value });
  };

  const resetToDefaults = () => {
    onConfigChange({ ...defaultHeroConfig });
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
                onChange={(e) => handleChange("backgroundImageUrl", e.target.value)}
                placeholder="/hero_bg.png"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Overlay Color"
                value={overlayColor}
                onChange={(e) => handleChange("overlayColor", e.target.value)}
                placeholder="rgba(28, 67, 106, 0.7)"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                label="Hero Height (vh)"
                value={height}
                onChange={(e) =>
                  handleChange("height", parseInt(e.target.value, 10))
                }
                InputProps={{ inputProps: { min: 40, max: 100 } }}
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
              <TextField
                fullWidth
                label="Text Color"
                value={textColor}
                onChange={(e) => handleChange("textColor", e.target.value)}
                placeholder="#ffffff"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Heading Font</InputLabel>
                <Select
                  value={headingFont}
                  label="Heading Font"
                  onChange={(e) => handleChange("headingFont", e.target.value)}
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
                onChange={(e) => handleChange("taglineText", e.target.value)}
                placeholder="...never operate a partnership without one"
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
                onChange={(e) => handleChange("logoUrl", e.target.value)}
                placeholder="/phcg_logo.svg"
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* Embed Code Type */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Embed Code Type
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <Button
            variant={embedType === "inline" ? "contained" : "outlined"}
            onClick={() => setEmbedType("inline")}
          >
            Inline
          </Button>
          <Button
            variant={embedType === "css" ? "contained" : "outlined"}
            onClick={() => setEmbedType("css")}
          >
            CSS
          </Button>
          <Button
            variant={embedType === "loader" ? "contained" : "outlined"}
            onClick={() => setEmbedType("loader")}
          >
            Loader
          </Button>
        </Box>

        <Box sx={{ p: 2, bgcolor: "#f5f5f5", borderRadius: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              Generated {embedType} Embed Code
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
            rows={embedType === "loader" ? 8 : 14}
            value={embedCode}
            InputProps={{ readOnly: true }}
          />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {embedType === "inline"
              ? "Uses inline styles for easy copy-paste into HTML."
              : embedType === "css"
              ? "Separates content and styling with class names."
              : "Embeds remotely hosted HTML/CSS via script tag."}
          </Typography>
        </Box>
      </Box>

      {/* Actions */}
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

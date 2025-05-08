import React from "react";
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
  FormHelperText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { generatePHCGEmbedCode, defaultPHCGConfig } from "./PHCGShared";

/**
 * PHCGGenerator component for generating the Post-haste Consulting Group section embed code
 * 
 * @param {Object} props - Component props
 * @param {Object} props.config - Configuration object with styling parameters
 * @param {Function} props.onConfigChange - Function to handle configuration changes
 * @returns {React.Component} - The PHCGGenerator component
 */
const PHCGGenerator = ({ config, onConfigChange }) => {
  // Destructure config with defaults
  const {
    backgroundColor = defaultPHCGConfig.backgroundColor,
    textColor = defaultPHCGConfig.textColor,
    headingFont = defaultPHCGConfig.headingFont,
    bodyFont = defaultPHCGConfig.bodyFont,
    buttonColor = defaultPHCGConfig.buttonColor,
    buttonText = defaultPHCGConfig.buttonText,
    buttonRadius = defaultPHCGConfig.buttonRadius,
    buttonUrl = defaultPHCGConfig.buttonUrl
  } = config || {};

  // Generate the embed code
  const embedCode = generatePHCGEmbedCode({
    backgroundColor,
    textColor,
    headingFont,
    bodyFont,
    buttonColor,
    buttonText,
    buttonRadius,
    buttonUrl
  });

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

  // Handle number change
  const handleNumberChange = (field, value) => {
    const numValue = parseInt(value, 10);
    if (!isNaN(numValue)) {
      onConfigChange({
        ...config,
        [field]: numValue,
      });
    }
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
        alert("Embed code copied to clipboard!");
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  // Reset to defaults
  const resetToDefaults = () => {
    onConfigChange({
      ...defaultPHCGConfig
    });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Post-haste Consulting Group (PHCG) Section Generator
      </Typography>

      <Divider sx={{ my: 2 }} />

      {/* Colors Section */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1" fontWeight="bold">
            Colors
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
                    backgroundColor: backgroundColor,
                    borderRadius: 1,
                    mr: 2,
                    border: "1px solid #ccc",
                  }}
                />
                <TextField
                  fullWidth
                  label="Background Color"
                  value={backgroundColor}
                  onChange={(e) =>
                    handleColorChange("backgroundColor", e.target.value)
                  }
                  placeholder="#1C436A"
                  helperText="HEX color code for the section background"
                />
              </Box>
            </Grid>
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
                  onChange={(e) =>
                    handleColorChange("textColor", e.target.value)
                  }
                  placeholder="#ffffff"
                  helperText="HEX color code for the text"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: buttonColor,
                    borderRadius: 1,
                    mr: 2,
                    border: "1px solid #ccc",
                  }}
                />
                <TextField
                  fullWidth
                  label="Button Color"
                  value={buttonColor}
                  onChange={(e) =>
                    handleColorChange("buttonColor", e.target.value)
                  }
                  placeholder="#CE950F"
                  helperText="HEX color code for the button"
                />
              </Box>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* Typography Section */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1" fontWeight="bold">
            Typography
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
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
                <FormHelperText>Font family for headings</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Body Font</InputLabel>
                <Select
                  value={bodyFont}
                  label="Body Font"
                  onChange={(e) => handleFontChange("bodyFont", e.target.value)}
                >
                  <MenuItem value="serif">Serif</MenuItem>
                  <MenuItem value="sans-serif">Sans-serif</MenuItem>
                  <MenuItem value="monospace">Monospace</MenuItem>
                  <MenuItem value="'Times New Roman', serif">Times New Roman</MenuItem>
                  <MenuItem value="'Arial', sans-serif">Arial</MenuItem>
                  <MenuItem value="'Georgia', serif">Georgia</MenuItem>
                  <MenuItem value="'Helvetica', sans-serif">Helvetica</MenuItem>
                </Select>
                <FormHelperText>Font family for body text</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* Button Settings */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1" fontWeight="bold">
            Button Settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Button Text"
                value={buttonText}
                onChange={(e) => handleTextChange("buttonText", e.target.value)}
                placeholder="More About Post-haste Consulting Group (PHCG)"
                helperText="Text to display on the button"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Button URL"
                value={buttonUrl}
                onChange={(e) => handleTextChange("buttonUrl", e.target.value)}
                placeholder="https://PHCG-associates.com"
                helperText="URL the button will link to"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                label="Button Border Radius"
                value={buttonRadius}
                onChange={(e) => handleNumberChange("buttonRadius", e.target.value)}
                InputProps={{ inputProps: { min: 0, max: 50 } }}
                helperText="Border radius in pixels (0-50)"
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* Embed Code Output */}
      <Box sx={{ mt: 4, p: 2, bgcolor: "#f5f5f5", borderRadius: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Embed Code
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
          rows={6}
          value={embedCode}
          InputProps={{
            readOnly: true,
          }}
        />
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

export default PHCGGenerator;
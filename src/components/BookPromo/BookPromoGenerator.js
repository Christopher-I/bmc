// src/components/BookPromo/BookPromoGenerator.js

import React from "react";
import {
  Box,
  TextField,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Button,
  Paper,
  Switch,
  FormControlLabel,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { generateBookPromoEmbedCode } from "./BookPromoShared";

const BookPromoGenerator = ({ config, onConfigChange }) => {
  const handleChange = (name, value) => {
    onConfigChange({ ...config, [name]: value });
  };

  const handleColorChange = (e) => {
    handleChange(e.target.name, e.target.value);
  };

  const handleTextChange = (e) => {
    handleChange(e.target.name, e.target.value);
  };

  const handleSliderChange = (name) => (_, value) => {
    handleChange(name, value);
  };

  const handleSwitchChange = (e) => {
    handleChange(e.target.name, e.target.checked);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateBookPromoEmbedCode(config));
  };

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Customize Book Promotion Section
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Background Color"
              name="backgroundColor"
              type="color"
              value={config.backgroundColor}
              onChange={handleColorChange}
              fullWidth
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Text Color"
              name="textColor"
              type="color"
              value={config.textColor}
              onChange={handleColorChange}
              fullWidth
              size="small"
            />
          </Grid>
    
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth size="small">
              <InputLabel>Heading Font</InputLabel>
              <Select
                name="headingFont"
                value={config.headingFont}
                label="Heading Font"
                onChange={handleTextChange}
              >
                <MenuItem value="serif">Serif</MenuItem>
                <MenuItem value="sans-serif">Sans-serif</MenuItem>
                <MenuItem value="monospace">Monospace</MenuItem>
                <MenuItem value="Georgia, serif">Georgia</MenuItem>
                <MenuItem value="'Times New Roman', Times, serif">Times New Roman</MenuItem>
                <MenuItem value="Arial, sans-serif">Arial</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth size="small">
              <InputLabel>Body Font</InputLabel>
              <Select
                name="bodyFont"
                value={config.bodyFont}
                label="Body Font"
                onChange={handleTextChange}
              >
                <MenuItem value="sans-serif">Sans-serif</MenuItem>
                <MenuItem value="serif">Serif</MenuItem>
                <MenuItem value="monospace">Monospace</MenuItem>
                <MenuItem value="Verdana, sans-serif">Verdana</MenuItem>
                <MenuItem value="'Trebuchet MS', sans-serif">Trebuchet MS</MenuItem>
              </Select>
            </FormControl>
          </Grid>
 
          <Grid item xs={12}>
            <TextField
              label="Book Image URL"
              name="bookImageSrc"
              value={config.bookImageSrc}
              onChange={handleTextChange}
              fullWidth
              size="small"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Contact Link URL"
              name="contactLink"
              value={config.contactLink}
              onChange={handleTextChange}
              fullWidth
              size="small"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom>
              Retailer Logo URLs
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Barnes & Noble Logo"
              name="barnesNobleLogo"
              value={config.barnesNobleLogo}
              onChange={handleTextChange}
              fullWidth
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Google Play Logo"
              name="googlePlayLogo"
              value={config.googlePlayLogo}
              onChange={handleTextChange}
              fullWidth
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Amazon Logo"
              name="amazonLogo"
              value={config.amazonLogo}
              onChange={handleTextChange}
              fullWidth
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="IndieBound Logo"
              name="indieBoundLogo"
              value={config.indieBoundLogo}
              onChange={handleTextChange}
              fullWidth
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Audible Logo"
              name="audibleLogo"
              value={config.audibleLogo}
              onChange={handleTextChange}
              fullWidth
              size="small"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography gutterBottom>
              Border Radius: {config.borderRadius}px
            </Typography>
            <Slider
              value={config.borderRadius}
              onChange={handleSliderChange('borderRadius')}
              min={0}
              max={50}
              step={4}
              valueLabelDisplay="auto"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={config.invertLogos}
                  onChange={handleSwitchChange}
                  name="invertLogos"
                />
              }
              label="Invert Retailer Logos (for dark backgrounds)"
            />
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Generated Embed Code
        </Typography>
        <Button
          variant="contained"
          startIcon={<ContentCopyIcon />}
          onClick={copyToClipboard}
        >
          Copy Embed Code
        </Button>
        <Box sx={{ mt: 2, fontSize: "0.875rem", color: "text.secondary" }}>
          Paste this code where you want the block to appear on your site.
        </Box>
      </Paper>
    </Box>
  );
};

export default BookPromoGenerator;
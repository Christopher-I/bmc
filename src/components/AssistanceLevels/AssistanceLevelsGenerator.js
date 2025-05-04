// src/components/AssistanceLevels/AssistanceLevelsGenerator.js

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
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { generateAssistanceLevelsEmbedCode } from "./AssistanceLevelsShared";

const AssistanceLevelsGenerator = ({ config, onConfigChange }) => {
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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateAssistanceLevelsEmbedCode(config));
  };

  return (
    <Box>
      {/* <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Customize Partners Assistance Section
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
            <TextField
              label="Heading Color"
              name="headingColor"
              type="color"
              value={config.headingColor}
              onChange={handleColorChange}
              fullWidth
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Accent Color"
              name="accentColor"
              type="color"
              value={config.accentColor}
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
              label="Image URL"
              name="imageSrc"
              value={config.imageSrc}
              onChange={handleTextChange}
              fullWidth
              size="small"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography gutterBottom>
              Image Radius: {config.imageRadius}px
            </Typography>
            <Slider
              value={config.imageRadius}
              onChange={handleSliderChange('imageRadius')}
              min={0}
              max={30}
              step={1}
              valueLabelDisplay="auto"
            />
          </Grid>
        </Grid>
      </Paper> */}

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

export default AssistanceLevelsGenerator;
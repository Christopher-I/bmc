// src/components/Testimonials/TestimonialsGenerator.js

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
  Button,
  Paper,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { generateTestimonialsEmbedCode } from "./TestimonialsShared";

const TestimonialsGenerator = ({ config, onConfigChange }) => {
  const handleChange = (name, value) => {
    onConfigChange({ ...config, [name]: value });
  };

  const handleColorChange = (e) => {
    handleChange(e.target.name, e.target.value);
  };

  const handleTextChange = (e) => {
    handleChange(e.target.name, e.target.value);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateTestimonialsEmbedCode(config));
  };

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Customize Testimonials Section
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
            <Typography variant="subtitle2" gutterBottom>
              Testimonial 1 Image URL
            </Typography>
            <TextField
              name="testimonial1Image"
              value={config.testimonial1Image}
              onChange={handleTextChange}
              fullWidth
              size="small"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom>
              Testimonial 2 Image URL
            </Typography>
            <TextField
              name="testimonial2Image"
              value={config.testimonial2Image}
              onChange={handleTextChange}
              fullWidth
              size="small"
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

export default TestimonialsGenerator;
import React from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
  Typography,
  Grid,
  Button,
  Paper,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { generateEmbedCode } from "./DYPAdvantagesShared";

const DYPAdvantagesGenerator = ({ config, onConfigChange }) => {
  // Handle input changes
  const handleChange = (name, value) => {
    onConfigChange({ ...config, [name]: value });
  };

  // Handle color picker change
  const handleColorChange = (event) => {
    handleChange(event.target.name, event.target.value);
  };

  // Handle select change
  const handleSelectChange = (event) => {
    handleChange(event.target.name, event.target.value);
  };

  // Handle slider change
  const handleSliderChange = (name) => (event, newValue) => {
    handleChange(name, newValue);
  };

  // Copy code to clipboard
  const copyToClipboard = () => {
    const embedCode = generateEmbedCode(config);
    navigator.clipboard.writeText(embedCode);
  };

  return (
    <Box>
      {/* <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Customize DYP Advantages Section
        </Typography>
        <Grid container spacing={3}>
          {/* Background Color */}
      {/* <Grid item xs={12} sm={6}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" gutterBottom>
                Background Color
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: '36px',
                    height: '36px',
                    border: '1px solid #ccc',
                    backgroundColor: config.backgroundColor,
                  }}
                />
                <TextField
                  type="color"
                  name="backgroundColor"
                  value={config.backgroundColor}
                  onChange={handleColorChange}
                  fullWidth
                  margin="dense"
                  size="small"
                />
              </Box>
            </Box>
          </Grid> */}

      {/* Text Color */}
      {/* <Grid item xs={12} sm={6}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" gutterBottom>
                Text Color
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: '36px',
                    height: '36px',
                    border: '1px solid #ccc',
                    backgroundColor: config.textColor,
                  }}
                />
                <TextField
                  type="color"
                  name="textColor"
                  value={config.textColor}
                  onChange={handleColorChange}
                  fullWidth
                  margin="dense"
                  size="small"
                />
              </Box>
            </Box>
          </Grid> */}

      {/* Accent Color */}
      {/* <Grid item xs={12} sm={6}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" gutterBottom>
                Accent Color (Left Border)
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: '36px',
                    height: '36px',
                    border: '1px solid #ccc',
                    backgroundColor: config.accentColor,
                  }}
                />
                <TextField
                  type="color"
                  name="accentColor"
                  value={config.accentColor || '#fcb040'}
                  onChange={handleColorChange}
                  fullWidth
                  margin="dense"
                  size="small"
                />
              </Box>
            </Box>
          </Grid> */}

      {/* Heading Font */}
      {/* <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal" size="small">
              <InputLabel id="heading-font-label">Heading Font</InputLabel>
              <Select
                labelId="heading-font-label"
                name="headingFont"
                value={config.headingFont}
                onChange={handleSelectChange}
                label="Heading Font"
              >
                <MenuItem value="serif">Serif</MenuItem>
                <MenuItem value="sans-serif">Sans-serif</MenuItem>
                <MenuItem value="monospace">Monospace</MenuItem>
                <MenuItem value="Arial, sans-serif">Arial</MenuItem>
                <MenuItem value="'Times New Roman', Times, serif">Times New Roman</MenuItem>
                <MenuItem value="Georgia, serif">Georgia</MenuItem>
              </Select>
            </FormControl>
          </Grid> */}

      {/* Body Font */}
      {/* <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal" size="small">
              <InputLabel id="body-font-label">Body Font</InputLabel>
              <Select
                labelId="body-font-label"
                name="bodyFont"
                value={config.bodyFont}
                onChange={handleSelectChange}
                label="Body Font"
              >
                <MenuItem value="sans-serif">Sans-serif</MenuItem>
                <MenuItem value="serif">Serif</MenuItem>
                <MenuItem value="monospace">Monospace</MenuItem>
                <MenuItem value="Arial, sans-serif">Arial</MenuItem>
                <MenuItem value="'Trebuchet MS', sans-serif">Trebuchet MS</MenuItem>
                <MenuItem value="Verdana, sans-serif">Verdana</MenuItem>
              </Select>
            </FormControl>
          </Grid> */}

      {/* Accordion Radius */}
      {/* <Grid item xs={12} sm={6}>
            <Box sx={{ mt: 1 }}>
              <Typography id="accordion-radius-slider" gutterBottom>
                Accordion Radius: {config.accordionRadius}px
              </Typography>
              <Slider
                value={config.accordionRadius}
                onChange={handleSliderChange('accordionRadius')}
                aria-labelledby="accordion-radius-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={20}
              />
            </Box>
          </Grid> */}

      {/* Transition Speed */}
      {/* <Grid item xs={12} sm={6}>
            <Box sx={{ mt: 1 }}>
              <Typography id="transition-speed-slider" gutterBottom>
                Accordion Transition Speed: {config.transitionSpeed}s
              </Typography>
              <Slider
                value={config.transitionSpeed}
                onChange={handleSliderChange('transitionSpeed')}
                aria-labelledby="transition-speed-slider"
                valueLabelDisplay="auto"
                step={0.1}
                marks
                min={0.1}
                max={1.0}
              />
            </Box>
          </Grid>
        </Grid> */}
      {/* </Paper> */}

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Generated Embed Code
        </Typography>
        <Button
          variant="contained"
          startIcon={<ContentCopyIcon />}
          onClick={copyToClipboard}
        >
          Copy Section
        </Button>
        <Box sx={{ mt: 2, fontSize: "0.875rem", color: "text.secondary" }}>
          Simply copy this code and paste it into your website where you want
          the DYP Advantages section to appear. Works with WordPress, Webflow,
          and most other website builders.
        </Box>
      </Paper>
    </Box>
  );
};

export default DYPAdvantagesGenerator;

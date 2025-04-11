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
import { generateEmbedCode } from "./PCProcessShared";

const PCProcessGenerator = ({ config, onConfigChange }) => {
  // Handle input changes
  const handleChange = (name, value) => {
    onConfigChange(name, value);
  };

  // Handle color picker change
  const handleColorChange = (event) => {
    handleChange(event.target.name, event.target.value);
  };

  // Handle text input change
  const handleTextChange = (event) => {
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
    navigator.clipboard.writeText(generateEmbedCode(config));
  };

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Customize PC Process Section
        </Typography>
        <Grid container spacing={3}>
          {/* Colors Section */}
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
                    backgroundColor: config.backgroundColor
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
          {/*           
          <Grid item xs={12} sm={6}>
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
                    backgroundColor: config.textColor
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
          </Grid>
           */}
          {/* <Grid item xs={12} sm={6}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" gutterBottom>
                Accent Color (Bottom Border)
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: '36px',
                    height: '36px',
                    border: '1px solid #ccc',
                    backgroundColor: config.accentColor
                  }}
                />
                <TextField
                  type="color"
                  name="accentColor"
                  value={config.accentColor}
                  onChange={handleColorChange}
                  fullWidth
                  margin="dense"
                  size="small"
                />
              </Box>
            </Box>
          </Grid> */}

          {/* <Grid item xs={12} sm={6}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" gutterBottom>
                Button Color
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: '36px',
                    height: '36px',
                    border: '1px solid #ccc',
                    backgroundColor: config.buttonColor
                  }}
                />
                <TextField
                  type="color"
                  name="buttonColor"
                  value={config.buttonColor}
                  onChange={handleColorChange}
                  fullWidth
                  margin="dense"
                  size="small"
                />
              </Box>
            </Box>
          </Grid> */}

          {/* Fonts Section */}
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

          {/* Button Text */}
          {/* <Grid item xs={12} sm={6}>
            <TextField
              label="Button Text"
              name="buttonText"
              value={config.buttonText}
              onChange={handleTextChange}
              fullWidth
              margin="normal"
              size="small"
            />
          </Grid> */}

          {/* Button Radius */}
          {/* <Grid item xs={12} sm={6}>
            <Box sx={{ mt: 3 }}>
              <Typography id="button-radius-slider" gutterBottom>
                Button Radius: {config.buttonRadius}px
              </Typography>
              <Slider
                value={config.buttonRadius}
                onChange={handleSliderChange('buttonRadius')}
                aria-labelledby="button-radius-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={20}
              />
            </Box>
          </Grid> */}

          {/* Accordion Radius */}
          {/* <Grid item xs={12} sm={6}>
            <Box sx={{ mt: 1 }}>
              <Typography id="accordion-radius-slider" gutterBottom>
                Accordion Radius: {config.accordionRadius || 4}px
              </Typography>
              <Slider
                value={config.accordionRadius || 4}
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
          <Grid item xs={12} sm={6}>
            <Box sx={{ mt: 1 }}>
              <Typography id="transition-speed-slider" gutterBottom>
                Accordion Transition Speed: {config.transitionSpeed}s
              </Typography>
              <Slider
                value={config.transitionSpeed}
                onChange={handleSliderChange("transitionSpeed")}
                aria-labelledby="transition-speed-slider"
                valueLabelDisplay="auto"
                step={0.1}
                marks
                min={0.1}
                max={1.0}
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Generated Embed Code
        </Typography>
        {/* <TextField
          value={generateEmbedCode(config)}
          multiline
          rows={7}
          fullWidth
          variant="outlined"
          InputProps={{
            readOnly: true,
            style: { fontFamily: 'monospace', fontSize: '0.875rem' }
          }}
          sx={{ mb: 2 }}
        /> */}
        <Button
          variant="contained"
          startIcon={<ContentCopyIcon />}
          onClick={copyToClipboard}
        >
          Copy Section
        </Button>
        <Box sx={{ mt: 2, fontSize: "0.875rem", color: "text.secondary" }}>
          Simply copy this code and paste it into your website where you want
          the PC Process section to appear. Works with WordPress, Webflow, and
          most other website builders.
        </Box>
      </Paper>
    </Box>
  );
};

export default PCProcessGenerator;

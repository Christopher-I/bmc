import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { generateDYPEmbedCode } from './DYPAdvantagesShared';

const DYPAdvantagesGenerator = ({ config, onConfigChange }) => {
  const [copied, setCopied] = useState(false);

  const handleChange = (name, value) => {
    const updatedConfig = {
      ...config,
      [name]: value,
    };
    onConfigChange(updatedConfig);
  };

  const handleColorChange = (event) => {
    handleChange(event.target.name, event.target.value);
  };

  const handleSelectChange = (event) => {
    handleChange(event.target.name, event.target.value);
  };

  const handleSliderChange = (name) => (event, newValue) => {
    handleChange(name, newValue);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateDYPEmbedCode(config)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Customize DYP Advantages Section
        </Typography>

        <Grid container spacing={3}>
          {/* Colors */}
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2">Background Color</Typography>
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
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2">Text Color</Typography>
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
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2">Accent Color (Left Border)</Typography>
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
                value={config.accentColor}
                onChange={handleColorChange}
                fullWidth
                margin="dense"
                size="small"
              />
            </Box>
          </Grid>

          {/* Fonts */}
          <Grid item xs={12} sm={6}>
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
          </Grid>

          <Grid item xs={12} sm={6}>
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
          </Grid>

          {/* Radius and Speed */}
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Accordion Radius: {config.accordionRadius}px</Typography>
            <Slider
              value={config.accordionRadius}
              onChange={handleSliderChange('accordionRadius')}
              valueLabelDisplay="auto"
              step={1}
              min={0}
              max={20}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>
              Accordion Transition Speed: {config.transitionSpeed}s
            </Typography>
            <Slider
              value={config.transitionSpeed}
              onChange={handleSliderChange('transitionSpeed')}
              valueLabelDisplay="auto"
              step={0.1}
              min={0.1}
              max={1.0}
            />
          </Grid>
        </Grid>
      </Paper>

      {/* Embed Code Section */}
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Generated Embed Code
        </Typography>

        <Button
          variant="contained"
          startIcon={<ContentCopyIcon />}
          onClick={copyToClipboard}
          sx={{ mb: 2 }}
        >
          {copied ? 'Copied!' : 'Copy Section'}
        </Button>

        <TextField
          fullWidth
          multiline
          minRows={6}
          value={generateDYPEmbedCode(config)}
          variant="outlined"
          InputProps={{
            readOnly: true,
            sx: { fontFamily: 'monospace', fontSize: '0.85rem' },
          }}
        />

        <Box sx={{ mt: 2, fontSize: '0.875rem', color: 'text.secondary' }}>
          Paste this code anywhere on your site to embed the DYP Advantages section. Compatible with
          WordPress, Webflow, Framer, and most CMS platforms.
        </Box>
      </Paper>
    </Box>
  );
};

export default DYPAdvantagesGenerator;

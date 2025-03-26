import React, { useState } from 'react';
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
  Tabs,
  Tab,
  Paper
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const CharterSectionGenerator = () => {
  // Default configuration for the Charter section
  const [config, setConfig] = useState({
    backgroundColor: '#1e4164',
    textColor: '#ffffff',
    headingFont: 'sans-serif',
    bodyFont: 'sans-serif',
    accentColor: '#a3c984',
    buttonColor: '#ffffff',
    buttonText: 'Learn More',
    buttonRadius: 0,
    transitionSpeed: 0.3
  });

  // Handle input changes
  const handleChange = (name, value) => {
    setConfig({
      ...config,
      [name]: value
    });
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

  // Generate embed code based on configuration
  const generateEmbedCode = () => {
    return `<script 
  src="https://bmc-neon.vercel.app/embed/charter-section.js" 
  data-background="${config.backgroundColor}"
  data-text-color="${config.textColor}"
  data-heading-font="${config.headingFont}"
  data-body-font="${config.bodyFont}"
  data-accent-color="${config.accentColor}"
  data-button-color="${config.buttonColor}"
  data-button-radius="${config.buttonRadius}"
  data-transition-speed="${config.transitionSpeed}s">
</script>`;
  };

  // Copy code to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateEmbedCode());
  };

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Customize Charter Section</Typography>
        <Grid container spacing={3}>
          {/* Colors Section */}
          <Grid item xs={12} sm={6}>
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
          </Grid>
          
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
          
          <Grid item xs={12} sm={6}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" gutterBottom>
                Accent Color (Letters)
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
          </Grid>
          
          <Grid item xs={12} sm={6}>
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
          </Grid>
          
          {/* Fonts Section */}
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
                <MenuItem value="sans-serif">Sans-serif</MenuItem>
                <MenuItem value="serif">Serif</MenuItem>
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
          
          {/* Animation Section */}
          <Grid item xs={12} sm={6}>
            <Box sx={{ mt: 1 }}>
              <Typography id="transition-speed-slider" gutterBottom>
                Transition Speed: {config.transitionSpeed}s
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
          
          <Grid item xs={12} sm={6}>
            <Box sx={{ mt: 1 }}>
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
          </Grid>
        </Grid>
      </Paper>
      
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>Generated Embed Code</Typography>
        <TextField
          value={generateEmbedCode()}
          multiline
          rows={7}
          fullWidth
          variant="outlined"
          InputProps={{
            readOnly: true,
            style: { fontFamily: 'monospace', fontSize: '0.875rem' }
          }}
          sx={{ mb: 2 }}
        />
        <Button 
          variant="contained" 
          startIcon={<ContentCopyIcon />}
          onClick={copyToClipboard}
        >
          Copy Embed Code
        </Button>
        <Box sx={{ mt: 2, fontSize: '0.875rem', color: 'text.secondary' }}>
          Simply copy this code and paste it into your website where you want the Charter section to appear.
          Works with WordPress, Webflow, and most other website builders.
        </Box>
      </Paper>
    </Box>
  );
};

export default CharterSectionGenerator;
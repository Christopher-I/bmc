import React from 'react';
import { 
  Box, 
  TextField, 
  FormControl, 
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Grid,
  Button,
  Paper
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CharterSectionPreview from './CharterSectionPreview';

// Default configuration
const defaultCharterConfig = {
  backgroundColor: "#1e3553",
  textColor: "#ffffff",
  headingColor: "#ffffff",
  accentColor: "#d5ad36",
  headingFont: "serif",
  bodyFont: "sans-serif",
  logoSrc: "/tpci_logo.png",
  imageSrc: "/chartersection_computer.jpg"
};

const CharterSectionGenerator = ({ config = defaultCharterConfig, onConfigChange }) => {
  // Handle input changes
  const handleChange = (name, value) => {
    onConfigChange({ ...config, [name]: value });
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

  // Generate embeddable code
  const generateEmbedCode = () => {
    return `<script 
  src="https://bmc-neon.vercel.app/embed/charter-section.js" 
  data-background="${config.backgroundColor || "#1e3553"}"
  data-text-color="${config.textColor || "#ffffff"}"
  data-heading-color="${config.headingColor || "#ffffff"}"
  data-accent-color="${config.accentColor || "#d5ad36"}"
  data-heading-font="${config.headingFont || "serif"}"
  data-body-font="${config.bodyFont || "sans-serif"}"
  data-logo-src="${config.logoSrc || "/tpci_logo.png"}"
  data-image-src="${config.imageSrc || "/chartersection_computer.jpg"}">
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
          
          {/* Image Sources */}
          <Grid item xs={12}>
            <TextField
              label="Image URL"
              name="imageSrc"
              value={config.imageSrc}
              onChange={handleTextChange}
              placeholder="https://example.com/your-image.jpg"
              fullWidth
              margin="normal"
              size="small"
              helperText="URL to the laptop/document image"
            />
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              label="Logo URL"
              name="logoSrc"
              value={config.logoSrc}
              onChange={handleTextChange}
              placeholder="https://example.com/your-logo.png"
              fullWidth
              margin="normal"
              size="small"
              helperText="URL to the TPCI logo or your custom logo"
            />
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
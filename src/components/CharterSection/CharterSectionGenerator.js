import React from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Grid,
  Button,
  Paper,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {
  defaultCharterConfig,
  generateCharterEmbedScript,
} from "./CharterSectionShared";

const CharterSectionGenerator = ({
  config = defaultCharterConfig,
  onConfigChange,
}) => {
  const handleChange = (name, value) => {
    onConfigChange({ ...config, [name]: value });
  };

  const handleColorChange = (event) => {
    handleChange(event.target.name, event.target.value);
  };

  const handleTextChange = (event) => {
    handleChange(event.target.name, event.target.value);
  };

  const handleSelectChange = (event) => {
    handleChange(event.target.name, event.target.value);
  };

  const copyToClipboard = () => {
    // Always use absolute URLs in the embed code
    const absoluteConfig = {
      ...config,
      logoSrc: config.logoSrc?.startsWith("http")
        ? config.logoSrc
        : "https://bmc-neon.vercel.app/tpci_logo.svg",
      imageSrc: config.imageSrc?.startsWith("http")
        ? config.imageSrc
        : "https://bmc-neon.vercel.app/chartersection_computer.jpg",
    };
    navigator.clipboard.writeText(generateCharterEmbedScript(absoluteConfig));
  };

  return (
    <Box>
      {/* <Paper elevation={3} sx={{ p: 3, mb: 3 }}> */}
      {/* <Typography variant="h6" gutterBottom>
          Customize "What is a PC?"
        </Typography> */}
      <Grid container spacing={3}>
        {/* <Grid item xs={12} sm={6}>
            <TextField
              label="Image URL"
              name="imageSrc"
              value={config.imageSrc}
              onChange={handleTextChange}
              fullWidth
              margin="normal"
              size="small"
              helperText="URL to the image (optional)"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Logo URL"
              name="logoSrc"
              value={config.logoSrc}
              onChange={handleTextChange}
              fullWidth
              margin="normal"
              size="small"
              helperText="URL to the logo (optional)"
            />
          </Grid> */}
      </Grid>
      {/* </Paper> */}

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Generated Embed Code
        </Typography>
        {/* <TextField
          value={generateCharterEmbedScript(config)}
          multiline
          rows={10}
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
          Copy Embed Code
        </Button>
        <Box sx={{ mt: 2, fontSize: "0.875rem", color: "text.secondary" }}>
          Paste this script into your website to embed the "What is a PC?”
          block. It works with Webflow, WordPress, and most other platforms.
        </Box>
      </Paper>
    </Box>
  );
};

export default CharterSectionGenerator;

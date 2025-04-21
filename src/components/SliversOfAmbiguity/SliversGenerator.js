import React from "react";
import {
  Box,
  TextField,
  Grid,
  Typography,
  Paper,
  Slider,
  Button,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { generateSliversEmbedCode } from "./SliversShared";

const SliversOfAmbiguityGenerator = ({ config, onConfigChange }) => {
  const handleChange = (name, value) => {
    onConfigChange({ ...config, [name]: value });
  };

  const handleColorChange = (event) => {
    handleChange(event.target.name, event.target.value);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateSliversEmbedCode(config));
  };

  return (
    <Box>
      {/* <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Customize Slivers of Ambiguity Section
        </Typography>
        <Grid container spacing={3}> */}
      {/* <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2">Background Color</Typography>
            <TextField
              type="color"
              name="backgroundColor"
              value={config.backgroundColor}
              onChange={handleColorChange}
              fullWidth
              margin="dense"
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2">Text Color</Typography>
            <TextField
              type="color"
              name="textColor"
              value={config.textColor}
              onChange={handleColorChange}
              fullWidth
              margin="dense"
              size="small"
            />
          </Grid> */}

      {/* <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2">Heading Color</Typography>
            <TextField
              type="color"
              name="headingColor"
              value={config.headingColor}
              onChange={handleColorChange}
              fullWidth
              margin="dense"
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2">Accent Color</Typography>
            <TextField
              type="color"
              name="accentColor"
              value={config.accentColor}
              onChange={handleColorChange}
              fullWidth
              margin="dense"
              size="small"
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
          sx={{ mb: 2 }}
        >
          Copy Embed Script
        </Button>
        <Typography variant="body2" color="text.secondary">
          Paste this code where you'd like the block to appear on your site. It
          works with most platforms like Webflow, WordPress, Framer, and more.
        </Typography>
      </Paper>
    </Box>
  );
};

export default SliversOfAmbiguityGenerator;

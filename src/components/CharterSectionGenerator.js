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
import {
  defaultCharterConfig,
  generateCharterEmbedScript
} from './CharterSectionShared';

const CharterSectionGenerator = ({ config = defaultCharterConfig, onConfigChange }) => {
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
    navigator.clipboard.writeText(generateCharterEmbedScript(config));
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Charter Section Preview</Typography>
 

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>Generated Embed Code</Typography>
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
        <Box sx={{ mt: 2, fontSize: '0.875rem', color: 'text.secondary' }}>
          Paste this script into your website to embed the Charter section. It works with Webflow, WordPress, and most other platforms.
        </Box>
      </Paper>
    </Box>
  );
};

export default CharterSectionGenerator;

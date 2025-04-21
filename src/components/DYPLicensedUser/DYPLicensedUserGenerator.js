import React from "react";
import { Box, Typography, Paper, TextField, Button } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const DYPLicensedUserEmbedGenerator = ({ config }) => {
  const {
    backgroundColor = "#1e3553",
    textColor = "#ffffff",
    accentColor = "#d5ad36",
    headingFont = "serif",
    bodyFont = "sans-serif",
    buttonText = "Contact PHCG",
    buttonRadius = 4,
    organizationName = "PHCG",
  } = config || {};

  // Generate the embed code based on the current configuration
  const generateEmbedCode = () => {
    return `<script
  src="https://yourwebsite.com/embed/dyp-licensed-user-section.js"
  data-background="${backgroundColor}"
  data-text-color="${textColor}"
  data-accent-color="${accentColor}"
  data-heading-font="${headingFont}"
  data-body-font="${bodyFont}"
  data-button-text="${buttonText}"
  data-button-radius="${buttonRadius}"
  data-organization-name="${organizationName}">
</script>`;
  };

  // Function to copy the embed code to clipboard
  const handleCopyCode = () => {
    navigator.clipboard.writeText(generateEmbedCode());
    alert("Embed code copied to clipboard!");
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Embed Code for DYP Licensed User Section
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Copy and paste this code into your website to embed the DYP Licensed User section.
      </Typography>

      <Paper 
        variant="outlined" 
        sx={{ 
          p: 2, 
          backgroundColor: "#f5f5f5", 
          maxWidth: "100%", 
          overflowX: "auto" 
        }}
      >
        <pre style={{ margin: 0, whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
          {generateEmbedCode()}
        </pre>
      </Paper>

      <Button
        variant="contained"
        startIcon={<ContentCopyIcon />}
        onClick={handleCopyCode}
        sx={{ mt: 2 }}
      >
        Copy Embed Code
      </Button>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
        <strong>Note:</strong> You will need to upload the 
        <code>dyp-licensed-user-section.js</code> file to your web server 
        and update the <code>src</code> attribute in the embed code to point to its location.
      </Typography>
    </Box>
  );
};

export default DYPLicensedUserEmbedGenerator;
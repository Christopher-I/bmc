import React from "react";
import { Box, Button, TextField } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const CodeGenerator = ({ config }) => {
  // Generate embed code based on configuration
  const generateEmbedCode = () => {
    return `<script 
  src="https://bmc-neon.vercel.app/embed/section.js" 
  data-background="${config.backgroundColor}"
  data-text-color="${config.textColor}"
  data-heading-font="${config.headingFont}"
  data-body-font="${config.bodyFont}"
  data-button-color="${config.buttonColor}"
  data-button-text="${config.buttonText}"
  data-button-radius="${config.buttonRadius}">
</script>`;
  };

  // Copy code to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateEmbedCode());
  };

  return (
    <Box>
      {/* <TextField
        value={generateEmbedCode()}
        multiline
        rows={7}
        fullWidth
        variant="outlined"
        InputProps={{
          readOnly: true,
          style: { fontFamily: "monospace", fontSize: "0.875rem" },
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
        Simply copy this code and paste it into your website where you want the
        PHCG section to appear. Works with WordPress, Webflow, and most other
        website builders.
      </Box>
    </Box>
  );
};

export default CodeGenerator;

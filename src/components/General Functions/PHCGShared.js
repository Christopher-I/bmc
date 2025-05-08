// src/components/General Functions/PHCGShared.js

/**
 * Generates embed code for the Post-haste Consulting Group section based on configuration
 * 
 * @param {Object} config - Configuration object for the PHCG section
 * @returns {string} HTML script tag with data attributes
 */
export const generatePHCGEmbedCode = (config) => {
    const {
      backgroundColor = "#2c3e50",
      textColor = "#ffffff",
      headingFont = "serif",
      bodyFont = "sans-serif",
      buttonColor = "#e67e22",
      buttonText = "More About PHCG",
      buttonRadius = 4,
      buttonUrl = "https://PHCG-associates.com"
    } = config || {};
  
    return `<script
    src="https://bmc-neon.vercel.app/embed/phcg-section.js"
    data-background="${backgroundColor}"
    data-text-color="${textColor}"
    data-heading-font="${headingFont}"
    data-body-font="${bodyFont}"
    data-button-color="${buttonColor}"
    data-button-text="${buttonText}"
    data-button-radius="${buttonRadius}"
    data-button-url="${buttonUrl}">
  </script>`;
  };
// src/components/DYPLicensedUser/DYPLicensedUserShared.js

/**
 * Generates embed code for the DYP Licensed User Block based on configuration
 * 
 * @param {Object} config - Configuration object for the DYP Licensed User Block
 * @returns {string} HTML script tag with data attributes
 */
export const generateDYPLicensedUserEmbedCode = (config) => {
    const {
      backgroundColor = "#1e3553",
      textColor = "#ffffff",
      accentColor = "#d5ad36",
      headingFont = "serif",
      bodyFont = "sans-serif",
      buttonText = "Contact PHCG",
      buttonRadius = 4,
      organizationName = "PHCG",
      buttonUrl = "#",
      logoUrl = "https://bmc-neon.vercel.app/dyp_logo.png"
    } = config || {};
  
    return `<script
    src="https://bmc-neon.vercel.app/embed/dyp-licensed-user-section.js"
    data-background="${backgroundColor}"
    data-text-color="${textColor}"
    data-accent-color="${accentColor}"
    data-heading-font="${headingFont}"
    data-body-font="${bodyFont}"
    data-button-text="${buttonText}"
    data-button-radius="${buttonRadius}"
    data-organization-name="${organizationName}"
    data-button-url="${buttonUrl}"
    data-logo-url="${logoUrl}">
  </script>`;
  };
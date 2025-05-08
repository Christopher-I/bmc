/**
 * Shared utilities and functions for the Post-haste Consulting Group components
 */

/**
 * Generates embed code for the Post-haste Consulting Group section
 * using the external loader approach
 * 
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - External script reference as a string
 */
export const generatePHCGEmbedCode = (config) => {
  const {
    backgroundColor = "#1C436A",
    textColor = "#ffffff",
    headingFont = "serif",
    bodyFont = "sans-serif",
    buttonColor = "#CE950F",
    buttonText = "More About Post-haste Consulting Group (PHCG)",
    buttonRadius = 4,
    buttonUrl = "https://PHCG-associates.com"
  } = config || {};

  return `<script 
  src="https://bmc-neon.vercel.app/embed/loaders/phcg-section-loader.js"
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

/**
 * Default configuration for the PHCG Section
 */
export const defaultPHCGConfig = {
  backgroundColor: "#1C436A",
  textColor: "#ffffff",
  headingFont: "serif",
  bodyFont: "sans-serif",
  buttonColor: "#CE950F",
  buttonText: "More About Post-haste Consulting Group (PHCG)",
  buttonRadius: 4,
  buttonUrl: "https://PHCG-associates.com"
};
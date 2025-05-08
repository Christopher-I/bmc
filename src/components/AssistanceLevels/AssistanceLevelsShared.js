// src/components/AssistanceLevels/AssistanceLevelsShared.js

/**
 * Assistance Levels Shared Utilities and Code Templates
 */

/**
 * Helper to normalize imageSrc fallback logic
 * @param {string} imageSrc - The image source string
 * @returns {string} - Safe image URL
 */
export const getSafeImageUrl = (imageSrc) => {
  if (!imageSrc || imageSrc === "/assistance_levels_diagram.png") {
    return "https://bmc-neon.vercel.app/assistance_levels_diagram.png"; // Fallback to a hosted image
  }
  return imageSrc;
};

/**
 * Generates the embed code for the Assistance Levels component
 * using the external loader approach
 * 
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - External script reference as a string
 */
export const generateAssistanceLevelsEmbedCode = (config) => {
  const {
    backgroundColor = "#ffffff",
    textColor = "#333333",
    headingColor = "#333333",
    accentColor = "#0066B2",
    headingFont = "serif",
    bodyFont = "sans-serif",
    imageRadius = 8,
    imageSrc = "/assistance_levels_diagram.png",
  } = config || {};

  // Use the safe image URL
  const safeImageUrl = getSafeImageUrl(imageSrc);

  return `<script 
  src="https://bmc-neon.vercel.app/embed/loaders/assistance-levels-loader.js"
  data-background="${backgroundColor}"
  data-text-color="${textColor}"
  data-heading-color="${headingColor}"
  data-accent-color="${accentColor}"
  data-heading-font="${headingFont}"
  data-body-font="${bodyFont}"
  data-image-radius="${imageRadius}"
  data-image-src="${safeImageUrl}">
</script>`;
};

/**
 * Default configuration for the Assistance Levels section
 */
export const defaultAssistanceLevelsConfig = {
  backgroundColor: "#ffffff",
  textColor: "#333333",
  headingColor: "#333333",
  accentColor: "#0066B2",
  headingFont: "serif",
  bodyFont: "sans-serif",
  imageRadius: 8,
  imageSrc: "/assistance_levels_diagram.png",
};
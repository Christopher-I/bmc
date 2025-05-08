// src/components/DYPTool/DYPToolShared.js

/**
 * DYP Tool Shared Utilities and Code Templates
 */

/**
 * Helper to normalize imageSrc fallback logic
 * @param {string} imageSrc - The image source string
 * @returns {string} - Safe image URL
 */
export const getSafeImageUrl = (imageSrc) => {
  if (!imageSrc || imageSrc === "/dyp_tool.png") {
    return "https://bmc-neon.vercel.app/dyp_tool.png"; // Fallback to a hosted image
  }
  return imageSrc;
};

/**
 * Generates the embed code for the DYP Tool component
 * using the external loader approach
 * 
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - External script reference as a string
 */
export const generateDYPToolEmbedCode = (config) => {
  const {
    backgroundColor = "#ecf0f1",
    textColor = "#2c3e50",
    headingFont = "serif",
    bodyFont = "sans-serif",
    imageRadius = 8,
    imageSrc = "/dyp_tool.png"
  } = config || {};

  // Use the safe image URL
  const safeImageUrl = getSafeImageUrl(imageSrc);

  return `<script 
  src="https://bmc-neon.vercel.app/embed/loaders/dyp-tool-loader.js"
  data-background="${backgroundColor}"
  data-text-color="${textColor}"
  data-heading-font="${headingFont}"
  data-body-font="${bodyFont}"
  data-image-radius="${imageRadius}"
  data-image-src="${safeImageUrl}">
</script>`;
};

/**
 * Default configuration for the DYP Tool section
 */
export const defaultDYPToolConfig = {
  backgroundColor: "#ecf0f1",
  textColor: "#2c3e50",
  headingFont: "serif",
  bodyFont: "sans-serif",
  imageRadius: 8,
  imageSrc: "https://bmc-neon.vercel.app/dyp_tool.png",
};
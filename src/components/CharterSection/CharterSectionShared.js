// src/components/CharterSection/CharterSectionShared.js

/**
 * Charter Section Shared Utilities and Code Templates
 */

/**
 * Helper to normalize image URL fallback logic
 * @param {string} imageSrc - The image source string
 * @returns {string} - Safe image URL
 */
export const getSafeCharterImageUrl = (imageSrc) => {
  if (!imageSrc || imageSrc.includes("placehold.co")) {
    return "https://bmc-neon.vercel.app/chartersection_computer.jpg";
  }
  return imageSrc;
};

/**
 * Generates the embed code for the Charter Section component
 * using the external loader approach
 * 
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - External script reference as a string
 */
export const generateCharterEmbedScript = (config) => {
  const {
    backgroundColor = "#1e3553",
    textColor = "#ffffff",
    headingColor = "#ffffff",
    accentColor = "#d5ad36",
    headingFont = "serif",
    bodyFont = "sans-serif",
    logoSrc = "https://bmc-neon.vercel.app/tpci_logo.svg",
    imageSrc = "https://bmc-neon.vercel.app/chartersection_computer.jpg"
  } = config || {};

  // Use the safe image URL
  const safeImageSrc = getSafeCharterImageUrl(imageSrc);
  const safeLogoSrc = logoSrc || "https://bmc-neon.vercel.app/tpci_logo.svg";

  return `<script 
  src="https://bmc-neon.vercel.app/embed/loaders/charter-section-loader.js"
  data-background="${backgroundColor}"
  data-text-color="${textColor}"
  data-heading-color="${headingColor}"
  data-accent-color="${accentColor}"
  data-heading-font="${headingFont}"
  data-body-font="${bodyFont}"
  data-logo-src="${safeLogoSrc}"
  data-image-src="${safeImageSrc}">
</script>`;
};

/**
 * Default configuration for the Charter Section
 */
export const defaultCharterConfig = {
  backgroundColor: "#1e3553",
  textColor: "#ffffff",
  headingColor: "#ffffff",
  accentColor: "#d5ad36",
  headingFont: "serif",
  bodyFont: "sans-serif",
  logoSrc: "https://bmc-neon.vercel.app/tpci_logo.svg",
  imageSrc: "https://bmc-neon.vercel.app/chartersection_computer.jpg",
};
// src/components/PartnerBenefits/PartnersBenefitsShared.js

/**
 * Partners Benefits Shared Utilities and Code Templates
 */

/**
 * Helper to normalize imageSrc fallback logic
 * @param {string} imageSrc - The image source string
 * @returns {string} - Safe image URL
 */
export const getSafeImageUrl = (imageSrc) => {
  if (
    !imageSrc ||
    imageSrc ===
      "https://placehold.co/600x400/e6e6e6/1e4164?text=Partnership+diagram"
  ) {
    return "https://bmc-neon.vercel.app/trust_confidence.png";
  }
  return imageSrc;
};

/**
 * List of benefits shown in the Partners Benefits component
 */
export const partnersBenefitsList = [
  {
    text: "Confidence they've thoroughly addressed the issues that create partner conflict",
  },
  {
    text: "Specific ways to put their personal values and communication styles to practical, everyday use",
  },
  {
    text: "A document capturing their understandings, commitments, and agreements, which they can refer to whenever necessary",
  },
  {
    text: "Alignment on the future: where they're headed and their endgame",
  },
  {
    text: 'A document they can revisit periodically for partnership "check-ups"',
  },
];

/**
 * Generates the embed code for the Partners Benefits component
 * using the external loader approach
 * 
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - External script reference as a string
 */
export const generatePartnersBenefitsEmbedCode = (config) => {
  const {
    backgroundColor = "#f5f7fa",
    textColor = "#333333",
    headingColor = "#1e4164",
    accentColor = "#4a69dd",
    headingFont = "serif",
    bodyFont = "sans-serif",
    buttonColor = "#4a69dd",
    buttonRadius = 4,
    imageRadius = 8,
    imageSrc = "/trust_confidence.png"
  } = config || {};

  // Use the safe image URL
  const safeImageUrl = getSafeImageUrl(imageSrc);

  return `<script 
  src="https://bmc-neon.vercel.app/embed/loaders/partners-benefits-loader.js"
  data-background="${backgroundColor}"
  data-text-color="${textColor}"
  data-heading-color="${headingColor}"
  data-accent-color="${accentColor}"
  data-heading-font="${headingFont}"
  data-body-font="${bodyFont}"
  data-button-color="${buttonColor}"
  data-button-radius="${buttonRadius}"
  data-image-radius="${imageRadius}"
  data-image-src="${safeImageUrl}">
</script>`;
};

/**
 * Default configuration for the Partners Benefits section
 */
export const defaultPartnersBenefitsConfig = {
  backgroundColor: "#f5f7fa",
  textColor: "#333333",
  headingColor: "#1e4164",
  accentColor: "#4a69dd",
  headingFont: "serif",
  bodyFont: "sans-serif",
  buttonColor: "#4a69dd",
  buttonRadius: 4,
  imageRadius: 8,
  imageSrc: "/trust_confidence.png",
};

/**
 * React SVG component for the check icon
 */
export const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);
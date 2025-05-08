// src/components/DYPAdvantages/DYPAdvantagesShared.js

/**
 * DYP Advantages Shared Utilities and Code Templates
 */

/**
 * Shared accordion data for DYP Advantages block
 */
export const dypAdvantagesData = [
  {
    title: "Tailored workbooks",
    content:
      "The DYP tool makes it easy for Guides to tailor the content of the Workbook to match certain specifics of the partners' situation (e.g., the types of roles in their business, whether or not they have a Board).",
  },
  {
    title: "Virtual and in-person",
    content:
      "DYP has been used in-person, and virtually by partners and Guides separated by thousands of miles. It's equally effective regardless of whether partners and Guides are sitting at the same table or halfway around the globe.",
  },
  {
    title: "DYP technology",
    content:
      "The DYP technology makes it possible for Guides to effortlessly move partners' preparation into the draft templates, and even edit the partners' commitments and agreements as they are forming them.",
  },
  {
    title: "Guide Tips",
    content:
      "While Guides facilitate the partners' Joint Meetings, they have easy access to suggestions for helping partners discuss and negotiate issues, especially those that are complicated.",
  },
  {
    title: "Scheduling and navigation",
    content:
      "The custom-designed scheduling system and navigation windows allow each partner to be informed of each partner's progress, making it easier for the partners to maintain their momentum throughout the Charter process.",
  },
  {
    title: "Charter document",
    content:
      "When the partners complete the process, DYP gives them a beautifully formatted 60-90-page Charter document that memorializes the partners' understandings, commitments, and agreements.",
  },
  {
    title: "Joint Meetings",
    content:
      "Partners come to Joint Meetings completely prepared to share their ideas because they've answered the Workbook's 500 questions. That ensures they have amazingly thorough discussions and negotiations, unlike any they would have without that level of preparation.",
  },
  {
    title: "Secure platform",
    content:
      "The platform's secure system puts an end to partners and Guides emailing documents back and forth. Important, confidential documents are shared securely on the platform. The completed and signed Partnership Charter is available to each partner.",
  },
];

/**
 * Generates the embed code for the DYP Advantages component
 * using the external loader approach
 * 
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - External script reference as a string
 */
export const generateEmbedCode = (config) => {
  const {
    backgroundColor = "#103c68",
    textColor = "#ffffff",
    accentColor = "#fcb040",
    headingFont = "serif",
    bodyFont = "sans-serif",
    accordionRadius = 4,
    transitionSpeed = 0.3
  } = config || {};

  return `<script 
  src="https://bmc-neon.vercel.app/embed/loaders/dyp-advantages-loader.js"
  data-background="${backgroundColor}"
  data-text-color="${textColor}"
  data-accent-color="${accentColor}"
  data-heading-font="${headingFont}"
  data-body-font="${bodyFont}"
  data-accordion-radius="${accordionRadius}"
  data-transition-speed="${transitionSpeed}">
</script>`;
};
// src/components/BookPromo/BookPromoShared.js

/**
 * Book Promo Shared Utilities and Code Templates
 */

/**
 * Helper to normalize image/logo fallback logic
 * @param {string} src - The image source string
 * @param {string} type - The type of image (book/logo)
 * @returns {string} - Safe image URL
 */
export const getSafeImageUrl = (src, type) => {
  if (!src) {
    switch (type) {
      case "book":
        return "https://bmc-neon.vercel.app/book_partnership_charter.png";
      case "barnes":
        return "https://bmc-neon.vercel.app/logo_barnes_noble.png";
      case "google":
        return "https://bmc-neon.vercel.app/logo_google_play.png";
      case "amazon":
        return "https://bmc-neon.vercel.app/logo_amazon.png";
      case "indie":
        return "https://bmc-neon.vercel.app/logo_indie_bound.png";
      case "audible":
        return "https://bmc-neon.vercel.app/logo_audible.png";
      default:
        return src;
    }
  }
  // If source provided but matches local path, return CDN version
  if (src === "/book_partnership_charter.png") {
    return "https://bmc-neon.vercel.app/book_partnership_charter.png";
  }
  if (src === "/logo_barnes_noble.png") {
    return "https://bmc-neon.vercel.app/logo_barnes_noble.png";
  }
  if (src === "/logo_google_play.png") {
    return "https://bmc-neon.vercel.app/logo_google_play.png";
  }
  if (src === "/logo_amazon.png") {
    return "https://bmc-neon.vercel.app/logo_amazon.png";
  }
  if (src === "/logo_indie_bound.png") {
    return "https://bmc-neon.vercel.app/logo_indie_bound.png";
  }
  if (src === "/logo_audible.png") {
    return "https://bmc-neon.vercel.app/logo_audible.png";
  }
  return src;
};

/**
 * Generates the embed code for the Book Promo component
 * using the external loader approach
 * 
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - External script reference as a string
 */
export const generateBookPromoEmbedCode = (config) => {
  // Create a merged config with safe image URLs
  const {
    backgroundColor = "#CE950F",
    textColor = "#ffffff",
    headingFont = "serif",
    bodyFont = "sans-serif",
    borderRadius = 16,
    marginTop = 20,
    marginBottom = 20,
    bookImageSrc = "/book_partnership_charter.png",
    contactLink = "https://example.com/contact",
    barnesNobleLogo = "/logo_barnes_noble.png",
    googlePlayLogo = "/logo_google_play.png",
    amazonLogo = "/logo_amazon.png",
    indieBoundLogo = "/logo_indie_bound.png",
    audibleLogo = "/logo_audible.png",
    invertLogos = false
  } = config;

  // Process image URLs to ensure they're valid
  const safeBookImage = getSafeImageUrl(bookImageSrc, "book");
  const safeBarnesLogo = getSafeImageUrl(barnesNobleLogo, "barnes");
  const safeGoogleLogo = getSafeImageUrl(googlePlayLogo, "google");
  const safeAmazonLogo = getSafeImageUrl(amazonLogo, "amazon");
  const safeIndieLogo = getSafeImageUrl(indieBoundLogo, "indie");
  const safeAudibleLogo = getSafeImageUrl(audibleLogo, "audible");

  return `<script 
  src="https://bmc-neon.vercel.app/embed/loaders/book-promo-loader.js"
  data-background="${backgroundColor}"
  data-text-color="${textColor}"
  data-heading-font="${headingFont}"
  data-body-font="${bodyFont}"
  data-border-radius="${borderRadius}"
  data-margin-top="${marginTop}"
  data-margin-bottom="${marginBottom}"
  data-book-image="${safeBookImage}"
  data-contact-link="${contactLink}"
  data-barnes-logo="${safeBarnesLogo}"
  data-google-logo="${safeGoogleLogo}"
  data-amazon-logo="${safeAmazonLogo}"
  data-indie-logo="${safeIndieLogo}"
  data-audible-logo="${safeAudibleLogo}"
  data-invert-logos="${invertLogos}">
</script>`;
};

/**
 * Default configuration for the Book Promo section
 */
export const defaultBookPromoConfig = {
  backgroundColor: "#CE950F",
  textColor: "#ffffff",
  headingFont: "serif",
  bodyFont: "sans-serif",
  borderRadius: 16,
  marginTop: 20,
  marginBottom: 20,
  bookImageSrc: "https://bmc-neon.vercel.app/book_partnership_charter.png",
  contactLink: "https://example.com/contact",
  barnesNobleLogo: "https://bmc-neon.vercel.app/logo_barnes_noble.png",
  googlePlayLogo: "https://bmc-neon.vercel.app/logo_google_play.png",
  amazonLogo: "https://bmc-neon.vercel.app/logo_amazon.png",
  indieBoundLogo: "https://bmc-neon.vercel.app/logo_indie_bound.png",
  audibleLogo: "https://bmc-neon.vercel.app/logo_audible.png",
  invertLogos: false,
};
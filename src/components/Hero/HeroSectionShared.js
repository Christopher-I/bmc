/**
 * Shared utilities and functions for the Hero Section component
 */

/**
 * Default configuration for the Hero Section
 */
export const defaultHeroConfig = {
  backgroundImageUrl: "/hero_bg.png",
  overlayColor: "rgba(28, 67, 106, 0.7)",
  textColor: "#ffffff",
  headingFont: "serif",
  taglineText: "...never operate a partnership without one",
  logoUrl: "/phcg_logo.png",
  height: 80, // In vh units
};

/**
 * Generates embed code for the Hero Section
 * @param {Object} config - Configuration object with styling parameters
 * @param {string} type - Embed code type ('inline', 'css', or 'loader')
 * @returns {string} - HTML or script tag
 */
export const generateHeroEmbedCode = (config, type = "inline") => {
  if (type === "loader") {
    return generateHeroLoaderEmbedCode(config);
  }
  return type === "inline"
    ? generateInlineStylesCode(config)
    : generateCssClassesCode(config);
};

/**
 * Helper to ensure safe external URLs
 */
const getSafeUrl = (url, fallback) => {
  if (!url || url === "" || url.startsWith("/")) {
    return fallback;
  }
  return url;
};

/**
 * Generate external loader-based embed code
 */
const generateHeroLoaderEmbedCode = (config) => {
  const {
    backgroundImageUrl,
    overlayColor,
    textColor,
    headingFont,
    taglineText,
    logoUrl,
    height,
  } = config;

  return `<script 
  src="https://bmc-neon.vercel.app/embed/loaders/hero-loader.js"
  data-background-image="${getSafeUrl(
    backgroundImageUrl,
    "https://bmc-neon.vercel.app/hero_bg.png"
  )}"
  data-overlay-color="${overlayColor}"
  data-text-color="${textColor}"
  data-heading-font="${headingFont}"
  data-tagline-text="${taglineText}"
  data-logo-url="${getSafeUrl(
    logoUrl,
    "https://bmc-neon.vercel.app/phcg_logo.png"
  )}"
  data-height="${height || 80}">
</script>`;
};

/**
 * Generate embed code with inline styles
 */
const generateInlineStylesCode = (config) => {
  const {
    backgroundImageUrl,
    overlayColor,
    textColor,
    headingFont,
    taglineText,
    logoUrl,
    height,
  } = config;

  return `<div
  style="
    position: relative;
    width: 100%;
    height: ${height}vh;
    min-height: 600px;
    background-image: url('${backgroundImageUrl}');
    background-size: cover;
    background-position: center;
    color: ${textColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  "
>
  <!-- Dark overlay -->
  <div
    style="
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${overlayColor};
      z-index: 1;
    "
  ></div>

  <!-- Header bar - PHCG text in top left -->
  <div
    style="
      position: absolute;
      top: 0;
      left: 0;
      padding: 2rem 3rem;
      z-index: 3;
    "
  >
    <div
      style="
        font-size: 2rem;
        font-weight: bold;
        font-family: ${headingFont};
        letter-spacing: 1px;
      "
    >
      PHCG
    </div>
  </div>

  <!-- Main content - left aligned -->
  <div
    style="
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 3rem;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    "
  >
    <!-- Logo - left aligned -->
    <div
      style="
        width: 80px;
        height: 80px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.75rem;
        margin-bottom: 2rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      "
    >
      <img
        src="${logoUrl}"
        alt="PHCG Logo"
        style="
          width: 100%;
          height: auto;
        "
      />
    </div>

    <!-- Headings - left aligned -->
    <h1
      style="
        font-family: ${headingFont};
        font-size: 3.5rem;
        font-weight: normal;
        margin: 0 0 0.5rem;
        line-height: 1.2;
        text-align: left;
      "
    >
      A Partnership Charter™
    </h1>
    
    <h2
      style="
        font-family: ${headingFont};
        font-size: 2.8rem;
        font-weight: normal;
        margin: 0;
        line-height: 1.2;
        text-align: left;
      "
    >
      ${taglineText}
    </h2>
  </div>
</div>`;
};

/**
 * Generate embed code with CSS classes
 */
const generateCssClassesCode = (config) => {
  const {
    backgroundImageUrl,
    overlayColor,
    textColor,
    headingFont,
    taglineText,
    logoUrl,
    height,
  } = config;

  return `<!-- Hero Section Styles -->
<style>
  .hero-container {
    position: relative;
    width: 100%;
    height: ${height}vh;
    min-height: 600px;
    background-image: url('${backgroundImageUrl}');
    background-size: cover;
    background-position: center;
    color: ${textColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }
  
  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${overlayColor};
    z-index: 1;
  }
  
  .hero-header {
    position: absolute;
    top: 0;
    left: 0;
    padding: 2rem 3rem;
    z-index: 3;
  }
  
  .hero-brand {
    font-size: 2rem;
    font-weight: bold;
    font-family: ${headingFont};
    letter-spacing: 1px;
  }
  
  .hero-content {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 3rem;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  
  .hero-logo-container {
    width: 80px;
    height: 80px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem;
    margin-bottom: 2rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  .hero-logo {
    width: 100%;
    height: auto;
  }
  
  .hero-title {
    font-family: ${headingFont};
    font-size: 3.5rem;
    font-weight: normal;
    margin: 0 0 0.5rem;
    line-height: 1.2;
    text-align: left;
  }
  
  .hero-tagline {
    font-family: ${headingFont};
    font-size: 2.8rem;
    font-weight: normal;
    margin: 0;
    line-height: 1.2;
    text-align: left;
  }
  
  @media (max-width: 768px) {
    .hero-content {
      padding: 0 2rem;
    }
    
    .hero-brand {
      font-size: 1.5rem;
    }
    
    .hero-logo-container {
      width: 60px;
      height: 60px;
      margin-bottom: 1.5rem;
    }
    
    .hero-title {
      font-size: 2.5rem;
    }
    
    .hero-tagline {
      font-size: 2rem;
    }
  }
</style>

<!-- Hero Section HTML -->
<div class="hero-container">
  <div class="hero-overlay"></div>
  
  <div class="hero-header">
    <div class="hero-brand">PHCG</div>
  </div>
  
  <div class="hero-content">
    <div class="hero-logo-container">
      <img src="${logoUrl}" alt="PHCG Logo" class="hero-logo" />
    </div>
    
    <h1 class="hero-title">A Partnership Charter™</h1>
    <h2 class="hero-tagline">${taglineText}</h2>
  </div>
</div>`;
};

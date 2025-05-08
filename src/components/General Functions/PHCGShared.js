/**
 * Shared utilities and functions for the Post-haste Consulting Group components
 */

/**
 * Generates embed code for the Post-haste Consulting Group section
 * This function directly generates the complete HTML rather than a script loader
 *
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - Complete HTML code
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
    buttonUrl = "https://PHCG-associates.com",
  } = config || {};

  // Return the full HTML structure
  return `<div style="
    background-color: ${backgroundColor};
    color: ${textColor};
    padding: 3rem 2rem 5rem;
    font-family: ${bodyFont};
    box-sizing: border-box;
    width: 100%;
  ">
  <div style="max-width: 1200px; margin: 0 auto;">
    <!-- Title Section -->
    <div style="margin-bottom: 2rem;">
      <div style="
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
      ">
        ABOUT US
      </div>

      <h2 style="
        font-family: ${headingFont};
        color: ${textColor};
        line-height: 1.2;
        margin: 0;
        font-size: 2.5rem;
        font-weight: normal;
      ">
        Post-haste Consulting Group
      </h2>
    </div>

    <!-- Content Section -->
    <div style="max-width: 800px;">
      <p style="
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 1.5rem;
      ">
        Post Haste Consulting Group has been working with family and non-family
        business partners for years. Among our services to partners is the
        Partnership Charter (PC). We use the online Design Your Partnership TM
        tool not only because it's the best structured program for helping
        partners develop a comprehensive document that covers both the
        interpersonal and business sides of their relationship, but it's also
        the world's only such tool! Our professionals have been trained in
        the use of the PC methodology and are licensed by The Partnership
        Charter Institute to use the DYP tool so we can help you with your
        business partnership.
      </p>

      <p style="
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 2rem;
      ">
        PHCG used that information to begin focusing on conflict prevention
        among partners. Since around 2000, PHCG has offered two services to
        partners: conflict resolution and conflict prevention.
      </p>

      <a href="${buttonUrl}" style="
        background-color: ${buttonColor};
        color: #ffffff;
        padding: 0.75rem 1.5rem;
        border-radius: ${buttonRadius}px;
        text-decoration: none;
        display: inline-block;
        font-size: 1rem;
        font-family: ${bodyFont};
      ">
        ${buttonText}
      </a>
    </div>
  </div>
</div>`;
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
  buttonUrl: "https://PHCG-associates.com",
};

/**
 * Alternative method to generate embed code using CSS classes and a separate style tag
 * This approach may be more maintainable for some websites
 *
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - HTML with separate CSS
 */
export const generatePHCGEmbedCodeWithCSS = (config) => {
  const {
    backgroundColor = "#1C436A",
    textColor = "#ffffff",
    headingFont = "serif",
    bodyFont = "sans-serif",
    buttonColor = "#CE950F",
    buttonText = "More About Post-haste Consulting Group (PHCG)",
    buttonRadius = 4,
    buttonUrl = "https://PHCG-associates.com",
  } = config || {};

  return `<!-- PHCG Section Styles -->
<style>
  .phcg-container {
    background-color: ${backgroundColor};
    color: ${textColor};
    padding: 3rem 2rem 5rem;
    font-family: ${bodyFont};
    width: 100%;
    box-sizing: border-box;
  }
  
  .phcg-content-wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .phcg-subtitle {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }
  
  .phcg-heading {
    font-family: ${headingFont};
    color: ${textColor};
    font-size: 2.5rem;
    line-height: 1.2;
    margin: 0 0 2rem 0;
    font-weight: normal;
  }
  
  .phcg-content {
    max-width: 800px;
  }
  
  .phcg-paragraph {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
  .phcg-button {
    background-color: ${buttonColor};
    color: #ffffff;
    padding: 0.75rem 1.5rem;
    border-radius: ${buttonRadius}px;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    font-family: ${bodyFont};
  }
  
  .phcg-button:hover {
    opacity: 0.9;
  }
  
  @media (max-width: 768px) {
    .phcg-container {
      padding: 2rem 1.5rem 3rem;
    }
    
    .phcg-heading {
      font-size: 2rem;
    }
  }
</style>

<!-- PHCG Section HTML -->
<div class="phcg-container">
  <div class="phcg-content-wrapper">
    <div class="phcg-subtitle">ABOUT US</div>
    <h2 class="phcg-heading">Post-haste Consulting Group</h2>
    
    <div class="phcg-content">
      <p class="phcg-paragraph">
        Post Haste Consulting Group has been working with family and non-family
        business partners for years. Among our services to partners is the
        Partnership Charter (PC). We use the online Design Your Partnership TM
        tool not only because it's the best structured program for helping
        partners develop a comprehensive document that covers both the
        interpersonal and business sides of their relationship, but it's also
        the world's only such tool! Our professionals have been trained in
        the use of the PC methodology and are licensed by The Partnership
        Charter Institute to use the DYP tool so we can help you with your
        business partnership.
      </p>
      
      <p class="phcg-paragraph">
        PHCG used that information to begin focusing on conflict prevention
        among partners. Since around 2000, PHCG has offered two services to
        partners: conflict resolution and conflict prevention.
      </p>
      
      <a href="${buttonUrl}" class="phcg-button">${buttonText}</a>
    </div>
  </div>
</div>`;
};

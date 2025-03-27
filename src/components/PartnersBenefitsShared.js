// PartnersBenefitsShared.js - Shared utilities and code templates for Partners Benefits section

/**
 * Generates the CSS styles for the Partners Benefits component
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - CSS styles as a string
 */
export const generatePartnersBenefitsStyles = (config) => {
  return `
    .pb-container {
      background-color: ${config.backgroundColor || "#f5f7fa"};
      color: ${config.textColor || "#333333"};
      font-family: ${config.bodyFont || "sans-serif"};
      padding: 8rem 2rem;
      max-width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .pb-content-wrapper {
      max-width: 1200px;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      gap: 6rem;
      margin: 0 auto;
    }
    
    .pb-image-container {
      flex: 0 0 38%;
      max-width: 38%;
    }
    
    .pb-image {
      width: 100%;
      height: auto;
      border-radius: ${config.imageRadius || 8}px;
      background-color: #eeeeee;
    }
    
    .pb-content {
      flex: 0 0 50%;
      max-width: 50%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    
    .pb-heading {
      font-family: ${config.headingFont || "serif"};
      font-size: 2.5rem;
      line-height: 1.2;
      margin: 0;
      color: ${config.headingColor || config.textColor || "#333333"};
    }
    
    .pb-benefit-list {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      padding: 0;
      margin: 0;
      list-style: none;
    }
    
    .pb-benefit-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }
    
    .pb-check-icon {
      flex-shrink: 0;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: ${config.accentColor || "#4a69dd"};
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      margin-top: 0.2rem;
    }
    
    .pb-benefit-text {
      font-size: 1.1rem;
      line-height: 1.5;
      margin: 0;
    }
    
    .pb-button {
      display: inline-block;
      padding: 0.9rem 2.5rem;
      background-color: ${
        config.buttonColor || config.accentColor || "#4a69dd"
      };
      color: white;
      text-decoration: none;
      border-radius: ${config.buttonRadius || 4}px;
      font-family: ${config.bodyFont || "sans-serif"};
      font-size: 1rem;
      border: none;
      cursor: pointer;
      transition: background-color 0.2s ease;
      margin-top: 1.5rem;
      align-self: flex-start;
      font-weight: 500;
    }
    
    .pb-button:hover {
      background-color: ${
        config.buttonHoverColor ||
        `${config.buttonColor || config.accentColor || "#4a69dd"}dd`
      };
    }
    
    @media (max-width: 900px) {
      .pb-content-wrapper {
        flex-direction: column;
        gap: 3rem;
      }
      
      .pb-image-container {
        max-width: 80%;
        order: 1;
      }
      
      .pb-content {
        max-width: 90%;
        order: 2;
      }
      
      .pb-heading {
        font-size: 2rem;
        text-align: center;
      }
      
      .pb-button {
        align-self: center;
      }
    }
  `;
};

/**
 * Generates the HTML content for the Partners Benefits component
 * @param {Object} config - Configuration object with content parameters
 * @returns {string} - HTML content as a string
 */
export const generatePartnersBenefitsHTML = (config) => {
  return `
    <div class="pb-content-wrapper">
      <div class="pb-image-container">
        <img class="pb-image" src="${
          config.imageSrc
        }" alt="Partnership Trust Diagram">
      </div>
      <div class="pb-content">
        <h2 class="pb-heading">Partners get exactly what they're looking for</h2>
        <ul class="pb-benefit-list">
          <li class="pb-benefit-item">
            <div class="pb-check-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <p class="pb-benefit-text">Confidence they've thoroughly addressed the issues that create partner conflict</p>
          </li>
          <li class="pb-benefit-item">
            <div class="pb-check-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <p class="pb-benefit-text">Specific ways to put their personal values and communication styles to practical, everyday use</p>
          </li>
          <li class="pb-benefit-item">
            <div class="pb-check-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <p class="pb-benefit-text">A document capturing their understandings, commitments, and agreements, which they can refer to whenever necessary</p>
          </li>
          <li class="pb-benefit-item">
            <div class="pb-check-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <p class="pb-benefit-text">Alignment on the future: where they're headed and their endgame</p>
          </li>
          <li class="pb-benefit-item">
            <div class="pb-check-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <p class="pb-benefit-text">A document they can revisit periodically for partnership "check-ups"</p>
          </li>
        </ul>
     
      </div>
    </div>
  `;
};

/**
 * Generates the complete embed code for the Partners Benefits component
 * @param {Object} config - Configuration object with all parameters
 * @returns {string} - Complete embed code as a string
 */
export const generatePartnersBenefitsEmbedCode = (config) => {
  // Force the image URL to the Vercel URL if it matches the placeholder
  const imageUrl =
    config.imageSrc === "https://placehold.co/600x400/e6e6e6/1e4164?text=Partnership+diagram"
      ? "https://bmc-neon.vercel.app/trust_confidence.png"
      : config.imageSrc;

  return `<script>
(function() {
  // Configuration from data attributes
  const config = {
    backgroundColor: "${config.backgroundColor || "#f5f7fa"}",
    textColor: "${config.textColor || "#333333"}",
    headingColor: "${config.headingColor || "#1e4164"}",
    accentColor: "${config.accentColor || "#4a69dd"}",
    headingFont: "${config.headingFont || "serif"}",
    bodyFont: "${config.bodyFont || "sans-serif"}",
    buttonColor: "${config.buttonColor || "#4a69dd"}",
    buttonRadius: "${config.buttonRadius || 4}",
    imageRadius: "${config.imageRadius || 8}",
    imageSrc: "${imageUrl}"
  };
  
  // Create container element
  const container = document.createElement('div');
  container.classList.add('pb-container');
  
  // Create shadow DOM for style isolation
  const shadow = container.attachShadow({ mode: 'open' });
  
  // Add styles
  const style = document.createElement('style');
  style.textContent = \`${generatePartnersBenefitsStyles(config)}\`;
  
  // Create HTML content
  const content = document.createElement('div');
  content.classList.add('pb-container');
  content.innerHTML = \`${generatePartnersBenefitsHTML(config)}\`;
  
  // Append style and content to shadow DOM
  shadow.appendChild(style);
  shadow.appendChild(content);
  
  // Replace script tag with our container
  document.currentScript.parentNode.replaceChild(container, document.currentScript);
})();
</script>`;
};



/**
 * Generates a reference to the external script with data attributes
 * @param {Object} config - Configuration object with all parameters
 * @returns {string} - Script tag referencing external file with data attributes
 */
export const generateExternalScriptReference = (config) => {
  // For external embedding, always use the full Vercel URL
  const imageUrl = config.imageSrc || "https://bmc-neon.vercel.app/trust_confidence.png";


  return `<script 
  src="https://bmc-neon.vercel.app/embed/partners-benefits-section.js" 
  data-background="${config.backgroundColor || "#f5f7fa"}"
  data-text-color="${config.textColor || "#333333"}"
  data-heading-color="${config.headingColor || "#1e4164"}"
  data-accent-color="${config.accentColor || "#4a69dd"}"
  data-heading-font="${config.headingFont || "serif"}"
  data-body-font="${config.bodyFont || "sans-serif"}"
  data-button-color="${config.buttonColor || "#4a69dd"}"
  data-button-radius="${config.buttonRadius || 4}"
  data-image-radius="${config.imageRadius || 8}"
  data-image-src="${imageUrl}">
</script>`;
};

// Default configuration for the Partners Benefits component
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

// Benefits data that can be used by both the preview and generator
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
 * React utility to generate the SVG checkmark icon
 * @returns {JSX.Element} - SVG checkmark component
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

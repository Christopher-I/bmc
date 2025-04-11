// PartnersBenefitsShared.js - Shared utilities and code templates for Partners Benefits section

/**
 * Helper to normalize imageSrc fallback logic
 * @param {string} imageSrc - The image source string
 * @returns {string} - Safe image URL
 */
export const getSafeImageUrl = (imageSrc) => {
  if (!imageSrc || imageSrc === "https://placehold.co/600x400/e6e6e6/1e4164?text=Partnership+diagram") {
    return "https://bmc-neon.vercel.app/trust_confidence.png";
  }
  return imageSrc;
};

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
      background-color: ${config.buttonColor || config.accentColor || "#4a69dd"};
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
      background-color: ${config.buttonHoverColor || `${config.buttonColor || config.accentColor || "#4a69dd"}dd`};
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

export const generatePartnersBenefitsHTML = (config) => {
  return `
    <div class="pb-content-wrapper">
      <div class="pb-image-container">
        <img class="pb-image" src="${config.imageSrc}" alt="Partnership Trust Diagram">
      </div>
      <div class="pb-content">
        <h2 class="pb-heading">Partners get exactly what they're looking for</h2>
        <ul class="pb-benefit-list">
          ${partnersBenefitsList.map(benefit => `
            <li class="pb-benefit-item">
              <div class="pb-check-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <p class="pb-benefit-text">${benefit.text}</p>
            </li>`).join('')}
        </ul>
      </div>
    </div>
  `;
};

export const generatePartnersBenefitsEmbedCode = (config) => {
  const imageUrl = getSafeImageUrl(config.imageSrc);
  const mergedConfig = { ...config, imageSrc: imageUrl };

  return `<script>
(function() {
  const config = ${JSON.stringify(mergedConfig)};

  const container = document.createElement('div');
  container.classList.add('pb-container');

  const shadow = container.attachShadow({ mode: 'open' });

  const style = document.createElement('style');
  style.textContent = \`${generatePartnersBenefitsStyles(mergedConfig)}\`;

  const content = document.createElement('div');
  content.classList.add('pb-container');
  content.innerHTML = \`${generatePartnersBenefitsHTML(mergedConfig)}\`;

  shadow.appendChild(style);
  shadow.appendChild(content);

  document.currentScript.parentNode.replaceChild(container, document.currentScript);
})();
</script>`;
};

export const generateExternalScriptReference = (config) => {
  const imageUrl = getSafeImageUrl(config.imageSrc);

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

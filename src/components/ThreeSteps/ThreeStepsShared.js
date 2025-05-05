// src/components/ThreeSteps/ThreeStepsShared.js

/**
 * Three Steps Shared Utilities and Code Templates
 */

/**
 * Helper to normalize iconSrc fallback logic
 * @param {string} iconSrc - The icon source string
 * @param {string} iconName - The name of the icon (discover, discuss, document)
 * @returns {string} - Safe icon URL
 */
export const getSafeIconUrl = (iconSrc, iconName) => {
  const stepNumber = iconName === "discover" ? "1" : iconName === "discuss" ? "2" : "3";
  const defaultUrl = `/step${stepNumber}.png`;
  
  if (!iconSrc || iconSrc === defaultUrl) {
    return defaultUrl;
  }
  return iconSrc;
};

/**
 * Generates the CSS styles for the Three Steps component
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - CSS styles as a string
 */
export const generateThreeStepsStyles = (config) => {
  return `
    .three-steps-container {
      background-color: ${config.backgroundColor || "#ffffff"};
      color: ${config.textColor || "#333333"};
      font-family: ${config.bodyFont || "sans-serif"};
      padding: 4rem 2rem;
      max-width: 100%;
      box-sizing: border-box;
    }

    .three-steps-wrapper {
      max-width: 1400px;
      width: 100%;
      margin: 0 auto;
    }

    .three-steps-heading {
      font-family: ${config.headingFont || "serif"};
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 5rem;
      color: ${config.headingColor || "#333333"};
      text-align: center;
      max-width: 900px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.2;
    }

    .three-steps-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin: 0 auto;
    }

    .step-card {
      background-color: ${config.cardBackgroundColor || "#E5E7EA"};
      border-radius: 12px;
      padding: 2rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      ${config.cardShadow ? "box-shadow: 0 2px 4px rgba(0,0,0,0.1);" : ""}
      position: relative;
    }

    .step-badge {
      background-color: ${config.stepBadgeColor || "#ABB9C7"};
      color: ${config.stepBadgeTextColor || "#ffffff"};
      padding: 4px 6px;
      border-radius: 4px;
      font-size: 0.65rem;
      font-weight: bold;
      display: inline-block;
      margin-bottom: 0.5rem;
      letter-spacing: 0.5px;
      width: 60px;
    }

    .step-title {
      font-family: ${config.headingFont || "serif"};
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 1rem;
      color: ${config.headingColor || "#333333"};
      border-bottom: 2px solid #CE950F;
      padding-bottom: 0.5rem;
      margin-top: 1rem;
    }

    .step-content {
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      flex: 1;
      margin-top: 1rem;
      color: #4A4A4A;
      padding-bottom: 3rem;
    }

    .step-icon-container {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0;
      margin: 0;
    }

    .step-icon {
      width: 48px;
      height: 48px;
      object-fit: contain;
      display: block;
      vertical-align: bottom;
    }

    @media (max-width: 900px) {
      .three-steps-heading {
        font-size: 2rem;
      }
      
      .three-steps-grid {
        grid-template-columns: 1fr;
      }
    }
  `;
};

/**
 * Generates the HTML for the Three Steps component
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - HTML content as a string
 */
export const generateThreeStepsHTML = (config) => {
  const steps = [
    {
      number: "1",
      title: "Discover",
      content: "The PC Workbook is like a short course in partnerships. It touches every critical topic and on their own partners discover the issues and enter their thoughts – the first step in designing a healthy, resilient partnership.",
      iconName: "discover"
    },
    {
      number: "2",
      title: "Discuss",
      content: "Going back and forth – sharing and listening – each partner reveals their thoughts about what's important to them. They creatively discover what works for them and build a foundation based on everyone's ideas.",
      iconName: "discuss"
    },
    {
      number: "3",
      title: "Document",
      content: "The partners' Guides edit what was generated in the Joint Meetings. The platform helps draft a 70-100 page Charter that memorializes the partners' understandings, commitments and agreements.",
      iconName: "document"
    }
  ];

  return `
    <div class="three-steps-wrapper">
      <h2 class="three-steps-heading">Design any complex partnership in 3 simple steps using the Charter process</h2>
      
      <div class="three-steps-grid">
        ${steps.map(step => `
          <div class="step-card">
            <div>
              <span class="step-badge">STEP ${step.number}</span>
            </div>
            
            <h3 class="step-title">${step.title}</h3>
            
            <p class="step-content">
              ${step.content}
            </p>
            
            <div class="step-icon-container">
              <img class="step-icon" src="${config[`${step.iconName}IconSrc`]}" alt="${step.title} icon">
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
};

/**
 * Generates the embed code for the Three Steps component
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - Embed script as a string
 */
export const generateThreeStepsEmbedCode = (config) => {
  const mergedConfig = {
    ...config,
    discoverIconSrc: getSafeIconUrl(config.discoverIconSrc, "discover"),
    discussIconSrc: getSafeIconUrl(config.discussIconSrc, "discuss"),
    documentIconSrc: getSafeIconUrl(config.documentIconSrc, "document")
  };

  return `<script>
(function() {
  const config = ${JSON.stringify(mergedConfig)};

  const container = document.createElement('div');
  container.classList.add('three-steps-container');

  const shadow = container.attachShadow({ mode: 'open' });

  const style = document.createElement('style');
  style.textContent = \`${generateThreeStepsStyles(mergedConfig)}\`;

  const content = document.createElement('div');
  content.classList.add('three-steps-container');
  content.innerHTML = \`${generateThreeStepsHTML(mergedConfig)}\`;

  shadow.appendChild(style);
  shadow.appendChild(content);

  document.currentScript.parentNode.replaceChild(container, document.currentScript);
})();
</script>`;
};

/**
 * Default configuration for the Three Steps section
 */
export const defaultThreeStepsConfig = {
  backgroundColor: "#ffffff",
  textColor: "#333333",
  headingColor: "#333333",
  cardBackgroundColor: "#E5E7EA",
  stepBadgeColor: "#ABB9C7",
  stepBadgeTextColor: "#ffffff",
  headingFont: "serif",
  bodyFont: "sans-serif",
  discoverIconSrc: "/step1.png",
  discussIconSrc: "/step2.png",
  documentIconSrc: "/step3.png",
  cardShadow: false,
};
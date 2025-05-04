// src/components/AssistanceLevels/AssistanceLevelsShared.js

/**
 * Assistance Levels Shared Utilities and Code Templates
 */

/**
 * Helper to normalize imageSrc fallback logic
 * @param {string} imageSrc - The image source string
 * @returns {string} - Safe image URL
 */
export const getSafeImageUrl = (imageSrc) => {
  if (!imageSrc || imageSrc === "/assistance_levels_diagram.png") {
    return "https://bmc-neon.vercel.app/assistance_levels_diagram.png"; // Fallback to a hosted image
  }
  return imageSrc;
};

/**
 * Generates the CSS styles for the Assistance Levels component
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - CSS styles as a string
 */
export const generateAssistanceLevelsStyles = (config) => {
  return `
      .assistance-levels-container {
        background-color: ${config.backgroundColor || "#ffffff"};
        color: ${config.textColor || "#333333"};
        font-family: ${config.bodyFont || "sans-serif"};
        padding: 4rem 2rem;
        max-width: 100%;
        box-sizing: border-box;
      }
  
      .assistance-levels-wrapper {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
      }
  
      .assistance-levels-main-heading {
        font-family: ${config.headingFont || "serif"};
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
        color: ${config.headingColor || "#333333"};
        text-align: center;
      }
  
      .assistance-levels-subheading {
        font-size: 1.25rem;
        line-height: 1.6;
        margin-bottom: 3rem;
        text-align: center;
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
      }
  
      .assistance-levels-content {
        display: flex;
        flex-direction: row;
        gap: 3rem;
        align-items: flex-start;
      }
  
      .assistance-levels-image-container {
        flex: 0 0 58%;
      }
  
      .assistance-levels-image {
        width: 50%;
        height: auto;
        border-radius: ${config.imageRadius || 8}px;
      }
  
      .assistance-levels-text-content {
        flex: 0 0 42%;
      }
  
      .assistance-section {
        margin-bottom: 2rem;
      }
  
      .assistance-section:last-child {
        margin-bottom: 0;
      }
  
      .assistance-section-heading {
        font-family: ${config.headingFont || "serif"};
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: ${config.headingColor || "#333333"};
      }
  
      .assistance-section-text {
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 1rem;
      }
  
      .assistance-section-text:last-child {
        margin-bottom: 0;
      }
  
      @media (max-width: 900px) {
        .assistance-levels-content {
          flex-direction: column;
          gap: 2rem;
        }
  
        .assistance-levels-image-container {
          flex: none;
          order: 1;
        }
  
        .assistance-levels-text-content {
          flex: none;
          order: 2;
        }
  
        .assistance-levels-main-heading {
          font-size: 2rem;
        }
  
        .assistance-levels-subheading {
          font-size: 1.1rem;
        }
      }
    `;
};

/**
 * Generates the HTML for the Assistance Levels component
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - HTML content as a string
 */
export const generateAssistanceLevelsHTML = (config) => {
  return `
      <div class="assistance-levels-wrapper">
        <h2 class="assistance-levels-main-heading">Partners get the level of assistance they need</h2>
        
        <p class="assistance-levels-subheading">
          Partners can select the level of assistance that's best for them as they navigate the Charter process, from limited support, all the way to full, comprehensive guidance.
        </p>
  
        <div class="assistance-levels-content">
          <div class="assistance-levels-image-container">
            <img class="assistance-levels-image" src="${config.imageSrc}" alt="Partnership Assistance Levels">
          </div>
  
          <div class="assistance-levels-text-content">
            <div class="assistance-section">
              <h3 class="assistance-section-heading">Guided</h3>
              <p class="assistance-section-text">
                Either one or two "Guides" (advisors who manage the entire process from start to finish) keep the partners progressing, make sure they don't skip over any sensitive or difficult conversations, document their understandings and agreements, and write and revise the Charter drafts.
              </p>
              <p class="assistance-section-text">
                The Guides also ensure partners thoroughly understand the complexity of their partnership, and the connections among the 13 critical elements.
              </p>
            </div>
  
            <div class="assistance-section">
              <h3 class="assistance-section-heading">Partially Guided</h3>
              <p class="assistance-section-text">
                Partners with limited financial resources, or a "do-it-ourselves" flair can elect to do some or all the work on their own. Partners use the same Workbook and templates, but must facilitate their own discussions and negotiations, and be responsible for drafting their Charter.
              </p>
              <p class="assistance-section-text">
                With a licensed PC advisor in the wings, partners do have the option of requesting facilitation with some of their negotiations, or converting to a Guided Charter if they get bogged down anywhere in the process. DYP allows that to happen seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
};

/**
 * Generates the embed code for the Assistance Levels component
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - Embed script as a string
 */
export const generateAssistanceLevelsEmbedCode = (config) => {
  const imageUrl = getSafeImageUrl(config.imageSrc);
  const mergedConfig = { ...config, imageSrc: imageUrl };

  return `<script>
  (function() {
    const config = ${JSON.stringify(mergedConfig)};
  
    const container = document.createElement('div');
    container.classList.add('assistance-levels-container');
  
    const shadow = container.attachShadow({ mode: 'open' });
  
    const style = document.createElement('style');
    style.textContent = \`${generateAssistanceLevelsStyles(mergedConfig)}\`;
  
    const content = document.createElement('div');
    content.classList.add('assistance-levels-container');
    content.innerHTML = \`${generateAssistanceLevelsHTML(mergedConfig)}\`;
  
    shadow.appendChild(style);
    shadow.appendChild(content);
  
    document.currentScript.parentNode.replaceChild(container, document.currentScript);
  })();
  </script>`;
};

/**
 * Generates the external script reference for the Assistance Levels component
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - External script reference as a string
 */
export const generateExternalScriptReference = (config) => {
  const imageUrl = getSafeImageUrl(config.imageSrc);

  return `<script 
    src="https://your-domain.com/assistance-levels.js" 
    data-background="${config.backgroundColor || "#ffffff"}"
    data-text-color="${config.textColor || "#333333"}"
    data-heading-color="${config.headingColor || "#333333"}"
    data-accent-color="${config.accentColor || "#0066B2"}"
    data-heading-font="${config.headingFont || "serif"}"
    data-body-font="${config.bodyFont || "sans-serif"}"
    data-image-radius="${config.imageRadius || 8}"
    data-image-src="${imageUrl}">
  </script>`;
};

/**
 * Default configuration for the Assistance Levels section
 */
export const defaultAssistanceLevelsConfig = {
  backgroundColor: "#ffffff",
  textColor: "#333333",
  headingColor: "#333333",
  accentColor: "#0066B2",
  headingFont: "serif",
  bodyFont: "sans-serif",
  imageRadius: 8,
  imageSrc: "/assistance_levels_diagram.png",
};

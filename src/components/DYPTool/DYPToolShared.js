/**
 * DYP Tool Shared Utilities and Code Templates
 */

/**
 * Helper to normalize imageSrc fallback logic
 * @param {string} imageSrc - The image source string
 * @returns {string} - Safe image URL
 */
export const getSafeImageUrl = (imageSrc) => {
  if (!imageSrc || imageSrc === "/dyp_tool.png") {
    return "https://PHCG-neon.vercel.app/dyp_tool.png"; // Fallback to a hosted image
  }
  return imageSrc;
};

/**
 * Generates the CSS styles for the DYP Tool component
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - CSS styles as a string
 */
export const generateDYPToolStyles = (config) => {
  return `
    .dyp-tool-container {
      background-color: ${config.backgroundColor || "#ecf0f1"};
      color: ${config.textColor || "#2c3e50"};
      font-family: ${config.bodyFont || "sans-serif"};
      padding: 4rem 2rem;
      max-width: 100%;
      box-sizing: border-box;
    }

    .dyp-tool-wrapper {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 2rem;
    }

    .dyp-tool-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .dyp-tool-heading {
      font-family: ${config.headingFont || "serif"};
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
      color: ${config.textColor || "#2c3e50"};
    }

    .dyp-tool-text {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .dyp-tool-image-container {
      flex: 1;
      display: flex;
      justify-content: center;
    }

    .dyp-tool-image {
      width: 100%;
      max-width: 500px;
      height: auto;
      border-radius: ${config.imageRadius || 8}px;
      background-color: #eeeeee;
    }

    @media (max-width: 900px) {
      .dyp-tool-wrapper {
        flex-direction: column;
        gap: 2rem;
      }

      .dyp-tool-content {
        order: 1;
      }

      .dyp-tool-image-container {
        order: 2;
      }

      .dyp-tool-heading {
        font-size: 2rem;
        text-align: center;
      }

      .dyp-tool-image {
        max-width: 100%;
      }
    }
  `;
};

/**
 * Generates the HTML for the DYP Tool component
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - HTML content as a string
 */
export const generateDYPToolHTML = (config) => {
  return `
    <div class="dyp-tool-wrapper">
      <div class="dyp-tool-content">
        <h2 class="dyp-tool-heading">The DYP tool</h2>
        <p class="dyp-tool-text">
          The DYP™ tool puts the Partnership Charter process into action.
          Each of the 3 PC steps has a corresponding part in the DYP tool.
        </p>
        <p class="dyp-tool-text">
          The PC's been employed and refined with hundreds of partners. In the world of
          business partners, the PC process and the DYP tool are unique.
        </p>
        <p class="dyp-tool-text">
          There’s nothing like it for entrepreneurs who want to understand both the business
          and interpersonal sides of their partnerships. Most partners know both sides exist
          and having a tool to thoroughly address them is incredibly advantageous.
        </p>
      </div>
      <div class="dyp-tool-image-container">
        <img class="dyp-tool-image" src="${config.imageSrc}" alt="DYP Process Diagram">
      </div>
    </div>
  `;
};

/**
 * Generates the embed code for the DYP Tool component
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - Embed script as a string
 */
export const generateDYPToolEmbedCode = (config) => {
  const imageUrl = getSafeImageUrl(config.imageSrc);
  const mergedConfig = { ...config, imageSrc: imageUrl };

  return `<script>
(function() {
  const config = ${JSON.stringify(mergedConfig)};

  const container = document.createElement('div');
  container.classList.add('dyp-tool-container');

  const shadow = container.attachShadow({ mode: 'open' });

  const style = document.createElement('style');
  style.textContent = \`${generateDYPToolStyles(mergedConfig)}\`;

  const content = document.createElement('div');
  content.classList.add('dyp-tool-container');
  content.innerHTML = \`${generateDYPToolHTML(mergedConfig)}\`;

  shadow.appendChild(style);
  shadow.appendChild(content);

  document.currentScript.parentNode.replaceChild(container, document.currentScript);
})();
</script>`;
};

/**
 * Generates the external script reference for the DYP Tool component
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - External script reference as a string
 */
export const generateExternalScriptReference = (config) => {
  const imageUrl = getSafeImageUrl(config.imageSrc);

  return `<script 
  src="https://PHCG-neon.vercel.app/dyp_tool.pngg" 
  data-background="${config.backgroundColor || "#ecf0f1"}"
  data-text-color="${config.textColor || "#2c3e50"}"
  data-heading-font="${config.headingFont || "serif"}"
  data-body-font="${config.bodyFont || "sans-serif"}"
  data-image-radius="${config.imageRadius || 8}"
  data-image-src="${imageUrl}">
</script>`;
};

/**
 * Default configuration for the DYP Tool section
 */
export const defaultDYPToolConfig = {
  backgroundColor: "#ecf0f1",
  textColor: "#2c3e50",
  headingFont: "serif",
  bodyFont: "sans-serif",
  imageRadius: 8,
  imageSrc: "https://PHCG-neon.vercel.app/dyp_tool.png",
};

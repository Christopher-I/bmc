/**
 * Generates the CSS styles for the DYP Tool section
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string}
 */
export const generateDYPToolStyles = (config) => {
    return `
      .dyp-tool-container {
        background-color: ${config.backgroundColor};
        color: ${config.textColor};
        font-family: ${config.bodyFont};
        padding: 2rem;
        box-sizing: border-box;
        max-width: 100%;
      }
  
      .dyp-grid {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
  
      @media(min-width: 768px) {
        .dyp-grid {
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
      }
  
      .dyp-text-content {
        flex: 1;
        text-align: left;
      }
  
      .dyp-heading {
        font-family: ${config.headingFont};
        font-size: 2rem;
        margin-bottom: 1rem;
      }
  
      .dyp-paragraph {
        margin-bottom: 1rem;
        line-height: 1.6;
        font-size: 1rem;
      }
  
      .dyp-image {
        max-width: 500px;
        width: 100%;
        border-radius: ${config.imageRadius || 8}px;
        display: block;
        margin: 0 auto;
      }
    `;
  };
  
  /**
   * Generates the HTML for the DYP Tool section
   * @param {Object} config - Configuration object with content parameters
   * @returns {string}
   */
  export const generateDYPToolHTML = (config) => {
    return `
      <div class="dyp-tool-container">
        <div class="dyp-grid">
          <div class="dyp-text-content">
            <h2 class="dyp-heading">The DYP tool</h2>
            <p class="dyp-paragraph">
              The DYP™ tool puts the Partnership Charter process into action.
              Each of the 3 PC steps has a corresponding part in the DYP tool.
            </p>
            <p class="dyp-paragraph">
              The PC's been employed and refined with hundreds of partners.
              In the world of business partners, the PC process and the DYP tool are unique.
            </p>
            <p class="dyp-paragraph">
              There’s nothing like it for entrepreneurs who want to understand both the business
              and interpersonal sides of their partnerships. Most partners know both sides exist
              and having a tool to thoroughly address them is incredibly advantageous.
            </p>
          </div>
          <div class="dyp-image-content">
            <img class="dyp-image" src="${config.imageSrc}" alt="DYP Tool Diagram" />
          </div>
        </div>
      </div>
    `;
  };
  
  /**
   * Generates the full embed script for the DYP Tool section
   * @param {Object} config - Configuration object
   * @returns {string}
   */
  export const generateDYPToolEmbedCode = (config) => {
    return `<script>
      (function () {
        const config = {
          backgroundColor: "${config.backgroundColor}",
          textColor: "${config.textColor}",
          headingFont: "${config.headingFont}",
          bodyFont: "${config.bodyFont}",
          imageSrc: "${config.imageSrc}",
          imageRadius: ${config.imageRadius || 8}
        };
  
        const container = document.createElement("div");
        const shadow = container.attachShadow({ mode: "open" });
  
        const style = document.createElement("style");
        style.textContent = \`${generateDYPToolStyles(config)}\`;
  
        const content = document.createElement("div");
        content.innerHTML = \`${generateDYPToolHTML(config)}\`;
  
        shadow.appendChild(style);
        shadow.appendChild(content);
  
        document.currentScript.parentNode.replaceChild(container, document.currentScript);
      })();
    </script>`;
  };
  
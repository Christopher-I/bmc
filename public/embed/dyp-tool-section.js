/**
 * BMC Associates DYP Tool Section Embed Script
 *
 * This script creates an embeddable section for the DYP Tool
 * with a two-column layout.
 */

(function () {
  // Get current script tag
  const currentScript = document.currentScript;

  // Get configuration from data attributes
  const config = {
    backgroundColor: currentScript.getAttribute("data-background") || "#ecf0f1",
    textColor: currentScript.getAttribute("data-text-color") || "#2c3e50",
    headingFont: currentScript.getAttribute("data-heading-font") || "serif",
    bodyFont: currentScript.getAttribute("data-body-font") || "sans-serif",
    imageRadius: currentScript.getAttribute("data-image-radius") || "8",
    imageSrc:
      currentScript.getAttribute("data-image-src") ||
      "https://bmc-neon.vercel.app/dyp_tool.png",
  };

  // Create container element
  const container = document.createElement("div");

  // Create shadow DOM for style isolation
  const shadow = container.attachShadow({ mode: "open" });

  // Add styles
  const style = document.createElement("style");
  style.textContent = `
      .dyp-tool-container {
        background-color: ${config.backgroundColor};
        color: ${config.textColor};
        font-family: ${config.bodyFont};
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
        font-family: ${config.headingFont};
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: ${config.textColor};
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
        border-radius: ${config.imageRadius}px;
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

  // Create content elements
  const content = document.createElement("div");
  content.classList.add("dyp-tool-container");
  content.innerHTML = `
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

  // Append style and content to shadow DOM
  shadow.appendChild(style);
  shadow.appendChild(content);

  // Replace script tag with our container
  currentScript.parentNode.replaceChild(container, currentScript);
})();

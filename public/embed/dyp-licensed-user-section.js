/**
 * DYP Licensed User Block Embed Script
 *
 * This script creates an embeddable section showing an organization is a licensed
 * user of Design Your Partnership™ that can be customized via data attributes
 * on the script tag.
 *
 * Usage:
 * <script
 *   src="https://yourwebsite.com/embed/dyp-licensed-user-section.js"
 *   data-background="#1e3553"
 *   data-text-color="#ffffff"
 *   data-accent-color="#d5ad36"
 *   data-heading-font="serif"
 *   data-body-font="sans-serif"
 *   data-button-text="Contact BMC"
 *   data-button-radius="4"
 *   data-organization-name="BMC"
 *   data-button-url="#"
 *   data-logo-url="https://bmc-neon.vercel.app/dyp_logo.png">
 * </script>
 */

(function () {
  // Get current script tag
  const currentScript = document.currentScript;

  // Get configuration from data attributes
  const config = {
    backgroundColor: currentScript.getAttribute("data-background") || "#1e3553",
    textColor: currentScript.getAttribute("data-text-color") || "#ffffff",
    accentColor: currentScript.getAttribute("data-accent-color") || "#d5ad36",
    headingFont: currentScript.getAttribute("data-heading-font") || "serif",
    bodyFont: currentScript.getAttribute("data-body-font") || "sans-serif",
    buttonText:
      currentScript.getAttribute("data-button-text") || "Contact PHCG",
    buttonRadius: currentScript.getAttribute("data-button-radius") || "4",
    organizationName:
      currentScript.getAttribute("data-organization-name") || "PHCG",
    buttonUrl: currentScript.getAttribute("data-button-url") || "#",
    logoUrl:
      currentScript.getAttribute("data-logo-url") ||
      "https://bmc-neon.vercel.app/dyp_logo.png",
  };

  // Create container element
  const container = document.createElement("div");

  // Create shadow DOM for style isolation
  const shadow = container.attachShadow({ mode: "open" });

  // Add styles
  const style = document.createElement("style");
  style.textContent = `
      .dyp-licensed-container {
        background-color: ${config.backgroundColor};
        color: ${config.textColor};
        padding: 2rem;
        font-family: ${config.bodyFont};
        max-width: 100%;
        box-sizing: border-box;
        border-radius: 8px;
        position: relative;
      }
      
      .dyp-licensed-heading {
        font-family: ${config.headingFont};
        font-size: 1.5rem;
        margin-top: 0;
        margin-bottom: 1rem;
        font-weight: 500;
      }
      
      .dyp-content-row {
        display: flex;
        align-items: center;
        margin-bottom: 1.5rem;
      }
      
      .dyp-licensed-paragraph {
        line-height: 1.6;
        margin: 0;
        font-family: ${config.bodyFont};
        flex: 1;
      }
      
      .dyp-logo-img {
        width: 80px;
        height: auto;
        margin-left: 2rem;
        flex-shrink: 0;
      }
      
      .dyp-licensed-button {
        background-color: ${config.accentColor};
        color: white;
        font-family: ${config.bodyFont};
        border: none;
        padding: 0.5rem 1.5rem;
        font-size: 1rem;
        border-radius: ${config.buttonRadius}px;
        cursor: pointer;
        text-decoration: none;
        display: inline-block;
        font-weight: bold;
      }
      
      .dyp-licensed-button:hover {
        opacity: 0.9;
      }
      
      @media (max-width: 768px) {
        .dyp-content-row {
          flex-direction: column;
          align-items: flex-start;
        }
        
        .dyp-logo-img {
          margin-left: 0;
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
        }
      }
    `;

  // Create HTML content
  const content = document.createElement("div");
  content.classList.add("dyp-licensed-container");
  content.innerHTML = `
      <h2 class="dyp-licensed-heading">
        ${config.organizationName} is a licensed user of Design Your Partnership™
      </h2>
      <div class="dyp-content-row">
        <p class="dyp-licensed-paragraph">
          ${config.organizationName} professionals are trained and skilled in the use of the groundbreaking PC
          process and the user-friendly "Design Your Partnership™" tool. They can provide
          any level of facilitation and support partners may need when developing a
          Partnership Charter.
        </p>
        <img src="${config.logoUrl}" alt="DYP Logo" class="dyp-logo-img">
      </div>
      <a href="${config.buttonUrl}" class="dyp-licensed-button">${config.buttonText}</a>
    `;

  // Append style and content to shadow DOM
  shadow.appendChild(style);
  shadow.appendChild(content);

  // Replace script tag with our container
  currentScript.parentNode.replaceChild(container, currentScript);
})();
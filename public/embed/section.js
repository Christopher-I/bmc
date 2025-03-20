/**
 * BMC Associates Section Embed Script
 *
 * This script creates an embeddable section for BMC Associates that can be
 * customized via data attributes on the script tag.
 *
 * Usage:
 * <script
 *   src="https://bmc-associates.com/embed/section.js"
 *   data-background="#2c3e50"
 *   data-text-color="#ffffff"
 *   data-heading-font="serif"
 *   data-body-font="sans-serif"
 *   data-button-color="#e67e22"
 *   data-button-text="More About BMC"
 *   data-button-radius="4">
 * </script>
 */

(function () {
  // Get current script tag
  const currentScript = document.currentScript;

  // Get configuration from data attributes
  const config = {
    backgroundColor: currentScript.getAttribute("data-background") || "#2c3e50",
    textColor: currentScript.getAttribute("data-text-color") || "#ffffff",
    headingFont: currentScript.getAttribute("data-heading-font") || "serif",
    bodyFont: currentScript.getAttribute("data-body-font") || "sans-serif",
    buttonColor: currentScript.getAttribute("data-button-color") || "#e67e22",
    buttonText:
      currentScript.getAttribute("data-button-text") || "More About BMC",
    buttonRadius: currentScript.getAttribute("data-button-radius") || "4",
    buttonUrl:
      currentScript.getAttribute("data-button-url") ||
      "https://bmc-associates.com",
  };

  // Create container element
  const container = document.createElement("div");

  // Create shadow DOM for style isolation
  const shadow = container.attachShadow({ mode: "open" });

  // Add styles
  const style = document.createElement("style");
  style.textContent = `
      .bmc-container {
        background-color: ${config.backgroundColor};
        color: ${config.textColor};
        padding: 2rem;
        font-family: ${config.bodyFont};
        max-width: 100%;
        box-sizing: border-box;
      }
      
      .bmc-subtitle {
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
      }
      
      .bmc-heading {
        font-family: ${config.headingFont};
        font-size: 2rem;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
      }
      
      .bmc-paragraph {
        line-height: 1.6;
        margin-bottom: 1rem;
      }
      
      .bmc-button {
        background-color: ${config.buttonColor};
        color: white;
        font-family: ${config.bodyFont};
        border: none;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        border-radius: ${config.buttonRadius}px;
        cursor: pointer;
        text-decoration: none;
        display: inline-block;
      }
      
      .bmc-button:hover {
        opacity: 0.9;
      }
    `;

  // Create HTML content
  const content = document.createElement("div");
  content.classList.add("bmc-container");
  content.innerHTML = `
      <div class="bmc-subtitle">ABOUT US</div>
      <h2 class="bmc-heading">BMC Associates</h2>
      <p class="bmc-paragraph">
        BMC Associates pioneered a speciality in business partnerships beginning
        in 1990. During the 1990s it focused on mediating family and non-family
        business partner disputes. Those early clients taught BMC's mediators
        about the approximately dozen different ways partners can wind up
        "sideways" with one another.
      </p>
      <p class="bmc-paragraph">
        BMC used that information to begin focusing on conflict prevention among
        partners. Since around 2000, BMC has offered two services to partners:
        conflict resolution and conflict prevention.
      </p>
      <a href="${config.buttonUrl}" class="bmc-button">${config.buttonText}</a>
    `;

  // Append style and content to shadow DOM
  shadow.appendChild(style);
  shadow.appendChild(content);

  // Replace script tag with our container
  currentScript.parentNode.replaceChild(container, currentScript);
})();

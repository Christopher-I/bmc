/**
 * Post-haste Consulting Group Section Embed Script
 *
 * This script creates an embeddable section for Post-haste Consulting Group that can be
 * customized via data attributes on the script tag.
 *
 * Usage:
 * <script
 *   src="https://PHCG-associates.com/embed/section.js"
 *   data-background="#2c3e50"
 *   data-text-color="#ffffff"
 *   data-heading-font="serif"
 *   data-body-font="sans-serif"
 *   data-button-color="#e67e22"
 *   data-button-text="More About PHCG"
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
      currentScript.getAttribute("data-button-text") || "More About PHCG",
    buttonRadius: currentScript.getAttribute("data-button-radius") || "4",
    buttonUrl:
      currentScript.getAttribute("data-button-url") ||
      "https://PHCG-associates.com",
  };

  // Create container element
  const container = document.createElement("div");

  // Create shadow DOM for style isolation
  const shadow = container.attachShadow({ mode: "open" });

  // Add styles
  const style = document.createElement("style");
  style.textContent = `
      .PHCG-container {
        background-color: ${config.backgroundColor};
        color: ${config.textColor};
        padding: 2rem;
        font-family: ${config.bodyFont};
        max-width: 100%;
        box-sizing: border-box;
      }
      
      .PHCG-subtitle {
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
      }
      
      .PHCG-heading {
        font-family: ${config.headingFont};
        font-size: 2rem;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
      }
      
      .PHCG-paragraph {
        line-height: 1.6;
        margin-bottom: 1rem;
      }
      
      .PHCG-button {
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
      
      .PHCG-button:hover {
        opacity: 0.9;
      }
    `;

  // Create HTML content
  const content = document.createElement("div");
  content.classList.add("PHCG-container");
  content.innerHTML = `
      <div class="PHCG-subtitle">ABOUT US</div>
      <h2 class="PHCG-heading">Post-haste Consulting Group</h2>
      <p class="PHCG-paragraph">
    Post Haste Consulting Group has been working with family and non-family business partners for
years. Among our services to partners is the Partnership Charter (PC). We use the online
Design Your Partnership TM tool not only because it’s the best structured program for helping
partners develop a comprehensive document that covers both the interpersonal and business
sides of their relationship, but it’s also the world’s only such tool!
Our professionals have been trained in the use of the PC methodology and are licensed by The
Partnership Charter Institute to use the DYP tool so we can help you with your business
partnership.
      </p>
      <p class="PHCG-paragraph">
        PHCG used that information to begin focusing on conflict prevention among
        partners. Since around 2000, PHCG has offered two services to partners:
        conflict resolution and conflict prevention.
      </p>
      <a href="${config.buttonUrl}" class="PHCG-button">${config.buttonText}</a>
    `;

  // Append style and content to shadow DOM
  shadow.appendChild(style);
  shadow.appendChild(content);

  // Replace script tag with our container
  currentScript.parentNode.replaceChild(container, currentScript);
})();

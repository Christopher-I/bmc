/**
 * BMC Associates Charter Section Embed Script
 *
 * This script creates an embeddable section explaining Partnership Charters
 * with a two-column layout similar to the "About Charters" section.
 */

(function () {
  // Get current script tag
  const currentScript = document.currentScript;

  // Get configuration from data attributes
  const config = {
    backgroundColor: currentScript.getAttribute("data-background") || "#1e3553",
    textColor: currentScript.getAttribute("data-text-color") || "#ffffff",
    headingColor: currentScript.getAttribute("data-heading-color") || "#ffffff",
    accentColor: currentScript.getAttribute("data-accent-color") || "#d5ad36",
    headingFont: currentScript.getAttribute("data-heading-font") || "serif",
    bodyFont: currentScript.getAttribute("data-body-font") || "sans-serif",
    logoSrc: currentScript.getAttribute("data-logo-src") || "/bmc_logo.svg",
    imageSrc: currentScript.getAttribute("data-image-src") || "/chartersection_computer.jpg"
  };

  // Create container element
  const container = document.createElement("div");

  // Create shadow DOM for style isolation
  const shadow = container.attachShadow({ mode: "open" });

  // Add styles
  const style = document.createElement("style");
  style.textContent = `
    .charter-container {
      background-color: ${config.backgroundColor};
      color: ${config.textColor};
      font-family: ${config.bodyFont};
      padding: 2rem 3rem 5rem;
      max-width: 100%;
      box-sizing: border-box;
    }
    
    .charter-content-wrapper {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .charter-header {
      margin-bottom: 1.5rem;
    }
    
    .charter-label {
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
    }
    
    .charter-heading {
      font-family: ${config.headingFont};
      font-size: 2.25rem;
      line-height: 1.2;
      margin: 0;
      color: ${config.headingColor};
      font-weight: normal;
    }
    
    .charter-flex-container {
      display: flex;
      flex-direction: row;
      gap: 2rem;
    }
    
    .charter-text-container {
      flex: 0 0 58.333%;
      max-width: 58.333%;
    }
    
    .charter-image-container {
      flex: 0 0 41.667%;
      max-width: 41.667%;
      display: flex;
      flex-direction: column;
    }
    
    .charter-image {
      width: 100%;
      height: auto;
      border-radius: 8px;
      margin-bottom: 1rem;
    }
    
    .charter-logo-container {
      margin-top: 0.5rem;
    }
    
    .charter-licensed {
      font-size: 0.875rem;
      margin-bottom: 0.25rem;
    }
    
    .charter-logo {
      width: 60px;
      height: auto;
      margin-top: 0.25rem;
    }
    
    .charter-paragraph {
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    
    .charter-paragraph:last-child {
      margin-bottom: 0;
    }
    
    @media (max-width: 768px) {
      .charter-container {
        padding: 2rem 1.5rem 3rem;
      }
      
      .charter-heading {
        font-size: 1.875rem;
      }
      
      .charter-flex-container {
        flex-direction: row;
      }
      
      .charter-text-container,
      .charter-image-container {
        max-width: 100%;
      }
    }
  `;

  content.innerHTML = `
    <div class="charter-content-wrapper">
      <div class="charter-header">
        <div class="charter-label">ABOUT CHARTERS</div>
        <h2 class="charter-heading">What is a<br>Partnership Charter?</h2>
      </div>
      
      <div class="charter-flex-container">
        <div class="charter-text-container">
          <p class="charter-paragraph">
            A Partnership Charter (PC) is a breakthrough methodology for designing business partnerships. It's actually the only structured process that helps partners clarify both the business and interpersonal sides of their partnership.
          </p>
          
          <p class="charter-paragraph">
            Traditional Partnership Agreements are useful for protecting the rights of partners, but they serve a narrow legal purpose. PCs have a much broader goal, which is facilitating in-depth discussions that make it easy for partners to grasp the complexity of being partners. The Design Your Partnership™ tool contains workbooks, facilitates the discussions and negotiations, and helps memorialize the partners' understandings, commitments, and agreements in a 60-90 page Charter document.
          </p>
          
          <p class="charter-paragraph">
            Charters notably lower the risks of having partners while significantly amplify the benefits.
          </p>
        </div>
        
        <div class="charter-image-container">
          <img class="charter-image" src="${config.imageSrc}" alt="Partnership Charter on Laptop">
          
          <div class="charter-logo-container">
            <div class="charter-licensed">Licensed by</div>
            <img class="charter-logo" src="${config.logoSrc}" alt="BMC Logo">
          </div>
        </div>
      </div>
    </div>
  `;

  // Append style and content to shadow DOM
  shadow.appendChild(style);
  shadow.appendChild(content);

  // Replace script tag with our container
  currentScript.parentNode.replaceChild(container, currentScript);
})();
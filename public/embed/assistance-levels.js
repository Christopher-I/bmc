/**
 * Post-haste Consulting Group Assistance Levels Section Embed Script
 *
 * This script creates an embeddable section for "Partners get the level of assistance they need"
 * with a two-column layout.
 */

(function () {
  // Get current script tag
  const currentScript = document.currentScript;

  // Get configuration from data attributes
  const config = {
    backgroundColor: currentScript.getAttribute("data-background") || "#ffffff",
    textColor: currentScript.getAttribute("data-text-color") || "#333333",
    headingColor: currentScript.getAttribute("data-heading-color") || "#333333",
    accentColor: currentScript.getAttribute("data-accent-color") || "#0066B2",
    headingFont: currentScript.getAttribute("data-heading-font") || "serif",
    bodyFont: currentScript.getAttribute("data-body-font") || "sans-serif",
    imageRadius: currentScript.getAttribute("data-image-radius") || "8",
    imageSrc:
      currentScript.getAttribute("data-image-src") ||
      "/assistance_levels_diagram.png",
  };

  // Create container element
  const container = document.createElement("div");

  // Create shadow DOM for style isolation
  const shadow = container.attachShadow({ mode: "open" });

  // Add styles
  const style = document.createElement("style");
  style.textContent = `
        .assistance-levels-container {
          background-color: ${config.backgroundColor};
          color: ${config.textColor};
          font-family: ${config.bodyFont};
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
          font-family: ${config.headingFont};
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          color: ${config.headingColor};
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
  display: flex; // Add this
  align-items: flex-start; // Add this
}

    
      .assistance-levels-image {
  width: 50%;
  height: auto;
  border-radius: ${config.imageRadius}px;
  object-fit: contain; // Add this to maintain aspect ratio
  max-height: 80%; // Add this to prevent overflow
}
    
      .assistance-levels-text-content {
  flex: 0 0 42%;
  min-height: 100%; // Add this to establish height for alignment
}
    
        .assistance-section {
          margin-bottom: 2rem;
        }
    
        .assistance-section:last-child {
          margin-bottom: 0;
        }
    
        .assistance-section-heading {
          font-family: ${config.headingFont};
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: ${config.headingColor};
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

  // Create content elements
  const content = document.createElement("div");
  content.classList.add("assistance-levels-container");
  content.innerHTML = `
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

  // Append style and content to shadow DOM
  shadow.appendChild(style);
  shadow.appendChild(content);

  // Replace script tag with our container
  currentScript.parentNode.replaceChild(container, currentScript);
})();

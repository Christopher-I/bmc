/**
 * Post-haste Consulting Group Three Steps Section Embed Script
 *
 * This script creates an embeddable section for "Design any complex partnership in 3 simple steps"
 * with a three-column layout showing the steps.
 */

(function () {
  // Get current script tag
  const currentScript = document.currentScript;

  // Get configuration from data attributes
  const config = {
    backgroundColor: currentScript.getAttribute("data-background") || "#ffffff",
    textColor: currentScript.getAttribute("data-text-color") || "#333333",
    headingColor: currentScript.getAttribute("data-heading-color") || "#333333",
    cardBackgroundColor: currentScript.getAttribute("data-card-background") || "#E5E7EA",
    stepBadgeColor: currentScript.getAttribute("data-badge-color") || "#ABB9C7",
    stepBadgeTextColor: currentScript.getAttribute("data-badge-text-color") || "#ffffff",
    headingFont: currentScript.getAttribute("data-heading-font") || "serif",
    bodyFont: currentScript.getAttribute("data-body-font") || "sans-serif",
    discoverIconSrc: currentScript.getAttribute("data-discover-icon") || "/step1.png",
    discussIconSrc: currentScript.getAttribute("data-discuss-icon") || "/step2.png",
    documentIconSrc: currentScript.getAttribute("data-document-icon") || "/step3.png",
    cardShadow: currentScript.getAttribute("data-card-shadow") === "true",
  };

  // Define the steps data
  const steps = [
    {
      number: "1",
      title: "Discover",
      content: "The PC Workbook is like a short course in partnerships. It touches every critical topic and on their own partners discover the issues and enter their thoughts – the first step in designing a healthy, resilient partnership."
    },
    {
      number: "2",
      title: "Discuss",
      content: "Going back and forth – sharing and listening – each partner reveals their thoughts about what's important to them. They creatively discover what works for them and build a foundation based on everyone's ideas."
    },
    {
      number: "3",
      title: "Document",
      content: "The partners' Guides edit what was generated in the Joint Meetings. The platform helps draft a 70-100 page Charter that memorializes the partners' understandings, commitments and agreements."
    }
  ];

  // Create container element
  const container = document.createElement("div");

  // Create shadow DOM for style isolation
  const shadow = container.attachShadow({ mode: "open" });

  // Add styles
  const style = document.createElement("style");
  style.textContent = `
      .three-steps-container {
        background-color: ${config.backgroundColor};
        color: ${config.textColor};
        font-family: ${config.bodyFont};
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
        font-family: ${config.headingFont};
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 5rem;
        color: ${config.headingColor};
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
        background-color: ${config.cardBackgroundColor};
        border-radius: 12px;
        padding: 2rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        ${config.cardShadow ? "box-shadow: 0 2px 4px rgba(0,0,0,0.1);" : ""}
        position: relative;
      }
  
      .step-badge {
        background-color: ${config.stepBadgeColor};
        color: ${config.stepBadgeTextColor};
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
        font-family: ${config.headingFont};
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: 1rem;
        color: ${config.headingColor};
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
        padding-bottom: 3rem; /* Space for icon */
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

  // Create content elements
  const content = document.createElement("div");
  content.classList.add("three-steps-container");
  content.innerHTML = `
      <div class="three-steps-wrapper">
        <h2 class="three-steps-heading">Design any complex partnership in 3 simple steps using the Charter process</h2>
        
        <div class="three-steps-grid">
          ${steps.map((step, index) => `
            <div class="step-card">
              <div>
                <span class="step-badge">STEP ${step.number}</span>
              </div>
              
              <h3 class="step-title">${step.title}</h3>
              
              <p class="step-content">
                ${step.content}
              </p>
              
              <div class="step-icon-container">
                <img class="step-icon" src="${
                  index === 0 ? config.discoverIconSrc : 
                  index === 1 ? config.discussIconSrc : 
                  config.documentIconSrc
                }" alt="${step.title} icon">
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

  // Append style and content to shadow DOM
  shadow.appendChild(style);
  shadow.appendChild(content);

  // Replace script tag with our container
  currentScript.parentNode.replaceChild(container, currentScript);
})();
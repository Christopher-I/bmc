(function () {
  const currentScript = document.currentScript;

  const config = {
    backgroundColor: currentScript.getAttribute("data-background") || "#ecf0f1",
    textColor: currentScript.getAttribute("data-text-color") || "#2c3e50",
    headingFont: currentScript.getAttribute("data-heading-font") || "serif",
    bodyFont: currentScript.getAttribute("data-body-font") || "sans-serif",
    imageRadius: currentScript.getAttribute("data-image-radius") || "8",
    imageSrc:
      "https://bmc-git-sliversofambiguity-christopher-igbojekwes-projects.vercel.app/dyp_tool.png",
  };

  const container = document.createElement("div");
  const shadow = container.attachShadow({ mode: "open" });

  const style = document.createElement("style");
  style.textContent = `
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
  
      @media (min-width: 768px) {
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
        border-radius: ${config.imageRadius}px;
        display: block;
        margin: 0 auto;
      }
    `;

  const content = document.createElement("div");
  content.innerHTML = `
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

  shadow.appendChild(style);
  shadow.appendChild(content);

  currentScript.parentNode.replaceChild(container, currentScript);
})();

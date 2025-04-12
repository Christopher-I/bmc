(function () {
    const currentScript = document.currentScript;
  
    const config = {
      backgroundColor: currentScript.getAttribute("data-background") || "#ecf0f1",
      textColor: currentScript.getAttribute("data-text-color") || "#2c3e50",
      headingColor: currentScript.getAttribute("data-heading-color") || "#1e4164",
      headingFont: currentScript.getAttribute("data-heading-font") || "serif",
      bodyFont: currentScript.getAttribute("data-body-font") || "sans-serif",
      imageSrc:
        currentScript.getAttribute("data-image-src") ||
        "https://bmc-git-sliversofambiguity-christopher-igbojekwes-projects.vercel.app/dyp_tool.png",
      imageRadius: currentScript.getAttribute("data-image-radius") || 8,
    };
  
    const container = document.createElement("div");
    const shadow = container.attachShadow({ mode: "open" });
  
    const style = document.createElement("style");
    style.textContent = `
      .dyp-tool-container {
        background-color: ${config.backgroundColor};
        color: ${config.textColor};
        font-family: ${config.bodyFont};
        padding: 8rem 2rem;
        box-sizing: border-box;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
  
      .dyp-tool-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        max-width: 1200px;
        width: 100%;
        gap: 6rem;
      }
  
      .dyp-text {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
  
      .dyp-heading {
        font-family: ${config.headingFont};
        font-size: 2.5rem;
        line-height: 1.2;
        color: ${config.headingColor};
        margin: 0;
      }
  
      .dyp-paragraph {
        font-size: 1.1rem;
        line-height: 1.6;
        margin: 0;
      }
  
      .dyp-image-container {
        flex: 0 0 40%;
      }
  
      .dyp-image {
        width: 100%;
        max-width: 500px;
        border-radius: ${config.imageRadius}px;
        display: block;
        margin: 0 auto;
      }
  
      @media (max-width: 900px) {
        .dyp-tool-wrapper {
          flex-direction: column;
          align-items: center;
          gap: 3rem;
        }
  
        .dyp-heading {
          font-size: 2rem;
          text-align: center;
        }
  
        .dyp-paragraph {
          text-align: center;
        }
      }
    `;
  
    const content = document.createElement("div");
    content.classList.add("dyp-tool-container");
    content.innerHTML = `
      <div class="dyp-tool-wrapper">
        <div class="dyp-text">
          <h2 class="dyp-heading">The DYP tool</h2>
          <p class="dyp-paragraph">
            The DYP™ tool puts the Partnership Charter process into action.
            Each of the 3 PC steps has a corresponding part in the DYP tool.
          </p>
          <p class="dyp-paragraph">
            The PC's been employed and refined with hundreds of partners. In the world of
            business partners, the PC process and the DYP tool are unique.
          </p>
          <p class="dyp-paragraph">
            There’s nothing like it for entrepreneurs who want to understand both the business
            and interpersonal sides of their partnerships. Most partners know both sides exist
            and having a tool to thoroughly address them is incredibly advantageous.
          </p>
        </div>
        <div class="dyp-image-container">
          <img class="dyp-image" src="${config.imageSrc}" alt="DYP Tool Diagram">
        </div>
      </div>
    `;
  
    shadow.appendChild(style);
    shadow.appendChild(content);
  
    currentScript.parentNode.replaceChild(container, currentScript);
  })();
  
// CharterSectionShared.js - Shared utilities and code templates for Charter Section

export const getSafeCharterImageUrl = (imageSrc) => {
  if (!imageSrc || imageSrc.includes("placehold.co")) {
    return "https://PHCG-neon.vercel.app/chartersection_computer.jpg";
  }
  return imageSrc;
};

export const generateCharterStyles = (config) => {
  return `
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
        font-size: 2.5rem;
        line-height: 1.2;
        margin: 0;
        color: ${config.headingColor};
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
  text-align: center;
  width: 100%;
      }
      .charter-licensed {
        font-size: 0.875rem;
        margin-bottom: 0.25rem;
      }
.charter-logo {
  width: 80px;
  height: auto;
  display: inline-block;
}
        
      .charter-paragraph {
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 1.5rem;
      }
      .charter-paragraph:last-child {
        margin-bottom: 0;
      }
    `;
};

export const generateCharterHTML = (config) => {
  return `
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
              Traditional Partnership Agreements are useful for protecting the rights of partners, but they serve a narrow legal purpose. PCs have a much broader goal, which is facilitating in-depth discussions that make it easy for partners to grasp the complexity of being partners. The Design Your Partnership™ tool contains workbooks, facilitates the discussions and negotiations, and helps memorialize the partners' understandings, commitments, and agreements in a 60–90 page Charter document.
            </p>
            <p class="charter-paragraph">
              Charters notably lower the risks of having partners while significantly amplify the benefits.
            </p>
          </div>
          <div class="charter-image-container">
            <img class="charter-image" src="${config.imageSrc}" alt="Partnership Charter on Laptop">
            <div class="charter-logo-container">
              <div class="charter-licensed">Licensed by</div>
              <img class="charter-logo" src="${config.logoSrc}" alt="PHCG Logo">
            </div>
          </div>
        </div>
      </div>
    `;
};

export const generateCharterEmbedScript = (config) => {
  const mergedConfig = {
    ...defaultCharterConfig,
    ...config,
    imageSrc: getSafeCharterImageUrl(config.imageSrc),
  };

  return `<script>
  (function() {
    const config = ${JSON.stringify(mergedConfig)};
    const container = document.createElement('div');
    container.classList.add('charter-container');
    const shadow = container.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = \`${generateCharterStyles(mergedConfig)}\`;
    const content = document.createElement('div');
    content.classList.add('charter-container');
    content.innerHTML = \`${generateCharterHTML(mergedConfig)}\`;
    shadow.appendChild(style);
    shadow.appendChild(content);
    document.currentScript.parentNode.replaceChild(container, document.currentScript);
  })();
  </script>`;
};

export const defaultCharterConfig = {
  backgroundColor: "#1e3553",
  textColor: "#ffffff",
  headingColor: "#ffffff",
  accentColor: "#d5ad36",
  headingFont: "serif",
  bodyFont: "sans-serif",
  logoSrc: "https://PHCG-neon.vercel.app/tpci_logo.svg",
  imageSrc: "https://PHCG-neon.vercel.app/chartersection_computer.jpg",
};

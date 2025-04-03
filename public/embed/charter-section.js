(function () {
  const currentScript = document.currentScript;

  const config = {
    backgroundColor: currentScript.getAttribute("data-background") || "#1e3553",
    textColor: currentScript.getAttribute("data-text-color") || "#ffffff",
    headingColor: currentScript.getAttribute("data-heading-color") || "#ffffff",
    accentColor: currentScript.getAttribute("data-accent-color") || "#d5ad36",
    headingFont: currentScript.getAttribute("data-heading-font") || "serif",
    bodyFont: currentScript.getAttribute("data-body-font") || "sans-serif",
    logoSrc: currentScript.getAttribute("data-logo-src") || "https://bmc-neon.vercel.app/tpci_logo.svg",
    imageSrc: currentScript.getAttribute("data-image-src") || "https://bmc-neon.vercel.app/chartersection_computer.jpg"
  };

  const container = document.createElement("div");
  const shadow = container.attachShadow({ mode: "open" });

  const style = document.createElement("style");
  style.textContent = `
    .charter-container {
      background-color: ${config.backgroundColor};
      color: ${config.textColor};
      font-family: ${config.bodyFont};
      padding: 8rem 2rem;
      max-width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .charter-wrapper {
      max-width: 1200px;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      gap: 6rem;
    }
    .charter-text {
      flex: 0 0 58%;
    }
    .charter-heading {
      font-family: ${config.headingFont};
      font-size: 2.5rem;
      line-height: 1.2;
      margin: 0 0 1.5rem 0;
      color: ${config.headingColor};
    }
    .charter-sub {
      text-transform: uppercase;
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
    }
    .charter-paragraph {
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 1.25rem;
    }
    .charter-image-section {
      flex: 0 0 42%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .charter-image {
      width: 100%;
      height: auto;
      border-radius: 8px;
      margin-bottom: 1rem;
    }
    .charter-logo {
      width: 80px;
      height: auto;
    }
    .charter-licensed {
      font-size: 0.875rem;
      margin-top: 0.5rem;
    }

    @media (max-width: 900px) {
      .charter-wrapper {
        flex-direction: column;
        gap: 3rem;
      }
      .charter-heading {
        font-size: 2rem;
        text-align: center;
      }
      .charter-text {
        text-align: center;
      }
    }
  `;

  const content = document.createElement("div");
  content.classList.add("charter-container");
  content.innerHTML = `
    <div class="charter-wrapper">
      <div class="charter-text">
        <div class="charter-sub">ABOUT CHARTERS</div>
        <h2 class="charter-heading">What is a<br>Partnership Charter?</h2>
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
      <div class="charter-image-section">
        <img class="charter-image" src="${config.imageSrc}" alt="Partnership Charter Image" />
        <div class="charter-licensed">Licensed by</div>
        <img class="charter-logo" src="${config.logoSrc}" alt="BMC Logo" />
      </div>
    </div>
  `;

  shadow.appendChild(style);
  shadow.appendChild(content);
  currentScript.parentNode.replaceChild(container, currentScript);
})();

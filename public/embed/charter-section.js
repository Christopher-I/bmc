(function () {
  const currentScript = document.currentScript;

  if (!currentScript) return;

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
  style.textContent = `/* ... your CSS exactly as is ... */`;

  const content = document.createElement("div");
  content.classList.add("charter-container");
  content.innerHTML = `
    <div class="charter-content-wrapper">
      <div class="charter-header">
        <div class="charter-label">ABOUT CHARTERS</div>
        <h2 class="charter-heading">What is a<br>Partnership Charter?</h2>
      </div>
      <div class="charter-flex-container">
        <div class="charter-text-container">
          <p class="charter-paragraph">
            A Partnership Charter (PC) is a breakthrough methodology for designing business partnerships...
          </p>
          <p class="charter-paragraph">
            Traditional Partnership Agreements are useful for protecting the rights of partners...
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

  shadow.appendChild(style);
  shadow.appendChild(content);

  // Safely replace or append
  if (currentScript && currentScript.parentNode) {
    currentScript.parentNode.replaceChild(container, currentScript);
  } else {
    document.body.appendChild(container);
  }
})();

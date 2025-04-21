/**
 * Post-haste Consulting Group Slivers of Ambiguity Embed Script
 * Embeds a stylized card layout showing common partnership issues
 */

(function () {
  const currentScript = document.currentScript;

  const config = {
    backgroundColor: currentScript.getAttribute("data-background") || "#e6ecef",
    textColor: currentScript.getAttribute("data-text-color") || "#333333",
    headingColor: currentScript.getAttribute("data-heading-color") || "#333333",
    accentColor: currentScript.getAttribute("data-accent-color") || "#d5ad36",
    headingFont: currentScript.getAttribute("data-heading-font") || "serif",
    bodyFont: currentScript.getAttribute("data-body-font") || "sans-serif",
  };

  const sliversData = [
    "Too little communication",
    "Outright conflict",
    "Underperforming partners",
    "Misperceptions and misunderstandings",
    "Employees start feeling the stress between partners",
    "Partners conclude it’s just not fun anymore!",
  ];

  const style = document.createElement("style");
  style.textContent = `
      .slivers-container {
        background-color: ${config.backgroundColor};
        color: ${config.textColor};
        font-family: ${config.bodyFont};
        padding: 2rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
  
      .slivers-heading {
        font-family: ${config.headingFont};
        font-size: 2rem;
        margin-bottom: 2rem;
        color: ${config.headingColor};
        font-weight: bold;
        max-width: 900px;
        width: 100%;
      }
  
      .slivers-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1rem;
        width: 100%;
        max-width: 1000px;
      }
  
.slivers-card {
  background-color: white;

  border-radius: 8px;
  border-bottom: 4px solid #d5ad36;
  text-align: center;
  font-weight: 500;
  font-size: 1rem;
  color: #333333;
  font-family: sans-serif;
  height: 70px; /* set a fixed height */
  max-width: 300px; /* set fixed width like in the design */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}


.slivers-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

    `;

  const content = document.createElement("div");
  content.className = "slivers-container";

  const heading = document.createElement("h2");
  heading.className = "slivers-heading";
  heading.textContent =
    "Slivers of ambiguity – sooner or later – cause problems";

  const grid = document.createElement("div");
  grid.className = "slivers-grid";

  sliversData.forEach((text) => {
    const card = document.createElement("div");
    card.className = "slivers-card";
    card.textContent = text;
    grid.appendChild(card);
  });

  content.appendChild(heading);
  content.appendChild(grid);

  const container = document.createElement("div");
  const shadow = container.attachShadow({ mode: "open" });
  shadow.appendChild(style);
  shadow.appendChild(content);

  currentScript.parentNode.replaceChild(container, currentScript);
})();

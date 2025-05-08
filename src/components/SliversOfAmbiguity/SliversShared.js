// src/components/SliversOfAmbiguity/SliversShared.js

/**
 * Shared logic for Slivers of Ambiguity section
 * Used to generate the embed code, styles, and HTML
 */

export const sliversData = [
  "Too little communication",
  "Outright conflict",
  "Underperforming partners",
  "Misperceptions and misunderstandings",
  "Employees start feeling the stress between partners",
  "Partners conclude it's just not fun anymore!",
];

/**
 * Generates CSS styles for the Slivers of Ambiguity section
 * @param {Object} config - Configuration object
 * @returns {string} CSS as a string
 */
export const generateSliversStyles = (config) => {
  return `
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
      border-bottom: 4px solid ${config.accentColor};
      text-align: center;
      font-weight: 500;
      font-size: 1rem;
      color: ${config.textColor};
      font-family: ${config.bodyFont};
      height: 70px;
      max-width: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .slivers-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    }
  `;
};


/**
 * Generates HTML for the Slivers section
 * @returns {string} HTML markup as a string
 */
export const generateSliversHTML = () => {
  return `
      <h2 class="slivers-heading">Slivers of ambiguity – sooner or later – cause problems</h2>
      <div class="slivers-grid">
        ${sliversData
          .map((item) => `<div class="slivers-card">${item}</div>`)
          .join("\n")}
      </div>
    `;
};

/**
 * Generates a script with Shadow DOM for embedding Slivers section
 * @param {Object} config - Section config object
 * @returns {string} Script embed code as string
 */
export const generateSliversEmbedCode = (config) => {
  const styles = generateSliversStyles(config);
  const html = generateSliversHTML();
  return `<script>
      (function() {
        const container = document.createElement('div');
        const shadow = container.attachShadow({ mode: 'open' });
  
        const style = document.createElement('style');
        style.textContent = \`${styles.replace(/`/g, "\\`")}\`;

  
        const content = document.createElement('div');
        content.className = 'slivers-container';
        content.innerHTML = \`${html.replace(/`/g, "\\`")}\`;
  
        shadow.appendChild(style);
        shadow.appendChild(content);
  
        document.currentScript.parentNode.replaceChild(container, document.currentScript);
      })();
    </script>`;
};
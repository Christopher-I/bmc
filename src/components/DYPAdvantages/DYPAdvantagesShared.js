// DYPAdvantagesShared.js - Shared utilities and code templates for DYP Advantages components

/**
 * Shared accordion data for DYP Advantages section
 */
export const dypAdvantagesData = [
  {
    title: "Tailored workbooks",
    content:
      "The DYP tool makes it easy for Guides to tailor the content of the Workbook to match certain specifics of the partners’ situation (e.g., the types of roles in their business, whether or not they have a Board).",
  },
  {
    title: "Virtual and in-person",
    content:
      "DYP has been used in-person, and virtually by partners and Guides separated by thousands of miles. It’s equally effective regardless of whether partners and Guides are sitting at the same table or halfway around the globe.",
  },
  {
    title: "DYP technology",
    content:
      "The DYP technology makes it possible for Guides to effortlessly move partners’ preparation into the draft templates, and even edit the partners’ commitments and agreements as they are forming them.",
  },
  {
    title: "Guide Tips",
    content:
      "While Guides facilitate the partners’ Joint Meetings, they have easy access to suggestions for helping partners discuss and negotiate issues, especially those that are complicated.",
  },
  {
    title: "Scheduling and navigation",
    content:
      "The custom-designed scheduling system and navigation windows allow each partner to be informed of each partner’s progress, making it easier for the partners to maintain their momentum throughout the Charter process.",
  },
  {
    title: "Charter document",
    content:
      "When the partners complete the process, DYP gives them a beautifully formatted 60-90-page Charter document that memorializes the partners’ understandings, commitments, and agreements.",
  },
  {
    title: "Joint Meetings",
    content:
      "Partners come to Joint Meetings completely prepared to share their ideas because they’ve answered the Workbook’s 500 questions. That ensures they have amazingly thorough discussions and negotiations, unlike any they would have without that level of preparation.",
  },
  {
    title: "Secure platform",
    content:
      "The platform’s secure system puts an end to partners and Guides emailing documents back and forth. Important, confidential documents are shared securely on the platform. The completed and signed Partnership Charter is available to each partner.",
  },
];

/**
 * Generates the CSS styles for the DYP Advantages component
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - CSS styles as a string
 */
export const generateDYPAdvantagesStyles = (config) => {
  const animationDuration = `${config.transitionSpeed || 0.3}s`;

  return `
    .dyp-container {
      background-color: ${config.backgroundColor};
      color: ${config.textColor};
      font-family: ${config.bodyFont};
      padding: 2rem;
      text-align: center;
      min-height: 200px; /* Ensure the container can expand for the heading */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start; /* Ensure content starts at the top and grows downward */
    }

    .dyp-heading {
      font-family: ${config.headingFont};
      font-size: 2rem;
      margin-bottom: 2rem;
      min-height: 150px; /* Ensure the heading has enough vertical space */
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1.5; /* Improve readability and reduce wrapping issues */
      max-width: 900px; /* Increased to allow more room for the text */
      width: 100%;
      text-align: center;
      white-space: normal; /* Allow natural wrapping */

    }

    @media (max-width: 768px) {
      .dyp-heading {
        font-size: 1.5rem; /* Reduce font size on smaller screens */
        min-height: 120px; /* Slightly smaller min-height for mobile */
        max-width: 90%; /* Adjust for smaller screens */
      }
    }

    .accordion-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      max-width: 1000px;
      margin: 0 auto;
    }

    @media (max-width: 768px) {
      .accordion-grid {
        grid-template-columns: 1fr;
      }
    }

    .accordion {
      position: relative;
      background-color: white;
      color: #333;
      border-radius: ${config.accordionRadius}px;
      overflow: hidden;
      align-self: start;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    .accordion.active {
      box-shadow: 0 2px 5px rgba(0,0,0,0.15);
    }

    .accordion::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 4px;
      background-color: ${config.accentColor || "#fcb040"};
      border-top-left-radius: ${config.accordionRadius}px;
      border-bottom-left-radius: ${config.accordionRadius}px;
    }

    .accordion-header {
      padding: 1rem;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: white;
      transition: background-color ${animationDuration} ease;
      user-select: none;
    }

    .accordion-header:hover {
      background-color: rgba(0,0,0,0.03);
    }

    .accordion-title {
      margin: 0;
      font-size: 1.1rem;
      color: #1e4164;
      font-weight: 600;
      text-align: left;
      flex: 1;
      padding-right: 1rem;
    }

    .accordion-icon {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-right: 2px solid #1e4164;
      border-bottom: 2px solid #1e4164;
      transform: rotate(45deg);
      transition: transform ${animationDuration} ease;
      flex-shrink: 0;
    }

    .accordion.active .accordion-icon {
      transform: rotate(225deg);
    }

    .accordion-content {
      height: 0;
      overflow: hidden;
      transition: height ${animationDuration} ease-out;
      background-color: white;
      text-align: left;
    }

    .accordion-content-inner {
      padding: 1rem;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
  `;
};

/**
 * Generates the HTML content for the DYP Advantages component
 * @returns {string} - HTML content as a string
 */
export const generateDYPAdvantagesHTML = () => {
  let accordionHTML = dypAdvantagesData
    .map(
      (item, idx) => `
      <div class="accordion" data-index="${idx}">
        <div class="accordion-header">
          <h3 class="accordion-title">${item.title}</h3>
          <span class="accordion-icon"></span>
        </div>
        <div class="accordion-content">
          <div class="accordion-content-inner">
            <p>${item.content}</p>
          </div>
        </div>
      </div>`
    )
    .join("");

  return `
    <h2 class="dyp-heading">
      Design Your Partnership™ – DYP – is the world's only online tool for partnership-building. That's not its only advantage.
    </h2>
    <div class="accordion-grid">
      ${accordionHTML}
    </div>
  `;
};

/**
 * Generates the JavaScript code to handle accordion functionality
 * @returns {string} - JavaScript code as a string
 */
export const generateAccordionJavaScript = () => {
  return `
    // Add event listeners for accordions using actual height measurements
    const addAccordionListeners = () => {
      const accordionGrid = content.querySelector('.accordion-grid');
      let activeIndex = null;

      accordionGrid.addEventListener('click', (e) => {
        const header = e.target.closest('.accordion-header');
        if (!header) return;

        const accordion = header.closest('.accordion');
        if (!accordion) return;

        const index = parseInt(accordion.getAttribute('data-index'), 10);
        const content = accordion.querySelector('.accordion-content');
        const contentInner = accordion.querySelector('.accordion-content-inner');
        const contentHeight = contentInner.getBoundingClientRect().height;

        if (activeIndex === index) {
          // Close this accordion
          content.style.height = '0px';
          accordion.classList.remove('active');
          activeIndex = null;
        } else {
          // Close all accordions
          const allAccordions = accordionGrid.querySelectorAll('.accordion');
          allAccordions.forEach(a => {
            a.classList.remove('active');
            const contentEl = a.querySelector('.accordion-content');
            if (contentEl) contentEl.style.height = '0px';
          });

          // Open the clicked accordion
          accordion.classList.add('active');
          content.style.height = \`\${contentHeight}px\`;
          activeIndex = index;
        }
      });
    };
  `;
};

/**
 * Generates the complete embed code for the DYP Advantages component
 * @param {Object} config - Configuration object with all parameters
 * @returns {string} - Complete embed code as a string
 */
export const generateEmbedCode = (config) => {
  return `<script>
  (function() {
    // Configuration from data attributes
    const config = {
      backgroundColor: "${config.backgroundColor}",
      textColor: "${config.textColor}",
      accentColor: "${config.accentColor || "#fcb040"}",
      headingFont: "${config.headingFont}",
      bodyFont: "${config.bodyFont}",
      accordionRadius: "${config.accordionRadius}",
      transitionSpeed: "${config.transitionSpeed || 0.3}"
    };

    // Create container element
    const container = document.createElement('div');

    // Create shadow DOM for style isolation
    const shadow = container.attachShadow({ mode: 'open' });

    // Add styles
    const style = document.createElement('style');
    style.textContent = \`${generateDYPAdvantagesStyles(config)}\`;

    // Create HTML content
    const content = document.createElement('div');
    content.classList.add('dyp-container');
    content.innerHTML = \`${generateDYPAdvantagesHTML()}\`;

    ${generateAccordionJavaScript()}

    // Append style and content to shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(content);

    // Setup accordion functionality after content is added
    setTimeout(addAccordionListeners, 0);

    // Replace script tag with our container
    document.currentScript.parentNode.replaceChild(container, document.currentScript);
  })();
  </script>`;
};

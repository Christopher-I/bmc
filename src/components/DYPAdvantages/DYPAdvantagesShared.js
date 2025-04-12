export const dypAdvantagesData = [
  {
    title: "Tailored workbooks",
    content:
      "The DYP tool makes it easy for Guides to tailor the content of the Workbook to match certain specifics of the partners' situation (e.g., the types of roles in their business, whether or not they have a Board).",
  },
  {
    title: "DYP technology",
    content:
      "The DYP technology makes it possible for Guides to effortlessly move partners' preparation into the draft templates, and even edit the partners' commitments and agreements as they are forming them.",
  },
  {
    title: "Scheduling and navigation",
    content:
      "The custom-designed scheduling system and navigation windows allow each partner to be informed of each partner's progress, making it easier for the partners to maintain their momentum throughout the Charter process.",
  },
  {
    title: "Joint Meetings",
    content:
      "Partners come to Joint Meetings completely prepared to share their ideas because they've answered the Workbook's 500 questions. That ensures they have amazingly thorough discussions and negotiations, unlike any they would have without that level of preparation.",
  },
  {
    title: "Virtual and in-person",
    content:
      "DYP has been used in-person, and virtually by partners and Guides separated by thousands of miles. It's equally effective regardless of whether partners and Guides are sitting at the same table or halfway around the globe.",
  },
  {
    title: "Guide Tips",
    content:
      "While Guides facilitate the partners' Joint Meetings, they have easy access to suggestions for helping partners discuss and negotiate issues, especially those that are complicated.",
  },
  {
    title: "Charter document",
    content:
      "When the partners complete the process, DYP gives them a beautifully formatted 60-90-page Charter document that memorializes the partners' understandings, commitments, and agreements.",
  },
  {
    title: "Secure platform",
    content:
      "The platform's secure system puts an end to partners and Guides emailing documents back and forth. Important, confidential documents are shared securely on the platform. The completed and signed Partnership Charter available to each partner.",
  },
];

export const generateDYPStyles = (config) => {
  const animationDuration = `${config.transitionSpeed || 0.3}s`;

  return `
    .dyp-container {
      background-color: ${config.backgroundColor};
      color: ${config.textColor};
      font-family: ${config.bodyFont};
      padding: 2rem;
      text-align: center;
      box-sizing: border-box;
      width: 100%;
    }

    .dyp-heading {
      font-family: ${config.headingFont};
      font-size: 2rem;
      margin-bottom: 2rem;
      line-height: 1.4;
    }

    .accordion-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1rem;
      max-width: 1000px;
      margin: 0 auto;
    }

    .accordion {
      background: white;
      border-radius: ${config.accordionRadius}px;
      overflow: hidden;
      text-align: left;
      color: #333;
      position: relative;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    .accordion::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background-color: ${config.accentColor || "#d5ad36"};
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
      background-color: rgba(0, 0, 0, 0.03);
    }

    .accordion-title {
      margin: 0;
      font-size: 1.1rem;
      color: #1e4164;
      font-weight: 600;
      flex: 1;
      padding-right: 1rem;
    }

    .accordion-content {
      height: 0;
      overflow: hidden;
      transition: height ${animationDuration} ease-out;
      background: white;
    }

    .accordion-content-inner {
      padding: 1rem;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
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

    .accordion.active {
      box-shadow: 0 2px 5px rgba(0,0,0,0.15);
    }

    @media (max-width: 768px) {
      .accordion-grid {
        grid-template-columns: 1fr;
      }

      .dyp-heading {
        font-size: 1.6rem;
      }
    }
  `;
};

export const generateDYPHTML = () => {
  return `
    <div class="dyp-heading">
      Design Your Partnership™ – DYP – is the world's only online tool for partnership-building.<br>That's not its only advantage.
    </div>
    <div class="accordion-grid">
      ${dypAdvantagesData
        .map(
          (item) => `
        <div class="accordion">
          <div class="accordion-header">
            <span class="accordion-title">${item.title}</span>
            <span class="accordion-icon"></span>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>${item.content}</p>
            </div>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
};

export const generateAccordionJavaScript = () => {
  return `
    const setupAccordionBehavior = () => {
      const accordionGrid = content.querySelector('.accordion-grid');
      if (!accordionGrid) return;

      let activeAccordion = null;

      const closeAccordion = (accordion) => {
        const contentEl = accordion.querySelector('.accordion-content');
        contentEl.style.height = '0px';
        accordion.classList.remove('active');
      };

      const openAccordion = (accordion) => {
        const contentEl = accordion.querySelector('.accordion-content');
        const contentInner = accordion.querySelector('.accordion-content-inner');
        const contentHeight = contentInner.getBoundingClientRect().height;

        contentEl.style.height = \`\${contentHeight}px\`;
        accordion.classList.add('active');
      };

      accordionGrid.addEventListener('click', (e) => {
        const header = e.target.closest('.accordion-header');
        if (!header) return;

        const accordion = header.closest('.accordion');
        if (!accordion) return;

        e.stopPropagation();

        if (activeAccordion === accordion) {
          closeAccordion(accordion);
          activeAccordion = null;
        } else {
          if (activeAccordion) closeAccordion(activeAccordion);
          openAccordion(accordion);
          activeAccordion = accordion;
        }
      });
    };
  `;
};

export const generateDYPEmbedCode = (config) => {
  const defaultConfig = {
    backgroundColor: "#103c68",
    textColor: "#ffffff",
    accentColor: "#d5ad36",
    headingFont: "serif",
    bodyFont: "sans-serif",
    accordionRadius: 4,
    transitionSpeed: 0.3,
  };

  const merged = { ...defaultConfig, ...config };
  const animationDuration = `${merged.transitionSpeed}s`;

  const htmlContent = dypAdvantagesData
    .map((item, idx) => {
      return `
        <div class="accordion" data-index="${idx}">
          <div class="accordion-header">
            <span class="accordion-title">${item.title}</span>
            <span class="accordion-icon"></span>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>${item.content}</p>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  const styles = generateDYPStyles(merged);

  return `<script>
    (function() {
      const config = ${JSON.stringify(merged)};
      const animationDuration = config.transitionSpeed + 's';

      const container = document.createElement('div');
      container.setAttribute('data-dyp-advantages', 'true');
      const shadow = container.attachShadow({ mode: 'open' });

      const style = document.createElement('style');
      style.textContent = \`${styles}\`;

      const content = document.createElement('div');
      content.classList.add('dyp-container');
      content.innerHTML = \`
        <div class="dyp-heading">
          Design Your Partnership™ – DYP – is the world's only online tool for partnership-building.<br>That's not its only advantage.
        </div>
        <div class="accordion-grid">
          ${htmlContent}
        </div>
      \`;

      const closeAllAccordions = () => {
        const all = content.querySelectorAll('.accordion');
        all.forEach(a => {
          a.classList.remove('active');
          const contentEl = a.querySelector('.accordion-content');
          if (contentEl) contentEl.style.height = '0px';
        });
      };

      const accordionGrid = content.querySelector('.accordion-grid');
      let activeIndex = null;

      accordionGrid.addEventListener('click', (e) => {
        const header = e.target.closest('.accordion-header');
        if (!header) return;

        const accordion = header.closest('.accordion');
        if (!accordion) return;

        const index = parseInt(accordion.getAttribute('data-index'), 10);
        const contentEl = accordion.querySelector('.accordion-content');
        const contentInner = accordion.querySelector('.accordion-content-inner');

        if (activeIndex === index) {
          contentEl.style.height = '0px';
          accordion.classList.remove('active');
          activeIndex = null;
        } else {
          closeAllAccordions();
          accordion.classList.add('active');
          const height = contentInner.getBoundingClientRect().height;
          contentEl.style.height = height + 'px';
          activeIndex = index;
        }
      });

      requestAnimationFrame(() => closeAllAccordions());

      shadow.appendChild(style);
      shadow.appendChild(content);
      document.currentScript.parentNode.replaceChild(container, document.currentScript);
    })();
  </script>`;
};

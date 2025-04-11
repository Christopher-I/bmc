// src/components/DYPAdvantagesShared.js

export const dypAdvantagesData = [
    { title: "Tailored workbooks", content: "Workbooks designed to fit your unique partnership needs, guiding discussions and decisions." },
    { title: "DYP technology", content: "Leverage smart technology that makes navigating your partnership-building process smoother and smarter." },
    { title: "Scheduling and navigation", content: "Integrated scheduling tools that align calendars and streamline the partnership workflow." },
    { title: "Joint Meetings", content: "Facilitated joint sessions to build alignment and uncover shared goals." },
    { title: "Virtual and in-person", content: "Flexibility to meet and collaborate virtually or in person as needed." },
    { title: "Guide Tips", content: "Contextual guidance embedded at each stage to ensure partners stay aligned and on track." },
    { title: "Charter document", content: "Automatically compiles your decisions and agreements into a shareable charter document." },
    { title: "Secure platform", content: "Built-in data security and privacy features to keep your information protected." }
  ];
  
  export const generateDYPEmbedCode = (config) => {
    return `<script>(function(){
      const container = document.createElement('div');
      const shadow = container.attachShadow({ mode: 'open' });
  
      const style = document.createElement('style');
      style.textContent = \`
        .dyp-container {
          background-color: ${config.backgroundColor};
          color: ${config.textColor};
          font-family: ${config.bodyFont};
          padding: 2rem;
          text-align: center;
        }
        .dyp-heading {
          font-family: ${config.headingFont};
          font-size: 2rem;
          margin-bottom: 2rem;
        }
        .accordion-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .accordion {
          background: white;
          border-radius: ${config.accordionRadius}px;
          padding: 1rem;
          cursor: pointer;
          text-align: left;
        }
        .accordion:hover {
          background: #f0f0f0;
        }
        .accordion-content {
          display: none;
          margin-top: 0.5rem;
          font-size: 0.95rem;
        }
        .accordion.open .accordion-content {
          display: block;
        }
      \`;
  
      const content = document.createElement('div');
      content.classList.add('dyp-container');
      content.innerHTML = \`
        <div class="dyp-heading">Design Your Partnership™ – DYP – is the world’s only online tool for partnership-building. That’s not its only advantage.</div>
        <div class="accordion-grid">
          ${dypAdvantagesData.map(item => `
            <div class="accordion">
              <div class="accordion-header">${item.title}</div>
              <div class="accordion-content">${item.content}</div>
            </div>
          `).join('')}
        </div>
      \`;
  
      const setupAccordions = () => {
        const accordions = content.querySelectorAll('.accordion');
        accordions.forEach(acc => {
          acc.addEventListener('click', () => {
            acc.classList.toggle('open');
          });
        });
      };
  
      shadow.appendChild(style);
      shadow.appendChild(content);
      setTimeout(setupAccordions, 0);
      document.currentScript.parentNode.replaceChild(container, document.currentScript);
    })();</script>`;
  };
  
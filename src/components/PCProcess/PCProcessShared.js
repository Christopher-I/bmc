// PCProcessShared.js - Shared utilities and code templates for PC Process components

/**
 * Generates the CSS styles for the PC Process component
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - CSS styles as a string
 */
export const generatePCProcessStyles = (config) => {
    const animationDuration = `${config.transitionSpeed}s`;
    
    return `
      .pc-container {
        background-color: ${config.backgroundColor};
        color: ${config.textColor};
        font-family: ${config.bodyFont};
        padding: 2rem;
        max-width: 100%;
        box-sizing: border-box;
        text-align: center;
      }
      
      .pc-heading {
        font-family: ${config.headingFont};
        font-size: 2.8rem;
        margin-bottom: 1.5rem;
        font-weight: normal;
      }
      
      .pc-subheading {
        font-size: 1.2rem;
        margin-bottom: 3rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.5;
      }
      
      .accordion-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin-bottom: 2rem;
        align-items: start; /* Important! This prevents row stretching */
      }
      
      .fairness-row {
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
      }
      
      .fairness-row .accordion {
        width: 33%;
      }
      
      @media (max-width: 768px) {
        .accordion-grid {
          grid-template-columns: 1fr;
        }
        
        .fairness-row .accordion {
          width: 100%;
        }
      }
      
      .accordion {
        position: relative;
        margin-bottom: 1rem;
        background-color: white;
        color: #333;
        border-radius: ${config.accordionRadius}px;
        overflow: hidden;
        height: auto; /* Self-determined height */
        align-self: start; /* Don't stretch with siblings */
      }
      
      .accordion::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: ${config.accentColor};
        border-bottom-left-radius: ${config.accordionRadius}px;
        border-bottom-right-radius: ${config.accordionRadius}px;
      }
      
      .accordion-header {
        padding: 1rem;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        transition: background-color ${animationDuration} ease;
        border-radius: ${config.accordionRadius}px;
      }
      
      .accordion-header:hover {
        background-color: rgba(0, 0, 0, 0.03);
      }
      
      .accordion-title {
        margin: 0;
        font-size: 1.1rem;
        color: #1e4164;
        font-weight: 500;
        text-align: left;
      }
      
      /* Arrow icon with smooth rotation */
      .accordion-icon {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-right: 2px solid #1e4164;
        border-bottom: 2px solid #1e4164;
        transform: rotate(45deg);
        transition: transform ${animationDuration} ease;
      }
      
      .accordion.active .accordion-icon {
        transform: rotate(225deg); /* Rotates clockwise to point up when open */
      }
      
      .accordion-content {
        height: 0;
        overflow: hidden;
        transition: height ${animationDuration} ease-out;
        background-color: white;
        color: #333;
        text-align: left;
      }
      
      .accordion-content-inner {
        padding: 1rem;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
      }
      
      .contact-button {
        display: inline-block;
        padding: 0.75rem 2rem;
        background-color: ${config.buttonColor};
        color: white;
        text-decoration: none;
        border-radius: ${config.buttonRadius}px;
        font-family: ${config.bodyFont};
        font-size: 1rem;
        border: none;
        cursor: pointer;
        transition: background-color 0.2s ease;
        margin-top: 1rem;
      }
      
      .contact-button:hover {
        background-color: ${config.buttonColor}dd;
      }
    `;
  };
  
  /**
   * Generates the HTML content for the PC Process component
   * @param {Object} config - Configuration object with content parameters
   * @returns {string} - HTML content as a string
   */
  export const generatePCProcessHTML = (config) => {
    return `
      <h2 class="pc-heading">The PC process leaves nothing to chance</h2>
      <p class="pc-subheading">Everything partners struggle with can be found in these 13 topics</p>
      
      <div class="accordion-grid">
        <!-- First row -->
        <div class="accordion">
          <div class="accordion-header">
            <h3 class="accordion-title">Vision & Direction</h3>
            <span class="accordion-icon"></span>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>Partners establish a shared vision and direction for their business or project, ensuring alignment on long-term goals and strategic priorities.</p>
            </div>
          </div>
        </div>
        
        <div class="accordion">
          <div class="accordion-header">
            <h3 class="accordion-title">Conflict Handling Styles</h3>
            <span class="accordion-icon"></span>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>What entrepreneurs refer to as "inevitable conflict" is the number one reason many people avoid partnerships. By taking an assessment, exploring each partner's conflict handling style, and developing behavioral commitments to one another about how they'll communicate, they boost their confidence they can talk productively about their differences.</p>
            </div>
          </div>
        </div>
        
        <div class="accordion">
          <div class="accordion-header">
            <h3 class="accordion-title">Contributions & Rewards</h3>
            <span class="accordion-icon"></span>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>Clearly defining what each partner contributes (time, money, expertise, connections) and how rewards will be distributed creates a foundation for fairness.</p>
            </div>
          </div>
        </div>
        
        <!-- Second row -->
        <div class="accordion">
          <div class="accordion-header">
            <h3 class="accordion-title">Personal Values</h3>
            <span class="accordion-icon"></span>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>Understanding each partner's core values helps identify alignment and potential conflicts in approaches to business and decision-making.</p>
            </div>
          </div>
        </div>
        
        <div class="accordion">
          <div class="accordion-header">
            <h3 class="accordion-title">Personal Styles</h3>
            <span class="accordion-icon"></span>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>Understanding each partner's work style, communication preferences, and decision-making approach helps create effective collaboration strategies.</p>
            </div>
          </div>
        </div>
        
        <div class="accordion">
          <div class="accordion-header">
            <h3 class="accordion-title">Roles & Authority</h3>
            <span class="accordion-icon"></span>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>Delineating specific roles, responsibilities, and decision-making authority helps partners operate efficiently without stepping on each other's toes.</p>
            </div>
          </div>
        </div>
        
        <!-- Third row -->
        <div class="accordion">
          <div class="accordion-header">
            <h3 class="accordion-title">Expectations</h3>
            <span class="accordion-icon"></span>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>Partners outline what they expect from each other and from the partnership, creating clarity and preventing future misunderstandings.</p>
            </div>
          </div>
        </div>
        
        <div class="accordion">
          <div class="accordion-header">
            <h3 class="accordion-title">Ownership</h3>
            <span class="accordion-icon"></span>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>Clear agreements about ownership percentages, equity distribution, and future changes to ownership structure prevent major disagreements.</p>
            </div>
          </div>
        </div>
        
        <div class="accordion">
          <div class="accordion-header">
            <h3 class="accordion-title">Money</h3>
            <span class="accordion-icon"></span>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>Addressing compensation, profit distribution, expense policies, and financial management ensures alignment on monetary matters.</p>
            </div>
          </div>
        </div>
        
        <!-- Fourth row -->
        <div class="accordion">
          <div class="accordion-header">
            <h3 class="accordion-title">Governance</h3>
            <span class="accordion-icon"></span>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>Establishing decision-making processes, meeting structures, and leadership roles provides a framework for effective partnership management.</p>
            </div>
          </div>
        </div>
        
        <div class="accordion">
          <div class="accordion-header">
            <h3 class="accordion-title">Scenario Planning</h3>
            <span class="accordion-icon"></span>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>Partners plan for various scenarios, including success, challenges, and potential partnership changes, creating protocols for handling different situations.</p>
            </div>
          </div>
        </div>
        
        <div class="accordion">
          <div class="accordion-header">
            <h3 class="accordion-title">Managing Disagreements</h3>
            <span class="accordion-icon"></span>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>Establishing protocols for handling disagreements, including escalation procedures and potential third-party involvement, creates a safety net for the partnership.</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Fairness row -->
      <div class="fairness-row">
        <div class="accordion">
          <div class="accordion-header">
            <h3 class="accordion-title">Fairness</h3>
            <span class="accordion-icon"></span>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>Partners establish principles and processes for ensuring fair treatment, compensation, and recognition throughout the partnership.</p>
            </div>
          </div>
        </div>
      </div>
      
      <button class="contact-button">${config.buttonText}</button>
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
      const accordions = content.querySelectorAll('.accordion');
      let activeAccordion = null;
  
      accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        const content = accordion.querySelector('.accordion-content');
        const contentInner = accordion.querySelector('.accordion-content-inner');
        
        // Store the actual height of content
        const getContentHeight = () => contentInner.getBoundingClientRect().height;
        
        header.addEventListener('click', (e) => {
          // Prevent event bubbling
          e.stopPropagation();
          
          // If this accordion is already active, close it
          if (activeAccordion === accordion) {
            // Set current height explicitly to begin transition
            content.style.height = \`\${getContentHeight()}px\`;
            // Force a reflow to ensure a smooth transition
            content.offsetHeight;
            
            // Now set height to 0 to animate closing
            requestAnimationFrame(() => {
              content.style.height = '0px';
            });
            
            // Remove active class
            accordion.classList.remove('active');
            activeAccordion = null;
          } else {
            // Close currently active accordion if there is one
            if (activeAccordion) {
              const activeContent = activeAccordion.querySelector('.accordion-content');
              const activeContentInner = activeAccordion.querySelector('.accordion-content-inner');
              const activeHeight = activeContentInner.getBoundingClientRect().height;
              
              // Set exact height before animation
              activeContent.style.height = \`\${activeHeight}px\`;
              activeContent.offsetHeight; // Force reflow
              
              // Animate to 0
              requestAnimationFrame(() => {
                activeContent.style.height = '0px';
              });
              
              // Remove active class
              activeAccordion.classList.remove('active');
            }
            
            // Open this accordion
            // Add active class
            accordion.classList.add('active');
            
            // Set the height to the actual content height to animate opening
            content.style.height = \`\${getContentHeight()}px\`;
            
            // Store as active accordion
            activeAccordion = accordion;
          }
        });
      });
    };
    `;
  };
  
  /**
   * Generates the complete embed code for the PC Process component
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
      accentColor: "${config.accentColor}",
      headingFont: "${config.headingFont}",
      bodyFont: "${config.bodyFont}",
      buttonColor: "${config.buttonColor}",
      buttonText: "${config.buttonText}",
      buttonRadius: "${config.buttonRadius}",
      accordionRadius: "${config.accordionRadius || 4}",
      transitionSpeed: "${config.transitionSpeed}"
    };
    
    // Animation duration variable to ensure synchronized animations
    const animationDuration = config.transitionSpeed + "s";
    
    // Create container element
    const container = document.createElement('div');
    
    // Create shadow DOM for style isolation
    const shadow = container.attachShadow({ mode: 'open' });
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = \`${generatePCProcessStyles(config)}\`;
    
    // Create HTML content
    const content = document.createElement('div');
    content.classList.add('pc-container');
    content.innerHTML = \`${generatePCProcessHTML(config)}\`;
    
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
  
  // Shared accordion data that can be used by both the preview and generator
  export const accordionData = [
    {
      title: "Vision & Direction",
      content: "Partners establish a shared vision and direction for their business or project, ensuring alignment on long-term goals and strategic priorities."
    },
    {
      title: "Conflict Handling Styles",
      content: "What entrepreneurs refer to as 'inevitable conflict' is the number one reason many people avoid partnerships. By taking an assessment, exploring each partner's conflict handling style, and developing behavioral commitments to one another about how they'll communicate, they boost their confidence they can talk productively about their differences."
    },
    {
      title: "Contributions & Rewards",
      content: "Clearly defining what each partner contributes (time, money, expertise, connections) and how rewards will be distributed creates a foundation for fairness."
    },
    {
      title: "Personal Values",
      content: "Understanding each partner's core values helps identify alignment and potential conflicts in approaches to business and decision-making."
    },
    {
      title: "Personal Styles",
      content: "Understanding each partner's work style, communication preferences, and decision-making approach helps create effective collaboration strategies."
    },
    {
      title: "Roles & Authority",
      content: "Delineating specific roles, responsibilities, and decision-making authority helps partners operate efficiently without stepping on each other's toes."
    },
    {
      title: "Expectations",
      content: "Partners outline what they expect from each other and from the partnership, creating clarity and preventing future misunderstandings."
    },
    {
      title: "Ownership",
      content: "Clear agreements about ownership percentages, equity distribution, and future changes to ownership structure prevent major disagreements."
    },
    {
      title: "Money",
      content: "Addressing compensation, profit distribution, expense policies, and financial management ensures alignment on monetary matters."
    },
    {
      title: "Governance",
      content: "Establishing decision-making processes, meeting structures, and leadership roles provides a framework for effective partnership management."
    },
    {
      title: "Scenario Planning",
      content: "Partners plan for various scenarios, including success, challenges, and potential partnership changes, creating protocols for handling different situations."
    },
    {
      title: "Managing Disagreements",
      content: "Establishing protocols for handling disagreements, including escalation procedures and potential third-party involvement, creates a safety net for the partnership."
    },
    {
      title: "Fairness",
      content: "Partners establish principles and processes for ensuring fair treatment, compensation, and recognition throughout the partnership."
    }
  ];
  
  /**
   * React utility to handle accordion setup in the PCProcessPreview component
   * @param {HTMLElement} containerRef - Reference to the container element
   * @param {Object} config - Configuration object with parameters
   * @returns {Function} - Cleanup function for useEffect
   */
  export const setupAccordionBehavior = (containerRef, config) => {
    if (!containerRef) return () => {};
    
    const container = containerRef;
    const accordions = container.querySelectorAll('.accordion');
    let activeAccordion = null;
    
    // Apply initial state - all closed
    accordions.forEach(accordion => {
      const content = accordion.querySelector('.accordion-content');
      content.style.height = '0px';
    });
    
    // Single global click handler for all accordions
    const handleAccordionClick = (e) => {
      // Find the clicked accordion (or its parent)
      let target = e.target;
      let accordion = null;
      
      // Navigate up the DOM to find the accordion container
      while (target && target !== container) {
        if (target.classList.contains('accordion')) {
          accordion = target;
          break;
        }
        target = target.parentElement;
      }
      
      // If no accordion was found, exit
      if (!accordion) return;
      
      // Stop event propagation
      e.stopPropagation();
      
      const content = accordion.querySelector('.accordion-content');
      const contentInner = accordion.querySelector('.accordion-content-inner');
      const contentHeight = contentInner.getBoundingClientRect().height;
      
      // If this is already the active accordion, close it
      if (activeAccordion === accordion) {
        // Set current height explicitly to begin transition
        content.style.height = `${contentHeight}px`;
        // eslint-disable-next-line no-unused-expressions
        content.offsetHeight; // Force reflow
        
        // Animate closing
        requestAnimationFrame(() => {
          content.style.height = '0px';
        });
        
        // Remove active class
        accordion.classList.remove('active');
        activeAccordion = null;
        return;
      }
      
      // If there's a different active accordion, close it first
      if (activeAccordion) {
        const activeContent = activeAccordion.querySelector('.accordion-content');
        const activeContentInner = activeAccordion.querySelector('.accordion-content-inner');
        const activeContentHeight = activeContentInner.getBoundingClientRect().height;
        
        // Set current height explicitly
        activeContent.style.height = `${activeContentHeight}px`;
        // eslint-disable-next-line no-unused-expressions
        activeContent.offsetHeight; // Force reflow
        
        // Animate closing
        requestAnimationFrame(() => {
          activeContent.style.height = '0px';
        });
        
        // Remove active class
        activeAccordion.classList.remove('active');
      }
      
      // Open the clicked accordion
      accordion.classList.add('active');
      
      // Set height to animate opening
      requestAnimationFrame(() => {
        content.style.height = `${contentHeight}px`;
      });
      
      // Set as new active accordion
      activeAccordion = accordion;
    };
    
    // Add the single event listener to the container (event delegation)
    container.addEventListener('click', handleAccordionClick);
    
    // Cleanup event listeners on unmount
    return () => {
      container.removeEventListener('click', handleAccordionClick);
    };
  };
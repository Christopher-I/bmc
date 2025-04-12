/**
 * Fixed DYP Advantages Embed Script
 * This implementation resolves the issue with multiple accordions opening
 */
(function() {
  // Configuration
  const config = {
    backgroundColor: "#103c68",
    textColor: "#ffffff",
    accentColor: "#d5ad36",
    headingFont: "serif",
    bodyFont: "sans-serif",
    accordionRadius: 4,
    transitionSpeed: 0.3
  };
  
  // Animation duration variable
  const animationDuration = config.transitionSpeed + "s";
  
  // Create container element
  const container = document.createElement('div');
  container.setAttribute('data-dyp-advantages', 'true');
  
  // Create shadow DOM for style isolation
  const shadow = container.attachShadow({ mode: 'open' });
  
  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    /* Container styles */
    .dyp-container {
      background-color: ${config.backgroundColor};
      color: ${config.textColor};
      font-family: ${config.bodyFont};
      padding: 2rem;
      text-align: center;
      box-sizing: border-box;
      width: 100%;
    }
    
    /* Heading styles */
    .dyp-heading {
      font-family: ${config.headingFont};
      font-size: 2rem;
      margin-bottom: 2rem;
      line-height: 1.4;
    }
    
    /* Grid layout for accordions */
    .accordion-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1rem;
      max-width: 1000px;
      margin: 0 auto;
    }
    
    /* Individual accordion container */
    .accordion {
      background: white;
      border-radius: ${config.accordionRadius}px;
      overflow: hidden;
      text-align: left;
      color: #333;
      position: relative;
      margin-bottom: 1rem;
      /* Important for proper isolation */
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    
    /* Left accent border */
    .accordion::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background-color: ${config.accentColor};
      border-top-left-radius: ${config.accordionRadius}px;
      border-bottom-left-radius: ${config.accordionRadius}px;
    }
    
    /* Accordion header styles */
    .accordion-header {
      padding: 1rem;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: white;
      transition: background-color ${animationDuration} ease;
      user-select: none; /* Prevent text selection on click */
    }
    
    /* Hover effect */
    .accordion-header:hover {
      background-color: rgba(0, 0, 0, 0.03);
    }
    
    /* Title text */
    .accordion-title {
      margin: 0;
      font-size: 1.1rem;
      color: #1e4164;
      font-weight: 600;
      flex: 1; /* Take available space */
      padding-right: 1rem; /* Space for icon */
    }
    
    /* Content area - collapsed by default */
    .accordion-content {
      height: 0;
      overflow: hidden;
      transition: height ${animationDuration} ease-out;
      background: white;
    }
    
    /* Inner content padding */
    .accordion-content-inner {
      padding: 1rem;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
    
    /* Arrow icon */
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
    
    /* Rotate arrow when active */
    .accordion.active .accordion-icon {
      transform: rotate(225deg);
    }
    
    /* Active accordion styling */
    .accordion.active {
      box-shadow: 0 2px 5px rgba(0,0,0,0.15);
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .accordion-grid {
        grid-template-columns: 1fr;
      }
      
      .dyp-heading {
        font-size: 1.6rem;
      }
    }
  `;
  
  // Create HTML content
  const content = document.createElement('div');
  content.classList.add('dyp-container');
  content.innerHTML = `
    <div class="dyp-heading">Design Your Partnership™ – DYP – is the world's only online tool for partnership-building.<br>That's not its only advantage.</div>
    <div class="accordion-grid">
      
        <div class="accordion" data-index="0">
          <div class="accordion-header">
            <span class="accordion-title">Tailored workbooks</span>
            <span class="accordion-icon"></span>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>The DYP tool makes it easy for Guides to tailor the content of the Workbook to match certain specifics of the partners' situation (e.g., the types of roles in their business, whether or not they have a Board).</p>
            </div>
          </div>
        </div>
      
        <div class="accordion" data-index="1">
          <div class="accordion-header">
            <span class="accordion-title">DYP technology</span>
            <span class="accordion-icon"></span>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>The DYP technology makes it possible for Guides to effortlessly move partners' preparation into the draft templates, and even edit the partners' commitments and agreements as they are forming them.</p>
            </div>
          </div>
        </div>
      
        <div class="accordion" data-index="2">
          <div class="accordion-header">
            <span class="accordion-title">Scheduling and navigation</span>
            <span class="accordion-icon"></span>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>The custom-designed scheduling system and navigation windows allow each partner to be informed of each partner's progress, making it easier for the partners to maintain their momentum throughout the Charter process.</p>
            </div>
          </div>
        </div>
      
        <div class="accordion" data-index="3">
          <div class="accordion-header">
            <span class="accordion-title">Joint Meetings</span>
            <span class="accordion-icon"></span>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>Partners come to Joint Meetings completely prepared to share their ideas because they've answered the Workbook's 500 questions. That ensures they have amazingly thorough discussions and negotiations, unlike any they would have without that level of preparation.</p>
            </div>
          </div>
        </div>
      
        <div class="accordion" data-index="4">
          <div class="accordion-header">
            <span class="accordion-title">Virtual and in-person</span>
            <span class="accordion-icon"></span>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>DYP has been used in-person, and virtually by partners and Guides separated by thousands of miles. It's equally effective regardless of whether partners and Guides are sitting at the same table or halfway around the globe.</p>
            </div>
          </div>
        </div>
      
        <div class="accordion" data-index="5">
          <div class="accordion-header">
            <span class="accordion-title">Guide Tips</span>
            <span class="accordion-icon"></span>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>While Guides facilitate the partners' Joint Meetings, they have easy access to suggestions for helping partners discuss and negotiate issues, especially those that are complicated.</p>
            </div>
          </div>
        </div>
      
        <div class="accordion" data-index="6">
          <div class="accordion-header">
            <span class="accordion-title">Charter document</span>
            <span class="accordion-icon"></span>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>When the partners complete the process, DYP gives them a beautifully formatted 60-90-page Charter document that memorializes the partners' understandings, commitments, and agreements.</p>
            </div>
          </div>
        </div>
      
        <div class="accordion" data-index="7">
          <div class="accordion-header">
            <span class="accordion-title">Secure platform</span>
            <span class="accordion-icon"></span>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>The platform's secure system puts an end to partners and Guides emailing documents back and forth. Important, confidential documents are shared securely on the platform. The completed and signed Partnership Charter available to each partner.</p>
            </div>
          </div>
        </div>
      
    </div>
  `;
  
  // Append style and content to the DOM first
  shadow.appendChild(style);
  shadow.appendChild(content);
  
  // Function to close all accordions
  const closeAllAccordions = () => {
    const allAccordions = Array.from(content.querySelectorAll('.accordion'));
    allAccordions.forEach(accordion => {
      accordion.classList.remove('active');
      const contentEl = accordion.querySelector('.accordion-content');
      contentEl.style.height = '0px';
    });
  };
  
  // Keep track of active accordion by its index
  let activeAccordionIndex = null;
  
  // Get the accordion grid element (for event delegation)
  const accordionGrid = content.querySelector('.accordion-grid');
  
  // Single event listener using event delegation
  accordionGrid.addEventListener('click', (event) => {
    // Find the accordion header or its child elements
    const header = event.target.closest('.accordion-header');
    if (!header) return; // Exit if we didn't click on a header
    
    // Get the parent accordion element
    const accordion = header.closest('.accordion');
    if (!accordion) return;
    
    // Get the index from the data attribute
    const index = parseInt(accordion.getAttribute('data-index'), 10);
    
    // Get content elements
    const contentEl = accordion.querySelector('.accordion-content');
    const contentInner = accordion.querySelector('.accordion-content-inner');
    
    // Stop event propagation
    event.stopPropagation();
    
    // If this is already the active accordion, close it
    if (activeAccordionIndex === index) {
      contentEl.style.height = '0px';
      accordion.classList.remove('active');
      activeAccordionIndex = null;
    } 
    // Otherwise, close the current active one and open this one
    else {
      // First close all accordions
      closeAllAccordions();
      
      // Then open the clicked one
      accordion.classList.add('active');
      const contentHeight = contentInner.getBoundingClientRect().height;
      contentEl.style.height = `${contentHeight}px`;
      
      // Update active index
      activeAccordionIndex = index;
    }
  });
  
  // Initialize - ensure all accordions start closed
  closeAllAccordions();
  
  // Replace script tag with our container
  document.currentScript.parentNode.replaceChild(container, document.currentScript);
  
  // Log success
  console.log('DYP Advantages section loaded with fixed accordion behavior');
})();
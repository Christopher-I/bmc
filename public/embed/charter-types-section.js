// embed/charter-types-section.js
(function() {
    // Configuration (default values)
    const config = {
      backgroundColor: '#ffffff',
      textColor: '#333333',
      headingColor: '#1e3553',
      headingFont: 'serif',
      bodyFont: 'sans-serif'
    };
    
    // Create container element
    const container = document.createElement('div');
    
    // Create shadow DOM for style isolation
    const shadow = container.attachShadow({ mode: 'open' });
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .charter-types-container {
        background-color: ${config.backgroundColor};
        color: ${config.textColor};
        font-family: ${config.bodyFont};
        padding: 2rem;
        max-width: 100%;
        box-sizing: border-box;
        text-align: center;
      }
      
      .charter-types-heading {
        font-family: ${config.headingFont};
        font-size: 2.5rem;
        margin-bottom: 2.5rem;
        color: ${config.headingColor};
        font-weight: bold;
      }
      
      .charter-types-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        max-width: 1000px;
        margin: 0 auto;
      }
      
      @media (min-width: 768px) {
        .charter-types-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      
      .accordion {
        position: relative;
        margin-bottom: 1rem;
        background-color: #1C436A;
        border-radius: 8px;
        overflow: hidden;
        cursor: pointer;
        color: #ffffff;
        height: auto;
        align-self: start;
      }
      
      .accordion-header {
        display: flex;
        align-items: center;
        padding: 1.25rem 1.5rem;
        justify-content: space-between;
        transition: background-color 0.3s ease;
      }
      
      .accordion-title-container {
        display: flex;
        align-items: center;
      }
      
      .accordion-icon-container {
        margin-right: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        width: 48px;
        height: 48px;
        font-size: 24px;
      }
      
      .accordion-title {
        font-weight: bold;
        font-size: 1.3rem;
        font-family: ${config.headingFont};
        margin: 0;
        text-align: left;
      }
      
      .accordion-icon {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-right: 2px solid white;
        border-bottom: 2px solid white;
        transform: rotate(45deg);
        transform-origin: center;
        transition: transform 0.3s ease;
      }
      
      .accordion.active .accordion-icon {
        transform: rotate(225deg); /* Rotates clockwise to point up when open */
      }
      
      .accordion-content {
        height: 0;
        overflow: hidden;
        transition: height 0.3s ease-out;
        text-align: left;
      }
      
      .accordion-content-inner {
        padding: 0 1.5rem 1.5rem 1.5rem;
      }
      
      .accordion-content-inner p {
        line-height: 1.6;
        font-size: 1rem;
      }
    `;
    
    // Create HTML content
    const content = document.createElement('div');
    content.classList.add('charter-types-container');
    content.innerHTML = `
      <h2 class="charter-types-heading">Who should develop a Charter?</h2>
      
      <div class="charter-types-grid">
        <div class="accordion" data-index="0">
          <div class="accordion-header">
            <div class="accordion-title-container">
              <div class="accordion-icon-container">👥</div>
              <h3 class="accordion-title">Existing Partners</h3>
            </div>
            <div class="accordion-icon"></div>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>Existing partners usually know they have "slivers of ambiguity" lurking in their partner arrangement even after decades of working together. Preemptively addressing those ambiguities sooner rather than later increases the likelihood partner satisfaction and business success.</p>
            </div>
          </div>
        </div>
        
        <div class="accordion" data-index="1">
          <div class="accordion-header">
            <div class="accordion-title-container">
              <div class="accordion-icon-container">🚀</div>
              <h3 class="accordion-title">Startups</h3>
            </div>
            <div class="accordion-icon"></div>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>Startups are notorious for focusing on everything the business needs to launch (money, employees, equity, etc.) but not what the partners need most: a rock solid set of understandings and agreements. Failing to clarify their "deal" puts them at serious risk and as a result, 50% of all startups will fail in less than 5 years.</p>
            </div>
          </div>
        </div>
        
        <div class="accordion" data-index="2">
          <div class="accordion-header">
            <div class="accordion-title-container">
              <div class="accordion-icon-container">👪</div>
              <h3 class="accordion-title">Next-Gen Partners</h3>
            </div>
            <div class="accordion-icon"></div>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>Next-gen partners in family businesses have a steep hill to climb working as true partners. Each sibling, or cousin, needs to thoroughly prepare using the Workbook for conversations like they've never had before. Their agreements will shape both their business and family relationships... and those of their children as well!</p>
            </div>
          </div>
        </div>
        
        <div class="accordion" data-index="3">
          <div class="accordion-header">
            <div class="accordion-title-container">
              <div class="accordion-icon-container">🔄</div>
              <h3 class="accordion-title">Partners in Transition</h3>
            </div>
            <div class="accordion-icon"></div>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>Partners in transition know they're at a critical juncture, whether they're adding a partner or merging companies. By taking advantage of the opportunity to plan their compensation, equity, decision-making and more, they'll significantly improve their likelihood of having a successful transition.</p>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Initialize the active accordion reference
    let activeAccordion = null;
    
    // Add event listener for accordion functionality using event delegation
    const handleAccordionClick = (e) => {
      // Find the clicked accordion (or its parent)
      let target = e.target;
      let accordion = null;
      
      // Navigate up the DOM to find the accordion container
      while (target && target !== content) {
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
      
      const accordionContent = accordion.querySelector('.accordion-content');
      const contentInner = accordion.querySelector('.accordion-content-inner');
      
      // If this is already the active accordion, close it
      if (activeAccordion === accordion) {
        // Set current height explicitly to begin transition
        accordionContent.style.height = `${contentInner.getBoundingClientRect().height}px`;
        // Force a reflow for smooth transition
        accordionContent.offsetHeight;
        
        // Animate closing
        requestAnimationFrame(() => {
          accordionContent.style.height = '0px';
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
        // Force reflow
        activeContent.offsetHeight;
        
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
      const contentHeight = contentInner.getBoundingClientRect().height;
      requestAnimationFrame(() => {
        accordionContent.style.height = `${contentHeight}px`;
      });
      
      // Set as new active accordion
      activeAccordion = accordion;
    };
    
    // Apply initial state - all closed
    const setupInitialState = () => {
      const accordions = content.querySelectorAll('.accordion');
      accordions.forEach(accordion => {
        const accordionContent = accordion.querySelector('.accordion-content');
        accordionContent.style.height = '0px';
      });
    };
    
    // Add the event listener to the container using event delegation
    content.addEventListener('click', handleAccordionClick);
    
    // Append style and content to shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(content);
    
    // Initialize accordion states after DOM is ready
    setTimeout(setupInitialState, 0);
    
    // Replace script tag with our container
    document.currentScript.parentNode.replaceChild(container, document.currentScript);
  })();
/**
 * BMC Associates Partnership Charter Section Embed Script
 * 
 * This script creates an embeddable accordion section for the Partnership Charter
 * with customizable styling and transition speeds.
 */

(function() {
    // Get current script tag
    const currentScript = document.currentScript;
    
    // Get configuration from data attributes
    const config = {
      backgroundColor: currentScript.getAttribute('data-background') || '#1e4164',
      textColor: currentScript.getAttribute('data-text-color') || '#ffffff',
      headingFont: currentScript.getAttribute('data-heading-font') || 'sans-serif',
      bodyFont: currentScript.getAttribute('data-body-font') || 'sans-serif',
      accentColor: currentScript.getAttribute('data-accent-color') || '#a3c984',
      buttonColor: currentScript.getAttribute('data-button-color') || '#ffffff',
      transitionSpeed: currentScript.getAttribute('data-transition-speed') || '0.3s',
      buttonRadius: currentScript.getAttribute('data-button-radius') || '0'
    };
    
    // Create container element
    const container = document.createElement('div');
    
    // Create shadow DOM for style isolation
    const shadow = container.attachShadow({ mode: 'open' });
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .charter-container {
        background-color: ${config.backgroundColor};
        color: ${config.textColor};
        font-family: ${config.bodyFont};
        padding: 2rem;
        max-width: 100%;
        box-sizing: border-box;
      }
      
      .charter-heading {
        font-family: ${config.headingFont};
        font-size: 1.8rem;
        margin-bottom: 2rem;
        text-align: center;
        font-weight: normal;
      }
      
      .charter-steps-heading {
        font-family: ${config.headingFont};
        font-size: 1.8rem;
        margin: 3rem 0 2rem;
        text-align: center;
        font-weight: normal;
      }
      
      .accordion-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
        margin-bottom: 2rem;
      }
      
      @media (max-width: 768px) {
        .accordion-container {
          grid-template-columns: 1fr;
        }
      }
      
      .accordion {
        border: 1px solid rgba(255, 255, 255, 0.2);
        margin-bottom: 0.5rem;
      }
      
      .accordion-header {
        padding: 1rem;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: background-color ${config.transitionSpeed} ease;
      }
      
      .accordion-header:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
      
      .accordion-header-text {
        margin: 0;
        font-size: 1rem;
      }
      
      .accordion-icon {
        width: 12px;
        height: 12px;
        position: relative;
      }
      
      .accordion-icon:before,
      .accordion-icon:after {
        content: '';
        position: absolute;
        background-color: ${config.textColor};
        transition: transform ${config.transitionSpeed} ease;
      }
      
      .accordion-icon:before {
        top: 5px;
        left: 0;
        width: 12px;
        height: 2px;
      }
      
      .accordion-icon:after {
        top: 0;
        left: 5px;
        width: 2px;
        height: 12px;
      }
      
      .accordion.active .accordion-icon:after {
        transform: rotate(90deg);
      }
      
      .accordion-content {
        max-height: 0;
        overflow: hidden;
        transition: max-height ${config.transitionSpeed} ease;
        padding: 0 1rem;
      }
      
      .accordion.active .accordion-content {
        max-height: 500px;
        padding: 1rem;
      }
      
      .charter-steps {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
      }
      
      @media (max-width: 768px) {
        .charter-steps {
          grid-template-columns: 1fr;
        }
      }
      
      .step-card {
        background-color: white;
        color: #333;
        padding: 2rem;
        border-radius: 4px;
        position: relative;
      }
      
      .step-letter {
        font-size: 4rem;
        color: ${config.accentColor};
        font-weight: bold;
        margin-bottom: 1rem;
      }
      
      .step-title {
        font-weight: bold;
        margin-bottom: 1rem;
        color: #444;
        text-transform: uppercase;
      }
      
      .step-description {
        font-size: 0.9rem;
        line-height: 1.5;
      }
      
      .step-arrow {
        position: absolute;
        right: 1rem;
        bottom: 1rem;
        color: #ccc;
        font-size: 1.5rem;
      }
    `;
    
    // Create HTML content
    const content = document.createElement('div');
    content.classList.add('charter-container');
    content.innerHTML = `
      <h2 class="charter-heading">The Partnership Charter covers every topic in a Partnership Agreement and much, much more</h2>
      
      <div class="accordion-container">
        <div class="accordion-column">
          <div class="accordion">
            <div class="accordion-header">
              <p class="accordion-header-text">Vision and Direction</p>
              <div class="accordion-icon"></div>
            </div>
            <div class="accordion-content">
              <p>Partners establish a shared vision and direction for their business or project, ensuring alignment on long-term goals and strategic priorities.</p>
            </div>
          </div>
          
          <div class="accordion">
            <div class="accordion-header">
              <p class="accordion-header-text">Personal Values</p>
              <div class="accordion-icon"></div>
            </div>
            <div class="accordion-content">
              <p>Understanding each partner's core values helps identify alignment and potential conflicts in approaches to business and decision-making.</p>
            </div>
          </div>
          
          <div class="accordion">
            <div class="accordion-header">
              <p class="accordion-header-text">Expectations</p>
              <div class="accordion-icon"></div>
            </div>
            <div class="accordion-content">
              <p>Partners outline what they expect from each other and from the partnership, creating clarity and preventing future misunderstandings.</p>
            </div>
          </div>
          
          <div class="accordion">
            <div class="accordion-header">
              <p class="accordion-header-text">Governance</p>
              <div class="accordion-icon"></div>
            </div>
            <div class="accordion-content">
              <p>Establishing decision-making processes, meeting structures, and leadership roles provides a framework for effective partnership management.</p>
            </div>
          </div>
        </div>
        
        <div class="accordion-column">
          <div class="accordion active">
            <div class="accordion-header">
              <p class="accordion-header-text">Conflict-Handling Styles</p>
              <div class="accordion-icon"></div>
            </div>
            <div class="accordion-content">
              <p>What entrepreneurs refer to as "inevitable conflict" is the number one reason many people avoid partnerships. By taking an assessment, exploring each partner's conflict handling style, and developing behavioral commitments to one another about how they'll communicate, they boost their confidence they can talk productively about their differences.</p>
            </div>
          </div>
          
          <div class="accordion">
            <div class="accordion-header">
              <p class="accordion-header-text">Personal Styles</p>
              <div class="accordion-icon"></div>
            </div>
            <div class="accordion-content">
              <p>Understanding each partner's work style, communication preferences, and decision-making approach helps create effective collaboration strategies.</p>
            </div>
          </div>
          
          <div class="accordion">
            <div class="accordion-header">
              <p class="accordion-header-text">Ownership</p>
              <div class="accordion-icon"></div>
            </div>
            <div class="accordion-content">
              <p>Clear agreements about ownership percentages, equity distribution, and future changes to ownership structure prevent major disagreements.</p>
            </div>
          </div>
          
          <div class="accordion">
            <div class="accordion-header">
              <p class="accordion-header-text">Scenario Planning</p>
              <div class="accordion-icon"></div>
            </div>
            <div class="accordion-content">
              <p>Partners plan for various scenarios, including success, challenges, and potential partnership changes, creating protocols for handling different situations.</p>
            </div>
          </div>
          
          <div class="accordion">
            <div class="accordion-header">
              <p class="accordion-header-text">Fairness</p>
              <div class="accordion-icon"></div>
            </div>
            <div class="accordion-content">
              <p>Partners establish principles and processes for ensuring fair treatment, compensation, and recognition throughout the partnership.</p>
            </div>
          </div>
        </div>
        
        <div class="accordion-column">
          <div class="accordion">
            <div class="accordion-header">
              <p class="accordion-header-text">Contributions and Rewards</p>
              <div class="accordion-icon"></div>
            </div>
            <div class="accordion-content">
              <p>Clearly defining what each partner contributes (time, money, expertise, connections) and how rewards will be distributed creates a foundation for fairness.</p>
            </div>
          </div>
          
          <div class="accordion">
            <div class="accordion-header">
              <p class="accordion-header-text">Roles & Authority</p>
              <div class="accordion-icon"></div>
            </div>
            <div class="accordion-content">
              <p>Delineating specific roles, responsibilities, and decision-making authority helps partners operate efficiently without stepping on each other's toes.</p>
            </div>
          </div>
          
          <div class="accordion">
            <div class="accordion-header">
              <p class="accordion-header-text">Money</p>
              <div class="accordion-icon"></div>
            </div>
            <div class="accordion-content">
              <p>Addressing compensation, profit distribution, expense policies, and financial management ensures alignment on monetary matters.</p>
            </div>
          </div>
          
          <div class="accordion">
            <div class="accordion-header">
              <p class="accordion-header-text">Managing Disagreements</p>
              <div class="accordion-icon"></div>
            </div>
            <div class="accordion-content">
              <p>Establishing protocols for handling disagreements, including escalation procedures and potential third-party involvement, creates a safety net for the partnership.</p>
            </div>
          </div>
        </div>
      </div>
      
      <h2 class="charter-steps-heading">The Charter process is comprised of 3 simple steps</h2>
      
      <div class="charter-steps">
        <div class="step-card">
          <div class="step-letter">D</div>
          <div class="step-title">Discover</div>
          <div class="step-description">
            The PC Workbook is like taking a short course in partnerships. It covers every critical topic so partners can individually discover the issues and write their thoughts — the first step in the designing a healthy, resilient partnership.
          </div>
          <div class="step-arrow">→</div>
        </div>
        
        <div class="step-card">
          <div class="step-letter">D</div>
          <div class="step-title">Discuss</div>
          <div class="step-description">
            Going back and forth — sharing and listening — partners reveal and discuss what each person thinks is critical to their success. They build on a foundation of each person's ideas. It's a creative, unique step in the process.
          </div>
          <div class="step-arrow">→</div>
        </div>
        
        <div class="step-card">
          <div class="step-letter">D</div>
          <div class="step-title">Document</div>
          <div class="step-description">
            Each partner independently reviews and comments on each unit draft. The advisor reconciles the feedback and a new draft is written. A 70-100 page Charter memorializes the partners' understandings and agreements.
          </div>
          <div class="step-arrow">→</div>
        </div>
      </div>
    `;
    
    // Add event listeners for accordions
    const addAccordionListeners = () => {
      const accordions = content.querySelectorAll('.accordion-header');
      accordions.forEach(header => {
        header.addEventListener('click', () => {
          const accordion = header.parentElement;
          const isActive = accordion.classList.contains('active');
          
          if (isActive) {
            accordion.classList.remove('active');
          } else {
            accordion.classList.add('active');
          }
        });
      });
    };
    
    // Append style and content to shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(content);
    
    // Setup accordion functionality after content is added
    setTimeout(addAccordionListeners, 0);
    
    // Replace script tag with our container
    currentScript.parentNode.replaceChild(container, currentScript);
  })();
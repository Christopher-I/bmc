/**
 * BMC Associates PC Process Section Embed Script
 *
 * This script creates an embeddable accordion section for the PC Process
 * with perfectly synchronized accordion and arrow animations.
 */

(function () {
  // Get current script tag
  const currentScript = document.currentScript;

  // Get configuration from data attributes
  const config = {
    backgroundColor: currentScript.getAttribute("data-background") || "#1e4164",
    textColor: currentScript.getAttribute("data-text-color") || "#ffffff",
    accentColor: currentScript.getAttribute("data-accent-color") || "#d5ad36",
    headingFont: currentScript.getAttribute("data-heading-font") || "serif",
    bodyFont: currentScript.getAttribute("data-body-font") || "sans-serif",
    buttonColor: currentScript.getAttribute("data-button-color") || "#d5ad36",
    buttonText: currentScript.getAttribute("data-button-text") || "Contact BMC",
    buttonRadius: currentScript.getAttribute("data-button-radius") || "4",
    accordionRadius: currentScript.getAttribute("data-accordion-radius") || "4",
    transitionSpeed:
      currentScript.getAttribute("data-transition-speed") || "0.3",
  };

  // Animation duration variable to ensure synchronized animations
  const animationDuration = `${config.transitionSpeed}s`;

  // Create container element
  const container = document.createElement("div");

  // Create shadow DOM for style isolation
  const shadow = container.attachShadow({ mode: "open" });

  // Add styles
  const style = document.createElement("style");
  style.textContent = `
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
    

    .fairness-row {
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
    }
    
    .fairness-row .accordion {
      width: 33%;
    }
    
    @media (max-width: 768px) {

      .fairness-row .accordion {
        width: 100%;
      }
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

  // Create HTML content
  const content = document.createElement("div");
  content.classList.add("pc-container");
  content.innerHTML = `
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

  // Add event listeners for accordions using actual height measurements
  const addAccordionListeners = () => {
    const accordions = content.querySelectorAll(".accordion");
    let activeAccordion = null;

    accordions.forEach((accordion) => {
      const header = accordion.querySelector(".accordion-header");
      const content = accordion.querySelector(".accordion-content");
      const contentInner = accordion.querySelector(".accordion-content-inner");

      // Store the actual height of content
      const getContentHeight = () =>
        contentInner.getBoundingClientRect().height;

      header.addEventListener("click", () => {
        // If this accordion is already active, close it
        if (activeAccordion === accordion) {
          // Set height to 0 to animate closing
          content.style.height = "0px";

          // Remove active class
          accordion.classList.remove("active");
          activeAccordion = null;
        } else {
          // Close currently active accordion if there is one
          if (activeAccordion) {
            const activeContent =
              activeAccordion.querySelector(".accordion-content");

            // Animate to 0
            activeContent.style.height = "0px";

            // Remove active class
            activeAccordion.classList.remove("active");
          }

          // Open this accordion
          accordion.classList.add("active");
          content.style.height = getContentHeight() + "px";

          // Store as active accordion
          activeAccordion = accordion;
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

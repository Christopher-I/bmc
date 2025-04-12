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
      font-family: ${config.bodyFont}; =
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
            <p>In the excitement of launching their companies, partners are often so eager to begin (and pressed for time) they short circuit this fundamental discussion. Exploring their ideas of where they each want the company to go and how it's going to get there is critical to ensure they're not excited about two slightly different businesses.</p>
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
            <p>What entrepreneurs refer to as "inevitable conflict" is the number one reason many people avoid partnerships. By taking an assessment, exploring each partner's conflict-handling style, and developing behavioral commitments to one another about how they'll communicate, they boost their confidence they can talk productively about their differences.</p>
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
            <p>Before diving into the details of financial rewards or ownership percentages, partners should contemplate the entire range of skills, assets, expertise, etc. that all the partners plan to contribute to the partnership as well as the money, perks, benefits, and other rewards that each partner hopes to receive.</p>
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
            <p>Personal values drive and motivate partners. They are the underpinnings of their decisions. They're the guideposts they rely on to chart their course through the myriad dilemmas they face every day. Partners need to understand their own and each other's values to work effectively and harmoniously.</p>
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
            <p>Research has demonstrated that people imagine they know other people better than they really do and some people hold onto those misunderstandings. Digging into feedback from style assessments helps partners understand one another and helps them make behavioral commitments to one another so their day-to-day interactions are much more collaborative and satisfying.</p>
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
            <p>Dividing roles and authority is advantageous for both partners and the business itself. Using a detailed roles table and clear levels of authority, partners discuss responsibilities and carefully specify the levels of authority each partner will have for each of their responsibilities. The result is far fewer turf battles and misunderstandings.</p>
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
            <p>Many people say they avoid partnerships because partners so frequently complain about "unmet expectations," which can feel like breaking a trust. The problem is partners routinely fail to share their expectations with one another. When partners explore their expectations from a number of different perspectives, they reduce the risk of this problem and build greater trust.</p>
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
            <p>Equity percentages are sometimes a major focus of partners. Despite being a critical topic and very complex, there's very little written on the topic. Even some seasoned entrepreneurs misunderstand the real significance of equity percentages and the relationships between percentages and other issues like compensation and control. This unit "unpacks" those interrelated topics.</p>
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
            <p>For many co-owners determining pay, distributions, dividends, benefits, and perks is one of the toughest assignments they have, and one that can result in divisive negotiations. Provocative questions covering the entire span of money issues and partners thoughtful answers, assist Guides to skillfully facilitate discussions and negotiations, and document everyone's understandings.</p>
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
            <p>Most closely held companies have a Board but rarely do partners understand the span of decision-making authority of the Board, owners, and managers. Really "getting" how these three entities can operate without stepping on the others' toes puts partners at a distinct advantage and ready for growth without all the normal growing pains.</p>
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
            <p>A wildly successful businessman once said, "All events should be crossed in imagination before reality." This unit sets up partners to "think the unthinkable" and become more confident they'll be able to handle whatever anybody – including their partners – might throw their way. These exercises also teach partners more about one another so they don't have to wait for a crisis to learn how a partner might respond.</p>
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
            <p>Even though the Charter process is designed to significantly reduce the likelihood of destructive conflicts, it's still important to have agreed-upon strategies just in case. This unit helps partners identify more strategies for handling difficult conversations as well as a sophisticated multistep process for handling even major conflict without ever resorting to litigation.</p>
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
            <p>The concept of fairness is at the heart of all successful partnerships, but it's often taken for granted: we don't think about it until it doesn't feel equitable. Often, that's too late. Fairness discussions are hardwired into the PC process so partners have productive ways to think and talk about them.</p>
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
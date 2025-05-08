// src/components/PCProcess/PCProcessShared.js

/**
 * PC Process Shared Utilities and Code Templates
 */

/**
 * Shared accordion data that can be used by both the preview and generator
 */
export const accordionData = [
  {
    title: "Vision & Direction",
    content: "In the excitement of launching their companies, partners are often so eager to begin (and pressed for time) they short circuit this fundamental discussion. Exploring their ideas of where they each want the company to go and how it's going to get there is critical to ensure they're not excited about two slightly different businesses."
  },
  {
    title: "Conflict Handling Styles",
    content: "What entrepreneurs refer to as 'inevitable conflict' is the number one reason many people avoid partnerships. By taking an assessment, exploring each partner's conflict handling style, and developing behavioral commitments to one another about how they'll communicate, they boost their confidence they can talk productively about their differences."
  },
  {
    title: "Contributions & Rewards",
    content: "Before diving into the details of financial rewards or ownership percentages, partners should contemplate the entire range of skills, assets, expertise, etc. that all the partners plan to contribute to the partnership as well as the money, perks, benefits, and other rewards that each partner hopes to receive."
  },
  {
    title: "Personal Values",
    content: "Personal values drive and motivate partners. They are the underpinnings of their decisions. They're the guideposts they rely on to chart their course through the myriad dilemmas they face every day. Partners need to understand their own and each other's values to work effectively and harmoniously."
  },
  {
    title: "Personal Styles",
    content: "Research has demonstrated that people imagine they know other people better than they really do and some people hold onto those misunderstandings. Digging into feedback from style assessments helps partners understand one another and helps them make behavioral commitments to one another so their day-to-day interactions are much more collaborative and satisfying."
  },
  {
    title: "Roles & Authority",
    content: "Dividing roles and authority is advantageous for both partners and the business itself. Using a detailed roles table and clear levels of authority, partners discuss responsibilities and carefully specify the levels of authority each partner will have for each of their responsibilities. The result is far fewer turf battles and misunderstandings."
  },
  {
    title: "Expectations",
    content: "Many people say they avoid partnerships because partners so frequently complain about 'unmet expectations,' which can feel like breaking a trust. The problem is partners routinely fail to share their expectations with one another. When partners explore their expectations from a number of different perspectives, they reduce the risk of this problem and build greater trust."
  },
  {
    title: "Ownership",
    content: "Equity percentages are sometimes a major focus of partners. Despite being a critical topic and very complex, there's very little written on the topic. Even some seasoned entrepreneurs misunderstand the real significance of equity percentages and the relationships between percentages and other issues like compensation and control. This unit 'unpacks' those interrelated topics."
  },
  {
    title: "Money",
    content: "For many co-owners determining pay, distributions, dividends, benefits, and perks is one of the toughest assignments they have, and one that can result in divisive negotiations. Provocative questions covering the entire span of money issues and partners thoughtful answers, assist Guides to skillfully facilitate discussions and negotiations, and document everyone's understandings."
  },
  {
    title: "Governance",
    content: "Most closely held companies have a Board but rarely do partners understand the span of decision-making authority of the Board, owners, and managers. Really 'getting' how these three entities can operate without stepping on the others' toes puts partners at a distinct advantage and ready for growth without all the normal growing pains."
  },
  {
    title: "Scenario Planning",
    content: "A wildly successful businessman once said, 'All events should be crossed in imagination before reality.' This unit sets up partners to 'think the unthinkable' and become more confident they'll be able to handle whatever anybody – including their partners – might throw their way. These exercises also teach partners more about one another so they don't have to wait for a crisis to learn how a partner might respond."
  },
  {
    title: "Managing Disagreements",
    content: "Even though the Charter process is designed to significantly reduce the likelihood of destructive conflicts, it's still important to have agreed-upon strategies just in case. This unit helps partners identify more strategies for handling difficult conversations as well as a sophisticated multistep process for handling even major conflict without ever resorting to litigation."
  },
  {
    title: "Fairness",
    content: "The concept of fairness is at the heart of all successful partnerships, but it's often taken for granted: we don't think about it until it doesn't feel equitable. Often, that's too late. Fairness discussions are hardwired into the PC process so partners have productive ways to think and talk about them."
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

/**
 * Generates the embed code for the PC Process component
 * using the external loader approach
 * 
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - External script reference as a string
 */
export const generateEmbedCode = (config) => {
  const {
    backgroundColor = "#1e4164",
    textColor = "#ffffff",
    accentColor = "#d5ad36",
    headingFont = "serif",
    bodyFont = "sans-serif",
    buttonColor = "#d5ad36",
    buttonText = "Contact PHCG",
    buttonRadius = 4,
    accordionRadius = 4,
    transitionSpeed = 0.3
  } = config || {};

  return `<script 
  src="https://bmc-neon.vercel.app/embed/loaders/pc-process-loader.js"
  data-background="${backgroundColor}"
  data-text-color="${textColor}"
  data-accent-color="${accentColor}"
  data-heading-font="${headingFont}"
  data-body-font="${bodyFont}"
  data-button-color="${buttonColor}"
  data-button-text="${buttonText}"
  data-button-radius="${buttonRadius}"
  data-accordion-radius="${accordionRadius}"
  data-transition-speed="${transitionSpeed}">
</script>`;
};
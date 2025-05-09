// src/components/CharterTypes/CharterTypesShared.js

/**
 * Charter Types Shared Utilities and Code Templates
 */

// Shared data for the partner types
export const cardData = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 7C16 8.06087 15.5786 9.07828 14.8284 9.82843C14.0783 10.5786 13.0609 11 12 11C10.9391 11 9.92172 10.5786 9.17157 9.82843C8.42143 9.07828 8 8.06087 8 7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>,
    title: "Existing Partners",
    content: "Existing partners usually know they have \"slivers of ambiguity\" lurking in their partner arrangement even after decades of working together. Preemptively addressing those ambiguities sooner rather than later increases the likelihood partner satisfaction and business success."
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12L12 21M12 12L7 17M12 12L17 17M12 12V8C12 6.4087 12.6321 4.88258 13.7574 3.75736C14.8826 2.63214 16.4087 2 18 2V2C18.7956 2 19.5587 2.15328 20.2539 2.45025C20.949 2.74722 21.5608 3.18152 22.0502 3.72152C22.5395 4.26152 22.8944 4.89283 23.0935 5.57534C23.2925 6.25785 23.3316 6.9735 23.2079 7.67217C23.0842 8.37085 22.8005 9.03461 22.3787 9.6161C21.9569 10.1976 21.4066 10.6807 20.7703 11.0334C20.134 11.386 19.4271 11.6004 18.7022 11.6635C17.9773 11.7265 17.2474 11.6373 16.56 11.402L12 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>,
    title: "Startups",
    content: "Startups are notorious for focusing on everything the business needs to launch (money, employees, equity, etc.) but not what the partners need most: a rock solid set of understandings and agreements. Failing to clarify their \"deal\" puts them at serious risk and as a result, 50% of all startups will fail in less than 5 years."
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>,
    title: "Next-Gen Partners",
    content: "Next-gen partners in family businesses have a steep hill to climb working as true partners. Each sibling, or cousin, needs to thoroughly prepare using the Workbook for conversations like they've never had before. Their agreements will shape both their business and family relationships... and those of their children as well!"
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 12L14 7H9L8 12H2L12 21L22 12H15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 3L11 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>,
    title: "Partners in Transition",
    content: "Partners in transition know they're at a critical juncture, whether they're adding a partner or merging companies. By taking advantage of the opportunity to plan their compensation, equity, decision-making and more, they'll significantly improve their likelihood of having a successful transition."
  }
];

/**
 * React utility to handle accordion setup in the CharterTypesPreview component
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
      // Force reflow
      void content.offsetHeight;
      
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
      // Force reflow
      void activeContent.offsetHeight;
      
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
 * Generates the embed code for the Charter Types component
 * using the external loader approach
 * 
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - External script reference as a string
 */
export const generateEmbedCode = (config) => {
  const {
    backgroundColor = "#ffffff",
    textColor = "#333333",
    headingColor = "#1e3553",
    headingFont = "serif",
    bodyFont = "sans-serif"
  } = config || {};

  return `<script 
  src="https://bmc-neon.vercel.app/embed/loaders/charter-types-loader.js"
  data-background="${backgroundColor}"
  data-text-color="${textColor}"
  data-heading-color="${headingColor}"
  data-heading-font="${headingFont}"
  data-body-font="${bodyFont}">
</script>`;
};
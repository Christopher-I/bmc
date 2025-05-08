/**
 * Charter Types Block Loader
 * This small script loads the content and styles from external files
 * and handles accordion functionality
 */
(function() {
    // Get the current script tag
    const currentScript = document.currentScript;
    
    // Extract all data attributes
    const config = {};
    for (const attr of currentScript.attributes) {
      if (attr.name.startsWith('data-')) {
        const key = attr.name.substring(5); // Remove 'data-' prefix
        config[key] = attr.value;
      }
    }
    
    // Create container
    const container = document.createElement('div');
    
    // Create shadow DOM for style isolation
    const shadow = container.attachShadow({ mode: 'open' });
    
    // Create placeholder while loading
    const placeholder = document.createElement('div');
    placeholder.textContent = 'Loading Charter Types section...';
    placeholder.style.padding = '20px';
    placeholder.style.textAlign = 'center';
    shadow.appendChild(placeholder);
    
    // Replace the script tag with the container
    currentScript.parentNode.replaceChild(container, currentScript);
    
    // Function to load CSS
    const loadStyles = async () => {
      try {
        const response = await fetch('https://bmc-neon.vercel.app/embed/styles/charter-types-styles.css');
        if (!response.ok) throw new Error('Failed to load styles');
        
        const cssText = await response.text();
        
        // Apply custom colors from config
        let customizedCSS = cssText;
        
        // Replace CSS variables with config values
        if (config['background']) {
          customizedCSS = customizedCSS.replace(/--background-color:[^;]+;/g, `--background-color: ${config['background']};`);
        }
        if (config['text-color']) {
          customizedCSS = customizedCSS.replace(/--text-color:[^;]+;/g, `--text-color: ${config['text-color']};`);
        }
        if (config['heading-color']) {
          customizedCSS = customizedCSS.replace(/--heading-color:[^;]+;/g, `--heading-color: ${config['heading-color']};`);
        }
        
        // Create and add style element
        const style = document.createElement('style');
        style.textContent = customizedCSS;
        shadow.appendChild(style);
        
        return true;
      } catch (error) {
        console.error('Error loading styles:', error);
        return false;
      }
    };
    
    // Function to load HTML content
    const loadContent = async () => {
      try {
        const response = await fetch('https://bmc-neon.vercel.app/embed/content/charter-types-content.html');
        if (!response.ok) throw new Error('Failed to load content');
        
        let htmlContent = await response.text();
        
        // Replace placeholders with config values
        Object.keys(config).forEach(key => {
          const placeholder = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
          htmlContent = htmlContent.replace(placeholder, config[key]);
        });
        
        // Create content element
        const contentElement = document.createElement('div');
        contentElement.innerHTML = htmlContent;
        
        // Remove the placeholder and add the content
        shadow.removeChild(placeholder);
        shadow.appendChild(contentElement);
        
        // Initialize accordion functionality
        setupAccordion();
        
        return true;
      } catch (error) {
        console.error('Error loading content:', error);
        placeholder.textContent = 'Error loading Charter Types section';
        return false;
      }
    };
    
    // Function to set up accordion functionality
    const setupAccordion = () => {
      // References
      const content = shadow.querySelector('.charter-types-container');
      const accordions = shadow.querySelectorAll('.accordion');
      let activeAccordion = null;
      
      // Apply initial state - all accordions closed
      accordions.forEach(accordion => {
        const accordionContent = accordion.querySelector('.accordion-content');
        accordionContent.style.height = '0px';
      });
      
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
      
      // Add the event listener to the container
      content.addEventListener('click', handleAccordionClick);
    };
    
    // Load everything
    (async () => {
      await loadStyles();
      await loadContent();
    })();
  })();
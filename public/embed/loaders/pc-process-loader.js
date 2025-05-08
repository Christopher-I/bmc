/**
 * PC Process Block Loader
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
    placeholder.textContent = 'Loading PC Process section...';
    placeholder.style.padding = '20px';
    placeholder.style.textAlign = 'center';
    shadow.appendChild(placeholder);
    
    // Replace the script tag with the container
    currentScript.parentNode.replaceChild(container, currentScript);
    
    // Function to load CSS
    const loadStyles = async () => {
      try {
        const response = await fetch('https://bmc-neon.vercel.app/embed/styles/pc-process-styles.css');
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
        if (config['accent-color']) {
          customizedCSS = customizedCSS.replace(/--accent-color:[^;]+;/g, `--accent-color: ${config['accent-color']};`);
        }
        if (config['button-color']) {
          customizedCSS = customizedCSS.replace(/--button-color:[^;]+;/g, `--button-color: ${config['button-color']};`);
        }
        if (config['accordion-radius']) {
          customizedCSS = customizedCSS.replace(/--accordion-radius:[^;]+;/g, `--accordion-radius: ${config['accordion-radius']}px;`);
        }
        if (config['button-radius']) {
          customizedCSS = customizedCSS.replace(/--button-radius:[^;]+;/g, `--button-radius: ${config['button-radius']}px;`);
        }
        if (config['transition-speed']) {
          customizedCSS = customizedCSS.replace(/--transition-speed:[^;]+;/g, `--transition-speed: ${config['transition-speed']}s;`);
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
        const response = await fetch('https://bmc-neon.vercel.app/embed/content/pc-process-content.html');
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
        placeholder.textContent = 'Error loading PC Process section';
        return false;
      }
    };
    
    // Function to set up accordion functionality
    const setupAccordion = () => {
      // References
      const accordions = shadow.querySelectorAll('.accordion');
      let activeAccordion = null;
      
      // Initialize all accordions as closed
      accordions.forEach(accordion => {
        const content = accordion.querySelector('.accordion-content');
        content.style.height = '0px';
      });
      
      // Add event listener for accordion functionality
      accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        const content = accordion.querySelector('.accordion-content');
        const contentInner = accordion.querySelector('.accordion-content-inner');
        
        // Function to get content height
        const getContentHeight = () => contentInner.getBoundingClientRect().height;
        
        header.addEventListener('click', (e) => {
          // Prevent event bubbling
          e.stopPropagation();
          
          // If this accordion is already active, close it
          if (activeAccordion === accordion) {
            // Set current height explicitly to begin transition
            content.style.height = `${getContentHeight()}px`;
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
              activeContent.style.height = `${activeHeight}px`;
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
            content.style.height = `${getContentHeight()}px`;
            
            // Store as active accordion
            activeAccordion = accordion;
          }
        });
      });
    };
    
    // Load everything
    (async () => {
      await loadStyles();
      await loadContent();
    })();
  })();
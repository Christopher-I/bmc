/**
 * DYP Advantages Block Loader
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
    placeholder.textContent = 'Loading DYP Advantages section...';
    placeholder.style.padding = '20px';
    placeholder.style.textAlign = 'center';
    shadow.appendChild(placeholder);
    
    // Replace the script tag with the container
    currentScript.parentNode.replaceChild(container, currentScript);
    
    // Function to load CSS
    const loadStyles = async () => {
      try {
        const response = await fetch('https://bmc-neon.vercel.app/embed/styles/dyp-advantages-styles.css');
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
        if (config['accordion-radius']) {
          customizedCSS = customizedCSS.replace(/--accordion-radius:[^;]+;/g, `--accordion-radius: ${config['accordion-radius']}px;`);
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
        const response = await fetch('https://bmc-neon.vercel.app/embed/content/dyp-advantages-content.html');
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
        placeholder.textContent = 'Error loading DYP Advantages section';
        return false;
      }
    };
    
    // Function to set up accordion functionality
    const setupAccordion = () => {
      // References
      const content = shadow.querySelector('.dyp-container');
      const accordionGrid = shadow.querySelector('.accordion-grid');
      let activeIndex = null;
      
      // Function to handle accordion clicks
      const handleAccordionClick = (e) => {
        const header = e.target.closest('.accordion-header');
        if (!header) return;
        
        const accordion = header.closest('.accordion');
        if (!accordion) return;
        
        const index = parseInt(accordion.getAttribute('data-index'), 10);
        const content = accordion.querySelector('.accordion-content');
        const contentInner = accordion.querySelector('.accordion-content-inner');
        const contentHeight = contentInner.getBoundingClientRect().height;
        
        if (activeIndex === index) {
          // Close this accordion
          content.style.height = '0px';
          accordion.classList.remove('active');
          activeIndex = null;
        } else {
          // Close all accordions
          const allAccordions = accordionGrid.querySelectorAll('.accordion');
          allAccordions.forEach(a => {
            a.classList.remove('active');
            const contentEl = a.querySelector('.accordion-content');
            if (contentEl) contentEl.style.height = '0px';
          });
          
          // Open the clicked accordion
          accordion.classList.add('active');
          content.style.height = `${contentHeight}px`;
          activeIndex = index;
        }
      };
      
      // Add listener for accordion clicks
      accordionGrid.addEventListener('click', handleAccordionClick);
      
      // Initialize all accordions to closed state
      const allAccordions = accordionGrid.querySelectorAll('.accordion');
      allAccordions.forEach(accordion => {
        const content = accordion.querySelector('.accordion-content');
        content.style.height = '0px';
      });
    };
    
    // Load everything
    (async () => {
      await loadStyles();
      await loadContent();
    })();
  })();
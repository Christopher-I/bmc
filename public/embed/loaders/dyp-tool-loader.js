/**
 * DYP Tool Block Loader
 * This small script loads the content and styles from external files
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
    
    // Helper to normalize image URL fallback logic
    const getSafeImageUrl = (src) => {
      if (!src || src === "" || src === "/dyp_tool.png") {
        return "https://bmc-neon.vercel.app/dyp_tool.png";
      }
      return src;
    };
    
    // Make sure image URL is properly set
    config['image-src'] = getSafeImageUrl(config['image-src']);
    
    // Create container
    const container = document.createElement('div');
    
    // Create shadow DOM for style isolation
    const shadow = container.attachShadow({ mode: 'open' });
    
    // Create placeholder while loading
    const placeholder = document.createElement('div');
    placeholder.textContent = 'Loading DYP Tool section...';
    placeholder.style.padding = '20px';
    placeholder.style.textAlign = 'center';
    shadow.appendChild(placeholder);
    
    // Replace the script tag with the container
    currentScript.parentNode.replaceChild(container, currentScript);
    
    // Function to load CSS
    const loadStyles = async () => {
      try {
        const response = await fetch('https://bmc-neon.vercel.app/embed/styles/dyp-tool-styles.css');
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
        if (config['image-radius']) {
          customizedCSS = customizedCSS.replace(/--image-radius:[^;]+;/g, `--image-radius: ${config['image-radius']}px;`);
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
        const response = await fetch('https://bmc-neon.vercel.app/embed/content/dyp-tool-content.html');
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
        
        return true;
      } catch (error) {
        console.error('Error loading content:', error);
        placeholder.textContent = 'Error loading DYP Tool section';
        return false;
      }
    };
    
    // Load everything
    (async () => {
      await loadStyles();
      await loadContent();
    })();
  })();
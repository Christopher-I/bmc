/**
 * Book Promo Block Loader
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
    
    // Helper to normalize image/logo fallback logic
    const getSafeImageUrl = (src, type) => {
      if (!src || src === "") {
        switch (type) {
          case "book":
            return "https://bmc-neon.vercel.app/book_partnership_charter.png";
          case "barnes":
            return "https://bmc-neon.vercel.app/logo_barnes_noble.png";
          case "google":
            return "https://bmc-neon.vercel.app/logo_google_play.png";
          case "amazon":
            return "https://bmc-neon.vercel.app/logo_amazon.png";
          case "indie":
            return "https://bmc-neon.vercel.app/logo_indie_bound.png";
          case "audible":
            return "https://bmc-neon.vercel.app/logo_audible.png";
          default:
            return "https://bmc-neon.vercel.app/book_partnership_charter.png";
        }
      }
      return src;
    };
    
    // Make sure all image URLs are properly set
    config['book-image'] = getSafeImageUrl(config['book-image'], "book");
    config['barnes-logo'] = getSafeImageUrl(config['barnes-logo'], "barnes");
    config['google-logo'] = getSafeImageUrl(config['google-logo'], "google");
    config['amazon-logo'] = getSafeImageUrl(config['amazon-logo'], "amazon");
    config['indie-logo'] = getSafeImageUrl(config['indie-logo'], "indie");
    config['audible-logo'] = getSafeImageUrl(config['audible-logo'], "audible");
    
    // Create container
    const container = document.createElement('div');
    
    // Create shadow DOM for style isolation
    const shadow = container.attachShadow({ mode: 'open' });
    
    // Create placeholder while loading
    const placeholder = document.createElement('div');
    placeholder.textContent = 'Loading Book Promo section...';
    placeholder.style.padding = '20px';
    placeholder.style.textAlign = 'center';
    shadow.appendChild(placeholder);
    
    // Replace the script tag with the container
    currentScript.parentNode.replaceChild(container, currentScript);
    
    // Function to load CSS
    const loadStyles = async () => {
      try {
        const response = await fetch('https://bmc-neon.vercel.app/embed/styles/book-promo-styles.css');
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
        if (config['border-radius']) {
          customizedCSS = customizedCSS.replace(/--border-radius:[^;]+;/g, `--border-radius: ${config['border-radius']}px;`);
        }
        if (config['margin-top']) {
          customizedCSS = customizedCSS.replace(/--margin-top:[^;]+;/g, `--margin-top: ${config['margin-top']}px;`);
        }
        if (config['margin-bottom']) {
          customizedCSS = customizedCSS.replace(/--margin-bottom:[^;]+;/g, `--margin-bottom: ${config['margin-bottom']}px;`);
        }
        if (config['invert-logos'] === 'true') {
          customizedCSS = customizedCSS.replace(/--invert-logos:[^;]+;/g, '--invert-logos: invert(1);');
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
        const response = await fetch('https://bmc-neon.vercel.app/embed/content/book-promo-content.html');
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
        placeholder.textContent = 'Error loading Book Promo section';
        return false;
      }
    };
    
    // Load everything
    (async () => {
      await loadStyles();
      await loadContent();
    })();
  })();
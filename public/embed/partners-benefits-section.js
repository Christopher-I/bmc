/**
 * BMC Associates Partners Benefits Section Embed Script
 * 
 * This script creates an embeddable section highlighting partner benefits
 * with a two-column layout.
 */

(function() {
    // Get current script tag
    const currentScript = document.currentScript;
    
    // Get configuration from data attributes
    const config = {
      backgroundColor: currentScript.getAttribute('data-background') || '#f5f7fa',
      textColor: currentScript.getAttribute('data-text-color') || '#333333',
      headingColor: currentScript.getAttribute('data-heading-color') || '#1e4164',
      accentColor: currentScript.getAttribute('data-accent-color') || '#4a69dd',
      headingFont: currentScript.getAttribute('data-heading-font') || 'serif',
      bodyFont: currentScript.getAttribute('data-body-font') || 'sans-serif',
      buttonColor: currentScript.getAttribute('data-button-color') || '#4a69dd',
      buttonText: currentScript.getAttribute('data-button-text') || 'Learn More',
      buttonRadius: currentScript.getAttribute('data-button-radius') || '4',
      imageRadius: currentScript.getAttribute('data-image-radius') || '8',
      imageSrc: currentScript.getAttribute('data-image-src') || 'https://bmc-neon.vercel.app/trust_confidence.png'
    };
    
    // Create container element
    const container = document.createElement('div');
    
    // Create shadow DOM for style isolation
    const shadow = container.attachShadow({ mode: 'open' });
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .pb-container {
        background-color: ${config.backgroundColor};
        color: ${config.textColor};
        font-family: ${config.bodyFont};
        padding: 8rem 2rem;
        max-width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .pb-content-wrapper {
        max-width: 1200px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        gap: 6rem;
        margin: 0 auto;
      }
      
      .pb-image-container {
        flex: 0 0 38%;
        max-width: 38%;
      }
      
      .pb-image {
        width: 100%;
        height: auto;
        border-radius: ${config.imageRadius}px;
        background-color: #eeeeee;
      }
      
      .pb-content {
        flex: 0 0 50%;
        max-width: 50%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
      
      .pb-heading {
        font-family: ${config.headingFont};
        font-size: 2.5rem;
        line-height: 1.2;
        margin: 0;
        color: ${config.headingColor};
      }
      
      .pb-benefit-list {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        padding: 0;
        margin: 0;
        list-style: none;
      }
      
      .pb-benefit-item {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
      }
      
      .pb-check-icon {
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: ${config.accentColor};
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        margin-top: 0.2rem;
      }
      
      .pb-benefit-text {
        font-size: 1.1rem;
        line-height: 1.5;
        margin: 0;
      }
      
      .pb-button {
        display: inline-block;
        padding: 0.9rem 2.5rem;
        background-color: ${config.buttonColor};
        color: white;
        text-decoration: none;
        border-radius: ${config.buttonRadius}px;
        font-family: ${config.bodyFont};
        font-size: 1rem;
        font-weight: 500;
        border: none;
        cursor: pointer;
        transition: background-color 0.2s ease;
        margin-top: 1.5rem;
        align-self: flex-start;
      }
      
      .pb-button:hover {
        background-color: ${config.buttonColor}dd;
      }
      
      @media (max-width: 900px) {
        .pb-content-wrapper {
          flex-direction: column;
          gap: 3rem;
          align-items: center;
        }
        
        .pb-image-container {
          max-width: 80%;
          order: 1;
        }
        
        .pb-content {
          max-width: 90%;
          order: 2;
        }
        
        .pb-heading {
          font-size: 2rem;
          text-align: center;
        }
        
        .pb-button {
          align-self: center;
        }
      }
    `;
    
    // Create content elements
    const content = document.createElement('div');
    content.classList.add('pb-container');
    content.innerHTML = `
      <div class="pb-content-wrapper">
        <div class="pb-image-container">
          <img class="pb-image" src="${config.imageSrc}" alt="Partnership Trust Diagram">
        </div>
        <div class="pb-content">
          <h2 class="pb-heading">Partners get exactly what they're looking for</h2>
          <ul class="pb-benefit-list">
            <li class="pb-benefit-item">
              <div class="pb-check-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <p class="pb-benefit-text">Confidence they've thoroughly addressed the issues that create partner conflict</p>
            </li>
            <li class="pb-benefit-item">
              <div class="pb-check-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <p class="pb-benefit-text">Specific ways to put their personal values and communication styles to practical, everyday use</p>
            </li>
            <li class="pb-benefit-item">
              <div class="pb-check-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <p class="pb-benefit-text">A document capturing their understandings, commitments, and agreements, which they can refer to whenever necessary</p>
            </li>
            <li class="pb-benefit-item">
              <div class="pb-check-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <p class="pb-benefit-text">Alignment on the future: where they're headed and their endgame</p>
            </li>
            <li class="pb-benefit-item">
              <div class="pb-check-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <p class="pb-benefit-text">A document they can revisit periodically for partnership "check-ups"</p>
            </li>
          </ul>
          <button class="pb-button">${config.buttonText}</button>
        </div>
      </div>
    `;
    
    // Append style and content to shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(content);
    
    // Replace script tag with our container
    currentScript.parentNode.replaceChild(container, document.currentScript);
  })();
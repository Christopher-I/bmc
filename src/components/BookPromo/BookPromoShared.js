// src/components/BookPromo/BookPromoShared.js

/**
 * Book Promo Shared Utilities and Code Templates
 */

/**
 * Helper to normalize image/logo fallback logic
 * @param {string} src - The image source string
 * @param {string} type - The type of image (book/logo)
 * @returns {string} - Safe image URL
 */
export const getSafeImageUrl = (src, type) => {
    if (!src) {
      switch (type) {
        case 'book':
          return "/book_partnership_charter.png";
        case 'barnes':
          return "/logo_barnes_noble.png";
        case 'google':
          return "/logo_google_play.png";
        case 'amazon':
          return "/logo_amazon.png";
        case 'indie':
          return "/logo_indie_bound.png";
        case 'audible':
          return "/logo_audible.png";
        default:
          return src;
      }
    }
    return src;
  };
  
  /**
   * Generates the CSS styles for the Book Promo component
   * @param {Object} config - Configuration object with styling parameters
   * @returns {string} - CSS styles as a string
   */
  export const generateBookPromoStyles = (config) => {
    return `
      .book-promo-container {
        background-color: ${config.backgroundColor || "#B88B4A"};
        color: ${config.textColor || "#ffffff"};
        font-family: ${config.bodyFont || "sans-serif"};
        padding: 3rem 2rem;
        border-radius: ${config.borderRadius || 10}px;
        max-width: 100%;
        box-sizing: border-box;
      }
  
      .book-promo-wrapper {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2rem;
      }
  
      .book-promo-content {
        flex: 1;
      }
  
      .book-promo-heading {
        font-family: ${config.headingFont || "serif"};
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
        line-height: 1.3;
      }
  
      .book-promo-text {
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 1.5rem;
      }
  
      .book-promo-quote {
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 3rem;
        font-style: italic;
      }
  
      .retailers-heading {
        text-align: center;
        margin-bottom: 1.5rem;
        font-weight: normal;
        font-size: 0.875rem;
        letter-spacing: 0.5px;
      }
  
      .retailers-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        flex-wrap: wrap;
        gap: 1rem;
      }
  
      .retailer-logo {
        width: 18%;
        text-align: center;
        margin-bottom: 1rem;
      }
  
      .retailer-logo img {
        height: 40px;
        width: auto;
        max-width: 100%;
        object-fit: contain;
        filter: ${config.invertLogos ? 'invert(1)' : 'none'};
      }
  
      .contact-text {
        text-align: center;
        font-size: 0.875rem;
        margin-top: 2rem;
      }
  
      .contact-link {
        color: ${config.textColor || "#ffffff"};
        text-decoration: underline;
        font-weight: bold;
      }
  
      .book-image-container {
        flex: 0 0 300px;
        display: flex;
        justify-content: flex-end;
        position: relative;
        height: 350px;
      }
  
      .book-image {
        width: 100%;
        max-width: 300px;
        height: auto;
        object-fit: contain;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
  
      @media (max-width: 900px) {
        .book-promo-wrapper {
          flex-direction: column;
          gap: 2rem;
        }
  
        .book-image-container {
          flex: none;
          height: auto;
          justify-content: center;
        }
  
        .book-image {
          position: relative;
          transform: none;
          max-width: 250px;
        }
  
        .retailers-container {
          justify-content: center;
        }
  
        .retailer-logo {
          width: 45%;
        }
      }
    `;
  };
  
  /**
   * Generates the HTML for the Book Promo component
   * @param {Object} config - Configuration object with styling parameters
   * @returns {string} - HTML content as a string
   */
  export const generateBookPromoHTML = (config) => {
    const retailers = [
      { name: 'Barnes & Noble', src: config.barnesNobleLogo },
      { name: 'Google Play', src: config.googlePlayLogo },
      { name: 'Amazon', src: config.amazonLogo },
      { name: 'IndieBound', src: config.indieBoundLogo },
      { name: 'Audible', src: config.audibleLogo }
    ];
  
    return `
      <div class="book-promo-wrapper">
        <div class="book-promo-content">
          <h2 class="book-promo-heading">
            Hands down the best book ever written about business partnerships
          </h2>
          
          <p class="book-promo-text">
            A typical Partnership Charter book review on Amazon or Audible reads something like this:
          </p>
          
          <p class="book-promo-quote">
            "If I'd only found this book 5 years ago when I got into a partnership with my best friend [or husband, officemate, sister]!"
          </p>
  
          <h3 class="retailers-heading">
            Order the Partnership Charter book from these retailers
          </h3>
  
          <div class="retailers-container">
            ${retailers.map(retailer => `
              <div class="retailer-logo">
                <img src="${retailer.src}" alt="${retailer.name}">
              </div>
            `).join('')}
          </div>
  
          <p class="contact-text">
            For discounts on 25 or more books, <a href="${config.contactLink}" class="contact-link">contact PHCG</a>
          </p>
        </div>
  
        <div class="book-image-container">
          <img class="book-image" src="${config.bookImageSrc}" alt="Partnership Charter Book">
        </div>
      </div>
    `;
  };
  
  /**
   * Generates the embed code for the Book Promo component
   * @param {Object} config - Configuration object with styling parameters
   * @returns {string} - Embed script as a string
   */
  export const generateBookPromoEmbedCode = (config) => {
    // Create a merged config with safe image URLs
    const mergedConfig = {
      ...config,
      bookImageSrc: getSafeImageUrl(config.bookImageSrc, 'book'),
      barnesNobleLogo: getSafeImageUrl(config.barnesNobleLogo, 'barnes'),
      googlePlayLogo: getSafeImageUrl(config.googlePlayLogo, 'google'),
      amazonLogo: getSafeImageUrl(config.amazonLogo, 'amazon'),
      indieBoundLogo: getSafeImageUrl(config.indieBoundLogo, 'indie'),
      audibleLogo: getSafeImageUrl(config.audibleLogo, 'audible')
    };
  
    return `<script>
  (function() {
    const config = ${JSON.stringify(mergedConfig)};
  
    const container = document.createElement('div');
    container.classList.add('book-promo-container');
  
    const shadow = container.attachShadow({ mode: 'open' });
  
    const style = document.createElement('style');
    style.textContent = \`${generateBookPromoStyles(mergedConfig)}\`;
  
    const content = document.createElement('div');
    content.classList.add('book-promo-container');
    content.innerHTML = \`${generateBookPromoHTML(mergedConfig)}\`;
  
    shadow.appendChild(style);
    shadow.appendChild(content);
  
    document.currentScript.parentNode.replaceChild(container, document.currentScript);
  })();
  </script>`;
  };
  
  /**
   * Default configuration for the Book Promo section
   */
  export const defaultBookPromoConfig = {
    backgroundColor: "#B88B4A",
    textColor: "#ffffff",
    headingFont: "serif",
    bodyFont: "sans-serif",
    borderRadius: 10,
    bookImageSrc: "/book_partnership_charter.png",
    contactLink: "https://www.partnershipcharter.com/book/",
    barnesNobleLogo: "/logo_barnes_noble.png",
    googlePlayLogo: "/logo_google_play.png",
    amazonLogo: "/logo_amazon.png",
    indieBoundLogo: "/logo_indie_bound.png",
    audibleLogo: "/logo_audible.png",
    invertLogos: false,
  };
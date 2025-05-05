/**
 * Post-haste Consulting Group Book Promo Section Embed Script
 *
 * This script creates an embeddable section for the Partnership Charter book promotion
 * with a two-column layout and retailer logos.
 */

(function () {
  // Get current script tag
  const currentScript = document.currentScript;

  // Get configuration from data attributes

  // In book-promo.js, update the config object:
  const config = {
    backgroundColor: currentScript.getAttribute("data-background") || "#CE950F",
    textColor: currentScript.getAttribute("data-text-color") || "#ffffff",
    headingFont: currentScript.getAttribute("data-heading-font") || "serif",
    bodyFont: currentScript.getAttribute("data-body-font") || "sans-serif",
    borderRadius: currentScript.getAttribute("data-border-radius") || "16",
    bookImageSrc:
      currentScript.getAttribute("data-book-image") ||
      "https://bmc-neon.vercel.app/book_partnership_charter.png",
    contactLink:
      currentScript.getAttribute("data-contact-link") ||
      "https://example.com/contact",
    barnesNobleLogo:
      currentScript.getAttribute("data-barnes-logo") ||
      "https://bmc-neon.vercel.app/logo_barnes_noble.png",
    googlePlayLogo:
      currentScript.getAttribute("data-google-logo") ||
      "https://bmc-neon.vercel.app/logo_google_play.png",
    amazonLogo:
      currentScript.getAttribute("data-amazon-logo") ||
      "https://bmc-neon.vercel.app/logo_amazon.png",
    indieBoundLogo:
      currentScript.getAttribute("data-indie-logo") ||
      "https://bmc-neon.vercel.app/logo_indie_bound.png",
    audibleLogo:
      currentScript.getAttribute("data-audible-logo") ||
      "https://bmc-neon.vercel.app/logo_audible.png",
    invertLogos: currentScript.getAttribute("data-invert-logos") === "true",
  };

  // Create container element
  const container = document.createElement("div");

  // Create shadow DOM for style isolation
  const shadow = container.attachShadow({ mode: "open" });

  // Add styles
  const style = document.createElement("style");
  style.textContent = `
        .book-promo-container {
          background-color: ${config.backgroundColor};
          color: ${config.textColor};
          font-family: ${config.bodyFont};
          padding: 3rem 2rem;
          border-radius: ${config.borderRadius}px;
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
          font-family: ${config.headingFont};
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
          filter: ${config.invertLogos ? "invert(1)" : "none"};
        }
    
        .contact-text {
          text-align: center;
          font-size: 0.875rem;
          margin-top: 2rem;
        }
    
        .contact-link {
          color: ${config.textColor};
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

  // Create content elements
  const content = document.createElement("div");
  content.classList.add("book-promo-container");
  content.innerHTML = `
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
              <div class="retailer-logo">
                <img src="${config.barnesNobleLogo}" alt="Barnes & Noble">
              </div>
              <div class="retailer-logo">
                <img src="${config.googlePlayLogo}" alt="Google Play">
              </div>
              <div class="retailer-logo">
                <img src="${config.amazonLogo}" alt="Amazon">
              </div>
              <div class="retailer-logo">
                <img src="${config.indieBoundLogo}" alt="IndieBound">
              </div>
              <div class="retailer-logo">
                <img src="${config.audibleLogo}" alt="Audible">
              </div>
            </div>
  
            <p class="contact-text">
              For discounts on 25 or more books, <a href="${config.contactLink}" class="contact-link">contact BMC</a>
            </p>
          </div>
  
          <div class="book-image-container">
            <img class="book-image" src="${config.bookImageSrc}" alt="Partnership Charter Book">
          </div>
        </div>
      `;

  // Append style and content to shadow DOM
  shadow.appendChild(style);
  shadow.appendChild(content);

  // Replace script tag with our container
  currentScript.parentNode.replaceChild(container, currentScript);
})();

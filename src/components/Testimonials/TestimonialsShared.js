// src/components/Testimonials/TestimonialsShared.js

/**
 * Testimonials Shared Utilities and Code Templates
 */

/**
 * Helper to normalize image fallback logic
 * @param {string} imageSrc - The image source string
 * @returns {string} - Safe image URL
 */
export const getSafeImageUrl = (imageSrc) => {
  if (!imageSrc || imageSrc === "/testimonial_photo.jpg") {
    return "https://bmc-neon.vercel.app/testimonial_photo.jpg";
  }
  return imageSrc;
};

/**
 * Generates the CSS styles for the Testimonials component
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - CSS styles as a string
 */
export const generateTestimonialsStyles = (config) => {
  return `
    .testimonials-container {
      background-color: ${config.backgroundColor || "#2F475E"};
      color: ${config.textColor || "#ffffff"};
      font-family: ${config.bodyFont || "sans-serif"};
      padding: 6rem 4rem;
      position: relative;
      max-width: 100%;
      box-sizing: border-box;
    }

    .testimonials-wrapper {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 3rem;
    }

    .testimonials-image-container {
      flex: 0 0 42%;
    }

    .testimonials-image-frame {
      border-radius: 12px;
      overflow: hidden;
      background-color: #ffffff;
      padding: 1rem;
    }

    .testimonials-image {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 8px;
    }

    .testimonials-content {
      flex: 0 0 58%;
    }

    .testimonials-label {
      letter-spacing: 0.5px;
      font-size: 0.875rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }

    .testimonials-heading {
      font-family: ${config.headingFont || "serif"};
      font-weight: bold;
      margin-bottom: 1.5rem;
      font-size: 2.5rem;
      line-height: 1.2;
    }

    .testimonials-content-wrapper {
      min-height: 250px;
      position: relative;
    }

    .testimonials-content-transition {
      transition: all 0.3s ease-in-out;
      transform: translateX(0);
      opacity: 1;
    }

    .testimonials-content-transition.hidden {
      transform: translateX(20px);
      opacity: 0;
    }

    .testimonials-quote {
      font-size: 1rem;
      line-height: 1.8;
      margin-bottom: 1.5rem;
      white-space: pre-line;
      font-style: italic;
    }

    .testimonials-author {
      font-weight: bold;
      margin-bottom: 0.25rem;
      font-size: 1.125rem;
    }

    .testimonials-title {
      font-size: 1rem;
      opacity: 0.9;
      margin-bottom: 1.5rem;
    }

    .testimonials-navigation {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }

    .nav-arrow {
      background-color: rgba(255, 255, 255, 0.1);
      color: #ffffff;
      border: none;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s ease;
      padding: 0;
      outline: none;
    }

    .nav-arrow:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }

    .nav-arrow:focus {
      outline: none;
    }

    .nav-arrow:disabled {
      background-color: rgba(255, 255, 255, 0.05);
      color: rgba(255, 255, 255, 0.5);
      cursor: not-allowed;
    }

    .arrow-icon {
      font-size: 1.25rem;
    }

    @media (max-width: 900px) {
      .testimonials-container {
        padding: 3rem 1rem;
      }
      
      .testimonials-wrapper {
        flex-direction: column;
        gap: 3rem;
      }

      .testimonials-image-container,
      .testimonials-content {
        flex: none;
      }

      .testimonials-heading {
        font-size: 1.75rem;
      }
    }
  `;
};

/**
 * Generates the HTML for the Testimonials component
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - HTML content as a string
 */
export const generateTestimonialsHTML = (config) => {
  const testimonials = [
    {
      quote: `"We engaged BMC in a Partnership Charter (PC) process at a critical juncture in our firm's life. We needed more formal infrastructure and operating capabilities to meet increasing market demands. Thanks to the PC process and the expert help of our two Guides, we were able to crystallize our long-term vision and engage in dynamic conversations to align our personal styles, values, and strengths against reaching this vision. Our Charter clearly laid out the structures essential for our firm and gave the two of us a roadmap with milestones to track our progress as we became more successful and the firm grew. We are grateful for their partnership expertise, their guidance, and the high quality service they delivered throughout the process."`,
      author: "Amy Sue & Muriel Wilkins",
      title: "Managing Partners, Paravis Partners"
    },
    {
      quote: `"We actually got pretty far along in developing the Charter, and in the process decided that our primary goals and vision weren't as aligned as we thought they were, and needed to be if we hoped to be successful. Through some open and honest dialog, we decided to keep our two companies separate and maintain a strategic relationship. While not exactly the result we'd hoped for, we both concluded it was an excellent result of the process and says a lot about how valuable it was.\n\nI've been singing the praises of the book and your PC process to everyone who will listen. It stopped me from making what could have been a huge mistake."`,
      author: "Samantha",
      title: "Austin, Texas"
    }
  ];

  return `
    <div class="testimonials-wrapper">
      <div class="testimonials-image-container">
        <div class="testimonials-image-frame">
          <img class="testimonials-image" src="${config.testimonialImage}" alt="Client testimonial">
        </div>
      </div>

      <div class="testimonials-content">
        <div class="testimonials-label">TESTIMONIALS</div>
        <h2 class="testimonials-heading">PC clients had this to say</h2>
        
        <div class="testimonials-content-wrapper">
          <div class="testimonials-content-transition" id="testimonialContent">
            <p class="testimonials-quote" id="testimonialQuote">${testimonials[0].quote}</p>
            <div class="testimonials-author" id="testimonialAuthor">${testimonials[0].author}</div>
            <div class="testimonials-title" id="testimonialTitle">${testimonials[0].title}</div>
          </div>
        </div>

        <div class="testimonials-navigation">
          <button class="nav-arrow" id="prevButton">
            <span class="arrow-icon">‹</span>
          </button>
          <button class="nav-arrow" id="nextButton">
            <span class="arrow-icon">›</span>
          </button>
        </div>
      </div>
    </div>
  `;
};

/**
 * Generates the JavaScript code for the Testimonials component
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - JavaScript code as a string
 */
export const generateTestimonialsJS = (config) => {
  const testimonials = [
    {
      quote: `"We engaged BMC in a Partnership Charter (PC) process at a critical juncture in our firm's life. We needed more formal infrastructure and operating capabilities to meet increasing market demands. Thanks to the PC process and the expert help of our two Guides, we were able to crystallize our long-term vision and engage in dynamic conversations to align our personal styles, values, and strengths against reaching this vision. Our Charter clearly laid out the structures essential for our firm and gave the two of us a roadmap with milestones to track our progress as we became more successful and the firm grew. We are grateful for their partnership expertise, their guidance, and the high quality service they delivered throughout the process."`,
      author: "Amy Sue & Muriel Wilkins",
      title: "Managing Partners, Paravis Partners"
    },
    {
      quote: `"We actually got pretty far along in developing the Charter, and in the process decided that our primary goals and vision weren't as aligned as we thought they were, and needed to be if we hoped to be successful. Through some open and honest dialog, we decided to keep our two companies separate and maintain a strategic relationship. While not exactly the result we'd hoped for, we both concluded it was an excellent result of the process and says a lot about how valuable it was.\n\nI've been singing the praises of the book and your PC process to everyone who will listen. It stopped me from making what could have been a huge mistake."`,
      author: "Samantha",
      title: "Austin, Texas"
    }
  ];

  return `
    let currentTestimonialIndex = 0;
    let isTransitioning = false;
    const testimonials = ${JSON.stringify(testimonials)};

    function updateTestimonial() {
      const testimonial = testimonials[currentTestimonialIndex];
      const quote = shadow.getElementById('testimonialQuote');
      const author = shadow.getElementById('testimonialAuthor');
      const title = shadow.getElementById('testimonialTitle');
      
      quote.textContent = testimonial.quote;
      author.textContent = testimonial.author;
      title.textContent = testimonial.title;
    }

    function transitionTestimonial(newIndex) {
      if (isTransitioning) return;
      
      isTransitioning = true;
      const content = shadow.getElementById('testimonialContent');
      const prevButton = shadow.getElementById('prevButton');
      const nextButton = shadow.getElementById('nextButton');
      
      // Disable buttons
      prevButton.disabled = true;
      nextButton.disabled = true;
      
      // Fade out
      content.classList.add('hidden');
      
      setTimeout(() => {
        currentTestimonialIndex = newIndex;
        updateTestimonial();
        
        // Fade in
        content.classList.remove('hidden');
        
        setTimeout(() => {
          isTransitioning = false;
          prevButton.disabled = false;
          nextButton.disabled = false;
        }, 300);
      }, 300);
    }

    // Add event listeners
    const prevButton = shadow.getElementById('prevButton');
    const nextButton = shadow.getElementById('nextButton');
    
    prevButton.addEventListener('click', (event) => {
      event.preventDefault();
      const newIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
      transitionTestimonial(newIndex);
    });
    
    nextButton.addEventListener('click', (event) => {
      event.preventDefault();
      const newIndex = (currentTestimonialIndex + 1) % testimonials.length;
      transitionTestimonial(newIndex);
    });
  `;
};

/**
 * Generates the embed code for the Testimonials component
 * @param {Object} config - Configuration object with styling parameters
 * @returns {string} - Embed script as a string
 */
export const generateTestimonialsEmbedCode = (config) => {
  const mergedConfig = {
    ...config,
    testimonialImage: getSafeImageUrl(config.testimonialImage)
  };

  return `<script>
(function() {
  const config = ${JSON.stringify(mergedConfig)};

  const container = document.createElement('div');
  container.classList.add('testimonials-container');

  const shadow = container.attachShadow({ mode: 'open' });

  const style = document.createElement('style');
  style.textContent = \`${generateTestimonialsStyles(mergedConfig)}\`;

  const content = document.createElement('div');
  content.classList.add('testimonials-container');
  content.innerHTML = \`${generateTestimonialsHTML(mergedConfig)}\`;

  shadow.appendChild(style);
  shadow.appendChild(content);

  // Execute JavaScript
  ${generateTestimonialsJS(mergedConfig)}

  document.currentScript.parentNode.replaceChild(container, document.currentScript);
})();
</script>`;
};

/**
 * Default configuration for the Testimonials section
 */
export const defaultTestimonialsConfig = {
  backgroundColor: "#2F475E",
  textColor: "#ffffff",
  headingFont: "serif",
  bodyFont: "sans-serif",
  testimonialImage: "https://bmc-neon.vercel.app/testimonial_photo.jpg",
};
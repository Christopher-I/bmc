/**
 * Post-haste Consulting Group Testimonials Section Embed Script
 *
 * This script creates an embeddable testimonials carousel with client quotes
 * and navigation controls.
 */

(function () {
  // Get current script tag
  const currentScript = document.currentScript;

  // Get configuration from data attributes
  const config = {
    backgroundColor: currentScript.getAttribute("data-background") || "#2F475E",
    textColor: currentScript.getAttribute("data-text-color") || "#ffffff",
    headingFont: currentScript.getAttribute("data-heading-font") || "serif",
    bodyFont: currentScript.getAttribute("data-body-font") || "sans-serif",
    testimonialImage: currentScript.getAttribute("data-testimonial-image") || "https://bmc-neon.vercel.app/testimonial_photo.jpeg",
  };

  // Create container element
  const container = document.createElement("div");

  // Create shadow DOM for style isolation
  const shadow = container.attachShadow({ mode: "open" });

  // Add styles
  const style = document.createElement("style");
  style.textContent = `
      .testimonials-container {
        background-color: ${config.backgroundColor};
        color: ${config.textColor};
        font-family: ${config.bodyFont};
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
        font-family: ${config.headingFont};
        font-weight: bold;
        margin-bottom: 1.5rem;
        font-size: 2.5rem;
        line-height: 1.2;
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

  // Define testimonials data
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

  // Create content elements
  const content = document.createElement("div");
  content.classList.add("testimonials-container");
  content.innerHTML = `
      <div class="testimonials-wrapper">
        <div class="testimonials-image-container">
          <div class="testimonials-image-frame">
            <img class="testimonials-image" src="${config.testimonialImage}" alt="Client testimonial">
          </div>
        </div>

        <div class="testimonials-content">
          <div class="testimonials-label">TESTIMONIALS</div>
          <h2 class="testimonials-heading">PC clients had this to say</h2>
          <p class="testimonials-quote" id="testimonialQuote">${testimonials[0].quote}</p>
          <div class="testimonials-author" id="testimonialAuthor">${testimonials[0].author}</div>
          <div class="testimonials-title" id="testimonialTitle">${testimonials[0].title}</div>

          <div class="testimonials-navigation">
            <button class="nav-arrow" onclick="prevTestimonial(event)">
              <span class="arrow-icon">‹</span>
            </button>
            <button class="nav-arrow" onclick="nextTestimonial(event)">
              <span class="arrow-icon">›</span>
            </button>
          </div>
        </div>
      </div>
    `;

  // JavaScript for carousel functionality
  const script = document.createElement("script");
  script.textContent = `
      let currentTestimonialIndex = 0;
      const testimonials = ${JSON.stringify(testimonials)};

      function updateTestimonial() {
        const testimonial = testimonials[currentTestimonialIndex];
        document.getElementById('testimonialQuote').textContent = testimonial.quote;
        document.getElementById('testimonialAuthor').textContent = testimonial.author;
        document.getElementById('testimonialTitle').textContent = testimonial.title;
      }

      function prevTestimonial(event) {
        event.preventDefault();
        currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonial();
      }

      function nextTestimonial(event) {
        event.preventDefault();
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        updateTestimonial();
      }
    `;

  // Append style, content, and script to shadow DOM
  shadow.appendChild(style);
  shadow.appendChild(content);
  shadow.appendChild(script);

  // Replace script tag with our container
  currentScript.parentNode.replaceChild(container, currentScript);
})();
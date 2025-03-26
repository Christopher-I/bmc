import React from 'react';
import { 
  Box, 
  TextField, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel,
  Slider,
  Typography,
  Grid,
  Button,
  Paper
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const PCProcessGenerator = ({ config, onConfigChange }) => {
  // Handle input changes
  const handleChange = (name, value) => {
    onConfigChange(name, value);
  };

  // Handle color picker change
  const handleColorChange = (event) => {
    handleChange(event.target.name, event.target.value);
  };

  // Handle text input change
  const handleTextChange = (event) => {
    handleChange(event.target.name, event.target.value);
  };

  // Handle select change
  const handleSelectChange = (event) => {
    handleChange(event.target.name, event.target.value);
  };

  // Handle slider change
  const handleSliderChange = (name) => (event, newValue) => {
    handleChange(name, newValue);
  };

  // Generate embed code with complete inline script
  const generateEmbedCode = () => {
    return `<script>
(function() {
  // Configuration from data attributes
  const config = {
    backgroundColor: "${config.backgroundColor}",
    textColor: "${config.textColor}",
    accentColor: "${config.accentColor}",
    headingFont: "${config.headingFont}",
    bodyFont: "${config.bodyFont}",
    buttonColor: "${config.buttonColor}",
    buttonText: "${config.buttonText}",
    buttonRadius: "${config.buttonRadius}",
    accordionRadius: "${config.accordionRadius || 4}",
    transitionSpeed: "${config.transitionSpeed}"
  };
  
  // Animation duration variable to ensure synchronized animations
  const animationDuration = ${config.transitionSpeed}s;
  
  // Create container element
  const container = document.createElement('div');
  
  // Create shadow DOM for style isolation
  const shadow = container.attachShadow({ mode: 'open' });
  
  // Add styles
  const style = document.createElement('style');
  style.textContent = \`
    .pc-container {
      background-color: \${config.backgroundColor};
      color: \${config.textColor};
      font-family: \${config.bodyFont};
      padding: 2rem;
      max-width: 100%;
      box-sizing: border-box;
      text-align: center;
    }
    
    .pc-heading {
      font-family: \${config.headingFont};
      font-size: 2.8rem;
      margin-bottom: 1.5rem;
      font-weight: normal;
    }
    
    .pc-subheading {
      font-size: 1.2rem;
      margin-bottom: 3rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.5;
    }
    
    .accordion-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      margin-bottom: 2rem;
    }
    
    .fairness-row {
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
    }
    
    .fairness-row .accordion {
      width: 33%;
    }
    
    @media (max-width: 768px) {
      .accordion-grid {
        grid-template-columns: 1fr;
      }
      
      .fairness-row .accordion {
        width: 100%;
      }
    }
    
    .accordion {
      position: relative;
      margin-bottom: 1rem;
      background-color: white;
      color: #333;
      border-radius: \${config.accordionRadius}px;
      overflow: hidden;
    }
    
    .accordion::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: \${config.accentColor};
      border-bottom-left-radius: \${config.accordionRadius}px;
      border-bottom-right-radius: \${config.accordionRadius}px;
    }
    
    .accordion-header {
      padding: 1rem;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: white;
      transition: background-color \${animationDuration} ease;
      border-radius: \${config.accordionRadius}px;
    }
    
    .accordion-header:hover {
      background-color: rgba(0, 0, 0, 0.03);
    }
    
    .accordion-title {
      margin: 0;
      font-size: 1.1rem;
      color: #1e4164;
      font-weight: 500;
      text-align: left;
    }
    
    /* Arrow icon with smooth rotation */
    .accordion-icon {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-right: 2px solid #1e4164;
      border-bottom: 2px solid #1e4164;
      transform: rotate(45deg);
      transition: transform \${animationDuration} ease;
    }
    
    .accordion.active .accordion-icon {
      transform: rotate(135deg);
    }
    
    .accordion-content {
      height: 0;
      overflow: hidden;
      transition: height \${animationDuration} ease-out;
      background-color: white;
      color: #333;
      text-align: left;
    }
    
    .accordion-content-inner {
      padding: 1rem;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
    
    .contact-button {
      display: inline-block;
      padding: 0.75rem 2rem;
      background-color: \${config.buttonColor};
      color: white;
      text-decoration: none;
      border-radius: \${config.buttonRadius}px;
      font-family: \${config.bodyFont};
      font-size: 1rem;
      border: none;
      cursor: pointer;
      transition: background-color 0.2s ease;
      margin-top: 1rem;
    }
    
    .contact-button:hover {
      background-color: \${config.buttonColor}dd;
    }
  \`;
  
  // Create HTML content
  const content = document.createElement('div');
  content.classList.add('pc-container');
  content.innerHTML = \`
    <h2 class="pc-heading">The PC process leaves nothing to chance</h2>
    <p class="pc-subheading">Everything partners struggle with can be found in these 13 topics</p>
    
    <div class="accordion-grid">
      <!-- First row -->
      <div class="accordion">
        <div class="accordion-header">
          <h3 class="accordion-title">Vision & Direction</h3>
          <span class="accordion-icon"></span>
        </div>
        <div class="accordion-content">
          <div class="accordion-content-inner">
            <p>Partners establish a shared vision and direction for their business or project, ensuring alignment on long-term goals and strategic priorities.</p>
          </div>
        </div>
      </div>
      
      <div class="accordion">
        <div class="accordion-header">
          <h3 class="accordion-title">Conflict Handling Styles</h3>
          <span class="accordion-icon"></span>
        </div>
        <div class="accordion-content">
          <div class="accordion-content-inner">
            <p>What entrepreneurs refer to as "inevitable conflict" is the number one reason many people avoid partnerships. By taking an assessment, exploring each partner's conflict handling style, and developing behavioral commitments to one another about how they'll communicate, they boost their confidence they can talk productively about their differences.</p>
          </div>
        </div>
      </div>
      
      <div class="accordion">
        <div class="accordion-header">
          <h3 class="accordion-title">Contributions & Rewards</h3>
          <span class="accordion-icon"></span>
        </div>
        <div class="accordion-content">
          <div class="accordion-content-inner">
            <p>Clearly defining what each partner contributes (time, money, expertise, connections) and how rewards will be distributed creates a foundation for fairness.</p>
          </div>
        </div>
      </div>
      
      <!-- Second row -->
      <div class="accordion">
        <div class="accordion-header">
          <h3 class="accordion-title">Personal Values</h3>
          <span class="accordion-icon"></span>
        </div>
        <div class="accordion-content">
          <div class="accordion-content-inner">
            <p>Understanding each partner's core values helps identify alignment and potential conflicts in approaches to business and decision-making.</p>
          </div>
        </div>
      </div>
      
      <div class="accordion">
        <div class="accordion-header">
          <h3 class="accordion-title">Personal Styles</h3>
          <span class="accordion-icon"></span>
        </div>
        <div class="accordion-content">
          <div class="accordion-content-inner">
            <p>Understanding each partner's work style, communication preferences, and decision-making approach helps create effective collaboration strategies.</p>
          </div>
        </div>
      </div>
      
      <div class="accordion">
        <div class="accordion-header">
          <h3 class="accordion-title">Roles & Authority</h3>
          <span class="accordion-icon"></span>
        </div>
        <div class="accordion-content">
          <div class="accordion-content-inner">
            <p>Delineating specific roles, responsibilities, and decision-making authority helps partners operate efficiently without stepping on each other's toes.</p>
          </div>
        </div>
      </div>
      
      <!-- Third row -->
      <div class="accordion">
        <div class="accordion-header">
          <h3 class="accordion-title">Expectations</h3>
          <span class="accordion-icon"></span>
        </div>
        <div class="accordion-content">
          <div class="accordion-content-inner">
            <p>Partners outline what they expect from each other and from the partnership, creating clarity and preventing future misunderstandings.</p>
          </div>
        </div>
      </div>
      
      <div class="accordion">
        <div class="accordion-header">
          <h3 class="accordion-title">Ownership</h3>
          <span class="accordion-icon"></span>
        </div>
        <div class="accordion-content">
          <div class="accordion-content-inner">
            <p>Clear agreements about ownership percentages, equity distribution, and future changes to ownership structure prevent major disagreements.</p>
          </div>
        </div>
      </div>
      
      <div class="accordion">
        <div class="accordion-header">
          <h3 class="accordion-title">Money</h3>
          <span class="accordion-icon"></span>
        </div>
        <div class="accordion-content">
          <div class="accordion-content-inner">
            <p>Addressing compensation, profit distribution, expense policies, and financial management ensures alignment on monetary matters.</p>
          </div>
        </div>
      </div>
      
      <!-- Fourth row -->
      <div class="accordion">
        <div class="accordion-header">
          <h3 class="accordion-title">Governance</h3>
          <span class="accordion-icon"></span>
        </div>
        <div class="accordion-content">
          <div class="accordion-content-inner">
            <p>Establishing decision-making processes, meeting structures, and leadership roles provides a framework for effective partnership management.</p>
          </div>
        </div>
      </div>
      
      <div class="accordion">
        <div class="accordion-header">
          <h3 class="accordion-title">Scenario Planning</h3>
          <span class="accordion-icon"></span>
        </div>
        <div class="accordion-content">
          <div class="accordion-content-inner">
            <p>Partners plan for various scenarios, including success, challenges, and potential partnership changes, creating protocols for handling different situations.</p>
          </div>
        </div>
      </div>
      
      <div class="accordion">
        <div class="accordion-header">
          <h3 class="accordion-title">Managing Disagreements</h3>
          <span class="accordion-icon"></span>
        </div>
        <div class="accordion-content">
          <div class="accordion-content-inner">
            <p>Establishing protocols for handling disagreements, including escalation procedures and potential third-party involvement, creates a safety net for the partnership.</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Fairness row -->
    <div class="fairness-row">
      <div class="accordion">
        <div class="accordion-header">
          <h3 class="accordion-title">Fairness</h3>
          <span class="accordion-icon"></span>
        </div>
        <div class="accordion-content">
          <div class="accordion-content-inner">
            <p>Partners establish principles and processes for ensuring fair treatment, compensation, and recognition throughout the partnership.</p>
          </div>
        </div>
      </div>
    </div>
    
    <button class="contact-button">\${config.buttonText}</button>
  \`;
  
  // Add event listeners for accordions using actual height measurements
  const addAccordionListeners = () => {
    const accordions = content.querySelectorAll('.accordion');
    let activeAccordion = null;

    accordions.forEach(accordion => {
      const header = accordion.querySelector('.accordion-header');
      const content = accordion.querySelector('.accordion-content');
      const contentInner = accordion.querySelector('.accordion-content-inner');
      
      // Store the actual height of content
      const getContentHeight = () => contentInner.getBoundingClientRect().height;
      
      header.addEventListener('click', () => {
        // If this accordion is already active, close it
        if (activeAccordion === accordion) {
          // Set height to 0 to animate closing
          content.style.height = '0px';
          
          // Remove active class
          accordion.classList.remove('active');
          activeAccordion = null;
        } else {
          // Close currently active accordion if there is one
          if (activeAccordion) {
            const activeContent = activeAccordion.querySelector('.accordion-content');
            
            // Animate to 0
            activeContent.style.height = '0px';
            
            // Remove active class
            activeAccordion.classList.remove('active');
          }
          
          // Open this accordion
          // Add active class
          accordion.classList.add('active');
          
          // Set the height to the actual content height to animate opening
          content.style.height = getContentHeight() + 'px';
          
          // Store as active accordion
          activeAccordion = accordion;
        }
      });
    });
  };
  
  // Append style and content to shadow DOM
  shadow.appendChild(style);
  shadow.appendChild(content);
  
  // Setup accordion functionality after content is added
  setTimeout(addAccordionListeners, 0);
  
  // Replace script tag with our container
  document.currentScript.parentNode.replaceChild(container, document.currentScript);
})();
</script>`;
  };

  // Copy code to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateEmbedCode());
  };

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Customize PC Process Section</Typography>
        <Grid container spacing={3}>
          {/* Colors Section */}
          <Grid item xs={12} sm={6}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" gutterBottom>
                Background Color
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: '36px',
                    height: '36px',
                    border: '1px solid #ccc',
                    backgroundColor: config.backgroundColor
                  }}
                />
                <TextField
                  type="color"
                  name="backgroundColor"
                  value={config.backgroundColor}
                  onChange={handleColorChange}
                  fullWidth
                  margin="dense"
                  size="small"
                />
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" gutterBottom>
                Text Color
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: '36px',
                    height: '36px',
                    border: '1px solid #ccc',
                    backgroundColor: config.textColor
                  }}
                />
                <TextField
                  type="color"
                  name="textColor"
                  value={config.textColor}
                  onChange={handleColorChange}
                  fullWidth
                  margin="dense"
                  size="small"
                />
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" gutterBottom>
                Accent Color (Bottom Border)
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: '36px',
                    height: '36px',
                    border: '1px solid #ccc',
                    backgroundColor: config.accentColor
                  }}
                />
                <TextField
                  type="color"
                  name="accentColor"
                  value={config.accentColor}
                  onChange={handleColorChange}
                  fullWidth
                  margin="dense"
                  size="small"
                />
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" gutterBottom>
                Button Color
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: '36px',
                    height: '36px',
                    border: '1px solid #ccc',
                    backgroundColor: config.buttonColor
                  }}
                />
                <TextField
                  type="color"
                  name="buttonColor"
                  value={config.buttonColor}
                  onChange={handleColorChange}
                  fullWidth
                  margin="dense"
                  size="small"
                />
              </Box>
            </Box>
          </Grid>
          
          {/* Fonts Section */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal" size="small">
              <InputLabel id="heading-font-label">Heading Font</InputLabel>
              <Select
                labelId="heading-font-label"
                name="headingFont"
                value={config.headingFont}
                onChange={handleSelectChange}
                label="Heading Font"
              >
                <MenuItem value="serif">Serif</MenuItem>
                <MenuItem value="sans-serif">Sans-serif</MenuItem>
                <MenuItem value="monospace">Monospace</MenuItem>
                <MenuItem value="Arial, sans-serif">Arial</MenuItem>
                <MenuItem value="'Times New Roman', Times, serif">Times New Roman</MenuItem>
                <MenuItem value="Georgia, serif">Georgia</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal" size="small">
              <InputLabel id="body-font-label">Body Font</InputLabel>
              <Select
                labelId="body-font-label"
                name="bodyFont"
                value={config.bodyFont}
                onChange={handleSelectChange}
                label="Body Font"
              >
                <MenuItem value="sans-serif">Sans-serif</MenuItem>
                <MenuItem value="serif">Serif</MenuItem>
                <MenuItem value="monospace">Monospace</MenuItem>
                <MenuItem value="Arial, sans-serif">Arial</MenuItem>
                <MenuItem value="'Trebuchet MS', sans-serif">Trebuchet MS</MenuItem>
                <MenuItem value="Verdana, sans-serif">Verdana</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          {/* Button Text */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Button Text"
              name="buttonText"
              value={config.buttonText}
              onChange={handleTextChange}
              fullWidth
              margin="normal"
              size="small"
            />
          </Grid>
          
          {/* Button Radius */}
          <Grid item xs={12} sm={6}>
            <Box sx={{ mt: 3 }}>
              <Typography id="button-radius-slider" gutterBottom>
                Button Radius: {config.buttonRadius}px
              </Typography>
              <Slider
                value={config.buttonRadius}
                onChange={handleSliderChange('buttonRadius')}
                aria-labelledby="button-radius-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={20}
              />
            </Box>
          </Grid>
          
          {/* Accordion Radius */}
          <Grid item xs={12} sm={6}>
            <Box sx={{ mt: 1 }}>
              <Typography id="accordion-radius-slider" gutterBottom>
                Accordion Radius: {config.accordionRadius || 4}px
              </Typography>
              <Slider
                value={config.accordionRadius || 4}
                onChange={handleSliderChange('accordionRadius')}
                aria-labelledby="accordion-radius-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={20}
              />
            </Box>
          </Grid>
          
          {/* Transition Speed */}
          <Grid item xs={12} sm={6}>
            <Box sx={{ mt: 1 }}>
              <Typography id="transition-speed-slider" gutterBottom>
                Accordion Transition Speed: {config.transitionSpeed}s
              </Typography>
              <Slider
                value={config.transitionSpeed}
                onChange={handleSliderChange('transitionSpeed')}
                aria-labelledby="transition-speed-slider"
                valueLabelDisplay="auto"
                step={0.1}
                marks
                min={0.1}
                max={1.0}
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>
      
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>Generated Embed Code</Typography>
        <TextField
          value={generateEmbedCode()}
          multiline
          rows={7}
          fullWidth
          variant="outlined"
          InputProps={{
            readOnly: true,
            style: { fontFamily: 'monospace', fontSize: '0.875rem' }
          }}
          sx={{ mb: 2 }}
        />
        <Button 
          variant="contained" 
          startIcon={<ContentCopyIcon />}
          onClick={copyToClipboard}
        >
          Copy Embed Code
        </Button>
        <Box sx={{ mt: 2, fontSize: '0.875rem', color: 'text.secondary' }}>
          Simply copy this code and paste it into your website where you want the PC Process section to appear.
          Works with WordPress, Webflow, and most other website builders.
        </Box>
      </Paper>
    </Box>
  );
};

export default PCProcessGenerator;
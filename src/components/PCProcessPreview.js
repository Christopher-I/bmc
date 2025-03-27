import React, { useEffect, useRef } from 'react';
import { Box, Button, Typography } from '@mui/material';

const PCProcessPreview = ({ config }) => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const accordions = container.querySelectorAll('.accordion');
    let activeAccordion = null;
    
    // Apply initial state - all closed
    accordions.forEach(accordion => {
      const content = accordion.querySelector('.accordion-content');
      content.style.height = '0px';
    });
    
    // Single global click handler for all accordions
    const handleAccordionClick = (e) => {
      // Find the clicked accordion (or its parent)
      let target = e.target;
      let accordion = null;
      
      // Navigate up the DOM to find the accordion container
      while (target && target !== container) {
        if (target.classList.contains('accordion')) {
          accordion = target;
          break;
        }
        target = target.parentElement;
      }
      
      // If no accordion was found, exit
      if (!accordion) return;
      
      // Stop event propagation
      e.stopPropagation();
      
      const content = accordion.querySelector('.accordion-content');
      const contentInner = accordion.querySelector('.accordion-content-inner');
      const contentHeight = contentInner.getBoundingClientRect().height;
      
      // If this is already the active accordion, close it
      if (activeAccordion === accordion) {
        // Set current height explicitly to begin transition
        content.style.height = `${contentHeight}px`;
        // eslint-disable-next-line no-unused-expressions
        content.offsetHeight; // Force reflow
        
        // Animate closing
        requestAnimationFrame(() => {
          content.style.height = '0px';
        });
        
        // Remove active class
        accordion.classList.remove('active');
        activeAccordion = null;
        return;
      }
      
      // If there's a different active accordion, close it first
      if (activeAccordion) {
        const activeContent = activeAccordion.querySelector('.accordion-content');
        const activeContentInner = activeAccordion.querySelector('.accordion-content-inner');
        const activeContentHeight = activeContentInner.getBoundingClientRect().height;
        
        // Set current height explicitly
        activeContent.style.height = `${activeContentHeight}px`;
        // eslint-disable-next-line no-unused-expressions
        activeContent.offsetHeight; // Force reflow
        
        // Animate closing
        requestAnimationFrame(() => {
          activeContent.style.height = '0px';
        });
        
        // Remove active class
        activeAccordion.classList.remove('active');
      }
      
      // Open the clicked accordion
      accordion.classList.add('active');
      
      // Set height to animate opening
      requestAnimationFrame(() => {
        content.style.height = `${contentHeight}px`;
      });
      
      // Set as new active accordion
      activeAccordion = accordion;
    };
    
    // Add the single event listener to the container (event delegation)
    container.addEventListener('click', handleAccordionClick);
    
    // Cleanup event listeners on unmount
    return () => {
      container.removeEventListener('click', handleAccordionClick);
    };
  }, [config]); // Re-run when config changes
  
  // Animation duration for transitions
  const animationDuration = `${config.transitionSpeed}s`;
  
  return (
    <Box ref={containerRef} sx={{ 
      backgroundColor: config.backgroundColor,
      color: config.textColor,
      fontFamily: config.bodyFont,
      padding: '2rem',
      maxWidth: '100%',
      boxSizing: 'border-box',
      textAlign: 'center'
    }}>
      <Typography variant="h2" sx={{
        fontFamily: config.headingFont,
        fontSize: '2.8rem',
        marginBottom: '1.5rem',
        fontWeight: 'normal'
      }}>
        The PC process leaves nothing to chance
      </Typography>
      
      <Typography variant="body1" sx={{
        fontSize: '1.2rem',
        marginBottom: '3rem',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        lineHeight: 1.5
      }}>
        Everything partners struggle with can be found in these 13 topics
      </Typography>
      
      {/* Accordion Grid - THIS IS THE KEY CHANGE: Each accordion is in a fixed height container */}
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          md: 'repeat(3, 1fr)'
        },
        gap: '1rem',
        marginBottom: '2rem',
        alignItems: 'start', // Important! This prevents row stretching
      }}>
        {/* First Row */}
        <AccordionItem 
          title="Vision & Direction"
          content="Partners establish a shared vision and direction for their business or project, ensuring alignment on long-term goals and strategic priorities."
          config={config}
          animationDuration={animationDuration}
        />
        
        <AccordionItem 
          title="Conflict Handling Styles"
          content="What entrepreneurs refer to as 'inevitable conflict' is the number one reason many people avoid partnerships. By taking an assessment, exploring each partner's conflict handling style, and developing behavioral commitments to one another about how they'll communicate, they boost their confidence they can talk productively about their differences."
          config={config}
          animationDuration={animationDuration}
        />
        
        <AccordionItem 
          title="Contributions & Rewards"
          content="Clearly defining what each partner contributes (time, money, expertise, connections) and how rewards will be distributed creates a foundation for fairness."
          config={config}
          animationDuration={animationDuration}
        />
        
        {/* Second Row */}
        <AccordionItem 
          title="Personal Values"
          content="Understanding each partner's core values helps identify alignment and potential conflicts in approaches to business and decision-making."
          config={config}
          animationDuration={animationDuration}
        />
        
        <AccordionItem 
          title="Personal Styles"
          content="Understanding each partner's work style, communication preferences, and decision-making approach helps create effective collaboration strategies."
          config={config}
          animationDuration={animationDuration}
        />
        
        <AccordionItem 
          title="Roles & Authority"
          content="Delineating specific roles, responsibilities, and decision-making authority helps partners operate efficiently without stepping on each other's toes."
          config={config}
          animationDuration={animationDuration}
        />
        
        {/* Third Row */}
        <AccordionItem 
          title="Expectations"
          content="Partners outline what they expect from each other and from the partnership, creating clarity and preventing future misunderstandings."
          config={config}
          animationDuration={animationDuration}
        />
        
        <AccordionItem 
          title="Ownership"
          content="Clear agreements about ownership percentages, equity distribution, and future changes to ownership structure prevent major disagreements."
          config={config}
          animationDuration={animationDuration}
        />
        
        <AccordionItem 
          title="Money"
          content="Addressing compensation, profit distribution, expense policies, and financial management ensures alignment on monetary matters."
          config={config}
          animationDuration={animationDuration}
        />
        
        {/* Fourth Row */}
        <AccordionItem 
          title="Governance"
          content="Establishing decision-making processes, meeting structures, and leadership roles provides a framework for effective partnership management."
          config={config}
          animationDuration={animationDuration}
        />
        
        <AccordionItem 
          title="Scenario Planning"
          content="Partners plan for various scenarios, including success, challenges, and potential partnership changes, creating protocols for handling different situations."
          config={config}
          animationDuration={animationDuration}
        />
        
        <AccordionItem 
          title="Managing Disagreements"
          content="Establishing protocols for handling disagreements, including escalation procedures and potential third-party involvement, creates a safety net for the partnership."
          config={config}
          animationDuration={animationDuration}
        />
      </Box>
      
      {/* Fairness Row */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem'
      }}>
        <Box sx={{ width: { xs: '100%', md: '33%' } }}>
          <AccordionItem 
            title="Fairness"
            content="Partners establish principles and processes for ensuring fair treatment, compensation, and recognition throughout the partnership."
            config={config}
            animationDuration={animationDuration}
          />
        </Box>
      </Box>
      
      <Button sx={{
        display: 'inline-block',
        padding: '0.75rem 2rem',
        backgroundColor: config.buttonColor,
        color: 'white',
        borderRadius: `${config.buttonRadius}px`,
        fontFamily: config.bodyFont,
        fontSize: '1rem',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
        marginTop: '1rem',
        textTransform: 'none',
        '&:hover': {
          backgroundColor: `${config.buttonColor}dd`
        }
      }}>
        {config.buttonText}
      </Button>
    </Box>
  );
};

// Accordion Item Component
const AccordionItem = ({ title, content, config, animationDuration }) => {
  return (
    <Box className="accordion" sx={{
      position: 'relative',
      marginBottom: '1rem',
      backgroundColor: 'white',
      color: '#333',
      borderRadius: `${config.accordionRadius}px`,
      overflow: 'hidden',
      height: 'auto', // Self-determined height
      alignSelf: 'start', // Don't stretch with siblings
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '4px',
        backgroundColor: config.accentColor,
        borderBottomLeftRadius: `${config.accordionRadius}px`,
        borderBottomRightRadius: `${config.accordionRadius}px`
      }
    }}>
      <Box className="accordion-header" sx={{
        padding: '1rem',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        transition: `background-color ${animationDuration} ease`,
        borderRadius: `${config.accordionRadius}px`,
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.03)'
        }
      }}>
        <Typography className="accordion-title" sx={{
          margin: 0,
          fontSize: '1.1rem',
          color: '#1e4164',
          fontWeight: 500,
          textAlign: 'left'
        }}>
          {title}
        </Typography>
        <Box className="accordion-icon" sx={{
          display: 'inline-block',
          width: '10px',
          height: '10px',
          borderRight: '2px solid #1e4164',
          borderBottom: '2px solid #1e4164',
          transform: 'rotate(45deg)',
          transition: `transform ${animationDuration} ease`,
          '.accordion.active &': {
            transform: 'rotate(225deg)'  // Rotates clockwise to point up when open
          }
        }} />
      </Box>
      <Box className="accordion-content" sx={{
        height: 0,
        overflow: 'hidden',
        transition: `height ${animationDuration} ease-out`,
        backgroundColor: 'white',
        color: '#333',
        textAlign: 'left'
      }}>
        <Box className="accordion-content-inner" sx={{
          padding: '1rem',
          borderTop: '1px solid rgba(0, 0, 0, 0.1)'
        }}>
          <Typography>{content}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PCProcessPreview;
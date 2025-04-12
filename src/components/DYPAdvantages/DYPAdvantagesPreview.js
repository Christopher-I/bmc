import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { dypAdvantagesData } from './DYPAdvantagesShared';

// Updated to match the embed code implementation
export const setupAccordionBehavior = (containerRef, config) => {
  if (!containerRef) return () => {};

  const container = containerRef;
  
  // Function to close all accordions
  const closeAllAccordions = () => {
    const all = container.querySelectorAll('.accordion');
    all.forEach(a => {
      a.classList.remove('active');
      const contentEl = a.querySelector('.accordion-content');
      if (contentEl) contentEl.style.height = '0px';
    });
  };
  
  // Initialize with all accordions closed
  closeAllAccordions();
  
  // Get the grid element for event delegation
  const accordionGrid = container.querySelector('.accordion-grid');
  if (!accordionGrid) return () => {};
  
  // Track active accordion by index
  let activeIndex = null;
  
  // Add event listener to the grid
  const handleClick = (e) => {
    const header = e.target.closest('.accordion-header');
    if (!header) return;

    const accordion = header.closest('.accordion');
    if (!accordion) return;
    
    // Get the accordion index from data attribute
    const index = parseInt(accordion.getAttribute('data-index'), 10);
    const contentEl = accordion.querySelector('.accordion-content');
    const contentInner = accordion.querySelector('.accordion-content-inner');
    
    if (activeIndex === index) {
      // Close this accordion if it's already open
      contentEl.style.height = '0px';
      accordion.classList.remove('active');
      activeIndex = null;
    } else {
      // Close all accordions and then open the clicked one
      closeAllAccordions();
      accordion.classList.add('active');
      const height = contentInner.getBoundingClientRect().height;
      contentEl.style.height = `${height}px`;
      activeIndex = index;
    }
  };
  
  accordionGrid.addEventListener('click', handleClick);
  
  // Return cleanup function
  return () => {
    accordionGrid.removeEventListener('click', handleClick);
  };
};

const DYPAdvantagesPreview = ({ config }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cleanup = setupAccordionBehavior(containerRef.current, config);
    return cleanup;
  }, [config]);

  const animationDuration = `${config.transitionSpeed || 0.3}s`;

  return (
    <Box
      ref={containerRef}
      sx={{
        backgroundColor: config.backgroundColor,
        color: config.textColor,
        fontFamily: config.bodyFont,
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: config.headingFont,
          fontSize: '2rem',
          marginBottom: '2rem',
        }}
      >
        Design Your Partnership™ – DYP – is the world's only online tool for partnership-building.
        <br />
        That's not its only advantage.
      </Typography>

      <Box
        className="accordion-grid"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: '1rem',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {dypAdvantagesData.map((item, idx) => (
          <AccordionItem
            key={idx}
            index={idx}
            title={item.title}
            content={item.content}
            config={config}
            animationDuration={animationDuration}
          />
        ))}
      </Box>
    </Box>
  );
};

const AccordionItem = ({ title, content, config, animationDuration, index }) => {
  return (
    <Box
      className="accordion"
      data-index={index}
      sx={{
        position: 'relative',
        backgroundColor: 'white',
        color: '#333',
        borderRadius: `${config.accordionRadius}px`,
        overflow: 'hidden',
        alignSelf: 'start',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        '&.active': {
          boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: '4px',
          backgroundColor: config.accentColor || '#fcb040',
          borderTopLeftRadius: `${config.accordionRadius}px`,
          borderBottomLeftRadius: `${config.accordionRadius}px`,
        },
      }}
    >
      <Box
        className="accordion-header"
        sx={{
          padding: '1rem',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'white',
          transition: `background-color ${animationDuration} ease`,
          userSelect: 'none',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.03)',
          },
        }}
      >
        <Typography
          className="accordion-title"
          sx={{
            margin: 0,
            fontSize: '1.1rem',
            color: '#1e4164',
            fontWeight: 600,
            textAlign: 'left',
            flex: 1,
            paddingRight: '1rem',
          }}
        >
          {title}
        </Typography>
        <Box
          className="accordion-icon"
          sx={{
            display: 'inline-block',
            width: '10px',
            height: '10px',
            borderRight: '2px solid #1e4164',
            borderBottom: '2px solid #1e4164',
            transform: 'rotate(45deg)',
            transition: `transform ${animationDuration} ease`,
            flexShrink: 0,
            '.accordion.active &': {
              transform: 'rotate(225deg)',
            },
          }}
        />
      </Box>

      <Box
        className="accordion-content"
        sx={{
          height: 0,
          overflow: 'hidden',
          transition: `height ${animationDuration} ease-out`,
          backgroundColor: 'white',
          textAlign: 'left',
        }}
      >
        <Box
          className="accordion-content-inner"
          sx={{
            padding: '1rem',
            borderTop: '1px solid rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography>{content}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DYPAdvantagesPreview;
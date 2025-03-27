import React, { useEffect, useRef } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { accordionData, setupAccordionBehavior } from './PCProcessShared';

const PCProcessPreview = ({ config }) => {
  const containerRef = useRef(null);
  
  // Use the shared accordion behavior setup
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Setup accordion behavior with the shared implementation
    const cleanup = setupAccordionBehavior(containerRef.current, config);
    
    // Return cleanup function
    return cleanup;
  }, [config]);
  
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
      
      {/* Accordion Grid */}
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          md: 'repeat(3, 1fr)'
        },
        gap: '1rem',
        marginBottom: '2rem',
        alignItems: 'start'
      }}>
        {/* First 12 accordions in the grid */}
        {accordionData.slice(0, 12).map((item, index) => (
          <AccordionItem 
            key={index}
            title={item.title}
            content={item.content}
            config={config}
            animationDuration={animationDuration}
          />
        ))}
      </Box>
      
      {/* Fairness Row */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem'
      }}>
        <Box sx={{ width: { xs: '100%', md: '33%' } }}>
          <AccordionItem 
            title={accordionData[12].title}
            content={accordionData[12].content}
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
      height: 'auto',
      alignSelf: 'start',
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
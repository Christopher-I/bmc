import React, { useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { cardData, setupAccordionBehavior } from './CharterTypesShared';

const CharterTypesPreview = ({ config }) => {
  const containerRef = useRef(null);
  
  // Use the shared accordion behavior setup - exactly like PCProcessPreview
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Setup accordion behavior with the shared implementation
    const cleanup = setupAccordionBehavior(containerRef.current, config);
    
    // Return cleanup function
    return cleanup;
  }, [config]);

  return (
    <Box
      ref={containerRef}
      sx={{
        backgroundColor: config.backgroundColor || "#ffffff",
        color: config.textColor || "#333333",
        padding: '2rem',
        fontFamily: config.bodyFont || 'sans-serif',
        maxWidth: '100%',
        textAlign: 'center'
      }}
    >
      <Typography variant="h2" sx={{
        fontFamily: config.headingFont || 'serif',
        fontSize: '2.5rem',
        marginBottom: '2.5rem',
        color: config.headingColor || '#2c3e50',
        fontWeight: 'bold'
      }}>
        Who should develop a Charter?
      </Typography>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
        gap: '1rem',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {cardData.map((card, index) => (
          <AccordionItem
            key={index}
            title={card.title}
            icon={card.icon}
            content={card.content}
            config={config}
          />
        ))}
      </Box>
    </Box>
  );
};

// Accordion Item Component - updated to make the header bold
const AccordionItem = ({ title, icon, content, config }) => {
  return (
    <Box className="accordion" sx={{
      position: 'relative',
      marginBottom: '1rem',
      backgroundColor: '#1C436A',
      color: '#ffffff',
      borderRadius: '8px',
      overflow: 'hidden',
      height: 'auto',
      alignSelf: 'start'
    }}>
      <Box className="accordion-header" sx={{
        padding: '1.25rem 1.5rem',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'background-color 0.3s ease'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{
            marginRight: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            svg: { width: 24, height: 24 }
          }}>
            {icon}
          </Box>
          <Typography
            className="accordion-title"
            sx={{
              margin: 0,
              fontSize: '1.3rem',
              fontWeight: 'bold', // Changed to bold as requested
              fontFamily: config.headingFont || 'serif',
              textAlign: 'left'
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box className="accordion-icon" sx={{
          display: 'inline-block',
          width: '10px',
          height: '10px',
          borderRight: '2px solid white',
          borderBottom: '2px solid white',
          transform: 'rotate(45deg)',
          transformOrigin: 'center',
          transition: 'transform 0.3s ease',
          '.accordion.active &': {
            transform: 'rotate(225deg)'  // Rotates clockwise to point up when open
          }
        }} />
      </Box>
      <Box className="accordion-content" sx={{
        height: 0,
        overflow: 'hidden',
        transition: 'height 0.3s ease-out',
        textAlign: 'left'
      }}>
        <Box className="accordion-content-inner" sx={{
          padding: '0 1.5rem 1.5rem 1.5rem'
        }}>
          <Typography sx={{
            lineHeight: 1.6,
            fontSize: '1rem'
          }}>
            {content}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CharterTypesPreview;
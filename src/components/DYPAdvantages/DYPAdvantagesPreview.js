import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { dypAdvantagesData } from './DYPAdvantagesShared';

// Shared accordion behavior from PC Process
const setupAccordionBehavior = (containerRef, config) => {
  if (!containerRef) return () => {};

  const container = containerRef;
  const accordions = container.querySelectorAll('.accordion');
  let activeAccordion = null;

  // Initial state: close all
  accordions.forEach((accordion) => {
    const content = accordion.querySelector('.accordion-content');
    content.style.height = '0px';
  });

  const handleAccordionClick = (e) => {
    let target = e.target;
    let accordion = null;

    while (target && target !== container) {
      if (target.classList.contains('accordion')) {
        accordion = target;
        break;
      }
      target = target.parentElement;
    }

    if (!accordion) return;
    e.stopPropagation();

    const content = accordion.querySelector('.accordion-content');
    const contentInner = accordion.querySelector('.accordion-content-inner');
    const contentHeight = contentInner.getBoundingClientRect().height;

    if (activeAccordion === accordion) {
      content.style.height = `${contentHeight}px`;
      void content.offsetHeight;
      requestAnimationFrame(() => {
        content.style.height = '0px';
      });
      accordion.classList.remove('active');
      activeAccordion = null;
      return;
    }

    if (activeAccordion) {
      const activeContent = activeAccordion.querySelector('.accordion-content');
      const activeContentInner = activeAccordion.querySelector('.accordion-content-inner');
      const activeHeight = activeContentInner.getBoundingClientRect().height;

      activeContent.style.height = `${activeHeight}px`;
     void activeContent.offsetHeight;
      requestAnimationFrame(() => {
        activeContent.style.height = '0px';
      });
      activeAccordion.classList.remove('active');
    }

    accordion.classList.add('active');
    requestAnimationFrame(() => {
      content.style.height = `${contentHeight}px`;
    });

    activeAccordion = accordion;
  };

  container.addEventListener('click', handleAccordionClick);

  return () => {
    container.removeEventListener('click', handleAccordionClick);
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

const AccordionItem = ({ title, content, config, animationDuration }) => {
  return (
    <Box
      className="accordion"
      sx={{
        position: 'relative',
        backgroundColor: 'white',
        color: '#333',
        borderRadius: `${config.accordionRadius}px`,
        overflow: 'hidden',
        alignSelf: 'start',
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

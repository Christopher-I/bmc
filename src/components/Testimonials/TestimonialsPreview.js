// src/components/Testimonials/TestimonialsPreview.js

import React, { useState } from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const TestimonialsPreview = ({ config }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  const handlePrevious = (e) => {
    e.preventDefault();
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => 
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <Box
      sx={{
        backgroundColor: config.backgroundColor,
        color: config.textColor,
        padding: { xs: '3rem 1rem', md: '6rem 4rem' },
        position: 'relative',
        fontFamily: config.bodyFont
      }}
    >
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: '#ffffff',
              padding: '1rem',
            }}
          >
            <Box
              component="img"
              src={config.testimonialImage}
              alt="Client testimonial"
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '8px',
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={7}>
          <Typography
            variant="subtitle2"
            sx={{
              mb: 2,
              letterSpacing: '0.5px',
              fontSize: '0.875rem',
              fontWeight: 500
            }}
          >
            TESTIMONIALS
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontFamily: config.headingFont,
              fontWeight: 'bold',
              mb: 4,
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              lineHeight: 1.2
            }}
          >
            PC clients had this to say
          </Typography>

          <Box
            sx={{
              position: 'relative',
              minHeight: '250px', // Fixed height to prevent content shift
              transition: 'all 0.3s ease-in-out',
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? 'translateX(20px)' : 'translateX(0)',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: '1rem',
                lineHeight: 1.8,
                whiteSpace: 'pre-line',
                fontStyle: 'italic'
              }}
            >
              {currentData.quote}
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 'bold',
                mb: 0.5,
                fontSize: '1.125rem'
              }}
            >
              {currentData.author}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: '1rem',
                opacity: 0.9
              }}
            >
              {currentData.title}
            </Typography>
          </Box>

          <Box sx={{ mt: 6, display: 'flex', gap: 2 }}>
            <IconButton
              onClick={handlePrevious}
              disabled={isTransitioning}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                width: 48,
                height: 48,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
                '&:disabled': {
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: 'rgba(255, 255, 255, 0.5)',
                }
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              disabled={isTransitioning}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                width: 48,
                height: 48,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
                '&:disabled': {
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: 'rgba(255, 255, 255, 0.5)',
                }
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TestimonialsPreview;
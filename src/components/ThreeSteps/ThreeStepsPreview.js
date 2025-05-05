// src/components/ThreeSteps/ThreeStepsPreview.js

import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const ThreeStepsPreview = ({ config }) => {
  const steps = [
    {
      number: "1",
      title: "Discover",
      content:
        "The PC Workbook is like a short course in partnerships. It touches every critical topic and on their own partners discover the issues and enter their thoughts – the first step in designing a healthy, resilient partnership.",
      iconSrc: config.discoverIconSrc,
    },
    {
      number: "2",
      title: "Discuss",
      content:
        "Going back and forth – sharing and listening – each partner reveals their thoughts about what's important to them. They creatively discover what works for them and build a foundation based on everyone's ideas.",
      iconSrc: config.discussIconSrc,
    },
    {
      number: "3",
      title: "Document",
      content:
        "The partners' Guides edit what was generated in the Joint Meetings. The platform helps draft a 70-100 page Charter that memorializes the partners' understandings, commitments and agreements.",
      iconSrc: config.documentIconSrc,
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: config.backgroundColor,
        color: config.textColor,
        fontFamily: config.bodyFont,
        padding: { xs: "2rem 1rem", md: "4rem" },
      }}
    >
      <Typography
        variant="h3" // Changed from h4
        sx={{
          fontFamily: config.headingFont,
          fontWeight: "bold",
          mb: 6,
          color: config.headingColor,
          textAlign: "center",
          maxWidth: "1000px", // Reduced from 1200px
          margin: "0 auto 3rem",
          lineHeight: 1.3,
          fontSize: "3rem", // Explicit font size
        }}
      >
        Design any complex partnership in 3 simple steps using the Charter
        process
      </Typography>

      <Grid container spacing={4} sx={{ maxWidth: "1400px", margin: "0 auto" }}>
        {steps.map((step) => (
          <Grid item xs={12} md={4} key={step.number}>
            <Box
              sx={{
                backgroundColor: config.cardBackgroundColor || "#E5E7EA",
                borderRadius: "12px",
                padding: "2rem", // Reduced from 2rem
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: config.cardShadow
                  ? "0 2px 4px rgba(0,0,0,0.1)"
                  : "none",
                position: "relative", // For absolute positioning of icon
              }}
            >
              <Box sx={{ mb: 0.5 }}>
                {" "}
                {/* Reduced margin */}
                <Typography
                  variant="subtitle2"
                  sx={{
                    backgroundColor: config.stepBadgeColor || "#ABB9C7",
                    color: config.stepBadgeTextColor || "#ffffff",
                    padding: "4px 6px", // Wider padding (16px instead of 8px)
                    borderRadius: "4px", // Back to 4px from 3px
                    fontSize: "0.65rem", // Back to 0.75rem from 0.65rem
                    fontWeight: "bold",
                    letterSpacing: "0.5px",
                    width: "60px",
                  }}
                >
                  STEP {step.number}
                </Typography>
              </Box>

              <Typography
                variant="h4" // Changed from h5
                sx={{
                  fontFamily: config.headingFont,
                  fontWeight: "500",
                  mb: 2,
                  color: config.headingColor,
                  fontSize: "2rem", // Increased from 1.875rem
                  borderBottom: "2px solid #CE950F",
                  paddingBottom: "0.5rem",
                  marginTop: "1rem",
                }}
              >
                {step.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  flex: "1",
                  lineHeight: 1.6, // Back to 1.6 from 1.5
                  fontSize: "1rem", // Back to 1rem from 0.9375rem
                  marginTop: "1rem", // Increased from 0.5rem
                  color: "#4A4A4A",
                }}
              >
                {step.content}
              </Typography>

              <Box
                sx={{
                  position: "absolute", // Absolute positioning
                  bottom: 0, // Stick to bottom
                  right: 0, // Stick to right
                  padding: 0, // No padding
                  margin: 0, // No margin
                }}
              >
                <Box
                  component="img"
                  src={step.iconSrc}
                  alt={`${step.title} icon`}
                  sx={{
                    width: "48px",
                    height: "48px",
                    objectFit: "contain",
                    display: "block", // Remove inline gaps
                    verticalAlign: "bottom", // Align to bottom edge
                  }}
                />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ThreeStepsPreview;

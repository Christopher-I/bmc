import React from "react";
import { Box, Button, Typography } from "@mui/material";
import {
  partnersBenefitsList,
  CheckIcon,
  defaultPartnersBenefitsConfig,
} from "./PartnersBenefitsShared";

const PartnersBenefitsPreview = ({
  config = defaultPartnersBenefitsConfig,
}) => {
  // Merge provided config with defaults
  const mergedConfig = { ...defaultPartnersBenefitsConfig, ...config };

  // Handle image error by falling back to remote URL
  const handleImageError = (e) => {
    console.log("Local image failed to load, falling back to remote URL");
    e.target.src = "https://bmc-neon.vercel.app/trust_confidence.png";
  };

  return (
    <Box
      sx={{
        backgroundColor: mergedConfig.backgroundColor,
        color: mergedConfig.textColor,
        fontFamily: mergedConfig.bodyFont,
        padding: "8rem 2rem",
        maxWidth: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "space-between",
          gap: { xs: "3rem", md: "6rem" },
          margin: "0 auto",
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            flex: { xs: "none", md: "0 0 38%" },
            width: { xs: "80%", md: "38%" },
            maxWidth: { xs: "80%", md: "38%" },
            order: { xs: 1, md: 0 },
          }}
        >
          <Box
            component="img"
            src="trust_confidence.png" // Keep the original path that works
            alt="Partnership Trust Diagram"
            onError={handleImageError} // Add error handler for fallback
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: `${mergedConfig.imageRadius}px`,
              backgroundColor: "#eeeeee",
            }}
          />
        </Box>

        {/* Content Section */}
        <Box
          sx={{
            flex: { xs: "none", md: "0 0 50%" },
            width: { xs: "90%", md: "50%" },
            maxWidth: { xs: "90%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            order: { xs: 2, md: 0 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: mergedConfig.headingFont,
              fontSize: { xs: "2rem", md: "2.5rem" },
              lineHeight: 1.2,
              margin: 0,
              color: mergedConfig.headingColor,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Partners get exactly what they're looking for
          </Typography>

          <Box
            component="ul"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              padding: 0,
              margin: 0,
              listStyle: "none",
            }}
          >
            {partnersBenefitsList.map((benefit, index) => (
              <Box
                component="li"
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <Box
                  sx={{
                    flexShrink: 0,
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    backgroundColor: mergedConfig.accentColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    marginTop: "0.2rem",
                  }}
                >
                  <CheckIcon />
                </Box>
                <Typography
                  sx={{
                    fontSize: "1.1rem",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {benefit.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PartnersBenefitsPreview;

import React from "react";
import { Box, Typography } from "@mui/material";

/**
 * PreviewPanel component for displaying the Post-haste Consulting Group section preview
 * 
 * @param {Object} props - Component props
 * @param {Object} props.config - Configuration object with styling parameters
 * @returns {React.Component} - The PreviewPanel component
 */
const PreviewPanel = ({ config }) => {
  const {
    backgroundColor = "#1C436A",
    textColor = "#ffffff",
    headingFont = "serif",
    bodyFont = "sans-serif",
    buttonColor = "#CE950F",
    buttonText = "More About Post-haste Consulting Group (PHCG)",
    buttonRadius = 4,
    buttonUrl = "https://PHCG-associates.com"
  } = config || {};

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        fontFamily: bodyFont,
        padding: "3rem 2rem 5rem",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Title Section */}
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontSize: "0.875rem",
              marginBottom: "0.5rem",
            }}
          >
            ABOUT US
          </div>

          <h2
            style={{
              fontFamily: headingFont,
              color: textColor,
              lineHeight: 1.2,
              margin: 0,
              fontSize: "2.5rem",
              fontWeight: "normal",
            }}
          >
            Post-haste Consulting Group
          </h2>
        </div>

        {/* Content Section */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "4rem",
            flexWrap: "wrap",
          }}
        >
          {/* Text Block */}
          <div
            style={{
              maxWidth: "100%",
              flex: "0 0 100%",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
                maxWidth: "800px",
              }}
            >
              Post Haste Consulting Group has been working with family and non-family
              business partners for years. Among our services to partners is the
              Partnership Charter (PC). We use the online Design Your Partnership TM
              tool not only because it's the best structured program for helping
              partners develop a comprehensive document that covers both the
              interpersonal and business sides of their relationship, but it's also
              the world's only such tool! Our professionals have been trained in
              the use of the PC methodology and are licensed by The Partnership
              Charter Institute to use the DYP tool so we can help you with your
              business partnership.
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.6,
                marginBottom: "2rem",
                maxWidth: "800px",
              }}
            >
              PHCG used that information to begin focusing on conflict prevention
              among partners. Since around 2000, PHCG has offered two services to
              partners: conflict resolution and conflict prevention.
            </p>

            <a
              href={buttonUrl}
              style={{
                backgroundColor: buttonColor,
                color: "#ffffff",
                padding: "0.75rem 1.5rem",
                borderRadius: `${buttonRadius}px`,
                textDecoration: "none",
                display: "inline-block",
                fontSize: "1rem",
                fontFamily: bodyFont,
              }}
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPanel;
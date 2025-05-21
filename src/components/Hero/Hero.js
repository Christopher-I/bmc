import React from "react";

/**
 * Hero section component for PHCG
 * 
 * @param {Object} props - Component props
 * @param {Object} props.config - Configuration object with styling parameters
 * @returns {React.Component} - The Hero section component
 */
const HeroSection = ({ config = {} }) => {
  const {
    backgroundImageUrl = "/hero_bg.png",
    overlayColor = "rgba(28, 67, 106, 0.7)",
    textColor = "#ffffff",
    headingFont = "serif",
    taglineText = "...never operate a partnership without one",
    logoUrl = "/phcg_logo.png"
  } = config;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "80vh",
        minHeight: "600px",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: textColor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden"
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: overlayColor,
          zIndex: 1
        }}
      ></div>

      {/* Header bar - PHCG text in top left */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          padding: "2rem 3rem",
          zIndex: 3
        }}
      >
        <div
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            fontFamily: headingFont,
            letterSpacing: "1px"
          }}
        >
          PHCG
        </div>
      </div>

      {/* Main content - left aligned */}
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 3rem",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", // Left align
          justifyContent: "center",
        }}
      >
        {/* Logo - left aligned */}
        <div
          style={{
            width: "80px", // Reduced from 160px (half size)
            height: "80px", // Reduced from 160px (half size)
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.75rem",
            marginBottom: "2rem", // Reduced from 4rem to bring closer to text
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
          }}
        >
          <img
            src={logoUrl}
            alt="PHCG Logo"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>

        {/* Headings - left aligned */}
        <h1
          style={{
            fontFamily: headingFont,
            fontSize: "3.5rem",
            fontWeight: "normal",
            margin: "0 0 0.5rem",
            lineHeight: 1.2,
            textAlign: "left" // Explicit left alignment
          }}
        >
          A Partnership Charter™
        </h1>
        
        <h2
          style={{
            fontFamily: headingFont,
            fontSize: "2.8rem",
            fontWeight: "normal",
            margin: 0,
            lineHeight: 1.2,
            textAlign: "left" // Explicit left alignment 
          }}
        >
          {taglineText}
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;
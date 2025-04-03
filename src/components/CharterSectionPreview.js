import React from "react";

const CharterSectionPreview = ({ config = {} }) => {
  const mergedConfig = {
    backgroundColor: config.backgroundColor || "#1e3553",
    textColor: config.textColor || "#ffffff",
    headingColor: config.headingColor || "#ffffff",
    accentColor: config.accentColor || "#d5ad36",
    headingFont: config.headingFont || "serif",
    bodyFont: config.bodyFont || "sans-serif",
    logoSrc: config.logoSrc || "/tpci_logo.svg",
    imageSrc: config.imageSrc || "/chartersection_computer.jpg",
  };

  return (
    <div
      style={{
        backgroundColor: mergedConfig.backgroundColor,
        color: mergedConfig.textColor,
        fontFamily: mergedConfig.bodyFont,
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
            ABOUT CHARTERS
          </div>

          <h2
            style={{
              fontFamily: mergedConfig.headingFont,
              color: mergedConfig.headingColor,
              lineHeight: 1.2,
              margin: 0,
              fontSize: "2.5rem",
              fontWeight: "normal",
            }}
          >
            What is a<br />
            Partnership Charter?
          </h2>
        </div>

        {/* Content Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "4rem",
            flexWrap: "nowrap",
          }}
        >
          {/* Text Block (Narrow) */}
          <div
            style={{
              maxWidth: "520px",
              flex: "0 0 auto",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
              }}
            >
              A Partnership Charter (PC) is a breakthrough methodology for
              designing business partnerships. It&apos;s actually the only
              structured process that helps partners clarify both the business
              and interpersonal sides of their partnership.
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
              }}
            >
              Traditional Partnership Agreements are useful for protecting the
              rights of partners, but they serve a narrow legal purpose. PCs
              have a much broader goal, which is facilitating in-depth
              discussions that make it easy for partners to grasp the complexity
              of being partners. The Design Your Partnership™ tool contains
              workbooks, facilitates the discussions and negotiations, and helps
              memorialize the partners&apos; understandings, commitments, and
              agreements in a 60–90 page Charter document.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.6 }}>
              Charters notably lower the risks of having partners while
              significantly amplify the benefits.
            </p>
          </div>

          {/* Image + Logo Block */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flex: "0 0 auto",
            }}
          >
            <img
              src={mergedConfig.imageSrc}
              alt="Partnership Charter on Laptop"
              style={{
                width: "100%",
                maxWidth: "420px",
                borderRadius: "12px",
                objectFit: "cover",
                height: "auto",
              }}
            />

            <div
              style={{
                marginTop: "1rem",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "0.875rem", marginBottom: "0.25rem" }}>
                Licensed by
              </div>
              <img
                src={mergedConfig.logoSrc}
                alt="BMC Logo"
                style={{ width: "90px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharterSectionPreview;

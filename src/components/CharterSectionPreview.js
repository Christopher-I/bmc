import React from "react";

const CharterSectionPreview = ({ config = {} }) => {
  // Default configuration with fallbacks
  const mergedConfig = {
    backgroundColor: config.backgroundColor || "#1e3553",
    textColor: config.textColor || "#ffffff",
    headingColor: config.headingColor || "#ffffff",
    accentColor: config.accentColor || "#d5ad36",
    headingFont: config.headingFont || "serif",
    bodyFont: config.bodyFont || "sans-serif",
    logoSrc: config.logoSrc || "/bmc_logo.svg",
    imageSrc: config.imageSrc || "/chartersection_computer.jpg",
  };

  return (
    <div
      className="w-full"
      style={{
        backgroundColor: mergedConfig.backgroundColor,
        color: mergedConfig.textColor,
        fontFamily: mergedConfig.bodyFont,
        padding: "2rem 3rem 5rem",
        boxSizing: "border-box",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header/Title Section */}
        <div className="mb-6">
          <div className="uppercase tracking-wide text-sm mb-2">
            ABOUT CHARTERS
          </div>

          <h2
            style={{
              fontFamily: mergedConfig.headingFont,
              color: mergedConfig.headingColor,
              lineHeight: 1.2,
              margin: 0,
            }}
            className="text-4xl font-normal"
          >
            What is a<br />
            Partnership Charter?
          </h2>
        </div>

        {/* Flex Container for Two Columns */}
        <div className="flex flex-row gap-4">
          {/* Left Column - Text Content */}
          <div className="w-7/12">
            <p className="text-base leading-relaxed mb-6">
              A Partnership Charter (PC) is a breakthrough methodology for
              designing business partnerships. It&apos;s actually the only
              structured process that helps partners clarify both the business
              and interpersonal sides of their partnership.
            </p>

            <p className="text-base leading-relaxed mb-6">
              Traditional Partnership Agreements are useful for protecting the
              rights of partners, but they serve a narrow legal purpose. PCs
              have a much broader goal, which is facilitating in-depth
              discussions that make it easy for partners to grasp the complexity
              of being partners. The Design Your Partnership™ tool contains
              workbooks, facilitates the discussions and negotiations, and helps
              memorialize the partners&apos; understandings, commitments, and
              agreements in a 60-90 page Charter document.
            </p>

            <p className="text-base leading-relaxed">
              Charters notably lower the risks of having partners while
              significantly amplify the benefits.
            </p>
          </div>

          {/* Right Column - Image and Logo */}
          <div className="w-5/12 flex flex-col">
            <img
              src={mergedConfig.imageSrc}
              alt="Partnership Charter on Laptop"
              className="w-full h-auto rounded-lg mb-4"
            />

            <div className="mt-2">
              <div className="text-sm opacity-90">Licensed by</div>

              <img
                src={mergedConfig.logoSrc}
                alt="BMC Logo"
                className="h-auto mt-1"
                style={{ width: "60px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharterSectionPreview;

import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Paper,
} from "@mui/material";

import Sidebar from "./components/General Functions/Sidebar";
import PreviewPanel from "./components/General Functions/PreviewPanel";
import SliversOfAmbiguityGenerator from "./components/SliversOfAmbiguity/SliversGenerator";
import CodeGenerator from "./components/General Functions/CodeGenerator";
import PCProcessPreview from "./components/PCProcess/PCProcessPreview";
import PCProcessGenerator from "./components/PCProcess/PCProcessGenerator";
import PartnersBenefitsPreview from "./components/PartnerBenefits/PartnersBenefitsPreview";
import PartnersBenefitsGenerator from "./components/PartnerBenefits/PartnersBenefitsGenerator";
import CharterSectionPreview from "./components/CharterSection/CharterSectionPreview";
import CharterSectionGenerator from "./components/CharterSection/CharterSectionGenerator";
import CharterTypesPreview from "./components/CharterTypes/CharterTypesPreview";
import CharterTypesGenerator from "./components/CharterTypes/CharterTypesGenerator";
import DYPAdvantagesPreview from "./components/DYPAdvantages/DYPAdvantagesPreview";
import AppIntroduction from "./components/General Functions/AppIntroduction";
import DYPAdvantagesGenerator from "./components/DYPAdvantages/DYPAdvantagesGenerator";
import SliversOfAmbiguityPreview from "./components/SliversOfAmbiguity/SliversPreview";
import DYPToolPreview from "./components/DYPTool/DYPToolPreview";
import DYPToolGenerator from "./components/DYPTool/DYPToolGenerator";
// Import the new DYP Licensed User components
import DYPLicensedUserPreview from "./components/DYPLicensedUser/DYPLicensedUserPreview";
import DYPLicensedUserGenerator from "./components/DYPLicensedUser/DYPLicensedUserGenerator";
import AssistanceLevelsPreview from "./components/AssistanceLevels/AssistanceLevelsPreview";
import AssistanceLevelsGenerator from "./components/AssistanceLevels/AssistanceLevelsGenerator";
import ThreeStepsPreview from "./components/ThreeSteps/ThreeStepsPreview";
import ThreeStepsGenerator from "./components/ThreeSteps/ThreeStepsGenerator";
import BookPromoPreview from "./components/BookPromo/BookPromoPreview";
import BookPromoGenerator from "./components/BookPromo/BookPromoGenerator";
import TestimonialsPreview from "./components/Testimonials/TestimonialsPreview";
import TestimonialsGenerator from "./components/Testimonials/TestimonialsGenerator";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#e67e22" },
  },
});

const sectionTitles = {
  introduction: "Introduction & Guide",
  PHCG: "About Post-haste Consulting Group (PHCG)",
  pcProcess: "PC Process block",
  partners: "Partners Benefits Block",
  charter: "What is a PC?",
  charterTypes: "Who Should Develop a Charter?",
  dypAdvantages: "DYP Advantages",
  sliversOfAmbiguity: "Slivers of Ambiguity",
  dypTool: "The DYP Tool",
  dypLicensedUser: "DYP Licensed User",
  assistanceLevels: "Partners Get Assistance", // Add new section title
  threeSteps: "Three Steps to Partnership",
  bookPromo: "Partnership Charter Book",
  testimonials: "Client Testimonials",
};

function App() {
  const [activeSection, setActiveSection] = useState(() => {
    const savedSection = localStorage.getItem("activeSection");
    return savedSection || "introduction";
  });

  useEffect(() => {
    localStorage.setItem("activeSection", activeSection);
  }, [activeSection]);

  const [assistanceLevelsConfig, setAssistanceLevelsConfig] = useState({
    backgroundColor: "#ffffff",
    textColor: "#333333",
    headingColor: "#333333",
    accentColor: "#0066B2",
    headingFont: "serif",
    bodyFont: "sans-serif",
    imageRadius: 8,
    imageSrc: "/assistance_levels_diagram.png",
  });
  const [testimonialsConfig, setTestimonialsConfig] = useState({
    backgroundColor: "#2F475E",
    textColor: "#ffffff",
    headingFont: "serif",
    bodyFont: "sans-serif",
    testimonialImage: "https://bmc-neon.vercel.app/testimonial_photo.jpeg", // Single image for all testimonials
  });

  const [bookPromoConfig, setBookPromoConfig] = useState({
    backgroundColor: "#CE950F",
    textColor: "#ffffff",
    headingFont: "serif",
    bodyFont: "sans-serif",
    borderRadius: 16,
    bookImageSrc: "https://bmc-neon.vercel.app/book_partnership_charter.png",
    contactLink: "https://example.com/contact",
    barnesNobleLogo: "https://bmc-neon.vercel.app/logo_barnes_noble.png",
    googlePlayLogo: "https://bmc-neon.vercel.app/logo_google_play.png",
    amazonLogo: "https://bmc-neon.vercel.app/logo_amazon.png",
    indieBoundLogo: "https://bmc-neon.vercel.app/logo_indie_bound.png",
    audibleLogo: "https://bmc-neon.vercel.app/logo_audible.png",
    invertLogos: false,
  });

  // In App.js, update the threeStepsConfig initial state:
  const [threeStepsConfig, setThreeStepsConfig] = useState({
    backgroundColor: "#ffffff",
    textColor: "#333333",
    headingColor: "#333333",
    cardBackgroundColor: "#E5E7EA",
    stepBadgeColor: "#ABB9C7",
    stepBadgeTextColor: "#ffffff",
    headingFont: "serif",
    bodyFont: "sans-serif",
    discoverIconSrc: "https://bmc-neon.vercel.app/step1.png", // Use hosted images
    discussIconSrc: "https://bmc-neon.vercel.app/step2.png",
    documentIconSrc: "https://bmc-neon.vercel.app/step3.png",
    cardShadow: false,
  });

  const [PHCGConfig, setPHCGConfig] = useState({
    backgroundColor: "#2c3e50",
    textColor: "#ffffff",
    headingFont: "serif",
    bodyFont: "sans-serif",
    buttonColor: "#e67e22",
    buttonText: "More About Post-haste Consulting Group (PHCG)",
    buttonRadius: 4,
  });

  const [pcProcessConfig, setPcProcessConfig] = useState({
    backgroundColor: "#1e4164",
    textColor: "#ffffff",
    accentColor: "#d5ad36",
    headingFont: "serif",
    bodyFont: "sans-serif",
    buttonColor: "#d5ad36",
    buttonText: "Contact Post-haste Consulting Group (PHCG)",
    buttonRadius: 4,
    accordionRadius: 4,
    transitionSpeed: 0.3,
  });

  const [partnersBenefitsConfig, setPartnersBenefitsConfig] = useState({
    backgroundColor: "#f5f7fa",
    textColor: "#333333",
    headingColor: "#1e4164",
    accentColor: "#3366cc",
    headingFont: "serif",
    bodyFont: "sans-serif",
    buttonColor: "#3366cc",
    buttonRadius: 4,
    imageRadius: 8,
    imageSrc:
      "https://placehold.co/600x400/e6e6e6/1e4164?text=Partnership+diagram",
  });

  const [charterConfig, setCharterConfig] = useState({
    backgroundColor: "#1e3553",
    textColor: "#ffffff",
    headingColor: "#ffffff",
    accentColor: "#d5ad36",
    headingFont: "serif",
    bodyFont: "sans-serif",
    logoSrc: "/tpci_logo.svg",
    imageSrc: "/chartersection_computer.jpg",
  });

  const [charterTypesConfig, setCharterTypesConfig] = useState({
    backgroundColor: "#ffffff",
    textColor: "#333333",
    headingColor: "#1e3553",
    headingFont: "serif",
    bodyFont: "sans-serif",
  });

  const [dypAdvantagesConfig, setDypAdvantagesConfig] = useState({
    backgroundColor: "#103c68",
    textColor: "#ffffff",
    accentColor: "#fcb040",
    headingFont: "serif",
    bodyFont: "sans-serif",
    accordionRadius: 4,
    transitionSpeed: 0.3,
  });

  const [sliversOfAmbiguityConfig, setSliversOfAmbiguityConfig] = useState({
    backgroundColor: "#e6ecef",
    textColor: "#333333",
    headingColor: "#333333",
    accentColor: "#d5ad36",
    headingFont: "serif",
    bodyFont: "sans-serif",
  });

  const [dypToolConfig, setDypToolConfig] = useState({
    backgroundColor: "#ecf0f1",
    textColor: "#2c3e50",
    headingFont: "serif",
    bodyFont: "sans-serif",
    imageSrc: "/dyp_tool.png",
    imageRadius: 8,
  });

  // Add new state for DYP Licensed User Block
  const [dypLicensedUserConfig, setDypLicensedUserConfig] = useState({
    backgroundColor: "#1e3553", // Dark blue background
    textColor: "#ffffff", // White text
    accentColor: "#d5ad36", // Gold accent
    headingFont: "serif",
    bodyFont: "sans-serif",
    buttonText: "Contact PHCG",
    buttonRadius: 4,
    organizationName: "PHCG", // Organization name can be customized
  });

  const renderSection = () => {
    switch (activeSection) {
      case "introduction":
        return <AppIntroduction />;
      case "PHCG":
        return (
          <>
            <Paper elevation={3} sx={{ mb: 4 }}>
              <Box p={3}>
                <Typography variant="h6" gutterBottom align="center">
                  Preview
                </Typography>
                <PreviewPanel config={PHCGConfig} />
              </Box>
            </Paper>
            <Paper elevation={3}>
              <Box p={3}>
                <Typography variant="h6" gutterBottom align="left">
                  Embed Code
                </Typography>
                <Box sx={{ maxWidth: "100%", overflowX: "auto" }}>
                  <CodeGenerator config={PHCGConfig} />
                </Box>
              </Box>
            </Paper>
          </>
        );
      case "pcProcess":
        return (
          <>
            <Paper elevation={3} sx={{ mb: 4 }}>
              <Box p={3}>
                <Typography variant="h6" gutterBottom align="center">
                  Preview
                </Typography>
                <PCProcessPreview config={pcProcessConfig} />
              </Box>
            </Paper>
            <Paper elevation={3}>
              <Box p={3}>
                <PCProcessGenerator
                  config={pcProcessConfig}
                  onConfigChange={setPcProcessConfig}
                />
              </Box>
            </Paper>
          </>
        );
      case "partners":
        return (
          <>
            <Paper elevation={3} sx={{ mb: 4 }}>
              <Box p={3}>
                <Typography variant="h6" gutterBottom align="center">
                  Preview
                </Typography>
                <PartnersBenefitsPreview config={partnersBenefitsConfig} />
              </Box>
            </Paper>
            <Paper elevation={3}>
              <Box p={3}>
                <PartnersBenefitsGenerator
                  config={partnersBenefitsConfig}
                  onConfigChange={setPartnersBenefitsConfig}
                />
              </Box>
            </Paper>
          </>
        );
      case "charter":
        return (
          <>
            <Paper elevation={3} sx={{ mb: 4 }}>
              <Box p={3}>
                <Typography variant="h6" gutterBottom align="center">
                  Preview
                </Typography>
                <CharterSectionPreview config={charterConfig} />
              </Box>
            </Paper>
            <Paper elevation={3}>
              <Box p={3}>
                <CharterSectionGenerator
                  config={charterConfig}
                  onConfigChange={setCharterConfig}
                />
              </Box>
            </Paper>
          </>
        );
      case "charterTypes":
        return (
          <>
            <Paper elevation={3} sx={{ mb: 4 }}>
              <Box p={3}>
                <Typography variant="h6" gutterBottom align="center">
                  Preview
                </Typography>
                <CharterTypesPreview config={charterTypesConfig} />
              </Box>
            </Paper>
            <Paper elevation={3}>
              <Box p={3}>
                <CharterTypesGenerator
                  config={charterTypesConfig}
                  onConfigChange={setCharterTypesConfig}
                />
              </Box>
            </Paper>
          </>
        );
      case "dypAdvantages":
        return (
          <>
            <Paper elevation={3} sx={{ mb: 4 }}>
              <Box p={3}>
                <Typography variant="h6" gutterBottom align="center">
                  Preview
                </Typography>
                <DYPAdvantagesPreview config={dypAdvantagesConfig} />
              </Box>
            </Paper>
            <Paper elevation={3}>
              <Box p={3}>
                <DYPAdvantagesGenerator
                  config={dypAdvantagesConfig}
                  onConfigChange={setDypAdvantagesConfig}
                />
              </Box>
            </Paper>
          </>
        );
      case "sliversOfAmbiguity":
        return (
          <>
            <Paper elevation={3} sx={{ mb: 4 }}>
              <Box p={3}>
                <Typography variant="h6" gutterBottom align="center">
                  Preview
                </Typography>
                <SliversOfAmbiguityPreview config={sliversOfAmbiguityConfig} />
              </Box>
            </Paper>
            <Paper elevation={3}>
              <Box p={3}>
                <SliversOfAmbiguityGenerator
                  config={sliversOfAmbiguityConfig}
                  onConfigChange={setSliversOfAmbiguityConfig}
                />
              </Box>
            </Paper>
          </>
        );
      case "dypTool":
        return (
          <>
            <Paper elevation={3} sx={{ mb: 4 }}>
              <Box p={3}>
                <Typography variant="h6" gutterBottom align="center">
                  Preview
                </Typography>
                <DYPToolPreview config={dypToolConfig} />
              </Box>
            </Paper>
            <Paper elevation={3}>
              <Box p={3}>
                <DYPToolGenerator
                  config={dypToolConfig}
                  onConfigChange={setDypToolConfig}
                />
              </Box>
            </Paper>
          </>
        );
      // Add new case for DYP Licensed User Block
      case "dypLicensedUser":
        return (
          <>
            <Paper elevation={3} sx={{ mb: 4 }}>
              <Box p={3}>
                <Typography variant="h6" gutterBottom align="center">
                  Preview
                </Typography>
                <DYPLicensedUserPreview config={dypLicensedUserConfig} />
              </Box>
            </Paper>
            <Paper elevation={3}>
              <Box p={3}>
                <DYPLicensedUserGenerator
                  config={dypLicensedUserConfig}
                  onConfigChange={setDypLicensedUserConfig}
                />
              </Box>
            </Paper>
          </>
        );
      case "assistanceLevels":
        return (
          <>
            <Paper elevation={3} sx={{ mb: 4 }}>
              <Box p={3}>
                <Typography variant="h6" gutterBottom align="center">
                  Preview
                </Typography>
                <AssistanceLevelsPreview config={assistanceLevelsConfig} />
              </Box>
            </Paper>
            <Paper elevation={3}>
              <Box p={3}>
                <AssistanceLevelsGenerator
                  config={assistanceLevelsConfig}
                  onConfigChange={setAssistanceLevelsConfig}
                />
              </Box>
            </Paper>
          </>
        );
      case "threeSteps":
        return (
          <>
            <Paper elevation={3} sx={{ mb: 4 }}>
              <Box p={3}>
                <Typography variant="h6" gutterBottom align="center">
                  Preview
                </Typography>
                <ThreeStepsPreview config={threeStepsConfig} />
              </Box>
            </Paper>
            <Paper elevation={3}>
              <Box p={3}>
                <ThreeStepsGenerator
                  config={threeStepsConfig}
                  onConfigChange={setThreeStepsConfig}
                />
              </Box>
            </Paper>
          </>
        );
      case "bookPromo":
        return (
          <>
            <Paper elevation={3} sx={{ mb: 4 }}>
              <Box p={3}>
                <Typography variant="h6" gutterBottom align="center">
                  Preview
                </Typography>
                <BookPromoPreview config={bookPromoConfig} />
              </Box>
            </Paper>
            <Paper elevation={3}>
              <Box p={3}>
                <BookPromoGenerator
                  config={bookPromoConfig}
                  onConfigChange={setBookPromoConfig}
                />
              </Box>
            </Paper>
          </>
        );
      case "testimonials":
        return (
          <>
            <Paper elevation={3} sx={{ mb: 4 }}>
              <Box p={3}>
                <Typography variant="h6" gutterBottom align="center">
                  Preview
                </Typography>
                <TestimonialsPreview config={testimonialsConfig} />
              </Box>
            </Paper>
            <Paper elevation={3}>
              <Box p={3}>
                <TestimonialsGenerator
                  config={testimonialsConfig}
                  onConfigChange={setTestimonialsConfig}
                />
              </Box>
            </Paper>
          </>
        );
      default:
        return <AppIntroduction />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar active={activeSection} onSelect={setActiveSection} />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              px: { xs: 2, md: 4 },
              py: 2,
              borderBottom: "1px solid #e0e0e0",
              backgroundColor: "#fff",
              position: "sticky",
              top: 0,
              zIndex: 1000,
            }}
          >
            <Container maxWidth="lg">
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "primary.main" }}
              >
                Website Builder
              </Typography>
            </Container>
          </Box>

          <Box sx={{ p: 4 }}>
            <Container maxWidth="lg">
              {activeSection !== "introduction" && (
                <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                  You are editing:{" "}
                  <strong>{sectionTitles[activeSection]}</strong>
                </Typography>
              )}
              <Box
                key={activeSection}
                sx={{
                  p: { xs: 2, md: 4 },
                  backgroundColor: "#fafafa",
                  borderRadius: 2,
                  opacity: 0,
                  transform: "translateY(20px)",
                  animation: "fadeIn 0.5s ease-in-out forwards",
                  "@keyframes fadeIn": {
                    from: {
                      opacity: 0,
                      transform: "translateY(20px)",
                    },
                    to: {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                  },
                }}
              >
                {renderSection()}
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;

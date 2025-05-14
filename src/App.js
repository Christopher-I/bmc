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
import AppIntroduction from "./components/General Functions/AppIntroduction";
import PreviewPanel from "./components/General Functions/PreviewPanel";
import PHCGGenerator from "./components/General Functions/PHCGGenerator";
import CharterSectionPreview from "./components/CharterSection/CharterSectionPreview";
import CharterSectionGenerator from "./components/CharterSection/CharterSectionGenerator";
import CharterTypesPreview from "./components/CharterTypes/CharterTypesPreview";
import CharterTypesGenerator from "./components/CharterTypes/CharterTypesGenerator";
import ThreeStepsPreview from "./components/ThreeSteps/ThreeStepsPreview";
import ThreeStepsGenerator from "./components/ThreeSteps/ThreeStepsGenerator";
import DYPToolPreview from "./components/DYPTool/DYPToolPreview";
import DYPToolGenerator from "./components/DYPTool/DYPToolGenerator";
import PartnersBenefitsPreview from "./components/PartnerBenefits/PartnersBenefitsPreview";
import PartnersBenefitsGenerator from "./components/PartnerBenefits/PartnersBenefitsGenerator";
import PCProcessPreview from "./components/PCProcess/PCProcessPreview";
import PCProcessGenerator from "./components/PCProcess/PCProcessGenerator";
import DYPAdvantagesPreview from "./components/DYPAdvantages/DYPAdvantagesPreview";
import DYPAdvantagesGenerator from "./components/DYPAdvantages/DYPAdvantagesGenerator";
import AssistanceLevelsPreview from "./components/AssistanceLevels/AssistanceLevelsPreview";
import AssistanceLevelsGenerator from "./components/AssistanceLevels/AssistanceLevelsGenerator";
import BookPromoPreview from "./components/BookPromo/BookPromoPreview";
import BookPromoGenerator from "./components/BookPromo/BookPromoGenerator";
import TestimonialsPreview from "./components/Testimonials/TestimonialsPreview";
import TestimonialsGenerator from "./components/Testimonials/TestimonialsGenerator";
import SliversOfAmbiguityPreview from "./components/SliversOfAmbiguity/SliversPreview";
import SliversOfAmbiguityGenerator from "./components/SliversOfAmbiguity/SliversGenerator";
import DYPLicensedUserPreview from "./components/DYPLicensedUser/DYPLicensedUserPreview";
import DYPLicensedUserGenerator from "./components/DYPLicensedUser/DYPLicensedUserGenerator";
import FullPagePreview from "./components/FullPagePreview/FullPagePreview";

// Define shared styling constants for the entire application
const STYLE_CONSTANTS = {
  // Brand colors
  primaryBlue: "#1C436A",
  primaryYellow: "#CE950F",
  white: "#ffffff",
  lightGray: "#f5f7fa",
  darkText: "#333333",

  // Fonts
  headingFont: "serif",
  bodyFont: "sans-serif",

  // Common styling values
  borderRadius: 4,
  imageRadius: 8,
  transitionSpeed: 0.3,

  // Common spacing
  defaultMargin: 20,
};

// Create theme using the styling constants
const theme = createTheme({
  palette: {
    primary: { main: STYLE_CONSTANTS.primaryBlue },
    secondary: { main: STYLE_CONSTANTS.primaryYellow },
  },
  typography: {
    fontFamily: STYLE_CONSTANTS.bodyFont,
    h1: { fontFamily: STYLE_CONSTANTS.headingFont },
    h2: { fontFamily: STYLE_CONSTANTS.headingFont },
    h3: { fontFamily: STYLE_CONSTANTS.headingFont },
    h4: { fontFamily: STYLE_CONSTANTS.headingFont },
    h5: { fontFamily: STYLE_CONSTANTS.headingFont },
    h6: { fontFamily: STYLE_CONSTANTS.headingFont },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: STYLE_CONSTANTS.borderRadius,
        },
        containedPrimary: {
          backgroundColor: STYLE_CONSTANTS.primaryBlue,
          "&:hover": {
            backgroundColor: "#16365A", // Slightly darker blue on hover
          },
        },
        containedSecondary: {
          backgroundColor: STYLE_CONSTANTS.primaryYellow,
          "&:hover": {
            backgroundColor: "#B5850D", // Slightly darker yellow on hover
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: STYLE_CONSTANTS.borderRadius,
        },
      },
    },
  },
});

const sectionTitles = {
  introduction: "Introduction & Guide",
  PHCG: "About Post-haste Consulting Group (PHCG)",
  charter: "What is a PC?",
  charterTypes: "Who Should Develop a Charter?",
  threeSteps: "Three Steps to Partnership",
  dypTool: "The DYP Tool",
  partners: "Partners Benefits Block",
  pcProcess: "PC Process block",
  dypAdvantages: "DYP Advantages",
  assistanceLevels: "Partners Get Assistance",
  bookPromo: "Partnership Charter Book",
  testimonials: "Client Testimonials",
  sliversOfAmbiguity: "Slivers of Ambiguity",
  dypLicensedUser: "DYP Licensed User",
  fullPagePreview: "Full Page Preview",
};

function App() {
  const [activeSection, setActiveSection] = useState(() => {
    const savedSection = localStorage.getItem("activeSection");
    return savedSection || "introduction";
  });

  useEffect(() => {
    localStorage.setItem("activeSection", activeSection);
  }, [activeSection]);

  // Introduction - No config needed

  // About PHCG
  const [PHCGConfig, setPHCGConfig] = useState({
    backgroundColor: STYLE_CONSTANTS.primaryBlue,
    textColor: STYLE_CONSTANTS.white,
    headingFont: STYLE_CONSTANTS.headingFont,
    bodyFont: STYLE_CONSTANTS.bodyFont,
    buttonColor: STYLE_CONSTANTS.primaryYellow,
    buttonText: "More About Post-haste Consulting Group (PHCG)",
    buttonRadius: STYLE_CONSTANTS.borderRadius,
  });

  // What is a PC?
  const [charterConfig, setCharterConfig] = useState({
    backgroundColor: STYLE_CONSTANTS.primaryBlue,
    textColor: STYLE_CONSTANTS.white,
    headingColor: STYLE_CONSTANTS.white,
    accentColor: STYLE_CONSTANTS.primaryYellow,
    headingFont: STYLE_CONSTANTS.headingFont,
    bodyFont: STYLE_CONSTANTS.bodyFont,
    logoSrc: "/tpci_logo.svg",
    imageSrc: "/chartersection_computer.jpg",
  });

  // Who Should Develop a Charter?
  const [charterTypesConfig, setCharterTypesConfig] = useState({
    backgroundColor: STYLE_CONSTANTS.white,
    textColor: STYLE_CONSTANTS.darkText,
    headingColor: STYLE_CONSTANTS.primaryBlue,
    headingFont: STYLE_CONSTANTS.headingFont,
    bodyFont: STYLE_CONSTANTS.bodyFont,
  });

  // Three Steps to Partnership
  const [threeStepsConfig, setThreeStepsConfig] = useState({
    backgroundColor: STYLE_CONSTANTS.white,
    textColor: STYLE_CONSTANTS.darkText,
    headingColor: STYLE_CONSTANTS.primaryBlue,
    cardBackgroundColor: "#E5E7EA",
    stepBadgeColor: STYLE_CONSTANTS.primaryBlue,
    stepBadgeTextColor: STYLE_CONSTANTS.white,
    headingFont: STYLE_CONSTANTS.headingFont,
    bodyFont: STYLE_CONSTANTS.bodyFont,
    discoverIconSrc: "https://bmc-neon.vercel.app/step1.png",
    discussIconSrc: "https://bmc-neon.vercel.app/step2.png",
    documentIconSrc: "https://bmc-neon.vercel.app/step3.png",
    cardShadow: false,
  });

  // The DYP Tool
  const [dypToolConfig, setDypToolConfig] = useState({
    backgroundColor: STYLE_CONSTANTS.lightGray,
    textColor: STYLE_CONSTANTS.darkText,
    headingColor: STYLE_CONSTANTS.primaryBlue,
    headingFont: STYLE_CONSTANTS.headingFont,
    bodyFont: STYLE_CONSTANTS.bodyFont,
    imageSrc: "/dyp_tool.png",
    imageRadius: STYLE_CONSTANTS.imageRadius,
  });

  // Partners Benefits Block
  const [partnersBenefitsConfig, setPartnersBenefitsConfig] = useState({
    backgroundColor: STYLE_CONSTANTS.lightGray,
    textColor: STYLE_CONSTANTS.darkText,
    headingColor: STYLE_CONSTANTS.primaryBlue,
    accentColor: STYLE_CONSTANTS.primaryYellow,
    headingFont: STYLE_CONSTANTS.headingFont,
    bodyFont: STYLE_CONSTANTS.bodyFont,
    buttonColor: STYLE_CONSTANTS.primaryYellow,
    buttonRadius: STYLE_CONSTANTS.borderRadius,
    imageRadius: STYLE_CONSTANTS.imageRadius,
    imageSrc: `https://placehold.co/600x400/e6e6e6/${STYLE_CONSTANTS.primaryBlue.replace(
      "#",
      ""
    )}?text=Partnership+diagram`,
  });

  // PC Process block
  const [pcProcessConfig, setPcProcessConfig] = useState({
    backgroundColor: STYLE_CONSTANTS.primaryBlue,
    textColor: STYLE_CONSTANTS.white,
    accentColor: STYLE_CONSTANTS.primaryYellow,
    headingFont: STYLE_CONSTANTS.headingFont,
    bodyFont: STYLE_CONSTANTS.bodyFont,
    buttonColor: STYLE_CONSTANTS.primaryYellow,
    buttonText: "Contact Post-haste Consulting Group (PHCG)",
    buttonRadius: STYLE_CONSTANTS.borderRadius,
    accordionRadius: STYLE_CONSTANTS.borderRadius,
    transitionSpeed: STYLE_CONSTANTS.transitionSpeed,
  });

  // DYP Advantages
  const [dypAdvantagesConfig, setDypAdvantagesConfig] = useState({
    backgroundColor: STYLE_CONSTANTS.primaryBlue,
    textColor: STYLE_CONSTANTS.white,
    accentColor: STYLE_CONSTANTS.primaryYellow,
    headingFont: STYLE_CONSTANTS.headingFont,
    bodyFont: STYLE_CONSTANTS.bodyFont,
    accordionRadius: STYLE_CONSTANTS.borderRadius,
    transitionSpeed: STYLE_CONSTANTS.transitionSpeed,
  });

  // Partners Get Assistance
  const [assistanceLevelsConfig, setAssistanceLevelsConfig] = useState({
    backgroundColor: STYLE_CONSTANTS.white,
    textColor: STYLE_CONSTANTS.darkText,
    headingColor: STYLE_CONSTANTS.primaryBlue,
    accentColor: STYLE_CONSTANTS.primaryYellow,
    headingFont: STYLE_CONSTANTS.headingFont,
    bodyFont: STYLE_CONSTANTS.bodyFont,
    imageRadius: STYLE_CONSTANTS.imageRadius,
    imageSrc: "/assistance_levels_diagram.png",
  });

  // Partnership Charter Book
  const [bookPromoConfig, setBookPromoConfig] = useState({
    backgroundColor: STYLE_CONSTANTS.primaryYellow,
    textColor: STYLE_CONSTANTS.white,
    headingFont: STYLE_CONSTANTS.headingFont,
    bodyFont: STYLE_CONSTANTS.bodyFont,
    borderRadius: 5, // Keeping this specific value as it's intentionally larger
    marginTop: STYLE_CONSTANTS.defaultMargin, // Added margin top
    marginBottom: STYLE_CONSTANTS.defaultMargin, // Added margin bottom
    bookImageSrc: "https://bmc-neon.vercel.app/book_partnership_charter.png",
    contactLink: "https://example.com/contact",
    barnesNobleLogo: "https://bmc-neon.vercel.app/logo_barnes_noble.png",
    googlePlayLogo: "https://bmc-neon.vercel.app/logo_google_play.png",
    amazonLogo: "https://bmc-neon.vercel.app/logo_amazon.png",
    indieBoundLogo: "https://bmc-neon.vercel.app/logo_indie_bound.png",
    audibleLogo: "https://bmc-neon.vercel.app/logo_audible.png",
    invertLogos: false,
  });

  // Client Testimonials
  const [testimonialsConfig, setTestimonialsConfig] = useState({
    backgroundColor: STYLE_CONSTANTS.primaryBlue,
    textColor: STYLE_CONSTANTS.white,
    headingFont: STYLE_CONSTANTS.headingFont,
    bodyFont: STYLE_CONSTANTS.bodyFont,
    testimonialImage: "https://bmc-neon.vercel.app/testimonial_photo.jpeg",
  });

  // Slivers of Ambiguity
  const [sliversOfAmbiguityConfig, setSliversOfAmbiguityConfig] = useState({
    backgroundColor: STYLE_CONSTANTS.lightGray,
    textColor: STYLE_CONSTANTS.darkText,
    headingColor: STYLE_CONSTANTS.primaryBlue,
    accentColor: STYLE_CONSTANTS.primaryYellow,
    headingFont: STYLE_CONSTANTS.headingFont,
    bodyFont: STYLE_CONSTANTS.bodyFont,
  });

  // DYP Licensed User
  const [dypLicensedUserConfig, setDypLicensedUserConfig] = useState({
    backgroundColor: STYLE_CONSTANTS.primaryBlue,
    textColor: STYLE_CONSTANTS.white,
    accentColor: STYLE_CONSTANTS.primaryYellow,
    headingFont: STYLE_CONSTANTS.headingFont,
    bodyFont: STYLE_CONSTANTS.bodyFont,
    buttonText: "Contact PHCG",
    buttonRadius: STYLE_CONSTANTS.borderRadius,
    organizationName: "PHCG",
  });

  const renderSection = () => {
    switch (activeSection) {
      // Introduction & Guide
      case "introduction":
        return <AppIntroduction />;

      // About PHCG
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
                <PHCGGenerator
                  config={PHCGConfig}
                  onConfigChange={setPHCGConfig}
                />
              </Box>
            </Paper>
          </>
        );

      // What is a PC?
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

      // Who Should Develop a Charter?
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

      // Three Steps to Partnership
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

      // The DYP Tool
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

      // Partners Benefits
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

      // PC Process
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

      // DYP Advantages
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

      // Partners Get Assistance
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

      // Partnership Charter Book
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

      // Client Testimonials
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

      // Slivers of Ambiguity
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

      // DYP Licensed User
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

      // Full Page Preview
      case "fullPagePreview":
        return (
          <FullPagePreview
            PHCGConfig={PHCGConfig}
            pcProcessConfig={pcProcessConfig}
            partnersBenefitsConfig={partnersBenefitsConfig}
            charterConfig={charterConfig}
            charterTypesConfig={charterTypesConfig}
            dypAdvantagesConfig={dypAdvantagesConfig}
            sliversOfAmbiguityConfig={sliversOfAmbiguityConfig}
            dypToolConfig={dypToolConfig}
            dypLicensedUserConfig={dypLicensedUserConfig}
            assistanceLevelsConfig={assistanceLevelsConfig}
            threeStepsConfig={threeStepsConfig}
            bookPromoConfig={bookPromoConfig}
            testimonialsConfig={testimonialsConfig}
          />
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
              backgroundColor: STYLE_CONSTANTS.white,
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
               Your Firm’s Partnership Charter Webpage Builder
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
                  backgroundColor: STYLE_CONSTANTS.lightGray,
                  borderRadius: STYLE_CONSTANTS.borderRadius,
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

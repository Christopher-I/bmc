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
import SliversOfAmbiguityGenerator from './components/SliversOfAmbiguity/SliversGenerator';
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
import DYPAdvantagesGenerator from './components/DYPAdvantages/DYPAdvantagesGenerator';
import SliversOfAmbiguityPreview from './components/SliversOfAmbiguity/SliversPreview'; // Import the new preview component

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#e67e22" },
  },
});

const sectionTitles = {
  introduction: "Introduction & Guide",
  bmc: "About BMC Section",
  pcProcess: "PC Process Section",
  partners: "Partners Benefits Section",
  charter: "Charter Section",
  charterTypes: "Who Should Develop a Charter",
  dypAdvantages: "DYP Advantages",
  sliversOfAmbiguity: "Slivers of Ambiguity", // Add new section title
};

function App() {
  const [activeSection, setActiveSection] = useState(() => {
    const savedSection = localStorage.getItem("activeSection");
    return savedSection || "introduction";
  });

  useEffect(() => {
    localStorage.setItem("activeSection", activeSection);
  }, [activeSection]);

  const [bmcConfig, setBmcConfig] = useState({
    backgroundColor: "#2c3e50",
    textColor: "#ffffff",
    headingFont: "serif",
    bodyFont: "sans-serif",
    buttonColor: "#e67e22",
    buttonText: "More About BMC",
    buttonRadius: 4,
  });

  const [pcProcessConfig, setPcProcessConfig] = useState({
    backgroundColor: "#1e4164",
    textColor: "#ffffff",
    accentColor: "#d5ad36",
    headingFont: "serif",
    bodyFont: "sans-serif",
    buttonColor: "#d5ad36",
    buttonText: "Contact BMC",
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

  // Add state for the new Slivers of Ambiguity section
  const [sliversOfAmbiguityConfig, setSliversOfAmbiguityConfig] = useState({
    backgroundColor: "#e6ecef", // Match the light grayish-blue background from the image
    textColor: "#333333",
    headingColor: "#333333",
    accentColor: "#d5ad36", // Match the gold border color from the image
    headingFont: "serif",
    bodyFont: "sans-serif",
  });

  const renderSection = () => {
    switch (activeSection) {
      case "introduction":
        return <AppIntroduction />;
      case "bmc":
        return (
          <>
            <Paper elevation={3} sx={{ mb: 4 }}>
              <Box p={3}>
                <Typography variant="h6" gutterBottom align="center">
                  Preview
                </Typography>
                <PreviewPanel config={bmcConfig} />
              </Box>
            </Paper>
            <Paper elevation={3}>
              <Box p={3}>
                <Typography variant="h6" gutterBottom align="left">
                  Embed Code
                </Typography>
                <Box sx={{ maxWidth: "100%", overflowX: "auto" }}>
                  <CodeGenerator config={bmcConfig} />
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
                Website Section Builder
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
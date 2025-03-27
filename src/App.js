import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  ThemeProvider, 
  createTheme, 
  CssBaseline,
  Paper,
  Tabs,
  Tab
} from '@mui/material';
import PreviewPanel from './components/PreviewPanel';
import CustomizationPanel from './components/CustomizationPanel';
import CodeGenerator from './components/CodeGenerator';
import PCProcessPreview from './components/PCProcessPreview';
import PCProcessGenerator from './components/PCProcessGenerator';
import PartnersBenefitsPreview from './components/PartnersBenefitsPreview';
import PartnersBenefitsGenerator from './components/PartnersBenefitsGenerator';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#e67e22',
    },
  },
});

function App() {
  // Initialize active tab from localStorage or default to 0
  const [activeTab, setActiveTab] = useState(() => {
    const savedTab = localStorage.getItem('activeTab');
    return savedTab !== null ? parseInt(savedTab, 10) : 0;
  });

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    // Save to localStorage
    localStorage.setItem('activeTab', newValue.toString());
  };

  // Default configuration for the BMC section
  const [bmcConfig, setBmcConfig] = useState({
    backgroundColor: '#2c3e50',
    textColor: '#ffffff',
    headingFont: 'serif',
    bodyFont: 'sans-serif',
    buttonColor: '#e67e22',
    buttonText: 'More About BMC',
    buttonRadius: 4
  });

  // Default configuration for the PC Process section
  const [pcProcessConfig, setPcProcessConfig] = useState({
    backgroundColor: '#1e4164',
    textColor: '#ffffff',
    accentColor: '#d5ad36',
    headingFont: 'serif',
    bodyFont: 'sans-serif',
    buttonColor: '#d5ad36',
    buttonText: 'Contact BMC',
    buttonRadius: 4,
    accordionRadius: 4,
    transitionSpeed: 0.3
  });

  // Default configuration for the Partners Benefits section
  const [partnersBenefitsConfig, setPartnersBenefitsConfig] = useState({
    backgroundColor: '#f5f7fa',
    textColor: '#333333',
    headingColor: '#1e4164',
    accentColor: '#3366cc',
    headingFont: 'serif',
    bodyFont: 'sans-serif',
    buttonColor: '#3366cc',
    buttonRadius: 4,
    imageRadius: 8,
    imageSrc: 'https://placehold.co/600x400/e6e6e6/1e4164?text=Partnership+diagram'
  });

  // Handle BMC configuration updates
  const handleBmcConfigChange = (name, value) => {
    setBmcConfig({
      ...bmcConfig,
      [name]: value
    });
  };

  // Handle PC Process configuration updates
  const handlePcProcessConfigChange = (name, value) => {
    setPcProcessConfig({
      ...pcProcessConfig,
      [name]: value
    });
  };

  // Handle Partners Benefits configuration updates
  const handlePartnersBenefitsConfigChange = (newConfig) => {
    setPartnersBenefitsConfig(newConfig);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h1" gutterBottom>
            BMC Section Embedding Tool
          </Typography>
          <Typography variant="body1" paragraph>
            Customize sections below and get the code to embed them on your website.
          </Typography>

          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
            <Tabs value={activeTab} onChange={handleTabChange} aria-label="section tabs">
              <Tab label="About BMC Section" />
              <Tab label="PC Process Section" />
              <Tab label="Partners Benefits Section" />
            </Tabs>
          </Box>
        </Container>

        {/* BMC Section Tab */}
        {activeTab === 0 && (
          <>
            {/* Full Width Preview */}
            <Paper elevation={3} sx={{ mb: 4 }}>
              <Box p={3}>
                <Typography variant="h6" gutterBottom align="center">Preview</Typography>
                <PreviewPanel config={bmcConfig} />
              </Box>
            </Paper>
            
            {/* Customization and Code Below */}
            <Container maxWidth="lg">
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  {/* <Paper elevation={3}>
                    <Box p={3}>
                      <Typography variant="h6" gutterBottom>Customize</Typography>
                      <CustomizationPanel 
                        config={bmcConfig} 
                        onConfigChange={handleBmcConfigChange} 
                      />
                    </Box>
                  </Paper> */}
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Paper elevation={3}>
                    <Box p={3}>
                      <Typography variant="h6" gutterBottom>Embed Code</Typography>
                      <CodeGenerator config={bmcConfig} />
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </>
        )}

        {/* PC Process Section Tab */}
        {activeTab === 1 && (
          <>
            {/* Full Width Preview */}
            <Paper elevation={3} sx={{ mb: 4 }}>
              <Box p={3}>
                <Typography variant="h6" gutterBottom align="center">Preview</Typography>
                <PCProcessPreview config={pcProcessConfig} />
              </Box>
            </Paper>
            
            {/* Customization Below */}
            <Container maxWidth="lg">
              <Paper elevation={3}>
                <Box p={3}>
                  <PCProcessGenerator 
                    config={pcProcessConfig}
                    onConfigChange={handlePcProcessConfigChange}
                  />
                </Box>
              </Paper>
            </Container>
          </>
        )}

        {/* Partners Benefits Section Tab */}
        {activeTab === 2 && (
          <>
            {/* Full Width Preview */}
            <Paper elevation={3} sx={{ mb: 4 }}>
              <Box p={3}>
                <Typography variant="h6" gutterBottom align="center">Preview</Typography>
                <PartnersBenefitsPreview config={partnersBenefitsConfig} />
              </Box>
            </Paper>
            
            {/* Customization Below */}
            <Container maxWidth="lg">
              <Paper elevation={3}>
                <Box p={3}>
                  <PartnersBenefitsGenerator 
                    config={partnersBenefitsConfig}
                    onConfigChange={handlePartnersBenefitsConfigChange}
                  />
                </Box>
              </Paper>
            </Container>
          </>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
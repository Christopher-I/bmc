import React, { useState } from 'react';
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
import CharterPreview from './components/CharterPreview';
import CharterSectionGenerator from './components/CharterSectionGenerator';

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
  // Active tab state
  const [activeTab, setActiveTab] = useState(0);

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
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

  // Default configuration for the Charter section
  const [charterConfig, setCharterConfig] = useState({
    backgroundColor: '#1e4164',
    textColor: '#ffffff',
    headingFont: 'sans-serif',
    bodyFont: 'sans-serif',
    accentColor: '#a3c984',
    buttonColor: '#ffffff',
    buttonText: 'Learn More',
    buttonRadius: 0,
    transitionSpeed: 0.3
  });

  // Handle BMC configuration updates
  const handleBmcConfigChange = (name, value) => {
    setBmcConfig({
      ...bmcConfig,
      [name]: value
    });
  };

  // Handle Charter configuration updates
  const handleCharterConfigChange = (name, value) => {
    setCharterConfig({
      ...charterConfig,
      [name]: value
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          BMC Section Embedding Tool
        </Typography>
        <Typography variant="body1" paragraph>
          Customize sections below and get the code to embed them on your website.
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs value={activeTab} onChange={handleTabChange} aria-label="section tabs">
            <Tab label="About BMC Section" />
            <Tab label="Partnership Charter Section" />
          </Tabs>
        </Box>

        {/* BMC Section Tab */}
        {activeTab === 0 && (
          <Grid container spacing={3}>
            {/* Preview Panel - Left Side */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ height: '100%' }}>
                <Box p={3}>
                  <Typography variant="h6" gutterBottom>Preview</Typography>
                  <PreviewPanel config={bmcConfig} />
                </Box>
              </Paper>
            </Grid>

            {/* Controls - Right Side */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3}>
                <Box p={3}>
                  <Typography variant="h6" gutterBottom>Customize</Typography>
                  <CustomizationPanel 
                    config={bmcConfig} 
                    onConfigChange={handleBmcConfigChange} 
                  />
                </Box>
              </Paper>
              
              <Paper elevation={3} sx={{ mt: 3 }}>
                <Box p={3}>
                  <Typography variant="h6" gutterBottom>Embed Code</Typography>
                  <CodeGenerator config={bmcConfig} />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        )}

        {/* Charter Section Tab */}
        {activeTab === 1 && (
          <Grid container spacing={3}>
            {/* Preview Panel - Left Side */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ height: '100%' }}>
                <Box p={3}>
                  <Typography variant="h6" gutterBottom>Preview</Typography>
                  <CharterPreview config={charterConfig} />
                </Box>
              </Paper>
            </Grid>

            {/* Controls - Right Side */}
            <Grid item xs={12} md={6}>
              <CharterSectionGenerator />
            </Grid>
          </Grid>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
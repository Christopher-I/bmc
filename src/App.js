import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  ThemeProvider, 
  createTheme, 
  CssBaseline,
  Paper
} from '@mui/material';
import PreviewPanel from './components/PreviewPanel';
import CustomizationPanel from './components/CustomizationPanel';
import CodeGenerator from './components/CodeGenerator';

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
  // Default configuration for the BMC section
  const [config, setConfig] = useState({
    backgroundColor: '#2c3e50',
    textColor: '#ffffff',
    headingFont: 'serif',
    bodyFont: 'sans-serif',
    buttonColor: '#e67e22',
    buttonText: 'More About BMC',
    buttonRadius: 4
  });

  // Handle configuration updates
  const handleConfigChange = (name, value) => {
    setConfig({
      ...config,
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
          Customize the BMC section below and get the code to embed it on your website.
        </Typography>

        <Grid container spacing={3}>
          {/* Preview Panel - Left Side */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ height: '100%' }}>
              <Box p={3}>
                <Typography variant="h6" gutterBottom>Preview</Typography>
                <PreviewPanel config={config} />
              </Box>
            </Paper>
          </Grid>

          {/* Controls - Right Side */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3}>
              <Box p={3}>
                <Typography variant="h6" gutterBottom>Customize</Typography>
                <CustomizationPanel 
                  config={config} 
                  onConfigChange={handleConfigChange} 
                />
              </Box>
            </Paper>
            
            <Paper elevation={3} sx={{ mt: 3 }}>
              <Box p={3}>
                <Typography variant="h6" gutterBottom>Embed Code</Typography>
                <CodeGenerator config={config} />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
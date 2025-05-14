// src/components/FullPagePreview/FullPagePreview.js
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Divider,
  IconButton,
  Tooltip,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CodeIcon from "@mui/icons-material/Code";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CompressIcon from "@mui/icons-material/Compress";
import BugReportIcon from "@mui/icons-material/BugReport";

// Import all preview components
import PreviewPanel from "../General Functions/PreviewPanel";
import PCProcessPreview from "../PCProcess/PCProcessPreview";
import PartnersBenefitsPreview from "../PartnerBenefits/PartnersBenefitsPreview";
import CharterSectionPreview from "../CharterSection/CharterSectionPreview";
import CharterTypesPreview from "../CharterTypes/CharterTypesPreview";
import DYPAdvantagesPreview from "../DYPAdvantages/DYPAdvantagesPreview";
import SliversOfAmbiguityPreview from "../SliversOfAmbiguity/SliversPreview";
import DYPToolPreview from "../DYPTool/DYPToolPreview";
import DYPLicensedUserPreview from "../DYPLicensedUser/DYPLicensedUserPreview";
import AssistanceLevelsPreview from "../AssistanceLevels/AssistanceLevelsPreview";
import ThreeStepsPreview from "../ThreeSteps/ThreeStepsPreview";
import BookPromoPreview from "../BookPromo/BookPromoPreview";
import TestimonialsPreview from "../Testimonials/TestimonialsPreview";

// Import shared functions for generating embed code
import { generateTestimonialsEmbedCode } from "../Testimonials/TestimonialsShared";
import { generateCharterEmbedScript } from "../CharterSection/CharterSectionShared";
import { generateEmbedCode as generateCharterTypesEmbedCode } from "../CharterTypes/CharterTypesShared";
import { generateThreeStepsEmbedCode } from "../ThreeSteps/ThreeStepsShared";
import { generateDYPToolEmbedCode } from "../DYPTool/DYPToolShared";
import { generatePartnersBenefitsEmbedCode } from "../PartnerBenefits/PartnersBenefitsShared";
import { generateEmbedCode as generatePCProcessEmbedCode } from "../PCProcess/PCProcessShared";
import { generateEmbedCode as generateDYPAdvantagesEmbedCode } from "../DYPAdvantages/DYPAdvantagesShared";
import { generateAssistanceLevelsEmbedCode } from "../AssistanceLevels/AssistanceLevelsShared";
import { generateBookPromoEmbedCode } from "../BookPromo/BookPromoShared";
import { generateSliversEmbedCode } from "../SliversOfAmbiguity/SliversShared";
import { generateDYPLicensedUserEmbedCode } from '../DYPLicensedUser/DYPLicensedUserShared';
import { generatePHCGEmbedCode } from '../General Functions/PHCGShared';

/**
 * Component that shows a full page preview of all blocks
 * with options to select which ones to include
 */
const FullPagePreview = ({
  PHCGConfig,
  pcProcessConfig,
  partnersBenefitsConfig,
  charterConfig,
  charterTypesConfig,
  dypAdvantagesConfig,
  sliversOfAmbiguityConfig,
  dypToolConfig,
  dypLicensedUserConfig,
  assistanceLevelsConfig,
  threeStepsConfig,
  bookPromoConfig,
  testimonialsConfig,
}) => {
  // Define all available blocks with their configurations
  const [blocks, setBlocks] = useState([
    {
      id: "header",
      name: "About PHCG",
      component: PreviewPanel,
      config: PHCGConfig,
      enabled: true,
      getEmbedCode: () => {
        const absoluteConfig = {
          ...PHCGConfig,
          buttonUrl: PHCGConfig.buttonUrl || "https://PHCG-associates.com",
        };
        return generatePHCGEmbedCode(absoluteConfig);
      },
    },
    {
      id: "charter",
      name: "What is a PC?",
      component: CharterSectionPreview,
      config: charterConfig,
      enabled: true,
      getEmbedCode: () => {
        // Always use absolute URLs in the embed code
        const absoluteConfig = {
          ...charterConfig,
          logoSrc: charterConfig.logoSrc?.startsWith("http")
            ? charterConfig.logoSrc
            : "https://bmc-neon.vercel.app/tpci_logo.svg",
          imageSrc: charterConfig.imageSrc?.startsWith("http")
            ? charterConfig.imageSrc
            : "https://bmc-neon.vercel.app/chartersection_computer.jpg",
        };
        return generateCharterEmbedScript(absoluteConfig);
      },
    },
    {
      id: "charterTypes",
      name: "Who Should Develop a Charter?",
      component: CharterTypesPreview,
      config: charterTypesConfig,
      enabled: true,
      getEmbedCode: () => generateCharterTypesEmbedCode(charterTypesConfig),
    },
    {
      id: "steps",
      name: "Three Steps to Partnership",
      component: ThreeStepsPreview,
      config: threeStepsConfig,
      enabled: true,
      getEmbedCode: () => generateThreeStepsEmbedCode(threeStepsConfig),
    },
    {
      id: "tool",
      name: "The DYP Tool",
      component: DYPToolPreview,
      config: dypToolConfig,
      enabled: true,
      getEmbedCode: () => generateDYPToolEmbedCode(dypToolConfig),
    },
    {
      id: "benefits",
      name: "Partners Benefits",
      component: PartnersBenefitsPreview,
      config: partnersBenefitsConfig,
      enabled: true,
      getEmbedCode: () =>
        generatePartnersBenefitsEmbedCode(partnersBenefitsConfig),
    },
    {
      id: "process",
      name: "PC Process",
      component: PCProcessPreview,
      config: pcProcessConfig,
      enabled: true,
      getEmbedCode: () => generatePCProcessEmbedCode(pcProcessConfig),
    },
    {
      id: "advantages",
      name: "DYP Advantages",
      component: DYPAdvantagesPreview,
      config: dypAdvantagesConfig,
      enabled: true,
      getEmbedCode: () => generateDYPAdvantagesEmbedCode(dypAdvantagesConfig),
    },
    {
      id: "assistance",
      name: "Partners Get Assistance",
      component: AssistanceLevelsPreview,
      config: assistanceLevelsConfig,
      enabled: true,
      getEmbedCode: () =>
        generateAssistanceLevelsEmbedCode(assistanceLevelsConfig),
    },
    {
      id: "book",
      name: "Partnership Charter Book",
      component: BookPromoPreview,
      config: bookPromoConfig,
      enabled: true,
      getEmbedCode: () => generateBookPromoEmbedCode(bookPromoConfig),
    },
    {
      id: "testimonials",
      name: "Client Testimonials",
      component: TestimonialsPreview,
      config: testimonialsConfig,
      enabled: true,
      getEmbedCode: () => generateTestimonialsEmbedCode(testimonialsConfig),
    },
    {
      id: "slivers",
      name: "Slivers of Ambiguity",
      component: SliversOfAmbiguityPreview,
      config: sliversOfAmbiguityConfig,
      enabled: true,
      getEmbedCode: () => generateSliversEmbedCode(sliversOfAmbiguityConfig),
    },
    {
      id: "licensed",
      name: "DYP Licensed User",
      component: DYPLicensedUserPreview,
      config: dypLicensedUserConfig,
      enabled: true,
      getEmbedCode: () => {
        // Use absolute URLs in the embed code
        const absoluteConfig = {
          ...dypLicensedUserConfig,
          logoUrl: dypLicensedUserConfig.logoUrl?.startsWith("http")
            ? dypLicensedUserConfig.logoUrl
            : "https://bmc-neon.vercel.app/dyp_logo.png",
          buttonUrl: dypLicensedUserConfig.buttonUrl || "#",
        };
        return generateDYPLicensedUserEmbedCode(absoluteConfig);
      },
    },
  ]);

  const [activeTab, setActiveTab] = useState(0);
  const [showBlockControls, setShowBlockControls] = useState(false);
  const [minifying, setMinifying] = useState(false);
  const [notification, setNotification] = useState({ open: false, message: "", severity: "success" });

  // Function to show notifications
  const showNotification = (message, severity = "success") => {
    setNotification({ open: true, message, severity });
  };

  // Function to close notifications
  const closeNotification = () => {
    setNotification({ ...notification, open: false });
  };

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Toggle a block's enabled status
  const toggleBlock = (id) => {
    setBlocks(
      blocks.map((block) =>
        block.id === id ? { ...block, enabled: !block.enabled } : block
      )
    );
  };

  // Move a block up in the order
  const moveBlockUp = (index) => {
    if (index === 0) return;
    const newBlocks = [...blocks];
    [newBlocks[index - 1], newBlocks[index]] = [
      newBlocks[index],
      newBlocks[index - 1],
    ];
    setBlocks(newBlocks);
  };

  // Move a block down in the order
  const moveBlockDown = (index) => {
    if (index === blocks.length - 1) return;
    const newBlocks = [...blocks];
    [newBlocks[index], newBlocks[index + 1]] = [
      newBlocks[index + 1],
      newBlocks[index],
    ];
    setBlocks(newBlocks);
  };

  // Function to inspect a generated embed code to ensure it's valid
  const inspectEmbedCode = (code, blockName) => {
    console.log(`Inspecting embed code for ${blockName}:`, code);
    
    if (!code) {
      console.error(`Empty embed code for ${blockName}`);
      return false;
    }
    
    if (!code.includes('<script')) {
      console.error(`Missing script tag in embed code for ${blockName}`);
      return false;
    }
    
    // For debugging purposes - this will show what's being generated
    return true;
  };

  // Get the combined embed code for all enabled blocks
  const getCombinedEmbedCode = () => {
    const enabledBlocks = blocks.filter((block) => block.enabled);
    
    // First inspect each block's embed code for debugging
    enabledBlocks.forEach(block => {
      const code = block.getEmbedCode();
      inspectEmbedCode(code, block.name);
    });
    
    // Then return the combined code
    return enabledBlocks
      .map((block) => block.getEmbedCode())
      .join("\n\n");
  };

  // Copy the combined embed code to clipboard
  const copyEmbedCode = () => {
    const code = getCombinedEmbedCode();
    navigator.clipboard.writeText(code);
    showNotification("Embed code copied to clipboard!");
  };

  // Function to minify a script tag while preserving all attributes
  const minifyScript = (scriptCode) => {
    try {
      if (!scriptCode) {
        console.error("Empty script code provided to minifier");
        return scriptCode;
      }
      
      // Simple whitespace reduction for the entire script tag
      return scriptCode
        .replace(/\s+/g, ' ')           // Replace multiple spaces with a single space
        .replace(/>\s+</g, '><')        // Remove spaces between tags
        .replace(/\s+>/g, '>')          // Remove spaces before closing brackets
        .replace(/\s*=\s*/g, '=')       // Remove spaces around equals signs
        .trim();                         // Remove leading/trailing whitespace
    } catch (error) {
      console.error('Minification error:', error);
      // Return original if there's an error
      return scriptCode;
    }
  };
  
  // Function to copy minified code for a single block
  const copyMinifiedBlockCode = (block) => {
    const code = block.getEmbedCode();
    
    // Validate the code first
    if (!inspectEmbedCode(code, block.name)) {
      showNotification(`Invalid embed code for ${block.name}. See console for details.`, "error");
      return;
    }
    
    const minified = minifyScript(code);
    navigator.clipboard.writeText(minified);
    showNotification(`Minified code for ${block.name} copied to clipboard!`);
  };
  
  // Function to copy minified code for all enabled blocks
  const copyAllMinifiedCode = () => {
    setMinifying(true);
    try {
      const enabledBlocks = blocks.filter(block => block.enabled);
      
      // Check each block for valid embed code
      let allValid = true;
      enabledBlocks.forEach(block => {
        const code = block.getEmbedCode();
        if (!inspectEmbedCode(code, block.name)) {
          showNotification(`Invalid embed code for ${block.name}. See console for details.`, "error");
          allValid = false;
        }
      });
      
      if (!allValid) {
        setMinifying(false);
        return;
      }
      
      // Minify each block's embed code
      const minifiedCodes = enabledBlocks.map(block => 
        minifyScript(block.getEmbedCode())
      );
      
      // Join and copy to clipboard
      navigator.clipboard.writeText(minifiedCodes.join('\n\n'));
      showNotification("Minified code for all enabled blocks copied to clipboard!");
    } catch (error) {
      console.error('Error minifying blocks:', error);
      showNotification("Error minifying code. Please try again.", "error");
    } finally {
      setMinifying(false);
    }
  };

  // Debug function to check all embed code generators
  const debugEmbedGenerators = () => {
    console.group("Debugging Embed Code Generators");
    
    blocks.forEach(block => {
      try {
        console.log(`Testing ${block.name} embed code generator...`);
        const code = block.getEmbedCode();
        console.log(`Result for ${block.name}:`, code);
        
        if (!code || !code.includes('<script')) {
          console.error(`Invalid embed code for ${block.name}`);
        }
      } catch (error) {
        console.error(`Error generating embed code for ${block.name}:`, error);
      }
    });
    
    console.groupEnd();
    showNotification("Embed code generators debugged. Check console for details.", "info");
  };

  // Render the preview tab
  const renderPreview = () => {
    return (
      <Box sx={{ mt: 3 }}>
        {blocks
          .filter((block) => block.enabled)
          .map((block, index) => {
            const BlockComponent = block.component;
            return (
              <Box
                key={block.id}
                id={block.id}
                sx={{
                  mb: 0,
                  position: "relative",
                  border: showBlockControls ? "1px dashed #ccc" : "none",
                }}
              >
                {showBlockControls && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      zIndex: 10,
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      p: 1,
                      borderRadius: "0 0 0 8px",
                    }}
                  >
                    <Typography variant="caption" sx={{ mr: 1 }}>
                      Section {index + 1}: {block.name}
                    </Typography>
                  </Box>
                )}
                <BlockComponent config={block.config} />
              </Box>
            );
          })}
      </Box>
    );
  };

  // Render the blocks management tab
  const renderBlocksManager = () => {
    return (
      <Box sx={{ mt: 3 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Manage Website Blocks
          </Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Enable or disable blocks and change their order to customize your
            webpage.
          </Typography>

          <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {/* Commented out "Show Block Labels" button */}
            {/* <Button
              variant="contained"
              onClick={() => setShowBlockControls(!showBlockControls)}
            >
              {showBlockControls ? "Hide Block Labels" : "Show Block Labels"}
            </Button> */}
            <Button
              variant="contained"
              color="secondary"
              onClick={copyEmbedCode}
              startIcon={<ContentCopyIcon />}
            >
              Copy All Enabled Blocks Code
            </Button>
            {/* Commented out "Copy Minified Code" button */}
            {/* <Button
              variant="contained"
              color="secondary"
              onClick={copyAllMinifiedCode}
              startIcon={<CompressIcon />}
              disabled={minifying}
            >
              {minifying ? (
                <>
                  <CircularProgress size={24} color="inherit" sx={{ mr: 1 }} />
                  Minifying...
                </>
              ) : (
                'Copy Minified Code'
              )}
            </Button> */}
            {/* Commented out "Debug Embed Generators" button */}
            {/* <Button
              variant="outlined"
              color="info"
              onClick={debugEmbedGenerators}
              startIcon={<BugReportIcon />}
            >
              Debug Embed Generators
            </Button> */}
          </Box>

          <Divider sx={{ my: 2 }} />

          <Grid container spacing={2}>
            {blocks.map((block, index) => (
              <Grid item xs={12} key={block.id}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: block.enabled ? "white" : "#f5f5f5",
                    opacity: block.enabled ? 1 : 0.7,
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={block.enabled}
                        onChange={() => toggleBlock(block.id)}
                      />
                    }
                    label={block.name}
                    sx={{ flexGrow: 1 }}
                  />
                  <Box>
                    <Tooltip title="Preview this block">
                      <IconButton
                        onClick={() => {
                          setActiveTab(0);
                          setTimeout(() => {
                            document
                              .getElementById(block.id)
                              ?.scrollIntoView({ behavior: "smooth" });
                          }, 100);
                        }}
                        disabled={!block.enabled}
                      >
                        <VisibilityIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Copy embed code for this block">
                      <IconButton
                        onClick={() => {
                          navigator.clipboard.writeText(block.getEmbedCode());
                          showNotification(`Embed code for ${block.name} copied to clipboard!`);
                        }}
                        disabled={!block.enabled}
                      >
                        <CodeIcon />
                      </IconButton>
                    </Tooltip>
                    {/* Commented out "Copy minified embed code" button */}
                    {/* <Tooltip title="Copy minified embed code">
                      <IconButton
                        onClick={() => copyMinifiedBlockCode(block)}
                        disabled={!block.enabled || minifying}
                      >
                        {minifying ? (
                          <CircularProgress size={24} />
                        ) : (
                          <CompressIcon />
                        )}
                      </IconButton>
                    </Tooltip> */}
                    <Tooltip title="Move up">
                      <span>
                        <IconButton
                          onClick={() => moveBlockUp(index)}
                          disabled={index === 0}
                        >
                          <ArrowUpwardIcon />
                        </IconButton>
                      </span>
                    </Tooltip>
                    <Tooltip title="Move down">
                      <span>
                        <IconButton
                          onClick={() => moveBlockDown(index)}
                          disabled={index === blocks.length - 1}
                        >
                          <ArrowDownwardIcon />
                        </IconButton>
                      </span>
                    </Tooltip>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    );
  };

  // Render the help tab
  const renderHelp = () => {
    return (
      <Box sx={{ mt: 3 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Full Page Preview Help
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ mt: 3, mb: 1, fontWeight: "bold" }}
          >
            How to use the PC Webpage Builder
          </Typography>
          <Typography variant="body1" paragraph>
            The Full Page Preview allows you to see how all your website blocks
            look when combined into a single webpage. You can customize which
            blocks are included and their order.
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ mt: 3, mb: 1, fontWeight: "bold" }}
          >
            Preview Tab
          </Typography>
          <Typography variant="body1" paragraph>
            The Preview tab shows all your enabled blocks stacked together as
            they would appear on a live website.
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ mt: 3, mb: 1, fontWeight: "bold" }}
          >
            Manage Blocks Tab
          </Typography>
          <Typography variant="body1" paragraph>
            The Manage Blocks tab lets you:
          </Typography>
          <ul>
            <li>Enable or disable blocks using the checkboxes</li>
            <li>Change the order of blocks using the up and down arrows</li>
            <li>Preview individual blocks by clicking the eye icon</li>
            <li>Copy the embed code for individual blocks</li>
            <li>Copy the combined embed code for all enabled blocks</li>
          </ul>

          <Typography
            variant="subtitle1"
            sx={{ mt: 3, mb: 1, fontWeight: "bold" }}
          >
            Using the Embed Code
          </Typography>
          <Typography variant="body1" paragraph>
            Once you're satisfied with your webpage configuration, copy the
            embed code and paste it into your website's HTML where you want the
            blocks to appear. Each block uses Shadow DOM to ensure styles don't
            conflict with your existing website.
          </Typography>
          
          <Typography
            variant="subtitle1"
            sx={{ mt: 3, mb: 1, fontWeight: "bold" }}
          >
            Troubleshooting
          </Typography>
          <Typography variant="body1" paragraph>
            If you encounter issues with the embed code:
          </Typography>
          <ul>
            <li>Verify that all required script files are uploaded to your server</li>
            <li>Check that URLs in your configuration are correct</li>
            <li>Try embedding one block at a time to identify problematic components</li>
          </ul>
        </Paper>
      </Box>
    );
  };

  return (
    <Box>
      <Paper elevation={3} sx={{ mb: 4 }}>
        <Box p={3}>
          <Typography variant="h5" gutterBottom align="center">
            Full Page Preview
          </Typography>
          <Typography variant="body1" paragraph align="center">
            See how all your blocks come together to form a complete webpage
          </Typography>

          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={activeTab} onChange={handleTabChange} centered>
              <Tab label="Preview" />
              <Tab label="Manage Blocks" />
              <Tab label="Help" icon={<HelpOutlineIcon />} iconPosition="end" />
            </Tabs>
          </Box>

          {activeTab === 0 && renderPreview()}
          {activeTab === 1 && renderBlocksManager()}
          {activeTab === 2 && renderHelp()}
        </Box>
      </Paper>
      
      <Snackbar 
        open={notification.open} 
        autoHideDuration={4000} 
        onClose={closeNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={closeNotification} severity={notification.severity} variant="filled">
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default FullPagePreview;
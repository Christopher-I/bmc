import React from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  Alert,
  AlertTitle,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Step,
  StepLabel,
  Stepper,
  Button,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import FormatShapesIcon from "@mui/icons-material/FormatShapes";
import SettingsIcon from "@mui/icons-material/Settings";
import WebIcon from "@mui/icons-material/Web";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import HtmlIcon from "@mui/icons-material/Html";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import EmailIcon from "@mui/icons-material/Email";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const AppIntroduction = () => {
  const steps = [
    "Select the Blocks You’d Like to Use",
    "Customize the style",
    "Copy your selection",
    "Paste into your website",
  ];

  // Style for consistent card heights
  const cardStyle = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.2s, box-shadow 0.2s",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
    },
  };

  const cardContentStyle = {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  };

  return (
    <Box sx={{ pb: 5 }}>
      {/* Welcome block */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          mb: 4,
          borderRadius: 2,
          background: "linear-gradient(to right, #f5f7fa, #e0e4ec)",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ color: "#1e4164", fontWeight: "medium" }}
        >
          Welcome to TPCI’s Webpage-Building Tool
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: "1.1rem", maxWidth: "900px" }}
        >
          With this tool, you’ll be able to easily create a beautiful,
          customized PC page for your website. We’ve made it as simple as
          possible—no coding degree required! Just read the instructions,
          explore the options, and you’ll be ready to go.
          <br />
          <br />
          Begin by reviewing the full page. If you don’t want all the blocks,
          consider which blocks you’d like. You'll be able to select the ones
          you want. Once you pick what you want, you can customize the blocks to
          match your website’s styling (fonts, colors, etc.). Then it’s simply a
          matter of copying and pasting the blocks, or page, into your website.
        </Typography>

        {/* TPCI Logo Note Alert */}
        <Alert
          severity="info"
          icon={<WarningIcon fontSize="inherit" />}
          sx={{
            mb: 4,
            backgroundColor: "rgba(232, 244, 253, 0.9)",
            border: "1px solid rgba(66, 165, 245, 0.3)",
            "& .MuiAlert-icon": {
              color: "#1976d2",
            },
          }}
        >
          <AlertTitle sx={{ fontWeight: "bold" }}>
            Important Note About Customization
          </AlertTitle>
          <Typography variant="body2">
            Wherever you see 'Post-Haste Consulting Group' and their logo,
            replace it with your firm’s name and logo. Some blocks indicate that
            you’re licensing PCS materials and the DYP™ tool from TPCI. These
            sections cannot be modified or removed, as stated in the agreement.
          </Typography>
        </Alert>

        <Box sx={{ my: 4 }}>
          <Grid container spacing={3} alignItems="stretch">
            <Grid item xs={12} md={6}>
              <Card elevation={2} sx={cardStyle}>
                <CardContent sx={cardContentStyle}>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ mb: 2, display: "flex", alignItems: "center" }}
                  >
                    <InfoIcon sx={{ mr: 1, color: "#1976d2" }} />
                    What is this tool?
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ flexGrow: 1 }}
                  >
                    TPCI’s Web-Building Tool allows you to create a website page
                    you can integrate into your website, that helps your
                    existing and potential clients understand this amazing
                    offering.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card elevation={2} sx={cardStyle}>
                <CardContent sx={cardContentStyle}>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ mb: 2, display: "flex", alignItems: "center" }}
                  >
                    <LightbulbIcon sx={{ mr: 1, color: "#fbc02d" }} />
                    Why use this tool?
                  </Typography>
                  <List dense sx={{ p: 0, flexGrow: 1 }}>
                    <ListItem>
                      <ListItemIcon sx={{ minWidth: "30px" }}>
                        <CheckCircleIcon fontSize="small" color="success" />
                      </ListItemIcon>
                      <ListItemText primary="Save time with pre-designed, professional blocks" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon sx={{ minWidth: "30px" }}>
                        <CheckCircleIcon fontSize="small" color="success" />
                      </ListItemIcon>
                      <ListItemText primary="Customize to match your brand's look and feel" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon sx={{ minWidth: "30px" }}>
                        <CheckCircleIcon fontSize="small" color="success" />
                      </ListItemIcon>
                      <ListItemText primary="No coding knowledge required" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon sx={{ minWidth: "30px" }}>
                        <CheckCircleIcon fontSize="small" color="success" />
                      </ListItemIcon>
                      <ListItemText primary="Works with WordPress, Webflow, or any HTML website" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      {/* Video Tutorial block */}
      <Paper
        elevation={3}
        sx={{ p: 4, mb: 4, borderRadius: 2, bgcolor: "#f8f9fc" }}
      >
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#1e4164",
            borderBottom: "2px solid #e0e4ec",
            paddingBottom: "8px",
          }}
        >
          <PlayCircleOutlineIcon sx={{ mr: 1, color: "#e53935" }} /> Video
          Tutorial
        </Typography>

        <Typography variant="body1" paragraph sx={{ fontSize: "1.05rem" }}>
          Watch this quick tutorial to learn how to use the TPCI’s
          Webpage-building Tool.
        </Typography>

        {/* Embedded Loom Video */}
        <Box
          sx={{
            width: "100%",
            height: 0,
            paddingBottom: "56.25%", // 16:9 aspect ratio
            position: "relative",
            mb: 2,
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.loom.com/embed/65fb771a19a64477b602a8e39bb164af"
            frameBorder="0"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="PHCG block Embedding Tool Tutorial"
          ></iframe>
        </Box>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <InfoIcon sx={{ fontSize: 16, mr: 0.5 }} />
          Note: You can return to this introduction anytime by clicking on the
          first tab.
        </Typography>
      </Paper>

      {/* How to use block with steps */}
      <Paper
        elevation={3}
        sx={{ p: 4, mb: 4, borderRadius: 2, bgcolor: "#f8f9fc" }}
      >
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#1e4164",
            borderBottom: "2px solid #e0e4ec",
            paddingBottom: "8px",
          }}
        >
          <DesignServicesIcon sx={{ mr: 1, color: "#1976d2" }} /> How to Use
          This Tool
        </Typography>

        <Box sx={{ width: "100%", my: 3 }}>
          <Stepper alternativeLabel activeStep={-1}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  StepIconProps={{
                    sx: {
                      ".MuiStepIcon-root": {
                        fontSize: 32,
                        color:
                          index === 0
                            ? "#1976d2"
                            : index === 1
                            ? "#7e57c2"
                            : index === 2
                            ? "#26a69a"
                            : "#66bb6a",
                      },
                    },
                  }}
                >
                  <Typography sx={{ fontWeight: "medium" }}>{label}</Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <Grid container spacing={3} sx={{ mt: 1 }} alignItems="stretch">
          <Grid item xs={12} md={6}>
            <Card
              elevation={2}
              sx={{ ...cardStyle, borderTop: "4px solid #1976d2" }}
            >
              <CardContent sx={cardContentStyle}>
                <Typography
                  variant="h6"
                  gutterBottom
                  color="primary"
                  sx={{
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      bgcolor: "#1976d2",
                      color: "white",
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 1,
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    1
                  </Box>
                  Select the Blocks You’d Like to Use
                </Typography>
                <Typography variant="body2" paragraph>
                  Preview the Full Page, then select the blocks you’d like for
                  your webpage.
                </Typography>
                <List dense sx={{ flexGrow: 1 }}>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon fontSize="small" color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="About Post-haste Consulting Group(PHCG) Block" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon fontSize="small" color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="PC Process block" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon fontSize="small" color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Partners Benefits block" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon fontSize="small" color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="What is a PC?”" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon fontSize="small" color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Who Should Develop a Charter" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              elevation={2}
              sx={{ ...cardStyle, borderTop: "4px solid #7e57c2" }}
            >
              <CardContent sx={cardContentStyle}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    color: "#7e57c2",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      bgcolor: "#7e57c2",
                      color: "white",
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 1,
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    2
                  </Box>
                  Customize to match your website’s style
                </Typography>
                <Typography variant="body2" paragraph>
                  The customizations below give you the ability to match the
                  content in the blocks to your website’s style.
                </Typography>
                <List dense sx={{ flexGrow: 1 }}>
                  <ListItem>
                    <ListItemIcon>
                      <ColorLensIcon
                        fontSize="small"
                        sx={{ color: "#7e57c2" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Colors"
                      secondary="Change background, text, button, and accent colors"
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <FormatColorTextIcon
                        fontSize="small"
                        sx={{ color: "#7e57c2" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Fonts"
                      secondary="Select different fonts for headings and body text"
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <FormatShapesIcon
                        fontSize="small"
                        sx={{ color: "#7e57c2" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Button Styles"
                      secondary="Customize button text, colors, and corner roundness"
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <InsertPhotoIcon
                        fontSize="small"
                        sx={{ color: "#7e57c2" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Logo"
                      secondary="Upload or change your site's logo and placement"
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <SettingsIcon
                        fontSize="small"
                        sx={{ color: "#7e57c2" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Additional Options"
                      secondary="Each block type has unique customization options"
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              elevation={2}
              sx={{ ...cardStyle, borderTop: "4px solid #26a69a" }}
            >
              <CardContent sx={cardContentStyle}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    color: "#26a69a",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      bgcolor: "#26a69a",
                      color: "white",
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 1,
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    3
                  </Box>
                  Copy Your "Embed Code"
                </Typography>

                <List dense>
                  <ListItem>
                    <ListItemIcon>
                      <CodeIcon sx={{ color: "#26a69a" }} />
                    </ListItemIcon>
                    <ListItemText primary="Find “Embedded Code” at the bottom of the page. It contains everything needed for the blocks to work correctly on your website." />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ContentCopyIcon sx={{ color: "#26a69a" }} />
                    </ListItemIcon>
                    <ListItemText primary='Click the "Copy" button to copy the code to your clipboard' />
                  </ListItem>
                </List>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "flex-end",
                    mt: 2,
                  }}
                >
                  {/* <Typography
                    variant="body2"
                    sx={{
                      fontStyle: "italic",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <InfoIcon sx={{ mr: 1, fontSize: 16, color: "#26a69a" }} />
                    The embed code contains everything needed for the block to
                    work correctly on your website.
                  </Typography> */}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              elevation={2}
              sx={{ ...cardStyle, borderTop: "4px solid #66bb6a" }}
            >
              <CardContent sx={cardContentStyle}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    color: "#66bb6a",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      bgcolor: "#66bb6a",
                      color: "white",
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 1,
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    4
                  </Box>
                  Add to Your Website
                </Typography>

                <List dense sx={{ flexGrow: 1 }}>
                  <ListItem>
                    <ListItemIcon>
                      <WebIcon fontSize="small" sx={{ color: "#66bb6a" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="WordPress"
                      secondary="Add a 'Custom HTML' block and paste the code in it"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <WebAssetIcon
                        fontSize="small"
                        sx={{ color: "#66bb6a" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Webflow"
                      secondary='Add an "Embed element" and paste the code there'
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <InsertDriveFileIcon
                        fontSize="small"
                        sx={{ color: "#66bb6a" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Other Website Builders"
                      secondary="Look for 'HTML', 'Custom Code', or 'Embed' options and paste the code in one of those"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <HtmlIcon fontSize="small" sx={{ color: "#66bb6a" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="HTML Websites"
                      secondary="Paste the code directly into your HTML file where you want the block to appear"
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>

      {/* Additional help */}
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2, bgcolor: "#f8f9fc" }}>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            color: "#1e4164",
            borderBottom: "2px solid #e0e4ec",
            paddingBottom: "8px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <InfoIcon sx={{ mr: 1, color: "#f57c00" }} />
          Need More Help?
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="body1" sx={{ flex: 1 }}>
            If you have any questions about using this tool or implementing the
            blocks on your website, please contact our support team at{" "}
            <Box
              component="span"
              sx={{ color: "#1976d2", fontWeight: "medium" }}
            >
              Support@PartnershipCharter.com
            </Box>
            .
          </Typography>
          <Button
            variant="contained"
            color="primary"
            endIcon={<EmailIcon />}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontWeight: "medium",
              px: 3,
            }}
            onClick={() => {
              navigator.clipboard.writeText("Support@PartnershipCharter.com");
              // In a real implementation, you would show a snackbar or toast notification here
            }}
          >
            Send Email
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AppIntroduction;

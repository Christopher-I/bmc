import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";

const blocks = [
  { key: "introduction", label: "Introduction & Guide" },
  { key: "fullPagePreview", label: "Full Page Preview" },
  { key: "hero", label: "Hero Section" }, // Added Hero section
  { key: "PHCG", label: "About PHCG" },
  { key: "charter", label: "What is a PC?" },
  { key: "charterTypes", label: "Who Should Develop a Charter" },
  { key: "threeSteps", label: "Three Steps to Partnership" },
  { key: "dypTool", label: "The DYP Tool" },
  { key: "partners", label: "Partners Benefits" },
  { key: "pcProcess", label: "PC Process" },
  { key: "dypAdvantages", label: "DYP Advantages" },
  { key: "assistanceLevels", label: "Partners Get Assistance" },
  { key: "bookPromo", label: "Partnership Charter Book" },
  { key: "testimonials", label: "Client Testimonials" },
  { key: "sliversOfAmbiguity", label: "Slivers of Ambiguity" },
  { key: "dypLicensedUser", label: "DYP Licensed User" },
];

const Sidebar = ({ active, onSelect }) => {
  return (
    <Box
      className="sidebar"
      sx={{
        width: 250,
        height: "100vh",
        borderRight: "1px solid #ddd",
        position: "sticky",
        top: 0,
        backgroundColor: "#fafafa",
        display: "flex",
        flexDirection: "column",
      }}
    >
 
      <Box
        sx={{
          overflowY: "auto", // Enable vertical scrolling
          flexGrow: 1, // Take remaining space
          pb: 2, // Add some padding at the bottom
        }}
      >
        <List>
          {blocks.map((block) => (
            <ListItemButton
              key={block.key}
              selected={active === block.key}
              onClick={() => onSelect(block.key)}
              sx={{
                borderLeft: active === block.key ? "4px solid #1976d2" : "none",
                backgroundColor:
                  active === block.key
                    ? "rgba(25, 118, 210, 0.08)"
                    : "transparent",
                fontWeight: active === block.key ? "bold" : "normal",
                "&:hover": {
                  backgroundColor: "rgba(25, 118, 210, 0.04)",
                },
                transition: "all 0.2s ease-in-out",
                pl: 2, // Padding for content within scrolling area
                pr: 2,
              }}
            >
              <ListItemText
                primary={block.label}
                primaryTypographyProps={{
                  fontWeight: active === block.key ? "bold" : "normal",
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
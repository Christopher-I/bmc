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
  { key: "PHCG", label: "About PHCG" },
  { key: "pcProcess", label: "PC Process" },
  { key: "partners", label: "Partners Benefits" },
  { key: "charter", label: "What is a PC?" },
  { key: "charterTypes", label: "Who Should Develop a Charter" },
  { key: "dypAdvantages", label: "DYP Advantages" },
  { key: "sliversOfAmbiguity", label: "Slivers of Ambiguity" },
  { key: "dypTool", label: "The DYP Tool" },
  { key: "dypLicensedUser", label: "DYP Licensed User" },
  { key: "assistanceLevels", label: "Partners Get Assistance" }, // Add new block
  { key: "threeSteps", label: "Three Steps to Partnership" }, // Add new block
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
      <Box sx={{ p: 2 }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          Blocks
        </Typography>

        <Divider sx={{ mb: 2 }} />
      </Box>

      <Box sx={{ 
        overflowY: "auto", // Enable vertical scrolling
        flexGrow: 1, // Take remaining space
        pb: 2 // Add some padding at the bottom
      }}>
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
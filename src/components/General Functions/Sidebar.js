// src/components/General Functions/Sidebar.js

import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";

const sections = [
  { key: "introduction", label: "Introduction & Guide" },
  { key: "bmc", label: "About BMC Section" },
  { key: "pcProcess", label: "PC Process Section" },
  { key: "partners", label: "Partners Benefits Section" },
  { key: "charter", label: "Charter Section" },
  { key: "charterTypes", label: "Who Should Develop a Charter" },
  { key: "dypAdvantages", label: "DYP Advantages" },
];

const Sidebar = ({ active, onSelect }) => {
  return (
    <Box
      className="sidebar"
      sx={{
        width: 250,
        height: "100vh",
        borderRight: "1px solid #ddd",
        p: 2,
        position: "sticky",
        top: 0,
        backgroundColor: "#fafafa",
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontWeight: "bold", color: "primary.main" }}
      >
        Sections
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <List>
        {sections.map((section) => (
          <ListItemButton
            key={section.key}
            selected={active === section.key}
            onClick={() => onSelect(section.key)}
            sx={{
              borderLeft: active === section.key ? "4px solid #1976d2" : "none",
              backgroundColor:
                active === section.key ? "rgba(25, 118, 210, 0.08)" : "transparent",
              fontWeight: active === section.key ? "bold" : "normal",
              "&:hover": {
                backgroundColor: "rgba(25, 118, 210, 0.04)",
              },
              transition: "all 0.2s ease-in-out",
            }}
          >
            <ListItemText
              primary={section.label}
              primaryTypographyProps={{
                fontWeight: active === section.key ? "bold" : "normal",
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;

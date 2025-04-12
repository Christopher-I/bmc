import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const sliversData = [
  "Too little communication",
  "Outright conflict",
  "Underperforming partners",
  "Misperceptions and misunderstandings",
  "Employees start feeling the stress between partners",
  "Partners conclude it’s just not fun anymore!",
];

const SliversOfAmbiguityPreview = ({ config }) => {
  return (
    <Box
      sx={{
        backgroundColor: config.backgroundColor || "#e6ecef",
        color: config.textColor || "#333333",
        fontFamily: config.bodyFont || "sans-serif",
        padding: "2rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "200px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: config.headingFont || "serif",
          fontSize: { xs: "1.5rem", md: "2rem" },
          marginBottom: "2rem",
          color: config.headingColor || "#333333",
          fontWeight: "bold",
          maxWidth: "900px",
          width: "100%",
          textAlign: "center",
          whiteSpace: "normal",
        }}
      >
        Slivers of ambiguity – sooner or later – cause problems
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: "1rem",
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        {sliversData.map((item, idx) => (
          <Paper
            key={idx}
            elevation={1}
            sx={{
              backgroundColor: "white",
              padding: "1rem",
              borderRadius: "8px",
              borderBottom: `4px solid ${config.accentColor || "#d5ad36"}`,
              textAlign: "center",
              fontFamily: config.bodyFont || "sans-serif",
              color: config.textColor || "#333333",
              fontSize: "1rem",
              minHeight: "100px",
              maxHeight: "120px",
              maxWidth: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            {item}
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default SliversOfAmbiguityPreview;

// src/components/AssistanceLevels/AssistanceLevelsPreview.js

import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const AssistanceLevelsPreview = ({ config }) => {
  return (
    <Box
      sx={{
        backgroundColor: config.backgroundColor,
        color: config.textColor,
        fontFamily: config.bodyFont,
        padding: { xs: "2rem 1rem", md: "4rem" },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: config.headingFont,
          fontWeight: "bold",
          mb: 4,
          color: config.headingColor,
          textAlign: "center",
        }}
      >
        Partners get the level of assistance they need
      </Typography>

      <Typography
        variant="h6"
        sx={{
          mb: 6,
          textAlign: "center",
          maxWidth: "1000px",
          margin: "0 auto 3rem",
          fontSize: "14px"
        }}
      >
        Partners can select the level of assistance that's best for them as they
        navigate the Charter process, from limited support, all the way to full,
        comprehensive guidance.
      </Typography>

      <Grid container spacing={6} alignItems="flex-start">
        <Grid item xs={12} md={7}>
          <Box
            component="img"
            src={config.imageSrc}
            alt="Partnership Assistance Levels"
            sx={{
              width: "70%",
              height: "auto", // Change from 'auto' to '100%'
              objectFit: "contain", // Add this
              borderRadius: config.imageRadius || 8,
              marginBottom: { xs: "2rem", md: "0" },
            }}
          />
        </Grid>

        <Grid item xs={12} md={5}>
          <Box>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: config.headingFont,
                  fontWeight: "bold",
                  mb: 2,
                  color: config.headingColor,
                }}
              >
                Guided
              </Typography>
              <Typography variant="body1" paragraph>
                Either one or two "Guides" (advisors who manage the entire
                process from start to finish) keep the partners progressing,
                make sure they don't skip over any sensitive or difficult
                conversations, document their understandings and agreements, and
                write and revise the Charter drafts.
              </Typography>
              <Typography variant="body1">
                The Guides also ensure partners thoroughly understand the
                complexity of their partnership, and the connections among the
                13 critical elements.
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: config.headingFont,
                  fontWeight: "bold",
                  mb: 2,
                  color: config.headingColor,
                }}
              >
                Partially Guided
              </Typography>
              <Typography variant="body1" paragraph>
                Partners with limited financial resources, or a
                "do-it-ourselves" flair can elect to do some or all the work on
                their own. Partners use the same Workbook and templates, but
                must facilitate their own discussions and negotiations, and be
                responsible for drafting their Charter.
              </Typography>
              <Typography variant="body1">
                With a licensed PC advisor in the wings, partners do have the
                option of requesting facilitation with some of their
                negotiations, or converting to a Guided Charter if they get
                bogged down anywhere in the process. DYP allows that to happen
                seamlessly.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AssistanceLevelsPreview;

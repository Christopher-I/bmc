import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Collapse,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const CharterPreview = ({ config }) => {
  // State to track which accordions are open
  const [openAccordions, setOpenAccordions] = useState({
    "conflict-handling": true, // Open by default
  });

  // Toggle accordion state
  const toggleAccordion = (id) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Create style objects for the preview
  const containerStyle = {
    backgroundColor: config.backgroundColor,
    color: config.textColor,
    padding: "2rem",
    borderRadius: "4px",
    fontFamily: config.bodyFont,
    overflow: "hidden",
    maxHeight: "600px",
    overflowY: "auto",
  };

  const headingStyle = {
    fontFamily: config.headingFont,
    marginBottom: "2rem",
    textAlign: "center",
    fontWeight: "normal",
    fontSize: "1.6rem",
  };

  const stepsHeadingStyle = {
    ...headingStyle,
    marginTop: "3rem",
  };

  const accordionStyle = {
    border: "1px solid rgba(255, 255, 255, 0.2)",
    marginBottom: "0.5rem",
    borderRadius: "2px",
    overflow: "hidden",
  };

  const accordionHeaderStyle = {
    padding: "0.75rem 1rem",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: `background-color ${config.transitionSpeed}s ease`,
  };

  const accordionContentStyle = {
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    lineHeight: "1.5",
  };

  const stepCardStyle = {
    backgroundColor: "white",
    color: "#333",
    padding: "1.5rem",
    borderRadius: "4px",
    position: "relative",
    height: "100%",
    boxSizing: "border-box",
  };

  const stepLetterStyle = {
    fontSize: "3.5rem",
    color: config.accentColor,
    fontWeight: "bold",
    marginBottom: "0.5rem",
    lineHeight: "1",
  };

  // Accordion components
  const AccordionItem = ({ id, title, content }) => (
    <Box sx={accordionStyle}>
      <Box
        sx={{
          ...accordionHeaderStyle,
          backgroundColor: openAccordions[id]
            ? "rgba(255, 255, 255, 0.1)"
            : "transparent",
        }}
        onClick={() => toggleAccordion(id)}
      >
        <Typography
          variant="body2"
          sx={{ fontWeight: openAccordions[id] ? "bold" : "normal" }}
        >
          {title}
        </Typography>
        {openAccordions[id] ? (
          <ExpandLessIcon fontSize="small" />
        ) : (
          <ExpandMoreIcon fontSize="small" />
        )}
      </Box>
      <Collapse in={openAccordions[id]} timeout={config.transitionSpeed * 1000}>
        <Box sx={accordionContentStyle}>
          <Typography variant="body2">{content}</Typography>
        </Box>
      </Collapse>
    </Box>
  );

  // Step card component
  const StepCard = ({ letter, title, description }) => (
    <Paper elevation={2} sx={stepCardStyle}>
      <Typography sx={stepLetterStyle}>{letter}</Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: "bold",
          marginBottom: "0.75rem",
          textTransform: "uppercase",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontSize: "0.875rem", lineHeight: "1.5" }}
      >
        {description}
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          right: "1rem",
          bottom: "1rem",
          color: "#ccc",
          fontSize: "1.5rem",
        }}
      >
        →
      </Typography>
    </Paper>
  );

  return (
    <Box sx={containerStyle}>
      {/* Main heading */}
      <Typography sx={headingStyle}>
        The Partnership Charter covers every topic in a Partnership Agreement
        and much, much more
      </Typography>

      {/* Accordions */}
      <Grid container spacing={2}>
        {/* Left column */}
        <Grid item xs={12} md={4}>
          <AccordionItem
            id="vision"
            title="Vision and Direction"
            content="Partners establish a shared vision and direction for their business or project, ensuring alignment on long-term goals and strategic priorities."
          />
          <AccordionItem
            id="values"
            title="Personal Values"
            content="Understanding each partner's core values helps identify alignment and potential conflicts in approaches to business and decision-making."
          />
          <AccordionItem
            id="expectations"
            title="Expectations"
            content="Partners outline what they expect from each other and from the partnership, creating clarity and preventing future misunderstandings."
          />
          <AccordionItem
            id="governance"
            title="Governance"
            content="Establishing decision-making processes, meeting structures, and leadership roles provides a framework for effective partnership management."
          />
        </Grid>

        {/* Middle column */}
        <Grid item xs={12} md={4}>
          <AccordionItem
            id="conflict-handling"
            title="Conflict-Handling Styles"
            content="What entrepreneurs refer to as inevitable conflict is the number one reason many people avoid partnerships. By taking an assessment, exploring each partner's conflict handling style, and developing behavioral commitments to one another about how they'll communicate, they boost their confidence they can talk productively about their differences."
          />
          <AccordionItem
            id="personal-styles"
            title="Personal Styles"
            content="Understanding each partner's work style, communication preferences, and decision-making approach helps create effective collaboration strategies."
          />
          <AccordionItem
            id="ownership"
            title="Ownership"
            content="Clear agreements about ownership percentages, equity distribution, and future changes to ownership structure prevent major disagreements."
          />
          <AccordionItem
            id="scenario-planning"
            title="Scenario Planning"
            content="Partners plan for various scenarios, including success, challenges, and potential partnership changes, creating protocols for handling different situations."
          />
          <AccordionItem
            id="fairness"
            title="Fairness"
            content="Partners establish principles and processes for ensuring fair treatment, compensation, and recognition throughout the partnership."
          />
        </Grid>

        {/* Right column */}
        <Grid item xs={12} md={4}>
          <AccordionItem
            id="contributions"
            title="Contributions and Rewards"
            content="Clearly defining what each partner contributes (time, money, expertise, connections) and how rewards will be distributed creates a foundation for fairness."
          />
          <AccordionItem
            id="roles"
            title="Roles & Authority"
            content="Delineating specific roles, responsibilities, and decision-making authority helps partners operate efficiently without stepping on each other's toes."
          />
          <AccordionItem
            id="money"
            title="Money"
            content="Addressing compensation, profit distribution, expense policies, and financial management ensures alignment on monetary matters."
          />
          <AccordionItem
            id="disagreements"
            title="Managing Disagreements"
            content="Establishing protocols for handling disagreements, including escalation procedures and potential third-party involvement, creates a safety net for the partnership."
          />
        </Grid>
      </Grid>

      {/* Steps heading */}
      <Typography sx={stepsHeadingStyle}>
        The Charter process is comprised of 3 simple steps
      </Typography>

      {/* Steps */}
      <Grid container spacing={3} sx={{ mt: 0.5 }}>
        <Grid item xs={12} md={4}>
          <StepCard
            letter="D"
            title="Discover"
            description="The PC Workbook is like taking a short course in partnerships. It covers every critical topic so partners can individually discover the issues and write their thoughts — the first step in the designing a healthy, resilient partnership."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StepCard
            letter="D"
            title="Discuss"
            description="Going back and forth — sharing and listening — partners reveal and discuss what each person thinks is critical to their success. They build on a foundation of each person's ideas. It's a creative, unique step in the process."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StepCard
            letter="D"
            title="Document"
            description="Each partner independently reviews and comments on each unit draft. The advisor reconciles the feedback and a new draft is written. A 70-100 page Charter memorializes the partners' understandings and agreements."
          />
        </Grid>
      </Grid>
    </Box>
  );
};

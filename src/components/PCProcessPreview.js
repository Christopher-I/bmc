import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";

const PCProcessPreview = ({ config }) => {
  const [openAccordionId, setOpenAccordionId] = useState(null);
  const contentRefs = useRef({});
  const animationDuration = `${config.transitionSpeed}s`;

  const toggleAccordion = (id) => {
    setOpenAccordionId((prev) => (prev === id ? null : id));
  };

  const containerStyle = {
    backgroundColor: config.backgroundColor,
    color: config.textColor,
    padding: "2rem",
    borderRadius: "4px",
    fontFamily: config.bodyFont,
    overflow: "hidden",
    maxHeight: "600px",
    overflowY: "auto",
    textAlign: "center",
  };

  const headingStyle = {
    fontFamily: config.headingFont,
    fontSize: "2.2rem",
    marginBottom: "0.5rem",
    fontWeight: "normal",
  };

  const subheadingStyle = {
    fontSize: "1.1rem",
    marginBottom: "2rem",
    maxWidth: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const accordionStyle = {
    position: "relative",
    marginBottom: "0.75rem",
    backgroundColor: "white",
    color: "#333",
    borderRadius: `${config.accordionRadius || 4}px`,
    overflow: "hidden",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "4px",
      backgroundColor: config.accentColor,
      borderBottomLeftRadius: `${config.accordionRadius || 4}px`,
      borderBottomRightRadius: `${config.accordionRadius || 4}px`,
    },
  };

  const ArrowIcon = ({ isOpen }) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 24,
        height: 24,
      }}
    >
      <Box
        sx={{
          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          transition: `transform ${animationDuration} cubic-bezier(0.4, 0, 0.2, 1)`,
          transformOrigin: "center",
          display: "inline-block",
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline
            points="6 15 12 9 18 15"
            fill="none"
            stroke="#1e4164"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>
    </Box>
  );

  const AccordionItem = ({ id, title, content }) => {
    const contentRef = useRef(null);
    const [height, setHeight] = useState("0px");
    const isOpen = openAccordionId === id;
  
    useEffect(() => {
      const el = contentRef.current;
      if (!el) return;
  
      if (isOpen) {
        // Opening: measure the height and animate to that value.
        const scrollHeight = el.scrollHeight;
        setHeight(`${scrollHeight}px`);
  
        const handleTransitionEnd = () => {
          // Once open, reset height to auto to allow dynamic changes.
          setHeight("auto");
          el.removeEventListener("transitionend", handleTransitionEnd);
        };
  
        el.addEventListener("transitionend", handleTransitionEnd);
      } else {
        // Closing: if height is auto, set it to the current pixel height first.
        if (height === "auto") {
          setHeight(`${el.scrollHeight}px`);
          // Force reflow to ensure the browser registers the new fixed height.
          // eslint-disable-next-line no-unused-expressions
          el.offsetHeight;
        }
        // Animate height to 0 on the next frame.
        requestAnimationFrame(() => {
          setHeight("0px");
        });
      }
    }, [isOpen]);
  
    return (
      <Paper elevation={1} sx={{ ...accordionStyle }}>
        <Box
          sx={{
            padding: "1rem",
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            transition: `background-color ${config.transitionSpeed}s ease`,
            backgroundColor: isOpen ? "rgba(0, 0, 0, 0.03)" : "white",
            borderRadius: `${config.accordionRadius || 4}px`,
          }}
          onClick={() => toggleAccordion(id)}
        >
          <Typography
            sx={{
              margin: 0,
              fontSize: "1rem",
              color: "#1e4164",
              fontWeight: 500,
              textAlign: "left",
            }}
          >
            {title}
          </Typography>
          <ArrowIcon isOpen={isOpen} />
        </Box>
        <Box
          sx={{
            height: height,
            overflow: "hidden",
            transition: `height ${config.transitionSpeed}s ease`,
          }}
        >
          <Box
            ref={contentRef}
            sx={{
              padding: "1rem",
              borderTop: "1px solid rgba(0, 0, 0, 0.1)",
              textAlign: "left",
            }}
          >
            <Typography variant="body2">{content}</Typography>
          </Box>
        </Box>
      </Paper>
    );
  };
  

  return (
    <Box sx={containerStyle}>
      <Typography sx={headingStyle}>
        The PC process leaves nothing to chance
      </Typography>
      <Typography sx={subheadingStyle}>
        Everything partners struggle with can be found in these 13 topics
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <AccordionItem
            id="vision"
            title="Vision & Direction"
            content="Partners establish a shared vision and direction for their business or project, ensuring alignment on long-term goals and strategic priorities."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AccordionItem
            id="conflict"
            title="Conflict Handling Styles"
            content="What entrepreneurs refer to as inevitable conflict is the number one reason many people avoid partnerships. By taking an assessment, exploring each partner's conflict handling style, and developing behavioral commitments to one another about how they'll communicate, they boost their confidence they can talk productively about their differences."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AccordionItem
            id="contributions"
            title="Contributions & Rewards"
            content="Clearly defining what each partner contributes (time, money, expertise, connections) and how rewards will be distributed creates a foundation for fairness."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AccordionItem
            id="values"
            title="Personal Values"
            content="Understanding each partner's core values helps identify alignment and potential conflicts in approaches to business and decision-making."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AccordionItem
            id="styles"
            title="Personal Styles"
            content="Understanding each partner's work style, communication preferences, and decision-making approach helps create effective collaboration strategies."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AccordionItem
            id="roles"
            title="Roles & Authority"
            content="Delineating specific roles, responsibilities, and decision-making authority helps partners operate efficiently without stepping on each other's toes."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AccordionItem
            id="expectations"
            title="Expectations"
            content="Partners outline what they expect from each other and from the partnership, creating clarity and preventing future misunderstandings."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AccordionItem
            id="ownership"
            title="Ownership"
            content="Clear agreements about ownership percentages, equity distribution, and future changes to ownership structure prevent major disagreements."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AccordionItem
            id="money"
            title="Money"
            content="Addressing compensation, profit distribution, expense policies, and financial management ensures alignment on monetary matters."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AccordionItem
            id="governance"
            title="Governance"
            content="Establishing decision-making processes, meeting structures, and leadership roles provides a framework for effective partnership management."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AccordionItem
            id="scenario"
            title="Scenario Planning"
            content="Partners plan for various scenarios, including success, challenges, and potential partnership changes, creating protocols for handling different situations."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AccordionItem
            id="disagreements"
            title="Managing Disagreements"
            content="Establishing protocols for handling disagreements, including escalation procedures and potential third-party involvement, creates a safety net for the partnership."
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 3 }}>
        <Box sx={{ width: { xs: "100%", md: "33%" } }}>
          <AccordionItem
            id="fairness"
            title="Fairness"
            content="Partners establish principles and processes for ensuring fair treatment, compensation, and recognition throughout the partnership."
          />
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: config.buttonColor,
          borderRadius: `${config.buttonRadius}px`,
          padding: "0.75rem 2rem",
          textTransform: "none",
          "&:hover": {
            backgroundColor: `${config.buttonColor}dd`,
          },
        }}
      >
        {config.buttonText}
      </Button>
    </Box>
  );
};

export default PCProcessPreview;

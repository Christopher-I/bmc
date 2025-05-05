// src/components/BookPromo/BookPromoPreview.js

import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const BookPromoPreview = ({ config }) => {
  const retailers = [
    { name: "Barnes & Noble", logo: config.barnesNobleLogo },
    { name: "Google Play", logo: config.googlePlayLogo },
    { name: "Amazon", logo: config.amazonLogo },
    { name: "IndieBound", logo: config.indieBoundLogo },
    { name: "Audible", logo: config.audibleLogo },
  ];

  return (
    <Box
      sx={{
        backgroundColor: config.backgroundColor,
        borderRadius: config.borderRadius,
        padding: { xs: "2rem 1rem", md: "4rem" },
        color: config.textColor,
      }}
    >
      <Grid container spacing={4} alignItems="flex-start">
        <Grid item xs={12} md={7}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: config.headingFont,
              fontWeight: "bold",
              mb: 3,
              fontSize: "2.5rem",
              lineHeight: 1.2,
              color: config.textColor,
            }}
          >
            Hands down the best book ever written about business partnerships
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontSize: "1rem",
              lineHeight: 1.6,
            }}
          >
            A typical Partnership Charter book review on Amazon or Audible reads
            something like this:
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 6,
              fontSize: "1rem",
              lineHeight: 1.6,
              fontStyle: "italic",
            }}
          >
            "If I'd only found this book 5 years ago when I got into a
            partnership with my best friend [or husband, officemate, sister]!"
          </Typography>
        </Grid>

        <Grid item xs={12} md={5}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              position: "relative",
          
            }}
          >
            <Box
              component="img"
              src={config.bookImageSrc}
              alt="Partnership Charter Book"
              sx={{
                width: "100%",
                maxWidth: "300px",
                height: "auto",
                objectFit: "contain",
                position: "absolute",
                right: 0,
                top: 0,
                transform: "none",
              }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Retailers section moved outside of grid to take full width */}
      <Box sx={{ width: "100%", mt: 4 }}>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            textAlign: "center",
            fontWeight: "normal",
            fontSize: "1rem",
            letterSpacing: "0.5px",
          }}
        >
          Order the Partnership Charter book from these retailers
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 4,
            flexWrap: "wrap",
            gap: { xs: 3, md: 4 },
          }}
        >
          {retailers.map((retailer) => (
            <Box
              key={retailer.name}
              sx={{
                textAlign: "center",
              }}
            >
              <Box
                component="img"
                src={retailer.logo}
                alt={retailer.name}
                sx={{
                  height: "40px",
                  width: "auto",
                  maxWidth: "120px",
                  objectFit: "contain",
                  filter: config.invertLogos ? "invert(1)" : "none",
                }}
              />
            </Box>
          ))}
        </Box>

        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontSize: "0.875rem",
            mt: 4,
          }}
        >
          For discounts on 25 or more books,{" "}
          <Typography
            component="a"
            href={config.contactLink}
            sx={{
              color: config.textColor,
              textDecoration: "underline",
              fontWeight: "normal",
            }}
          >
            contact us
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default BookPromoPreview;
// theme.js atau theme.jsx
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  // Atur properti tema sesuai kebutuhan Anda
  fonts: {
    body: "Inter, sans-serif",
  },
  colors: {
    bgPrimary: {
      1: "#ffffff",
      2: "#E0E0E2",
    },
    bgButton: {
      1: "#57A2CC",
      2: "#04385E",
    },
    bgButtonHover: {
      1: "#427a9b",
      2: "#1c6091",
    },
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  breakpoints: {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
});

export default theme;

import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  colors: {
    primary: {
      main: "#4CAF50",
      light: "#4cd950",
      dark: "#4c8d50"
    },
    secondary: {
      main: "#9c27b0",
      light:"#bb27cf",
      dark: "#742788"
    },
    text:"#333333 ",
    background_main: "#d6d6d6",
    background_light: "#F5F5F5",
    warning: "#ffaa00",
    error: "#e50e0e",
    link: "#017fed",
  },

  fonts: {
    body: "Inter, system-ui, sans-serif",
    heading: "Inter, Georgia, serif",
    mono: "Inter, Menlo, monospace"
  },
  breakpoints: {
    xs: "50px",
    sm: "375px",
    md: "768px",
    lg: "1024px",
    xl: "1440px",
    "2xl": "2560px",
  },
});

export default theme;

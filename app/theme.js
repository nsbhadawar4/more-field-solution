import { green, orange, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const baselightTheme = createTheme({
  direction: "ltr",

  status: {
    danger: "orange[500]",
  },

  palette: {
    primary: {
      main: "#D8D8D8",
      light: "#D8D8D8",
      dark: "#D8D8D8",
    },

    secondary: {
      main: "#49BEFF",
      light: "#E8F7FF",
      dark: "#23afdb",
    },
  },

  // CUSTOM HEADING VARIENT TYPOGRAPHY
  typography: {
    h1: {
      fontSize: "45px",
      fontWeight: "700",
      color: "#000",
    },
    h2: {
      fontSize: "30px",
      textTransform: "capitalize",
      fontWeight: "700",
      color: "#041C39",
    },
    h3: {
      fontSize: "20px",
      textTransform: "capitalize",
      fontWeight: "700",
      color: "#041C39",
    },
    h4: {
      fontSize: "26px",
      textTransform: "capitalize",
      fontWeight: "700",
      color: "#0F172A",
    },
    h5: {
      fontSize: "18px",
      textTransform: "capitalize",
      color: "#489D56",
      fontWeight: "500",
    },
    h6: {
      fontSize: "16px",
      textTransform: "capitalize",
      fontWeight: "400",
    },
  },
  // CUSTOM HEADING VARIENT TYPOGRAPHY

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiPaper-elevation9, .MuiPopover-root .MuiPaper-elevation": {
          boxShadow:
            "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px !important",
        },
      },
    },
  },
});

export { baselightTheme };

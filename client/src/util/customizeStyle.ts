import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    magic: Palette["primary"];
  }
  interface PaletteOptions {
    magic: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2DAE95",
    },
    secondary: {
      main: "#476779",
    },
    error: {
      main: "#CF001A",
    },
    warning: {
      main: "#EFA651",
    },
    magic: {
      main: "#fff",
    },
    background: {
      default: "#f0f0f0"
    }
  },
  typography: {
    fontSize: 16,
    fontFamily: "sans-serif",

    h1: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.1rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    h5: {
      fontSize: "0.8rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "0.6rem",
      fontWeight: 500,
    },
    button: {
      textTransform: "capitalize",
    },
  },
  
});

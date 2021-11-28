import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main:"#4csb34"
        },
        secondary: {
          main: '#4ceb34',
        },
      },
      typography: {
        fontSize: 16,
        h1: {
          fontSize: '2rem',
          fontWeight: 500,
        },
        h2: {
          fontSize: '1.5rem',
          fontWeight: 500,
        },
        h3: {
          fontSize: '1.1rem',
          fontWeight: 500,
        },
        h4: {
          fontSize: '1rem',
          fontWeight: 500,
        },
        h5: {
          fontSize: '0.8rem',
          fontWeight: 500,
        },
        h6: {
          fontSize: '0.6rem',
          fontWeight: 500,
        },
        button: {
          textTransform: 'capitalize',
        },
      },
  });
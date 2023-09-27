import { createTheme } from "@mui/material";

const Breakpoint = createTheme({
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1270,
          xl: 1800,
        },
      },});

export default Breakpoint;
import { createTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createTheme({
  shape: { borderRadius: 0 },
  palette: {
    primary: {
      main: "#1B242F",
    },
    secondary: {
      main: "#e31b6d",
    },
    info: {
      main: "#04C2C9",
    },
  },
  typography: {
    fontFamily: `'Raleway', sans-serif`,
  },
});

export default theme;

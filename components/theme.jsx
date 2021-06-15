import { createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#484848",
      main: "#212121",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#69e2ff",
      main: "#00b0ff",
      dark: "#0081cb",
      contrastText: "#000000",
    },
    type: "dark",
    background: {
      default: "#000000",
    },
    text: {
      secondary: "#777",
    },
  },
  typography: {
    fontFamily: ['"Roboto Mono"', `monospace`].join(","),
    button: {
      textTransform: "none",
    },
  },
  props: {
    MuiLink: {
      underline: "none",
    },
    MuiUseMediaQuery: {},
  },
})

export default theme

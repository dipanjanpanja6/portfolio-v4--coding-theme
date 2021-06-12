import { makeStyles } from "@material-ui/core"

export const useGlobalStyle = makeStyles(theme => ({
  container: {
    padding: "calc(50vh - 3.5rem) 0 0",
    margin: "0 0 0 25vw",
    minHeight: "100vh",
    perspective: 900,
    perspectiveOrigin: "50% 50vh",
    [theme.breakpoints.down("sm")]: {
      margin: `0 4rem 0 calc(4rem + 1px)`,
    },
    [theme.breakpoints.down("xs")]: {
      margin: `0 2rem 0 calc(2rem + 1px)`,
    },
  },
  itemContainer: {
    padding: "0 1rem 0 25vw",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "flex-start",
    justifyContent: "center",
    height: `100vh`,
    perspective: 900,
    perspectiveOrigin: "50% 50vh",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "4rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 1rem 0 2rem",
    },
  },

  header: {
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      ...theme.typography.h4,
      fontWeight: "bold",
    },
    wordSpacing: "-.1em",
    letterSpacing: "-.05em",
    paddingBottom: "1rem",
    wordBreak: "break-word",
    "& >span": {
      color: theme.palette.secondary.main,
      fontWeight: 300,
      letterSpacing: "-2px",
    },
  },
  gap: {
    height: "25vh",
  },
}))

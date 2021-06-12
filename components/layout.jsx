import React from "react"
import { CssBaseline, makeStyles } from "@material-ui/core"
import { useRouter } from "next/router"
import Line from "./line"

function Layout({ children }) {
  const sty = styles()
  const router = useRouter()
  return (
    <>
      <CssBaseline />
      <Line />
      <main className={sty.content}>{children}</main>
    </>
  )
}

const styles = makeStyles(theme => ({
  root: {
    position: "relative",
    paddingBottom: "20vh",

    "&::after": {
      [theme.breakpoints.down("sm")]: {
        left: "1rem",
      },
      content: '""',
      display: "block",
      position: "absolute",
      top: "50vh",
      bottom: "50vh",
      left: "calc(25vw - 2rem)",
      zIndex: 1,
      width: 1,
      opacity: ".3",
      background: `${theme.palette.secondary.light} linear-gradient(180deg,${theme.palette.secondary.light},${theme.palette.secondary.light} 20vh)`,
    },
  },
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
      paddingTop: "65vh",
    },
  },
}))

const CommonLayout = ({ children }) => {
  const classes = styles()
  return (
    <div className={classes.root}>
      {/* <div className={classes.container}> */}
      {children}
      {/* </div> */}
    </div>
  )
}
export const getLayout = page => (
  <Layout>
    <CommonLayout>{page}</CommonLayout>
  </Layout>
)

export default Layout

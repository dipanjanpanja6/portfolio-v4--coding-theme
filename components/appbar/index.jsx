import { AppBar, Dialog, DialogContent, Grid, IconButton, makeStyles, Slide, Toolbar, Typography } from "@material-ui/core"
import { Close, GitHub, LinkedIn, MoreVert } from "@material-ui/icons"
import React, { useState, forwardRef } from "react"
import ActiveLink from "./activeLink"
import Link from "../link"

const TransitionLeft = forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />
})
function Appbar() {
  const classes = useStyles()
  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)
  return (
    <>
      <AppBar className={classes.root} color="transparent">
        <Toolbar>
          <div className={classes.bg} />

          <Grid container justify="space-between" alignItems="center" className={classes.appbar}>
            <ActiveLink header href="/"></ActiveLink>

            <Grid className={classes.nav} component="nav">
              <ActiveLink href="/">.init()</ActiveLink>
              <ActiveLink href="/work">.work()</ActiveLink>
              <ActiveLink href="/about">.about()</ActiveLink>
              <ActiveLink href="/contact">.contact()</ActiveLink>

              <IconButton component={Link} target="_blank" href="https://linkedin.com/in/dipanjanpanja6">
                <LinkedIn />
              </IconButton>

              <IconButton component={Link} target="_blank" href="https://github.com/dipanjanpanja6">
                <GitHub />
              </IconButton>
            </Grid>
            <Grid className={classes.mobileNav}>
              <IconButton onClick={handleNav}>
                <MoreVert />
              </IconButton>
              <Dialog
                open={nav}
                onClose={handleNav}
                maxWidth="sm"
                scroll="body"
                fullWidth
                TransitionComponent={TransitionLeft}
                classes={{ scrollBody: classes.dialogScrollBody, paper: classes.dialogPaper }}>
                <IconButton className={classes.close} onClick={handleNav}>
                  <Close />
                </IconButton>
                <DialogContent className={classes.mobileNavContainer} onClick={handleNav}>
                  <ActiveLink mobile href="/">
                    .init()
                  </ActiveLink>
                  <ActiveLink mobile href="/work">
                    .work()
                  </ActiveLink>
                  <ActiveLink mobile href="/about">
                    .about()
                  </ActiveLink>
                  <ActiveLink mobile href="/contact">
                    .contact()
                  </ActiveLink>
                  <div>
                    <IconButton component={Link} target="_blank" href="https://linkedin.com/in/dipanjanpanja6">
                      <LinkedIn />
                    </IconButton>

                    <IconButton component={Link} target="_blank" href="https://github.com/dipanjanpanja6">
                      <GitHub />
                    </IconButton>
                  </div>
                </DialogContent>
              </Dialog>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Appbar

const useStyles = makeStyles(theme => ({
  root: {
    opacity: 0.9683,
  },
  appbar: {
    zIndex: theme.zIndex.appBar,
  },
  flex: {
    flex: 1,
  },
  nav: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  mobileNav: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mobileNavContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-end",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  close: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  dialogScrollBody: {
    textAlign: "end",
  },

  dialogPaper: {
    margin: 0,
    height: "100% !important",
    width: "100% !important",
    minWidth: 500,
    [theme.breakpoints.down(633.95)]: {
      maxWidth: "100% !important",
    },
    [theme.breakpoints.down("xs")]: {
      // width: "100vw !important",
      minWidth: "unset",
    },
  },
  bg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "8rem",
    background: `linear-gradient(180deg,#000 3rem,rgba(0,0,0,0))`,
    opacity: 0.9683,
  },
}))

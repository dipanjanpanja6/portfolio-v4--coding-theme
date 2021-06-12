import { makeStyles } from "@material-ui/core"
import React from "react"
import clsx from "clsx"

function Line() {
  const classes = useStyle()
  return (
    <div>
      <div className={clsx(classes.spine, classes.position)} style={{ visibility: "inherit", opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}></div>
      <div className={clsx(classes.target, classes.position)}>
        <div className={classes.circle} style={{ visibility: "inherit", opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)", backgroundColor: "#00b0ff" }}></div>
        <div className="pulse" style={{ visibility: "hidden", opacity: 0, transform: "matrix(8, 0, 0, 8, 0, 0)" }}></div>
      </div>
    </div>
  )
}

export default Line
const useStyle = makeStyles(theme => ({
  spine: {
    top: "50vh",
    bottom: 0,
    left: "calc(25vw - 2rem)",
    [theme.breakpoints.down("sm")]: {
      left: "1rem",
    },
    width: 1,
    background: theme.palette.secondary.light + " linear-gradient(0deg,#000 1rem,rgba(0,0,0,0) 20vh)",
  },
  position: {
    position: "fixed",
    zIndex: 2,
  },
  target: {
    top: `calc(50vh - 8px)`,
    left: `calc(25vw - 2rem - 4px)`,
    width: 9,
    height: 9,
    [theme.breakpoints.down("sm")]: {
      left: "calc(1rem - 4px)",
    },
  },
  circle: {
    position: `absolute`,
    width: 9,
    height: 9,
    transformOrigin: "center",
    borderRadius: "3rem",
    background: "transparent",
    border: `1px solid` + theme.palette.secondary.light,
  },
}))

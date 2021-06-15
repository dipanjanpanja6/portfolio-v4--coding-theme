import React from "react"
import { makeStyles, Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core"
import { motion } from "framer-motion"
import { useGlobalStyle } from "../../styles/global"
import { useInView } from "react-intersection-observer"

function Cv() {
  const globalClasses = useGlobalStyle()
  const classes = useStyles()
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down("sm"))
  const [ref, isVisible] = useInView({ threshold: 1 })
  const variants = {
    visible: {
      opacity: 1,
      scaleY: 1,
      y: 0,
    },
    hidden: {
      scaleY: 0,
      opacity: 0,
      y: -100,
    },
  }
  const variants1 = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -30,
    },
  }
  return (
    <>
      <Typography
        variant="h2"
        component={motion.h1}
        className={globalClasses.header}
        gutterBottom
        ref={ref}
        variants={variants}
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 1, ease: "easeOut" }}>
        {mobile ? (
          <>
            my.
            <br />
            store (
          </>
        ) : (
          "my.story("
        )}
        <span>'/.*$/g'</span>)
      </Typography>
      {/* <motion.div ref={ref} variants={variants1} animate={isVisible ? "visible" : "hidden"} transition={{ duration: 0.5, ease: "easeOut" }}>
        <Typography color="textSecondary" variant="h6" style={{ paddingBottom: "1rem" }} gutterBottom>
          {"// <A life+work showcase/>"}
        </Typography>
      </motion.div> */}
      <div className={classes.gap} />
      <Grid>
        <motion.div variants={variants1} animate={isVisible & "visible"} transition={{ duration: 0.5, ease: "easeOut" }}>
          <Typography color="textSecondary" variant="h6" component="p" style={{ paddingBottom: "1rem", maxWidth: "500px" }} gutterBottom>
            Hello!
            <br />
            <br />
            I’m Dipanjan and I’m a Web Application Developer and Software Developer, currently living in Kolkata, IN ⚜️.
            <br />
            <br /> I have a Bachelor of Technology in Computer Science & Engineering from Government College of Engineering And Ceramic Technology, and my primary focus and inspiration is
            Web Development.
            <br />
            <br /> I try to reach this goal each time, making my work as accessible, pleasant and inclusive as possible, learning from my past experiences to build better things. ✊
            {/* <br /> Outside of my job, I spend my energy organizing design meetings, writing things or simply traveling around to discover Canada 🍁 and the world 🌎. */}
            <br />
            <br /> I am both driven and self-motivated, and I am constantly experimenting with new technologies and techniques.
          </Typography>
        </motion.div>
      </Grid>
    </>
  )
}

export default Cv
const useStyles = makeStyles(theme => ({
  gap: {
    height: "15vh",
  },
}))

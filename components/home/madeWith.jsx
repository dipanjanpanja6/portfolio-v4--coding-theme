import { Typography, Grid, makeStyles } from "@material-ui/core"
import React from "react"
import clsx from "clsx"
import { useGlobalStyle } from "../../styles/global"
import Link from "../link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

function MadeWith() {
  const classes = useStyles()
  const globalClasses = useGlobalStyle()
  const [ref, isVisible] = useInView({ threshold: 0.7 })
  const variants = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: 30,
    },
  }
  return (
    <>
      <Typography color="textSecondary" variant="h6" component="p" style={{ paddingBottom: "1rem" }}>
        // Made with
      </Typography>
      <Grid className={classes.grid}>
        <Grid className={clsx(classes.list, classes.columns)}>
          <ul>
            <li>{`</>`}</li>
            <li>
              <br />
            </li>

            <li>Next.js</li>
            <li>@material-ui</li>
            <li>framer-motion</li>
          </ul>

          <ul>
            <li>{`~`}</li>
            <li>
              <br />
            </li>

            <li>72 files </li>
            <li>~1MB</li>
            <li>+100h of thinking</li>
            <li>+70 hours of code</li>
            <li>10+ cups of coffee</li>
          </ul>
        </Grid>
      </Grid>
      <div className={classes.gap} />
      <Typography variant="h6" component="p" style={{ paddingBottom: "1rem" }}>
        Thanks for checking my website!
      </Typography>
      <motion.div ref={ref} variants={variants} animate={isVisible ? "visible" : "hidden"} transition={{ duration: 0.5, ease: "easeOut" }}>
        <Typography color="textSecondary" variant="h6" component="p" style={{ paddingBottom: "1rem" }} gutterBottom>
          // It's a work in progress so check back often!
        </Typography>
      </motion.div>
      <Typography variant="h2" component="h1" gutterBottom className={globalClasses.header}>
        Check out my
        <br />
        <motion.span layoutId="selected_work" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          <Link href="/work">selected works</Link>
        </motion.span>
        <br />
        for more details.
      </Typography>
      <div className={classes.gap} />
      <section style={{ width: "100%" }}>
        <Typography variant="h1" component="p" className={classes.still_here}>
          STILL HERE?
        </Typography>
      </section>
      <div className={classes.gap} />

      <Typography variant="h2" component="h1" data-aos="flip-up" className={classes.header}>
        Always keen for a good prop so feel free to say{" "}
        <span>
          <Link href="/contact">hey! 😁</Link>
        </span>
      </Typography>
      <div className={classes.gap} />
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>EMAIL📧</Typography>
          <Typography component={Link} href="mailto:hello@dipanjanpanja.in" className={classes.contact}>
            hello@dipanjanpanja.in
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>MOBILE</Typography>
          <Typography component={Link} href="tel:+917908010928" className={classes.contact}>
            +917908010928
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default MadeWith

const useStyles = makeStyles(theme => ({
  grid: {
    width: "100%",
    padding: "3rem 2rem 0 0",
    [theme.breakpoints.down("md")]: {
      padding: "3rem 1rem 0 0",
      margin: 0,
    },
  },
  list: {
    display: "grid",
    color: theme.palette.secondary.main,
    gridGap: "2rem",
    margin: 0,
    padding: 0,
    gridRowGap: "1rem",
    gridTemplate: "1fr/repeat(3,1fr)",

    [theme.breakpoints.down("xs")]: {
      gridTemplate: `1fr/1fr`,
      gridGap: `1rem`,
    },
  },
  columns: {
    marginBottom: "2rem",
  },
  header: {
    fontWeight: "bold",
    marginRight: "10vw",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0",
      ...theme.typography.h4,
      fontWeight: "bold",
    },
    wordSpacing: "-.1em",
    letterSpacing: "-.05em",
    paddingBottom: "1rem",
    wordBreak: "break-word",
    "& >span": {
      color: "#f00",
      fontWeight: 300,
      transition: ".8s",
      letterSpacing: "-2px",
      //   "&:hover": {
      //     color: theme.palette.secondary.dark,
      //   },
    },
  },
  contact: {
    color: "#00FFB2",
  },
  gap: {
    height: "15vh",
  },
  still_here: {
    fontSize: "20vw",
    position: "relative",
    fontFamily: "'Montserrat'",
    letterSpacing: 4,
    overflow: "hidden",
    background: "linear-gradient(90deg, #65d8f4, #ffeb00, #b400ff)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "80%",
    animation: "animate 3s cubic-bezier(0.4, 0, 1, 1) infinite",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "rgb(255 255 255 / 7%)",
  },
}))

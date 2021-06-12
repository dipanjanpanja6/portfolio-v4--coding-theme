import { Button, Grid, IconButton, makeStyles, Typography } from "@material-ui/core"
import { AssignmentReturned, GitHub, LinkedIn } from "@material-ui/icons"
import React from "react"
import Link from "../components/link"
import clsx from "clsx"

export default function About() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid className={classes.container}>
        <Typography variant="h2" component="h1" style={{ fontWeight: "bold" }}>
          about()
        </Typography>
        <Grid item className={classes.item}>
          <div>
            <IconButton>
              <LinkedIn />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <GitHub />
            </IconButton>
          </div>
          <div>
            Download my
            <Button component={Link} href="/" className={classes.button} variant="contained" color="secondary" endIcon={<AssignmentReturned />}>
              Resume
            </Button>
          </div>
        </Grid>
        <Typography color="secondary" style={{ paddingBottom: 12 }}>
          I am a fullstack developer. From India,
          <br />
          based in Kolkata.
        </Typography>
        <Typography color="textSecondary">// +2 years of experience</Typography>
        <Grid className={classes.grid}>
          <Typography variant="h6" className={classes.subtitle}>
            Main skills
          </Typography>
          <Grid className={classes.columns}>
            <ul className={classes.list}>
              <li>
                Backend development,
                <br />
                Frontend development,
                <br /> UX/UI design
              </li>
              <li>
                JavaScript, CSS, HTML
                <br /> React, React Native
              </li>

              <li>
                E-commerce,
                <br /> WordPress
              </li>
              <li>
                Strategic thinking,
                <br /> Quick lerner
              </li>
              <li>
                Photoshop,
                <br /> Illustrator
              </li>
            </ul>
          </Grid>

          <Typography variant="h6" className={classes.subtitle}>
            Tools/years
          </Typography>
          <Grid className={clsx(classes.list, classes.columns)}>
            <ul>
              <li>JavaScript/+2</li>
              <li>Typescript/~1</li>
              <li> CSS/+2</li>
              <li> HTML/+2 </li>
            </ul>

            <ul>
              <li>Next.js/+1</li>
              <li>React/+2</li>
              <li>React Native/+2</li>
              <li>Node.js/+2</li>
              <li>Flutter/~1</li>
            </ul>
            <ul>
              <li>GraphQL/~1</li>
              <li>jQuery/+1</li>
              <li>WebScoket/~2</li>
            </ul>
            <ul>
              <li>WordPress/~1</li>
            </ul>
          </Grid>
          <Typography variant="h6" className={classes.subtitle}>
            Experience
          </Typography>
          <Grid className={clsx(classes.list, classes.columns, classes.exp)}>
            <ul>
              <li>Associate Member Of Technical Staff</li>
              <li> @ GEOGO Techsolutions</li>
              <li> 2021 - now </li>
            </ul>

            <ul>
              <li>Software Engineer</li>
              <li>@ Freelancer</li>
              <li> 2021 </li>
            </ul>
            <ul>
              <li>Head Of the Technology</li>
              <li>@ RoomLelo</li>
              <li>2020 - 2021</li>
            </ul>
            <ul>
              <li>Full Stack Engineer</li>
              <li>QrioctyBox</li>
              <li> 2020</li>
            </ul>
          </Grid>
          <Typography variant="h6" className={classes.subtitle}>
            Languages
          </Typography>
          <Grid className={clsx(classes.list, classes.columns, classes.lang)}>
            <ul>
              <li>// fluent</li>
              <li>
                <span>hi</span> Hindi
              </li>
              <li>
                <span>bn</span> Bengali
              </li>
            </ul>
            <ul>
              <li>// intermediate</li>
              <li>
                <span>en-IN</span> English
              </li>
            </ul>
            <ul>
              <li>// basic</li>
            </ul>
          </Grid>
          <Typography variant="h6" className={classes.subtitle}>
            Also busy with
          </Typography>
          <Grid className={clsx(classes.list, classes.columns)}>
            <ul>
              <li>DMX Protocol</li>
            </ul>
            <ul>
              <li>Penetration testing</li>
            </ul>
            <ul>
              <li>Video games</li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
const useStyles = makeStyles(theme => ({
  "@global": {
    li: {
      color: theme.palette.text.secondary,
    },
  },
  root: {
    position: "relative",
    paddingBottom: "20vh",
    "&::before": {
      content: '""',
      display: "block",
      position: "fixed",
      top: 0,
      left: 0,
      width: "40%",
      height: "100%",
      backgroundImage: `linear-gradient(270deg,#000,rgba(14,18,18,0) 80%),linear-gradient(180deg,#000,rgba(14,18,18,0) 60%),url(/images/me.jpg)`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50%",
      backgroundSize: "cover",
      [theme.breakpoints.down("sm")]: {
        position: "absolute",
        width: "100%",
        height: "60vh",
        backgroundImage: `linear-gradient(270deg,#000,rgba(14,18,18,0) 80%),linear-gradient(0deg,#000,rgba(14,18,18,0) 60%),url(/images/me.jpg)`,
      },
      [theme.breakpoints.down("xs")]: {
        height: "80vh",
        backgroundImage: `linear-gradient(270deg,#000,rgba(14,18,18,0) 50%),linear-gradient(0deg,#000,rgba(14,18,18,0) 60%),url(/images/me.jpg)`,
      },
    },
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
  item: {
    display: "inline-flex",
    flexFlow: "row wrap",
    margin: "2rem 0",
    "& >div": {
      display: "inline-flex",
      alignItems: "center",
      paddingRight: "1rem",
    },
  },
  button: {
    borderRadius: "3rem",
    backgroundColor: "#FFD600",
    margin: "0 1rem 0",
  },
  grid: {
    padding: "3rem 2rem 0 0",
    [theme.breakpoints.down("md")]: {
      padding: "3rem 1rem 0 0",
      margin: 0,
    },
  },
  list: {
    display: "grid",
    gridTemplate: "1fr/repeat(4,1fr)",
    gridGap: "2rem",
    margin: 0,
    padding: 0,
    gridRowGap: "1rem",
    [theme.breakpoints.down("sm")]: {
      gridTemplate: "1fr/repeat(3,1fr)",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplate: `1fr/1fr`,
      gridGap: `1rem`,
    },
  },
  columns: {
    marginBottom: "2rem",
  },
  subtitle: {
    fontWeight: "bold",
    paddingBottom: "1rem",
  },
  exp: {
    "& > ul > :first-child": {
      color: theme.palette.secondary.main,
    },
  },
  lang: {
    "& > ul > li :first-child": {
      color: theme.palette.secondary.main,
    },
  },
}))

import { Divider, Grid, Typography, makeStyles } from "@material-ui/core"
import React from "react"
import Link from "../link"

function WorkCard({ name, link, ...props }) {
  const classes = useStyles()

  return (
    <>
      <Grid container alignItems="center" justify="flex-end" spacing={2} component="article" className={classes.root}>
        <Grid item sm={12} md={6}>
          <Typography component={Link} href={link} target="_blank" rel="noreferrer" variant="h6" component="h2" gutterBottom className={classes.title}>
            {name}
          </Typography>

          <Typography color="textSecondary" gutterBottom data-aos="fade-left">
            {props.desc}
          </Typography>
        </Grid>

        <Grid item sm={12} md={6}>
          <Typography align="center" variant="h1" data-aos="zoom-in-pu==up" className={classes.year}>
            {props.year}
          </Typography>
        </Grid>
      </Grid>
      <Divider className={classes.hr} />
    </>
  )
}

export default WorkCard
const useStyles = makeStyles(theme => ({
  year: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "end",
    },
  },
  gap: {
    height: "10vh",
  },
  hr: { width: "80%", margin: "2rem 0" },
  title: {
    textTransform: "capitalize",
    "&:hover": {
      color: theme.palette.secondary.light,
    },
  },
}))

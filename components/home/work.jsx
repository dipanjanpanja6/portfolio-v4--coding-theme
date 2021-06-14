import React from "react"
import { makeStyles, Typography } from "@material-ui/core"
import { motion } from "framer-motion"
import { useGlobalStyle } from "../../styles/global"
import WorkCard from "../work/card"
import data from "../../lib/data.json"

function Cv() {
  const globalClasses = useGlobalStyle()
  const classes = useStyles()

  return (
    <>
      <Typography variant="h2" className={globalClasses.header} gutterBottom data-aos="flip-up">
        work(
        <span>'/.*$/g'</span>)
      </Typography>
      <Typography color="textSecondary" variant="h6" style={{ paddingBottom: "1rem" }} gutterBottom data-aos="fade-left">
        {"// <Some special projects showcase/>"}
      </Typography>
      <div className={classes.gap} />
      {data.work
        .sort((x, y) => y.year - x.year)
        .map((data, i) => (
          <WorkCard key={i} {...data} />
        ))}
    </>
  )
}

export default Cv
const useStyles = makeStyles(theme => ({
  gap: {
    height: "10vh",
  },
  hr: { width: "80%", margin: "1rem 0" },
}))

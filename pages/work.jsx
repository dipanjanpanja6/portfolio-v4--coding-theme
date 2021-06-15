import React from "react"
import { getLayout } from "../components/layout"
import { makeStyles, Typography } from "@material-ui/core"
import { useGlobalStyle } from "../styles/global"
import { motion } from "framer-motion"
import WorkCard from "../components/work/card"
import data from "../lib/data.json"
import Seo from "../components/seo"

function Work() {
  const classes = useStyles()
  const globalClasses = useGlobalStyle()

  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

  return (
    <>
      <Seo title=".work()" />
      <section>
        <div className={globalClasses.container}>
          <Typography variant="h2" className={globalClasses.header} component={motion.h1} layoutId="selected_work" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            work(
            <motion.span initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
              'selected'
            </motion.span>
            )
          </Typography>
          <Typography color="textSecondary" style={{ paddingBottom: "1rem" }}>
            // Some special projects explained in details.
          </Typography>
          <div className={globalClasses.gap} />
          {data.work
            .sort((x, y) => y.year - x.year)
            .map((data, i) => (
              <WorkCard key={i} {...data} />
            ))}
        </div>
      </section>
    </>
  )
}

export default Work

Work.getLayout = getLayout

const useStyles = makeStyles(theme => ({}))

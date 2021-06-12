import React from "react"
import { getLayout } from "../components/layout"
import { makeStyles, Typography } from "@material-ui/core"
import { useGlobalStyle } from "../styles/global"

function Work() {
  const classes = useStyles()
  const globalClasses = useGlobalStyle()

  return (
    <>
      <section>
        <div className={globalClasses.container}>
          <Typography variant="h2" component="h1" className={globalClasses.header}>
            work(
            <span>'selected'</span>)
          </Typography>
          <Typography color="textSecondary" style={{ paddingBottom: "1rem" }}>
            // Some special projects explained in details.
          </Typography>
        </div>
      </section>
      <div className={globalClasses.gap} />
    </>
  )
}

export default Work

Work.getLayout = getLayout

const useStyles = makeStyles(theme => ({}))

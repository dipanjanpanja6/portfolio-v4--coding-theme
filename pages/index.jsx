import { makeStyles, Grid, Typography, useMediaQuery, useTheme, Box, Fab } from "@material-ui/core"
import { motion } from "framer-motion"
import Cv from "../components/home/cv"
import Work from "../components/home/work"
import Intro from "../components/home/intro"
import MadeWith from "../components/home/madeWith"
import { getLayout } from "../components/layout"
import { useGlobalStyle } from "../styles/global"

const Home = props => {
  const classes = useStyles()
  const globalClasses = useGlobalStyle()

  return (
    <>
      <div
        key="index"
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: -1000 }}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}>
        <section>
          <div className={globalClasses.container}>
            <Intro />
          </div>
        </section>
        <div className={globalClasses.gap} />
        <section>
          <div className={globalClasses.itemContainer}>
            <Cv />
          </div>
        </section>
        <div className={globalClasses.gap} />
        <section>
          <div className={globalClasses.itemContainer}>
            <Work />
          </div>
        </section>
        <div className={globalClasses.gap} />
        <section>
          <div className={globalClasses.itemContainer}>
            <MadeWith />
          </div>
        </section>
      </div>
    </>
  )
}

Home.getLayout = getLayout

export default Home

const useStyles = makeStyles(theme => ({
  "@global": {
    section: {
      minHeight: "100Vh",
    },
  },
}))

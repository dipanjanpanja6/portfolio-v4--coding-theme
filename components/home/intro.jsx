import { Typography, Grid, makeStyles } from "@material-ui/core"
import React from "react"
import clsx from "clsx"
import { useGlobalStyle } from "../../styles/global"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

function Intro() {
  //   const classes = useStyles()
  const globalClasses = useGlobalStyle()
  const [ref, isVisible] = useInView({ threshold: 0.7 })
  const variants = {
    visible: {
      opacity: 1,
      z: 0,
    },
    hidden: {
      opacity: 0,
      z: 100,
    },
  }
  return (
    <>
      <Typography variant="h2" component={motion.h1} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className={globalClasses.header}>
        dipanjan
        <span>.init()</span>
      </Typography>
      <Typography variant="h6" color="secondary" className={globalClasses.subtitle}>
        Dipanjan Panja
      </Typography>
      <Typography variant="h6" className={globalClasses.subtitle}>
        A fullstack developer, based
        <br /> in India.
      </Typography>
      <motion.div initial={{ x: -30, opacity: 0 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
        <Typography color="textSecondary" style={{ paddingBottom: "1rem" }}>
          // I specialize in developing and deploying
          <br /> responsive websites and web applications <br />
          {/* // Frequently praised as detail-oriented by my peers,
          <br /> I can be relied upon to help your
          <br /> company achieve its goals by providing
          <br /> sustainable and scalable solutions. */}
        </Typography>
      </motion.div>
    </>
  )
}

export default Intro

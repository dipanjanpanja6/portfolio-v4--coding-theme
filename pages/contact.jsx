import React, { useState } from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import { getLayout } from "../components/layout"
import { useGlobalStyle } from "../styles/global"
import { Button, Grid, Typography, makeStyles, TextField, Card, CardContent, CardActions, CircularProgress } from "@material-ui/core"
import Link from "next/link"
import { Close, Send } from "@material-ui/icons"

function Contact() {
  const classes = useStyles()
  const globalClasses = useGlobalStyle()
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const [state, set] = useState()
  const [loading, setLoading] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    set()
    setLoading(true)
    var data = new FormData(event.target)
    fetch("https://formspree.io/f/xzbyggkj", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then(response => {
        setLoading(false)
        console.log({ response })
        // form.reset()
        set("Thanks for your submission!")
      })
      .catch(error => {
        console.error({ error })
        setLoading(false)
        set("Oops! There was a problem submitting your form")
      })
  }
  const handleClear = () => {
    set()
  }
  return (
    <>
      <section>
        <div className={globalClasses.container}>
          <Typography variant="h2" className={globalClasses.header} component={motion.h1} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            contact()
          </Typography>
          <Typography color="textSecondary" style={{ paddingBottom: "1rem" }}>
            // Let's discuss your next project together.
          </Typography>

          <Grid className={classes.contactContainer} container direction="column" component="form" onSubmit={handleSubmit}>
            {state ? (
              <Card variant="outlined" style={{ backgroundColor: "transparent" }}>
                <CardContent>{state}</CardContent>
                <CardActions>
                  <Button color="secondary" onClick={handleClear} startIcon={<Close />}>
                    Close
                  </Button>
                </CardActions>
              </Card>
            ) : (
              <>
                <TextField required size="small" color="secondary" label="Your email" margin="normal" variant="outlined" type="email" name="_replyto" />

                <TextField required size="small" color="secondary" label="Your massage" margin="normal" variant="outlined" multiline rows={5} name="message"></TextField>

                <Button className={classes.button} variant="contained" color="secondary" type="submit" disabled={loading}>
                  {loading && <CircularProgress color="secondary" size={20} />} Send
                </Button>
              </>
            )}
          </Grid>
        </div>
      </section>
      <div className={globalClasses.gap} />
    </>
  )
}
Contact.getLayout = getLayout
export default Contact

const useStyles = makeStyles(theme => ({
  contactContainer: {
    maxWidth: 500,
  },
  button: {
    marginTop: 12,
  },
}))
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
}

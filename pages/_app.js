import "../styles/globals.css"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import { useEffect } from "react"
import theme from "../components/theme"
import PrimaryAppBar from "../components/appbar"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { AnimatePresence, AnimateSharedLayout } from "framer-motion"
import Aos from "aos"
import { logEvents } from "../lib/firebase"
import "aos/dist/aos.css"

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
    Aos.init()

    if (process.env.NODE_ENV === "production") {
      router.events.on("routeChangeComplete", data => logEvents(data))
      //For First Page
      logEvents({ url: router.pathname, direct_visit: true })

      //Remvove Event Listener after un-mount
      return () => {
        router.events.off("routeChangeComplete", data => logEvents(data))
      }
    }
  }, [])
  const getLayout = Component.getLayout || (children => <Layout>{children}</Layout>)

  return (
    <>
      <Seo>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Seo>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PrimaryAppBar />

        <AnimatePresence initial={false} exitBeforeEnter>
          <AnimateSharedLayout>{getLayout(<Component {...pageProps} />)}</AnimateSharedLayout>
        </AnimatePresence>
        <footer>
          <marquee variant="extended" color="secondary" onClick={() => window.scrollTo(0, 0)}>
            <div style={{ display: "flex", flexWrap: "nowrap", justifyContent: "space-around", flexDirection: "row" }}>
              <p>⇈ Back to the top ⇈</p>
              <p>You have reached the end!</p>
            </div>
          </marquee>
        </footer>
      </ThemeProvider>
    </>
  )
}

export default MyApp

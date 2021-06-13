import "../styles/globals.css"
import App from "next/app"
import { PageTransition } from "next-page-transitions"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import { useEffect } from "react"
import theme from "../components/theme"
import PrimaryAppBar from "../components/appbar"
import Seo from "../components/seo"
import Line from "../components/line"
import Layout from "../components/layout"

const Loader = () => (
  <div className="loader">
    <style jsx>{`
      .loader {
        border: 8px solid #f3f3f3; /* Light grey */
        border-top: 8px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 2s linear infinite;
        margin-left: auto;
        margin-right: auto;
        margin-top: 40px;
      }
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
)
const TIMEOUT = 400

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
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
        <PageTransition
          timeout={TIMEOUT}
          classNames="page-transition"
          loadingComponent={<Loader />}
          loadingDelay={400}
          loadingTimeout={{ enter: TIMEOUT, exit: 0 }}
          loadingClassNames="loading-indicator">
          {getLayout(<Component {...pageProps} />)}
        </PageTransition>
      </ThemeProvider>
      <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
          transform: translate3d(0, 20px, 0);
        }
        .page-transition-enter-active {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity ${TIMEOUT}ms;
        }
        .loading-indicator-appear,
        .loading-indicator-enter {
          opacity: 0;
        }
        .loading-indicator-appear-active,
        .loading-indicator-enter-active {
          opacity: 1;
          transition: opacity ${TIMEOUT}ms;
        }
      `}</style>
    </>
  )
}

// MyApp.getInitialProps = async appContext => {
//   const data = await getMenusForAppBar()

//   const appProps = await App.getInitialProps(appContext)
//   return {
//     primaryMenu: data?.primaryMenu?.nodes,
//     termsMenu: data?.termsMenu?.nodes,
//     companyMenu: data?.companyMenu?.nodes,
//     ...appProps,
//   }
// }

export default MyApp

// export function reportWebVitals(metric) {
//   console.log(metric)
// }

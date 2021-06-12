import { makeStyles, NoSsr, Typography, useMediaQuery, useTheme } from "@material-ui/core"
import { getLayout } from "../components/layout"
import { useGlobalStyle } from "../styles/global"

const Home = props => {
  const classes = useStyles()
  const globalClasses = useGlobalStyle()
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <>
      <section>
        <div className={globalClasses.container}>
          <Typography variant="h2" component="h1" className={globalClasses.header}>
            dipanjan
            <span>.init()</span>
          </Typography>
          <Typography variant="h6" color="secondary" style={{ paddingBottom: "1rem" }}>
            Dipanjan Panja
          </Typography>
          <Typography variant="h6" style={{ paddingBottom: "1rem" }}>
            A fullstack developer , based
            <br /> in India.
          </Typography>
          <Typography color="textSecondary" style={{ paddingBottom: "1rem" }}>
            // I specialize in developing and deploying
            <br /> responsive websites and web applications <br />
            // Frequently praised as detail-oriented by my peers,
            <br /> I can be relied upon to help your
            <br /> company achieve its goals by providing
            <br /> sustainable and scalable solutions.
          </Typography>
        </div>
      </section>
      <div className={globalClasses.gap} />
      <section>
        <div className={globalClasses.itemContainer}>
          <Typography variant="h2" component="h1" className={globalClasses.header}>
            {mobile ? "Curriculum. Vitae(" : "CurriculumVitae("}
            <span>'/.*$/g'</span>)
          </Typography>
        </div>
      </section>
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

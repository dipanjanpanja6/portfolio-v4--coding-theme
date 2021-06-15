import { useGlobalStyle } from "../styles/global"
import Typography from "@material-ui/core/Typography"
import { motion } from "framer-motion"

export default function Custom404() {
  const globalClasses = useGlobalStyle()

  return (
    <section>
      <div className={globalClasses.container}>
        <Typography variant="h2" className={globalClasses.header} component={motion.h1} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          404()
        </Typography>
        <Typography color="textSecondary" style={{ paddingBottom: "1rem" }}>
          // Page Not Found.
        </Typography>
      </div>
    </section>
  )
}

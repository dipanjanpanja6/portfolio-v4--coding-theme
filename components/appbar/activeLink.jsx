import { Typography } from "@material-ui/core"
import { useRouter } from "next/router"
import { motion } from "framer-motion"

function ActiveLink({ children, href, header, mobile, ...props }) {
  const router = useRouter()
  const navItem = {
    color: router.asPath === href ? "#69e2ff" : "white",
    padding: mobile ? "1rem 0" : "0 1rem 0 0 ",
  }
  if (mobile) {
    navItem.fontWeight = "bold"
  }

  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  if (header) {
    return (
      <Typography variant="h6" component="a" href={href} onClick={() => router.push("/")} style={{ color: "#69e2ff", fontWeight: "400" }}>
        {router.asPath.substr(1) == "" ? ".init()" : `.${router.asPath.substr(1)}()`}
      </Typography>
    )
  } else {
    return (
      <Typography component={motion.a} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} variant={mobile ? "h5" : "body1"} href={href} onClick={handleClick} style={navItem} {...props}>
        {children}
      </Typography>
    )
  }
}

export default ActiveLink

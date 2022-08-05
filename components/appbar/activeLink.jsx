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
      <Typography
        variant="h6"
        component={motion.h1}
        layoutId="page_title"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        /*onClick={() => router.push("/")}*/ style={{ color: "#69e2ff", fontWeight: "400" }}>
        {router.pathname.substring(1) == "" ? ".init()" : `.${router.pathname.substring(1)}()`}
      </Typography>
    )
  } else if (router.asPath !== href) {
    return (
      <Typography
        component={motion.a}
        layoutId="page_title"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        variant={mobile ? "h5" : "body1"}
        href={href}
        onClick={handleClick}
        style={navItem}
        {...props}>
        {children}
      </Typography>
    )
  } else {
    return <></>
  }
}

export default ActiveLink

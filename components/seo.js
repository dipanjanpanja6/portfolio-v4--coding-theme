import React from "react"
import Head from "next/head"
import SEO from "../next-seo.config"

const Seo = ({ title = ``, description = ``, pathname = ``, image = ``, children = null }) => {
  const { siteTitle, siteTitleAlt: defaultTitle, siteUrl, siteDescription: defaultDescription, siteLanguage, siteImage: defaultImage, author } = SEO

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: `${image || siteUrl + defaultImage}`,
  }
  return (
    <Head>
      <title>{title ? `${title} | ${siteTitle}` : defaultTitle}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="keywords" content="Geogo, Blog, Course, Event, Scout, ScoutLive, Class" />

      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta property="og:image:alt" content={seo.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.description} />
      <meta name="twitter:creator" content={author} />

      <meta name="Owner" content={author} />
      <meta name="Copyright" content="Geogo Techsolutions Pvt Ltd."></meta>
      <meta name="classification" content="Education"></meta>
      <meta name="distribution" content="India"></meta>
      <meta name="rating" content="General"></meta>
      <meta name="audience" content="All" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff"></meta>
      {children}
    </Head>
  )
}

export default Seo

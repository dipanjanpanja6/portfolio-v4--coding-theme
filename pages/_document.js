import Document, { Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheets } from "@material-ui/core/styles"
import React from "react"
import seo from "../next-seo.config"
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content={seo.siteTitle} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content={seo.siteTitle} />
          <meta name="description" content={seo.siteDescription} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#00b0ff" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/icons/favicon.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <script type="text/javascript" src="/sw.js" />
          <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i,500,700,700i|Montserrat:700&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  }
}

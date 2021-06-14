import Document, { Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheets } from "@material-ui/core/styles"
import React from "react"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link rel="manifest" href="/favicon/manifest.json" /> */}
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
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

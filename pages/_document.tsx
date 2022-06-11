// https://nextjs.org/docs/advanced-features/custom-document
import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* favicon */}
          {/* wbFont */}
          {/* stylesheet */}
          {/* script */}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* podemos addicionar componentes adicionales ¿¿ no es muy comun */}
        </body>
      </Html>
    )
  }
}

export default MyDocument
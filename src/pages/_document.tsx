import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang="ar">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Poppins:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;

import { Html, Head, Main, NextScript } from 'next/document';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';


const metaData = {
  title: 'Lexim Global',
  description: 'Excellence in Web Technology',
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description}/>
        <meta name="og:title" content={metaData.title}/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

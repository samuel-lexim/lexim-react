import {Inter} from 'next/font/google';
const inter = Inter({subsets: ['latin']})

// CSS
import '@/styles/global.scss';
import '@/styles/CustomGlobal.css'; // custom css

import Head from "next/head";

const metadata = {
  title: 'Lexim Global',
  description: 'Excellence in Web Technology',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <Head>
      <link rel="icon" href="/images/logo.svg"/>
      <meta
        name="description"
        content={metadata.description}
      />
      <meta name="og:title" content={metadata.title}/>
      <meta name="twitter:card" content="summary_large_image"/>
      <title>{metadata.title}</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </Head>

    <body className={inter.className}>{children}</body>
    </html>
  )
}

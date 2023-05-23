// import '@/styles/animate.min.css';
import '@/styles/global.module.scss';
import '@/styles/CustomGlobal.css';
import Head from "next/head";

const metaData = {
  title: 'Lexim Global',
  description: 'Excellence in Web Technology',
};

export default function App({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description}/>
        <meta name="og:title" content={metaData.title}/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

import Head from "next/head";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// import '@/styles/animate.min.css';
import '@/styles/global.module.scss';
import '@/styles/CustomGlobal.css';

const metaData = {
  title: 'Lexim Global',
  description: 'Excellence in Web Technology',
};

export default function App({Component, pageProps}) {
  // START - add className to body
  const router = useRouter();
  let slug = router.asPath.substring(1).replace('/', ''); // Extract the slug from the current page's URL
  if(slug === '') {
    slug = 'home';
  }
  useEffect(() => {
    document.body.classList.add(slug); // Add the slug as a class to the body tag
    return () => {
      document.body.classList.remove(slug); // Remove the class when the component unmounts
    };
  }, [slug]);
  // END - add className to body


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

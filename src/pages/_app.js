import Head from "next/head";
import {useRouter} from 'next/router';
import {useEffect} from 'react';

import '@/styles/global.module.scss';
import '@/styles/CustomGlobal.css';

const metaData = {
  title: 'Lexim Global',
  description: 'Excellence in Web Technology',
};

export default function App({Component, pageProps}) {
  // START - add className to body
  const router = useRouter();

  // Extract the slug from the current page's URL
  let slug = router.asPath.substring(1).replace('/', '');
  if (slug === '') {
    slug = 'home';
  }
  slug = slug.replace(/#/g, ''); // remove #

  useEffect(() => {
    window.scrollTo(0, 0);

    // Add the slug as a class to the body tag
    if (slug) {
      document.body.classList.add(slug);
    }
    return () => {
      // Remove the class when the component unmounts
      if (slug) {
        document.body.classList.remove(slug);
      }
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

        <link rel="icon" href="/favicon.svg"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

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
  // User Agent
  const userAgent = typeof window !== 'undefined' ? window.navigator.userAgent : '';
  const isMobile = /Mobi|Android/i.test(userAgent);
  const isSafari = /Safari/i.test(userAgent) && !/Chrome|CriOS|FxiOS|Edg|EdgA|EdgiOS/i.test(userAgent);
  const isFirefox = /Firefox/i.test(userAgent);
  const isChrome = /Chrome|CriOS/i.test(userAgent);
  const bodyClasses = [isMobile ? 'mobile' : 'desktop'];
  if (isSafari) {
    bodyClasses.push('safari');
  } else if (isFirefox) {
    bodyClasses.push('firefox');
  } else if (isChrome) {
    bodyClasses.push('chrome');
  }

  // START - add className to body
  const router = useRouter();

  // Extract the slug from the current page's URL
  let slug = router.asPath.substring(1).replace('/', '');
  if (slug === '') {
    slug = 'home';
  }
  slug = slug.replace(/#/g, ''); // remove #

  useEffect(() => {
    // Add the slug and user agent classes to the body tag
    if (slug) {
      document.body.classList.add(slug);
    }
    if (bodyClasses.length > 0) {
      document.body.classList.add(...bodyClasses);
      console.log(window.navigator.userAgent + " === " + bodyClasses);
      alert(window.navigator.userAgent + " === " + bodyClasses);
    }

    return () => {
      // Remove the classes when the component unmounts
      if (slug) {
        document.body.classList.remove(slug);
      }
      if (bodyClasses.length > 0) {
        document.body.classList.remove(...bodyClasses);
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

        {/* Add the license script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-3.0
// [Your script content goes here]
// @license-end`,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

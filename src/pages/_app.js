// pages/_app.js
import '@/styles/global.scss';
import Layout from '@/app/layout';

export default function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
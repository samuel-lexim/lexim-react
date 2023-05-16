import { Head } from 'next/document';

const metaData = {
  title: 'Lexim Global',
  description: 'Excellence in Web Technology',
};

export default function CustomHead() {
  return (
    <Head>
      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description}/>
      <meta name="og:title" content={metaData.title}/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="icon" href="/favicon.ico"/>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </Head>
  );
}
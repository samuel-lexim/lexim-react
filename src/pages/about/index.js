import Layout from "@/components/layout";
import AboutData from '@/data/About';
import styles from '@/styles/pageAbout.module.scss'
import page from '@/styles/page.module.scss';

export default function About() {
  const aboutItems = [];

  for (let i = 0; i < AboutData.length; i++) {
    const item = AboutData[i];
    aboutItems.push(
      <section className={page.sectionScroll}>
        <h2 className={styles.title}>{item.title}</h2>
        <div className={styles.content}>{item.content}</div>
      </section>
    );
  }

  return (
    <Layout>

      <div className={'pageTitle'}>
        <span>ABOUT</span>
      </div>

      {/* About List */}
      {aboutItems}
      {/*{AboutData.map((item) => {*/}
      {/*  return (*/}
      {/*    <section className={page.sectionScroll}>*/}
      {/*      <h2 className={styles.title}>{item.title}</h2>*/}
      {/*      <div className={styles.content}>{item.content}</div>*/}
      {/*    </section>*/}
      {/*  );*/}
      {/*})}*/}

    </Layout>
  )
}



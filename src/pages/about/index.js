import Layout from "@/components/layout";
import AboutData from '@/data/About';
import styles from '@/styles/pageAbout.module.scss'
import page from '@/styles/page.module.scss';

export default function About() {
  return (
    <Layout>

      <div className={'pageTitle'}>
        <span>ABOUT</span>
      </div>

      {/* About List */}
      {AboutData.map((item, index) => {
        return (
          <section className={page.sectionScroll} data-key={index}>
            <h2 className={styles.title}>{item.title}</h2>
            <div className={styles.content}>{item.content}</div>
          </section>
        );
      })}

    </Layout>
  )
}



import {useRouter} from 'next/router';
import Layout from '@/components/layout';
import CaseStudiesData from "@/data/CaseStudies";
import Footer from "@/components/footer";
import page from "@/styles/page.module.scss";
import styles from '@/styles/pageCaseStudies.module.scss';

export default function ArticlePage() {
  const router = useRouter();
  const {slug} = router.query;

  // Find the article based on the slug
  const article = CaseStudiesData.find((article) => article.slug === slug);

  return (
    <Layout className='pageCaseStudies pageCaseStudiesSlug'>
      <div className={`${page.pageTitle} _title`}>
        <span>CASE STUDIES</span>
      </div>

      <div className={`${styles.caseStudiesWrap}`}>

        <div className={styles.caseArticle}>
          {article && (
            <>
              <h1 className={`${styles.articleTitle} FontSui`}>{article.title}</h1>

              <div className={styles.property}>
                <div className={styles.leftHeading}><h2>Overview</h2></div>
                <div className={styles.rightContent}
                     dangerouslySetInnerHTML={{__html: article.overview}}></div>
              </div>

              <div className={styles.property}>
                <div className={styles.leftHeading}><h2>Challenge</h2></div>
                <div className={styles.rightContent}
                     dangerouslySetInnerHTML={{__html: article.challenge}}></div>
              </div>

              <div className={styles.property}>
                <div className={styles.leftHeading}><h2>Process</h2></div>
                <div className={styles.rightContent}
                     dangerouslySetInnerHTML={{__html: article.process}}></div>
              </div>

            </>
          )}
        </div>

      </div>

      <Footer/>

    </Layout>
  );
}
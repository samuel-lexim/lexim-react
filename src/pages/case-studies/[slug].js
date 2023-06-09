import {useRouter} from 'next/router';
import Layout from '@/components/layout';
import CaseStudiesData from "@/data/CaseStudies";
import Footer from "@/components/footer";
import Link from 'next/link';
import PageTitle from "@/components/PageTitle";

import page from "@/styles/page.module.scss";
import styles from '@/styles/pageCaseStudies.module.scss';

export default function ArticlePage() {
  const router = useRouter();
  const {slug} = router.query;

  // Find the article based on the slug
  const article = CaseStudiesData.find((article) => article.slug === slug);

  return (
    <Layout className='pageCaseStudies pageCaseStudiesSlug'>
      <PageTitle title='CASE STUDIES' />

      <div className={`${styles.caseStudiesWrap} ${page.pageWrapLeft}`}>

        <div className={`${styles.caseArticle} ${page.pageWrapTop}`}>
          {article && (
            <>
              <h1 className={`${styles.articleTitle} FontSui s46_120`}>{article.title}</h1>

              {article.overview !== '' &&
                <div className={styles.property}>
                  <div className={styles.leftHeading}><h2 className='s24_30'>Overview</h2></div>
                  <div className={styles.rightContent}
                       dangerouslySetInnerHTML={{__html: article.overview}}></div>
                </div>
              }

              {article.challenge !== '' &&
                <div className={styles.property}>
                  <div className={styles.leftHeading}><h2 className='s24_30'>Challenge</h2></div>
                  <div className={styles.rightContent}
                       dangerouslySetInnerHTML={{__html: article.challenge}}></div>
                </div>
              }

              {article.process !== '' &&
                <div className={styles.property}>
                  <div className={styles.leftHeading}><h2 className='s24_30'>Process</h2></div>
                  <div className={styles.rightContent}
                       dangerouslySetInnerHTML={{__html: article.process}}></div>
                </div>
              }

            </>
          )}

          <div className={styles.backLink}>
            <Link href='/case-studies' scroll={true}>
              <div className={styles.backLinkInner}>
                <svg width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.29289 7.2929C-0.0976334 7.68342 -0.0976333 8.31659 0.292891 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07106 0.928935C7.68054 0.538411 7.04738 0.538411 6.65685 0.928936L0.29289 7.2929ZM31 7L0.999998 7L0.999998 9L31 9L31 7Z"
                    fill="black"/>
                </svg>
                <span className='s26_42 fw-400'>Back</span>
              </div>
            </Link>
          </div>

        </div>

      </div>

      <Footer/>

    </Layout>
  );
}
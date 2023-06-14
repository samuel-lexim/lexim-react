import Layout from "@/components/layout";
import ArticleList from "@/components/ArticleList";
import Footer from "@/components/footer";

import page from '@/styles/page.module.scss';
import styles from '@/styles/pageCaseStudies.module.scss';
import CaseStudiesData from "@/data/CaseStudies";

export default function CaseStudies() {
  const lastItemIndex = CaseStudiesData.length - 1;

  return (
    <Layout className='pageCaseStudies'>

      <div className={`${page.pageTitle} _title`}>
        <span>CASE STUDIES</span>
      </div>

      <div className={`${styles.caseStudiesWrap} ${page.pageWrap}`}>
        <section className={`${styles.caseSection}`}>
          {CaseStudiesData.map((article, index) => (
            <ArticleList
              key={article.slug}
              title={article.title}
              subHeading={article.subHeading}
              link={`/case-studies/${article.slug}`}
              isFirst={index === 0}
              isLast={index === lastItemIndex}/>
          ))}
        </section>
      </div>

      <Footer/>

    </Layout>
  )
}



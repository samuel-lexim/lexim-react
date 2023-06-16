import Layout from "@/components/layout";
import Accordion from "@/components/Accordion";
import Footer from "@/components/footer";
import PageTitle from "@/components/PageTitle";

import page from '@/styles/page.module.scss';
import styles from '@/styles/pagePartnerships.module.scss';
import partnerData from '@/data/Partnership';

export default function Partnerships() {

  return (
    <Layout className='pagePartnerships'>

      <PageTitle title='PARTNERSHIPS' />

      <div id='fullPage'>

        <div className={`${styles.partnerSection} ${page.pageWrapLeft}`}>
          <div className={`${styles.innerSection} ${page.pageWrapTop}`}>

            <div className={styles.blackLine}></div>

            <Accordion data={partnerData} />

            <div className={styles.blackLine}></div>
            <div className={styles.blackLine}></div>


          </div>
        </div>

        <Footer/>

      </div>

    </Layout>
  )
}



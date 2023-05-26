import Layout from "@/components/layout";
import GreenAccordion from "@/components/GreenAccordion";
import Footer from "@/components/footer";

import page from '@/styles/page.module.scss';
import styles from '@/styles/pageTechnology.module.scss';

export default function Technology() {

  return (
    <Layout className='pageTechnology'>

      <div className={`${page.pageTitle} _title`}>
        <span>TECHNOLOGY</span>
      </div>

      <div id='fullPage'>

        <div className={`${styles.technologySection} ${page.pageWrap}`}>
          <div className={styles.innerSection}>

            <div className={styles.blackLine}></div>

            <GreenAccordion title="CORE COMPETENCIES" showContent={false} useArrow={false} />

            <GreenAccordion prefixTitle='01.' title="PLATFORMS" layout='columnContent'>
              <div>
                <p>Windows</p>
                <p>Android</p>
                <p>iOS</p>
                <p>Linux</p>
              </div>
            </GreenAccordion>

            <GreenAccordion prefixTitle='02.' title="CLOUD" layout='columnContent'>
              <p>AWS</p>
              <p>Google Cloud</p>
              <p>Azure</p>
            </GreenAccordion>

            <GreenAccordion prefixTitle='03.' title="CONTINUOUS DELIVERY SOLUTIONS">
              <p>CI & CD Pipeline Construction</p>
              <p>Release Management Workflow setup</p>
              <p>Test Automation Integration</p>
              <p>Code Quality Control</p>
              <p>Search</p>
            </GreenAccordion>

            <GreenAccordion prefixTitle='04.' title="DEVOPS MONITORING SOLUTIONS">
              <p>Monitor Performance</p>
              <p>Optimize Infrastructure</p>
              <p>Notify of issues</p>
            </GreenAccordion>

            <GreenAccordion prefixTitle='05.' title="MICROSERVICES AND SERVERLESS COMPUTING">
              <p>Developing Microservices Architecture</p>
              <p>Code Refactoring</p>
              <p>Container Orchestration</p>
              <p>Cloud Native Development</p>
              <p>Automated Programmable Infrastructure</p>
              <p>Consolidate Hardware Resources</p>
            </GreenAccordion>

            <GreenAccordion title="SYSTEMS INTEGRATION" useArrow={false}>
            </GreenAccordion>

            <div className={styles.blackLine}></div>

          </div>
        </div>

        <Footer/>

      </div>

    </Layout>
  )
}


